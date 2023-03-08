import React from "react";
import { MdNotificationImportant, MdCancel } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import logo from "../../styles/icons/logo.png";
import MenuItems from "./MenuItems";

const MenuBar = () => {
  
  const ref = React.useRef();
  const toogleSildBar = () => {
  
    console.log(ref.current.classList.contains("translate-y-full"));
    if (ref.current.classList.contains("translate-y-full")) {
      ref.current.classList.remove("translate-y-full");
      ref.current.classList.add("translate-y-0");
    } else if (!ref.current.classList.contains("translate-y-full")) {
      ref.current.classList.remove("translate-y-0");
      ref.current.classList.add("translate-y-full");
    }
  };
  return (
    <>
      <div className="flex w-100 p-3 ">
        <div className="flex lg:hidden md:hidden xs:flex   sm:flex">
       
        <span  onClick={toogleSildBar} className="bg-second  w-8 h-8 rounded-full mt-1 relative"> 
          <VscSettings
           
            className="mt-1 w-6 h-6 absolute top-0 left-1 rotate-90"
          />
          </span>
          <div
            ref={ref}
            className="bg-light w-[60%]  transition-transform translate-y-full   h-screen absolute  left-0  top-0 z-[999]"
          >
            <MdCancel
              onClick={toogleSildBar}
              className="w-8 h-8 text-second absolute top-2 right-2"
            />
            <>
              <div className="p-0 w-full  h-screen ">
                <div className="grid  grid-cols-1  my-4 gap-y-3  ">
                  <div className="flex ">
                    <img
                      className="w-14 h-14 m-2 mr-2 rounded-full z-120"
                      src={process.env.REACT_APP_AVATAR}
                      alt=""
                    />
                    <p className="text-black mt-5">Free Tier</p>
                  </div>
                  <div className="">
                    <div className=" flex-row w-[100%] p-2 ">
                      <MenuItems />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
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
