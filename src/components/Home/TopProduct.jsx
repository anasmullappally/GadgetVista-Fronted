/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVariant } from "../../redux/actions/productAction";
import { FaStar } from "react-icons/fa"
import { addToCart } from "../../redux/actions/cartAction";

const TopProduct = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedVariant(data._id))

        navigate(`/shop/${data.product._id}`)
    }

    const handleAddItem = (product) => {
       dispatch(addToCart(product, 1));
        // console.log(product, "pro");
        // console.log(data, "data");
        ///alert: TODO:
    };

    return (
        <div className="card">
            <div className="image-container">
                <div className="image-container">
                    <img src={data?.images[0].url} alt="Product Image" className="product-image" />
                </div>
                <div className="price">&#x20B9; {data?.price}</div>
            </div>
            <label className="favorite">
                <input defaultChecked={true} type="checkbox" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                    <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                </svg>
            </label>

            <div className="content">
                <div className="brand uppercase">{data?.brand?.name}</div>
                <div className="product-name">{`${data?.product?.name} (${data?.color}, ${data?.rom} GB) (${data?.ram} GB)`}</div>
                {/* <div className="color-size-container">
                    <div className="colors">
                        Color
                        <ul className="colors-container">
                            <li className="color"><a href="#"></a> <span className="color-name">Collegiate Gold</span></li>
                            <li className="color active"><a href="#"></a><span className="color-name">Team Navy</span></li>
                            <li className="color"><a href="#"></a><span className="color-name">Pulse Blue</span></li>
                            <li className="color"><a href="#"></a><span className="color-name">Pink Fusion</span></li>
                            +2
                        </ul>
                    </div>
                    <div className="sizes">
                        Size
                        <ul className="size-container">
                            <li className="size">
                                <label className="size-radio">
                                    <input name="size" value="xs" type="radio" />
                                    <span className="name">XS</span>
                                </label>
                            </li>
                            <li className="size">
                                <label className="size-radio">
                                    <input checked="" name="size" value="s" type="radio" />
                                    <span className="name">S</span>
                                </label>
                            </li>
                            <li className="size">
                                <label className="size-radio">
                                    <input name="size" value="m" type="radio" />
                                    <span className="name">M</span>
                                </label>
                            </li>
                            <li className="size">
                                <label className="size-radio">
                                    <input name="size" value="l" type="radio" />
                                    <span className="name">L</span>
                                </label>
                            </li>
                            <li className="size">
                                <label className="size-radio">
                                    <input name="size" value="xl" type="radio" />
                                    <span className="name">XL</span>
                                </label>
                            </li>

                        </ul>
                    </div>
                </div> */}
                <div className="rating">
                    {[...Array(5)].map((_, ind) => (
                        <label htmlFor="rating" key={ind} >
                            <input className="hidden" type="radio" name="rating" value={""} />
                            <FaStar size={15} className="star p-0 m-0" color={ind + 1 <= data?.product?.ratings?.overallRating ? "#ffc107" : "#e4e5e9"} />
                        </label>
                    ))}
                    ({data?.product?.ratings?.numberOfRatings})
                </div>
            </div>

            <div className="button-container">
                <button className="buy-button button" onClick={handleClick}>Buy Now</button>
                <button className="cart-button button" onClick={() => handleAddItem(data)}>
                    {/* cart */}
                    <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default TopProduct;
