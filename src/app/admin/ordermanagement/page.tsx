'use client';

import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdClose, MdCheckCircle } from 'react-icons/md';
import Image from 'next/image';

interface Order {
  id: string;
  customer: string;
  items: string;
  vendor: string;
  deliveryTime: string;
  pickupTime: string;
  amount: string;
  status: 'Completed' | 'Cancelled' | 'Pending' | 'Processing';
}

export default function OrderManagement() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const orders: Order[] = [
    {
      id: '#JK745',
      customer: 'Francis Ben',
      items: 'Mornz Rice',
      vendor: 'Chopstix',
      deliveryTime: '2:56 PM Thu, 21 Aug 24',
      pickupTime: '2:30 PM Thu, 21 Aug 24',
      amount: '$2.00',
      status: 'Completed'
    },
    {
      id: '#JK746',
      customer: 'John Doe',
      items: 'Pizza Box',
      vendor: 'Italian Bistro',
      deliveryTime: '3:15 PM Thu, 21 Aug 24',
      pickupTime: '2:45 PM Thu, 21 Aug 24',
      amount: '$15.00',
      status: 'Processing'
    },
    {
      id: '#JK747',
      customer: 'Sarah Smith',
      items: 'Burger Combo',
      vendor: 'Fast Food',
      deliveryTime: '4:00 PM Thu, 21 Aug 24',
      pickupTime: '3:30 PM Thu, 21 Aug 24',
      amount: '$8.50',
      status: 'Pending'
    },
  ];

  const handleCancelOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowCancelModal(true);
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setShowDetailModal(true);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map(o => o.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectOrder = (orderId: string) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const confirmCancel = () => {
    setShowCancelModal(false);
    setShowSuccessModal(true);
    setCancelReason('');
  };

  const cancelReasons = [
    'Customer asked to cancel',
    'Vendor unavailable',
    'Start out of stock',
    'Payment issue',
    'Customer not responding',
    'Wrong address',
    'Other reason'
  ];

  return (
    <div className="min-h-screen bg-[#FEF8F4]">
      {/* HEADER WITH AVATAR */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
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

          {/* AVATAR */}
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

      {/* MAIN CONTENT */}
      <div className="p-8">
        {/* Page Title - You can keep this or remove it */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
            Order Management
          </h1>
          <p className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
            Track and manage all incoming orders and deliveries
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Orders', value: '820,000', color: 'bg-orange-500' },
            { label: 'Pending', value: '240', color: 'bg-yellow-500' },
            { label: 'Processing', value: '150', color: 'bg-blue-500' },
            { label: 'Completed', value: '820,000', color: 'bg-green-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className={`w-12 h-12 ${stat.color} rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold`}>
                {stat.value.charAt(0)}
              </div>
              <p className="text-sm text-[#8E98A8] mb-1" style={{ fontFamily: 'Urbanist' }}>
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Table Header with Search and Filter */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                Orders
              </h2>
              {selectedOrders.length > 0 && (
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium" style={{ fontFamily: 'Urbanist' }}>
                  {selectedOrders.length} selected
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              {selectedOrders.length > 0 && (
                <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium">
                  <span style={{ fontFamily: 'Urbanist' }}>Cancel Selected</span>
                </button>
              )}
              <div className="relative">
                <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 w-80"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                <MdFilterList className="text-xl text-[#8E98A8]" />
                <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Filter</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Items
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Vendor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Delivery Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Pickup Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewDetails(order)}
                        className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
                        style={{ fontFamily: 'Urbanist' }}
                      >
                        {order.id}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                      {order.items}
                    </td>
                    <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                      {order.vendor}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: 'Urbanist' }}>
                      {order.deliveryTime}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: 'Urbanist' }}>
                      {order.pickupTime}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold" style={{ fontFamily: 'Urbanist' }}>
                      {order.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`} style={{ fontFamily: 'Urbanist' }}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleCancelOrder(order)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
                        style={{ fontFamily: 'Urbanist' }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 flex items-center justify-between border-t border-gray-100">
            <p className="text-sm text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
              Showing 1-10 of 100 orders
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Previous
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg" style={{ fontFamily: 'Urbanist' }}>
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                2
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                3
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Cancel Order Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                  Please tell us why you want to cancel this order
                </h3>
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="space-y-3">
                  {cancelReasons.map((reason, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-500 cursor-pointer transition-all"
                    >
                      <input
                        type="radio"
                        name="cancelReason"
                        value={reason}
                        checked={cancelReason === reason}
                        onChange={(e) => setCancelReason(e.target.value)}
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                        {reason}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 flex items-center gap-4">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  Back
                </button>
                <button
                  onClick={confirmCancel}
                  disabled={!cancelReason}
                  className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  Cancel order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Details Modal */}
        {showDetailModal && selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                  Order {selectedOrder.id}
                </h3>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Order Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                    Status
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedOrder.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    selectedOrder.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    selectedOrder.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`} style={{ fontFamily: 'Urbanist' }}>
                    {selectedOrder.status}
                  </span>
                </div>

                {/* Order Details */}
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Customer</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.customer}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Items</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.items}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Vendor</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.vendor}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Pickup Time</span>
                    <span className="text-gray-900 font-medium text-sm" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.pickupTime}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Delivery Time</span>
                    <span className="text-gray-900 font-medium text-sm" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.deliveryTime}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Total Amount</span>
                    <span className="text-orange-500 font-bold text-xl" style={{ fontFamily: 'Urbanist' }}>
                      {selectedOrder.amount}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Urbanist' }}>
                    Contact
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 font-bold">📞</span>
                    </div>
                    <span className="text-gray-900" style={{ fontFamily: 'Urbanist' }}>+2347876544567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 font-bold">📧</span>
                    </div>
                    <span className="text-gray-900" style={{ fontFamily: 'Urbanist' }}>customer@email.com</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 flex items-center gap-4">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    handleCancelOrder(selectedOrder);
                  }}
                  className="flex-1 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdCheckCircle className="text-5xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Urbanist' }}>
                Order Cancelled Successfully
              </h3>
              <p className="text-[#8E98A8] mb-8" style={{ fontFamily: 'Urbanist' }}>
                The order has been cancelled. Both the customer and the vendor have been notified.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
                style={{ fontFamily: 'Urbanist' }}
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}