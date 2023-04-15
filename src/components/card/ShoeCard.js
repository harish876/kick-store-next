import React from "react";
import { get, startCase, isEmpty } from "lodash";
import { Badge } from "antd";
import Link from "next/link";

//enhance shoeCard
function ShoeCard(data) {
  const id = get(data, "data.id");
  const name = get(data, "data.name", "");
  const price = get(data, "data.price");
  const image = get(data, "data.image", "");
  const alt = get(data, "data.alt", "");
  const isDiscount = get(data, "data.isDiscount", "");
  const discount = get(data, "data.disount", 0);
  const prevPrice = get(data, "data.prevPrice", price);
  return (
    <div className="flex flex-col mt-4 space-y-2 px-4 w-auto h-max md:w-auto lg:my-4 lg:px-4 lg:w-full hover:scale-110  cursor-pointer transition-all">
      {isDiscount && (
        <Badge.Ribbon text={`-${discount}%`} color="#1fa7d5"></Badge.Ribbon>
      )}
      <Link href={`/list/${id}`}>
        <img alt={alt} className="block h-auto w-full" src={image} />
      </Link>
      <header className="flex items-start flex-wrap leading-normal md:h-full">
        <h2 className="text-xl tracking-tight hover:text-form-blue-dark">
          {startCase(name.toLowerCase())}
        </h2>
      </header>
      <div className="font-bold text-lg tracking-normal flex w-full">
        <span id="price-box" className="w-full px-2 mb-2 flex flex-row justify-between">
          {isDiscount && (
            <p className="text-md line-through pt-1">{`$${prevPrice}`}</p>
          )}
          <p className="text-md font-bold pt-1">{`$${price}`}</p>
        </span>
      </div>
    </div>
  );
}
export default ShoeCard;
