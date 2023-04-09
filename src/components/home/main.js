import React, { useState, useEffect, useRef } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { Block } from "./blocks"
import { Shapes, Categories, Box } from "./home"
import state from "./store"
import Card from "../card/Card"
import { isEmpty,get } from "lodash"
import { Modal, notification,Drawer,Timeline, Button as AntButton, Avatar } from "antd"
import { successMessage, emptyMessage } from '../utils/data'
import { signOut } from "next-auth/react"
const { confirm } = Modal;
import NewsLetter from "../newsLetter/NewsLetter"

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
  const showPromiseConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };
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
              <NewsLetter/>
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
