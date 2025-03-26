import React from "react";
import Navbar from "../navbar";
import { TramFront } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-14 py-6">
        {/* Top Stats Row */}
        <div className="flex gap-6 mb-6">
          {/* Overview Chart */}
          <div className="flex-1 bg-white w-[540px] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* <h3 className="font-semibold mb-3">Overview</h3> */}
            <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
              <img src="/Home/data.png" alt="Chart" className="w-full h-full object-cover" /> 
            </div>
          </div>

          {/* Active Devices Card */}
          <div className="w-64 p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-xl shadow-md">
            {/* Top Section */}
            <div className="flex mb-8">
              {/* Icon in white box */}
              <div className="bg-white p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#4FD1C5"/>
                  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#4FD1C5"/>
                </svg>
              </div>
              {/* Number and Text */}
              <div className="ml-auto">
                <p className="text-4xl font-bold mb-1">67</p>
                <p className="text-sm text-gray-700">Active Devices</p>
              </div>
            </div>

            {/* Bottom Box */}
            <div className="bg-white rounded-xl p-3">
              <p className="text-gray-700 flex justify-between">
                <span className="text-sm">Total Devices:</span>
                <span className="text-sm">67</span>
              </p>
            </div>
          </div>

          {/* Subscribed Card */}
          <div className="w-64 p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-xl shadow-md">
            {/* Top Section */}
            <div className="flex mb-8">
              {/* Icon in white box */}
              <div className="bg-white p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 17H7V14H17V17ZM17 13H7V10H17V13ZM17 9H7V7H17V9Z" fill="#4FD1C5"/>
                </svg>
              </div>
              {/* Number and Text */}
              <div className="ml-auto">
                <p className="text-4xl font-bold mb-1">510</p>
                <p className="text-sm text-gray-700">Subscribed</p>
              </div>
            </div>

            {/* Bottom Box */}
            <div className="bg-white rounded-xl p-3">
              <p className="text-gray-700 flex justify-between">
                <span className="text-sm">Total Applications:</span>
                <span className="text-sm">2000</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-6">
          {/* Left Content (30%) - Events Section */}
          <div className="w-[35%] space-y-6">
            {/* Events Stats Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* <h3 className="font-semibold mb-3">Events Stats</h3> */}
              <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
              <img src="/home/Barchart.jpg" alt="Chart" className="w-full h-full object-cover" /> 
              </div>
            </div>

            {/* Live Events */}
            <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold mb-3">Live Events</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center">
                
                  <img src="/home/Feed1.png" alt="Chart" className="w-full h-full object-cover" /> 

                </div>
                <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="/home/Feed2.png" alt="Chart" className="w-full h-full object-cover" /> 

                </div>
              </div>
            </div>
          </div>

          {/* Right Content (70%) - Map and App List */}
          <div className="w-[65%] flex gap-6">
            {/* Map Section (50% of parent) */}
            <div className="w-[71.5%]">
              <div className="bg-white p-3 rounded-xl shadow-md h-full hover:shadow-xl transition-shadow duration-300">
                {/* <h3 className="font-semibold mb-3">Map</h3> */}
                <div className="h-[360px] bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="/home/Map.png" alt="Chart" className="w-full h-full object-cover" /> 
                </div>
              </div>
            </div>

            {/* App List Section (20% of parent) */}
            <div className="w-[28.5%]">
              <div className="bg-white p-4 rounded-xl shadow-md h-full hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold mb-3 flex justify-between">
                  <span>App List</span>
                  <span className="text-blue-500 cursor-pointer">See All</span>
                </h3>
                <ul className="text-sm">
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">Train Detection</span> 
                    <TramFront />
                  </li>
                  <span> 0 </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">Smoke & Fire</span> 
                    <TramFront />
                  </li>
                  <span> 272 </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">ANPR</span> 
                    <TramFront />
                  </li>
                  <span> 70.5 </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">Crowd Estimation</span> 
                    <TramFront />
                  </li>
                  <span> 10k </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">Face Recognition</span> 
                    <TramFront />
                  </li>
                  <span> 0 </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">No Helmet Violation</span> 
                    <TramFront />
                  </li>
                  <span> 210 </span>
                  <li className="flex justify-between py-1">
                    <span className="font-bold text-gray-400">Stopped Vehicle</span> 
                    <TramFront />
                  </li>
                  <span> 200 </span>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
