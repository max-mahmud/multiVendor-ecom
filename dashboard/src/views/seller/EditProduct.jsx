import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_product, messageClear, product_image_update, update_product } from "../../store/Reducers/productReducer";
import { get_category } from "../../store/Reducers/categoryReducer";
import { BeatLoader } from "react-spinners";
import { override } from "../../utils/utils";
import { toast } from "react-hot-toast";

const EditProduct = () => {
    const { productId } = useParams()
//no
    const dispatch = useDispatch()
    const { categorys } = useSelector(state => state.category)
    const { successMessage, errorMessage, loader, product } = useSelector(state => state.product)

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
    })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const [allCategory, setAllCategory] = useState([])
    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categorys)
        }
    }
    const [imageShow, setImageShow] = useState([])

    const changeImage = (img, files) => {
        if (files.length > 0) {
            dispatch(product_image_update({
                oldImage: img,
                newImage: files[0],
                productId
            }))
        }

    }

    useEffect(() => {
        setState({
            name: product.name,
            description: product.description,
            discount: product.discount,
            price: product.price,
            brand: product.brand,
            stock: product.stock,
        })
        setCategory(product.category)
        setImageShow(product.images)
    }, [product]);

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            parPage: '',
            page: ""
        }))

    }, [])

    useEffect(() => {
        setAllCategory(categorys)
        dispatch(get_product(productId))
    }, [productId, categorys])

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage])

    const updateProduct = (e) => {
        e.preventDefault()
        const obj = {
            name: state.name,
            description: state.description,
            discount: state.discount,
            price: state.price,
            brand: state.brand,
            stock: state.stock,
            productId: productId
        }
        dispatch(update_product(obj))
    }

    return (
        <div className="px-2 lg:px-7 pt-5 ">
            <div className="w-full bg-[#283046] p-4 rounded-md ">
                <div className="flex justify-between pb-4 items-center">
                    <h2 className="text-xl text-white font-semibold">Add Product</h2>
                    <Link className='bg-indigo-500 px-5 rounded-sm py-2 hover:bg-indigo-600 text-white' to={'/seller/dashboard/products'}>Watch Products</Link>
                </div>
                <div className="text-[#d0d2d6] pb-2">
                    <form onSubmit={updateProduct}>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name">Product name</label>
                                <input className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="text" name="name" id="name" onChange={handleChange} value={state.name} placeholder="Product Name" />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Brand name</label>
                                <input className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="text" name="brand" id="brand" onChange={handleChange} value={state.brand} placeholder="brand Name" />
                            </div>
                        </div>

                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">Category</label>
                                <input readOnly onClick={() => setCateShow(!cateShow)} className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="text" id="category" onChange={handleChange} value={category} placeholder="--select-category--" />

                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all
                                ${cateShow ? 'scale-100' : 'scale-0'}  `}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input value={searchValue} onChange={categorySearch} className="bg-transparent border border-slate-700 px-3 w-full py-1 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6] overflow-hidden " type="text" placeholder="Search.." />
                                    </div>
                                    <div className="pt-14"></div>
                                    <div className="flex justify-start items-start flex-col h-[200px] overflow-y-auto ">
                                        {
                                            allCategory.map((c, i) => <span className={`${category === c.name ? 'bg-indigo-500' : ''} cursor-pointer px-5 py-2 hover:bg-indigo-600 w-full `}
                                                key={i + 1} onClick={() => {
                                                    setCateShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue("")
                                                    setAllCategory(categorys)
                                                }}>{c.name}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="stock">Stock</label>
                                <input className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="number" min={0} name="stock" id="stock" onChange={handleChange} value={state.stock} placeholder="stock.." />
                            </div>
                        </div>

                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="price">Price</label>
                                <input className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="number" min={0} name="price" id="price" onChange={handleChange} value={state.price} placeholder="price" />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="discount">Discount</label>
                                <input className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="number" min={0} name="discount" id="discount" onChange={handleChange} value={state.discount} placeholder="%%" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-1 mb-4">
                            <label htmlFor="description">Description</label>
                            <textarea rows={4} className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="text" min={0} name="description" id="description" onChange={handleChange} value={state.description} placeholder="description" > </textarea>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mb-4 w-full text-[#d0d2d6] ">
                            {
                                (imageShow && imageShow.length > 0) && imageShow.map((img, i) => <div>
                                    <label className='h-[180px] overflow-hidden' htmlFor={i} key={i+1}>
                                        <img className='w-full h-[180px]' src={img} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                                </div>)
                            }

                        </div>
                        <button disabled={loader ? true : false} className="bg-indigo-600 font-semibold my-3 py-2 px-7 w-[240px] text-yellow-50 rounded-sm hover:bg-indigo-700 ">
                            {
                                loader ? <BeatLoader cssOverride={override} color="#fffcfc" /> :
                                    "Update Product"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct
