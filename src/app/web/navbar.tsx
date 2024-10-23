import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className='flex'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black" />
                                </svg>

                                <a href="/" className='text-black text-bold text-3xl'>
                                    Positivus
                                </a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-10 '>
                                <a href="#" className='text-black'>About Us</a>
                                <a href="#" className='text-black'>Service</a>
                                <a href="#" className='text-black'>Use Case</a>
                                <a href="#" className='text-black'>Pricing</a>
                                <a href="#" className='text-black'>Blog</a>
                                <a href="#" className='text-black border-2 border-black rounded-md px-4 py-2'>request a quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar