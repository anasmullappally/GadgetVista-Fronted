import { useState } from "react"

function Checkout() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const [newAddress, setNewAddress] = useState(false);
    return (
        <div className="checkout-wrapper">
            <div className="paths">
                <span className="home pointer">Home</span>
                <span className="checkout">{"> Checkout"}</span>
            </div>
            <div className="checkout-container">
                <div className="checkout">
                    <div className="select-address">Delivery Address</div>
                    <div className="address-container">
                        {arr.map((item) => (
                            <div className="single-address" key={item}>
                                <label className="checkbox-label">
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <div className="detailed-address">
                                    <div className="name-number-edit">
                                        <div className="name-number">
                                            <span className="address-name">Anas Mullappally</span>
                                            <span className="address-type">Work</span>
                                            <span className="phone">8547700297</span>
                                        </div>
                                        <div className="edit pointer">Edit</div>
                                    </div>
                                    <div className="remaining-address">
                                        <span className="main-address mr-1">Mullappally House, Ponmala Mullappally House, Ponmala Mullappally House, Ponmala Mullappally House, Ponmala  Mullappally House, Ponmala Mullappally House, Ponmala Mullappally House, Ponmala Mullappally House, Ponmala </span>
                                        <span className="locality">Ponmala Muttippalam</span>
                                        <span className="landmark"> Near GMLP School</span>
                                        <span className="pin">Ponmala, kerala - 676528</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="add-address pointer select-address" onClick={() => setNewAddress(!newAddress)}>
                        + Add Address
                    </div>

                    <div className={`new-address ${newAddress ? 'active' : ''}`}>
                        <div className="name-number part">
                            <div className="input-box">
                                <label className="input-label">Name</label>
                                <input placeholder="Name" className="input" name="Name" type="Name" />
                                <span className="input-helper">enter a valid Name</span>
                            </div>
                            <div className="input-box">
                                <label className="input-label">Number</label>
                                <input placeholder="Number" className="input" name="number" type="number" />
                                <span className="input-helper">enter a valid Number</span>
                            </div>
                        </div>
                        <div className="pin-locality part">
                            <div className="input-box">
                                <label className="input-label">Pin</label>
                                <input placeholder="Pin code" className="input" name="number" type="number" />
                                <span className="input-helper">enter a valid pin code</span>
                            </div>
                            <div className="input-box">
                                <label className="input-label">Locality</label>
                                <input placeholder="Number" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid locality</span>
                            </div>
                        </div>
                        <div className="main-address part">
                            <div className="input-box">
                                <label className="input-label">Address</label>
                                <textarea cols={5} rows={6} placeholder="Address" className="input" name="text" type="text" />
                                <span className="input-helper">enter a Address</span>
                            </div>
                        </div>
                        <div className="city-state part">
                            <div className="input-box">
                                <label className="input-label">City/Town</label>
                                <input placeholder="City/District/Town" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid city</span>
                            </div>
                            <div className="input-box">
                                <label className="input-label">State</label>
                                <input placeholder="State" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid State</span>
                            </div>
                        </div>
                        <div className="city-state part">
                            <div className="input-box">
                                <label className="input-label">Landmark (optional)</label>
                                <input placeholder="Landmark" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid city</span>
                            </div>
                            <div className="input-box">
                                <label className="input-label">Alternate Phone (optional)</label>
                                <input placeholder="Phone number" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid State</span>
                            </div>
                        </div>
                    </div>
                    <div className="select-address">Checkout Summary</div>
                    <div className="checkout-product-wrapper">
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
                                        <button>Remove</button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="price-details">
                    <div className="apply-offer">
                        <div className="heading">Apply Coupon</div>
                        <form className="offer-apply" action="javascript:void(0)">
                            <div className="input-box">
                                <input placeholder="Coupon code" className="input" name="text" type="text" />
                                <span className="input-helper">enter a valid coupon</span>
                            </div>
                            <div type="submit" className="apply pointer"> Apply </div>
                        </form>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default Checkout