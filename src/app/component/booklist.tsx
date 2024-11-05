import React from 'react';
import Sidebar from './sidebar'
function InvoiceList() {
  // Static invoice data sesuai dengan gambar
  const invoices = [
    { id: 1, date: "05/01/2024", invoiceNo: "252566", supplierName: "Lisa", amount: "$2100" },
    { id: 2, date: "07/12/2024", invoiceNo: "252577", supplierName: "Ryan", amount: "$1400" },
    { id: 3, date: "08/05/2023", invoiceNo: "252563", supplierName: "Mordy", amount: "$1100" },
    { id: 4, date: "08/11/2024", invoiceNo: "252576", supplierName: "Samantha", amount: "$2500" },
    { id: 5, date: "18/05/2022", invoiceNo: "252562", supplierName: "Lord", amount: "$1900" },
    { id: 6, date: "18/12/2024", invoiceNo: "252578", supplierName: "Amanda", amount: "$2700" },
    { id: 7, date: "19/12/2024", invoiceNo: "252579", supplierName: "Olivia", amount: "$1850" },
    { id: 8, date: "28/04/2022", invoiceNo: "252561", supplierName: "Jerry", amount: "$1500" },
  ];

  return (
    <div> <Sidebar/>
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Invoice List</h2>
      <div className="flex justify-between items-center mb-4">
        {/* Filter and Search */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Date</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Invoice NO</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Supplier Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 border-b border-gray-200">{invoice.date}</td>
                <td className="px-6 py-4 border-b border-gray-200">{invoice.invoiceNo}</td>
                <td className="px-6 py-4 border-b border-gray-200">{invoice.supplierName}</td>
                <td className="px-6 py-4 border-b border-gray-200">{invoice.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <p>{`1-${Math.min(invoices.length, 5)} of ${invoices.length}`}</p>
        <div className="flex space-x-2">
          <button className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md">◀</button>
          <button className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md">▶</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InvoiceList;
