// pages/index.js
import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const visitorData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Visitors',
                data: [5000, 10000, 15000, 20000],
                backgroundColor: ['#66bb6a', '#42a5f5', '#ffca28', '#ef5350'],
                // Set the bar thickness to be larger than default
                barThickness: 40, // Adjust the thickness here (default is usually smaller)
            },
        ],
    };

    const checkinData = {
        labels: ['Room', 'F&B', 'Laundry'],
        datasets: [
            {
                data: [60, 30, 10],
                backgroundColor: ['#42a5f5', '#66bb6a', '#ef5350'],
            },
        ],
    };

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
                    <Bar data={visitorData} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Total</h3>
                    <Doughnut data={checkinData} />
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
