import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/common/Footer"
import PriceDetails from "../components/cart/PriceDetails";
import CartProduct from "../components/cart/CartProduct";
import { useEffect } from "react";
import { fetchCart } from "../redux/actions/cartAction";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function CartPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const navigate = useNavigate()

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
                <div className="empty-cart w-full h-1/2 flex-col  text-center items-center justify-center pt-10">

                    <CiShoppingCart className="inline" size={40} />
                    <div className="pt-3 font-bold text-xl">Your Cart is Empty</div>
                    <div className="pt-3">Add something to make me happy :)</div>
                    <div className="pt-3">Go to <span onClick={() => navigate("/shop")} className="text-blue-700 underline cursor-pointer text-lg">shopping</span></div>
                </div>
            }
            <Footer />
        </div>
    )
}

export default CartPage