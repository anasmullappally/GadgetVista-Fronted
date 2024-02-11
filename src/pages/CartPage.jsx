import Footer from "../components/common/Footer"

function CartPage() {
    const arr = [1, 2, 6]
    return (
        <div className="cart-wrapper">
            <div className="paths pl-5 ">
                <span className="mr-3 cursor-pointer" >{"Home >"}</span>
                <span>Cart</span>
            </div>
            <div className="cart-container">
                <div className="checkout-product-wrapper p-3">
                    {arr.map((item) => (
                        <div className="single-product" key={item}>
                            <div className="image-and-count">
                                <div className="image">
                                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018684/Croma%20Assets/Communication/Mobiles/Images/300652_0_ndr3y9.png" alt="product-image" />
                                </div>
                                <div className="count">
                                    <button className="increment pointer">+</button>
                                    <div className="count p-2">10</div>
                                    <button className="decrement pointer">-</button>
                                </div>
                            </div>
                            <div className="product-details-and-remove">
                                <div className="product-details">
                                    <div className="product-name mb-1">Product Name</div>
                                    <div className="product-name mb-1">Variant 8Gb</div>
                                    <div className="product-rate mb-1">15000</div>
                                    <div className="seller-name">Seller Name</div>

                                </div>
                                <div className="remove">
                                    <button className="button">Remove</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="price-details">
                    <div className="checkout-details">
                        <div className="heading">Price Details</div>
                        <div className="item-price-details">
                            <div className="item-price">
                                <div className="items">Pice (4 Items)</div>
                                <div className="price">15000</div>
                            </div>
                            <div className="item-price">
                                <div className="items">Coupon Offer</div>
                                <div className="price">100</div>
                            </div>
                            <div className="item-price delivery-charge">
                                <div className="items">Delivery Charges</div>
                                <div className="price">
                                    <span className="mr-4 line-through">49</span>
                                    <span className="delivery-free">Free</span>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <div className="total-heading">Total</div>
                            <div className="total-price">15100</div>
                        </div>
                    </div>
                    <div className="checkout-button">
                        <button className="button">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage