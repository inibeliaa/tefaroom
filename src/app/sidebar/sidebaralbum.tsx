"use client";
import Link from 'next/link';
import Album from '../component/album';

const Sidebaralbum: React.FC = () => {


    return (
        <>
            <div className="flex h-screen bg-gray-50 ">
                <aside className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 h-screen " style={{ backgroundColor: '#003C43' }}>
                    <div className="py-4 text-gray-400 ">
                        <span className="ml-6 text-lg font-bold text-gray-200 flex">
                            <img src="/image/logo.png" alt="Logo" className="h-10 w-10 mr-5" />
                            <p className="mt-2">Milenial Hotel</p>
                        </span>
                        <ul className="mt-6">
                            <li className="relative px-6 py-3">
                                <Link href="../atmin" className="inline-flex items-center w-full text-sm font-semibold text-gray-100 transition-colors duration-150 hover:text-gray-100 ">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                    </svg>
                                    <span className="ml-4">Dashboard</span>
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="relative px-6 py-3">
                                <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg" aria-hidden="true" style={{ backgroundColor: '#77B0AA' }}></span>
                                <Link href="../album" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/album.svg" alt="" />
                                    <span className="ml-4">Gambar kamar</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="relative px-6 py-3">
                                <Link href="../list" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/list.svg" alt="" />
                                    <span className="ml-4">Room list</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="relative px-6 py-3">
                                <Link href="../report" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/report.svg" alt="" />
                                    <span className="ml-4">Report</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </aside>
                {/* Main content */}
                <div className="flex flex-col flex-1 w-full bg-white flex-grow overflow-y-auto">
                    <header className="z-10 py-4" style={{ backgroundColor: '#77B0AA' }}>
                        <div className="container flex items-center justify-between h-full px-6 mx-auto text-black">
                            {/* Search Bar */}
                            <div className="flex justify-center flex-1 lg:mr-32">
                                <div className="relative w-full max-w-xl mr-6 focus-within:text-black">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-black bg-gray-100 border-0 rounded-md focus:outline-none inline-block" type="text" placeholder="Search Riwayat" aria-label="Search" />
                                </div>
                            </div>

                            {/* Profile Menu */}
                            <ul className="flex items-center flex-shrink-0 space-x-6">
                                <li className="relative">
                                    <button className="rounded-full focus:shadow-outline-purple focus:outline-none flex" aria-label="Account" aria-haspopup="true">
                                        <img className="object-cover w-8 h-8 rounded-full" src="/image/logo.png" alt="Profile" />
                                        <h1 className="mt-1 text-white font-bold ml-2">Alif Maulid Azizil</h1>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <Album />
                </div>
            </div>
        </>
    );
};

export default Sidebaralbum;
