import { useSelector } from "react-redux";
import Footer from "../components/common/Footer"
import PriceDetails from "../components/cart/PriceDetails";
import CartProduct from "../components/cart/CartProduct";

function CartPage() {
    const { cart } = useSelector(state => state.cart);

    return (
        <div className="cart-wrapper">
            <div className="paths pl-5 ">
                <span className="mr-3 cursor-pointer" >{"Home >"}</span>
                <span>Cart</span>
            </div>
            <div className="cart-container">
                <div className="checkout-product-wrapper p-3">
                    {cart.map((item) => (
                        <CartProduct item={item} key={item?.variant?._id} />
                    ))}
                </div>
                <PriceDetails />
            </div>
            <Footer />
        </div>
    )
}

export default CartPage