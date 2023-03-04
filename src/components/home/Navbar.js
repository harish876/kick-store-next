import React from 'react'
import Link from 'next/link'
import { Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { signOut } from "next-auth/react"
//@TODO make this global layout

function Navbar({session}) {
  const handleSignOut = () =>{
    signOut()
  }
  return (
    <>
      <div className="menu left" style={{ top: "-1rem" }}>
          <Link href="/">
          <h2 style={{ fontSize: "2em" }}>Kick Store</h2>
          </Link>
      </div>
      <div className="menu right" style={{ top: "1.55rem", paddingRight: "5px" }}>
          {session && <span><Avatar src={session.user.image} style={{ backgroundColor: '#87d068'}}icon={<UserOutlined  />}/></span>}
          {session && <span onClick={handleSignOut}>Sign out</span>}
          {!session && <span><a href='./login'>Login</a></span>}
          {!session && <span><a href='./register'>Sign up</a></span>}
      </div>
    </>
  )
}

export default Navbar

