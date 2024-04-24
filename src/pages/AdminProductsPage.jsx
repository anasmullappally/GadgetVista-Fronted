import { useEffect, useRef, useState } from "react";
import { products } from "../data/dummy"
import { BsEye, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdminProductsPage() {
    const navigate = useNavigate()
    const productListingRef = useRef(null);
    const [overflowing, setOverflowing] = useState(false)
    useEffect(() => {
        const container = productListingRef.current;
        if (container) {
            const isOverflowing = container.scrollHeight > container.clientHeight;
            setOverflowing(isOverflowing)
        }
    }, [products]);

    return (
        <div className="admin-products">
            <div className="header">
                <div className="title">Products</div>
                <div className="add-button">
                    <button type="button" className="button" onClick={()=>navigate("/add-product")}>
                        <span className="button__text">Add Product</span>
                        <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button>
                </div>
            </div>
            <div className="product-listing" ref={productListingRef}>
                <div className={`product-listing-head product-grid ${overflowing ? "product-list-overflow" : ""}`}>
                    <div className="heading">SL No</div>
                    <div className="heading">Name</div>
                    <div className="heading">Quantity(Available)</div>
                    <div className="heading">Price</div>
                    <div className="heading">Marketplace</div>
                    <div className="heading">Actions</div>
                </div>
                <div className="product-listing-container mt-2">
                    {products.map((item) => (
                        <div className="single-product product-grid" key={item.id}>
                            <div className="values">{item.id}</div>
                            <div className="values">{item.name + item.name}</div>
                            <div className="values">{item.quantity}</div>
                            <div className="values">{item.price}</div>
                            <div className="values">{item.marketplace}</div>
                            <div className="values flex flex-row"><BsFillPencilFill className="mr-3 pointer"/><BsEye className="pointer" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminProductsPage