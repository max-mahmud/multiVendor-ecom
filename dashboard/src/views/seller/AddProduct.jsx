import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcAddImage } from "react-icons/fc";
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { BeatLoader } from 'react-spinners'
import { add_product, messageClear } from '../../store/Reducers/productReducer'
import { override } from '../../utils/utils'
import { get_category } from './../../store/Reducers/categoryReducer';


const AddProduct = () => {
    const dispatch = useDispatch()
    const { categorys } = useSelector(state => state.category)
    const { successMessage, errorMessage, loader } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            parPage: '',
            page: ""
        }))

    }, [])

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
    
    const [allCategory, setAllCategory] = useState(categorys)
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

    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])

    const imagehandle = (e) => {
        const files = e.target.files
        const length = files.length;
        if (length > 0) {
            setImages([...images, ...files])
            let imageUrl = []
            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) })
            }
            setImageShow([...imageShow, ...imageUrl])
        }
    }
    const imageChange = (img, index) => {
        const tempImage = images
        const tempUrl = imageShow

        tempImage[index] = img
        tempUrl[index] = ({ url: URL.createObjectURL(img) })
        setImages([...tempImage])
        setImageShow([...tempUrl])

    }
    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i)
        const filterUrl = imageShow.filter((img, index) => index !== i)
        setImageShow(filterUrl)
        setImages(filterImage)
    }

    useEffect(() => {
        setAllCategory(categorys)
    }, [categorys])

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', state.name)
        formData.append('description', state.description)
        formData.append('price', state.price)
        formData.append('stock', state.stock)
        formData.append('category', category)
        formData.append('discount', state.discount)
        formData.append('shopName', 'Jakir Fashoin')
        formData.append('brand', state.brand)
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }
        dispatch(add_product(formData))
    }
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: "",
                description: '',
                discount: '',
                price: "",
                brand: "",
                stock: ""
            })
            setImageShow([])
            setImages([])
            setCategory('')
        }
    }, [successMessage, errorMessage])

    return (
        <div className="px-2 lg:px-7 pt-5 ">
            <div className="w-full bg-[#283046] p-4 rounded-md ">
                <div className="flex justify-between pb-4 items-center">
                    <h2 className="text-xl text-white font-semibold">Add Product</h2>
                    <Link className='bg-indigo-500 px-5 rounded-sm py-2 hover:bg-indigo-600 text-white' to={'/seller/dashboard/products'}>Watch Products</Link>
                </div>
                <div className="text-[#d0d2d6] pb-2">
                    <form onSubmit={submitHandle}>
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
                                                key={i+1} onClick={() => {
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
                            <label className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 " htmlFor="image">
                                <span className="text-4xl mb-2"><FcAddImage /></span>
                                <span>Select Image</span>
                            </label>
                            <input multiple onChange={imagehandle} className="hidden" type="file" id="image" />

                            {
                                imageShow.map((img, i) => (
                                    <div className="h-[180px]  relative" key={i+1}>
                                        <label htmlFor={i}>
                                            <img className="w-full h-full" src={img.url} alt="img" />
                                        </label>
                                        <input onChange={(e) => imageChange(e.target.files[0], i)} type="file" id={i} className="hidden" />
                                        <span onClick={() => removeImage(i)} className="absolute top-1 right-1 bg-yellow-600 z-10 text-2xl cursor-pointer p-1 hover:bg-yellow-700"><MdClose /></span>
                                    </div>
                                ))
                            }

                        </div>
                        <button disabled={loader ? true : false} className="bg-indigo-600 font-semibold my-3 py-2 px-7 w-[240px] text-yellow-50 rounded-sm hover:bg-indigo-700 ">
                            {
                                loader ? <BeatLoader cssOverride={override} color="#ffffff" /> : "Add Product"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
