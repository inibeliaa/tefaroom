"use client";

import React, { useState, useEffect } from 'react';
import axios from "axios";

import Navbar from "./navbar";
import Footer from "./footer"

function Reservation1() {     
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adult, setAdult] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [remarks, setRemarks] = useState("");
  const [price, setPrice] = useState(500000);

  

  const basePrice = 500000; // Harga dasar
    const adultFee = 10000;   // Biaya per dewasa
    const childFee = 5000;     // Biaya per anak

    useEffect(() => {
      const calculatedPrice = basePrice + (adult * adultFee) + (children * childFee);
      setPrice(calculatedPrice);
    }, [adult, children]);

  async function Reservasi() {
    const url = `https://355px512-2000.asse.devtunnels.ms/reservasi`;
    try {
        const res = await axios.post(
            url,
            {
                guestName: guestName,
                email: email,
                phone: phone,
                adult: adult,
                children: children,
                address: address,
                paymentMethod: paymentMethod,
                remarks: remarks,
                
             
            },
            {
                withCredentials: true,
            }
        );
    
        alert("Reservation successfully created!");
        console.log(res.data);
    } catch (error) {
        console.log(error);
        alert("Failed to create reservation");
    }
}
  
  return (
    <>
      <div><Navbar/></div>

      <section>
        {/* Container */}
        <div className=" mx-auto px-5 md:py-20">
          {/* Component */}
          <div className="items-center ">
            {/* Title */}
            <h2 className="text-center text-3xl font-bold md:text-5xl lg:mb-32">
              Reservation
            </h2>
          </div>
          {/* Content */}
          <div className="flex gap-5 md:mb-16 lg:mb-20">
            {/* Item */}
            <div className="flex flex-col gap-2 rounded-md border-2 border-black p-4 md:p-2 max-w-80 relative">
              <div className="py-1.5 px-1.5 rounded-md bg-gray-100">
                <div className="h-px w-full bg-black"></div>

                <div className="flex relative">
                  <img
                    src="../image/kamar2.png"
                    alt=""
                    className="mt-2 inline-block h-20 w-20 rounded-md object-cover"
                  />
                  <p className="ml-5 mt-2">
                    Lebar ruangan 100 kilometer persegitiga
                  </p>
                </div>

                <div className="flex w-full flex-col gap-5">
                  <p className="font-bold mt-2">Deluxe twin double</p>
                </div>
              </div>

              <div>
                <ul>
                  <li className="text-md font-semibold ml-3">AC</li>
                  <li className="text-md font-semibold ml-3">Wi-fi</li>
                  <li className="text-md font-semibold ml-3">TV</li>
                  <li className="text-md font-semibold ml-3">Kamar mandi</li>
                  <li className="text-md font-semibold ml-3">Kulkas</li>
                </ul>
              </div>

              <div className="absolute bottom-2 right-4 text-right font-semibold">
                <p className="text-sm">Number of room : 1</p>
                <p className="text-xl">Rp. {price.toLocaleString()}</p>
              </div>
            </div>



            {/* Item 2 */}
            <div className="flex flex-col rounded-md border-2 border-black px-4 py-10 md:p-4 w-full ">
              <div className="flex flex-col gap-5">
                <div className="flex lg:gap-4">
                           
                  <div className="">
                    <div className="block text-gray-700 mb-1 font-semibold">
                      Room Type
                    </div>
                    <p
                      id="room-type"
                      className="border border-black p-1 w-36 rounded"
                    >
                      Deluxe Room
                    </p>
                  </div>
                  <div className="lg:gap-4">
                    <div className="block text-gray-700 mb-1 font-semibold">
                      Room No
                    </div>
                    <p
                      id="room-type"
                      className="border border-black p-1 w-32 rounded"
                    >
                      102
                    </p>
                  </div>
                </div>
                {/* Divider */} <div className="h-px w-full bg-black"></div>
                <div className="flex lg:gap-4">
                  <div>
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Guest Name :
                    </div>
                    <input
                      type="text"
                      id='guestName'
                      placeholder="First Name"
                       className="border border-black p-1 w-96 rounded"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                    />
                  </div>
                 
                    
                  <div className="ml-56">
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Adults
                    </div>
                    <select
                      id="adults"
                      className="border border-black p-1 w-20 rounded"
                      value={adult}
                      onChange={(e) => setAdult(Number(e.target.value))}
                    >
                      <option>0</option>
                      <option>1 </option>
                      <option>2 </option>
                      <option>3</option>
                      <option>4 </option>
                    </select>
                  </div>
                  <div className="ml-5">
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Child
                    </div>
                    <select
                      id="children"
                      className="border border-black p-1 w-20 rounded"
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                    >
                      <option>0</option>
                      <option>1 </option>
                      <option>2 </option>
                      <option>3 </option>
                      <option>4 </option>
                    </select>
                  </div>
                </div>
                <div className="flex lg:gap-4">
                  <div>
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Email :
                    </div>
                    <input
                       type="email"
                       id='email'
                       placeholder="Email"
                        className="border border-black p-1 w-64 rounded"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Phone Number :
                    </div>
                    <input
                      type="tel"
                      id='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-black p-1 w-64 rounded"
                      placeholder="+62"
                      required
                    />
                  </div>
                  <div className="ml-20">
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Address
                    </div>
                    <input
                      type="text"
                      id="address"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="..."
                      value={address}
                       onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex lg:gap-4">
                  <div>
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Remarks :
                    </div>
                    <input
                      type="text"
                      id="remarks"
                      className="border border-black p-1 w-96 rounded"
                      value={remarks}
                     onChange={(e) => setRemarks(e.target.value)}
                      placeholder="..."
                      required
                    />
                  </div>
                  <div className="ml-56">
                    <div className="block text-gray-700 mb-2 font-semibold">
                      Payment Method
                    </div>
                    <select
                      id="paymentMethod"
                      className="border border-black p-1 w-64 rounded"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                    >
                      <option>Transfer</option>
                      <option>Cash</option>
                    </select>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Booking hanya dapat dibatalkan sebelum 24 jam
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 border border-gray-300 rounded"
                    required
                  />
                  <div className="text-gray-700 text-sm">
                    I have read and I accept the terms and conditions for this
                    booking.
                  </div>
                </div>
                <button 
                  className="
	   bg-[#003C43] text-white font-semibold py-2 px-6 rounded-lg 
  "  onClick={Reservasi}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div><Footer/></div>
    </>
  );
}

export default Reservation1;
