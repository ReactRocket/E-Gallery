import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import ayush_img from '../assets/images/dashboard/Ayush.jpg'
import anjali_img from '../assets/images/dashboard/Anjali.jpg'
export const Dashboard = () => {
    const [isMenu, setIsMenu] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    const path = location.pathname


    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            sessionStorage.clear();
            navigate("/");
        }
    }
    return (
        <>
            <aside
                className={`fixed top-0 z-10 ${!isMenu && 'ml-[-100%]'}  flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700`}
            >
                <div>
                    <div className="mt-8 text-center">
                        <img
                            src={sessionStorage.getItem('love_auth') === 'Ayush' ? ayush_img : anjali_img}
                            alt=""
                            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
                        />
                        <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">{sessionStorage.getItem('love_auth')}</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="mt-8 space-y-2 tracking-wide">
                        <li>
                            <Link
                                onClick={() => setIsMenu(!isMenu)}
                                to=""
                                aria-label="dashboard"
                                className={path === '/dashboard' ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white" : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"}
                            >
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                        className="dark:fill-slate-600 fill-current text-cyan-400"
                                    ></path>
                                    <path
                                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                        className="fill-current text-cyan-200 group-hover:text-cyan-300"
                                    ></path>
                                    <path
                                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                        className="fill-current group-hover:text-sky-300"
                                    ></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMenu(!isMenu)}
                                to="photos"
                                className={path === '/dashboard/photos' ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white" : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Photos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMenu(!isMenu)}
                                to="videos"
                                className={path === '/dashboard/videos' ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white" : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-play" viewBox="0 0 16 16">
                                    <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Videos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMenu(!isMenu)}
                                to="albums"
                                className={path === '/dashboard/albums' ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white" : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-album" viewBox="0 0 16 16">
                                    <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Albums</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMenu(!isMenu)}
                                to="upload"
                                className={path === '/dashboard/upload' ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white" : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-white">Upload</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
                    <button onClick={handleLogout} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                        <span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
                    </button>
                </div>
            </aside>
            <div className="ml-auto min-h-full w-full lg:w-[75%] xl:w-[80%] 2xl:w-[75%] ">
    <div className="px-6 pt-6 w-full h-full overflow-hidden 2xl:container dark:text-white bg-white dark:bg-gray-900 dark:border-gray-700 ">
        <div className="overflow-y-auto h-full">
            <Outlet />
        </div>
    </div>
</div>

            <span onClick={() => setIsMenu(!isMenu)} className='lg:hidden fixed top-0 right-0 m-2 z-50 text-white'>
                {
                    isMenu ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                }


            </span>
        </>
    )
}
