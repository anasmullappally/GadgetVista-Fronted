
function WishListPage() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <div className="wishlist-wrapper">
                <div className="ml-5 mt-5">
                    Wishlists ({arr.length || 0})
                </div>
                <div className="wishlist-container">
                    <div className="products">
                        {arr.map((item) => (
                            <div className="single-product" key={item}>
                                <div className="image">
                                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018684/Croma%20Assets/Communication/Mobiles/Images/300652_0_ndr3y9.png" alt="product-image" />
                                </div>
                                <div className="product-details">
                                    <div className="name">Apple Iphone 15Pro max</div>
                                </div>
                                <div className="remove">
                                    <button className="button">Remove</button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishListPage