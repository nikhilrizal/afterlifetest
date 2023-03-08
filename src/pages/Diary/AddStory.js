import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Arrow from "../../../src/styles/peace/Arrow.png";
import flower from "../../../src/styles/peace/Rose.png";
import { Link } from "react-router-dom";
import "../../../src/styles/AddStoryui.css";
import Button from "../../component/utils/Button";

function playSoundEffect() {
  let beat = new Audio(
    "https://www.executivesdiary.com/diary-template/js/flip.mp3"
  );
  beat.play();
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const modules = {
  toolbar: [[{ header: [1, 2, false] }], ["bold", "blockquote"]],
};

const PastalCover = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage:
    "url(" +
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNjE5LWMtcGxhaW4tYmItMDAxZC5qcGc.jpg" +
    ")",
};
export const AddStory = () => {
  const [value, setValue] = React.useState("ss");

  return (
    <div className="flex lg:h-screen  md:h-screen  sm:h-screen  xs:h-screen  justify-center  bg-[#c0cfe5]  w-screen overflow-hidden ">
      <Link className="absolute z-10 top-6 left-6" to="/">
        <span className="text-black w-16 h-16 font-bold relative rounded-full bg-theme  inline-block float-left">
          <IoIosArrowBack className="text-white top-2 left-1.5 text-5xl absolute" />
        </span>
      </Link>

      <div class="text-center lg:mt-10 md:mt-16  sm:mt-4 xs:mt-[29%]  text-3xl w-screen ">
        <div className="flex flex-col justify-center items-center h-fit relative">
          <div className="bg-indigo-400   p-4 rounded-lg  flex justify-center  lg:w-[75vw]   md:w-[75vw]  sm:w-[100vw] xs:w-[100vw] h-[80vh] relative">
            <span className="absolute bg-[#98711522] rounded-t-md h-[100%] top-0 -z-5 left-1/2  w-[2px]"></span>
            <div className="bg-[#eae8e8] flex justify-center  w-[100%]">
              <div className="w-[100%] h-[100%]  shadow-2xl relative  p-2 flex">
                <div
                  className={`bg-[#eae8e8]  lg:w-[50%] md:w-[50%] sm:w-[50%] xs:w-[100%] h-[100%] relative  `}
                >
                  <>
                    <div className="flex-col relative w-[100%] justify-center mt-1  p-2">
                      <input
                        inputMode="text"
                        className="lg:w-[100%] text-black h-10 md:w-[100%] sm:w-[100%] xs:w-[100%] text-center  font-extrabold   p-0 border-b-2 border-none  inline-block text-4xl relative  placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                        placeholder="Title"
                        type="text"
                        name="search"
                        required
                      />
                      <hr className="w-[20vw] bg-[#9c772122]" />
                      <small className="float-right mr-3 text-[14px] text-slate-400">
                        by Rommel
                      </small>
                    </div>
                  </>

                  <div className="flex flex-wrap overflow-auto justify-center max-h-[80%] w-[100%] p-4  mt-4">
                    <ReactQuill
                      formats={formats}
                      modules={modules}
                      className="lg:w-[100%]  text-black xs:w-[100%]  "
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                    <Button placeholder="SAVE" className="" />
                  </div>
                </div>
                <div
                  style={PastalCover}
                  className={`bg-[#eae8e8]  lg:w-[50%] md:w-[50%] sm:w-[50%] xs:w-[100%] h-[100%] relative  md:hidden xs:hidden sm:hidden lg:block`}
                >
                  <>
                    <span className="relative w-[100%] mb-7 flex justify-center">
                      <img
                        className="w-16 h-16 border-4 rounded-full z-30 -top-12 left-1/2"
                        src="https://images.ctfassets.net/ooa29xqb8tix/7wZ0gclgWMhpqlNghPRQ9D/6199988fd9a243f748f5e08483c115da/Csaba.jpg?w=400&q=50"
                        alt=""
                      />
                      <img
                        src={Arrow}
                        className="w-12 h-36 absolute   -rotate-90 lg:left-[41%]  lg:-top-[59%] md:left-[44%]  md:-top-[59%]  sm:left-[32%]  sm:-top-[59%] xs:left-[19%]  xs:-top-[59%] "
                        alt=""
                      />
                      <img
                        src={Arrow}
                        className="w-12 h-36 absolute   rotate-90 lg:right-[41%]  lg:-top-[59%] md:right-[44%]  md:-top-[59%]  sm:right-[32%]  sm:-top-[59%] xs:right-[19%]  xs:-top-[59%] "
                        alt=""
                      />
                      <img
                        src={flower}
                        className="w-26 h-24 absolute z-12  lg:right-[35%] lg:top-[40%]  md:right-[44%] md:top-[40%] sm:right-[44%] sm:top-[40%] xs:right-[27%] xs:top-[40%]"
                        alt=""
                      />
                    </span>
                  </>
                  <div className="flex flex-wrap overflow-auto justify-center max-h-[80%] w-[100%] p-4  mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
