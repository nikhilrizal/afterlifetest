import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

/// this is the main class of modal f   orm 
export default function CustModal({children,isOpen, setIsOpen}) {
  

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-10" onClose={closeModal}>
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0   bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed  inset-0  overflow-hidden  w-[100%]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                
              >
                <div className='relative '>
                <img className="absolute -top-2 -left-5 z-10" src="https://www.digitalocean.com/_next/static/media/coral-cta-top.89e13f0f.svg" alt="" />
                <img className="absolute -bottom-4 -right-5 z-10" src="https://www.digitalocean.com/_next/static/media/coral-cta-bottom.b2063e35.svg" alt="" />

                <span className=' absolute  z-30  rounded-full bg-light w-12  h-12 top-2 right-2' onClick={closeModal}> 
                <IoMdCloseCircle className='w-8 h-8 absolute top-2 left-2 text-theme'/>
                 </span>
                    {children}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
