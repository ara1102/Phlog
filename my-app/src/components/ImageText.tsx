import Image from 'next/image'
import React from 'react'

type imageTextProps = {
  src: string,
  text: string,
  title: string,
  order: number
}

const ImageText = ({order,src,text,title}:imageTextProps) => {
  return (
    <>
    <div className='flex flex-wrap'>
      <div className={
        `md:basis-1/2
        ${order%2 == 0 ? `md:order-last` : `md:order-first`} 
        text-center`}>
        <Image width="2848" height="4288" className="object-fill" src={src} alt=""/>
      </div>

      <div className={
        `md:basis-1/2
        ${order%2 == 0 ? `md:order-first` : `md:order-last`} 
         text-center px-14 py-36`}>
        <h2 className='bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text text-5xl md:text-4xl lg:text-6xl font-semibold mb-5'>{title}</h2>
        <p className='text-xl lg:text-3xl'>{text}</p>
      </div>
    </div>
      
    </>
  )
}

export default ImageText