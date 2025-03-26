import { BadgeCheck, Heart, Truck } from 'lucide-react'
import React from 'react'

function RiskFree() {
  return (
    <div className="flex justify-center items-center min-h-screen px-6 bg-gradient-to-r from-white via-[#505362] to-gray-700">
      <section className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="/Kurla_Nov2_2669_1-removebg-preview.png"
            alt="Woman using Kurla weights"
            className="w-full max-w-lg h-auto object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center p-8 text-white ">
          <div className="flex justify-center md:justify-start mb-6">
            <BadgeCheck className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-center md:text-left mb-4">
            TRY IT 100% RISK FREE
          </h2>
          <p className="text-lg text-center md:text-left mb-8">
            Transform your workouts with Kurla's at-home weights.
            <br />
            Enjoy a 30-Day Risk-Free Guarantee that lets you
            <br />
            experience our product risk-free.
          </p>
          <button className="bg-[#A1ACDF] text-gray-900 py-4 px-8 rounded-lg text-xl font-medium  transition-colors mb-8">
            SHOP KURLA
          </button>
          <div className="flex justify-center md:justify-start space-x-8">
            <div className="flex items-center  p-2 bg-gray-500 rounded-md">
              <Heart className="w-5 h-5 mr-2 text-gray-800" />
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center  p-2 bg-gray-500 rounded-md">
              <Truck className="w-5 h-5 mr-2 text-gray-800" />
              <span>3-5 Day Shipping</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RiskFree
