import React from 'react'
import { useRouter } from 'next/router';
import ShoeModel from '@/components/home/shoeModel';
import Navbar from '@/components/home/Navbar';
import { useSession } from "next-auth/react"

import { FloatButton, Modal, notification,Drawer,Timeline, Button, Avatar } from "antd"
import { ShoppingCartOutlined,UserOutlined } from "@ant-design/icons"

function ListShoe() {
  const { query } = useRouter();
  const {data:session} = useSession()
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,message,description) => {
    api[type]({message,description});
  };
  const openKart = () =>{

  }
  const showDrawer = () =>{
    
  }
  return (
    <div>
        <Navbar
          session={session}
        />
          {contextHolder}
          {session && <FloatButton
            icon={<ShoppingCartOutlined />}
            onClick={openKart}
            tooltip={<div>Checkout to cart</div>}
            style={{
              color: "wheat",
              right: 24,
              width: 60,
              height: 60,
            }}
          />}
          {session && <FloatButton
            icon={
            <img style={{height:'20px',width:'20px',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}
            src="https://img.icons8.com/cotton/64/null/track-order.png"/>
            }
            onClick={showDrawer}
            tooltip={<div>Track Order Status</div>}
            style={{
              color: "wheat",
              left: 24,
              width: 60,
              height: 60,
            }}
          />}
        <ShoeModel
            id={query['id']}
            session={session}
        />
    </div>
  )
}

export default ListShoe