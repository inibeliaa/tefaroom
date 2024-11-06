"use client";

import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

function Login() {
    const [isVisible] = useState(true);
    const [activeTab, setActiveTab] = useState('login');
    const router = useRouter(); // Import router untuk navigasi

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordLogin, setPasswordLogin] = useState<string>("");
    const [emailLogin, setEmailLogin] = useState<string>("");

    async function Regist(e: React.FormEvent) {
        e.preventDefault();
        const url = `${process.env.NEXT_PUBLIC_URL}api/register`;
        try {
            const res = await axios.post(
                url,
                {
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                    role: 'user'
                },
                {
                    withCredentials: true,
                }
            );
            alert("Berhasil membuat akun!");
            console.log(res.data);
        } catch {
            console.error("Register error:");
            alert("Terjadi kesalahan membuat akun");
        }
    }

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        const url = `${process.env.NEXT_PUBLIC_URL}api/login`;
        try {
            const res = await axios.post(
                url,
                {
                    email: emailLogin,
                    password: passwordLogin,
                    role: 'user'
                },
                {
                    withCredentials: true,
                }
            );
            alert("Login berhasil!");
            console.log(res.data);
            router.push('/Room'); // Navigasi ke halaman Room setelah login
        } catch (error) {
            console.error("Login error:", error);
            alert("Login gagal. Silakan periksa email dan password Anda.");
        }
    }

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
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)}
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
                                    id="password1"
                                    name="password"
                                    type="password"
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    required
                                    placeholder="Password (min 8 characters)"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full text-white py-2 rounded-md font-semibold"
                                    style={{ backgroundColor: '#003C43' }}
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="mx-auto w-full max-w-md">
                            <div className="mx-auto mb-4 max-w-md pb-4">
                                <form name="wf-form-password" onSubmit={Regist}>
                                    <div className="relative flex flex-col">
                                        <label className="block text-sm font-medium text-gray-700">Nama</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="relative flex flex-col">
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                            placeholder="Password (min 8 characters)"
                                            required
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
                                            placeholder="Your Phone number"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-block w-full cursor-pointer items-center rounded-md px-6 py-3 text-center font-semibold text-white"
                                        style={{ backgroundColor: '#003C43' }} onClick={Regist}
                                    >
                                        Sign Up
                                    </button>
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
