import React from "react";

import { Link } from "react-router-dom";
import { HiLogin } from "react-icons/hi";
import { toast } from "react-toastify";

const LoginPage = () => {
  const handelLogin = () => {
    
    toast.error("Opps its Should be number eg 50 100 ,200 ", {
      position: "top-left",
    });

  };
  return (
    <>
      <div className="w-[90%] ">
        <h1 className="text-4xl text-black text-[30px] font-bold inline-block">

          Login in
        </h1>
        <HiLogin className="inline-block rotate-180"> </HiLogin>
        <Link to="/Auth/Signup">
          <span className="text-sm"> Sign up </span>
        </Link>
      </div>
      <input
        inputMode="numeric"
        className="lg:w-[100%]  my-6 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic text-left  placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-white focus:border-b-0  "
        placeholder="Email"
        type="email"
        name="search"
        required
      />
      <input
        inputMode="numeric"
        className="lg:w-[100%] my-6 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-white focus:border-b-0  "
        placeholder="Password"
        type="text"
        name="search"
        required
      />
      <Link className="text-blue-600" to="/Auth/restpassword">
        Forgot password ?
      </Link>
      <div className="flex flex-col justify-center lg:w-[100%] xs:w-[80vw] sm:w-[100vw] md:w-[100vw] my-4">
        <button
          className="bg-blue-600 w-[100%] h-[6vh] my-2  rounded-md text-white "
          onClick={() => handelLogin()}
        >
          Login in
        </button>
        <button
          className="bg-[#563ede] w-[100%] h-[6vh]  flex justify-center   my-2 p-2  rounded-md text-white "
          onClick={() => handelLogin()}
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 48 48"
            ariaHidden="true"
            className=""
          >
            <path
              fill="#4285F4"
              d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
            ></path>
            <path
              fill="#34A853"
              d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
            ></path>
            <path
              fill="#FBBC05"
              d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
            ></path>
            <path
              fill="#EA4335"
              d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
            ></path>
            <path fill="none" d="M2 2h44v44H2z"></path>
          </svg>
          <span className="m-[4px]">
            Google
          </span>
        </button>
      </div>
    </>
  );
};

export default LoginPage;
