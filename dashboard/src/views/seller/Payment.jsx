import { MdCurrencyExchange } from "react-icons/md";
import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
  console.log('handleOnWheel', deltaY)
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const Payment = () => {
  const Row = ({ index, style }) => (
    <div style={style} className='flex text-sm'>
      <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
      <div className='w-[25%] p-2 whitespace-nowrap text-center'>${Math.ceil(Math.random() * 300)}</div>
      <div className='w-[25%] p-2 whitespace-nowrap'>
        <span className='bg-slate-900 py-1 px-2 text-yellow-600'>Pending</span>
      </div>
      <div className='w-[25%] p-2 whitespace-nowrap ml-2 mr-4'>29 may 2023</div>
    </div>
  );

  return (
    <div className='px-2 md:px-7 py-5'>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-3">
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-2xl font-bold'>$5505</h2>
            <span className='text-sm font-normal'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#2DC78749] flex justify-center items-center rounded-full text-2xl text-[#2ADDA7] '>
            <MdCurrencyExchange />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-2xl font-bold'>$2550</h2>
            <span className='text-sm font-normal'>Available Amount</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#872B9E70] flex justify-center items-center rounded-full text-2xl text-[#AE34DF] '>
            <MdCurrencyExchange />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-2xl font-bold'>#550</h2>
            <span className='text-sm font-normal'>Withdrawal Amount</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#3288CF5B] flex justify-center items-center rounded-full text-2xl text-[#2D94E9] '>
            <MdCurrencyExchange />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 bg-[#253046] p-5 rounded-md">
          <div className="flex flex-col justify-start items-start text-[#fcfcfc]">
            <h2 className='text-2xl font-bold'>$255</h2>
            <span className='text-sm font-normal'>Pending Amount</span>
          </div>
          <div className='w-[46px] h-[47px] bg-[#9B99266E] flex justify-center items-center rounded-full text-2xl text-[#C9BE27] '>
            <MdCurrencyExchange />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-[#253046] p-5 rounded-md text-[#d0d2d6]">
          <h2>Send Request</h2>
          <div className="py-5">
            <form>
              <div className="flex flex-col mb-3 md:flex-row gap-4 w-full">
                <input className="bg-[#283046] flex-1 border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]" type="number" min={0} name="price" id="price" placeholder="Amount" />
                <button className="px-4 rounded py-2 bg-indigo-500 hover:bg-indigo-600">Add Product</button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="mb-3 text-xl">Pending Request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex uppercase bg-slate-800 min-w-[340px] text-sm">
                <div className='w-[25%] p-2'>No</div>
                <div className='w-[25%] p-2'>Amount</div>
                <div className='w-[25%] p-2'>Status</div>
                <div className='w-[25%] p-2'>date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className='List'
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-[#253046] p-5 rounded-md text-[#d0d2d6]">
          <div>
            <h2 className="mb-3 text-xl">Success Withdrawal </h2>
            <div className="w-full overflow-x-auto">
              <div className="flex uppercase bg-slate-800 min-w-[340px] text-sm">
                <div className='w-[25%] p-2'>No</div>
                <div className='w-[25%] p-2'>Amount</div>
                <div className='w-[25%] p-2'>Status</div>
                <div className='w-[25%] p-2'>date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className='List'
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
