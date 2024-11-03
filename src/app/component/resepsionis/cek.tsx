
"use client";


import React, { useState } from 'react';

function Checkin() {
    const [activeTab, setActiveTab] = useState('checkin');
    // const [formData, setFormData] = useState({
    //     checkIn: '',
    //     checkOut: '',
    // });

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({ ...prevData, [name]: value }));
    // };


    return (
      <>
      <div className="flex ml-auto right-2 pl-6 pt-6 mb-6">
      <div className="flex "> 
      <div className='border border-2 border-black rounded-md flex justify-center space-x-4'>
    <button className={`px-4 py-2 ${activeTab === 'checkin' ? 'text-white bg-[#003C43]' : ''}`} 
    onClick={() => handleTabClick('checkin')}>Check In</button>
    <button className={`px-4 py-2 ${activeTab === 'checkout' ? 'text-white bg-[#003C43]' : ''}`}
    onClick={() => handleTabClick('checkout')}>Check Out</button>
    <button className={`px-4 py-2 ${activeTab === 'data' ? 'text-white bg-[#003C43]' : ''}`}
    onClick={() => handleTabClick('data')}>Data</button>
  </div>
  </div>
    </div>
  
  {/* content */}
    {/*form */}
    
  
     {activeTab === 'checkin' && (
    <>
     <h1 className="text-2xl ml-2 mb-2 font-semibold">Check In</h1>
    <div className="h-px w-full bg-black"></div>
    <div className="p-6 pb-4 mb-6">
      <h2 className="text-lg font-bold text-teal-700 mb-2">Reservation Information</h2>
      <div className="grid grid-cols-2 gap-4 font-semibold text-sm">
        <div>
                    <p>Reservation Code  : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Reservation Date  : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Room Quantity     : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Description       : <span className="font-medium">  nggap saja sesuai</span></p>
                    <p>Room Type         : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Room Number       : <span className="font-medium"> anggap saja sesuai</span></p>
                  </div>
                  <div>
                    <p>Booked By         : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Guest Name        : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Phone Number      : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Email             : <span className="font-medium"> anggap saja sesuai</span></p>
                    <p>Address           : <span className="font-medium"> anggap saja sesuai</span></p>
                  </div>
                </div>
  
              </div><div className="h-px w-full bg-black"></div><div className="flex flex-col gap-5">
                  <div className="flex lg:gap-4">
                  </div>
  
                  <div className="p-6 grid grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-1 font-semibold">Purpose of visit</label>
                      <input type='text' className="w-full border border-black rounded p-2">
                      </input>
                    </div>
  
                    <div>
                      <label className="block mb-1 font-semibold">Wake up call</label>
                      <input type='text' className="w-full border border-black rounded p-2">
                      </input>
                    </div>
  
                    <div>
                      <label className="block mb-1 font-semibold">Description</label>
                      <textarea className="w-full border border-black rounded p-2 h-20 resize-none"></textarea>
                    </div>
  
                    <div>
                      <label className="block mb-1 font-semibold">Check In</label>
                      <input type="date" className="w-full border border-black rounded p-2" />
                    </div>
  
                    <div>
                      <label className="block mb-1 font-semibold">Check Out</label>
                      <input type="date" className="w-full border border-black rounded p-2" />
                    </div>
  
                    <div className='flex gap-2'>
                      <div>
                        <label className="block mb-1 font-semibold">ID Number</label>
                        <input type="text" className="w-full border border-black rounded p-2" />
                      </div>
  
                      <div>
                        <label className="block mb-1 font-semibold">Nationality</label>
                        <input type="text" className="w-full border border-black  rounded p-2" />
                      </div>
                    </div></div>
  
                  <div className="pl-6">
                    <label className="block mb-1 font-semibold">Remarks</label>
                    <textarea className="w-full border border-black rounded p-1 resize-none"></textarea>
                  </div>
  
  
  
  
                  <div className="flex justify-end gap-4 mt-6">
                    <button className="border px-4 py-2 hover:bg-teal-700 hover:text-white rounded-md">Print Form</button>
                    <button className="border px-4 py-2 bg-teal-700 text-white rounded-md">
                      Check Out
                    </button>
                  </div>
                </div></>
   
  )}
  
  {activeTab === 'checkout' && (
    <>
  <h1 className="text-2xl ml-2 mb-2 font-semibold">Check Out</h1>
    <div className="h-px w-full bg-black"></div>
    <div className="p-6 pb-4 mb-6">
      <h2 className="text-lg font-bold text-teal-700 mb-2">Reservation Information</h2>
      <div className="grid grid-cols-2 gap-4 font-semibold text-sm">
        <div>
          <p>Reservation Code  : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Reservation Date  : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Room Quantity     : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Description       : <span className="font-medium">  nggap saja sesuai</span></p>
          <p>Room Type         : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Room Number       : <span className="font-medium"> anggap saja sesuai</span></p>
        </div>
        <div>
          <p>Booked By         : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Guest Name        : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Phone Number      : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Email             : <span className="font-medium"> anggap saja sesuai</span></p>
          <p>Address           : <span className="font-medium"> anggap saja sesuai</span></p>
        </div>
      </div>
      
    </div>
    <div className="h-px w-full bg-black"></div>
  
                <div className="flex flex-col gap-5">
                  <div className="flex lg:gap-4">
                  </div>
                
                  <div className="p-6 grid grid-cols-3 gap-4">
    <div>
      <label className="block mb-1 font-semibold">Room Status</label>
      <select className="w-full border border-black rounded p-2">
        <option>Available</option>
        <option>Booked</option>
      </select>
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Payment Method</label>
      <select className="w-full border border-black rounded p-2">
        <option>Card/Debit Card</option>
        <option>Cash</option>
      </select>
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Description</label>
      <textarea className="w-full border border-black rounded p-2 h-20 resize-none"></textarea>
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Check In</label>
      <input type="date" className="w-full border border-black rounded p-2" />
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Check Out</label>
      <input type="date" className="w-full border border-black rounded p-2" />
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Payment Status</label>
      <select className="w-full border border-black rounded p-2">
        <option>Done</option>
        <option>Pending</option>
      </select>
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Other Charge</label>
      <input type="text" className="w-full border border-black rounded p-2" />
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Nominal</label>
      <input type="number" className="w-full border border-black  rounded p-2" />
    </div>
  
    <div>
      <label className="block mb-1 font-semibold">Remarks</label>
      <textarea className="w-full border border-black rounded p-2 h-12 resize-none"></textarea>
    </div>
  </div>
  
   {/* Invoice Section */}
   <div className="bg-teal-900 text-white p-6 rounded-md">
      <h2 className="text-lg font-bold mb-4">INVOICE</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="text-left">Description</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Rp 0,00</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>Rp 0,00</p>
      </div>
      <div className="flex justify-between">
        <p>Tax (21%)</p>
        <p>Rp 0,00</p>
      </div>
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>Rp 0,00</p>
      </div>
    </div>
     
    
  
    {/* Buttons Section */}
    <div className="flex justify-end gap-4 mt-6">
      <button className="border px-4 py-2 hover:bg-teal-700 hover:text-white rounded-md">Print Bill</button>
      <button className="border px-4 py-2 bg-teal-700 text-white rounded-md">
        Check Out
      </button>
      </div>
   </div>
   </>
  )}


{activeTab === 'data' && (
  <>
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4 text-gray-700">Data Pembayaran</h2>
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
   )}

    </>
    );
    
}
export default Checkin;