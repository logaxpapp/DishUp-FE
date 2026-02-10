'use client';

import React, { useState } from 'react';
import { MdSearch, MdNotifications, MdCheckCircle } from 'react-icons/md';

export default function GlobalSettings() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    basePricing: '',
    cancelReason: '',
    pricePerMile: '',
    serviceCharge: '',
    deliveryTime: '',
    defaultCurrency: '',
    weightMultiplier: '',
    defaultRegion: '',
    sizeMultiplier: '',
    maxDeliveryDistance: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setShowSuccessModal(true);
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      basePricing: '',
      cancelReason: '',
      pricePerMile: '',
      serviceCharge: '',
      deliveryTime: '',
      defaultCurrency: '',
      weightMultiplier: '',
      defaultRegion: '',
      sizeMultiplier: '',
      maxDeliveryDistance: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
          Global Setting
        </h1>
        <p className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
          Configure global settings for this application.
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
            Global Settings
          </h2>
          <div className="relative">
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
            <input
              type="text"
              placeholder="Search by order ID, Customer Name"
              className="pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 w-80"
              style={{ fontFamily: 'Urbanist' }}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <MdNotifications className="text-xl text-[#8E98A8]" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-500 font-semibold text-sm">U</span>
              </div>
              <span className="text-gray-700 font-medium text-sm" style={{ fontFamily: 'Urbanist' }}>
                ›
              </span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Base Pricing */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Base Pricing
                </label>
                <input
                  type="text"
                  placeholder="Enter base price"
                  value={formData.basePricing}
                  onChange={(e) => handleInputChange('basePricing', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Price per Mile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Price per Mile
                </label>
                <input
                  type="text"
                  placeholder="Enter price per mile"
                  value={formData.pricePerMile}
                  onChange={(e) => handleInputChange('pricePerMile', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Delivery Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Delivery Time
                </label>
                <select
                  value={formData.deliveryTime}
                  onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select delivery time</option>
                  <option value="30min">30 minutes</option>
                  <option value="1hour">1 hour</option>
                  <option value="2hours">2 hours</option>
                  <option value="same-day">Same day</option>
                </select>
              </div>

              {/* Weight Multiplier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Weight Multiplier
                </label>
                <select
                  value={formData.weightMultiplier}
                  onChange={(e) => handleInputChange('weightMultiplier', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select weight multiplier</option>
                  <option value="1x">1x</option>
                  <option value="1.5x">1.5x</option>
                  <option value="2x">2x</option>
                  <option value="2.5x">2.5x</option>
                </select>
              </div>

              {/* Size Multiplier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Size Multiplier
                </label>
                <select
                  value={formData.sizeMultiplier}
                  onChange={(e) => handleInputChange('sizeMultiplier', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select size multiplier</option>
                  <option value="small">Small (1x)</option>
                  <option value="medium">Medium (1.5x)</option>
                  <option value="large">Large (2x)</option>
                  <option value="xlarge">X-Large (2.5x)</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Cancel Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Cancel Reason
                </label>
                <select
                  value={formData.cancelReason}
                  onChange={(e) => handleInputChange('cancelReason', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select cancel reason</option>
                  <option value="customer">Customer Request</option>
                  <option value="vendor">Vendor Unavailable</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Service Charge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Service Charge
                </label>
                <select
                  value={formData.serviceCharge}
                  onChange={(e) => handleInputChange('serviceCharge', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select service charge</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                </select>
              </div>

              {/* Default Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Default Currency
                </label>
                <select
                  value={formData.defaultCurrency}
                  onChange={(e) => handleInputChange('defaultCurrency', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select currency</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="NGN">NGN - Nigerian Naira</option>
                </select>
              </div>

              {/* Default Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Default Region
                </label>
                <select
                  value={formData.defaultRegion}
                  onChange={(e) => handleInputChange('defaultRegion', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select region</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                </select>
              </div>

              {/* Max Delivery Distance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Max Delivery Distance
                </label>
                <select
                  value={formData.maxDeliveryDistance}
                  onChange={(e) => handleInputChange('maxDeliveryDistance', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select max distance</option>
                  <option value="5">5 miles</option>
                  <option value="10">10 miles</option>
                  <option value="20">20 miles</option>
                  <option value="50">50 miles</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleCancel}
              className="px-8 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              style={{ fontFamily: 'Urbanist' }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
              style={{ fontFamily: 'Urbanist' }}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MdCheckCircle className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Urbanist' }}>
              Updated Successfully
            </h3>
            <p className="text-[#8E98A8] mb-2" style={{ fontFamily: 'Urbanist' }}>
              Your weekly Payout report for July 20–July 27 has
            </p>
            <p className="text-[#8E98A8] mb-8" style={{ fontFamily: 'Urbanist' }}>
              been successfully downloaded.
            </p>
            <p className="text-sm text-[#8E98A8] mb-8" style={{ fontFamily: 'Urbanist' }}>
              Go to section: Weekly_Payout_2025-07-20.csv
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
  );
}