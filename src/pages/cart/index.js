import React from "react";
import CartTable from "@/components/table/CartTable";
import Button from "@/components/card/Button";
import Link from "next/link";
import { getSession } from "next-auth/react";
import axios from "axios";
import { get } from "lodash";

function Cart(props) {
  const cartData = get(props, "data.data", []);
  const cartColumns = [
    {
      key: "productName",
      dataField: "Product Name",
      colSpan: 2,
      width: "40",
    },
    {
      key: "price",
      dataField: "Price",
      colSpan: 1,
      width: "20",
    },
    {
      key: "quantity",
      dataField: "Quantity",
      colSpan: 1,
      width: "20",
    },
    {
      key: "total",
      dataField: "Total Price",
      colSpan: 1,
      width: "10",
    },
    {
      key: "action",
      dataField: "Action",
      width: "20",
    },
  ];
  return (
    <div className="pb-12">
      <div
        style={{
          backgroundImage: `url('https://cdn.shopify.com/s/files/1/0212/4102/files/checkout_header_image_10.jpg?v=1613510153')`,
          backgroundSize: "cover",
          height: "12rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-white uppercase">Your Cart</h2>
        <Link href="./">
          <p className="text-white">Home</p>
        </Link>
      </div>
      <div className="p-10 mx-auto w-full">
        <CartTable columns={cartColumns} items={cartData} />
      </div>
    </div>
  );
}

export default Cart;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let result = { ...session };
  const { user } = session;
  const { status, data } = await axios.post(
    `${process.env.API_URL}/api/getCartItem`,
    { user: user }
  );
  result = status ? { ...result, data } : result;
  return {
    props: result,
  };
}
