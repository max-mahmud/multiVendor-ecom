import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
  }
const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
  ))
const PaymentRequest = () => {
    const Row = ({ index, style }) => (
        <div style={style} className='flex text-sm'>
            <div className='w-[20%] p-2 whitespace-nowrap'>{index + 1}</div>
            <div className='w-[20%] p-2 whitespace-nowrap'>${Math.ceil(Math.random()*300)}</div>
            <div className='w-[20%] p-2 whitespace-nowrap'>
                <span className='bg-slate-900 py-1 px-2 text-yellow-600'>Pending</span>
            </div>
            <div className='w-[20%] p-2 whitespace-nowrap ml-2 mr-4'>29 may 2023</div>
            <div className='w-[20%] p-2 whitespace-nowrap'>
            <span className='bg-indigo-800 py-1 px-2'>Confirm</span>
            </div>
        </div>
    );

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]">
                <h2 className='text-xl  pb-5'>Withdrawal Request </h2>
                <div className='w-full'>
                    <div className="w-full overflow-x-auto">
                        <div className="flex uppercase bg-slate-800 min-w-[340px] text-sm">
                            <div className='w-[20%] p-2'>No</div>
                            <div className='w-[20%] p-2'>Amount</div>
                            <div className='w-[20%] p-2'>Status</div>
                            <div className='w-[20%] p-2'>date</div>
                            <div className='w-[20%] p-2'>action</div>
                        </div>
                        {
                            <List
                                style={{ minWidth: "340px", overflowX:"hidden" }}
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
    )
}

export default PaymentRequest
