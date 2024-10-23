"use client";

import React, { useState } from 'react';

function Login() {
    const [isVisible,] = useState(true);
    const [activeTab, setActiveTab] = useState('login');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        isVisible && (
            <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#003C43' }}>
                <div className="w-full max-w-md rounded-lg shadow-lg p-8" style={{ backgroundColor: '#F2F2F7' }}>
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img src="/image/logo.png" alt="Logo" className="h-16 w-16" />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex justify-center space-x-8 mb-6">
                        <button
                            className={`font-bold text-lg ${activeTab === 'login' ? 'border-b-2 border-black' : 'text-gray-400'}`}
                            onClick={() => handleTabClick('login')}
                        >
                            Log In
                        </button>
                        <button
                            className={`font-bold text-lg ${activeTab === 'signup' ? 'border-b-2 border-black' : 'text-gray-400'}`}
                            onClick={() => handleTabClick('signup')}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    {activeTab === 'login' ? (
                        <form className="space-y-6" method="post">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password (min 8 characters)"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full  text-white py-2 rounded-md font-semibold " style={{ backgroundColor: '#003C43' }}
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="mx-auto w-full max-w-md">
                        <div className="mx-auto mb-4 max-w-md pb-4">
                            <form name="wf-form-password" method="post"> 
                                <div className="relative flex flex-col">
                                    <div className="block text-sm font-medium text-gray-700">Nama</div>
                                    <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300" placeholder="Your Name" required />
                                </div>
                                <div className="relative flex flex-col">
                                    <div className="block text-sm font-medium text-gray-700">Email</div>
                                    <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300" placeholder="Email Address" required />
                                </div>
                                <div className="relative mb-4">
                                    <div className="block text-sm font-medium text-gray-700">Password</div>
                                    <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300" placeholder="Password (min 8 characters)" required />
                                </div>
                                <div className="relative mb-4">
                                    <div className="block text-sm font-medium text-gray-700">Phone Number</div>
                                    <input type="tel" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300" placeholder="Your Phone number" required />
                                </div>
                                <label className="mb-6 flex items-center justify-start pb-12 md:mb-10 lg:mb-1">
                                    <input type="checkbox" name="checkbox" className="float-left mr-2" />
                                    <label className="inline-block cursor-pointer text-sm" htmlFor="checkbox"> 
                                        Remember Password?
                                    </label>
                                </label>
                                <input type="submit" value="Sign Up" className=" inline-block w-full cursor-pointer items-center rounded-md px-6 py-3 text-center font-semibold text-white" style={{ backgroundColor: '#003C43' }}/>
                            </form>
                        </div>
                    </div>
                    )}

                    {/* Sign up link */}
                    {activeTab === 'login' && (
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don’t have an account yet?{' '}
                                <a
                                    href="#"
                                    onClick={() => handleTabClick('signup')}
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign Up Here!
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </section>
        )
    );
}

export default Login;
