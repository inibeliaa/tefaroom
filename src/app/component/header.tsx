import React from 'react'

function header() {
    return (
        <>
            <header style={{ backgroundColor: '#003C43' }}>
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                    {/* Component */}
                    <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse mt-14">
                        <div className="max-w-2xl lg:max-w-xl">
                            {/* Title */}
                            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-white">
                            Welcome To <br />
                            The Milenial Hotel.
                            </h1>
                            <p className="mb-6 max-w-lg text-sm text-white sm:text-xl lg:mb-8">
                            Selamat datang di Milenial Hotel, nikmati libur anda dengan bersantai di hote kami!
                            </p>
                            {/* Button */}
                            <div className="mb-6 flex items-stretch md:mb-10 lg:mb-12">
                                <a
                                    href="../Room#room"
                                    className="mr-5 rounded-md px-8 py-4 text-center font-semibold text-black md:mr-6 lg:mr-8 transform hover:scale-105" style={{ backgroundColor: '#77B0AA' }}
                                >
                                    Learn More
                                </a>
                            </div>
                            {/* Info */}
                            <ul className="flex items-center gap-4">
                                <li className="mr-16">
                                    <h3 className="text-2xl font-bold md:text-3xl text-white">4.2</h3>
                                    <p className="text-sm text-white">Rating</p>
                                </li>
                                <li className="mr-16">
                                    <h3 className="text-2xl font-bold md:text-3xl text-white">12K+</h3>
                                    <p className="text-sm text-white">Visitors</p>
                                </li>
                                <li className="mr-16">
                                    <h3 className="text-2xl font-bold md:text-3xl text-white">1K+</h3>
                                    <p className="text-sm text-white">Active Users</p>
                                </li>
                            </ul>
                        </div>
                        {/* Hero Image */}
                        <div>
                            <img
                                src="/image/hotel.png"
                                alt=""
                                className="h-full w-full max-w-2xl object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default header