// pages/index.js
import React from 'react';



const Dashboard = () => {
    
    return (
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

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Check-in</h3>
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Total</h3>
                    
                </div>
            </div>

            {/* Finance Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Finance</h3>
                <ul className="space-y-2">
                    <li>Costumer 1: <span className="text-green-500 font-bold">+ Rp 800,000</span></li>
                    <li>Costumer 2: <span className="text-green-500 font-bold">+ Rp 520,000</span></li>
                    <li>Kompensasi: <span className="text-red-500 font-bold">- Rp 500,000</span></li>
                    <li>Listrik: <span className="text-red-500 font-bold">- Rp 380,000</span></li>
                    <li>Costumer 3: <span className="text-green-500 font-bold">+ Rp 800,000</span></li>
                    <li>Costumer 4: <span className="text-green-500 font-bold">+ Rp 400,000</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
