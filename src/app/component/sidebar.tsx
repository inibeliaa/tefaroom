"use client";
import Link from 'next/link';
import Search from './search';


const Sidebar: React.FC = () => {


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
                                <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg" aria-hidden="true" style={{ backgroundColor: '#77B0AA' }}></span>
                                <Link href="#" className="inline-flex items-center w-full text-sm font-semibold text-gray-100 transition-colors duration-150 hover:text-gray-100 ">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                    </svg>
                                    <span className="ml-4">Dashboard</span>
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="relative px-6 py-3">
                                <Link href="/forms" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/key.svg" alt="" />
                                    <span className="ml-4">Check In / Out</span>
                                </Link>
                            </li>

                            <li className="relative px-6 py-3">
                                <Link href="/cards" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/book.svg" alt="" />
                                    <span className="ml-4">Booking Service</span>
                                </Link>
                            </li>

                            <li className="relative px-6 py-3">
                                <Link href="/charts" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/bed.svg" alt="" />
                                    <span className="ml-4">Status Kamar</span>
                                </Link>
                            </li>

                            <li className="relative px-6 py-3">
                                <Link href="/buttons" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/food.svg" alt="" />
                                    <span className="ml-4">F&B</span>
                                </Link>
                            </li>

                            <li className="relative px-6 py-3">
                                <Link href="/modals" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img className="w-5 h-5" src="/image/laundry.svg" alt="" />
                                    <span className="ml-4">Laundry</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <Search/>
            </div>
        </>
    );
};

export default Sidebar;
