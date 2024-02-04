import { useSelector } from 'react-redux';
import accordianSlice from '../../store/slices/accordionCatSlice';
import './_side-nav.scss';

const SideNav = () => {
    const accordianData = useSelector (accordianSlice.getInitialState);

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>

            <div className='accordion'>
                {
                    accordianData.map((accordianCategory, key) => {
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
                                                accordianCategory.items.map((item) => {
                                                    return(
                                                        <li className='sub-items'><a href='#'>{item}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SideNav;