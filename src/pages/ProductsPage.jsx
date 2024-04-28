import { useDispatch, useSelector } from "react-redux";
import TopProduct from "../components/Home/TopProduct";
import Loading from "../components/loadings/Loading";
import { fetchVariants } from "../redux/actions/productAction";
import { useEffect } from "react";

const ProductsPage = () => {
    // variants
    const dispatch = useDispatch()
    const { variants, variantsLoading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchVariants())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="products-container-all">
            <div className="product-filter-header ">
                <div className="sort-by">sort by</div>
                {/* put active */}
                <div className={`popularity pointer sort `}>Popularity</div>
                <div className={`price-low-to-high pointer sort `}>Price Low --- High</div>
                <div className="price-hight-to-low pointer sort">Price High --- Low</div>
                <div className="newest pointer sort">Newest First</div>
            </div>
            <div className="products-listing-wrapper">
                <div className="filter">
                    <div className="reset-apply">
                        <div className="reset">Reset</div>
                        <div className="apply">Apply</div>
                    </div>
                    <div className="filters">
                        <div className="categories filters-div">
                            <div className="heading">Categories</div>
                            <div className="list">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>

                            </div>
                        </div>
                        <div className="brands filters-div">
                            <div className="heading">Brands</div>
                            <div className="list">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                            </div>
                        </div>
                        <div className="prices-between filters-div">
                            <div className="heading">Choose Price</div>

                        </div>
                        <div className="ram filters-div">
                            <div className="heading">Ram</div>
                            <div className="list">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                            </div>
                        </div>
                        <div className="storage filters-div">
                            <div className="heading">Storage</div>
                            <div className="list">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                    Check me
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="products-container">
                    {variantsLoading ?
                        <Loading /> :
                        <>
                            {variants?.map((variant) => (<TopProduct data={variant} key={variant._id} />))}
                            {variants?.map((variant) => (<TopProduct data={variant} key={variant._id} />))}
                            {variants?.map((variant) => (<TopProduct data={variant} key={variant._id} />))}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
