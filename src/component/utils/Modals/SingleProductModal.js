import React from "react";
import CustModal from "./CoreModal";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsShare } from "react-icons/bs";
const SingleProductModal = (props) => {
  let { setIsOpen, isOpen } = props;
  return (
    <CustModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className=" transform overflow-hidden   lg:h-[80vh] md:max-h-fullsm:max-h-full xs:max-h-full  lg:max-w-[65vw] md:max-w-[65vw] xs:w-[90vw] sm:w-[90vw]  relative rounded-2xl bg-white p-0 text-left align-middle shadow-xl transition-all">
      
        <div className="flex  lg:flex-row md:flex-row  sm:flex-col xs:flex-col  h-[100%]  gap-1">
       
          <div className="bg-[#1e5ad127] xs:w-[100%] sm:w-[100%] md:w-[70%] lg:w-[70%] h-[100%] flex justify-center items-center">
         <div className="relative">
         
   
          <video autoPlay  className="rounded-3xl  shadow-lg z-10 text-center m-auto " width="450" height="700" dataQa="media-player" dataTestid="media-player-video" id="player" loop="loop"  playSinline="" preload="auto" src="https://media.videoask.com/transcoded/e9bf51a3-56ec-4871-942c-c4949cfef374/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU5YmY1MWEzLTU2ZWMtNDg3MS05NDJjLWM0OTQ5Y2ZlZjM3NCIsImV4cCI6MTY3NzMwNDQ5M30.HKe4_Rd1t722JCnfGvddc5pIrpvOSb-xsGR8vpYYo3xP3NXYjyV_0HLdIHDlw_PZxyWTQ77GeXbMgMUQjw0UA0MaTf_A1BXwCQkORr67jiNNz5hOItocf41xUbBEM1K0HszSOapHttSnueK_VTcDu76GViGEceGuYiSaHksdejQzclVL-fB92pk3w1vFic71NuCfJgj563fYNyBNHkHLYmJKqh5woilvuKC238__7C1ArkfGDYd4KDJ6YL0zobirsdWKybWSetC5sFpv8c30899g0q-J89GE1NkS9ndRDOJi_iUj5npA9Lhf3cbh_hajAS_zDPiX0pFaICAfJQk3S0Q0NVJW7izw793kGOQsx4hIRoZp9gwzCZMGDgkfpgw9Bxe4m1cS-NrxJgjgFnGY_BJMiuBVXLfLYXaB3I4aFTKfI2HP3m4tYJn4rFsGmibSGkO4mhc-_7nuM7cmFpBxYlOz9QXQZqYEkm7HR9KyJ8fq_L_wH-Ql1ithoODP28aiszYDDI4G8WAfBbtRxhXhgOploW_7-SjKxSDkIl_-JnrIrC7QK_CHm_ZRYFPugw1FfZRAkA24omoXdsmSznwyOrmIt26VG1Id59bqiN_NlMOQ-_e6k_ph76e2FX0NI80V897mUGOyJ24mchAiKIYK-mrM2Zmp4U95ZQKSLSk43Gw" />
         

          </div>
          </div>
          <div className="h-[100%] xs:w-[100%] mt-10 sm:w-[100%] md:w-[70%] lg:w-[30%]  p-3">
            <img
              src={process.env.REACT_APP_LOGO}
              className="rounded-full w-12 h-12 inline-block mx-4"
              alt=""
            />
            <span className="text-black text-center ]">
              
              {process.env.REACT_APP_NAME}
            </span>
            <br />
            <p className="text-slate-500 text-center  p-4">
              Facebook Shared Image (1200px × 630px)
            </p>

            <div className="flex justify-evenly  flex-col w-[100%]">
              <button
                type="button"
                className="text-blue-600 border-blue-600 border-2  justify-center bg-[#ffffff] hover:text-white h-[7vh] hover:bg-theme hover:border-0  focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  mb-2"
              >
                Share
                <BsShare className="w-5 h-5 ml-2 hover:text-white " />
              </button>
              <button
                type="button"
                className="text-white justify-center bg-theme h-[9vh] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-xs px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  mb-2"
              >
                <MdOutlineDesignServices className="w-5 h-5  " />
                Edit Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </CustModal>
  );
};

export default SingleProductModal;
