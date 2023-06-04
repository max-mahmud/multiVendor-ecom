import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";

const ChatSupport = () => {

  return (
    <div className='px-2 lg:px-7 py-5'>
      <div className="w-full p-4 rounded-md bg-[#283046] h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:w-[calc(100%-200ox)] md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img className='w-[43px] h-[43px] rounded-full p-[2px] border-green-500 border-2 ' src="/images/admin.jpg" alt="" />
                    <div className="absolute rounded-full w-[10px] h-[10px] bg-green-500 right-0 bottom-0"></div>
                  </div>
                  <h2 className=' font-semibold text-white'>Support</h2>
                </div>
            </div>
            <div className="py-4">
              <div className="p-3 bg-slate-900 h-[calc(100vh-290px)] overflow-y-auto rounded-md ">
                <div className='w-full flex justify-start items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="/images/admin.jpg" alt="" />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full bg-emerald-600 shadow-lg shadow-emerald-500/40 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ?</span>
                    </div>
                  </div>
                </div>

                <div className='w-full flex justify-end items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div className='flex justify-center items-start flex-col w-full bg-sky-700 shadow-lg shadow-blue-500/40 text-white py-1 px-2 rounded-sm'>
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
                    <div className='flex justify-center items-start flex-col w-full bg-emerald-600 shadow-lg shadow-emerald-500/40 text-white py-1 px-2 rounded-sm'>
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

export default ChatSupport
