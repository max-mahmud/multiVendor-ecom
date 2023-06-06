import { MdEmail, MdFacebook , MdOutlineKeyboardArrowDown} from "react-icons/md";
import { FaLinkedinIn , FaUser, FaLock} from "react-icons/fa";
import { BsTwitter , BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";

const Headers = () => {
  const user = true;
  return (
    <div className='w-full bg-white'>
      <div className='header-top bg-[#eeeeee] md-lg:hidden'>
        <div className='w-[85%] lg:w-[90%] mx-auto'>
          <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
            <ul className='flex justify-start items-center gap-8'>
              <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                <span><MdEmail /></span>
                <span>sheikhfarid@gmail.com</span>
              </li>
              <span>Multi vendor ecommerce</span>
            </ul>
            <div>
              <div className='flex justify-center items-center gap-10'>
                <div className='flex justify-center items-center gap-4'>
                  <a href="#"><MdFacebook /></a>
                  <a href="#"><BsTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><BsGithub /></a>
                </div>
                <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]'>
                  <img src="http://localhost:3000/images/language.png" alt="" />
                  <span><MdOutlineKeyboardArrowDown /></span>
                  <ul className='absolute invisible transition-all to-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                    <li>Bangla</li>
                    <li>English</li>
                  </ul>
                </div>
                {
                  user ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm' to='/dashboard'>
                    <span><FaUser /></span>
                    <span>Sheikh farid</span>
                  </Link> : <div className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
                    <span><FaLock /></span>
                    <span>Login</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers
