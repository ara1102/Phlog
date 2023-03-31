import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type PhotosProps = {
    src: string;
    alt: string;
    desc: string;
    user: string;
    link: string;
}

const Photo = ({ src, alt, desc, user, link }: PhotosProps) => {

    if(desc == null){
        desc = alt;
    }

    return (
        <Link href={link}>
            <div className='group/card relative overflow-hidden rounded-md shadow-sm transition duration-500 hover:shadow-lg'>
                <div className='poster relative overflow-hidden'>
                    <Image src={src} alt={alt} width={400} height={400} className="w-full transition duration-500 group-hover/card:translate-y-[-36px]" />
                    <div className='absolute bottom-[-250px] h-1/3 w-full bg-gradient-to-t from-indigo-800 via-sky-500 to-transparent transition duration-500 group-hover/card:translate-y-[-250px]'>
                        <div className='absolute bottom-[2px] m-3'>
                            <p className='capitalize truncate text-gray-200 font-bold text-md block max-w-[300px]'>{desc}</p>
                            <p className='text-gray-200 font-semibold text-sm'>{user}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Photo