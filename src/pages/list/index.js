import React from "react"
import Head from "next/head"
import ShoeList from "@/components/home/shoeList"
import Navbar from "@/components/home/Navbar"
import { useSession } from "next-auth/react"


function List() {
  const {data:session} = useSession()
  return (
    <>
    <Head>
       <title>Kick Store List Shoes</title>
    </Head>
      <>
        <Navbar
          session={session}
        />
        <ShoeList
          session={session}
        />
      </>
  </>
  )
}

export default List