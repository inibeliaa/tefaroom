import React from 'react'
import Link from 'next/link'

function navbar() {
    return (
        <>
            <header className="text-white" style={{ backgroundColor: '#003C43' }}>
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img src="/image/logo.png" alt="Logo" className="h-12 w-12" />
                    </div>

                    {/* Navbar Links */}
                    <nav className="flex space-x-8 text-lg">
                        <Link href="/Room" className="hover:text-gray-300">Home</Link>
                        <Link href="/rooms" className="hover:text-gray-300">Rooms</Link>
                        <Link href="/laundry" className="hover:text-gray-300">Laundry</Link>
                        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                    </nav>

                    {/* Login & Sign Up Buttons */}
                    <div className="flex space-x-4">
                        <Link href="../login">
                            <button className="text-black rounded-md px-4 py-2 hover:scale-105" style={{ backgroundColor: '#77B0AA' }}>
                                Login
                            </button>
                        </Link>
                        <Link href="../login">
                            <button className="text-white px-4 py-2 hover:border-b-2">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default navbar