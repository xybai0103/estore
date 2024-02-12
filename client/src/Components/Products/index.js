import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../Redux/Product/productSlice';
import './_products.scss';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/actions';

const Products = () => {
    const productData = useSelector(state => state.pr.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    return(
        <div className='products-container'>
            {
                productData.map((product, key)=>{
                    return (
                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/images/shop/'+product.product_img)}/>
                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.product_name}</a></h5>
                                <p className='product-price'>{product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Products;