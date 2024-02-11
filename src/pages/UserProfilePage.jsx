import Footer from "../components/common/Footer"
import WishListPage from "./WishListPage"

function UserProfilePage() {
    return (
        <>
            <div className="profile-wrapper">
                <div className="lists">
                    <div className="profile-main">
                        <div className="image">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="person-image"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="profile-details">
                            <span>Hi, </span>
                            <span>User Name</span>
                        </div>
                    </div>
                    <div className="main-sections">
                        <div className="sections">
                            <div className="main-heading">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <div className="heading">Account Settings</div>
                            </div>
                            <div className="sections-list">
                                <div className="list">Profile Information</div>
                                <div className="list">Manage Address</div>
                            </div>
                        </div>
                        <div className="sections">
                            <div className="main-heading">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                    </svg>

                                </div>
                                <div className="heading">My Stuff</div>
                            </div>
                            <div className="sections-list">
                                <div className="list">Reviews and Ratings</div>
                                <div className="list">Wishlist</div>
                                <div className="list">All Notifications</div>
                            </div>
                        </div>
                        <div className="logout">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                            </div>
                            <div>Logout</div>
                        </div>
                    </div>

                </div>
                <div className="details-container">
                    <WishListPage />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default UserProfilePage