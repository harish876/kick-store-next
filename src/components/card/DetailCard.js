import { useState } from "react"
import { ShoppingCartOutlined,DollarOutlined} from "@ant-design/icons"
import { message} from "antd"
import {v4 as uuidv4} from 'uuid';
import { startCase } from "lodash";
import Button from "../Button/Button";
import {callApi} from '@/lib/callApi'

export default function Card({ session, data, getKartData }) {
  const { key, name, primary='orange',subHeading, description, price,isDiscount,prevPrice } = data
  const [modelInfo, setModelInfo] = useState({})
  const [messageApi, messageContextHolder] = message.useMessage()

  const handleSizeClick = (userSize) => {
    setModelInfo((prevVal) => ({ ...prevVal, size: userSize }))
  }
  const addKart = async() => {
    if(!session)
    {
      return unauthorized()
    }
    const updatedModelInfo = {...modelInfo,...data,...session}
    if (updatedModelInfo.size) {
      if (["Fila"].includes(key)) {
        getKartData(updatedModelInfo)
        await callApi('api/addCartItem','POST',updatedModelInfo)
        customModelSuccess()
      } else {
        getKartData(updatedModelInfo)
        console.log(updatedModelInfo)
        await callApi('api/addCartItem','POST',updatedModelInfo)
        success()
      }
    } else {
        error()
    }
  }
  const unauthorized = () => {
    message.info(`Please login to order shoes`)
  }
  const customModelSuccess = () => {
    messageApi.open({
      type: "success",
      content: `Customized ${name} Shoe Added to Kart`,
    })
  }

  const success = () => {
    messageApi.open({
      type: "success",
      content: `${name} Added to Kart`,
    })
  }

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please select a Shoe Size.",
    })
  }
  return (
        <div class="w-full bg-inherit z-1 p-2 border-dashed">
            {messageContextHolder}
          <div class="shoeName">
            <div>
              <h1 class="big">{name}</h1>
            </div>
            <div className='flex-1 space-x-2'>
              <h3 class="small">{description}</h3>
              {/* rating */}
            </div>
          </div>
          <div className="flex flex-col">
             <div className="flex flex-row space-x-2 flex-wrap">
              <div className="text-sm font-bold uppercase pt-5">Name:  </div>
              <p className="text-sm pt-1">{startCase(name)}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="text-sm font-bold uppercase pt-5">Product Info : </div>
              <p className="text-sm pt-1">{description}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="text-sm font-bold uppercase pt-5">Condition : </div>
              <p className="text-sm pt-1">{subHeading}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="text-sm font-bold uppercase pt-5">Release Date : </div>
              <p className="text-sm pt-1">04/03/2023</p>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="text-sm font-bold uppercase pt-5">MSRP : </div>
              <span id="price-box" className="flex flex-row space-x-2">
                {isDiscount && <p className="text-sm line-through pt-1">{`$${prevPrice}`}</p>}
                <p className="text-sm font-bold pt-1">{`$${price}`}</p>
              </span>
            </div>
          </div>
          <div class="py-1">
            <h3 class="text-md uppercase pt-1">size</h3>
            <div class="sizes">
              {[7,8,9,10,11].map((size)=>{
                return(
                  <Button
                    key={size}
                    customClass="size"
                    style={modelInfo.size === size ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                    onClick={() => handleSizeClick(size)}>
                    {size}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="buy-price">
            <Button
              customClass="button"
              onClick={addKart}
              style={{ backgroundColor: `${primary}`, color: "whitesmoke", transition: "background-color 0.5s ease" }}>
              <ShoppingCartOutlined />
              Add to cart
            </Button>
            <div className="price">
              <DollarOutlined />
              <h1>{price}</h1>
            </div>
          </div>
        </div>
  )
}
