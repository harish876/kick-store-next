import React,{useState} from 'react'
import { HiOutlineX } from 'react-icons/hi'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { get,isEmpty,startCase,lowerCase } from 'lodash'
import {callApi} from '@/lib/callApi'
import Link from 'next/link'

const sizeMapping ={
    7:'S',
    8:'M',
    9:'L',
    10:'XL',
    11:'XXL'
}

function refreshPage() {
    window.location.reload(false);
}

function CartTable({columns,items}) {
  if(!isEmpty(items)){
    return (
        <div className='overflow-x-auto'>
        <table className='border-collapse border border-slate-300 w-3/4 mx-auto '>
            <TableHead
                columns={columns}
            />
            <tbody>
            {items.map((item)=>{
                return(
                    <TableRow
                        key={item.key}
                        itemData={item}
                    />)
                })}
            </tbody>
        </table>
        </div>
    )
    }
    else{
        return(
            <div className='overflow-x-auto h-2/5 flex flex-col justify-center align-middle border-collapse border border-slate-300 w-1/2 mx-auto p-6'>
                    <img
                        loading='lazy'
                        className='bg-inherit justify-center mx-auto'
                        src='https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png'
                        width={400}
                        height={400}
                    />
                    <Link href='/list'className='mx-auto'>
                        <h3 className='text-slate-700 hover:text-slate-400 scale-110'>Looks like your cart is empty</h3>
                    </Link>
            </div>
        )
    }
}

function TableHead({columns}){
    return(
        <thead>
        <tr className='p-20 sm:table-row' id='table-header'>
            {columns && columns.map((column)=>{
                const {key,dataField,width='20'} = column
                return(
                    <th key={key} className={`border border-slate-300 p-3 uppercase w-${width}`}>{dataField}</th>
                )
            })}
        </tr>
        </thead>
    )
}
function TableRow({itemData}){
    const {name,price,size,angles,image} = itemData
    const [quantity,setQuantity] = useState(1)
    const [itemPrice,setItemPrice] = useState(price)

    const handleIncrease = () =>{
      setQuantity( prevVal => prevVal+1)
      setItemPrice( prevVal => parseFloat(prevVal) + parseFloat(price))
    }
    const handleDecrease =() =>{
      if(quantity>1)
      {
          setQuantity( prevVal => prevVal-1)
          setItemPrice( prevVal => parseFloat(prevVal) - parseFloat(price))
      }
    }
    const deletItem = async() =>{
        await callApi('api/deleteCartItem','DELETE',{"id":get(itemData,'_id',null)})
        refreshPage()
    }
    return(
    <tr className='border-b-2 border-slate-30'>
        <td className='h-32 flex flex-col lg:flex-row mx-10'>
            <span className='hidden lg:block align-middle text-center mx-2 my-auto overflow-hidden'>
                <img 
                    loading='lazy'
                    src={image || angles[0].image}
                    width={100}
                    height={100}
                />
            </span>
            <div className='align-middle p-2 my-auto overflow-hidden flex flex-row flex-wrap lg:flex-col'>
                <span className='text-sm'>{startCase(lowerCase(name))}</span>
                <span className=' text-gray-400 align-middle my-auto'>
                    {sizeMapping[size] ?? 'XXL'}
                </span>
            </div>
        </td>
        <td className='align-middle text-center h-36 text-gray-500 w-48'>${price}</td>
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
        <td className='align-middle text-center h-32 text-gray-500 w-48'>${itemPrice}.00</td>
        <td className='align-middle text-center h-32'>
            <span className='flex justify-center text-black cursor-pointer hover:scale-75'>
                <HiOutlineX onClick={deletItem}/>
            </span>
        </td>
    </tr>
    )
}

export default CartTable