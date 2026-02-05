'use client';

import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

interface BreachRecord {
  orderId: string;
  vendor: string;
  rider: string;
  breached: string;
  slaTarget: string;
  actualTime: string;
  reason: string;
  date: string;
}

export default function SLAAnalytics() {
  const [selectedWeek, setSelectedWeek] = useState('This week');

  const breachData: BreachRecord[] = [
    {
      orderId: '#45256',
      vendor: 'Mama Grill',
      rider: 'Charles Duke',
      breached: 'Pickup',
      slaTarget: '5 mins.',
      actualTime: '12',
      reason: 'Rider delay',
      date: '12 Aug, 2025'
    },
    {
      orderId: '#45256',
      vendor: 'Mama Grill',
      rider: 'Charles Duke',
      breached: 'Pickup',
      slaTarget: '5 mins.',
      actualTime: '12',
      reason: 'Rider delay',
      date: '12 Aug, 2025'
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
              SLA Analytics
            </h1>
            <p className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
              Track service-level performance across all delivery stages for vendors and riders.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 hover:bg-white rounded-xl transition-colors">
              <MdNotifications className="text-xl text-[#8E98A8]" />
            </button>
            <button className="p-3 hover:bg-white rounded-xl transition-colors">
              <svg className="w-5 h-5 text-[#8E98A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-500 font-semibold text-sm">JA</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Urbanist' }}>Joy</p>
                <p className="text-xs text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Admin</p>
              </div>
              <span className="text-gray-400">›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Average Prep time', value: '15 Mins.', target: '< 15 min SLA', status: 'success', color: 'bg-green-500' },
          { label: 'Pickup Time', value: '9 mins.', target: '< 10 min SLA', status: 'warning', color: 'bg-orange-500' },
          { label: 'Travel Time', value: '22 mins', target: '< 25 min SLA', status: 'success', color: 'bg-green-500' },
          { label: 'Drop-off Time', value: '5 mins', target: '< 7 mins SLA', status: 'success', color: 'bg-green-500' }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-[#8E98A8] mb-3" style={{ fontFamily: 'Urbanist' }}>
              {metric.label}
            </p>
            <p className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
              {metric.value}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Target: {metric.target}
              </span>
              <div className={`w-6 h-6 ${metric.color} rounded-full flex items-center justify-center`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* SLA Overview Chart */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
              SLA Overview
            </h3>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" style={{ fontFamily: 'Urbanist' }}>
                📅 {selectedWeek}
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-64">
         
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
              <span>$100K</span>
              <span>$75K</span>
              <span>$50K</span>
              <span>$25K</span>
              <span>$0k</span>
            </div>

            {/* Chart area */}
            <div className="ml-12 h-full relative">
              <svg viewBox="0 0 700 250" className="w-full h-full">
                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FFA857" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFA857" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
             
                <path
                  d="M 0 150 Q 100 120, 200 100 T 400 110 T 600 80 L 600 250 L 0 250 Z"
                  fill="url(#areaGradient)"
                />
                
            
                <path
                  d="M 0 150 Q 100 120, 200 100 T 400 110 T 600 80"
                  fill="none"
                  stroke="#FFA857"
                  strokeWidth="3"
                />
                
                {/* Peak point */}
                <circle cx="350" cy="95" r="4" fill="#FFA857" />
                <text x="350" y="85" textAnchor="middle" className="text-xs" fill="#8E98A8" fontFamily="Urbanist">
                  $52K
                </text>
              </svg>

              
              <div className="flex justify-between mt-2 text-xs text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </div>
        </div>

        {/* SLA Percentage */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: 'Urbanist' }}>
            SLA percentage
          </h3>
          
          <div className="space-y-6">
            {[
              { label: 'Prep time', percentage: 92, color: 'bg-green-500' },
              { label: 'Pickup time', percentage: 75, color: 'bg-orange-500' },
              { label: 'Travel time', percentage: 97, color: 'bg-green-500' },
              { label: 'Drop-off time', percentage: 98, color: 'bg-green-500' }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLA Breach Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
            SLA Breach Table
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Vendor
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Rider
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Breached
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  SLA Target
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Actual time
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Reason
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {breachData.map((record, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                    {record.orderId}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.vendor}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.rider}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.breached}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.slaTarget}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.actualTime}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {record.reason}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: 'Urbanist' }}>
                    {record.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}