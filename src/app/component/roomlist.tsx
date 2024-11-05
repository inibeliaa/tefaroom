import React from 'react'

function Roomlist() {
  return (
    <div className="h-screen bg-gray-100 font-sans flex flex-col">
      <div className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">Room List</h1>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 text-sm">
          Add Room
        </button>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          
          {/* Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="entries" className="text-sm">Show</label>
              <select id="entries" className="border border-gray-300 rounded-md p-1 text-sm">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className="text-sm">entries</span>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-2 text-sm w-1/3"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Id</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Room Type</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Room Price</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Bed Charge</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Capacity</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Room Size</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium text-sm border-b">Bed No</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">1</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Vip Guest</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">4000</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">100</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">3</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">King</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">2</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">2</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Vip</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">10000</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">400</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">20</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">King</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">1</td>
                </tr>
                {/* Tambahkan lebih banyak baris data sesuai kebutuhan */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Showing 1 to 10 of 14 entries</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 text-sm">Previous</button>
              <button className="px-3 py-1 bg-purple-700 text-white rounded-md text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 text-sm">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roomlist