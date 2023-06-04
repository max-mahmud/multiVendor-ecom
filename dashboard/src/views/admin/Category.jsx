import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FcAddImage } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { override } from "../../utils/utils";
import { BeatLoader } from "react-spinners";
import { categoryAdd, get_category, messageClear } from "../../store/Reducers/categoryReducer";
import { toast } from 'react-hot-toast';
import Search from "../components/Search";

const Category = () => {
    const dispatch = useDispatch()
    const { loader, errorMessage, successMessage, categorys } = useSelector(state => state.category)

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [parPage, setparPage] = useState(5);
    const [show, setShow] = useState(false);
    const [imageShow, setImageShow] = useState('');

    const [state, setState] = useState({
        name: "",
        image: "",
    })

    const imagehandle = (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            setImageShow(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0],
            })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(categoryAdd(state))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: "",
                image: ""
            })
            setImageShow('')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage]);

    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_category(obj));
    }, [searchValue, parPage, currentPage])


    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#283046]">
                <h2 className="text-xl text-[#d0d2d6] font-medium">categorys</h2>
                <button onClick={() => setShow(true)} className="bg-indigo-600 text-white px-4 py-2 font-medium rounded-sm hover:bg-indigo-700 ">Add</button>
            </div>
            <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-7/12">
                    <div className="w-full bg-[#283046] p-4 rounded-md">
                        <Search setparPage={setparPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                        <div className="relative overflow-x-auto">
                            <table className="text-sm w-full text-left text-[#d0d2d6]">
                                <thead className="border-b border-slate-700 text-sm uppercase">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            image
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            name
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="capitalize">
                                    {categorys.map((d, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-1 font-medium whitespace-nowrap">
                                                {i + 1}
                                            </td>
                                            <td className="px-4 py-1 font-medium whitespace-nowrap">
                                                <img
                                                    className="w-11 h-11 overflow-hidden"
                                                    src={d.image}
                                                    alt=""
                                                />
                                            </td>
                                            <td className="px-4 py-1 font-medium whitespace-nowrap">
                                                <span>{d.name}</span>
                                            </td>
                                            <td className="px-4 py-1 font-medium whitespace-nowrap">
                                                <div className="flex justify-start items-center gap-3">
                                                    <Link className="bg-yellow-600 hover:bg-yellow-700 p-[6px] text-[19px] rounded ">
                                                        <FiEdit />
                                                    </Link>
                                                    <Link className="bg-red-600 hover:bg-red-700 p-[6px] text-[19px] rounded">
                                                        <FiTrash2 />
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
                <div
                    className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? "right-0" : "-right-[340px]"
                        } top-0 transition-all duration-500 z-[999] `}
                >
                    <div className="w-full  pl-4 ">
                        <div className="bg-[#283046] h-screen lg:rounded-b-md lg:h-auto px-3 py-2 text-[#d0d2d6]">
                            <div className="flex justify-between lg:justify-center items-center mb-4">
                                <h2 className="text-center text-xl font-medium">
                                    Add Category
                                </h2>
                                <span onClick={() => setShow(false)} className="text-xl lg:hidden bg-yellow-600 hover:bg-yellow-700 p-2"><RxCross2 /></span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col justify-center text-left items-center gap-1">
                                    <label className="w-full text-[#d0d2d6] font-medium" htmlFor="name">Category Name</label>
                                    <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })}
                                        className="bg-[#283046] border border-slate-700 w-full px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]"
                                        type="text" id="name" name="category_name"
                                        placeholder="Add Name..." required
                                    />
                                </div>
                                <div >
                                    <label htmlFor="image" className="w-full h-[238px] border border-[#d0d2d6] border-dashed  text-[#d0d2d6] mt-2 hover:border-indigo-500  flex flex-col justify-center items-center  ">
                                        {
                                            imageShow ? <img className="w-full h-full" src={imageShow} alt="img" /> : <>
                                                <span className="text-4xl mb-1"><FcAddImage /></span>
                                                <span>Select Image</span>
                                            </>
                                        }

                                    </label>

                                </div>
                                <input onChange={imagehandle} className="hidden" type="file" name="image" id="image" required />
                                <div>
                                    <button disabled={loader ? true : false} className="bg-blue-600 font-semibold my-3 w-full p-2 text-yellow-50 rounded hover:bg-blue-700 ">
                                        {
                                            loader ? <BeatLoader cssOverride={override} color="#ffffff" /> : "Add Category"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
