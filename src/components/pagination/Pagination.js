import React, {useState} from 'react'
import { PAGINATION_BLOCK_SIZE } from '../utils/data';
import { HiChevronLeft, HiChevronRight, HiDotsHorizontal } from "react-icons/hi";
import { range } from 'lodash'

function Pagination({total,current,onChange}) {
  const pageSize = 10
  const pages = total || 5
  const [isEnd,setIsEnd] = useState(false)
  let currentPage = current || 1
  const selectedPageClass = `h-[2.75rem] w-[2.75rem] bg-black text-white border-black border-[1px] flex justify-center text-center cursor-pointer items-center transition-all hover:bg-white hover:text-black`
  const nonSelectedPageClass = 'h-[2.75rem] w-[2.75rem] border-black border-[1px] flex justify-center text-center cursor-pointer items-center transition-all hover:bg-black hover:text-white'
  const pageMap = range(1,pages+1)

  const [start,setStart] = useState(1)
  const [end,setEnd] = useState(PAGINATION_BLOCK_SIZE)
  const onPageChange = (page)=>{
    if(!isNaN(page)){
        if(page === pages)
        {
            setIsEnd(true)
            const startPoint = Number(Math.floor(page/PAGINATION_BLOCK_SIZE) * PAGINATION_BLOCK_SIZE) === 0 ? 1 : Number(Math.floor(page/PAGINATION_BLOCK_SIZE) * PAGINATION_BLOCK_SIZE)
            console.log("Page is: "+ page + " Start of the array: " + startPoint + " End of the array: "+Number(startPoint + PAGINATION_BLOCK_SIZE))
            setStart(page)
            setEnd(page)
            onChange(page)
        }
        else{

            setIsEnd(false)
            const startPoint = Number(Math.floor(page/PAGINATION_BLOCK_SIZE) * PAGINATION_BLOCK_SIZE) === 0 ? 1 : Number(Math.floor(page/PAGINATION_BLOCK_SIZE) * PAGINATION_BLOCK_SIZE)
            console.log("Start of the array: " + startPoint + " End of the array: "+Number(startPoint + PAGINATION_BLOCK_SIZE))
            setStart(startPoint)
            setEnd(startPoint + PAGINATION_BLOCK_SIZE)
            onChange(page)
        }
    }
}
    return(
        <div className='flex space-x-2'>
            <div 
                onClick={()=> currentPage>1 && onPageChange(currentPage-1) }
                className={nonSelectedPageClass}>
                <HiChevronLeft/>
            </div>
        {pageMap && pageMap.slice(start-1,end).map((page) => {
            return(
            <>
            <div 
                onClick={()=>onPageChange(page)}
                key={page}
                className={page === currentPage ? selectedPageClass : nonSelectedPageClass}>
                {page}
            </div>
            </>
            )})}
            {/* { !isEnd && <>
                <div
                    className={nonSelectedPageClass}>
                    <HiDotsHorizontal/>
                </div>
                <div 
                    onClick={()=>onPageChange(pages)}
                    className={pages === currentPage ? selectedPageClass : nonSelectedPageClass}>
                    {pages}
                </div>
            </>
            } */}
            <div
                onClick={()=> currentPage<pages && onPageChange(currentPage+1) } 
                className={nonSelectedPageClass}>
                <HiChevronRight/>
            </div>

            {/* <input
                    type="text"
                    placeholder='Page'
                    className='w-16 border-black border-[1px] text-center focus:none'
                    onChange={(e)=>onPageChange(e.target.value)}
                    
                /> */}
        </div>
        )
}

export default Pagination