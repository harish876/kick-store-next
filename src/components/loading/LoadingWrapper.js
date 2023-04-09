import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Spin } from 'antd';
import {  LoadingOutlined } from '@ant-design/icons'
import { isEmpty } from 'lodash';

const antIcon = (
    <LoadingOutlined
      style={{
        color:'black',
        fontSize: 24,
      }}
      spin
    />
);

function LoadingWrapper({children,loading,error,origin,icon}) {
  const src = icon || "https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg?w=2000"
  if(!isEmpty(error)){
    return(
        <div className='flex flex-col items-center justify-center'>
            <Image
                priority
                src={src}
                className='flex items-center justify-center grayscale'
                width={600}
                height={600}
            />
            <Link href={`/collections/${origin}`} className='uppercase tracking-wide font-semibold hover:underline hover:text-slate-500'>
                Go Back
            </Link>
        </div>
    )
  }
  else{
    return (
        <Spin spinning={loading} indicator={antIcon}>
            {children}
        </Spin>
    )
  }
}

export default LoadingWrapper