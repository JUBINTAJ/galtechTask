import React, { useState } from 'react';
import { Star, Check, Package, RefreshCw, Truck } from 'lucide-react';

function KurlaPro() {
  const [selectedWeight, setSelectedWeight] = useState('30lbs');
  const [activeTab, setActiveTab] = useState('Features');

  const weights = [
    { label: '10lbs', value: '10lbs' },
    { label: '20lbs', value: '20lbs' },
    { label: '30lbs', value: '30lbs', default: true },
    { label: '40lbs', value: '40lbs' },
  ];

  const tabs = ['Features', 'Specs', 'Shipping', 'Warranty'];

  const features = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam libero ullam eos similique'
  ];

  const benefits = [
    'Boosts efficiency in training',
    'User-friendly grip structure',
    'Suitable for all fitness levels',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-[500px] bg-white rounded-lg overflow-hidden">
              <img
                src="/Rectangle 1158.png"
                alt="Kurla Pro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-start">
              <div className="h-32 w- bg-white rounded-lg overflow-hidden">
                <img
                  src="/Rectangle_1158-removebg-preview.png"
                  alt="Product view 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 bg-white rounded-lg overflow-hidden">
                <img
                  src="/Rectangle 1160.png"
                  alt="Product view 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 bg-white rounded-lg overflow-hidden">
                <img
                  src="/Rectangle 1161.png"
                  alt="Product view 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-gray-400 fill-gray-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-xs text-gray-600">Rated 4.4/5 based on +1475 reviews</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">KURLA PRO</h1>

            <div className="flex items-baseline space-x-3">
              <span className="text-md text-gray-500 line-through">$57</span>
              <span className="text-2xl font-bold text-gray-900">$45</span>
              <span className="text-xs font-semibold bg-gray-700 h-10 p-3 text-white rounded-md">SAVE $12</span>
            </div>

            <p className="text-gray-600 text-sm">Top-notch fitness gear engineered for ultimate performance and ease of use. Ideal for beginners and experts alike.</p>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">Weight:</h3>
              <div className="grid grid-cols-4 gap-2">
                {weights.map((weight) => (
                  <button
                    key={weight.value}
                    className={`px-3 py-1 rounded-md text-xs font-medium ${selectedWeight === weight.value ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                    onClick={() => setSelectedWeight(weight.value)}
                  >
                    {weight.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#A1ACDF] p-4 rounded-lg">
              <h3 className="font-medium text-blue-900">
                Join the KURLA Community + FREE Ebook
              </h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700">Auto Replenish</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700">Easy Cancellation</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#A1ACDF] text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors">
              ADD TO CART
            </button>

            <p className="text-center text-xs text-gray-600">30 Day Risk-Free Guarantee</p>

            <div className="pt-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">See Kurla in Action!</h2>
              <div className="grid grid-cols-4 gap-2">
                {[6, 7, 8, 9].map((num) => (
                  <div key={num} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img src={`/image ${num}.png`} alt={`Action shot`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <div className="flex space-x-3 mb-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-1 text-xs font-medium    ${activeTab === tab ? 'border-b-2 text-black' : 'text-gray-600 hover:text-gray-900'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {activeTab === 'Features' &&
                  features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KurlaPro;
