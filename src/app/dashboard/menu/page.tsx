'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UploadMenuModal } from '@/components/UploadMenuModal';

export default function MenuPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const menuItems = Array(12).fill({
    name: 'Cheeseburger',
    price: '$3.00',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
  });

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu</h1>
          <p className="text-sm text-gray-600">Hello, Welcome Back</p>
        </div>
        
        <div className="flex items-center gap-4">
  {/* Notification bell */}
  <button className="relative p-2 hover:bg-gray-100 rounded-lg">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  </button>

  {/* Settings icon */}
  <button className="p-2 hover:bg-gray-100 rounded-lg">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>

  {/* AVATAR - ADD THIS */}
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
        <main className="flex-1 p-8 min-w-0">
          {/* Search and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Menu..."
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-sm font-medium">Upload Menu</span>
              </button>

              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Add Item</span>
              </button>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-40 mb-3 bg-orange-50 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-semibold">{item.price}</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>9</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm text-gray-600">out of 360</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                3
              </button>
              <span className="text-gray-600">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                40
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Upload Menu Modal */}
      <UploadMenuModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* Create Menu Item Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Menu Item</h2>
              <button
                onClick={() => setIsCreateModalOpen(false)}
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Category</option>
                  <option>Burger</option>
                  <option>Beef</option>
                  <option>Seafood</option>
                  <option>Beverage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meal Times</label>
                <input
                  type="text"
                  placeholder="e.g. Breakfast, Dinner etc"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of the item"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Stock</label>
                  <input
                    type="number"
                    placeholder="e.g. 50"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reorder Threshold</label>
                  <input
                    type="number"
                    placeholder="e.g. 5"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags/Promotions</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select/Add List</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
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