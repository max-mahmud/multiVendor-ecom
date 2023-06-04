import React from 'react'
import { HiOutlineCurrencyDollar, HiUserGroup } from "react-icons/hi";
import { TbBrandProducthunt } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  const state = {
    series: [{
      name: 'Orders',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Sellers',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        foreColor: '#E9E8E3',
        type: 'bar',
        height: 350
      }, plotOptions: {
        redius: 30,
      },
      dataLabels: {
        enabled: false
      }, stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categorys: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      legend: {
        position: 'top'
      },
      yaxis: {
        title: {
          text: 'Overview'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " doller"
          }
        }
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categorys: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            chart: {
              height: '550px'
            }
          }
        }
      ]
    }
  }


  return (
    <div className='px-2 md:px-7 py-5'>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-3xl font-bold'>$2525</h2>
            <span className='text-sm font-medium'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#2DC78749] flex justify-center items-center rounded-full text-2xl text-[#2ADDA7] '>
            <HiOutlineCurrencyDollar />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-3xl font-bold'>25</h2>
            <span className='text-sm font-medium'>Product</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#872B9E70] flex justify-center items-center rounded-full text-2xl text-[#AE34DF] '>
            <TbBrandProducthunt />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-3xl font-bold'>55</h2>
            <span className='text-sm font-medium'>Sellers</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#3288CF5B] flex justify-center items-center rounded-full text-2xl text-[#2D94E9] '>
            <HiUserGroup />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-3xl font-bold'>525</h2>
            <span className='text-sm font-medium'>Orders</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#9B99266E] flex justify-center items-center rounded-full text-2xl text-[#C9BE27] '>
            <BsCartCheck />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="p-4 rounded-md w-full bg-[#283046]">
            <Chart options={state.options} series={state.series} type="bar" height={350} />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className='w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]'>
            <div className='flex justify-between items-center'>
              <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent seller message</h2>
              <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
            </div>
            <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
              <ol className='relative border-1 border-slate-600 ml-4'>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                    <img className='w-full rounded-full h-full shadow-lg' src="/images/admin.jpg" alt="" />
                  </div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                    </div>
                    <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      how are you
                    </div>
                  </div>
                </li>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                    <img className='w-full rounded-full h-full shadow-lg' src="/images/admin.jpg" alt="" />
                  </div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                    </div>
                    <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      how are you
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md bg-[#283046] p-4 mt-6  ">
        <div className="flex  justify-between items-center">
          <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
          <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className='text-sm w-full text-left text-[#d0d2d6]'>
            <thead className='border-b border-slate-700 text-sm uppercase'>
              <tr>
                <th scope='col' className='px-4 py-3'>Order ID</th>
                <th scope='col' className='px-4 py-3'>price</th>
                <th scope='col' className='px-4 py-3'>payment status</th>
                <th scope='col' className='px-4 py-3'>Order status</th>
                <th scope='col' className='px-4 py-3'>active</th>
              </tr>
            </thead>
            <tbody className='capitalize'>
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
                    <Link>view</Link>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
