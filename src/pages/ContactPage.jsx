import Footer from "../components/common/Footer";

export default function ContactPage() {
    return (
        <div className="contact-page" >
            <div className="paths pl-5 ">
                <span className="mr-3 cursor-pointer" >{"Home >"}</span>
                <span>Contact</span>
            </div>
            <div className="contact">
                <div className="card">
                    <p className="heading">Contact Us</p>

                    <div className="input-div">
                        <input type="text" className="input" placeholder="Email" />
                    </div>
                    <div className="input-div">
                        <input className="input" type="text" placeholder="Phone" />
                    </div>
                    <div className="input-div">
                        <input className="input" type="text" placeholder="Message" />
                    </div>
                    <div className="button-div">
                        <button className="submit">Submit</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
