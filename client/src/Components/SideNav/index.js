import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './_side-nav.scss';
import { getCategories } from '../../Redux/Category/actions';
import { filterProducts } from '../../Redux/Product/productSlice';

const SideNav = () => {
    const accordianData = useSelector (state => state.categoryReducer.categories);
    const fetchedProductData = useSelector(state=>state.pr);
    const [products,setProducts] = useState();
    const dispatch = useDispatch ();

    useEffect(()=>{
        dispatch(getCategories())
    },[]);

    useEffect(()=>{
        setProducts(fetchedProductData.products);
        //when status changes from idle to success, the setter method called.
    },[fetchedProductData.status])

    const filterData = (selectedCategory)=>{
        const payload = {selectedCategory,products};
        dispatch(filterProducts(payload));
    }

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>

            <div className='accordion'>
                {
                    accordianData.map((accordianCategory, key) => {
                        if (accordianCategory.parent_category_id === null){
                            return(
                                <div className='accordion-item individual-category'>
                                    <div className='accordion-header'>
                                        <button className='accordion-button' data-bs-target={'#collapse'+key} data-bs-toggle='collapse'>
                                            <div className='category-title'>
                                                <a href='#'>{accordianCategory.category}</a>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='accordion-collapse collapse show' id={'collapse'+key}>
                                        <div className='accordion-body'>
                                            <ul>
                                                {
                                                    accordianData.map((subCategory) => {
                                                        if(accordianCategory.id === subCategory.parent_category_id){
                                                            return<li className='sub-items'>
                                                                    <a href='#' onClick={()=>filterData(subCategory)}>{subCategory.category}</a>
                                                                  </li>
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default SideNav;