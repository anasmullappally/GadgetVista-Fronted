/* eslint-disable react/prop-types */
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'
import { BsBell, BsListTask, BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/GadgetVista.png";

function AdminHeader({ setOpenSideBar }) {
    return (
        <div className="admin-header-a">
            <div className="left">
                <div className="logo hidden md:block " >
                    <img
                        src={logo}
                        className="mr-2 hidden md:block "
                        width={70}
                        height={25}
                        alt="GadgetVista"
                    />
                    <span className="hidden md:block ">GadgetVista</span>
                </div>
                <BsListTask onClick={() => setOpenSideBar((prev) => !prev)} className="block md:hidden" />
            </div>
            <div className="right">
                <div className="notification">
                    <BsBell size={25} className='icon m-3 pointer' />
                    <span className="notification-count">{3}</span>
                </div>
                <BsPersonCircle size={25} className='icon m-3 pointer' />
            </div>
        </div>
    )
}

export default AdminHeader
