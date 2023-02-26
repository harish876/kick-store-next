import React from 'react'
import { Html } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { FloatButton, Modal, notification,Drawer,Timeline, Button, Avatar } from "antd"
import { ShoppingCartOutlined,UserOutlined } from "@ant-design/icons"

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

function Navbar({}) {
  const session = false
  return (
    <HtmlContent>
    <div className="menu left" style={{ top: "-1rem" }}>
        <a href="./">
        <h2 style={{ fontSize: "2em" }}>Kick Store</h2>
        </a>
    </div>
    <div className="menu right" style={{ top: "1.55rem", paddingRight: "5px" }}>
        {session && <span><Avatar src={session.user.image} style={{ backgroundColor: '#87d068'}}icon={<UserOutlined  />}/></span>}
        {session && <span onClick={handleSignOut}>Sign out</span>}
        {!session && <span><a href='./login'>Login</a></span>}
        {!session && <span><a href='./register'>Sign up</a></span>}
    </div>
  </HtmlContent>
  )
}

export default Navbar