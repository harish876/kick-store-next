import React, { useState, useEffect, useRef } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { Block } from "./blocks"
import { Shapes, Categories, Box } from "./home"
import state from "./store"
import Card from "../card/Card"
import { isEmpty,get } from "lodash"
import { Modal, notification,Drawer,Timeline, Button as AntButton, Avatar } from "antd"
import { TfiTwitterAlt, TfiFacebook, TfiYoutube } from "react-icons/tfi"
import Button from "../Button/Button"
import { successMessage, emptyMessage } from '../utils/data'
import { signOut } from "next-auth/react"

function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree()
  return (
    <Html
      portal={portal}
      style={{
        position: "absolute",
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height,
      }}>
      <div className={className} style={style}>
        {children}
      </div>
    </Html>
  )
}

export default function Main({ session }) {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  useEffect(()=>{
    setIsModalOpen(true)
  },[])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [kartData, setKartData] = useState([])
  const [timeLineOpen, setTimeLineOpen] = useState(false);
  const showDrawer = () => {
    setTimeLineOpen(true);
  };
  const onClose = () => {
    setTimeLineOpen(false);
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,message,description) => {
    api[type]({message,description});
  };

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
    ! isEmpty(kartData) 
    ? openNotificationWithIcon('success',successMessage.message,successMessage.description) 
    : openNotificationWithIcon('info',emptyMessage.message,emptyMessage.description+' '+(session?get(session,'user.name','dude'):''))
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const getKartData = (data) => {
    setKartData(prevVal => [...prevVal, data])
  }
  const editAttributes = (action,selectedId,quantity,basePrice) => {
    if(['changeQuantity'].includes(action))
    {
      setKartData(kartState => kartState.map( item => item.id === selectedId ? {...item,quantity,price:basePrice*quantity} : item ))
    }
    else if(['delete'].includes(action))
    {
      setKartData(kartState => kartState.filter(item => item.id !== selectedId));
    }
  }
  const openKart = () => {
    showModal()
  }
  const handleSignOut = () =>{
    signOut()
  }
  return (
    <>
      {contextHolder}
      <Canvas
        gl={{ alpha: false, antialias: true }}
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
        onCreated={({ gl, events }) => {
          gl.setClearColor("white")
          gl.toneMappingExposure = 2.5
          gl.toneMappingWhitePoint = 1
          setEvents(events)
        }}>
        <Block factor={1.5} offset={0}>
          <Shapes />
          <HtmlContent portal={domContent}>
            <div className="jumbo">
              <h1 style={{ left: "1rem", zIndex: "-1" }}>
                &nbsp;&nbsp;&nbsp;Next Gen
                <br />
                &nbsp;Shoe Store
              </h1>
              <Categories />
            </div>
          </HtmlContent>
        </Block>

        <Block factor={2} offset={3}>
          <Box scale={[2, 2, 2]} />
          <Html center portal={domContent}>
            <h2>Scroll Down to explore shoes</h2>
            <Card getKartData={getKartData} session={session}/>
            {<Modal 
              sz="xl"
              title={<div className="tracking-wide uppercase font-medium text-left p-2">Join Our Mailing List</div>}
              centered 
              open={isModalOpen} 
              onCancel={handleCancel} //handle cancel has to be given twice to enable the cross icon
              footer={[]}
              okText="Ok"
              width={700}
              >
            <div className="flex flex-row space-x-3 justify-between">
            <div className="flex flex-col space-y-2 align-middle">
            <div className="p-2 my-4 space-x-3 w-full">
              <input
                    type="text"
                    placeholder='Enter your email...'
                    className='mt-2 w-72 focus:outline-none border-none'
                />
                <Button 
                    size="md"
                    customClass='px-4 my-auto bg-black text-white tracking-wide h-12 mt-2'
                >
                     Subscribe
                </Button>
              </div>
              <div>
                <h4 className="uppercase tracking-normal text-black font-bold text-[0.6rem] m-2">
                  Sign up for Exclusive Updates, new arrivals and insider only discounts
                  </h4>
              </div>
                <div className='flex flex-row space-x-4 text-sm'>
                    <span className='border-2 border-black p-2 rounded-full'><TfiTwitterAlt/></span>
                    <span className='border-2 border-black p-2 rounded-full'><TfiFacebook/></span>
                    <span className='border-2 border-black p-2 rounded-full'><TfiYoutube/></span>
                </div>
            </div>
              <img 
                src='https://kickstore.co.in/wp-content/uploads/2022/02/cropped-cropped-WhatsApp-Image-2022-02-10-at-12.52.11-PM-1.jpeg'
                className="p-4"
                height={200}
                width={200}
                />
            </div>
            </Modal>}
            {/* make this dynamic */}
            <Drawer title="Track your Order: Order - 2145677" placement="right" onClose={onClose} open={timeLineOpen}>
            <Timeline mode="alternate">
              <Timeline.Item>Order Placed on  2015-09-01</Timeline.Item>
              <Timeline.Item>Order Dispatched on 2015-09-01</Timeline.Item>
              <Timeline.Item>Order Shipped to location 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Order Recieved 2015-09-01</Timeline.Item>
          </Timeline>
          </Drawer>
          </Html>
        </Block>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}
