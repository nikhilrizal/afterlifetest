import cookie from './../../../styles/icons/cookie.jpg'
import CoreModal from './CoreModal'
const Cookies = () => {

  return (
    <CoreModal> 
    
      <div className=" transform overflow-hidden w-[50vh] h-[60vh] max-w-md  relative rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <div className="flex flex-col justify-center items-center h-[80%] w-[100%] ">
          <img className='lg:w-25 md:w-25 xs:w-45 sm:w-45  lg:h-20 md:h-35  sm:h-35 xs:h-35' src={cookie} alt="" srcset="" />
          <h1 className='text-center text-black font-extrabold text-4xl'>
            Cookies !
          </h1>
          <p className='text-black text-md font-semibold text-center md:text-2xl xs:text-2xl lg:text-[12px] sm:text-2xl  mt-4'>We use Cookies to make your experience better</p>
        </div>
        <div className='absolute left-0 bottom-0 w-[100%] h-10 '>
          <div className="flex h-[100%] border-2">
            <button className='text-black  bg-white w-[50%]  h-[100%]'>Privacy Policy</button>
            <button className='text-white bg-blue-500  w-[50%] h-[100%] ' > Ok</button>
          </div>
        </div>
      </div>
    
    </CoreModal>
    
  );


}

export default Cookies