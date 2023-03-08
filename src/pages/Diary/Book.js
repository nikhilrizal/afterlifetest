import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SlShareAlt } from "react-icons/sl";
import FakeData from "../../fakedata/Contributor.json";
import { Link } from "react-router-dom";
import bg from "../../styles/s.png";
import { useMediaQuery } from 'react-responsive'
const style = {
    backgroundImage: "url(" + bg + ") ",
    backgroundSize: "cover",
};
const FooTer = (props) => {
    let { index } = props;

    return (
        <>
            <div className="absolute  text-center  text-black w-[100%] bottom-4">
                <hr className="relative left-16  w-9/12" />
                <small className="text-slate-300 text-sm">page -{index}</small>
            </div>
        </>
    );
};

const Header = (props) => {

    return (
        <>
            <div className="text-center  text-black w-[100%] mt-4">
                <div className="flex-col relative justify-center  p-2">
                    <p className="text-[14px]">{props.Title}</p>
                    <hr className="w-full" />
                    {/* <img className='w-8 h-8 bg-purple-300  rounded-full float-right' src={process.env.REACT_APP_AVATAR} alt="" /> */}
                    <small className="float-right mr-3 text-[14px] text-slate-400">
                        {props.Author}
                    </small>
                    <small className="float-right mr-3 text-[14px] text-slate-400">
                        by
                    </small>
                </div>
            </div>
        </>
    );
};

const BoDy = (props) => {
    let { stroy } = props
    return (
        <>
            <div className="flex flex-wrap overflow-auto justify-center max-h-[65%] w-[100%] p-4  mt-4">
                <p className="text-black   text-[12px]">

                    {stroy}

                </p>
            </div>
        </>
    );
};


const Page = (props) => {
    let { data, index } = props;

    return (
        <>
            <div className={`bg-[#fff]  w-[100%] h-[100%] relative ${index === 1 ? 'flipanima' : ''} `} style={style}>
                {/* { index === 1  ? <p className="text-black">asd</p> : "" } */}
                <Header Title={data.Title} Author={data.Author} />
                <BoDy stroy={data.Story} />
                <FooTer index={index} />
            </div>
        </>
    );
};

const StickyShatre = () => {
    return (
        <>
            <div className="fixed justify-center gap-2  items-center flex bottom-5 w-32 rounded-r-xl  rounded-l-xl border-spacing-3 border-2 border-yellow-400 h-10 bg-white">
                <span className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 1219.547 1225.016"
                    >
                        <path
                            fill="#E0E0E0"
                            d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                        />
                        <linearGradient
                            id="a"
                            x1="609.77"
                            x2="609.77"
                            y1="1190.114"
                            y2="21.084"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#20b038" />
                            <stop offset="1" stopColor="#60d66a" />
                        </linearGradient>
                        <path
                            fill="url(#a)"
                            d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                        />
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill="#FFF"
                            d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                        />
                    </svg>
                </span>
                <span>
                    <SlShareAlt className="w-5 h-5 text-theme" />
                </span>
            </div>
        </>
    );
};


function playSoundEffect() {
    let beat = new Audio('https://www.executivesdiary.com/diary-template/js/flip.mp3');
    beat.play()
}

export const Book = () => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    const [pre, setPre] = useState(2)
    const [Counter, setCounter] = useState(0)
    const [ScreenState, setScreenState] = useState()
    const [tempstorage, settempstorage] = useState([])

    React.useLayoutEffect(() => {
        setPre(isTabletOrMobile ? 1 : 2)
        setScreenState(isTabletOrMobile ? 1 : 2)
        console.log("I RAN")
    }, [isTabletOrMobile])

    React.useEffect(() => {
        settempstorage(FakeData.slice(Counter, pre))
    }, [pre, Counter])
    function onNext() {

        setCounter(pre)
        setPre(pre + ScreenState)
        playSoundEffect()


    }
    function onPrevious() {
        setCounter(Counter - ScreenState)
        setPre(pre - ScreenState)
        playSoundEffect()
    }


    return (

        <div className="flex lg:h-screen  md:h-screen  sm:h-screen  xs:h-screen  justify-center  bg-[#c0cfe5]  w-screen overflow-hidden ">

            <Link className="absolute z-10 top-6 left-6" to="/">
                <span className="text-black w-16 h-16 font-bold relative rounded-full bg-theme  inline-block float-left">
                    <IoIosArrowBack className="text-white top-2 left-1.5 text-5xl absolute" />
                </span>
            </Link>

            <div class="text-center lg:mt-10 md:mt-16  sm:mt-4 xs:mt-[29%]  text-3xl w-screen ">

                <div className="flex flex-col justify-center items-center h-fit relative">
                    <div className="bg-indigo-400  p-4 rounded-lg  flex justify-center  lg:w-[75vw]   md:w-[75vw]  sm:w-[100vw] xs:w-[100vw] h-[80vh] relative">

                        <span className="absolute bg-yellow-300 rounded-t-md h-[100%] top-0 -z-5 left-1/2  w-[6px]"></span>
                        <div className="bg-[#eae8e8] flex justify-center  w-[100%]">
                            <button disabled={Counter === 0 ? true : false} onClick={onPrevious} className="absolute lg:bottom-1/2 xs:bottom-3 lg:-left-16 md:left-0 sm:left-0 xs:left-3 z-50 bg-[#eae8e8] h-16 w-16 flex justify-center items-center rounded-full">
                                <IoIosArrowBack className="" />
                            </button>
                            <button disabled={tempstorage.length === 0 ? true : false} onClick={onNext} className="absolute  lg:bottom-1/2 xs:bottom-3  bottom-1/2 lg:-right-16 md:right-0 sm:right-0 xs:right-3 z-50 bg-[#eae8e8] h-16 w-16 flex justify-center items-center rounded-full">
                                <IoIosArrowBack className="rotate-180   " />
                            </button>

                            <div className="w-[100%] h-[100%]  shadow-2xl relative  p-2 flex">

                                {
                                    tempstorage.length === 0 ? 'yes' :
                                        tempstorage.map((Contributor, index) => {
                                            return <>
                                                <Page key={index} data={Contributor} index={index} />
                                            </>
                                        })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <StickyShatre />
        </div>
    )

};

