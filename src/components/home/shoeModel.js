import React from 'react'
//import { Breadcrumb } from "flowbite-react";
import { Breadcrumb } from 'antd';
import { HiHome } from 'react-icons/hi';
import { UserOutlined } from "@ant-design/icons"

function ShoeModel({id}) {
  const session = false
  return (
    <div className="my-4 mx-auto px-4 md:px-12 h-full w-full">
        <div className="menu left" style={{ left:'4rem',top: "-1rem" }}>
            <a href="./">
                <h2 style={{ fontSize: "2em" }}>Kick Store</h2>
            </a>
        </div>

        {<div className="menu right" style={{ top: "1.55rem", paddingRight: "5px" }}>
              {session && <span><Avatar src={session.user.image} style={{ backgroundColor: '#87d068'}}icon={<UserOutlined  />}/></span>}
              {session && <span onClick={handleSignOut}>Sign out</span>}
              {!session && <span><a href='./login'>Login</a></span>}
              {!session && <span><a href='./register'>Sign up</a></span>}
        </div>}

        <div className='h-full w-full p-4'>
            <div className='mt-12'>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Air Jordan 1 Low True Blue</Breadcrumb.Item>
                </Breadcrumb>
                <img 
                    src='https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412.jpg?v=1677375488'
                    width={400}
                    height={400}
                />
            </div>
        </div>
    </div>
  )
}

export default ShoeModel