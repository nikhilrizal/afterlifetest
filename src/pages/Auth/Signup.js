import React, { useState } from "react";

import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signup = () => {
  const [ShowPassowrd, setShowPassowrd] = useState(true)
  return (
    <>
      <h1 className="text-black text-[30px] font-bold">Create Account</h1>
      <input
        inputMode="numeric"
        className="lg:w-[100%] my-6 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-white focus:border-b-0  "
        placeholder="Email"
        type="email"
        name="search"
        required
      />
      <div className="relative">
        <input
          inputMode="numeric"
          className="lg:w-[100%] my-6 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-white focus:border-b-0  "
          placeholder="Password"
          type={ShowPassowrd ? "text" : "password"}
          name="search"
          required
        />

        <span className="absolute top-0 xs:top-4 lg:right-[0%] xs:right-[6%] sm:right-[6%] md:right-[16%]">
          {
            ShowPassowrd ? <BiShowAlt className="h-6 w-6  " onClick={() => setShowPassowrd(false)} /> : <BiHide className="h-6 w-6  " onClick={() => setShowPassowrd(true)} />
          }

        </span>
      </div>
      <input
        inputMode="numeric"
        className="lg:w-[100%] my-3 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-white focus:border-b-0  "
        placeholder="Password"
        type={ShowPassowrd ? "text" : "password"}
        name="search"
        required
      />

      <div className="button  flex  justify-center md:w-[90%]  sm:w-[100%] xs:w-[100%]  my-3">
        <button className="bg-blue-600 w-[60%] h-[6vh]  rounded-md text-white">
          Create Account
        </button>
      </div>
      <Link className="text-blue-600" to="/Auth">
        Already Have Account ?
      </Link>
    </>
  );
};

export default Signup;
