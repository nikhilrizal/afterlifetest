import React from "react";
import SimpleSlider from "../component/slickman";
import Dove from '../styles/Dove.png'
import MenuBar from "../component/Customer/MenuBar";
import MenuItems from "../component/Customer/MenuItems";

const DashoardLayout = ({ children }) => {
  return (
    <div className="w-100   overflow-x-hidden  lg:pb-[0vh] md:pb-[0vh] sm:pb-[60vh] xs:pb-[60vh]">
      <MenuBar />
      <div className="flex h-screen z-10   w-[100vw]  border-0    m-0">
        <div className="w-[15%] bg-light   min-h-screen  sticky  overflow-hidden md:hidden xs:hidden sm:hidden lg:flex">
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
                  <div className="bg-light w-100 h-12 px-3 relative rounded-b-xl  p-1 lg:mb-0 xs:mb-12 sm:mb-12 md:mb-20">
                    <MenuItems />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1  p-4  bg-fixed  shadow-2xl  rounded-2xl z-50    w-[100%] h-[100%]  relative  overflow-x-hidden lg:pb-[0vh] md:pb-[0vh] sm:pb-[60vh] xs:pb-[60vh]">
          <div className="flex  overflow-hidden  lg:flex-row md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse w-[100%]  justify-center gap-2">

            <div className="w-[100%] z-20  mt-1 border-slate-200 border-2  text-black rounded-2xl h-[25vh] ">
              <div className="flex relative w-[100%] h-[90%]  mt-3">

                <div className="relative w-[50%]  rotate-360  h-[100%]">
                  <div className="flex justify-center ">

                    <img className='absolute w-auto   h-full w-max-w-[100%] w-max-h-[90%]' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-funeral-service-invite-flyer-design-template-c7a702b3b17584bde5dc8cecf071fcbb.jpg?ts=1636988155" alt="" srcset="" />
                  </div>
                </div>

                <div className="mt-2 flex-col  flex grow-0 w-[60%] justify-start p-0">
                  <h1 className=' p-0 lg:float-left float-left   xs:text-3xl sm:text-2xl md:text-2xl lg:text-4xl '>
                    BEST SELLING
                  </h1>
                  <p className='  text-[11px]'>
                    Sally offers advice on how to compose a meaningful and creative message in tribute of the a beloved who recently lost loved ones.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[100%] bg-[#3371c8] wave rounded-2xl h-[25vh] ">
              <div className="flex relative w-[100%] h-[90%]  mt-3">

                <div className="relative w-[50%]  rotate-360 h-[100%]">
                  <img src={Dove} className='w-[90%]  h-[90%] w-max-w-[100%] w-max-h-[100%] ' alt="" />
                </div>

                <div className="mt-2 flex-col flex grow-0 w-[60%] justify-start p-0">
                  <h1 className='text-white p-0 lg:float-left float-left   xs:text-3xl sm:text-2xl md:text-2xl lg:text-4xl '>
                    Sally
                  </h1>
                  <p className=' text-white  text-[12px]'>
                    Sally offers advice on how to compose a meaningful and creative message in tribute of the a beloved who recently lost loved ones.
                  </p>
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
