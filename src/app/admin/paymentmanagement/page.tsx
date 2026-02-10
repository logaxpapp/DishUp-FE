'use client';

import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdClose, MdFileDownload, MdContentCopy, MdPrint } from 'react-icons/md';
import Image from 'next/image';

interface Payment {
  id: string;
  recipient: string;
  amount: string;
  method: string;
  status: 'Paid' | 'Pending' | 'Failed';
  date: string;
  txnId: string;
}

export default function PaymentManagement() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const payments: Payment[] = [
    {
      id: '#23456',
      recipient: 'Mornz Grill',
      amount: '$800.000',
      method: 'PayPal',
      status: 'Paid',
      date: '8 July, 2025',
      txnId: 'TXN762930BFF'
    },
    {
      id: '#23456',
      recipient: 'Mornz Grill',
      amount: '$800.000',
      method: 'PayPal',
      status: 'Paid',
      date: '8 July, 2025',
      txnId: 'TXN762930BFF'
    },
    {
      id: '#23456',
      recipient: 'Francis Ben',
      amount: '$800.000',
      method: 'PayPal',
      status: 'Paid',
      date: '8 July, 2025',
      txnId: 'TXN762930BFF'
    },
    {
      id: '#23456',
      recipient: 'Mornz Grill',
      amount: '$800.000',
      method: 'PayPal',
      status: 'Paid',
      date: '8 July, 2025',
      txnId: 'TXN762930BFF'
    },
    {
      id: '#23456',
      recipient: 'Mornz Grill',
      amount: '$800.000',
      method: 'PayPal',
      status: 'Paid',
      date: '8 July, 2025',
      txnId: 'TXN762930BFF'
    },
  ];

  const handleViewDetails = (payment: Payment) => {
    setSelectedPayment(payment);
    setShowDetailModal(true);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPayments([]);
    } else {
      setSelectedPayments(payments.map(p => p.id + p.recipient));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectPayment = (paymentKey: string) => {
    if (selectedPayments.includes(paymentKey)) {
      setSelectedPayments(selectedPayments.filter(key => key !== paymentKey));
    } else {
      setSelectedPayments([...selectedPayments, paymentKey]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Management</h1>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: '$50,000', color: 'bg-orange-500', trend: '+12%' },
          { label: 'Received Payments', value: '$20,000', color: 'bg-green-500', trend: '+8%' },
          { label: 'Refunds', value: '29', color: 'bg-yellow-500', trend: '-3%' },
          { label: 'Pending', value: '$1,000', color: 'bg-blue-500', trend: '+5%' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white text-xl font-bold`}>
                {stat.value.charAt(0)}
              </div>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                {stat.trend}
              </span>
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

      {/* Payments Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header with Search and Filter */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
              Payments
            </h2>
            {selectedPayments.length > 0 && (
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium" style={{ fontFamily: 'Urbanist' }}>
                {selectedPayments.length} selected
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {selectedPayments.length > 0 && (
              <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium">
                <MdFileDownload className="text-xl" />
                <span style={{ fontFamily: 'Urbanist' }}>Export Selected</span>
              </button>
            )}
            <div className="relative">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
              <input
                type="text"
                placeholder="Search by order ID, Customer Name"
                className="pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 w-80"
                style={{ fontFamily: 'Urbanist' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Date
              </button>
              <button className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Status
              </button>
              <button className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                Method
              </button>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium" style={{ fontFamily: 'Urbanist' }}>
                Export
              </button>
            </div>
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
                  TXN ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Recipient
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Method
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => {
                const paymentKey = payment.id + payment.recipient + index;
                return (
                  <tr key={paymentKey} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedPayments.includes(paymentKey)}
                        onChange={() => handleSelectPayment(paymentKey)}
                        className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                        {payment.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                      {payment.recipient}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold" style={{ fontFamily: 'Urbanist' }}>
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                      {payment.method}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-700' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`} style={{ fontFamily: 'Urbanist' }}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: 'Urbanist' }}>
                      {payment.date}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewDetails(payment)}
                        className="text-orange-500 hover:text-orange-700 font-medium text-sm transition-colors"
                        style={{ fontFamily: 'Urbanist' }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Showing</span>
            <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-700" style={{ fontFamily: 'Urbanist' }}>
              <option>9</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="text-sm text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>out of 360</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]">
              ‹
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]">
              -
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-[#8E98A8]">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Payment Details Modal */}
      {showDetailModal && selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Urbanist' }}>
                Payment Details
              </h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-white/90 hover:text-white transition-colors"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            {/* Date Badge */}
            <div className="px-6 pb-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Urbanist' }}>
                  July 13, 2025 - 1:30pm
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Modal Body - White Card */}
            <div className="bg-white rounded-t-3xl p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <p className="text-sm text-[#8E98A8] mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Customer Info
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-medium text-lg" style={{ fontFamily: 'Urbanist' }}>
                      Jr. Mornz Grill
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm" style={{ fontFamily: 'Urbanist' }}>📞 +6792743829</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <p className="text-sm text-[#8E98A8] mb-3" style={{ fontFamily: 'Urbanist' }}>
                  Order Summary
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Payment ID</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      JWH-230920233
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Date</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      August 2, 2025
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Payment Time</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Paid
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Amount Paid</span>
                    <span className="text-gray-900 font-bold text-lg" style={{ fontFamily: 'Urbanist' }}>
                      $3.00
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Payout Method</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Bank Transfer
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#8E98A8] text-sm" style={{ fontFamily: 'Urbanist' }}>Reference Code</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      TXN762930BFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Recipient Info */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Urbanist' }}>
                  Recipient
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Name:</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Mornz Grill
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Phone No.</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      +98374637382
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Bank Name:</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Zenith Bank
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Account Number:</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      1234567890
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>Account Name:</span>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Mornz Grill Services
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                  <MdFileDownload className="text-xl" />
                  <span style={{ fontFamily: 'Urbanist' }}>Export</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                  <MdContentCopy className="text-xl" />
                  <span style={{ fontFamily: 'Urbanist' }}>Duplicate</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                  <MdPrint className="text-xl" />
                  <span style={{ fontFamily: 'Urbanist' }}>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}