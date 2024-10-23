import React from 'react'


function navbar() {
    return (
        <>
            <nav style={{ backgroundColor: '#003C43' }}>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className='flex'>
                            <img className="size-12" src="/image/logo.png" alt="logo" />
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-10 '>
                                <a href="#" className='text-white'>About Us</a>
                                <a href="#" className='text-white'>Service</a>
                                <a href="#" className='text-white'>Use Case</a>
                                <a href="#" className='text-white'>Pricing</a>
                                <a href="#" className='text-white'>Blog</a>
                                <a href="#" className='text-white border-2 bg-gre rounded-md px-4 py-2'>request a quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar