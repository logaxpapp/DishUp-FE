'use client';

import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdVisibility, MdClose } from 'react-icons/md';
import Image from 'next/image';

interface Dispute {
  id: string;
  orderId: string;
  customer: string;
  courier: string;
  reportedBy: string;
  action: string;
  date: string;
  status: 'Pending' | 'Resolved' | 'In Review';
}

export default function DisputeResolution() {
  const [showSuspensionModal, setShowSuspensionModal] = useState(false);
  const [suspensionData, setSuspensionData] = useState({
    name: '',
    role: '',
    suspensionReason: '',
    suspensionDuration: '',
    resolution: ''
  });

  const disputes: Dispute[] = [
    {
      id: '2345-00',
      orderId: 'ORD-87321',
      customer: 'John Akereny',
      courier: 'Ester Value Godwin',
      reportedBy: 'Vendor',
      action: 'Under Desk',
      date: '8 Aug, 2025',
      status: 'Pending'
    },
    {
      id: '2345-00',
      orderId: 'ORD-87321',
      customer: 'John Akereny',
      courier: 'Ester Value Godwin',
      reportedBy: 'Rider',
      action: 'Under Desk',
      date: '8 Aug, 2025',
      status: 'In Review'
    },
    {
      id: '2345-00',
      orderId: 'ORD-87321',
      customer: 'John Akereny',
      courier: 'Ester Value Godwin',
      reportedBy: 'Vendor',
      action: 'Under Desk',
      date: '8 Aug, 2025',
      status: 'Resolved'
    },
    {
      id: '2345-00',
      orderId: 'ORD-87321',
      customer: 'John Akereny',
      courier: 'Ester Value Godwin',
      reportedBy: 'Customer',
      action: 'Value Godwin',
      date: '8 Aug, 2025',
      status: 'Resolved'
    },
    {
      id: '2345-00',
      orderId: 'ORD-87321',
      customer: 'John Akereny',
      courier: 'Ester Value Godwin',
      reportedBy: 'Rider',
      action: 'Under Desk',
      date: '8 Aug, 2025',
      status: 'Pending'
    },
  ];

  const handleSuspendUser = () => {
    setShowSuspensionModal(true);
  };

  const handleSubmitSuspension = () => {
    // Handle suspension logic
    setShowSuspensionModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
   <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dispute Resolution</h1>
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

      {/* Disputes Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
            Disputes
          </h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="pl-12 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 w-64"
                style={{ fontFamily: 'Urbanist' }}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
              <MdFilterList className="text-xl text-[#8E98A8]" />
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
                    className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Dispute ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Reported by
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Action
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Date
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
              {disputes.map((dispute, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.id}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.orderId}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.customer}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.reportedBy}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.action}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {dispute.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      dispute.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                      dispute.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`} style={{ fontFamily: 'Urbanist' }}>
                      {dispute.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={handleSuspendUser}
                      className="text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm"
                      style={{ fontFamily: 'Urbanist' }}
                    >
                      View
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
            Showing <span className="font-semibold text-gray-900">1-10</span> out of <span className="font-semibold text-gray-900">360</span>
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
              ←
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
            <span className="px-2">...</span>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
              →
            </button>
          </div>
        </div>
      </div>

      {/* User Suspension Modal */}
      {showSuspensionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                User Suspension
              </h3>
              <button
                onClick={() => setShowSuspensionModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={suspensionData.name}
                  onChange={(e) => setSuspensionData({...suspensionData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Role
                </label>
                <select
                  value={suspensionData.role}
                  onChange={(e) => setSuspensionData({...suspensionData, role: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select Role</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Courier">Courier</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>

              {/* Suspension Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Suspension reason
                </label>
                <select
                  value={suspensionData.suspensionReason}
                  onChange={(e) => setSuspensionData({...suspensionData, suspensionReason: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select Reason</option>
                  <option value="Policy Violation">Policy Violation</option>
                  <option value="Customer Complaint">Customer Complaint</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Suspension Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Suspension Duration
                </label>
                <select
                  value={suspensionData.suspensionDuration}
                  onChange={(e) => setSuspensionData({...suspensionData, suspensionDuration: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select Duration</option>
                  <option value="7 days">7 days</option>
                  <option value="14 days">14 days</option>
                  <option value="30 days">30 days</option>
                  <option value="Permanent">Permanent</option>
                </select>
              </div>

              {/* Resolution */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Resolution
                </label>
                <textarea
                  placeholder="Enter resolution details"
                  value={suspensionData.resolution}
                  onChange={(e) => setSuspensionData({...suspensionData, resolution: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 resize-none"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex items-center gap-4">
              <button
                onClick={() => setShowSuspensionModal(false)}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontFamily: 'Urbanist' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitSuspension}
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
                style={{ fontFamily: 'Urbanist' }}
              >
                Suspend
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}