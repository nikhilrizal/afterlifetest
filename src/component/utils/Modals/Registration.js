import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiMailSendLine } from "react-icons/ri";
import CustModal from "./CoreModal";

const RegistrationModal = (props) => {
  let { setIsOpen, isOpen } = props;
  return (
    <CustModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className=" transform flex items-center flex-col overflow-hidden w-[57vh] h-[80vh] max-w-md  relative rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <div className="flex items-center flex-col w-[100%] justify-center  h-[90%]">
          <h1 className="text-center text-black font-extrabold text-2xl w-[100%] px-7">
            Unlock 20K + Mockup Design by Signing up
          </h1>
          <p className="text-gray-400 text-center mt-4 w-[100%] ">
            Highly customizable 3Ds, Illustrations, source files.
          </p>
          <button
            type="button"
            class="text-white h-12 mt-10 justify-center w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <FcGoogle className="w-8 h-8 rounded-md mr-2 -ml-1 bg-white" />
            Sign in with Google
          </button>
          <button
            type="button"
            class="text-black h-12v   border-2 border-slate-500  mt-5 justify-center w-full bg-[#ffffff] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <RiMailSendLine className="w-8 h-8 rounded-md mr-2 -ml-1 bg-white text-black " />
            Sign up with email
          </button>
          <div className="absolute bg-[#a09a9a3f] text-black left-0 bottom-0 w-[100%]  h-12">
            <div className="flex justify-center w-[100%] h-[90vh] ">
              Already have an account? Log in.
            </div>
          </div>
        </div>
      </div>
    </CustModal>
  );
};

export default RegistrationModal;
