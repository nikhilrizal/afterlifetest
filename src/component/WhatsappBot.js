import React, { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { IoMdSend } from "react-icons/io";
import { SiRobotframework } from "react-icons/si";

const WhatsappBot = () => {
  const { REACT_APP_AVATAR } = process.env;
  const [open, setopen] = useState(true)
  return (
    <>
      {
        open ? <>
          <div className=" border-red-200 h-100 w- flex justify-center items-center h-[100vh] w-screen">
            <button className="bg-blue-500 w-14 h-14 rounded-full  " onClick={() => setopen(false)}>
              <SiRobotframework className="w-9 h-9 relative left-[10px] animate-pulse"/>
            </button>
          </div>
        </>
          :
          <>
            <div className=" border-red-200 h-100 w- flex justify-center items-center h-[100vh] w-screen">
              <div className="bg-white border-white border-2 w-[45vh] h-[70vh] rounded-2xl relative">
                <div className="flex z-10 p-3 h-[9vh] bg-gradient-to-r from-indigo-800 via-blue-500 to-blue-500  rounded-t-2xl relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={REACT_APP_AVATAR}
                    alt=""
                  />
                  <div className="block m-1 grow">
                    <small className="block text-[10px]">chat with</small>
                    <small className="block ">Rommel</small>
                  </div>
                  <TfiArrowCircleDown className="w-5 h-8"  onClick={() => setopen(true)}/>
                </div>
                <svg className="-mt-1" id="wave" style={{ transform: 'rotate(180deg)', transition: "0.3s" }} viewBox="0 0 1440 250" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(59, 130, 246, 1)" offset="0%"></stop><stop stopColor="rgba(55, 48, 163, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: '1', fill: "url(#sw-gradient-0)" }} d="M0,225L26.7,200C53.3,175,107,125,160,116.7C213.3,108,267,142,320,154.2C373.3,167,427,158,480,162.5C533.3,167,587,183,640,158.3C693.3,133,747,67,800,37.5C853.3,8,907,17,960,20.8C1013.3,25,1067,25,1120,41.7C1173.3,58,1227,92,1280,108.3C1333.3,125,1387,125,1440,141.7C1493.3,158,1547,192,1600,175C1653.3,158,1707,92,1760,62.5C1813.3,33,1867,42,1920,45.8C1973.3,50,2027,50,2080,75C2133.3,100,2187,150,2240,166.7C2293.3,183,2347,167,2400,166.7C2453.3,167,2507,183,2560,162.5C2613.3,142,2667,83,2720,58.3C2773.3,33,2827,42,2880,70.8C2933.3,100,2987,150,3040,179.2C3093.3,208,3147,217,3200,220.8C3253.3,225,3307,225,3360,187.5C3413.3,150,3467,75,3520,54.2C3573.3,33,3627,67,3680,95.8C3733.3,125,3787,150,3813,162.5L3840,175L3840,250L3813.3,250C3786.7,250,3733,250,3680,250C3626.7,250,3573,250,3520,250C3466.7,250,3413,250,3360,250C3306.7,250,3253,250,3200,250C3146.7,250,3093,250,3040,250C2986.7,250,2933,250,2880,250C2826.7,250,2773,250,2720,250C2666.7,250,2613,250,2560,250C2506.7,250,2453,250,2400,250C2346.7,250,2293,250,2240,250C2186.7,250,2133,250,2080,250C2026.7,250,1973,250,1920,250C1866.7,250,1813,250,1760,250C1706.7,250,1653,250,1600,250C1546.7,250,1493,250,1440,250C1386.7,250,1333,250,1280,250C1226.7,250,1173,250,1120,250C1066.7,250,1013,250,960,250C906.7,250,853,250,800,250C746.7,250,693,250,640,250C586.7,250,533,250,480,250C426.7,250,373,250,320,250C266.7,250,213,250,160,250C106.7,250,53,250,27,250L0,250Z"></path></svg>
                <div className="body z-10 mt-10">
                  <h1 className="asd bg-[#8b89893f] w-9/12 h-8 m-2 rounded-2xl p-2 text-black text-[12px]  ">
                    hi 👋 how can i help you with
                  </h1>
                </div>

                <div className="footer absolute  w-[100%] bottom-0 h-[10vh] rounded-b-2xl text-black text-center">
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 relative  border-gray-300 text-gray-900 text-sm rounded-lg   focus:outline-none focus:border-white focus:border-b-0 boroder-0  block w-full p-2.5  "
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                  <div className="h-[6vh]  w-[6vh] rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 absolute -right-0 top-0">
                    <button>
                      
                      <IoMdSend className="text-white h-4 w-4  relative top-[10px] left-[2px] " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>

      }





    </>
  );
};

export default WhatsappBot;
