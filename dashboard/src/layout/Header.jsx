import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = ({ showsidebar, setShowsidebar }) => {
  return (
    <div className='fixed top-0 left-0 w-full px-2 py-5 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] flex justify-between items-center bg-[#283046] px-5 text-[#dcdcdc] transition-all h-[65px] rounded-md'>
        <div onClick={() => setShowsidebar(!showsidebar)} className='h-[35px] cursor-pointer text-xl w-[35px] bg-indigo-500 flex justify-center items-center lg:hidden'>
          <span ><AiOutlineMenuFold /></span>
        </div>
        <div className="hidden md:block">
          <input className='px-3 py-2 outline-none border rounded-md focus:border-indigo-600 bg-transparent border-slate-600 overflow-hidden' type="text" name='search' placeholder='Search here...' />
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className='text-[18px] font-semibold'>Jakir Khan</h2>
                <span className='text-[14px] w-full'>admin</span>
              </div>
              <img className='w-[45px] h-[45px] rounded-full overflow-hidden' src="/images/admin.jpg" alt="admin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

