import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_seller, messageClear, seller_status_update } from './../../store/Reducers/sellerReducer';
import { toast } from 'react-hot-toast';

const SellerDetails = () => {
    const { sellerId } = useParams()
    const dispatch = useDispatch()
    const { seller, successMessage } = useSelector(state => state.seller)

    useEffect(() => {
        dispatch(get_seller(sellerId))
    }, [sellerId])

    const [status, setStatus] = useState()

    const statusSubmit = (e) => {
        e.preventDefault()
        dispatch(seller_status_update({sellerId, status}))
    }

    useEffect(()=>{
        if(successMessage){
            toast.success(successMessage)
            dispatch(messageClear())
        }
    },[successMessage])

    useEffect(()=>{
        if(seller){
            setStatus(seller.status)
        }
    },[seller])
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md">
                <div className="flex flex-wrap w-full text-[#d0d2d6]">
                    <div className="lg:w-3/12 flex justify-center items-center">
                        {
                            seller?.image ? <img className='w-full h-[230px] object-cover' src="/images/admin.jpg" alt="img" /> : <span className='text-xl text-yellow-200'>Image not uploaded</span>
                        }
                    </div>
                    <div className="lg:w-4/12">
                        <div className="py-2 px-4">
                            <div className="py-2 text-lg">
                                <h2>Basic Info</h2>
                            </div>
                            <div className="flex justify-between gap-2 p-3 rounded flex-col bg-slate-800">
                                <div className="flex gap-2">
                                    <span>Name:</span>
                                    <span>{seller?.name}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Email:</span>
                                    <span>{seller?.email}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Role:</span>
                                    <span>{seller?.role}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Status:</span>
                                    <span>{seller?.status}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Payment Account:</span>
                                    <span>{seller?.payment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12">
                        <div className="py-2 px-4">
                            <div className="py-2 text-lg">
                                <h2>Address</h2>
                            </div>
                            <div className="flex justify-between gap-2 p-3 rounded flex-col bg-slate-800">
                                <div className="flex gap-2">
                                    <span>Shop Name:</span>
                                    <span>{seller?.shopInfo?.shopName}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Division:</span>
                                    <span>{seller?.shopInfo?.division}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>District:</span>
                                    <span>{seller?.shopInfo?.district}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Upazila:</span>
                                    <span>{seller?.shopInfo?.sub_district}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={statusSubmit} >
                        <div className='flex gap-3 py-3'>
                            <select value={status} onChange={(e)=>setStatus(e.target.value)} className='bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]' name="" required id=""   >
                                <option value='' >--Select Option--</option>
                                <option value="active">Active</option>
                                <option value="deactive">Deactive</option>
                            </select>
                            <button className="bg-blue-600 py-2 px-9 text-[#d0d2d6] font-medium hover:bg-blue-700 transition-all rounded  ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SellerDetails
