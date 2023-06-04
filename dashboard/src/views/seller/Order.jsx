import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import Pagination from "../Pagination";
import Search from "./../components/Search";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setparPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] p-4 rounded-md">
        <Search
          setparPage={setparPage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="relative overflow-x-auto">
          <table className='text-sm w-full text-left text-[#d0d2d6]'>
            <thead className='border-b text-center border-slate-700 text-sm uppercase'>
              <tr>
                <th scope='col' className='px-4 py-3'>Order ID</th>
                <th scope='col' className='px-4 py-3'>price</th>
                <th scope='col' className='px-4 py-3'>payment status</th>
                <th scope='col' className='px-4 py-3'>Order status</th>
                <th scope='col' className='px-4 py-3'>active</th>
              </tr>
            </thead>
            <tbody className='capitalize text-center'>
              {
                [1, 2, 3, 4, 5, 6, 7].map((d, i) => <tr key={i}>
                  <td className='px-4 py-3 font-medium whitespace-nowrap'>#{d}</td>
                  <td className='px-4 py-3 font-medium whitespace-nowrap'>${d * 15}</td>
                  <td className='px-4 py-3 font-medium whitespace-nowrap'>
                    <span>pending</span>
                  </td>
                  <td className='px-4 py-3 font-medium whitespace-nowrap'>
                    <span>pending</span>
                  </td>
                  <td className='px-4 py-3 font-medium whitespace-nowrap'>
                    <div className="flex justify-center items-center gap-3">
                      <Link to={`/seller/dashboard/order/details/12`} className="bg-green-600 hover:bg-green-700 p-[6px] text-[19px] rounded ">
                        <FiEye />
                      </Link>
                    </div>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-3">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItems={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Order
