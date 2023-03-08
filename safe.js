import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Arrow from '../../../src/styles/peace/Arrow.png'
import flower from '../../../src/styles/peace/Rose.png'
import { Link } from "react-router-dom";
import '../../../src/styles/AddStoryui.css'
import Button from '../../component/utils/Button';

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


export const AddStory = () => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'blockquote'],


        ],
    }
    let text = `START WRITING,
  
     `
    const style = {


        backgroundImage: 'url(' + 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIyLTEyL3JtNjA0YmF0Y2gyLWJnLXRhLTA4LWEuanBn.jpg' + ') ',
        backgroundSize: '590px',
        backgroundColor: '#c0cfe5',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom left',




    }
    const sty2 = {
        backgroundImage: 'url(' + 'https://images.rawpixel.com/image_png_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNjA0LWVsZW1lbnQtMDA3NC5wbmc.png' + ')'

    }
    const placeholder = {
        backgroundSize: '196px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + 'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00OTQtZnJhbWUtMDRhMi1remMzNXo2NC5wbmc.png' + ')'
    }
    const [value, setValue] = React.useState(text);

    return (
        <>


            <div class="flex lg:h-screen pb-40 justify-center  bird  w-screen overflow-y-auto " >

                <Link className="absolute z-10 top-6 left-6" to='/'>
                    <span className="text-black w-16 h-16 font-bold relative rounded-full bg-theme  inline-block float-left">
                        <IoIosArrowBack className="text-white top-2 left-1.5 text-5xl absolute" />
                    </span>
                </Link>

                <div class="text-center lg:mt-10 md:mt-16  sm:mt-4 xs:mt-[29%]  text-3xl w-screen ">
                    <div className="flex flex-col justify-center items-center h-fit relative">
                        <span className='relative w-[100%] mb-7 flex justify-center'>
                            <img className='w-16 h-16 border-4 rounded-full z-30 -top-12 left-1/2' src="https://images.ctfassets.net/ooa29xqb8tix/7wZ0gclgWMhpqlNghPRQ9D/6199988fd9a243f748f5e08483c115da/Csaba.jpg?w=400&q=50" alt="" />
                            <img src={Arrow} className='w-12 h-36 absolute   -rotate-90 lg:left-[41%]  lg:-top-[59%] md:left-[44%]  md:-top-[59%]  sm:left-[32%]  sm:-top-[59%] xs:left-[19%]  xs:-top-[59%] ' alt="" />
                            <img src={Arrow} className='w-12 h-36 absolute   rotate-90 lg:right-[41%]  lg:-top-[59%] md:right-[44%]  md:-top-[59%]  sm:right-[32%]  sm:-top-[59%] xs:right-[19%]  xs:-top-[59%] ' alt="" />
                            <img src={flower} className='w-26 h-24 absolute z-12  lg:right-[44%] lg:top-[40%]  md:right-[44%] md:top-[40%] sm:right-[44%] sm:top-[40%] xs:right-[27%] xs:top-[40%]' alt="" />
                        </span>
                        <span className='mt-3 text-lg'>
                            1970 - 2023
                        </span>
                    </div>
                    <input
                        inputMode="text"
                        className="lg:w-[63%] md:w-[63%] sm:w-[63%] xs:w-[63%] text-center  font-extrabold   my-3 border-b-2 border-none  inline-block text-4xl relative  placeholder:italic   placeholder:text-slate-400   bg-transparent   focus:outline-none focus:border-theme focus:border-b-2  "
                        placeholder="Title"
                        type="text"
                        name="search"
                        required
                    />

                    <div className="w-full  flex-col lg:w-[100%]  md:w-[63%] sm:w-[63%] xs:w-[100%] items-center justify-center flex">
                        <ReactQuill formats={formats} modules={modules} className='lg:w-[50%]  xs:w-[100%]  ' theme="snow" value={value} onChange={setValue} />
                        <Button placeholder='SAVE' className='' />
                    
                    </div>
                </div>
            </div>
        </>
    )
}
