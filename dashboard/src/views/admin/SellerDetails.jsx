import React from 'react'

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md">
                <div className="flex flex-wrap w-full text-[#d0d2d6]">
                    <div className="lg:w-3/12">
                        <img className='w-full h-[230px] object-cover' src="/images/admin.jpg" alt="img" />
                    </div>
                    <div className="lg:w-4/12">
                        <div className="py-2 px-4">
                            <div className="py-2 text-lg">
                                <h2>Basic Info</h2>
                            </div>
                            <div className="flex justify-between gap-2 p-3 rounded flex-col bg-slate-800">
                                <div className="flex gap-2">
                                    <span>Name:</span>
                                    <span>Jakir</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Email:</span>
                                    <span>Jakir@gmail.com</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Role:</span>
                                    <span>Seller</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Status:</span>
                                    <span>Active</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Payment Account:</span>
                                    <span>Active</span>
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
                                    <span>Jakir Express</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Division:</span>
                                    <span>Rajshahi</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>District:</span>
                                    <span>Chapai</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>Upazila:</span>
                                    <span>Chapai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form >
                        <div className='flex gap-3 py-3'>
                            <select className='bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]' name="" id="">
                                <option >--Select Option--</option>
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
