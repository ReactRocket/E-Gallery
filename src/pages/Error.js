import React from 'react'
import page_not_found from '../assets/illustrations/404 Error Page not Found.svg'
import { Link } from 'react-router-dom'
export const Error = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-1 items-center justify-center">

                <div className='w-full flex flex-col justify-center items-center'>
                    <img
                        src={page_not_found}
                        alt="concerned girl in yellow sweatshirt"
                        className="w-3/4 bg-cover"
                    />
                    <Link
                        to="/"
                        className="bg-purple-500 rounded-lg p-2 text-white font-bold"
                    >
                        Go Home
                    </Link>
                </div>

            </div>



        </>
    )
}
