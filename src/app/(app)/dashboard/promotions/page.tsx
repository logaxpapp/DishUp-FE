'use client';

import React, { useState } from 'react';
import DashboardHeader from '@/components/Dashboardheader';

export default function CouponManagementPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const coupons = Array(9).fill({
    name: 'Weekend Special',
    code: 'COUPON1234',
    type: 'COUPON1234',
    discount: '$5.00',
    startDate: '2025-5-8',
    endDate: '2025-5-14',
    usageLimit: '20',
    used: '0',
    status: 'Active'
  });

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Coupon Management"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      <div className="p-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <button className="text-gray-500 hover:text-gray-700">Dashboard</button>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <button className="text-gray-500 hover:text-gray-700">Promotions</button>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <button className="text-gray-900 font-medium">Coupons</button>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Search and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by order or name..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            + Add New Coupon
          </button>
        </div>

        {/* Coupons Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Discount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Active From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Valid Until</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Usage Limit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-900">{coupon.name}</td>
                  <td className="px-6 py-3">
                    <span className="inline-flex px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">{coupon.type}</td>
                  <td className="px-6 py-3 text-sm text-gray-900">{coupon.discount}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{coupon.startDate}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{coupon.endDate}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{coupon.usageLimit}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{coupon.used}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-3 border-t flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Showing</span>
              <select className="px-2 py-1 border border-gray-300 rounded text-xs">
                <option>9</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>out of 360</span>
            </div>

            <div className="flex items-center gap-1">
              <button className="w-6 h-6 flex items-center justify-center rounded bg-orange-500 text-white text-xs">1</button>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">2</button>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">3</button>
              <span className="text-xs">...</span>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">5</button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Coupon Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add New Coupon</h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="e.g. Weekend Special"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                <input
                  type="text"
                  placeholder="e.g. SAVE20"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Percentage</option>
                  <option>Fixed Amount</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Active To</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Cheeseburger</option>
                  <option>All Items</option>
                  <option>Category</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Limit Number</label>
                <input
                  type="number"
                  placeholder="e.g. 100"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input
                    type="text"
                    placeholder="e.g. $5.00"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max% Disc</label>
                  <input
                    type="text"
                    placeholder="e.g. 20%"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}