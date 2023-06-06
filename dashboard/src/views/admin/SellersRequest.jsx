import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FiEye } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { get_seller_request } from "../../store/Reducers/sellerReducer";
import Search from "../components/Search";

const SellersRequest = () => {
    const dispatch = useDispatch()
    const { sellers, totalSeller } = useSelector(state => state.seller)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(get_seller_request({
            parPage,
            searchValue,
            page: currentPage
        }))
    }, [parPage, searchValue, currentPage])


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md">
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className="relative overflow-x-auto">
                    <table className="text-sm w-full text-left text-[#d0d2d6]">
                        <thead className="border-b  border-slate-700 text-sm uppercase">
                            <tr >
                                <th scope="col" className="px-4 py-3 ">No</th>
                                <th scope="col" className="px-4 py-3 ">Name</th>
                                <th scope="col" className="px-4 py-3 ">Email</th>
                                <th scope="col" className="px-4 py-3 ">Payment Status</th>
                                <th scope="col" className="px-4 py-3 ">Status</th>
                                <th scope="col" className="px-4 py-3 text-center ">Action</th>

                            </tr>
                        </thead>
                        <tbody className="capitalize">
                            {sellers.map((d, i) => (
                                <tr className=" border-b border-slate-700" key={i + 1}>
                                    <td className="px-4 py-1 font-medium whitespace-nowrap">
                                        {i + 1}
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>{d.name}</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>{d.email}</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>{d.payment}</span>
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">
                                        <span>{d.status}</span>
                                    </td>
                                    <td className="px-4 py-1 font-medium whitespace-nowrap">
                                        <div className="flex justify-center items-center">
                                            <Link to={`/admin/dashboard/seller/details/${d._id}`} className="bg-green-600 hover:bg-green-700 p-2 text-[19px] rounded ">
                                                <FiEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    totalSeller >= parPage && <div className="w-full flex justify-end mt-4 bottom-4 right-3">
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={20}
                            parPage={parPage}
                            showItems={3}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default SellersRequest;
