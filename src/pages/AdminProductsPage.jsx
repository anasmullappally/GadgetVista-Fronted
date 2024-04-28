/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { BsEye, BsFillPencilFill } from "react-icons/bs";
import AddProduct from "../components/modal/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import ToolTip from "../components/common/ToolTip";
import moment from "moment";

function AdminProductsPage() {
    const productListingRef = useRef(null);
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products);
    const [overflowing, setOverflowing] = useState(false)
    const [addProductModal, setAddProductModal] = useState(false)


    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const container = productListingRef.current;
        if (container) {
            console.log(container.scrollHeight, container.clientHeight, container.scrollHeight > container.clientHeight);
            const isOverflowing = container.scrollHeight > container.clientHeight;
            setOverflowing(isOverflowing)
        }
    }, [products]);

    return (
        <>
            <div className="admin-products">
                <div className="header">
                    <div className="title">Products</div>
                    <div className="add-button">
                        <button type="button" className="button" onClick={() => setAddProductModal(!addProductModal)}>
                            <span className="button__text">Add Product</span>
                            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    </div>
                </div>
                <div className="product-listing" >
                    <div className={`product-listing-head product-grid ${overflowing ? "product-list-overflow" : ""}`}>
                        <div className="heading">SL No</div>
                        <div className="heading">Name</div>
                        <div className="heading">Brand</div>
                        <div className="heading">Variants</div>
                        <div className="heading">Status</div>
                        <div className="heading">Actions</div>
                    </div>
                    <div className="product-listing-container mt-2" ref={productListingRef}>
                        {products.map((item, index) => (
                            <div className="single-product product-grid" key={item._id}>
                                <div className="values">{index + 1}</div>
                                <div className="values">{item.name}</div>
                                <div className="values capitalize">{item.brand.name}</div>
                                <div className="values">{item.variants.length}</div>
                                <div className="values">
                                    {item.isVisible ?
                                        <ToolTip content={"Released"} tooltipMessage={`Released on ${moment(item.releaseDate).format("MMM Do, YYYY")}`} /> :
                                        <ToolTip content={"Not released"} tooltipMessage={`Scheduled for ${moment(item.releaseDate).format("MMM Do, YYYY")}`} />
                                    }
                                </div>
                                <div className="values flex flex-row"><BsFillPencilFill className="mr-3 pointer" /><BsEye className="pointer" /></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {addProductModal && <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden"
            >
                <AddProduct setAddProductModal={setAddProductModal} />
            </div>}
        </>
    )
}

export default AdminProductsPage