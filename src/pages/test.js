import { useState } from "react";
import { Link } from "react-router-dom";


export default function Test() {

  return (
    <>  
              
    <div className="grid bg-black h-screen place-items-center w-screen wave  ">
      <div className="flex w-[100%] h-[100%] gap-1 items-center justify-center">
      <button className='text-black rounded-2xl  bg-white w-[10%]  h-[5%]  bg-theme'>
               <Link to="/modal3" >Product Modal</Link>
          </button>
          <button className='text-black rounded-2xl  bg-white w-[10%]  h-[5%]  bg-theme'>
               <Link to="/modal1" >Login Modal</Link>
          </button>
          <button className='text-black rounded-2xl  bg-white w-[10%]  h-[5%]  bg-theme'>
               <Link to="/DashBoard" >Dashboard</Link>
          </button>
          <button className='text-black rounded-2xl  bg-white w-[10%]  h-[5%]  bg-theme'>
               <Link to="modal2" >Cookies</Link>
          </button>
          <button className='text-black rounded-2xl  bg-white w-[10%]  h-[5%]  bg-theme'>
               <Link to="/Auth" >Auth Page</Link>
          </button>
          
      </div>          
    </div>
    </>
  );
}
