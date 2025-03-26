import React from "react";
import { Check, X } from "lucide-react";

function KurlaBest() {
  const features = [
    { name: "Convenient & portable", kurla: true, others: false },
    { name: "Adjustable Weights", kurla: true, others: true },
    { name: "Price vs Value", kurla: true, others: false },
    { name: "Durability", kurla: true, others: true },
  ];

  const competitors = ["Gyms", "Gyms", "Gyms"];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">
          WHY KURLA
          <br />
          IS THE BEST
        </h1>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className="aspect-square bg-[#A1ACDF] md:bg-gray-50 rounded-lg p-4 flex items-center justify-center border border-gray-300">
              <img
                src="/Rectangle_1158-removebg-preview.png"
                alt="Kurla"
                className="w-full object-cover"
              />
            </div>
          </div>
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="col-span-1 bg-[#A1ACDF] md:bg-gray-50 rounded-lg p-4 flex items-center justify-center"
            >
              <span className="text-lg font-medium text-white md:text-gray-900">
                {competitor}
              </span>
            </div>
          ))}

          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 bg-[#A1ACDF] md:bg-gray-50 rounded-lg p-4 flex items-center">
                <span className="text-sm font-medium text-white md:text-gray-900">
                  {feature.name}
                </span>
              </div>

              <div className="col-span-1 bg-[#A1ACDF] md:bg-gray-50 rounded-lg p-4 flex items-center justify-center border border-gray-300">
                <div className="w-8 h-8 flex items-center justify-center border-2 border-white md:border-blue-600 rounded-full">
                  <Check className="w-5 h-5 text-white md:text-blue-600" />
                </div>
              </div>

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="col-span-1 bg-[#A1ACDF] md:bg-gray-50 rounded-lg p-4 flex items-center justify-center"
                >
                  {feature.others ? (
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-white md:border-gray-400 rounded-full">
                      <Check className="w-5 h-5 text-white md:text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-white md:border-gray-400 rounded-full">
                      <X className="w-6 h-6 text-white md:text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KurlaBest;
