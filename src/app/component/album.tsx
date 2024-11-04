"use client";

import React, { useState } from "react";

interface Room {
    id: number;
    roomNumber: string;
    image: File | null;
    previewUrl: string | null;
}

function Album() {
    const [rooms, setRooms] = useState<Room[]>([
        { id: 1, roomNumber: "101", image: null, previewUrl: null },
        { id: 2, roomNumber: "102", image: null, previewUrl: null },
    ]);

    // Fungsi untuk menangani perubahan gambar pada kamar tertentu
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, roomId: number) => {
        const file = e.target.files?.[0];
        if (file) {
            setRooms(prevRooms =>
                prevRooms.map(room =>
                    room.id === roomId
                        ? { ...room, image: file, previewUrl: URL.createObjectURL(file) }
                        : room
                )
            );
        }
    };

    // Fungsi untuk menyimpan gambar (simulasi)
    const handleSave = (roomId: number) => {
        const room = rooms.find(room => room.id === roomId);
        if (room && room.image) {
            console.log(`Gambar untuk kamar ${room.roomNumber} berhasil disimpan:`, room.image);
            alert(`Gambar untuk kamar ${room.roomNumber} berhasil disimpan!`);
        } else {
            alert(`Pilih gambar untuk kamar ${room?.roomNumber ?? ''} terlebih dahulu.`);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Edit Gambar Kamar</h1>

            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Nomor Kamar</th>
                        <th className="border px-4 py-2">Pratinjau Gambar</th>
                        <th className="border px-4 py-2">Unggah Gambar</th>
                        <th className="border px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map(room => (
                        <tr key={room.id} className="text-center">
                            <td className="border px-4 py-2">{room.roomNumber}</td>
                            <td className="border px-4 py-2">
                                {room.previewUrl ? (
                                    <img
                                        src={room.previewUrl}
                                        alt={`Room ${room.roomNumber} Preview`}
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                ) : (
                                    <span className="text-gray-500">Tidak ada gambar</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={e => handleImageChange(e, room.id)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleSave(room.id)}
                                    className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800"
                                >
                                    Simpan Gambar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Album;
