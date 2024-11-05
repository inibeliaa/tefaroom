"use client";

import React, { useState } from 'react';

function Dash() {
    const [activeTab, setActiveTab] = useState('room');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="flex ml-auto right-2 pl-6 pt-6 mb-6 mr-7">
                <div className="flex ">
                    <div className=' border-2 border-black rounded-md flex justify-center space-x-4'>
                        <button
                            className={`px-4 py-2 ${activeTab === 'room' ? 'text-white bg-[#003C43]' : ''}`}
                            onClick={() => handleTabClick('room')}
                        >
                            Room
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'fnb' ? 'text-white bg-[#003C43]' : ''}`}
                            onClick={() => handleTabClick('fnb')}
                        >
                            F&B
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'laundry' ? 'text-white bg-[#003C43]' : ''}`}
                            onClick={() => handleTabClick('laundry')}
                        >
                            Laundry
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === 'room' && (
                <>
                    <h1 className="text-2xl ml-2 mb-2 font-semibold">Room</h1>
                    {/* Content for Room */}
                    <div className="p-6 bg-gray-100 min-h-screen">
                        {/* Statistic Cards */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pengunjung</h3>
                                <p className="text-2xl font-bold">10,367,699</p>
                                <p className="text-sm text-gray-500">Up to 69.69%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Check-in</h3>
                                <p className="text-2xl font-bold">1,343</p>
                                <p className="text-sm text-gray-500">Up to 19.39%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pendapatan</h3>
                                <p className="text-2xl font-bold">Rp 51,756,000</p>
                                <p className="text-sm text-gray-500">Up to 35.58%</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Riwayat Transaksi</h2>

                            {/* Search Input */}
                            <div className="flex justify-end mb-4">
                                <input
                                    type="text"
                                    placeholder="Search User..."
                                    className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Nama</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Tanggal Pesan</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Reservation Code</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Jumlah Kamar</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Status</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example Row 1 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                <p>&lt; 1 &gt;</p>
                            </div>
                        </div>

                    </div>


                </>
            )}

            {activeTab === 'fnb' && (
                <>
                    <h1 className="text-2xl ml-2 mb-2 font-semibold">F&B</h1>
                    {/* Content for F&B */}
                    <div className="p-6 bg-gray-100 min-h-screen">
                        {/* Statistic Cards */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pengunjung</h3>
                                <p className="text-2xl font-bold">10,367,699</p>
                                <p className="text-sm text-gray-500">Up to 69.69%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pembeli</h3>
                                <p className="text-2xl font-bold">1,343</p>
                                <p className="text-sm text-gray-500">Up to 19.39%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pendapatan</h3>
                                <p className="text-2xl font-bold">Rp 51,756,000</p>
                                <p className="text-sm text-gray-500">Up to 35.58%</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Riwayat Transaksi</h2>

                            {/* Search Input */}
                            <div className="flex justify-end mb-4">
                                <input
                                    type="text"
                                    placeholder="Search User..."
                                    className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Nama</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Tanggal Pesan</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Reservation Code</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Jumlah Kamar</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Status</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example Row 1 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                <p>&lt; 1 &gt;</p>
                            </div>
                        </div>

                    </div>
                </>
            )}

            {activeTab === 'laundry' && (
                <>
                    <h1 className="text-2xl ml-2 mb-2 font-semibold">Laundry</h1>
                    {/* Content for Laundry */}
                    <div className="p-6 bg-gray-100 min-h-screen">
                        {/* Statistic Cards */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pengunjung</h3>
                                <p className="text-2xl font-bold">10,367,699</p>
                                <p className="text-sm text-gray-500">Up to 69.69%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pelanggan</h3>
                                <p className="text-2xl font-bold">1,343</p>
                                <p className="text-sm text-gray-500">Up to 19.39%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Pendapatan</h3>
                                <p className="text-2xl font-bold">Rp 51,756,000</p>
                                <p className="text-sm text-gray-500">Up to 35.58%</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Riwayat Transaksi</h2>

                            {/* Search Input */}
                            <div className="flex justify-end mb-4">
                                <input
                                    type="text"
                                    placeholder="Search User..."
                                    className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Nama</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Tanggal Pesan</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Reservation Code</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Jumlah Kamar</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Status</th>
                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example Row 1 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                        {/* Example Row 2 */}
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-200">Miaw</td>
                                            <td className="px-6 py-4 border-b border-gray-200">03.25.2024</td>
                                            <td className="px-6 py-4 border-b border-gray-200">Amba1223334</td>
                                            <td className="px-6 py-4 border-b border-gray-200">1</td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Approve</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-200">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detail</button>
                                            </td>
                                        </tr>
                                        {/* Duplicate the rows as necessary */}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                <p>&lt; 1 &gt;</p>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </>
    );
}

export default Dash;
