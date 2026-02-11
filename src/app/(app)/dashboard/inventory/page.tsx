'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DashboardHeader from '@/components/Dashboardheader';

export default function InventoryPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    // Add your notification logic here
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // Add your settings logic here
  };

  const inventoryData = [
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: 'In Stock',
      statusColor: 'text-green-600'
    },
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: '12%',
      statusColor: 'text-gray-600'
    },
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: 'In Stock',
      statusColor: 'text-green-600'
    },
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: 'In Stock',
      statusColor: 'text-green-600'
    },
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: 'Low Stock',
      statusColor: 'text-yellow-600'
    },
    {
      item: 'Chicken',
      sku: 'CHK - MRT - 1',
      category: 'Meat',
      stock: '0 kg',
      threshold: '0',
      unit: '1',
      supplier: 'Fresh Foods',
      status: 'In Stock',
      statusColor: 'text-green-600'
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Inventory"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      <div className="p-8">
        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Supply Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Supply Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">In Stock</span>
                  <span className="text-sm font-medium text-gray-900">8,843</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Re-Stock</span>
                  <span className="text-sm font-medium text-gray-900">2k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Low Stock</span>
                  <span className="text-sm font-medium text-gray-900">3k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Level Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Last 6 Months</h3>
            <div className="relative h-40">
              <svg className="w-full h-full" viewBox="0 0 300 150">
                {/* Grid lines */}
                <line x1="0" y1="30" x2="300" y2="30" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="120" x2="300" y2="120" stroke="#f3f4f6" strokeWidth="1" />
                
                {/* Lines */}
                <path d="M0,80 L50,60 L100,70 L150,50 L200,65 L250,55 L300,60" 
                      fill="none" stroke="#10b981" strokeWidth="2" />
                <path d="M0,100 L50,90 L100,95 L150,85 L200,90 L250,80 L300,85" 
                      fill="none" stroke="#f97316" strokeWidth="2" />
                <path d="M0,110 L50,105 L100,108 L150,100 L200,105 L250,95 L300,100" 
                      fill="none" stroke="#ef4444" strokeWidth="2" />
              </svg>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">In Stock</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-600">Re-Stock</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-600">Low Stock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-green-500 rounded"></div>
                    <span className="text-sm text-gray-600">In Stock</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">185</span>
                  <span className="text-xs text-gray-500">Products</span>
                </div>
                <div className="flex items-end h-16 gap-1">
                  {[30, 45, 35, 50, 40, 55, 45, 60, 50, 65].map((height, i) => (
                    <div key={i} className="w-1 bg-green-500 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-orange-500 rounded"></div>
                    <span className="text-sm text-gray-600">Re-Stock</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">48</span>
                  <span className="text-xs text-gray-500">Products</span>
                </div>
                <div className="flex items-end h-16 gap-1">
                  {[40, 35, 45, 40, 50, 45, 55, 50, 60, 55].map((height, i) => (
                    <div key={i} className="w-1 bg-orange-500 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-600">Low Stock</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">16</span>
                  <span className="text-xs text-gray-500">Products</span>
                </div>
                <div className="flex items-end h-16 gap-1">
                  {[35, 30, 40, 35, 45, 40, 50, 45, 55, 50].map((height, i) => (
                    <div key={i} className="w-1 bg-red-500 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Item..."
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
              + Add Item
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">SKU/barcode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">In Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Reorder level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Unit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-900">{row.item}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.sku}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.category}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.stock}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.threshold}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.unit}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{row.supplier}</td>
                  <td className={`px-6 py-3 text-sm font-medium ${row.statusColor}`}>{row.status}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-orange-500 hover:text-orange-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
          <div className="px-6 py-4 border-t flex items-center justify-between">
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
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add and Edit Inventory Item</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Chicken Breast"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SKU/Barcode</label>
                <input
                  type="text"
                  placeholder="e.g. CHK-BRS-00123"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Category</option>
                  <option>Meat</option>
                  <option>Vegetables</option>
                  <option>Dairy</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit of Measure</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>kg</option>
                    <option>lbs</option>
                    <option>units</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Stock</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reorder Level</label>
                <input
                  type="number"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level (Low Depot)</label>
                <input
                  type="number"
                  placeholder="e.g. 5"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Supplier</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Supplier</option>
                  <option>Fresh Foods</option>
                  <option>Quality Meats</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Add any notes..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
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