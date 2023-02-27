import React from 'react'

const RestPassword = () => {
    return (
        <>
            <h1 className="text-theme text-[30px] font-bold">REST PASSWORD</h1>
            <input
                inputMode="numeric"
                className="lg:w-[100%] my-6 border-b-2 border-slate-300 md:w-[100%]  sm:w-[100%] xs:w-[100%] inline-block text-[10px] relative xs:text-[20px] sm:text-[15px] placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  " placeholder="Email"
                type="email"
                name="search"
                required
            />
            <div className="button  flex  justify-center lg:w-[100%] xs:w-[80vw] sm:w-[100vw] md:w-[100vw] my-4">
                <button className="bg-theme w-[60%] h-[6vh]  rounded-md text-white">
                    Rest Now
                </button>
            </div>

        </>
    )
}

export default RestPassword