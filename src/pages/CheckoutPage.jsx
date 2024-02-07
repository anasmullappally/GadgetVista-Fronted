
function Checkout() {
    const arr = [1, 2, 3, 4]
    return (
        <div className="checkout-wrapper">
            <div className="paths">
                <span className="home pointer">Home</span>
                <span className="checkout">{"> Checkout"}</span>
            </div>
            <div className="checkout-container">
                <div className="addresses">
                    <div className="select-address">Select Address</div>
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
                    <div className="add-address pointer">
                        + Add Address
                    </div>
                    <div className="new-address">
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
                    </div>
                </div>
                <div className="price-details"></div>
            </div>
        </div>
    )
}

export default Checkout