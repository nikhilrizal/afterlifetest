import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdEmail, MdShare, MdOutlineTouchApp } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { FaDove } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";
import paper from '../../styles/peace/patch.png'
const sty2 = {
  backgroundImage: 'url(' + paper + ')',
 backgroundSize: '342px',
 backgroundPositionX: '-14px',
 backgroundPositionY: '-91px',
}
const main = {
  backgroundImage: 'url(' + 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00OTQtYmctMDA2LXguanBn.jpg' + ')',
 backgroundSize: 'cover',


}
const VirtualDairy = () => {
  return (
    <>
      <div className="h-screen w-screen  bg-white   flex lg:flex-row md:flex-col sm:flex-col xs:flex-col">
        <div className="text-black text-[20px] p-10 absolute  w-[100%] z-50  top-0">
          <span className="text-black w-16 h-16 font-bold relative rounded-full bg-theme  inline-block float-left">
            <IoIosArrowBack className="text-white top-2 left-1.5 text-5xl absolute" />
          </span>
        </div>

        <section style={main} className="h-screen   lg:w-[80vw]     lg:flex md:w-[100%]  justify-center sm:w-[100%] xs:w-[100%]    items-center relative">
          <div className="relative  text-black flex items-center    justify-center  lg:w-[100%] md:w-full sm:w-full p-14 xs:w-full lg:h-[86%]   opacity-100 rounded-3xl  md:h-1/2 sm:h-[100%] xs:h-[100%] ">
            <span  className="bg-slate-400  florar w-[5px] relative h-full">
              <div className="absolute  top-[0%] ">
                <span style={sty2} className="lg:w-[20vw] lg:h-[17vh] md:w-[20vw] md:h-[17vh]   sm:w-[20vw] sm:h-[17vh] xs:w-[47vw] xs:h-[13vh] left-2  bg-transparent  rounded-lg absolute">
                  <VscCircleFilled className="text-theme w-6 h-6 absolute top-[42%] -left-[7%]" />
                  <div className="h-[100%]  text-white   w-full ">
                    <div className="flex  flex-col items-center justify-center p-1">
                      <img
                        className="absolute"
                        src="https://designcode.io/images/waves/certificate-lines.svg"
                        alt=""
                      />
                      <h1 className="lg:text-2xl md:text-md sm:text-2xl xs:text-md  text-center">
                        Create An Account
                      </h1>
                      <div className="relative">
                        <img
                          src={process.env.REACT_APP_AVATAR}
                          className="w-12 h-12 relative mt-3  rounded-full inline-block"
                          alt=""
                        />
                        <MdEmail className="absolute w-4 h-4 top-3 text-white -right-4" />
                      </div>
                    </div>
                  </div>
                </span>

                <span style={sty2} className="bg-red lg:w-[20vw] lg:h-[17vh] md:w-[20vw] md:h-[17vh]   sm:w-[20vw] sm:h-[17vh] xs:w-[47vw] xs:h-[17vh] top-36 right-2 bg-transparent mixpattern rounded-lg absolute">
                  <VscCircleFilled className="text-theme w-6 h-6 absolute top-[42%]  -right-[7%]" />

                  <div className="h-[100%]  text-white   w-full ">
                    <div className="h-[100%]  text-white   w-full ">
                      <div className="flex flex-col items-center justify-center p-2">
                        <h1 className="lg:text-2xl md:text-2xl sm:text-2xl xs:text-md  text-center">
                          PICK A DESIGN
                          <MdOutlineTouchApp className="absolute z[999] w-6 h-6 top-2  xs:block sm:block md:hidden lg:hidden  right-4" />
                        </h1>
                        <div className="flex ml-5 relative">
                          <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/death-anniversary-%26-obituaries-design-template-60ff6021f240dd608c02d31ea1cf996c_screen.jpg?ts=1622375345"
                            className="w-12 h-14 mt-3  rounded-lg "
                            alt=""
                          />
                          <img
                            src="https://i.pinimg.com/474x/8b/03/30/8b03307a31da401b11179a943f3c2e29.jpg"
                            className="w-12 h-14 relative  top-0 right-8 mt-3  rounded-lg "
                            alt=""
                          />
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULh2FI960xp0NbYMlS4jr7Vc07ybFxuZozg&usqp=CAU"
                            className="w-12 h-14 relative  top-0 right-12 mt-3  rounded-lg "
                            alt=""
                          />
                          <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/death-anniversary-%26-obituaries-design-template-68bdfdd24106e06bd248de7a27256ccd_screen.jpg?ts=1614861663"
                            className="w-12 h-14 relative  top-0 right-16 mt-3  rounded-lg"
                            alt=""
                          />
                          <MdOutlineTouchApp className="absolute z[999] w-8 h-8 top-3  xs:hidden sm:hidden md:block lg:block  right-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </span>

                <span  style={sty2} className="bg-red lg:w-[20vw] lg:h-[16vh] md:w-[20vw] md:h-[17vh]   sm:w-[20vw] sm:h-[17vh] xs:w-[47vw] xs:h-[17vh] top-80 left-2 bg-transparent rounded-lg absolute">
                  <div className="h-[100%]   text-white   w-full ">
                    <VscCircleFilled className="text-theme w-6 h-6 absolute top-[42%] -left-[7%]" />
                    <div className="flex flex-col items-center justify-center p-2">
                      <img
                        className="absolute"
                        src="https://designcode.io/images/waves/certificate-lines.svg"
                        alt=""
                      />
                      <h1 className="lg:text-lg md:text-2xl sm:text-lg xs:text-md  text-center">
                        SHARE WITH YOUR FAMILY
                        <MdShare className="absolute z-[999] w-5 h-5 top-6  xs:block sm:block md:hidden lg:hidden  right-10" />
                      </h1>
                      <div className="relative flex ml-16 justify-evenly  text-center">
                        <img
                          src={process.env.REACT_APP_AVATAR}
                          className="w-12 h-12 mt-3  rounded-full "
                          alt=""
                        />
                        <img
                          src="https://images.ctfassets.net/ooa29xqb8tix/40cccdR5LWQqAcCiuI4kU4/9048063dc9e43649ecb5e43c12043cb1/Roy.jpg?w=400&q=50"
                          className="w-12 h-12 relative  top-0 right-8 mt-3  rounded-full "
                          alt=""
                        />
                        <img
                          src="https://images.ctfassets.net/ooa29xqb8tix/7wZ0gclgWMhpqlNghPRQ9D/6199988fd9a243f748f5e08483c115da/Csaba.jpg?w=400&q=50"
                          className="w-12 h-12 relative  top-0 right-12 mt-3  rounded-full "
                          alt=""
                        />
                        <img
                          src={process.env.REACT_APP_AVATAR}
                          className="w-12 h-12 relative  top-0 right-16 mt-3  rounded-full"
                          alt=""
                        />

                        <MdShare className="absolute z[999] w-8 h-8 top-3  xs:hidden sm:hidden md:block lg:block  right-8" />
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </span>
          </div>
        </section>
        <Link
          to="/StartBook"
          className="text-white fixed z-90  h-10 w-36 flex justify-center items-center lg:hidden bg-theme rounded-3xl bottom-3 left-[34%]"
        >
          GET STARTED
          <FaDove className="text-[19px] ml-3" alt="" />
        </Link>
        <section className="h-screen florar     lg:flex md:w-[100%]  justify-center sm:hidden xs:hidden   items-center relative">
          <div className="relative florar z-50 shadow-2xl  flex   justify-start   lg:w-[100%] md:w-full sm:w-full p-14 xs:w-full lg:h-[90%]   rounded-3xl  md:h-1/2 sm:h-[60%] xs:h-[60%] ">
            <div className="relative z-50 shadow-2xl  flex   justify-start   lg:w-[100%] md:w-full sm:w-full p-14 xs:w-full lg:h-[100%]  bg-[#00bfff0f] bg-opacity-100 rounded-3xl  md:h-1/2 sm:h-[60%] xs:h-[60%] ">
              <Link
                style={sty2}
                to="/StartBook"
                className="text-white absolute -left-10 h-10 w-36 flex justify-center  items-center  bg-theme rounded-3xl top-1/2"
              >
                START
                <BsArrowLeft className="rotate-180 text-[20px]" />
              </Link>
              <ul className="align">
                <li>
                  <figure className="book">
                    <ul className="hardcover_front">
                      <li>
                        <div className="coverDesign yellow">
                          <span className="ribbon">v 1.2</span>
                          <h1></h1>
                          <p></p>
                        </div>
                      </li>
                      <li></li>
                    </ul>

                    <ul className="page">
                      <li></li>
                      <li>
                        <a
                          className="btn"
                          href="https://tympanus.net/Development/AnimatedBooks/#"
                        >
                          look inside
                        </a>
                      </li>

                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                    <ul className="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VirtualDairy;
