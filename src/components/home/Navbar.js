import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { Avatar } from "antd"
import { LogoutOutlined } from "@ant-design/icons"
import { signOut } from "next-auth/react"
import Button from '@/components/Button/Button'
import dynamic from 'next/dynamic'

function Navbar({session}) {
  const handleSignOut = () =>{
    signOut()
  }
  const [textColor, setTextColor] = useState("black");
  const [changeBackground,setChangeBackground] = useState(true)
  const listenScrollEvent = () => {
    window.scrollY > 5 ? setTextColor("white") : setTextColor("black");
    window.scrollY >5 ? setChangeBackground(false):setChangeBackground(true)
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav className={changeBackground ? 'navbar':'navbar active'}>
      <div id="hamburger menu" className='lg:hidden'>

      </div>
      <div className={`menu left text-${textColor} transition-colors`}>
          <Button href="/">
            <h2 className={`text-${textColor} mb-2`}style={{ fontSize: "2em" }}>Kick Store</h2>
          </Button>

      </div>
      <div className='hidden lg:flex flex-row space-x-8 justify-center top-4 left-12 right-20 absolute'>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='./'>Home</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='./list'>Shoes</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/'>Clothing</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/'>Accessories</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/'>Below Retail</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/'>Sell your shoes</Link></p>
      </div>
      <div className="menu right">
          {session  && <span><Button><Avatar className={changeBackground ? 'hover-icon' : 'hover-icon active'} src={session.user.image}/></Button></span>}
          {session  && <span><Button onClick={handleSignOut}><LogoutOutlined className={changeBackground ? 'hover-icon' : 'hover-icon active'} style={{fontSize:'22px',paddingBottom:'4px'}} /></Button></span>}
          {!session && <span><Button href='/login'>Login</Button></span>}
          {!session && <span><Button href='/register'>Sign up</Button></span>}
          {session  && <span><DynamicCount/></span>}
      </div>
    </nav>
  )
}

const DynamicCount = dynamic(()=> import('@/components/kart/cartIcon'),{ssr:false})

export default Navbar

//className={changeBackground ? 'hover-icon' : 'hover-icon active'}