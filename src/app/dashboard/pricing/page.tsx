'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function PricingPage() {
  const [isAddPriceModalOpen, setIsAddPriceModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Pricing');

  const priceData = Array(9).fill({
    item: 'Chicken',
    category: 'Meat',
    mealTime: 'Lunch',
    lunch: '$3.00',
    promo: '$2.00',
    validDate: '31st June 2025',
  });

  return (
    <div className="bg-orange-50/30">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Price Management</h1>
          <p className="text-sm text-gray-600">Hello, Welcome Back</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>

          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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

      <div className="flex">
        {/* Sidebar Filter */}
        <aside className="w-64 bg-white border-r p-6 self-start">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-gray-900">Filter</h2>
            <button className="text-xs text-gray-400 hover:text-gray-600">...</button>
          </div>

          {/* Category Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Category</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Pasta</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Beef</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Seafood</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Burger</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Beverage</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Sweet</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Dessert</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Noodles</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Tea</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Chicken</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Others</span>
                </label>
              </div>
            </div>
          </div>

          {/* Meal Times Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Meal Times</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Snack</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Breakfast</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Dinner</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer col-span-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Lunch</span>
                </label>
              </div>
            </div>
          </div>

          {/* Price Range Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Price Range</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">$0 - $10</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">$20 - $30</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">$10 - $20</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">$30 up</span>
                </label>
              </div>
            </div>
          </div>

          {/* Promos Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Promos</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Buy get 1 free</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">20% OFF</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer col-span-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Buy get 1 free</span>
                </label>
              </div>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
            Submit
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 min-w-0">
          {/* Breadcrumb Tabs */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <button className="text-gray-500 hover:text-gray-700">Dashboard</button>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <button className="text-gray-500 hover:text-gray-700">Menu</button>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <button className="text-gray-900 font-medium">Pricing</button>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Search and Add Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Menu..."
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
              onClick={() => setIsAddPriceModalOpen(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              + Add New Price
            </button>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[120px]">Item</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[100px]">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[100px]">Meal Time</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[110px]">Current Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[100px]">Promo Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[110px]">Valid Until</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[80px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.category}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.mealTime}</td>
                    <td className="px-4 py-3 text-sm font-medium text-orange-500">{row.lunch}</td>
                    <td className="px-4 py-3 text-sm font-medium text-orange-500">{row.promo}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.validDate}</td>
                    <td className="px-4 py-3">
                      <button className="text-orange-500 hover:text-orange-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between min-w-[800px]">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Showing</span>
                <select className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-500">
                  <option>9</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>out of 360</span>
              </div>

              <div className="flex items-center gap-1">
                <button className="w-6 h-6 flex items-center justify-center rounded bg-orange-500 text-white text-xs font-medium">
                  1
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  2
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  3
                </button>
                <span className="text-gray-500 text-xs">...</span>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  5
                </button>
                <button className="p-1 hover:bg-gray-100 rounded text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Price Modal */}
      {isAddPriceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add Price</h2>
              <button
                onClick={() => setIsAddPriceModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Cheeseburger"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price</label>
                  <input
                    type="text"
                    placeholder="e.g. $3.00"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dinner Price</label>
                  <input
                    type="text"
                    placeholder="e.g. $5.00"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valid Date</label>
                <input
                  type="text"
                  placeholder="e.g. 1st June"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddPriceModalOpen(false)}
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