import React from 'react'

function Room() {
    return (
        <>
            <section>
                {/* Container */}
                <div className="mx-auto  w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                    {/* Component */}
                    <div className="flex flex-col items-center">
                        {/* Title */}
                        <h2 className="text-center text-3xl font-bold md:text-5xl">
                            Our Rooms
                        </h2>
                        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
                            Rasakan kenyamanan dan kemewahan di kamar hotel kami!
                        </p>
                        {/* Content */}
                        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 md:grid-cols-2 lg:mb-20 lg:gap-6">
                            {/* Item */}
                            <a
                                href=""
                                className="flex flex-col gap-4 rounded-md bg-gray-100 px-4 py-8 md:p-4 transform hover:scale-105"
                            >
                                <div className="relative	">
                                    <img
                                        src="/image/kamar1.png"
                                        alt=""
                                        className="inline-block h-60 w-full rounded-md object-cover"
                                    />
                                    <div className="absolute -bottom-7 right-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid border-gray-300 bg-black">
                                        <img
                                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e0b7ecf55e2b1c5295de4_Vector.svg"
                                            alt=""
                                            className="inline-block"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-5">
                                    <div className="rounded-md bg-gray-100 px-2 py-1.5">
                                        <p className="text-sm font-semibold text-blue-600">
                                            Room 101
                                        </p>
                                    </div>
                                    <p className="font-bold">
                                        Deluxe twin double
                                    </p>
                                    {/* Divider */} <div className="h-px w-full bg-black"></div>

                                </div>
                            </a>
                            {/* Item */}
                            <a
                                href="#"
                                className="flex flex-col gap-4 rounded-md bg-gray-100 px-4 py-8 md:p-4 transform hover:scale-105"
                            >
                                <div className="relative">
                                    <img
                                        src="/image/kamar2.png"
                                        alt=""
                                        className="inline-block h-60 w-full rounded-md object-cover"
                                    />
                                    <div className="absolute -bottom-7 right-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid border-gray-300 bg-black">
                                        <img
                                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e0b7ecf55e2b1c5295de4_Vector.svg"
                                            alt=""
                                            className="inline-block"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-5">
                                    <div className="rounded-md bg-gray-100 px-2 py-1.5">
                                        <p className="text-sm font-semibold text-blue-600">
                                            Room 102
                                        </p>
                                    </div>
                                    <p className="font-bold">
                                        Deluxe twin double
                                    </p>
                                    {/* Divider */} <div className="h-px w-full bg-black"></div>
                                </div>
                            </a>
                        </div>
                        {/* Button */}
                        <a
                            href="#"
                            className="rounded-md bg-black px-6 py-3 font-semibold text-white"
                        >
                            Check All&nbsp;Reviews
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Room