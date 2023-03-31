import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-7'>
                <div className='grid grid-rows-2 grid-flow-col m-auto justify-around content-start'>

                    <div className='row-span-2  self-center'>
                        <a href="" className=''>
                        <span className='p-0 font-semibold text-6xl sm:text-8xl hover:text-gray-100'>Phlog</span>
                        </a>
                    </div>


                    <div className='row-span-1 md:row-span-2 my-3'>
                        
                            <p className='px-4 text-lg font-semibold'>Resources</p>
                            <ul>
                                <li>
                                    <a href="" className='px-4 hover:text-gray-100'>Help Center</a>
                                </li>
                                <li>
                                    <a href="" className='px-4 hover:text-gray-100'>For Developers</a>
                                </li>
                                <li>
                                    <a href="" className='px-4 hover:text-gray-100'>For Investors</a>
                                </li>
                            </ul>
                    </div>

                    <div className='row-span-1 md:row-span-2 my-3'>
                            <p className='px-4 text-lg font-semibold'>Policies</p>
                            <ul>
                                <li>
                                    <a href="" className='px-4 hover:text-gray-100'>Copyright</a>
                                </li>
                                <li>
                                    <a href="" className='px-4 hover:text-gray-100'>Terms and Condition</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                
        </div>

        </footer >

    )
}

export default Footer