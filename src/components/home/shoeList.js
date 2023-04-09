import React from "react"
import ShoeCarousel from "./shoeCarousel";
import { nikeList, newBalanceList } from "../utils/data";

export default function ShoeList() {
  return (
    <>
    <div className="my-2 mx-auto px-12 md:px-12 h-screen w-full space-y-4">
      <ShoeCarousel items={nikeList} brand="Nike"/>
      <ShoeCarousel items={newBalanceList} brand="New Balance"/>
    </div>
    </>
  )
}