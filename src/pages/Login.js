import React, { useEffect, useState } from 'react'
import login_bg from '../assets/images/login/login_bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { Loading } from '../components/Loading'

export const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('login-with-bg-email').value;
        const password = document.getElementById('login-with-bg-password').value;
        if (email === 'vayush798@gmail.com' && password === 'anjaliayushverma') {
            sessionStorage.setItem('love_auth', 'Ayush');
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                navigate('/dashboard');

            }, 2000);
        } else if (email === 'anjalirprasad33@gmail.com' && password === 'anjaliayushverma') {
            sessionStorage.setItem('love_auth', 'Anjali');
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                navigate('/dashboard');

            }, 2000);
        }
        else {
            alert('Wrong email or password');
        }
    }

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

                    <div className="w-full h-screen font-sans bg-cover bg-landscape"
                        style={{ backgroundImage: `url(${login_bg})` }}>
                        <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                            <div className="w-full max-w-lg">
                                <div className="leading-loose">
                                    <form onSubmit={handleSubmit} className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                                        <p className="mb-8 text-3xl font-light text-center text-gray-500">
                                            Login
                                        </p>
                                        <div className="mb-2">
                                            <div className=" relative ">
                                                <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Love ID" />
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className=" relative ">
                                                <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Love Password" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Validate Love
                                            </button>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/" className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                                                Go to Home
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
