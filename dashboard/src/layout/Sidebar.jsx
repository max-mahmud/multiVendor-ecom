import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { getNavs } from '../navigation'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../store/Reducers/authReducer';


const Sidebar = ({showsidebar, setShowsidebar}) => {
  const dispatch = useDispatch()
  const { role } = useSelector(state => state.auth)

  const { pathname } = useLocation()
  const [allNav, setAllNav] = useState([])

  useEffect(() => {
    const navs = getNavs(role)
    setAllNav(navs)
  }, [])
  return (
    <div>
      <div onClick={()=> setShowsidebar(!showsidebar)} className={`${showsidebar ? "w-full h-screen bg-slate-400/20 z-20 fixed top-0 right-0 bottom-0 left-0 " : ''}`}></div>
      <div className={`w-[260px] bg-[#283046] fixed h-screen top-0 z-50 transition-all ${showsidebar ? "left-0": "-left-[260px] lg:left-0"}`}>
        <div className='h-[70px] flex justify-center items-center'>
          <Link to={'/'} className='w-[180px] h-[50px]'>
            <img className='w-full h-full' src="/images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className='px-[16px]'>
          <ul>
            {
              allNav.map((n, i) => {
                return <li key={i}>
                  <Link to={n.path} className={`${pathname === n.path ? "bg-slate-600 text-white duration-200" : "text-[#ddd] duration-200"}  font-normal flex px-3 py-2 justify-start items-center gap-3 w-full mb-1 hover:pl-4`}>
                    <span className='text-xl'>{n.icon}</span>
                    <span>{n.title}</span>
                  </Link>
                </li>
              })
            }
            <li>
              <button onClick={()=>dispatch(logout)} className='text-[#ddd] duration-200  flex px-3 py-2 justify-start items-center gap-3 w-full mb-1 hover:pl-4'>
                <span className='text-2xl' ><MdLogout /></span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

