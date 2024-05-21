import { useSelector } from "react-redux";

export default function PriceDetails() {
    const { cart } = useSelector(state => state.cart);

    console.log(cart);
    const cartTotal = cart?.reduce((acc, curr) => {
        acc += (curr.variant.price * curr.quantity)
        return acc
    }, 0)
    console.log(cartTotal, "cartTotal");
    return (
        <>
            <div className="price-details">
                <div className="checkout-details">
                    <div className="heading">Price Details</div>
                    <div className="item-price-details">
                        <div className="item-price">
                            <div className="items">Pice ({cart?.length} Items)</div>
                            <div className="price">{cartTotal}</div>
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
                        <div className="total-price">{cartTotal}</div>
                    </div>
                </div>
                <div className="checkout-button">
                    <button className="button">
                        Place Order
                    </button>
                </div>
            </div>
        </>
    )
}
