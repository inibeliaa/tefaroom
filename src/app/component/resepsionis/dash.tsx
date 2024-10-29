import React from 'react'

function Dash() {
  return (
    <>
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

    </>
  )
}

export default Dash