/* eslint-disable react/prop-types */

import { BsFillArchiveFill, BsGrid1X2Fill, BsListCheck, BsPeopleFill } from 'react-icons/bs';

function SideBar({ openSideBar }) {
    const buttons = [
        {
            name: 'Dashboard',
            icon: <BsGrid1X2Fill />,
            redirectTo: 'dashboard',
            color: "red"
        },
        {
            name: 'Orders',
            icon: <BsListCheck />,
            redirectTo: 'orders',
            color: "yellow"
        },
        {
            name: 'Products',
            icon: <BsFillArchiveFill />,
            redirectTo: 'products',
            color: "green"
        },
        {
            name: 'Users',
            icon: <BsPeopleFill />,
            redirectTo: 'users',
            color: "purple"
        },
    ]
    // style={{ backgroundColor: item.color }}
    return (
        <>
            <div className={`sidebar ${openSideBar ? "sidebar-responsive" : ""}`}>
                <div className='top'>
                    {buttons.map((item) => (
                        <div key={item.name} className='section flex flex-row p-3 justify-start items-center pointer' >
                            <div className='icon pr-3'> {item.icon} </div>
                            <div className='title  '>{item.name} </div>
                        </div>
                    ))}
                </div>
            </div >

        </>
    )
}

export default SideBar