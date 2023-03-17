import React from 'react'
import Link from 'next/link'

let defaultStyling ={
  "hover":' hover:bg-button-hover rounded-lg px-1'
}
function Button({size,onClick,href,customClass,children,style={},hover=true}) {
  const sizeMapping ={
    'xs':'20',
    'sm':'32',
    'md':'48',
    'lg':'64'
  }
  const width= sizeMapping[size] || sizeMapping['lg']
  let defaultClass = ''
  const className = customClass ? customClass : defaultClass
  if(href){
    return(
      <Link
        href={href}
        style={style}
        className={`${className}${size && `w-${width}`}${hover && defaultStyling["hover"]}`}>
        {children}
      </Link>
    )
  }
  return (
    <button  
        type="button"
        onClick={onClick} 
        style={style}
        className={`${className}${size && `w-${width}`}${hover && defaultStyling["hover"]}`}>
        {children}
    </button>
  )
}

export default Button