import AdminHeader from "../header/AdminHeader"
import UserHeader from "../header/UserHeader"


// eslint-disable-next-line react/prop-types
function Header({ setOpenSideBar, isAdmin, user }) {
    return (
        <header className={`${isAdmin ? 'admin-header mt-2' : 'user-header'}`}>
            {user && isAdmin ?
                <AdminHeader setOpenSideBar={setOpenSideBar} />
                :
                <UserHeader user={user} />
            }
        </header >
    )
}

export default Header