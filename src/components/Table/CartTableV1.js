import React,{useState} from 'react'
import { HiOutlineX } from 'react-icons/hi'
import {FaPlus,FaMinus} from 'react-icons/fa'
function CartTableV1({}) {
  return (
    <div>
    <table className='border-collapse border border-slate-300 w-3/4 mx-auto'>
        <TableHead/>
        <tbody>
            <TableRow/>
            <TableRow/>
        </tbody>
    </table>
    </div>
  )
}

function TableHead(){
    return(
        <thead>
        <tr className='p-20' id='table-header'>
            <th className='border border-slate-300 py-3' colSpan={1}>Product Name</th>
            <th className='border border-slate-300 py-3'>Price</th>
            <th className='border border-slate-300 py-3'>Quantity</th>
            <th className='border border-slate-300 py-3'>Total</th>
            <th className='border border-slate-300 py-3 w-20'></th>
        </tr>
        </thead>
    )
}
function TableRow(){
    const [quantity,setQuantity] = useState(1)
    const [totalPrice,setTotalPrice] = useState(1)
    const handleIncrease = () =>{
      setQuantity( prevVal => prevVal+1)
    }
    const handleDecrease =() =>{
      if(quantity>1)
      {
          setQuantity( prevVal => prevVal-1)
      }
    }
    return(
    <tr className='border-b-2 border-slate-30'>
        <td className='h-32 flex flex-col lg:flex-row mx-10'>
            <span className='hidden lg:block align-middle text-center mx-2 my-auto overflow-hidden'>
                <img src='https://cdn.shopify.com/s/files/1/0212/4102/products/d5518778-a811-51cf-bbd5-f86fa5a5cf4a_small.png?v=1678035526'
                    width={100}
                    height={100}
                />
            </span>
            <div className='align-middle text-center p-2 my-auto mx-32 overflow-auto flex flex-row lg:flex-col flex-wrap'>
                Nike Men's Solo Swoosh T-Shirt
                <span className='flex justify-center text-gray-400'>
                    XXL
                </span>
            </div>
        </td>
        <td className='align-middle text-center h-36 text-gray-500 w-48'>$25.00</td>
        <td className='align-middle text-center h-32 w-48'>
            <div className='flex flex-row justify-center'>
                <span className='border-l-2 border-t-2 border-b-2  border-slate-700 p-4'>
                    <p className='my-auto mx-auto text-sm'>{quantity}</p>
                </span>
                <div className='flex flex-col border-2 border-slate-700 w-1/4 h-1/2'>
                    <span className='p-2 cursor-pointer flex flex-1 justify-center text-black border-b-2 border-slate-700'>
                        <FaPlus onClick={handleIncrease}className='my-auto'/>
                    </span>
                    <span className='p-2 cursor-pointer flex flex-1 justify-center text-black'>
                        <FaMinus onClick={handleDecrease}className='my-auto'/>
                    </span>
                </div>
            </div>
        </td>
        <td className='align-middle text-center h-32 text-gray-500 w-48'>$25.00</td>
        <td className='align-middle text-center h-32'>
            <span className='flex justify-center text-black cursor-pointer hover:scale-75'><HiOutlineX/></span>
        </td>
    </tr>
    )
}

export default CartTableV1