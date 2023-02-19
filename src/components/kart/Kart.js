import React from "react"
import { isEmpty } from "lodash"
import { Collapse, InputNumber, Space, Tag, theme, Empty } from "antd"
import { EditOutlined, CheckCircleTwoTone, DeleteOutlined, CaretRightOutlined, DollarCircleFilled } from "@ant-design/icons"

const { Panel } = Collapse

function Kart({kartData,editAttributes,userInfo}) {
  const items  = kartData
  const {name='dude',email=''} = userInfo
  const { token } = theme.useToken()

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  }
  const RenderCustomDetails = (props) => {
    const { props: attributes } = props
    delete attributes.key
    return (
      <>
        <p style={{ marginBottom: "10px" }}>
          <span style={{ fontWeight: "800", color: "#2E2E2E" }}>Custom Details</span>
        </p>
        <Space size={[0, 8]} wrap>
          {attributes &&
            Object.entries(attributes).map((attribute) => {
              const textColor = attribute[1] === '#ffffff' ? "black":"whitesmoke"
              return (
                <Tag key={attribute[1]}style={{ color: `${textColor}`}} color={attribute[1]}>
                  {attribute[0]}
                </Tag>
              )
            })}
        </Space>
      </>
    )
  }
  const onChange =(action,id,qty,price) =>{
    editAttributes(action,id,qty,price)
  }
  const genExtra = (id,price) => (
    <Space size="middle">
      <EditOutlined onClick={() => {onChange("edit",id,1,price)}}/> {/* yet to implement */}
      <DeleteOutlined onClick={() => {onChange("delete",id,0,price)}}/>
      <InputNumber style={{ width: "95px" }} addonBefore={<div>Qty</div>} size="small" min={0} max={10} defaultValue={1}
          onChange={qty => qty>0 ? onChange("changeQuantity",id,qty,price):onChange("delete",id,0,price)}
      />
      <CheckCircleTwoTone twoToneColor="#52c41a" />
    </Space>
  )
  if (isEmpty(items)) {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ display:'flex',justifyContent:'center',textAlign:'center',height: 60 }}
        description={
          <span>
            Shop Some Sneakers<a href="./">Here</a>{name}
          </span>
        }
      />
    )
  }

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
      }}>
      {items &&
        items.map(({ id, name, customModel = {}, description, price, size, basePrice , quantity=1 }, index) => {
          return (
            <Collapse
              key={id}
              bordered={false}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              style={{
                background: token.colorBgContainer,
              }}>
              <Panel header={`${index + 1}. ${name}`} key={index+1} extra={genExtra(id,basePrice)} style={panelStyle}>
                <p>
                  <span style={{ fontWeight: "800", color: "#2E2E2E" }}>Description:</span> {description}
                </p>
                <p>
                  <span style={{ fontWeight: "800", color: "#2E2E2E" }}>Price:</span>&nbsp;
                  <DollarCircleFilled /> {price}
                </p>
                <p>
                  <span style={{ fontWeight: "800", color: "#2E2E2E" }}>Size:</span>&nbsp;{size}
                </p>
                {!isEmpty(customModel) && <RenderCustomDetails props={customModel} />}
              </Panel>
            </Collapse>
          )
        })}
    </Space>
  )
}
export default Kart
