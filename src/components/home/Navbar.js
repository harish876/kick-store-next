import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { Avatar } from "antd"
import { ShoppingOutlined,UserOutlined,LogoutOutlined } from "@ant-design/icons"
import { signOut } from "next-auth/react"
//@TODO make this global layout

function Navbar({session}) {
  const handleSignOut = () =>{
    signOut()
  }
  const [textColor, setTextColor] = useState("black");
  const [navColor, setNavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 5 ? setNavColor("black") : setNavColor("white");
    window.scrollY > 5 ? setTextColor("white") : setTextColor("black");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className={`sticky top-0 z-20 h-20 flex align-middle bg-${navColor} text-${textColor} transition-all duration-1100`}
      >
      <div className={`menu left text-${textColor} transition-colors`}>
          <h2 className={`text-${textColor}`}style={{ fontSize: "2em" }}>
          <Link href="/">
            Kick Store
          </Link>
          </h2>

      </div>
      <div className='hidden lg:flex flex-row space-x-8 justify-center top-4 left-12 right-20 absolute'>
        <p className={`tracking-narrow font-bold text-sm text-${textColor} uppercase hover:border-b-2`}><Link href='/'>Home</Link></p>
        <p className={`tracking-tight font-bold text-sm text-${textColor} uppercase`}><Link href='/'>Shoes</Link></p>
        <p className={`tracking-tight font-bold text-sm text-${textColor} uppercase`}><Link href='/'>Clothing</Link></p>
        <p className={`tracking-tight font-bold text-sm text-${textColor} uppercase`}><Link href='/'>Accessories</Link></p>
        <p className={`tracking-tight font-bold text-sm text-${textColor} uppercase`}><Link href='/'>Below Retail</Link></p>
        <p className={`tracking-tight font-bold text-sm text-${textColor} uppercase`}><Link href='/'>Sell your shoes</Link></p>
      </div>
      <div className="menu right" style={{ paddingRight: "5px" }}>
          {session && <span className=''><Avatar src={session.user.image} icon={<UserOutlined  />}/></span>}
          {session && <span onClick={handleSignOut}><LogoutOutlined style={{fontSize:'20px',paddingBottom:'4px'}} /></span>}
          {!session && <span><Link href='/login'>Login</Link></span>}
          {!session && <span><Link href='/register'>Sign up</Link></span>}
          {session && <span><Link  href='/cart'><ShoppingOutlined style={{fontSize:'24px',paddingBottom:'4px'}} /></Link></span>}
      </div>
    </div>
  )
}

export default Navbar

