import React from "react";
import Navbar from "./navbar";
import Footer from "./footer"

function Reservation() {         
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
                <p className="text-xl">Rp. 500.000,00</p>
              </div>
            </div>



            {/* Item 2 */}
            <div className="flex flex-col rounded-md border-2 border-black px-4 py-10 md:p-4 w-full ">
              <div className="flex flex-col gap-5">
                <div className="flex lg:gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="check-in"
                      className="border border-black p-1 w-50 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="check-out"
                      className="border border-black p-1 w-50 rounded"
                      required
                    />
                  </div>
                  <div className="ml-56">
                    <label className="block text-gray-700 mb-1 font-semibold">
                      Room Type
                    </label>
                    <p
                      id="room-type"
                      className="border border-black p-1 w-36 rounded"
                    >
                      Deluxe Room
                    </p>
                  </div>
                  <div className="lg:gap-4">
                    <label className="block text-gray-700 mb-1 font-semibold">
                      Room No
                    </label>
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
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Guest Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Last Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="ml-20">
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Adults
                    </label>
                    <select
                      id="adults"
                      className="border border-black p-1 w-20 rounded"
                      required
                    >
                      <option>0</option>
                      <option>1 </option>
                      <option>2 </option>
                      <option>3</option>
                      <option>4 </option>
                    </select>
                  </div>
                  <div className="ml-5">
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Child
                    </label>
                    <select
                      id="child"
                      className="border border-black p-1 w-20 rounded"
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
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Phone Number :
                    </label>
                    <input
                      type="tel"
                      id="No"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="+62"
                      required
                    />
                  </div>
                  <div className="ml-20">
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="border border-black p-1 w-64 rounded"
                      placeholder="..."
                      required
                    />
                  </div>
                </div>
                <div className="flex lg:gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Remarks :
                    </label>
                    <input
                      type="text"
                      id="remarks"
                      className="border border-black p-1 w-96 rounded"
                      placeholder="..."
                      required
                    />
                  </div>
                  <div className="ml-56">
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Payment Method
                    </label>
                    <select
                      id="address"
                      className="border border-black p-1 w-64 rounded"
                      required
                    >
                      <option>Bank</option>
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
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I have read and I accept the terms and conditions for this
                    booking.
                  </label>
                </div>
                <button
                  className="
	   bg-[#003C43] text-white font-semibold py-2 px-6 rounded-lg 
  "
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

export default Reservation;
