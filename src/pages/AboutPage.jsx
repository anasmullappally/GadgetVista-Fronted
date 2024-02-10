import Footer from "../components/common/Footer";

export default function AboutPage() {
    return (
        <div className="about">
            <div className="about-main">
                <div className="why-us">
                    <div className="description">
                        <h3>Why Choose Us</h3>
                        <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</span>
                    </div>
                    <div className="more flex flex-wrap -mx-4">
                        <div className="features lg:w-1/2 w-full px-4 mb-4 flex flex-col items-center justify-center">
                            <div className="icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <div className="heading mb-4">
                                Fast & Free Shipping
                            </div>
                            <div className="desc">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                            </div>
                        </div>
                        <div className="features lg:w-1/2 w-full px-4 mb-4 flex flex-col items-center justify-center">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className="heading mb-4">
                                Easy to Shop
                            </div>
                            <div className="desc">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                        <div className="features lg:w-1/2 w-full px-4 mb-4 flex flex-col items-center justify-center">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <div className="heading mb-4">
                                24/7 Support
                            </div>
                            <div className="desc">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                        <div className="features lg:w-1/2 w-full px-4 mb-4 flex flex-col items-center justify-center">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                            </div>
                            <div className="heading mb-4">
                                Hassle Free Returns
                            </div>
                            <div className="desc">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image lg:w-1/2 w-full lg:p-3 p-0">
                    <img
                        src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?w=1060&t=st=1707580232~exp=1707580832~hmac=cf5e67e5bf01fa36bb862a07022db0b79bf14abc429ead47b72d11bd7dc0195b"
                        alt="product-image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="our-team flex flex-wrap">
                <div className="team-member lg:w-1/4 md:w-1/2 w-full">
                    <div className="details flex flex-col items-center justify-center ">
                        <div className="person-image mb-4">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="person-image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="person-name font-medium">Jhon Doe</div>
                        <div className="person-role"> CEO</div>
                    </div>
                </div>
                <div className="team-member lg:w-1/4 md:w-1/2 w-full">
                    <div className="details flex flex-col items-center justify-center ">
                        <div className="person-image mb-4">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="person-image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="person-name font-medium">Jhon Doe</div>
                        <div className="person-role"> CEO</div>
                    </div>
                </div>
                <div className="team-member lg:w-1/4 md:w-1/2 w-full">
                    <div className="details flex flex-col items-center justify-center ">
                        <div className="person-image mb-4">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="person-image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="person-name font-medium">Jhon Doe</div>
                        <div className="person-role"> CEO</div>
                    </div>
                </div>
                <div className="team-member lg:w-1/4 md:w-1/2 w-full">
                    <div className="details flex flex-col items-center justify-center ">
                        <div className="person-image mb-4">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="person-image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="person-name font-medium">Jhon Doe</div>
                        <div className="person-role"> CEO</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
