import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { Avatar, Drawer } from "antd"
import { LogoutOutlined } from "@ant-design/icons"
import { HiMenuAlt1 } from 'react-icons/hi'
import { signOut } from "next-auth/react"
import Button from '@/components/Button/Button'
import dynamic from 'next/dynamic'

import Image from 'next/image'

function Navbar({session}) {
  const handleSignOut = () =>{
    signOut()
  }
  const [open, setOpen] = useState(false);
  const [textColor, setTextColor] = useState("black");
  const [changeBackground,setChangeBackground] = useState(true)
  const [src,setSrc] = useState('/logo.png')
  const listenScrollEvent = () => {
    window.scrollY > 2 ? setSrc("/logo-white.png") : setSrc("/logo.png");
    window.scrollY > 2 ? setTextColor("white") : setTextColor("black");
    window.scrollY >2 ? setChangeBackground(false):setChangeBackground(true)
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className={changeBackground ? 'navbar':'navbar active'}>
      <div id="hamburger menu" className='lg:hidden absolute top-4 py-2 lg:py-2 px-4 w-fit align-middle'>
        <Button>
          <HiMenuAlt1 onClick={showDrawer}className='cursor-pointer' style={{fontSize:'28px'}}/>
        </Button>
      </div>
      <div className={`absolute top-1 lg:left-8 left-16 right-16 lg:w-fit md:w-3/4  w-0 h-auto md:flex hidden justify-center align-middle text-${textColor} transition-colors`}>
          <Button 
            href="/">
            <Image
                priority={true}
                src={src}
                className='grayscale'
                height={100}
                width={100}
            />
          </Button>

      </div>
      <div className='hidden lg:flex flex-row space-x-12 justify-center top-4 left-12 right-20 absolute'>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/'>Home</Link></p>
        <p className={changeBackground ?'navbar-row-v1':'navbar-row-v1 active'}><Link href='/list'>Shoes</Link></p>
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
      {/* Make Drawer more Robust */}
      <Drawer 
        title="Menu"
        placement="left"  
        closable={false} 
        onClose={onClose} 
        open={open}
        style={{textAlign:'center'}}      
      >
        <div className='w-3/4 mx-auto text-center flex flex-col space-y-9'>
        <h4 ><Link href='./'>Home</Link></h4>
        <h4 ><Link href='./list'>Shoes</Link></h4>
        <h4 ><Link href='/'>Clothing</Link></h4>
        <h4 ><Link href='/'>Accessories</Link></h4>
        <h4 ><Link href='/'>Below Retail</Link></h4>
        <h4 ><Link href='/'>Sell your shoes</Link></h4>
        </div>
      </Drawer>
    </nav>
  )
}

const DynamicCount = dynamic(()=> import('@/components/kart/cartIcon'),{ssr:false})

export default Navbar

//className={changeBackground ? 'hover-icon' : 'hover-icon active'}