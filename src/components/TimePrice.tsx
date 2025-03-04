'use client'
import React, { useState } from "react";

interface Destination {
  name: string;
  prices: [number, number];
}

interface Month {
  name: string;
  prices: [number, number];
}

const destinations: Destination[] = [
  { name: "Addis Ababa", prices: [55, 340] },
  { name: "Ankara", prices: [80, 400] },
  { name: "Moqadisho", prices: [65, 350] },
  { name: "Asmera", prices: [70, 380] },
  { name: "Djibouti", prices: [100, 400] },
  { name: "South Africa", prices: [80, 355] },
];

const months: Month[] = [
  { name: "January", prices: [55, 340] },
  { name: "February", prices: [55, 335] },
  { name: "March", prices: [65, 350] },
  { name: "April", prices: [65, 395] },
  { name: "May", prices: [70, 380] },
  { name: "June", prices: [65, 300] },
  { name: "July", prices: [70, 285] },
  { name: "August", prices: [80, 315] },
  { name: "September", prices: [80, 335] },
  { name: "October", prices: [100, 400] },
  { name: "November", prices: [80, 355] },
  { name: "December", prices: [90, 415] },
];

const TimePrice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Las Vegas");
  const [selectedMonth, setSelectedMonth] = useState<string>("July");

  return (
    <div
      className="min-h-screen bg-cover rounded-xl bg-center relative max-h-[200px]"
      style={{
        backgroundImage: `url('/assets/africa8.jpg')`, // ✅ Use direct public folder path
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white"
        style={{
          zIndex: 1, // To ensure content stays above the gradient
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-6 my-12 bottom-[-100px]">
        <h1 className="text-3xl md:text-4xl font-bold text-white absolute left-12 top-[-80px] mb-8">
          Discover the best time to book your next stay
        </h1>

        <div className="bg-white rounded-xl w-[800px] mx-auto py-4 mt-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => setActiveTab(destination.name)}
                className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
                  activeTab === destination.name
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400">
            Prices are based on the average price range for 3-star hotels per
            night.
          </p>

          {/* Price List */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {months.map((month) => (
                <div
                  key={month.name}
                  onClick={() => setSelectedMonth(month.name)}
                  className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all ${
                    selectedMonth === month.name
                      ? "bg-green-100 border border-green-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg font-medium">{month.name}</span>
                  <span className="text-green-600 font-semibold">
                    ${month.prices[0]} - ${month.prices[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePrice;
