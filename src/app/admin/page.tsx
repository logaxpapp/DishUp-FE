'use client';

import React from 'react';
import Image from 'next/image';
export default function Admin() {
  const stats = [
    {
      title: 'Total Orders',
      value: '24,385',
      bgColor: 'bg-purple-50',
      textColor: 'text-gray-700'
    },
    {
      title: 'Total Vendors',
      value: '1,500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    },
    {
      title: 'Customers',
      value: '28,000',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    },
    {
      title: 'Total Revenue',
      value: '96,000',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    }
  ];

  const revenueData = [
    { day: 'Mon', value: 40 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 60 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 55 },
    { day: 'Sat', value: 70 },
    { day: 'Sun', value: 45 }
  ];

  const vendors = [
    { name: 'Yummy Bites', percentage: 40, color: 'bg-orange-400' },
    { name: 'French Fries', percentage: 30, color: 'bg-blue-400' },
    { name: 'Chicken', percentage: 20, color: 'bg-cyan-400' }
  ];

  const recentOrders = [
    { id: '#45236', customer: 'Vincent', products: 'Pizza', vendor: 'Yummy Bites', total: '$6.00', status: 'Completed' },
    { id: '#45236', customer: 'Vincent', products: 'Fries', vendor: 'Yummy Bites', total: '$8.00', status: 'Completed' },
    { id: '#45236', customer: 'Vincent', products: 'Pizza', vendor: 'Yummy Bites', total: '$6.00', status: 'Completed' },
    { id: '#45236', customer: 'Vincent', products: 'Fries', vendor: 'Yummy Bites', total: '$8.00', status: 'Cancelled' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-50 px-8 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome to the Admin Console</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything"
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          
          <button className="relative p-2.5 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          
          <button className="p-2.5 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-400 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
  <Image
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    alt="User"
    width={40}
    height={40}
    className="w-full h-full object-cover"
  />
</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Joy</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 shadow-sm border border-gray-100`}
            >
              <p className="text-sm text-gray-500 mb-2">
                {stat.title}
              </p>
              <h3 className={`text-4xl font-bold ${stat.textColor} mb-4`}>
                {stat.value}
              </h3>
              {/* Trend Line */}
              <div className="h-12">
                <svg className="w-full h-full" viewBox="0 0 120 40" preserveAspectRatio="none">
                  <path
                    d="M0,30 Q10,25 20,28 T40,25 T60,22 T80,26 T100,20 L120,18"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Total Revenue Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Total Revenue</h3>
              </div>
              <button className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1">
                Last Week
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-400">40k</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">$80,000</div>
            </div>

            <div className="h-64 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <span>40k</span>
                <span>30k</span>
                <span>20k</span>
                <span>10k</span>
                <span>5k</span>
                <span>0</span>
              </div>
              
              {/* Chart */}
              <div className="h-full ml-8 flex items-end justify-between gap-3">
                {revenueData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 relative">
                    {index === 3 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                        $80,000
                      </div>
                    )}
                    <div className="w-full flex flex-col gap-1">
                      <div
                        className="w-full bg-teal-400 rounded-t"
                        style={{ height: `${item.value * 2.4}px` }}
                      ></div>
                      <div
                        className={`w-full rounded-t ${index === 3 ? 'bg-teal-500' : 'bg-teal-300'}`}
                        style={{ height: `${item.value * 1.2}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLA Performance Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 text-sm">SLA Performance Summary</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* Outer rings */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="6"
                      strokeDasharray="125 251"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="32"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="6"
                      strokeDasharray="100 201"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="24"
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth="6"
                      strokeDasharray="75 151"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Prep Time</span>
                    <span className="text-sm font-medium text-gray-900">92% on time</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Pick-up Time</span>
                    <span className="text-sm font-medium text-gray-900">87% on time</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Drop-off time</span>
                    <span className="text-sm font-medium text-gray-900">87% on time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Vendors */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900 text-sm">Top Vendors</h3>
              <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                This Week
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900">$ 12,800</div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Yummy Bite</span>
                  <span className="text-sm font-medium text-gray-900">89%</span>
                </div>
                <div className="space-y-0.5">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-1.5 bg-orange-500 rounded"></div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Pizza Hub</span>
                  <span className="text-sm font-medium text-gray-900">18%</span>
                </div>
                <div className="space-y-0.5">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`h-1.5 rounded ${i < 2 ? 'bg-orange-300' : 'bg-gray-100'}`}></div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Mama Dee</span>
                  <span className="text-sm font-medium text-gray-900">56%</span>
                </div>
                <div className="space-y-0.5">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`h-1.5 rounded ${i < 5 ? 'bg-blue-400' : 'bg-gray-100'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b">
            <h3 className="font-semibold">Recent Orders</h3>
            <button className="text-sm text-orange-500 hover:text-orange-600">
              See all
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Products
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Vendor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.products}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.vendor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button className="hover:text-gray-900">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}