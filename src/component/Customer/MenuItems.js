import React from 'react'

import { NavLink } from "react-router-dom";

import { AiFillSetting } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";



import { MdSupportAgent, MdOutlineDesignServices, } from "react-icons/md";

const links = [

    { to: '/Dashboard', label: 'Orders', icons: <MdOutlineDesignServices className="w-5 h-5  " /> },
    { to: '/', label: 'Products', icons: <HiOutlineTemplate className="w-5 h-5  " /> },
    { to: 'RecentWork', label: 'Recent Design', icons: <MdOutlineDesignServices className="w-5 h-5  " /> },
    { to: 'Customer', label: 'Customer', icons: <MdSupportAgent className="w-5 h-5  " /> },
    { to: 'Settings', label: 'Settings', icons: <AiFillSetting className="w-5 h-5  " /> },

]

const MenuItems = () => {
    return (
        <>
            {
                links.map((link,index) => (

                    <>
                        <div key={index} className="flex  mt-5 text-gray-500     w-[100%] transition: ease-in-out delay-150 hover:-translate-x-1 hover:scale-11 duration-300  ">
                            <NavLink className={({ isActive }) => (isActive ? "bg-[#00bfff21] rounded-lg text-[#00bfffde]" : "")} to={link.to}>
                                <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%]">
                                    {link.icons}
                                    <p className="ml-2 text-[11px] font-bold">
                                        {link.label}
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default MenuItems