"use client";

import React from 'react';

function Login() {

    return (
            <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#003C43' }}>
                <div className="w-full max-w-md rounded-lg shadow-lg p-8" style={{ backgroundColor: '#F2F2F7' }}>
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img src="/image/logo.png" alt="Logo" className="h-16 w-16" />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex justify-center space-x-8 mb-6">
                        <button
                            className="font-bold text-lg border-b-2 border-black"
                        >
                            Log In
                        </button>
                    </div>

                    {/* Form */}
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
                </div>
            </section>
        )
    
}

export default Login;
