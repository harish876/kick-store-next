import React from 'react'
import { get, startCase,isEmpty} from 'lodash'
import { Badge} from 'antd';
import Link from 'next/link';
function ShoeCard(data) {
  const isDiscount = get(data,'data.isDiscount','')
  return (
    <>
        {isDiscount?<DiscountShoeCard data={data}/>:<NoDiscountShoeCard data={data}/>}
    </>
  )
}
export function NoDiscountShoeCard (data) {
    const id = get(data,'data.data.id')
    const name = get(data,'data.data.name','')
    const price = get(data,'data.data.price',0)
    const image = get(data,'data.data.image','')
    const alt= get(data,'data.data.alt','')
    return(
        <div className="flex flex-col mt-4 space-y-2 px-4 w-full md:w-full lg:my-4 lg:px-4 lg:w-full hover:scale-110  cursor-pointer transition-all">
                <Link href={`list/${id}`}>
                    <img alt={alt} className="block h-auto w-full" src={image}/>
                </Link>
            <header className="flex items-start flex-wrap leading-normal md:h-full">
                    <h2 className="text-lg tracking-tight hover:text-form-blue-dark">
                        {startCase(name.toLowerCase())}
                    </h2>
            </header>
            <div className='font-bold text-2xl tracking-normal flex items-start pb-8'> 
                <span className='flex flex-row'>
                    ${price}
                </span>
            </div>
        </div>
    )
}
export function DiscountShoeCard(data){
    const name = get(data,'data.data.name','')
    const price = get(data,'data.data.price',0)
    const image = get(data,'data.data.image','')
    const alt= get(data,'data.data.alt','')
    const discount = get(data,'data.data.disount',0)
    const prevPrice = get(data,'data.data.prevPrice',0)
    return(
        
        <div className="flex flex-col mt-4 space-y-2 px-4 w-full md:w-full lg:my-4 lg:px-4 lg:w-full hover:scale-110 transition-all">
            <Badge.Ribbon text={`-${discount}%`} color='#1fa7d5'></Badge.Ribbon>
                <Link href="#">
                    <img alt={alt} className="block h-auto w-full" src={image}/>
                </Link>
            <header className="flex items-start flex-wrap leading-normal md:h-full">
                    <h2 className="text-lg tracking-tight hover:text-form-blue-dark">
                        {startCase(name.toLowerCase())}
                    </h2>
            </header>
            <div className='flex flex-row justify-items-start space-x-2'>
            <div className='font-bold text-2xl tracking-normal flex items-start pb-8'> 
                    ${price}
            </div>
            <div className='text-md pt-1 tracking-normal text-base line-through text-slate-600'> 
                    ${prevPrice}
            </div>
            </div>
        </div>
    )
}
export default ShoeCard