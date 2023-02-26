import React from 'react'
import { useRouter } from 'next/router';
import ShoeModel from '@/components/home/shoeModel';

function listShoe() {
  const { query } = useRouter();
  return (
    <div>
        <ShoeModel
            id={query['id']}
        />
    </div>
  )
}

export default listShoe