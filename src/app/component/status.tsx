"use client"; 

import React, { useState } from "react";

const roomsData = [
    { number: 101, type: "EXECUTIVE", status: "Kosong", img: "/images/bed.svg" },
    { number: 102, type: "JUNIOR SUITE", status: "Kosong", img: "/images/bed.svg" },
];

const RoomSelection = () => {

    const [rooms, setRooms] = useState(roomsData);

    const handleStatusChange = (index, newStatus) => {
        setRooms((prevRooms) =>
            prevRooms.map((room, i) =>
                i === index ? { ...room, status: newStatus } : room
            )
        );
    };

    // Mendapatkan warna background berdasarkan status kamar
    const getBackgroundColor = (status) => {
        switch (status) {
            case "Kosong":
                return "bg-green-500";
            case "Terisi":
                return "bg-red-500";
            case "Dibersihkan":
                return "bg-yellow-500";
            default:
                return "bg-gray-100"; 
        }
    };

    // Mendapatkan warna tombol berdasarkan status kamar
    const getStatusColor = (status) => {
        switch (status) {
            case "Kosong":
                return "bg-green-600 hover:bg-green-800";
            case "Terisi":
                return "bg-red-600 hover:bg-red-800";
            case "Dibersihkan":
                return "bg-yellow-600 hover:bg-yellow-800";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-4xl font-bold mb-10">Pilih kamar yang tersedia</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg ${getBackgroundColor(room.status)}`} // Background berubah sesuai status
                    >
                        {/* Gambar kasur */}
                        <img
                            src="/image/bed.svg"
                            alt="Bed"
                            className="w-20 h-20 object-cover mb-4 rounded"
                        />
                        <h2 className="text-3xl font-bold mb-2 text-white">{room.number}</h2>
                        <p className="text-xl mb-4 text-white">{room.type}</p>
                        <p className="text-lg mb-4 text-white">Status: {room.status}</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleStatusChange(index, "Kosong")}
                                className={`px-4 py-2 text-white rounded ${getStatusColor("Kosong")}`}
                            >
                                Kosong
                            </button>
                            <button
                                onClick={() => handleStatusChange(index, "Terisi")}
                                className={`px-4 py-2 text-white rounded ${getStatusColor("Terisi")}`}
                            >
                                Terisi
                            </button>
                            <button
                                onClick={() => handleStatusChange(index, "Dibersihkan")}
                                className={`px-4 py-2 text-white rounded ${getStatusColor("Dibersihkan")}`}
                            >
                                Dibersihkan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomSelection;
