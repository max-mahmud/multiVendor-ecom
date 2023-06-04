import { Link, useNavigate } from "react-router-dom"
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { override } from "../../utils/utils";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { messageClear, seller_login } from "../../store/Reducers/authReducer";
import { toast } from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loader, successMessage, errorMessage } = useSelector(state => state.auth)

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(seller_login(state))
  }

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
      navigate("/")
    }
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
  }, [successMessage, errorMessage])

  return (
    <div className="min-h-screen min-w-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[360px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome To Ecommerce</h2>
          <p className="text-sm mb-3">Please Sign-in to your account and start your bussiness</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} value={state.email} className="px-3 py-2 outline-none border border-slate-700 bg-transparent focus:border-indigo-700 overflow-hidden text-[#d0d2d6] rounded-md" type="email" name="email" placeholder="Enter Email" id="email" required />
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="password">Password</label>
              <input onChange={handleChange} value={state.password} className="px-3 py-2 outline-none border border-slate-700 bg-transparent focus:border-indigo-700 overflow-hidden text-[#d0d2d6] rounded-md" type="password" name="password" placeholder="Enter Password" id="password" required />
            </div>
            <button disabled={loader ? true : false} className="bg-blue-600 font-semibold mb-3 w-full p-2 text-yellow-50 rounded hover:bg-blue-700 ">
              {
                loader ? <BeatLoader cssOverride={override} color="#ffffff" /> : "Login"
              }
            </button>
            <div className="">
              <p>Already have an account? <Link to={'/register'} className="text-blue-600 font-semibold">Sing Up</Link></p>
            </div>
            <div className="flex items-center mt-3 mb-3">
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
              <span className="w-[10%] flex justify-center pb-1">Or</span>
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer rounded bg-orange-800">
                <span className="text-xl"><FaGooglePlusG /></span>
              </div>
              <div className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer rounded bg-indigo-800">
                <span className="text-xl"><FaFacebookF /></span>
              </div>
              <div className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer rounded bg-blue-800">
                <span className="text-xl"><FaTwitter /></span>
              </div>
              <div className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer rounded bg-purple-800">
                <span className="text-xl"><FaGithub /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
