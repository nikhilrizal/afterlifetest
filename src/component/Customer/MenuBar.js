import React from "react";
import { MdNotificationImportant } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";

import logo from "../../styles/icons/logo.png";
import MenuComp from "./MenuComp";
const MenuBar = () => {
    const [Menu, setMenu] = React.useState(false)
  return (
    <>
    
        <div className="flex w-100 ">
          <div className="flex lg:hidden md:hidden xs:flex   sm:flex">

         
            { Menu ? <MenuComp State={setMenu} /> :   <BiMenuAltLeft className="text-theme mt-1 w-8 h-8"  onClick={()=>setMenu(true)} />  }

          </div>

          <div className="flex lg:flex md:flex xs:hidden sm:hidden">
            <img src={logo} className="w-8 h-8 " alt="" />
            <p className="text-black mt-1">AFTERLIFE.COM</p>
          </div>

          <div className="w-[92%]  flex justify-end">
            <span className="bg-second  w-8 h-8 rounded-full mt-1 relative">
              <MdNotificationImportant className="text-white w-6 h-6 absolute top-1 left-1" />
            </span>
            <img
              className="w-8 h-8 m-1 mr-2 rounded-full border-light border-2 z-120"
              src={process.env.REACT_APP_AVATAR}
              alt=""
            />
          </div>
        </div>
     
    </>
  );
};

export default MenuBar;
