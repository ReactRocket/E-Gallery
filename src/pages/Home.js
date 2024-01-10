import React, { useState, useEffect } from 'react'
import home_bg from '../assets/images/home/home_bg.jpg'
import { Link } from 'react-router-dom'
import { Loading } from '../components/Loading'

export const Home = () => {
    const [loading, setLoading] = useState(false)

    let love_auth = sessionStorage.getItem('love_auth');

    useEffect(() => {
        setLoading(true)

        return () => {
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
    }, [])

    return (
        <>

            {
                loading ?

                    <div className='h-screen w-screen flex justify-center items-center bg-black'>
                        <Loading />
                    </div>
                    :
                    <div className="relative h-screen flex justify-center items-center overflow-hidden bg-indigo-900">
                        <img src={home_bg} className="absolute object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-25">
                        </div>
                        <header className="absolute top-0 left-0 right-0 z-20">
                            <nav className="container px-6 py-4 mx-auto md:px-12">
                                <div className="items-center justify-center md:flex">
                                    <div className="flex items-center justify-between">
                                        <div className="md:hidden">
                                            <button className="text-white focus:outline-none">
                                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <div className="items-center hidden md:flex">
                                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                    Ticket
                                </a>
                                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                    Info
                                </a>
                                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                    Contact
                                </a>
                            </div> */}
                                </div>
                            </nav>
                        </header>
                        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                            <div className="relative z-10 flex flex-col items-center w-full">
                                <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
                                    Love Moments
                                </h1>
                                <Link to={love_auth ? "/dashboard" : "/login"} className="block rounded-lg px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-purple-600 hover:bg-purple-900">
                                    {love_auth ? "Dashboard" : "Start Now"}
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
