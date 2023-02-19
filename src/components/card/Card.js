import { useState } from "react"
import { ShoppingCartOutlined,DollarOutlined,MoreOutlined } from "@ant-design/icons"
import RenderModel from "../models/RenderModel"
import { shoeData } from "../utils/data"
import { Tag, Tooltip, message, Modal } from "antd"
import {v4 as uuidv4} from 'uuid';

const defaultModel = shoeData["NewBalance"]
export default function Card({ getKartData, session }) {
  const [modelInfo, setModelInfo] = useState(defaultModel)
  const [customModel, setCustomModel] = useState({
    key: "filaCustom",
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  })
  const [messageApi, contextHolder] = message.useMessage()
  const { key, name, color, primary, watermark, heading, subHeading, description, price } = modelInfo

  const changeModelInfo = (key) => {
    setModelInfo({...shoeData[`${key}`]})
  }
  const handleSizeClick = (userSize) => {
    setModelInfo((prevVal) => ({ ...prevVal, size: userSize }))
  }
 
  const addKart = () => {

    if(!session)
    {
      return unauthorized()
    }
    let transactionId= uuidv4();
    const updatedModelInfo = {...modelInfo,id:transactionId}
    if (updatedModelInfo.size) {
      if (["Fila"].includes(key)) {
        getKartData(updatedModelInfo)
        customModelSuccess()
      } else {
        getKartData(updatedModelInfo)
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
  const chooseCustomModel = (model) => {
    const { laces, mesh, caps, inner, sole, stripes, band, patch } = model
    setCustomModel(prevVal => ({...prevVal,laces, mesh, caps, inner, sole, stripes, band, patch }))
    setModelInfo((prevVal) => ({ ...prevVal, customModel }))
  }

  return (
    <div class="container">
      {contextHolder}
      <div class="card">
        <div class="shoeBackground">
          <div class="gradients">
            <div class="gradient" color={color}></div>
          </div>
          <h1 class="nike">{watermark}</h1>
          <div class="share">
            <a href='./'><MoreOutlined /></a>
          </div>
          <RenderModel props={key} chooseCustomModel={chooseCustomModel} />
        </div>
        <div class="info">
          <div class="shoeName">
            <div>
              <h1 class="big">{heading}</h1>
            </div>
            <h3 class="small">{subHeading}</h3>
          </div>
          <div class="description">
            <h3 class="title">Product Info</h3>
            <p class="text">{description}</p>
          </div>
          <div class="color-container">
            <h3 class="title">Check out some cool models</h3>
            <div class="colors">
              <Tooltip title="New Balance" color="#2db7f5">
                <Tag
                  style={{ marginBottom: "4px", cursor: "pointer" }}
                  color="#2db7f5"
                  onClick={() => {
                    changeModelInfo("NewBalance")
                  }}>
                  New Balance
                </Tag>
              </Tooltip>
              <Tooltip title="Vans" color="#87d068">
                <Tag
                  style={{ marginBottom: "4px", cursor: "pointer" }}
                  color="#87d068"
                  onClick={() => {
                    changeModelInfo("Vans")
                  }}>
                  Vans
                </Tag>
              </Tooltip>
              <Tooltip title="Nike Air Jordans" color="#f50">
                <Tag
                  style={{ marginBottom: "4px", cursor: "pointer" }}
                  color="#f50"
                  onClick={() => {
                    changeModelInfo("Jordan")
                  }}>
                  Jordans
                </Tag>
              </Tooltip>
              <Tooltip title="Nike Air Pegasus" color="grey">
                <Tag
                  style={{ marginBottom: "4px", cursor: "pointer" }}
                  color="grey"
                  onClick={() => {
                    changeModelInfo("NikeAirPegasus")
                  }}>
                  Pegasus
                </Tag>
              </Tooltip>
              <Tooltip title="Fila Custom Shoes" color="orange">
                <Tag
                  style={{ marginBottom: "4px", cursor: "pointer" }}
                  color="orange"
                  onClick={() => {
                    changeModelInfo("Fila")
                  }}>
                  Fila
                </Tag>
              </Tooltip>
            </div>
          </div>
          <div class="size-container">
            <h3 class="title">size</h3>
            <div class="sizes">
              <span
                style={modelInfo.size === 7 ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                onClick={() => handleSizeClick(7)}
                className="size">
                7
              </span>
              <span
                style={modelInfo.size === 8 ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                onClick={() => handleSizeClick(8)}
                className="size">
                8
              </span>
              <span
                style={modelInfo.size === 9 ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                onClick={() => handleSizeClick(9)}
                className="size">
                9
              </span>
              <span
                style={modelInfo.size === 10 ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                onClick={() => handleSizeClick(10)}
                className="size">
                10
              </span>
              <span
                style={modelInfo.size === 11 ? { backgroundColor: `${primary}`, color: "whitesmoke" } : {}}
                onClick={() => handleSizeClick(11)}
                className="size">
                11
              </span>
            </div>
          </div>
          <div className="buy-price">
            <div
              className="button "
              href="#"
              onClick={addKart}
              style={{ backgroundColor: `${primary}`, color: "whitesmoke", transition: "background-color 0.5s ease" }}>
              <ShoppingCartOutlined />
              Add to cart
            </div>
            <div className="price">
              <DollarOutlined />
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
