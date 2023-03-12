import React,{createRef,useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import Navbar from '@/components/home/Navbar';
//import ShoeModel from '@/components/home/shoeModel';
import Button from '@/components/Button/Button';
import DetailCard from '@/components/card/DetailCard'
import ShoeCarousel from '@/components/home/shoeCarousel';
import { useSession } from "next-auth/react"

import { Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Breadcrumb, Collapse,Progress } from 'antd';
import { nikeList,paymentIcons,mainOptions,thumbsOptions } from "../../components/utils/data";
import { getBrand } from '@/lib/common';
import { get,startCase,lowerCase } from 'lodash';

const { Panel } = Collapse;
function RenderSlides ({id,brandList}){
   const shoeList = brandList.filter((brandShoes) => brandShoes.id === id) 
   const shoeAngles = get(shoeList[0],"angles",[])
    return(
        shoeAngles.map(({image,angle})=>{
            return(
                <SplideSlide key={angle}  style={{display:'flex',justifyContent:'center'}}>
                    <img 
                    className='block h-auto w-ful'
                    src={image} 
                    alt={angle}
                />
                </SplideSlide>
            )
        })
    )
}

function ListShoe() {
  const { query} = useRouter();
  const id = query['id']
  const {data:session} = useSession()
  const {brand="nike",brandList=nikeList} = getBrand(id)
  const data = brandList.filter((nikeShoes) => nikeShoes.id === id)[0]  || {}
  let mainRef = createRef();
  let thumbsRef = createRef();
  const [kartData, setKartData] = useState([])

  const displayCart = () =>{
    console.log(kartData)
  }
  const getKartData = (data) => {
    setKartData(prevVal => [...prevVal, data])
  }

  useEffect(()=>{
    if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
        mainRef.current.sync( thumbsRef.current.splide );
      }
  },[id])
  return (
    <div>
    <Navbar session={session}/>
    <div className="my-0 mx-auto px-4 md:px-12 h-full w-full">
        <div className='h-full w-full my-2 p-4'>
            <div className='h-auto '>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/list">Shoes</Breadcrumb.Item>
                        <Breadcrumb.Item>{startCase(lowerCase(data.name))}</Breadcrumb.Item>
                    </Breadcrumb>
            </div>
            <div className='mt-0 mx-0 h-full flex flex-col w-full md:flex-row'>
                <div className="wrapper px-8 py-4 w-full md:w-2/5">
                    <Splide
                    options={ mainOptions }
                    ref={ mainRef }
                    aria-labelledby="thumbnail-slider-example"
                    >
                    <RenderSlides id={id} brandList={brandList}/>
                    </Splide>
                    <Splide
                    options={ thumbsOptions }
                    ref={ thumbsRef }
                    aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                    >
                    <RenderSlides id={id} brandList={brandList}/>
                    </Splide>
                </div>
                <div className='px-12 py-4 flex justify-center align-middle mx-auto w-full md:w-2/5'>
                    <DetailCard 
                        data={data}
                        session={session}
                        environment={process.env.NODE_ENV}
                        getKartData={getKartData}
                    />
                </div>
                <div className='w-3/4 p-8 md:w-2/5 float-left h-1/2'>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header={<h4 className='text-md font-bold flex flex-col'>Kick Store Guarantee</h4>} key="1" className='align-middle' style={{textAlign:'left',marginTop:'auto'}}>
                    <h4>ALWAYS 100% Authentic Fast Shipping!30-Day Returns</h4>
                    </Panel>
                    <Panel header={<h4 className='text-md font-bold flex flex-col'>Shippings</h4>} key="2" className='align-middle' style={{textAlign:'left',marginTop:'auto'}}>
                    <h4>
                        <span className='font-bold'>USA:</span> from <span className='font-bold'>$ 6.95</span><br/>
                        <span className='font-bold'>CANADA:</span> from <span className='font-bold'>$40.00</span><br/>
                        <span className='font-bold'>INTERNATIONAL:</span> from <span className='font-bold'>$60.00</span>
                    </h4>
                    </Panel>
                    <Panel header={<h4 className='text-md font-bold flex flex-col'>Payment Methods</h4>} key="3" className='align-middle' style={{textAlign:'left',marginTop:'auto'}}>
                        <div className='grid grid-cols-3 align-middle gap-2 justify-center lg:ml-12'>
                            {
                                paymentIcons && paymentIcons.map((paymentIcon)=>{
                                    return(
                                        <>
                                            <img key={paymentIcon} src={paymentIcon} width={64} height={64}/>
                                            {/*<Image src={paymentIcon} width={64} height={64}/>*/}
                                            {/* learn to use image tag */}
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Panel>
                </Collapse>
                    <div className='flex flex-col'>
                        <h3>Hurry up! Only 5 left in stock</h3>
                        <Progress  className='mt-4' strokeColor='#333f' percent={30} showInfo={false}/>
                    </div>
                    {/*<Button onClick={displayCart}text="Display Cart temp" size="md"/>*/}
                </div>
            </div>
            <hr className='mt-4'/>
            <div>
                <h1 className="text-center md:text-left text-2xl mt-5 uppercase bg-white text-gray-700 mx-auto px-2 tracking-normal">You may also like</h1>
                <ShoeCarousel items={brandList} brand={brand}/>
            </div>
        </div>
    </div>
      {/*<ShoeModel
            id={query['id']}
            session={session}
      />*/}
    </div>
  )
}

export default ListShoe