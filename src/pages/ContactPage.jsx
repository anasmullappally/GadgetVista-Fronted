import Footer from "../components/common/Footer";

export default function ContactPage() {
    return (
        <div className="contact-page" >
            <div className="paths pl-5 ">
                <span className="mr-3 cursor-pointer" >{"Home >"}</span>
                <span>Contact</span>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <div className="info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <div className="details">
                            <span className="head">California, United States</span>
                            <span className="desc">Santa monica bullevard</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                        </div>
                        <div className="details">
                            <span className="head">+91 9876543210</span>
                            <span className="desc">Mon to Fri 9am to 6 pm</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className="details">
                            <span className="head">support@gadgetvista.in</span>
                            <span className="desc">Send us your query anytime!</span>
                        </div>
                    </div>
                </div>
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
