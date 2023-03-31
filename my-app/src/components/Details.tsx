import Image from 'next/image';
import React from 'react'

type PhotoDetailsProps = {
    src: string;
    alt: string;
    desc: string;
    user: string;
    model: string;
    camera: string;
    location: string;
}

const PhotoDetails = ({
    src, alt, desc, user, model, camera, location
}: PhotoDetailsProps) => {

    if (desc == null) {
        desc = alt;
    }

    return (
        <>
            <div className='md:flex items-center justify-between text-black gap-6'>

                <div className='p-2 bg-gray-200 basis-1/2 rounded-md shadow-sm transition duration-500 hover:shadow-2xl'>
                    <div className='poster relative'>
                        <Image src={src} alt={alt} width={1080} height={1080} className="w-full transition duration-500" />
                    </div>
                </div>

                <div className='py-10 basis-1/2 flex flex-col items-center justify-center gap-3'>
                    <p className='capitalize font-bold text-4xl text-center p-2'>{desc}</p>
                    
                    <p className='font-semibold text-2xl'>{camera} {model}</p>
                    <p className='font-semibold text-2xl'>{location}</p>
                    <p className='font-bold text-2xl'>{user}</p>
                </div>

            </div>
        

        </>

    );
}

export default PhotoDetails;
