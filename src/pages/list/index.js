import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import ShoeList from "@/components/home/shoeList"


function List() {
  return (
    <>
    <Head>
       <title>Kick Store List Shoes</title>
    </Head>
      <ShoeList/>
  </>
  )
}

export default List