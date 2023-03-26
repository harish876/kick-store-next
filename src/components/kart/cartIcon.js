import React,{useState,useEffect} from 'react'
import Button from '../Button/Button'
import { ShoppingOutlined } from "@ant-design/icons"
import { Badge } from 'antd'
import { useSelector,useDispatch} from 'react-redux';
import { useSession } from 'next-auth/react';
import {callApi} from '@/lib/callApi'
import {get} from 'lodash'

const CartIcon = ()=>{
    const {data:session} = useSession();
    const [count,setCount] = useState(0)
    const signal = useSelector((state) => state.signal);
    const [changeBackground,setChangeBackground] = useState(true)
    const listenScrollEvent = () => {
        window.scrollY >5 ? setChangeBackground(false):setChangeBackground(true)
    };

    useEffect(() => {
        callApi('api/getCartItem','POST',{"user":get(session,"user")}).then(({response})=>{
          console.log(get(response,'data.data',[]).length)
          setCount(get(response,'data.data',[]).length)
        }).catch(()=>{
          console.log("Failed to fetch cart")
        })
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
      }, [signal]);
    return (
        <Button href='/cart'>
        <Badge color="black" className={changeBackground ? 'hover-icon text-black' : 'hover-icon active text-white'} count={count}>
          <ShoppingOutlined style={{fontSize:'24px',paddingBottom:'4px'}} />
        </Badge>
      </Button>
    )
}

export default CartIcon