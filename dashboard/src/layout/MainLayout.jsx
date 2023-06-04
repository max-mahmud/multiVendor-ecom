import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [showsidebar, setShowsidebar] = useState(false)
  return (
    <div className='bg-[#161d31] min-h-screen w-full'>
      <Header showsidebar={showsidebar} setShowsidebar={setShowsidebar} />
      <Sidebar showsidebar={showsidebar} setShowsidebar={setShowsidebar} />
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout

