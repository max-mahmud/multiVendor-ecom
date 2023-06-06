import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import Pagination from "../Pagination";
import Search from "./../components/Search";

const DiscountProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] p-4 rounded-md">
        <Search
          setParPage={setParPage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="relative overflow-x-auto">
          <table className="text-sm w-full text-left text-[#d0d2d6]">
            <thead className="border-b border-slate-700 text-sm font-normal uppercase">
              <tr>
                <th scope="col" className="px-4 py-3">No</th>
                <th scope="col" className="px-4 py-3">image</th>
                <th scope="col" className="px-4 py-3">name</th>
                <th scope="col" className="px-4 py-3">Category</th>
                <th scope="col" className="px-4 py-3">Brand</th>
                <th scope="col" className="px-4 py-3">Price</th>
                <th scope="col" className="px-4 py-3">DIscount</th>
                <th scope="col" className="px-4 py-3">Stock</th>
                <th scope="col" className="px-4 py-3">action</th>
              </tr>
            </thead>
            <tbody className="capitalize">
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
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
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>New Buma</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>Sports</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>Buma Express</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>${Math.ceil(Math.random() * 250)}</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>{Math.ceil(Math.random() * 30)}%</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <span>{Math.ceil(Math.random() * 250)}</span>
                  </td>
                  <td className="px-4 py-1 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-3">
                      <Link className="bg-yellow-600 hover:bg-yellow-700 p-[6px] text-[19px] rounded ">
                        <FiEdit />
                      </Link>
                      <Link className="bg-green-600 hover:bg-green-700 p-[6px] text-[19px] rounded ">
                        <FiEye />
                      </Link>
                      <button className="bg-red-600 hover:bg-red-700 p-[6px] text-[19px] rounded">
                        <FiTrash2 />
                      </button>
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
  );
};

export default DiscountProduct
