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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto w-[100%]">
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
                <span className=' absolute z-30 -top-10 rounded-full bg-[#2222] w-8 h-8 right-0' onClick={closeModal}> 
                <IoMdCloseCircle className='w-4 h-4 absolute top-2 left-2 text-white'/>
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
