'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function PayoutsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const recentTransactions = [
    { date: '22-10-2025', payoutId: 'PAY-00012', vendor: 'Kitchen Hub', orders: 97, gross: '$80,000', deductions: '$20.00', net: '$800,000', status: 'Paid' },
    { date: '22-10-2025', payoutId: 'PAY-00012', vendor: 'Kitchen Hub', orders: 97, gross: '$80,000', deductions: '$20.00', net: '$800,000', status: 'Paid' },
    { date: '22-10-2025', payoutId: 'PAY-00012', vendor: 'Kitchen Hub', orders: 97, gross: '$80,000', deductions: '$20.00', net: '$800,000', status: 'Paid' },
    { date: '22-10-2025', payoutId: 'PAY-00012', vendor: 'Kitchen Hub', orders: 97, gross: '$80,000', deductions: '$20.00', net: '$800,000', status: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payouts</h1>
          <p className="text-sm text-gray-600">Hello, Welcome Back</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="User"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>

      <div className="p-8">
        {/* Search Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by code or name..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowExportModal(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Export
            </button>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600"
            >
              + Create New Payout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-600 mb-2">Total Payouts</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              $450,000
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-600 mb-2">Paid Vendors</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              $250,000
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-600 mb-2">Pending Payouts</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              $80,000
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-600 mb-2">Net Payouts</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              $1,000
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Summary Section */}
          <div className="p-8 border-b">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Payouts Summary</h2>
            
            {/* Chart Area */}
            <div className="relative h-64 mb-4">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#fb923c', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#fb923c', stopOpacity: 0.05}} />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" y1={i * 50} x2="800" y2={i * 50} 
                        stroke="#f3f4f6" strokeWidth="1" />
                ))}
                
                {/* Area chart */}
                <path
                  d="M0,150 L100,120 L200,140 L300,100 L400,110 L500,80 L600,90 L700,70 L800,85 L800,200 L0,200 Z"
                  fill="url(#chartGradient)"
                />
                
                {/* Line */}
                <path
                  d="M0,150 L100,120 L200,140 L300,100 L400,110 L500,80 L600,90 L700,70 L800,85"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Points */}
                {[[0,150], [100,120], [200,140], [300,100], [400,110], [500,80], [600,90], [700,70], [800,85]].map((point, i) => (
                  <circle key={i} cx={point[0]} cy={point[1]} r="4" fill="#fb923c" stroke="white" strokeWidth="2" />
                ))}
              </svg>
              
              <div className="flex justify-between text-xs text-gray-500 px-4 mt-2">
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Payout ID</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Vendor</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Orders</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Gross Sales</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Deductions</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Net Payout</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                      <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">{transaction.payoutId}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{transaction.vendor}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{transaction.orders}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">{transaction.gross}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{transaction.deductions}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-semibold">{transaction.net}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

      
        </div>
      </div>

      {/* Create New Payout Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create New Payout</h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="text"
                  placeholder="Type name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payout Ref</label>
                <input
                  type="text"
                  placeholder="Type code"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vendor</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-500">
                  <option>Select vendor</option>
                  <option>Kitchen Hub</option>
                  <option>Chef's Corner</option>
                  <option>Food Palace</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Orders</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gross Sales</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deductions</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-500">
                    <option>e.g. $1.00</option>
                    <option>$5.00</option>
                    <option>$10.00</option>
                    <option>$20.00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Net Payout</label>
                  <input
                    type="text"
                    placeholder="e.g. $2.00"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t flex items-center gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  // Add save logic here
                }}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 font-medium text-sm shadow-md transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Complete Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Export Complete!</h3>
            <p className="text-sm text-gray-600 mb-1">Your weekly Payout report for July 20 - 27 Has</p>
            <p className="text-sm text-gray-600 mb-6">been Successfully downloaded!</p>

            <p className="text-xs text-gray-500 mb-6">
              Via Macros Weekly_Payouts_Grill_July_20_27
            </p>

            <button
              onClick={() => setShowExportModal(false)}
              className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 font-medium shadow-md transition-all"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}