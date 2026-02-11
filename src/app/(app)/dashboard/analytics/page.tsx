'use client';

import React from 'react';
import Image from 'next/image';
import DashboardHeader from '@/components/Dashboardheader';

export default function AnalyticsPage() {
  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    // Add your notification logic here
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // Add your settings logic here
  };

  const recentOrders = [
    { id: 1, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
    { id: 2, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
    { id: 3, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
    { id: 4, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
    { id: 5, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
    { id: 6, restaurant: "Mama Devi's Grill", customer: 'Collins', food: 'Burger' },
  ];

  const mostOrdered = Array(6).fill({
    name: 'Cheeseburger',
    orders: '101 Like it',
    rating: 5,
    reviews: '9,000 recent'
  });

  const feedbacks = Array(5).fill({
    name: 'Kenny',
    rating: 4.5,
    comment: 'Hot service, Prompt fulfilment, Great value'
  });

  const customerLikes = [
    { label: 'Pricing', rating: '4.5 - 5.5' },
    { label: 'Food Quality', rating: '4.5 - 5.5' },
    { label: 'Delivery Speed', rating: '4.5 - 5.5' },
    { label: 'Packaging', rating: '4.5 - 5.5' },
  ];

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Analytics Report"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

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

          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600">
            + Create New List
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Average Order Value</span>
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$5.00</h3>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Total Orders</span>
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">5,200</h3>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Unique Customers</span>
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$5.00</h3>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Total Revenue</span>
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$280,000</h3>
          </div>
        </div>

        {/* Charts and Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales and Orders Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Sales and Orders</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Sales</span>
                <span className="text-sm font-semibold">11,800</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Orders</span>
                <span className="text-sm font-semibold">11,800</span>
              </div>
            </div>

            <div className="relative h-48">
              <svg className="w-full h-full" viewBox="0 0 400 180">
                <path d="M0,150 L50,120 L100,130 L150,100 L200,110 L250,90 L300,100 L350,80 L400,90" 
                      fill="none" stroke="#3b82f6" strokeWidth="2" />
                <path d="M0,160 L50,135 L100,145 L150,125 L200,130 L250,115 L300,120 L350,105 L400,110" 
                      fill="none" stroke="#9ca3af" strokeWidth="2" />
              </svg>
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

          {/* Prep Time SLA */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Prep Time SLA</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#f3f4f6" strokeWidth="20" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#fb923c" strokeWidth="20" 
                          strokeDasharray="502" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">95%</span>
                  <span className="text-xs text-gray-500">SLA RATE</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Prep. Time</span>
                <span className="font-medium">15min 20 sec</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">95%</span>
                <span className="font-medium">Exc. Orders</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">5%</span>
                <span className="font-medium">Lowest Prep Time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">2.5 min, 20 sec</span>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Customer Reviews</span>
                <span className="text-2xl font-bold">4.50</span>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-sm font-medium mb-3">What Customers Like</h4>
              <div className="space-y-2">
                {customerLikes.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-green-500' : i === 2 ? 'bg-blue-300' : 'bg-purple-300'}`}></div>
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-medium">{item.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <button className="text-xs text-orange-500 hover:text-orange-600">See all</button>
            </div>
            
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="text-left py-2">Restaurant Name</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Food Item</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2 text-gray-600">{order.id}. {order.restaurant}</td>
                    <td className="py-2 text-gray-600">{order.customer}</td>
                    <td className="py-2 text-gray-600">{order.food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Most Ordered Item */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Most Ordered Item</h3>
              <button className="text-xs text-orange-500 hover:text-orange-600">See all</button>
            </div>
            
            <div className="space-y-3">
              {mostOrdered.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
                      alt="Burger"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-gray-500">{item.orders}</span>
                      <span className="text-xs text-gray-400">★★★★★ {item.reviews}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedbacks */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Feedbacks (255)</h3>
              <button className="text-xs text-orange-500 hover:text-orange-600">See all</button>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {feedbacks.map((feedback, i) => (
                <div key={i} className="pb-3 border-b last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-200 flex-shrink-0 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                        alt="User"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900">{feedback.name}</h4>
                        <span className="text-xs text-gray-500">★ {feedback.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">{feedback.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}