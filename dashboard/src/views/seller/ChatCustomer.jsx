import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";

const ChatCustomer = () => {
  const [show, setShow] = useState(false);
  const sellerId = 32;
  return (
    <div className='px-2 lg:px-7 py-5'>
      <div className="w-full p-4 rounded-md bg-[#283046] h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className={`w-[280px] h-full absolute z-10 ${show ? "-left-4 " : "-left-[336px]"} md:left-0 md:relative transition-all`}>
            <div className="overflow-y-auto md:bg-transparent w-full h-[calc(100vh-177px)] bg-slate-800 ">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-2 md:pb-3 text-white ">
                <h2>Customer</h2>
                <span onClick={() => setShow(!show)} className='block cursor-pointer md:hidden p-[6px] bg-yellow-500/20 text-xl'><MdClose /></span>
              </div>
              <div className="h-[60px] bg-slate-700 flex justify-start gap-2 items-center cursor-pointer p-2 text-white rounded-sm ">
                <div className="relative">
                  <img className='w-[38px] h-[38px] rounded-full p-[2px] border-white border-2 ' src="/images/admin.jpg" alt="" />
                  <div className="absolute rounded-full w-[10px] h-[10px] bg-green-500 right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col">
                  <div className="">
                    <h2 className=' font-semibold'>Jakir</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-200ox)] md:pl-4">
            <div className="flex justify-between items-center">
              {
                sellerId && <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img className='w-[43px] h-[43px] rounded-full p-[2px] border-green-500 border-2 ' src="/images/admin.jpg" alt="" />
                    <div className="absolute rounded-full w-[10px] h-[10px] bg-green-500 right-0 bottom-0"></div>
                  </div>
                  <h2 className=' font-semibold text-white'>Jakir</h2>
                </div>
              }
              <div onClick={() => setShow(!show)} className="w-[33px] h-[33px] md:hidden rounded-sm bg-blue-600 text-xl text-white flex justify-center cursor-pointer  items-center ">
                {
                  show ? <MdClose /> : <GoListUnordered />
                }
              </div>
            </div>

            <div className="py-4">
              <div className="p-3 bg-slate-900 h-[calc(100vh-290px)] overflow-y-auto rounded-md ">
                <div className='w-full flex justify-start items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="/images/admin.jpg" alt="" />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full bg-orange-600  shadow-lg shadow-orange-500/40 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ?</span>
                    </div>
                  </div>
                </div>

                <div className='w-full flex justify-end items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                  <div className='flex justify-center items-start flex-col w-full bg-teal-600 shadow-lg shadow-teal-500/40 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ?</span>
                    </div>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="/images/admin.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className='w-full flex justify-start items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="/images/admin.jpg" alt="" />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full bg-orange-600  shadow-lg shadow-orange-500/40 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex justify-between gap-3">
              <input className='bg-slate-800 outline-none w-full border border-slate-600 focus:border-blue-600 p-2 text-white' type="text" name="" id="" placeholder='Send Message..' />
              <button className='bg-cyan-600 lg:px-7 px-4 rounded-sm py-2 font-semibold hover:bg-cyan-700 text-white'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatCustomer
