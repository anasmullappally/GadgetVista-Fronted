import ReactImageGallery from "react-image-gallery"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDetails, resetSelectedVariant, setSelectedVariant } from "../redux/actions/productAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loadings/Loading";
import parse from 'html-react-parser';

function SingleProduct() {
    const dispatch = useDispatch()
    const { product, reviews, productLoading, selectedVariant } = useSelector(state => state.products);
    const { productId } = useParams();
    // console.log(variantId);

    useEffect(() => {
        dispatch(getSingleProductDetails(productId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            dispatch(resetSelectedVariant())
            // dispatch(resetSelectedProduct())
        }
    }, [])
        ;

    const [selectedProduct, setSelectedProduct] = useState(product?.variants?.find((variant) => variant?._id === selectedVariant))

    const images = selectedProduct ? selectedProduct?.images?.map((img) => {
        return {
            original: img.url,
            thumbnail: img.url,
        }
    }) : []

    const groupedVariants = product ? product?.variants?.reduce((accumulator, currentVariant) => {
        // Check if RAM value already exists in accumulator
        // console.log(currentVariant);
        if (accumulator[currentVariant.ram]) {
            // If RAM value exists, push current variant to the array
            accumulator[currentVariant.ram].push(currentVariant);
        } else {
            // If RAM value doesn't exist, create a new array with the current variant
            accumulator[currentVariant.ram] = [currentVariant];
        }
        return accumulator;
    }, {}) : {}



    const uniqueColors = new Map();
    product?.variants?.forEach(variant => {
        const { _id, color, colorCode } = variant;

        // Check if color is already present in the map
        if (!uniqueColors.has(color)) {
            // If not, add it with its color code and variant ID
            uniqueColors.set(color, { colorCode, variants: [_id] });
        } else {
            // If color already exists, add variant ID to the existing entry
            uniqueColors.get(color).variants.push(_id);
        }
    });

    // Convert the map to an array of objects
    const uniqueColorsArray = Array.from(uniqueColors, ([color, { colorCode, variants }]) => ({
        color,
        colorCode,
        variants
    }));


    const handleRamSelect = (selectedRam) => {
        const filteredVariants = product.variants.filter((variant) => (variant.ram === Number(selectedRam)))
        dispatch(setSelectedVariant(filteredVariants[0]._id))
        setSelectedProduct(filteredVariants[0])
    }

    const handleRomAndColorSelect = (selectedVariant) => {
        setSelectedProduct(product?.variants?.find((variant) => variant?._id === selectedVariant))
        dispatch(setSelectedVariant(selectedVariant))
    }

    if (!selectedProduct) {
        return null
    }
    // const reviews = [10, 15, 14, 14, 15, 5]
    return (
        <>
            {productLoading ? <Loading /> :
                <div className="single-product-wrapper">
                    <div className="product-images-container">
                        <ReactImageGallery items={images} lazyLoad={true} thumbnailPosition={"bottom"} showPlayButton={false} showNav={false} />
                        <div className="buy-and-cart">
                            <div className="buy pointer" >Buy Now</div>
                            <div className="cart pointer">Add To Cart</div>
                        </div>
                    </div>
                    <div className="product-details-container">
                        <div className="brand-name-and-wishlist">
                            <div className="brand uppercase">{product?.brand?.name}</div>
                            <div className="wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="product-name ">{`${product?.name} (${selectedProduct?.color}, ${selectedProduct?.rom} GB) (${selectedProduct?.ram} GB)`}</div>
                        <div className="special-price">Special Price</div>
                        <div className="price">
                            <div className="current-price">&#x20B9; {selectedProduct?.price} </div>
                            <div className="previous-price">
                                &#x20B9; {selectedProduct?.mrp}
                            </div>
                            <div className="off-percentage">
                                15% off
                            </div>
                        </div>
                        <div className="rating">
                            <div className="rating-percentage">
                                <span>{product?.ratings?.overallRating}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className="total-ratings">
                                {product?.ratings?.numberOfRatings} ratings and {product?.ratings?.numberOfReview} reviews
                            </div>
                        </div>
                        <div className="description">{parse(selectedProduct?.description)}</div>
                        <div className="colors">
                            {uniqueColorsArray.map((item, index) => (
                                <div key={index} className={`w-20 flex flex-col gap-2 items-center justify-center pointer mr-2 border  p-5 ${item.color === selectedProduct.color ? "border-blue-900" : "border-black"}`} onClick={() => handleRomAndColorSelect(item.variants[0])} >
                                    <div className="w-7 h-7 bg-gray-100 rounded-full border   pointer border-white " style={{ backgroundColor: `#${item.colorCode}` }}  ></div>
                                    <div className="" > {item.color}</div>
                                </div>
                            ))}
                        </div>

                        <div className="variants w-[80%] ">
                            <div className="ram flex flex-row mb-3">
                                {Object.keys(groupedVariants)?.map((variant, ind) => (
                                    <div key={ind} onClick={() => handleRamSelect(variant)} className={`w-[15%] py-2 text-center mr-2 text-black transition duration-300 cursor-pointer rounded-sm ${variant == selectedProduct?.ram ? 'bg-gray-300 text-gray-800' : 'bg-white text-black'}`}>
                                        {variant} GB
                                    </div>
                                ))}
                            </div>
                            <div className="ram flex flex-row mb-3">
                                {groupedVariants[selectedProduct?.ram]?.map((variant) => (
                                    <div key={variant?._id} onClick={() => handleRomAndColorSelect(variant?._id)} className={`w-[15%] py-2 text-center mr-2  text-black transition duration-300 cursor-pointer rounded-sm ${variant.rom === selectedProduct?.rom ? 'bg-gray-300 text-gray-800' : 'bg-white text-black'}`}>
                                        {variant?.rom} GB
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="seller-details">
                            <div>Seller</div>
                            <div className="seller-brief">
                                <div className="name-ratings">
                                    <span className="name">Authorized Seller</span>
                                    {/* <div className="seller-ratings">
                                        <span className="seller-rating-count">3.0</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div> */}
                                </div>
                                <div className="return">10 Days return Policy</div>
                            </div>
                        </div>
                        <div className="ratings-and-reviews">
                            <div className="current-rating">
                                <div className="heading">Rating and Reviews</div>
                                <div className="rating-percentage">
                                    <span>{product?.ratings?.overallRating}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className="total-ratings">
                                    {product?.ratings?.numberOfRatings} ratings and {product?.ratings?.numberOfReview} reviews
                                </div>
                            </div>
                            <div className="reviews">
                                {reviews?.map((item, index) =>
                                (<div className="single-review" key={index}>
                                    <div className="name-and-rating" >
                                        <span className="name">Name {item}</span>
                                        <div className="rating-count">
                                            <span>4</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="comment-and-helpful">
                                        <div className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, assumenda minima. Nulla rem placeat, facilis totam, nisi sed assumenda fugit, modi perspiciatis accusantium alias harum ea molestiae incidunt reprehenderit in.</div>
                                        <div className="helpful">
                                            <div className="like pointer">
                                                <svg className="h-5 w-5 text-stone-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
                                            </div>
                                            <div className="dislike pointer">
                                                <svg className="h-5 w-5 text-stone-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v 1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct