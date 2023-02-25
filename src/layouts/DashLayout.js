import React from "react";

import { AiFillSetting } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import {MdSupportAgent,MdOutlineDesignServices,MdNotificationImportant,} from "react-icons/md";
import logo from "../styles/icons/logo.png";
import SimpleSlider from "../component/slickman";
import {  Link, NavLink } from "react-router-dom";
import Dove from '../styles/Dove.png'

const DashoardLayout = ({ children }) => {
  return (
    <div className="w-100 bg-white overflow-x-hidden  lg:pb-[0vh] md:pb-[0vh] sm:pb-[60vh] xs:pb-[60vh]">
      <div className=" w-100 h-10 px-3  p-1">
        <div className="flex w-100  ">
           <img src={logo} className="w-8 h-8 " alt="" />
          <p className="text-black mt-1">AFTERLIFE.COM</p>
          <div className="w-[92%]  flex justify-end">
            <span className="bg-theme  w-12 h-12 rounded-full mt-1 relative">
              <MdNotificationImportant className="text-white w-8 h-8 absolute top-2 left-2" />
            </span>
            <img
              className="w-12 h-12 m-1 mr-2 rounded-full border-theme border-2 z-120"
              src={process.env.REACT_APP_AVATAR}
              alt=""
            />

          </div>
        </div>
      </div>
      <div className="flex h-[90vh] w-[100vw]  border-0 lg:p-4 md:p-4 sm:p-0 xs:p-0   m-0">
        <div className="w-[15%]  max-h-fit  sticky  overflow-hidden md:hidden xs:hidden sm:hidden lg:flex">
          <div className="p-0 w-full  h-screen ">
            <div className="grid  grid-cols-1 items-center my-4 gap-y-3 place-items-center ">
              <div className="flex">
                <img
                  className="w-14 h-14 m-2 mr-2 rounded-full z-120"
                  src={process.env.REACT_APP_AVATAR}
                  alt=""
                />
                <p className="text-black mt-5">
                  Free Tier
                </p>
              </div>
              <div className="">

                <div className=" flex-row w-[100%] p-2 ">
                <div className="flex  mt-5 text-gray-500 justify-center    w-[100%] transition: ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
                  <Link className="w-[100%]" to='/Dashboard'>
                    <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%]">
                      <MdOutlineDesignServices className="w-5 h-5  " />
                      <p className="ml-2 text-[11px] font-bold">
                        Orders
                      </p>
                    </div>
                    </Link>
                  </div>

                  <div className="flex  mt-5 text-gray-500 justify-center    w-[100%] transition: ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
                    <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%] ">
                      <HiOutlineTemplate className="w-5 h-5  " />
                      <p className="ml-2 font-bold">Products</p>
                    </div>
                  </div>
                  <div className="flex  mt-5 text-gray-500 justify-center    w-[100%] transition: ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
                  <NavLink  className={({ isActive }) => (isActive ? "bg-[#00bfff21] rounded-lg text-[#00bfffde]" : "")} to='RecentWork'>
                    <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%]">
                      <MdOutlineDesignServices className="w-5 h-5  " />
                      <p className="ml-2 text-[11px] font-bold">
                   
                        Recent Design
                   
                        
                      </p>
                    
                    </div>
                    </NavLink>
                  </div>
                  <div className="flex  mt-5 text-gray-500 justify-center    w-[100%] transition: ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
                    <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%]">
                      <MdSupportAgent className="w-5 h-5  " />
                      <p className="ml-2 font-bold">Customer</p>
                    </div>
                  </div>
                  <div className="flex  mt-5 text-gray-500 justify-center    w-[100%] transition: ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
                    <div className="flex hover:bg-[#00bfff21] hover:text-[#00bfffde] text-center items-center rounded-lg h-8 w-[100%]">
                      <AiFillSetting className="w-5 h-5  " />
                      <p className="ml-2 font-bold">Settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1  bg-fixed   bg-light-gray  h-[100%]  relative  overflow-x-auto lg:pb-[0vh] md:pb-[0vh] sm:pb-[60vh] xs:pb-[60vh]">
          <div className="flex overflow-hidden lg:flex-row md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse w-[100%]  justify-center gap-2">
            <div className="w-[90%] bg-[#3371c8] rounded-2xl h-[25vh] items-center">
              <div className="flex relative items-center w-100 h-[90%] p-4 mt-3">


                <div className="relative w-[40%]   rotate-360 h-[100%]">
                  {/* <img className='sally rounded-lg ' src='https://vignette.wikia.nocookie.net/dumbledoresarmyroleplay/images/c/c4/Dove.gif/revision/latest?cb=20180707174946'  alt="" /> */}
                  {/* <img  className='sally rounded-lg text-white' src='https://img.icons8.com/dotty/80/null/dove.png' /> */}
                
                  <img src={Dove}  className='sally rounded-lg absolute -left-5 -bottom-5 mt-2'   alt="" />
                </div>
                
                <div className="mt-2 w-[100%] float-right">
                  <h1 className='text-white text-5xl '>
                    Sally
                    
                  </h1>
                  <p className='p-3 text-white  '>
                    Sally offers advice on how to compose a meaningful and creative message in tribute of the a beloved who recently lost loved ones.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[90%] bg-[#02090c] rounded-2xl h-[25vh] items-center">
              <div className="flex items-center w-100 h-[90%] p-4 mt-3">
                <div className="mt-2">
                  <h1 className='text-white text-2xl float-left'>

                    BEST SELLING
                  </h1>
                  <p className='p-3 text-slate-400 '>
                    Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
                  </p>
                </div>
                <div className=" w-60 relative ">
                  <img className=' absolute rounded-lg -z-5 a mr-2' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-funeral-service-invite-flyer-design-template-c7a702b3b17584bde5dc8cecf071fcbb.jpg?ts=1636988155" alt="" srcset="" />
                  <img className='   top-0 rotate-12  a z-5  rounded-lg mr-2' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-funeral-service-invite-flyer-design-template-c7a702b3b17584bde5dc8cecf071fcbb.jpg?ts=1636988155" alt="" srcset="" />

                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div className="w-[20%] bg-dark text-center md:hidden xs:hidden sm:hidden lg:block  bg-fixed   overflow-y-auto overflow-x-hidden  p-4  ">
          <h1 className="text-black float-left font-semibold ">Trending</h1>
          <div className=" flex flex-col w-[100%]  float-left mt-4">
            <SimpleSlider />
          </div>
          <h1 className="text-black float-left font-semibold mb-6 mt-14">
            Newly Lauched
          </h1>
          <div className="flex flex-col w-[100%] ">
            <SimpleSlider />
          </div>
          <h1 className="text-black float-left font-semibold mb-6 mt-14">
           
            Recent Design
           
          </h1>
          <div className="flex flex-col w-[100%] ">
            <SimpleSlider />
          </div>
          <h1 className="text-black float-left font-semibold mb-6 mt-14">
            Start Designing
          </h1>
          <div className="flex flex-col w-[100%] ">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashoardLayout;
