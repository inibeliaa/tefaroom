import React from 'react'

function Miaww() {
  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4 text-gray-700">Transaksi Pembayaran</h2>
    <div className="flex justify-between items-center mb-4">
        {/* Filter and Search */}
        <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500" />
        </div>
      
    </div>
    
    <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-black">
            <thead>
                <tr className="bg-gray-50">
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Name</th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Payment Status</th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Amount</th>
                </tr>
            </thead>
            <tbody>
                {/* Row 1 */}
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200">Justin Septimus</td>
                    <td className="px-6 py-4 border-b border-gray-200">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm">Paid</span>
                        <p className="text-sm text-gray-500">Paid on 15/APR/2020</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">200.000 Rupiah</td>
                </tr>
                {/* Row 2 */}
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200">Anika Rhiel Madsen</td>
                    <td className="px-6 py-4 border-b border-gray-200">
                        <span className="bg-red-200 text-red-700 px-2 py-1 rounded-full text-sm">Overdue</span>
                        <p className="text-sm text-gray-500">Due on 15/APR/2020</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">150.000 Rupiah</td>
                </tr>
                {/* Row 3 */}
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200">Miracle Vaccaro</td>
                    <td className="px-6 py-4 border-b border-gray-200">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm">Paid</span>
                        <p className="text-sm text-gray-500">Paid on 15/APR/2020</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">300.000 Rupiah</td>
                </tr>
                {/* Row 4 */}
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200">Mira Herwitz</td>
                    <td className="px-6 py-4 border-b border-gray-200">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm">Paid</span>
                        <p className="text-sm text-gray-500">Paid on 15/APR/2020</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">360.000 Rupiah</td>
                </tr>
                {/* Row 5 */}
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200">Anika Rhiel Madsen</td>
                    <td className="px-6 py-4 border-b border-gray-200">
                        <span className="bg-red-200 text-red-700 px-2 py-1 rounded-full text-sm">Overdue</span>
                        <p className="text-sm text-gray-500">Due on 15/APR/2020</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">240.000 Rupiah</td>
                </tr>
            </tbody>
        </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <p>1-5 of 10</p>
        <div className="flex space-x-2">
            <button className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md">◀</button>
            <button className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md">▶</button>
        </div>
    </div>
</div>
    </>
  )
}

export default Miaww