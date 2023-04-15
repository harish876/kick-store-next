import React from "react";
import { Breadcrumb } from "antd";
import { shoeFilter as filter } from "@/components/utils/data";
import Grid from "@/components/grid/Grid";

function ShoeCollection() {
  return (
    <div className="my-2 mx-auto h-screen w-screen space-y-4">
      <div className="h-36 mt-0 bg-footer flex flex-col justify-center items-center">
        <div className="uppercase text-4xl">Shoes</div>
        <div className="h-auto mt-4 ">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/list">{`Shoes`}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Grid gridUrl={`getItems`} filter={filter} perPage={10} />
    </div>
  );
}

export default ShoeCollection;
