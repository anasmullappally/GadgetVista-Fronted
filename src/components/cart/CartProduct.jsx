import { useDispatch } from "react-redux";
import { removeFromCart, updateItemQuantity } from "../../redux/actions/cartAction";

/* eslint-disable react/prop-types */
export default function CartProduct({ item }) {
    const dispatch = useDispatch();


    const handleQuantity = (cartId, type) => {
        if (item.quantity <= 1 && type === "decrement") {
            return alert("you can not remove")
        }
        dispatch(updateItemQuantity(cartId, type));
        ///alert: TODO:
    };

    const handleDelete = (cartId) => {
        dispatch(removeFromCart(cartId));
    }
    if (!item) return null
    return (
        <div className="single-product">
            <div className="image-and-count">
                <div className="image">
                    <img src={item?.variant?.images[0]?.url} alt="product-image" />
                </div>
                <div className="count">
                    <button className="increment pointer" onClick={() => handleQuantity(item._id, "increment")}>+</button>
                    <div className="count p-2">{item?.quantity}</div>
                    <button className="decrement pointer" onClick={() => handleQuantity(item._id, "decrement")}>-</button>
                </div>
            </div>
            <div className="product-details-and-remove">
                <div className="product-details">
                    <div className="product-name mb-1">{item?.product?.name}</div>
                    <div className="product-name mb-1">{`${item?.variant?.ram} / ${item?.variant?.rom} GB`}</div>
                    <div className="product-rate mb-1">{item?.variant?.price}</div>
                    {/* <div className="seller-name">Seller Name</div> */}

                </div>
                <div className="remove">
                    <button className="button" onClick={() => handleDelete(item._id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
