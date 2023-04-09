import React,{useState,useEffect} from 'react'

import Pagination from '../pagination/Pagination'
import ShoeCard from '../card/ShoeCard'
import LoadingWrapper from '../loading/LoadingWrapper'
import { motion } from "framer-motion";

import { FilterOutlined } from '@ant-design/icons'
import { get } from 'lodash'
import { Col, Row  } from 'antd';
import { callApi } from '@/lib/callApi'

const Grid = ({gridUrl}) =>{
    const [items,setItems] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [condensed,setCondensed] = useState(false)
    const [currentPage,setCurrentPage] = useState(1)
    const [filter,setFilter] = useState({})
    const [showCol,setShowCol] = useState(false)
    const [colCount, setColCount] = useState(4);

    const onChange = (page)=>{
      setCurrentPage(page)
    }  
  
    useEffect(()=>{
        getItems()
    },[])
    
    const getItems = async()=>{
        setLoading(true)
        callApi(`/api/${gridUrl}`,'POST',{}).then(({status,response}) => {
            if(!status){
                setError("Data Not Available")
                setItems([])
                return;
            }
            setLoading(false)
            console.log(get(response,"data.data"))
            setItems(get(response,"data.data",[]))
            
        }).catch((error) => {

            setLoading(false)
            setError(error)
        })
    }
    const colCounts = {};
    const colOptions = [2, 3, 4, 6]
    colOptions.forEach((value, i) => {
      colCounts[i] = value;
    });
    return(
    <LoadingWrapper loading={loading} error={error} origin="shoes">
      <div className='px-12 mt-4 h-full drawer'>
        <div className='flex flex-row items-center justify-between space-x-2'>
        <div className='flex flex-row justify-start items-center space-x-2'>
          <label
            htmlFor="my-drawer"
            className='h-12 w-32 border-black border-[1px] flex justify-center cursor-pointer items-center transition-all hover:bg-black hover:text-white'>
            <FilterOutlined className='mx-2' />
            <h4 className='tracking-wide uppercase font-semibold'>Filter</h4>
          </label>
        </div>
        <div className='flex flex-row justify-end items-center space-x-2'>
        {showCol && colOptions.map((colOption)=>{
          return(
            <div 
              key={colOption}
              onClick={()=>{ setColCount(colOption)}}
              className='h-[2.75rem] w-[2.75rem] border-black border-[1px] flex justify-center text-center cursor-pointer items-center transition-all hover:bg-black hover:text-white'>
              {colOption}
            </div>
          )
        })}
          <div className='h-[2.75rem] w-[2.75rem] border-black border-[1px] grid grid-cols-3 justify-center cursor-pointer p-1'>
            {[0,1,2,3,4,5,6,7,8].map((i)=>{
                return(
                  <div  
                    onClick={()=>{setShowCol(prevVal => !prevVal)}} 
                    key={i} 
                    className='bg-black rounded-full h-1.5 w-1.5 m-[0.15rem] hover:bg-form-blue-dark hover:h-2 hover:w-2'>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
        <div className='mt-0 flex flex-row'>
            <motion.div 
            animate={{
                width: condensed ? 600 : 0,
                transition:{
                    type: "tween",
                    duration: 0.5,
                    ease: "circIn",
                  },
                }}
                exit={{
                    transition:{
                        type: "tween",
                        duration: 0.5,
                        ease: "circOut",
                  }}}
                >
                <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={()=>setCondensed(prevVal => !prevVal)}/>
                <label htmlFor="my-drawer" className="drawer-content"></label>
                <div className='drawer-side items-start'>
                <ul className="menu p-4 w-96 h-auto flex mr-2 hover:bg-white text-black">
                    <div className='space-y-4 items-start'>
                        <Title>Categories</Title>
                        <div className='flex flex-row  space-x-3 justify-start py-2'>
                            <FilterOptions>New Arrivals</FilterOptions>
                            <FilterOptions>Below Retail</FilterOptions>
                            <FilterOptions>On Sale</FilterOptions>
                        </div>
                        <Title>Brand Options</Title>
                        <div className='flex flex-row  space-x-1 justify-between py-2'>
                            <FilterOptions>Nike</FilterOptions>
                            <FilterOptions>New Balance</FilterOptions>
                            <FilterOptions>Adidas</FilterOptions>
                            <FilterOptions>Puma</FilterOptions>
                            <FilterOptions>Reebok</FilterOptions>
                        </div>
                        <Title>Price Filter</Title>
                        <div className='flex flex-col w-1/3 space-y-1 justify-between py-2'>
                            <FilterOptions>$10 - $50</FilterOptions>
                            <FilterOptions>$50 - $100</FilterOptions>
                            <FilterOptions>$100 - $250</FilterOptions>
                        </div>
                    </div>
                </ul>
                </div>
            </motion.div>
            <Row gutter={[16, 16]} className=''>
                {items && items.map((item)=>{
                return(
                    <Col key={item.id} span={24/colCount}>
                    <ShoeCard data={item}/>
                    </Col>
                )
                })}
            </Row>
        </div>
        <div className='flex justify-center items-center h-24'>
        <Pagination
            total={items.length} 
            current={currentPage}
            onChange={onChange}
            />
        </div>
        </div>
      </LoadingWrapper>
    )
  }

export default Grid


const Title = ({children}) => {
    return(
    <div className='flex flex-row space-x-4 items-center'>
        <div className='h-4 bg-black w-1'></div>
        <div className='text-md font-bold tracking-wide uppercase'>
            {children}
        </div>
        <div className='flex-1 bg-footer h-[0.09rem]'></div>
    </div>
    )
}

const FilterOptions = ({children}) => {
  return(
    <div 
      style={{borderRadius:'0px'}}
      className='p-2 h-auto w-auto border-black border-[1px] flex justify-center cursor-pointer items-center transition-all text-sm hover:bg-black hover:text-white'>
    {children}
    </div>
  )
}