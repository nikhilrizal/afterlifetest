import React from 'react'
import DropDown from "../../component/utils/DrowDown";
import wave from "../../styles/svg.png"

function Ordersui() {
    return (
        <>

            <div className="flex w-[100%] h-[100%] mt-12 ">
                <div className="flex w-[100%] ">
                    <div className="flex w-[47%] ">
                        <img
                            className="w-12 h-12 rounded-full"
                            src={`${process.env.REACT_APP_INITIALS}nik`}
                            alt=""
                        />
                        <div className="p-1">
                            <p className="text-blue-500">Card</p>
                            <p className="text-gray-500">Sat wed 2023</p>
                            <p className="text-gray-500 text-[8px] text-left">OderId 21332</p>
                        </div>
                    </div>
                    <div className="w-[37%]">
                        <span className="inline-flex w-18  h-4 items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-200 dark:text-yellow-600">
                            <span className="w-2 h-2 mr-1 bg-yellow-600 rounded-full"></span>
                            Pending
                        </span>
                    </div>

                    <div className="text-blue-700 flex">
                        <p className=" text-xl">$900</p>
                        <div className="p-1">
                            <p className="text-gray-500">stripe</p>
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

const OrdersPage = () => {
    return (
        <div className="p-2">


            <h1 className="text-black text-3xl mt-10 font-extrabold">
                Order Details
            </h1>
            <div className="flex w-[100%] h-[100%] text-gray-600 font-bold mx-2 mt-10">
                <h1 className="mx-2">All orders</h1>
                <h1 className="mx-2">Completed</h1>
                <h1 className="mx-2">Pending</h1>
                <h1 className="mx-2">Failed</h1>
            </div>
            <div className="p-0 mt-20 lg:w-full xs:w-full sm:w-full md:w-full  shadow-slate-400">

                <Ordersui />

            </div>
        </div>
    )
}

export default OrdersPage