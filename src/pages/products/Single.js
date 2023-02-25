import React from "react";
import { BiCart } from "react-icons/bi";

const Single = () => {
    return (<>
        <div className="lg:h-screen relative xs:h-auto md:h-auto sm:h-auto w-screen bg-white flex xs:flex-col-reverse sm:flex-col-reverse  md:flex-col lg:flex-row ">
            <section className="h-[100%] bg-white lg:w-[40%] md:w-[100%] sm:w-[100%] xs:w-[100%] flex items-center relative">
                <div className="flex flex-col w-[100%] text-black h-[50%]  p-3">
                    <h1 className="text-[22px] font-bold">
                        Animals- Lion Necklace Perfect
                    </h1>
                    <p>Made With Love</p>
                    <h1 className="text-[20px] font-light mt-2">$ 200</h1>
                    <div className="bg-[#c0a5c013] w-90 h-[80%] rounded-lg p-10">
                        Message on card: To my Amazing Queen. Beauty, Strength Wisdom,
                        Courage Loyalty, Kindness. You have so many good qualities that you
                        amaze me. No other woman could be such a perfect fit for me. I’m
                        proud to call you my Queen. Happy Valentine’s Day

                    </div>
                    <div className="p-3 m-2 lg:flex md:flex xs:hidden sm:hidden">

                        <button className="bg-blue-600 w-[60%] h-[6vh]   m-2  text-white ">Add to cart <BiCart className="inline-block w-6 h-8" /> </button>
                        <button className="bg-blue-600 w-[60%] h-[6vh]   m-2  text-white ">Buy Now</button>

                    </div>
                </div>
            </section>
            <section className="h-[100%]  lg:flex md:hidden sm:w-[100%] xs:w-[100%]  bg-[#f6debf]  lg:w-[60%] flex items-center relative">
                <div className="h-[90vh]   flex  justify-center items-center w-[100%]">
                    <section className="relative justify-center  lg:w-[90%] md:w-full sm:w-full p-14 xs:w-full lg:h-[96%]  bg-[#fdfdfd5c] opacity-100 rounded-3xl  md:h-1/2 sm:h-[60%] xs:h-[60%]">
                        <img
                            className="m-auto"
                            width="450"
                            heigth="700"
                            src="https://placeit.com/images/2023/01/15/joined-circle-amz-1.jpeg"
                            alt=""
                        />
                    </section>
                </div>
            </section>

        </div>
        <div className="footer sticky bg-white  w-[100vw] bottom-0 h-[10vh] rounded-lg  justify-center lg:hidden md:hidden xs:flex sm:flex">
                <button className="bg-blue-600 w-[15%] h-[5vh]   m-2  text-white ">Designing <BiCart className="inline-block w-6 h-8" /> </button>
                <button className="bg-blue-600 w-[15%] h-[5vh]   m-2  text-white ">Buy Now</button>
            </div>
    </>
    );
};

export default Single;
