import React from 'react'
import { useRouter } from 'next/router';
import ShoeModel from '@/components/home/shoeModel';
import Navbar from '@/components/home/Navbar';
import { useSession } from "next-auth/react"

function ListShoe() {
  const { query } = useRouter();
  const {data:session} = useSession()
  return (
    <div>
        <Navbar
          session={session}
        />
        <ShoeModel
            id={query['id']}
            session={session}
        />
    </div>
  )
}

export default ListShoe