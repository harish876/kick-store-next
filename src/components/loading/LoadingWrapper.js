import React from "react";
import Image from "next/image";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import Button from "../card/Button";
import { useEffect } from "react";

const antIcon = (
  <LoadingOutlined
    style={{
      color: "black",
      fontSize: 24,
    }}
    spin
  />
);

const refresh = () => {
  window.location.reload(false);
};
function LoadingWrapper({ children, loading, error, icon, size }) {
  const src =
    icon ||
    "https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg?w=2000";
  const [messageApi, contextHolder] = message.useMessage();

  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: `${!error ? "Data not available" : error}`,
    });
  };

  useEffect(() => {
    if (error) {
      errorMessage(error);
    }
  });
  if (!isEmpty(error) || size == 0) {
    return (
      <>
        {contextHolder}
        <div className="flex flex-col items-center justify-center">
          <Image
            priority
            src={src}
            className="flex items-center justify-center grayscale"
            width={600}
            height={600}
            alt="no-data"
          />
          {
            <Button onClick={refresh} customClass="text-md uppercase font-bold">
              Refresh Page
            </Button>
          }
        </div>
      </>
    );
  } else {
    return (
      <Spin spinning={loading} indicator={antIcon}>
        {children}
      </Spin>
    );
  }
}

export default LoadingWrapper;
