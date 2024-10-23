import React from 'react'
import UserDashboard from '../component/dataatmin'

function Search() {
    return (
        <>
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
                                <button className="rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account" aria-haspopup="true">
                                    <img className="object-cover w-8 h-8 rounded-full" src="/image/logo.png" alt="Profile" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </header>
                <UserDashboard/>
            </div>
        </>
    )
}

export default Search