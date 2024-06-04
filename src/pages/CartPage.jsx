import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/common/Footer"
import PriceDetails from "../components/cart/PriceDetails";
import CartProduct from "../components/cart/CartProduct";
import { useEffect } from "react";
import { fetchCart } from "../redux/actions/cartAction";

function CartPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchCart())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="cart-wrapper">
            <div className="paths pl-5 ">
                <span className="mr-3 cursor-pointer" >{"Home >"}</span>
                <span>Cart</span>
            </div>
            {cart.length > 0 ? <div className="cart-container">
                <div className="checkout-product-wrapper p-3">
                    {cart.map((item) => (
                        <CartProduct item={item} key={item?.variant?._id} />
                    ))}
                </div>
                <PriceDetails cart={cart} />
            </div> :
                <div className="empty-cart">


                </div>
            }
            <Footer />
        </div>
    )
}

export default CartPage