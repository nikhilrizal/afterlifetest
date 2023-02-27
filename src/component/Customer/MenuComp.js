import React from "react";

import { MdCancel } from "react-icons/md";
import MenuItems from "./MenuItems";

const MenuComp = (props) => {
    let {State} = props
  return (
    <>
      <div className="bg-light w-[60%] h-screen absolute transition delay-150 duration-300 ease-in-out left-0  top-0 z-[999]">
        <MdCancel className="w-8 h-8 text-second absolute top-2 right-2"  onClick={()=>State(false)}/>
        <>
          <div className="p-0 w-full  h-screen ">
            <div className="grid  grid-cols-1  my-4 gap-y-3  ">
              <div className="flex">
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
    </>
  );
};

export default MenuComp;
