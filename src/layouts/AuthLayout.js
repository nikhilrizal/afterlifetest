import React from 'react'
import { FaHandshake } from 'react-icons/fa';
import Dove from '../styles/Dove.png'

const AuthLayout = ({ children }) => {
  return (
    
    <div className="h-screen w-screen bg-white flex">
      <section className="h-[100%] bg-white lg:w-[30%] mixpattern md:w-[100%] sm:w-[100%] xs:w-[100%] flex items-center relative">
        <div className="text-black text-[20px] p-3 absolute  w-[100%]   top-0">
          <h1 className="text-black text-[20px] font-bold   inline-block float-left">
            nubisafterlife
          </h1>
          <a className="text-blue-500 text-[12px] font-bold  inline-block float-right" href="/">
            Learn More
          </a>
        </div>
        <div className="flex flex-col w-[100%] text-black h-[50%]   p-10">

          {children}
       
        </div>
      </section>
      <section className="h-[100%]     lg:flex md:hidden sm:hidden xs:hidden   w-[70%] flex items-center relative">
        <div className="h-[90vh]   flex  justify-center items-center w-[100%]" >
          <section className="relative justify-center  lg:w-[90%] md:w-full sm:w-full p-14 xs:w-full lg:h-[96%]  bg-[#00000070] opacity-100 rounded-3xl  md:h-1/2 sm:h-[60%] xs:h-[60%]" >
            <div className="absolute text-center p-2 -right-7 top-1/4 rounded-full w-[4rem] h-[4rem] bg-white text-black">
              <FaHandshake className='text-2xl text-yellow-400 text-[3rem]' />
            </div>
            <div className="absolute text-center p-2 -left-7 top-1/2 rounded-full w-[5rem] h-[5rem] bg-[#ffffff] text-black ">
            <img  className='absolute top-4 left-3 w-[3rem] h-[3rem]' src='https://cdn.shopify.com/s/files/1/1061/1924/products/100_Emoji_grande.png?v=1571606035' alt="" />
            
            </div>
            
            <video className="rounded-3xl shadow-lg z-10 text-center m-auto " width="750" height="7000" dataQa="media-player" dataTestid="media-player-video" id="player" loop="" playSinline="" preload="auto" src="https://media.videoask.com/transcoded/e9bf51a3-56ec-4871-942c-c4949cfef374/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU5YmY1MWEzLTU2ZWMtNDg3MS05NDJjLWM0OTQ5Y2ZlZjM3NCIsImV4cCI6MTY3NzMwNDQ5M30.HKe4_Rd1t722JCnfGvddc5pIrpvOSb-xsGR8vpYYo3xP3NXYjyV_0HLdIHDlw_PZxyWTQ77GeXbMgMUQjw0UA0MaTf_A1BXwCQkORr67jiNNz5hOItocf41xUbBEM1K0HszSOapHttSnueK_VTcDu76GViGEceGuYiSaHksdejQzclVL-fB92pk3w1vFic71NuCfJgj563fYNyBNHkHLYmJKqh5woilvuKC238__7C1ArkfGDYd4KDJ6YL0zobirsdWKybWSetC5sFpv8c30899g0q-J89GE1NkS9ndRDOJi_iUj5npA9Lhf3cbh_hajAS_zDPiX0pFaICAfJQk3S0Q0NVJW7izw793kGOQsx4hIRoZp9gwzCZMGDgkfpgw9Bxe4m1cS-NrxJgjgFnGY_BJMiuBVXLfLYXaB3I4aFTKfI2HP3m4tYJn4rFsGmibSGkO4mhc-_7nuM7cmFpBxYlOz9QXQZqYEkm7HR9KyJ8fq_L_wH-Ql1ithoODP28aiszYDDI4G8WAfBbtRxhXhgOploW_7-SjKxSDkIl_-JnrIrC7QK_CHm_ZRYFPugw1FfZRAkA24omoXdsmSznwyOrmIt26VG1Id59bqiN_NlMOQ-_e6k_ph76e2FX0NI80V897mUGOyJ24mchAiKIYK-mrM2Zmp4U95ZQKSLSk43Gw" />
            <h1 className='Design font-bold Now mt-4 text-4xl text-center pb-3'> Design    With   <span className="text-6xl font-bold Now mt-2  text-center pb-3 text-theme">Sally </span>
            <img  className='inline-block  w-[4rem] h-[4rem]' src={Dove} alt="" />
              </h1>  
          </section>
        </div>
      </section>

    </div>
  )
}

export default AuthLayout