'use client';

import React from 'react';
import Image from 'next/image';
import DashboardHeader from '@/components/Dashboardheader';

export default function Dashboard() {
  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const stats = [
    {
      title: 'Total Orders',
      value: '96,000',
      change: '+26%',
      trend: 'up',
      iconPath: '/trending-up.png',
      bgColor: 'bg-white',
      trendColor: 'text-green-500'
    },
    {
      title: 'Total Customer',
      value: '2,800',
      change: '+26%',
      trend: 'down',
      iconPath: '/trending-down.png',
      bgColor: 'bg-white',
      trendColor: 'text-red-500'
    },
    {
      title: 'Total Revenue',
      value: '$280,000',
      change: '+26%',
      trend: 'up',
      iconPath: '/trending-up.png',
      bgColor: 'bg-white',
      trendColor: 'text-green-500'
    }
  ];

  const orders = [
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      menu: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Completed',
      statusColor: 'bg-orange-500'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      menu: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Processing',
      statusColor: 'bg-yellow-400'
    },
    {
      customer: 'Kenny Charles',
      orderId: '#85723',
      menu: 'Cheeseburger',
      payment: '$80,000',
      qty: 2,
      status: 'Cancelled',
      statusColor: 'bg-gray-800'
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Dashboard"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      {/* Search Bar - Dashboard specific feature */}
      <div className="bg-white border-b px-8 py-4">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search anything"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
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
      </div>

      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-2xl p-6 shadow-sm`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-sm mb-2">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <Image
                    src={stat.iconPath}
                    alt={`${stat.trend} trend`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              
              {/* Mini Chart */}
              <div className="relative h-16 mb-3">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path
                    d="M0,30 Q25,20 50,25 T100,30 T150,20 T200,25"
                    fill="none"
                    stroke={stat.trend === 'up' ? '#10b981' : '#ef4444'}
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <path
                    d="M0,30 Q25,20 50,25 T100,30 T150,20 T200,25 L200,60 L0,60 Z"
                    fill={stat.trend === 'up' ? '#10b981' : '#ef4444'}
                    opacity="0.1"
                  />
                </svg>
              </div>
              
              <p className={`text-sm font-medium ${stat.trendColor}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">$80,000</p>
              </div>
              <span className="text-gray-400 text-sm">Last Week</span>
            </div>
            
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 800 250">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="800" y2="50" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="200" x2="800" y2="200" stroke="#f3f4f6" strokeWidth="1" />
                
                {/* Area chart */}
                <path
                  d="M0,150 L100,120 L200,100 L300,80 L400,120 L500,90 L600,110 L700,100 L800,150"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="2"
                />
                <path
                  d="M0,150 L100,120 L200,100 L300,80 L400,120 L500,90 L600,110 L700,100 L800,150 L800,250 L0,250 Z"
                  fill="#fb923c"
                  opacity="0.2"
                />
                
                {/* Peak point marker */}
                <circle cx="300" cy="80" r="4" fill="#fb923c" />
                <text x="300" y="70" textAnchor="middle" fontSize="12" fill="#fb923c" fontWeight="600">$80,000</text>
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Top Categories Pie Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Categories</h3>
              <select className="text-sm border-none focus:ring-0 text-gray-600">
                <option>This week</option>
              </select>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  {/* Blue - 31.2% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="40"
                    strokeDasharray="157 343"
                    strokeDashoffset="0"
                  />
                  {/* Red - 22.2% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="40"
                    strokeDasharray="111 389"
                    strokeDashoffset="-157"
                  />
                  {/* Orange - 16.4% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="40"
                    strokeDasharray="82 418"
                    strokeDashoffset="-268"
                  />
                  {/* Green - 30.2% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="40"
                    strokeDasharray="150 350"
                    strokeDashoffset="-350"
                  />
                </svg>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Beverages</span>
                </div>
                <span className="text-sm font-medium">16.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Seafood</span>
                </div>
                <span className="text-sm font-medium">31.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Pasta</span>
                </div>
                <span className="text-sm font-medium">22.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Burger</span>
                </div>
                <span className="text-sm font-medium">30.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Report Table */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b">
            <h3 className="text-lg font-semibold text-gray-900">Order Report</h3>
            <div className="flex items-center gap-4">
              <select className="text-sm border-none focus:ring-0 text-gray-600">
                <option>This week</option>
              </select>
              <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                See all Orders
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Menu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      {order.menu}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-500">
                      {order.payment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-4 py-1 rounded-full text-xs font-medium text-white ${order.statusColor}`}>
                        {order.status}
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
  );
}