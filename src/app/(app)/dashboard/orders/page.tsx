'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const statusFilters = ['All', 'On Process', 'Picked', 'Delivered', 'Cancelled'];

  const orders = [
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Fresh Salmon',
      payment: '$80,000',
      qty: 2,
      status: 'Delivered',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Picked',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'On Process',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Delivered',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'On Process',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Delivered',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Picked',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Delivered',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      item: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-600'
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order</h1>
          <p className="text-sm text-gray-600">Hello, Welcome Back</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
            <Image
              src="/avatar.png"
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
        {/* Filter Pills and Search */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            {/* Status Filter Pills */}
            <div className="flex gap-2">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by order ID, Customer Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
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

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <span className="text-sm font-medium">All Category</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Payment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-500">
                      {order.payment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>9</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-600">out of 360</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                3
              </button>
              <span className="text-gray-600">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                5
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}