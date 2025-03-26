import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="bg-[#f2f2f2] flex flex-col ">
      <NavBar />

      <div className="hidden md:block w-full h-auto mt-2">
        <img
          src="/1.png"
          alt="Main Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="block md:hidden w-full px-4 bg-[#f5f5f5] overflow-hidden mt-6">
        <div className="flex flex-col items-center justify-between space-y-4">
          <div className="px-6 text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              TRAIN LIKE A <span className="text-[#a9b4e3] italic">PRO</span> AT HOME
            </h1>
            <p className="text-base">
              Transform your workouts with Kurla's <span className="font-semibold">versatile weights</span>, perfect for training any <span className="font-semibold">muscle</span>.
            </p>
          </div>

          <div className="relative w-full h-64">
            <img
              src="/Kurla_Nov2_2317 1 (2).png"
              alt="Woman exercising with ankle weights"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <a
            href="#"
            className="block w-full md:w-40 py-3 text-center font-medium text-gray-700 bg-[#b8c1e6] rounded-md hover:bg-[#a9b4e3] transition-colors"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="w-full h-16 bg-[#505362] flex justify-center space-x-6 md:space-x-10 items-center font-bold text-xl md:text-2xl text-white mt-6 md:mt-0">
        <p>BENEFIT</p>
        <p>BENEFIT</p>
        <p>BENEFIT</p>
        <p>BENEFIT</p>
      </div>
    </div>
  );
}

export default Home;
