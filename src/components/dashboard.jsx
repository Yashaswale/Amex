import React from 'react';
import Navbar from './navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          
          {/* Dashboard content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Investments</span>
                  <span className="text-green-600 font-medium">$24,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Stocks</span>
                  <span className="text-blue-600 font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Watchlist Items</span>
                  <span className="text-purple-600 font-medium">8</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Stock purchase: AAPL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Stock sold: TSLA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Added to watchlist: MSFT</span>
                </div>
              </div>
            </div>

            {/* Market Overview */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Market Overview</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Status</span>
                  <span className="text-green-600 font-medium">Open</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Trading Volume</span>
                  <span className="text-gray-800 font-medium">2.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Trend</span>
                  <span className="text-green-600 font-medium">Bullish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 