import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaDove } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiaryPage = () => {



    return (
        <>


            <div className="h-screen w-screen  bg-white z-100  flex lg:flex-row md:flex-col sm:flex-col xs:flex-col">
                <Link className="absolute z-10 top-6 left-6" to='/'>
                    <span className="text-black w-16 h-16 font-bold relative rounded-full bg-theme  inline-block float-left">
                        <IoIosArrowBack className="text-white top-2 left-1.5 text-5xl absolute" />
                    </span>
                </Link>
                <section className="h-[100vh]        lg:w-[40%] md:w-[100%]  justify-center sm:w-[100%] xs:w-[100%]    items-center relative">
                    <div className="relative   text-black flex  flex-col    justify-center  lg:w-[100%] md:w-full sm:w-full p-14 xs:w-full lg:h-[120vh]   opacity-100 rounded-3xl  md:h-1/2 sm:h-[100%] xs:h-[120vh] ">
                        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row  gap-2">
                            <div className="relative w-[100%]">
                                <label className="text-theme">Name</label>
                                <input
                                    inputMode="text"
                                    className="lg:w-[100%] my-3 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                                    placeholder="First Name"
                                    type="text"
                                    name="search"
                                    required
                                />
                            </div>
                            <div className="relative w-[100%]">
                                <label className="text-theme">Last Name</label>
                                <input
                                    inputMode="text"
                                    className="lg:w-[100%] my-3 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                                    placeholder="Last Name"
                                    type="text"
                                    name="search"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row  my-12 gap-2">
                            <div className="relative w-[100%]">
                                <label className="text-theme">DATE OF BIRTH</label>
                                <input
                                    inputMode="text"
                                    className="lg:w-[100%] my-3 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                                    placeholder="Last Name"
                                    type="DATE"
                                    name="search"
                                    required
                                />
                            </div>
                            <div className="relative w-[100%]">
                                <label className="text-theme">DATE OF DEATH</label>
                                <input
                                    inputMode="text"
                                    className="lg:w-[100%] my-3 border-b-2 border-slate-300 md:w-[90%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                                    placeholder="Last Name"
                                    type="DATE"
                                    name="search"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-white    h-10 w-36 flex justify-center items-center  bg-theme rounded-3xl bottom-3 left-[34%]">
                                GET STARTED
                                <FaDove className="text-[19px] ml-3" alt="" />

                            </button>
                        </div>
                    </div>
                </section>
                <section className="h-screen     lg:flex md:w-[100%]  justify-center sm:hidden xs:hidden   items-center relative">
                    <div className="relative z-50 shadow-2xl florar flex   justify-center   lg:w-[100%] md:w-full sm:w-full p-14 xs:w-full lg:h-[90%]   rounded-3xl  md:h-1/2 sm:h-[60%] xs:h-[60%] ">
                        <img
                            className="w-[40%] h-full rounded-2xl border-2 border-theme"
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/death-anniversary-%26-obituaries-design-template-60ff6021f240dd608c02d31ea1cf996c_screen.jpg?ts=1622375345"
                            alt=""
                        />
                    </div>
                </section>
            </div>


        </>
    );
};

export default DiaryPage;
