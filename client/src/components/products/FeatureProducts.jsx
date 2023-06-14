import React, { useEffect } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Ratings from '../Ratings'
import { get_products } from '../../store/Reducers/homeReducer'
import { useSelector, useDispatch } from 'react-redux';

const FeatureProducts = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.home)
    useEffect(() => {
        dispatch(get_products())
    }, [])
    return (
        <div className='w-[85%] flex flex-wrap mx-auto'>
            <div className='w-full'>
                <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
                    <h2>Feature Products</h2>
                    <div className='w-[130px] h-[4px] bg-[#7fad39] mt-3'></div>
                </div>
            </div>
            <div className='w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                    products.map((p, i) => (
                        <div className='border group transition-all duration-500 hover:shadow-md hover:-mt-3' key={i + 1}>
                            <div className='relative overflow-hidden'>
                                {
                                    p.discount ? <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-orange-500 font-semibold text-xs left-2 top-2'>{p.discount}%</div> : ""
                                }
                                <img className='sm:w-full w-full h-[240px]' src={p.images[0]} alt="product img" />
                                <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                                    <li className='cartIcon'><AiFillHeart /></li>
                                    <Link to={`/product/details/${p.slug}`} className='cartIcon' ><FaEye /></Link>
                                    <li className='cartIcon'><AiOutlineShoppingCart /></li>
                                </ul>
                            </div>
                            <div className='py-3 text-slate-600 px-2'>
                                <h2>{p.name}</h2>
                                <div className='flex justify-start items-center gap-3'>
                                    <span className='text-lg  font-bold'>${p.price}</span>
                                    <div className='flex text-[18px]'>
                                        <Ratings ratings={p.rating} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeatureProducts

