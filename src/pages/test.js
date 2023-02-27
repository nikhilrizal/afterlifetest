import { useState } from "react";
import { Link } from "react-router-dom";


export default function Test() {

  return (
    <>  
              
    <div className="wave  relative  flex justify-center bg-black items-center h-screen w-screen">

    <div className="absolute">
    <div className="flex gap-2  flex-wrap flex-row w-[100%] h-[100%] ">
      <Link   className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2" to="/modal3"   >
      <button className='text-black rounded-2xl      '>
              Product Modal
          </button>
          </Link>
          <Link   className="rounded-2xl w-fit   h-[5%]  bg-white text-center p-2" to="/modal1" >
          <button className='text-black rounded-2xl      '>
              Login Modal
          </button>
          </Link>
          
               <Link   className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2" to="/DashBoard" >
                    
               <button className='text-black rounded-2xl      '>
                    Dashboard
          </button>
          </Link>
          <Link   className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2" to="modal2" >
          <button className='text-black rounded-2xl      '>
            Cookies
          </button>
          </Link>
          
               <Link   className="rounded-2xl w-fit  h-[5%]  bg-white text-center p-2" to="/Auth" >
               <button className='text-black rounded-2xl      '>
                    Auth Page
     
               </button>
               </Link>
           
          
          
      </div>        
    </div>
  
    </div>
    </>
  );
}
