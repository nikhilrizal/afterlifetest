import { useState } from "react";
import { Link } from "react-router-dom";


export default function Test() {

  return (
    <>  
              
    <div className="grid bg-black h-screen place-items-center w-screen wave  ">
      <div className="flex w-[60%] h-[100%] gap-1 items-center justify-items-stretch">
      <Link   className="rounded-2xl w-[20%]  h-[5%]  bg-white text-center" to="/modal3"   >
      <button className='text-black rounded-2xl      '>
              Product Modal
          </button>
          </Link>
          <Link   className="rounded-2xl w-[20%]  h-[5%]  bg-white text-center" to="/modal1" >
          <button className='text-black rounded-2xl      '>
              Login Modal
          </button>
          </Link>
          
               <Link   className="rounded-2xl w-[20%]  h-[5%]  bg-white text-center" to="/DashBoard" >
                    
               <button className='text-black rounded-2xl      '>
                    Dashboard
          </button>
          </Link>
          <Link   className="rounded-2xl w-[20%]  h-[5%]  bg-white text-center" to="modal2" >
          <button className='text-black rounded-2xl      '>
            Cookies
          </button>
          </Link>
          
               <Link   className="rounded-2xl w-[20%]  h-[5%]  bg-white text-center" to="/Auth" >
               <button className='text-black rounded-2xl      '>
                    Auth Page
     
               </button>
               </Link>
           
          
          
      </div>          
    </div>
    </>
  );
}
