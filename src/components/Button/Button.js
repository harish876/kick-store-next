import React from 'react'

function Button({text,size,onClick}) {
  const sizeMapping ={
    'xs':'20',
    'sm':'32',
    'md':'48',
    'lg':'64'
  }
  const width= sizeMapping[size] || sizeMapping['lg']
  return (
    <button  onClick={onClick} className={`h-16 w-${width} bg-black text-white py-2 px-4 uppercase text-sm tracking-tight hover:bg-form-blue-dark transition-colors`}>
        {text}
    </button>
  )
}

export default Button