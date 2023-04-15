import { useEffect, useState } from "react";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
import { message } from "antd";
import { startCase } from "lodash";
import Button from "../button/button";
import { callApi } from "@/lib/callApi";
import { updateSignal } from "@/redux/cart.slice";
import { useDispatch } from "react-redux";

export default function Card({ session, data }) {
  const dispatch = useDispatch();
  const { key, name, subHeading, description, price, isDiscount, prevPrice } =
    data;
  const [primary, setPrimary] = useState("orange");
  const [modelInfo, setModelInfo] = useState({});
  const [messageApi, messageContextHolder] = message.useMessage();
  useEffect(() => {
    const primaryArray = ["#2db7f5", "grey", "#87d068", "#f50", "orange"];
    const randomIdx = parseInt((Math.random() * 10) % primaryArray.length);
    setPrimary(primaryArray[randomIdx]);
  }, []);
  const handleSizeClick = (userSize) => {
    setModelInfo((prevVal) => ({ ...prevVal, size: userSize }));
  };
  const addKart = async () => {
    if (!session) {
      return unauthorized();
    }
    const updatedModelInfo = { ...modelInfo, ...data, ...session };
    if (updatedModelInfo.size) {
      await callApi("api/addCartItem", "POST", updatedModelInfo);
      dispatch(updateSignal());
      success();
    } else {
      error();
    }
  };
  const unauthorized = () => {
    message.info(`Please login to order shoes`);
  };
  const customModelSuccess = () => {
    messageApi.open({
      type: "success",
      content: `Customized ${name} Shoe Added to Kart`,
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: `${name} Added to Kart`,
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please select a Shoe Size.",
    });
  };
  return (
    <div className="w-full bg-inherit z-1 p-2 border-dashed">
      {messageContextHolder}
      <div className="shoeName">
        <div>
          <h1 className="big">{name}</h1>
        </div>
        <div className="flex-1 space-x-2">
          <h3 className="small">{description}</h3>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-2 flex-wrap">
          <div className="text-sm font-bold uppercase pt-5">Name: </div>
          <p className="text-sm pt-1">{startCase(name)}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-sm font-bold uppercase pt-5">
            Product Info :{" "}
          </div>
          <p className="text-sm pt-1">{description}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-sm font-bold uppercase pt-5">Condition : </div>
          <p className="text-sm pt-1">{subHeading}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-sm font-bold uppercase pt-5">
            Release Date :{" "}
          </div>
          <p className="text-sm pt-1">04/03/2023</p>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-sm font-bold uppercase pt-5">MSRP : </div>
          <span id="price-box" className="flex flex-row space-x-2">
            {isDiscount && (
              <p className="text-sm line-through pt-1">{`$${prevPrice}`}</p>
            )}
            <p className="text-sm font-bold pt-1">{`$${price}`}</p>
          </span>
        </div>
      </div>
      <div className="py-1">
        <h3 className="text-md uppercase pt-1">size</h3>
        <div className="sizes">
          {[7, 8, 9, 10, 11].map((size) => {
            return (
              <Button
                key={size}
                customClass="size m-12"
                style={
                  modelInfo.size === size
                    ? {
                        backgroundColor: `${primary}`,
                        color: "whitesmoke",
                        transition: "background-color 0.5s ease",
                      }
                    : {}
                }
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="buy-price">
        <Button
          customClass="button my-12"
          onClick={addKart}
          style={{
            backgroundColor: `${primary}`,
            color: "whitesmoke",
            transition: "background-color 0.5s ease",
          }}
        >
          <ShoppingCartOutlined />
          Add to cart
        </Button>
        <div className="price">
          <DollarOutlined />
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
}
