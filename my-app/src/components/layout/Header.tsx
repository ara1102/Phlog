import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>

            <header className='sticky top-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-2 z-10 text-black'>
                <nav>
                    <div className='flex items-center justify-between py-2 px-2 md:px-5 m-auto mb-2'>

                        <a href="" className='text-5xl pr-4 hover:text-gray-100'>
                            <Image src="/logocopy.png" alt="Phlog Logo" width={64} height={64} className="inline-block" ></Image>
                            <span className='align-middle font-semibold '>Phlog</span>
                        </a>

                        <ul className='hidden sm:flex justify-end gap-12'>
                            <li>
                                <a href="" className='px-4 font-semibold hover:text-gray-100'>Why Phlog?</a>
                            </li>
                            <li>
                                <a href="" className='px-4 font-semibold hover:text-gray-100'>Features</a>
                            </li>
                            <li>
                                <a href="" className='px-4 font-semibold hover:text-gray-100'>About</a>
                            </li>
                        </ul>

                        <div className='flex sm:hidden justify-end' >
                            <button onClick={() => {
                                setOpen(!open);
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${open ? "hidden" : ""} w-10 h-10 hover:text-gray-100`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${open ? "" : "hidden"} w-10 h-10 hover:text-gray-100`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </nav>

                <div className={`sm:hidden ${open ? "" : "hidden"}`}>
                    <ul className={`flex bottom-0 py-2 px-1 bg-blue-300 rounded-2xl`}>
                        <li >
                            <Link href="#" className="font-semibold inline-block py-2 px-4 hover:text-gray-100">
                                Why Phlog?
                            </Link>
                        </li>
                        <li
                        >
                            <a href="#" className="font-semibold inline-block py-2 px-4 hover:text-gray-100">
                                Features
                            </a>
                        </li>
                        <li
                        >
                            <a href="#" className="font-semibold inline-block py-2 px-4 hover:text-gray-100">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

            </header>
            

        </>
    )
}

export default Header