import ReactImageGallery from "react-image-gallery"
// import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function SingleProduct() {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    const colors = ["red", "blue", "black", "white"]
    const reviews = [1, 2, 4, 65, 8, 7, 9, 3, 25, 56]
    return (
        <div className="single-product-wrapper">
            <div className="product-images-container">
                <ReactImageGallery items={images} lazyLoad={true} thumbnailPosition={"bottom"} showPlayButton={false} showNav={false} />
                <div className="buy-and-cart">
                    <div className="buy pointer" >Buy Now</div>
                    <div className="cart pointer">Add To Cart</div>
                </div>
            </div>
            <div className="product-details-container">
                <div className="brand-name">Brand Name</div>
                <div className="product-name">Product Name</div>
                <div className="special-price">Special Price</div>
                <div className="price">
                    <div className="current-price">&#x20B9;1000</div>
                    <div className="previous-price">
                        &#x20B9;1500
                    </div>
                    <div className="off-percentage">
                        15% off
                    </div>
                </div>
                <div className="rating">
                    <div className="rating-percentage"> 4.8</div>
                    <div className="total-ratings">
                        539 ratings and 62 reviews
                    </div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis veniam quasi dolorum ab tempora inventore voluptatem animi modi illo nihil maxime officia aut quo sapiente, enim similique. Officiis!</div>
                <div className="colors">
                    {colors.map((item, index) => (
                        <div className="color pointer" style={{ backgroundColor: item }} key={index} ></div>
                    ))}
                </div>
                <div className="variants">
                    <div className="radio-input">
                        <label>
                            <input type="radio" id="value-1" name="value-radio" value="value-1" />
                            <span> 2 GB</span>
                        </label>
                        <label>
                            <input type="radio" id="value-2" name="value-radio" value="value-2" />
                            <span> 4 GB</span>
                        </label>
                        <label>
                            <input type="radio" id="value-3" name="value-radio" value="value-3" />
                            <span> 6 GB</span>
                        </label>
                        <span className="selection"></span>
                    </div>
                </div>
                <div className="variants">
                    <div className="radio-input">
                        <label>
                            <input type="radio" id="value-1" name="value-radio" value="value-11" />
                            <span> 62 GB</span>
                        </label>
                        <label>
                            <input type="radio" id="value-2" name="value-radio" value="value-22" />
                            <span> 128 GB</span>
                        </label>
                        <label>
                            <input type="radio" disabled id="value-3" name="value-radio" value="value-34" />
                            <span> 256 GB</span>
                        </label>
                        <span className="selection"></span>
                    </div>
                </div>
                <div className="seller-details">
                    <div>Seller</div>
                    <div className="seller-brief">
                        <div className="name-ratings">
                            <span className="name">Seller Name</span>
                            <span className="ratings">3.0</span>
                        </div>
                        <div className="return">10 Days return Policy</div>
                    </div>
                </div>
                <div className="ratings-and-reviews">
                    <div className="current-rating">
                        <div className="heading">Rating and Reviews</div>
                        <div className="rating-percentage"> 4.8</div>
                        <div className="total-ratings">
                            539 ratings and 62 reviews
                        </div>
                    </div>
                    <div className="reviews">
                        {reviews.map((item, index) =>
                        (<div className="single-review" key={index}>
                            <div className="name-and-rating" >
                                <span className="name">Name {item}</span>
                                <span className="rating">5</span>
                            </div>
                            <div className="comment-and-helpful">
                                <div className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, assumenda minima. Nulla rem placeat, facilis totam, nisi sed assumenda fugit, modi perspiciatis accusantium alias harum ea molestiae incidunt reprehenderit in.</div>
                                <div className="helpful">
                                    <div className="like pointer">Like</div>
                                    <div className="dislike pointer">Dislike</div>
                                </div>
                            </div>
                        </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct