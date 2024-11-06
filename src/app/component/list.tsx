"use client";

import React, { useState } from 'react';
import axios from 'axios';

const List = () => {
    const [roomData, setRoomData] = useState([
        {
            roomNumber: 101,
            name: "Deluxe Room",
            price: 500000,
        },
        {
            roomNumber: 102,
            name: "Superior Room",
            price: 450000,
        },
    ]);

    const handleInputChange = (index: number, field: string, value: string | number) => {
        const updatedData = [...roomData];
        updatedData[index] = { ...updatedData[index], [field]: value };
        setRoomData(updatedData);
    };

    // Fungsi untuk menyimpan perubahan ke server
    const handleSaveChanges = async () => {
        try {
            // Mengirim data yang diperbarui ke server
            await axios.put(`${process.env.NEXT_PUBLIC_URL}api/rooms`, roomData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Perubahan berhasil disimpan!");
        } catch (error) {
            console.error("Error updating room data:", error);
            alert("Terjadi kesalahan saat menyimpan perubahan.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Hotel Room Details</h1>
            <table className="min-w-full table-auto border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Room Number</th>
                        <th className="border px-4 py-2">Room Name</th>
                        <th className="border px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {roomData.map((room, index) => (
                        <tr key={room.roomNumber}>
                            <td className="border px-4 py-2 text-center">{room.roomNumber}</td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    value={room.name}
                                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="number"
                                    value={room.price}
                                    onChange={(e) => handleInputChange(index, 'price', Number(e.target.value))}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end mt-4">
                <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default List;
