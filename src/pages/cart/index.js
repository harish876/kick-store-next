import React from 'react'
import Navbar from '@/components/home/Navbar'
import CartTableV1 from '@/components/Table/CartTableV1'
import { getSession,useSession } from "next-auth/react"

function Cart() {
  const {data:session} = useSession()
  return (
    <div className='w-screen'>
        <Navbar
          session={session}
        />
        <div 
          style={{
            backgroundImage:`url('https://cdn.shopify.com/s/files/1/0212/4102/files/checkout_header_image_10.jpg?v=1613510153')`,
            backgroundSize: 'cover',
            height:'12rem',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
          <h2 className='text-white uppercase'>Your Cart</h2>
          <p className='text-white'>Home</p>
        </div>
        <div className='p-10 mx-auto w-full'>
            {<CartTableV1/>}
            {/*<CartTable/>*/}
        </div>
    </div>
  )
}

export default Cart

export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  return{
    props:{session}
  }
}