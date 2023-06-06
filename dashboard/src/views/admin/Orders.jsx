import React, { useState } from 'react'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    // const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)
    const [downArrow, setDownArrow] = useState(false)
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md">

                <div className="flex justify-between items-center">
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]' >
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="5">25</option>
                    </select>
                    <input className='bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]' type="text" placeholder='Search...' />
                </div>

                <div className="mt-5 relative overflow-x-auto">
                    <div className="w-full text-sm text-left text-[#d0d2d6]">
                        <div className="text-sm uppercase border-b border-slate-700 ">
                            <div className="flex justify-between items-center font-medium">
                                <div className="py-3 w-[25%] whitespace-nowrap ">Order id</div>
                                <div className="py-3 w-[13%] whitespace-nowrap ">price</div>
                                <div className="py-3 w-[18%] whitespace-nowrap ">payment status</div>
                                <div className="py-3 w-[18%] whitespace-nowrap ">order status</div>
                                <div className="py-3 w-[18%] whitespace-nowrap ">action</div>
                                <div className="py-3 w-[6%] text-xl ">
                                    <BsArrowBarDown />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center border-b border-slate-700 capitalize">
                                <div className="py-4 w-[25%] whitespace-nowrap">#1546544</div>
                                <div className="py-4 w-[13%] ">$255</div>
                                <div className="py-4 w-[18%] ">Procceesing</div>
                                <div className="py-4 w-[18%] ">pending</div>
                                <div className="py-4 w-[18%]  ">
                                    <Link className='hover:bg-green-700/40 bg-green-700/30 p-2' to={'/admin/dashboard/order/details/1'}>view</Link>
                                </div>
                                <div onClick={() => setDownArrow(!downArrow)} className="py-4 w-[6%] cursor-pointer hover:text-yellow-500 text-xl ">
                                    {
                                        downArrow ? <BsArrowBarUp /> : <BsArrowBarDown />
                                    }
                                </div>
                            </div>

                            <div className={`${downArrow ? "block border-b border-slate-600 bg-slate-800" : "hidden"}`}>
                                <div className="flex px-3 justify-start items-center border-b border-slate-700 capitalize">
                                    <div className="py-4  w-[25%] whitespace-nowrap">#1546544</div>
                                    <div className="py-4  w-[13%] ">$125</div>
                                    <div className="py-4  w-[19%] ">
                                        <span className='bg-slate-900 p-2 text-green-900 font-medium'>Procceesing</span>
                                    </div>
                                    <div className="py-4 w-[18%] ">
                                        <span className='bg-slate-900 p-2 text-green-900 font-medium'>pending</span>
                                    </div>
                                </div>
                                <div className="flex px-3 justify-start items-center border-b border-slate-700 capitalize">
                                    <div className="py-4  w-[25%] whitespace-nowrap">#1546544</div>
                                    <div className="py-4  w-[13%] ">$125</div>
                                    <div className="py-4  w-[19%] ">
                                        <span className='bg-slate-900 p-2 text-green-900 font-medium'>Procceesing</span>
                                    </div>
                                    <div className="py-4 w-[18%] ">
                                        <span className='bg-slate-900 p-2 text-green-900 font-medium'>pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-end mt-4 bottom-4 right-3'>
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItems={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Orders
