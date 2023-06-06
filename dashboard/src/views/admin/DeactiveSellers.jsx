import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FiEye } from "react-icons/fi";

const DeactiveSellers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchValue, setSearchValue] = useState("");
    const [parPage, setParPage] = useState(5);
    // const [show, setShow] = useState(false);
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md">
                <div className="flex justify-between items-center">
                    <select
                        onChange={(e) => setParPage(parseInt(e.target.value))}
                        className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]"
                    >
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="5">25</option>
                    </select>
                    <input
                        className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className="relative overflow-x-auto">
                    <table className="text-sm w-full text-left text-[#d0d2d6]">
                        <thead className="border-b border-slate-700   text-sm uppercase">
                            <tr >
                                <th scope="col" className="px-4 py-3 ">No</th>
                                <th scope="col" className="px-4 py-3 ">Image</th>
                                <th scope="col" className="px-4 py-3 ">Name</th>
                                <th scope="col" className="px-4 py-3 ">Email</th>
                                <th scope="col" className="px-4 py-3 ">Payment Status</th>
                                <th scope="col" className="px-4 py-3 ">Status</th>
                                <th scope="col" className="px-4 py-3 text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody className="capitalize">
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr className="border-b border-slate-700" key={i}>
                                    <td className="px-4 py-1 font-medium whitespace-nowrap">
                                        {d}
                                    </td>
                                    <td className="px-4 py-1 font-medium whitespace-nowrap">
                                        <img
                                            className="w-11 h-11 overflow-hidden"
                                            src={`/images/category/${d}.jpg`}
                                            alt=""
                                        />
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>Jakir Vai</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>Jakir@gmail.com</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>active</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>Deactive</span>
                                    </td>
                                    <td className="px-4 py-1 font-medium whitespace-nowrap">
                                        <div className="flex justify-center items-center">
                                            <Link className="bg-green-600 hover:bg-green-700 p-2 text-[19px] rounded ">
                                                <FiEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-end mt-4 bottom-4 right-3">
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={20}
                        parPage={parPage}
                        showItems={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default DeactiveSellers
