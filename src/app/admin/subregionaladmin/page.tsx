'use client';

import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdClose, MdEdit, MdDelete } from 'react-icons/md';

interface Admin {
  id: string;
  name: string;
  level: string;
  status: string;
  region: string;
  active: 'Active' | 'Inactive';
  dateAdded: string;
  avatar?: string;
}

export default function SubRegionalAdmin() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    region: '',
    status: ''
  });

  const admins: Admin[] = [
    {
      id: '1',
      name: 'Clinton Tann',
      level: 'Level',
      status: 'Texas',
      region: 'Clinton/Region-aid.com',
      active: 'Active',
      dateAdded: '11 Aug, 2025'
    },
    {
      id: '2',
      name: 'Clinton Tann',
      level: 'Fraud',
      status: 'Texas',
      region: 'Clinton/Region-aid.com',
      active: 'Active',
      dateAdded: '11 Aug, 2025'
    },
    {
      id: '3',
      name: 'Clinton Tann',
      level: 'Fraud',
      status: 'Texas',
      region: 'Clinton/Region-aid.com',
      active: 'Active',
      dateAdded: '11 Aug, 2025'
    },
    {
      id: '4',
      name: 'Clinton Tann',
      level: 'Support',
      status: 'Texas',
      region: 'Clinton/Region-aid.com',
      active: 'Active',
      dateAdded: '11 Aug, 2025'
    },
    {
      id: '5',
      name: 'Clinton Tann',
      level: 'Support',
      status: 'Texas',
      region: 'Clinton/Region-aid.com',
      active: 'Active',
      dateAdded: '11 Aug, 2025'
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedAdmins([]);
    } else {
      setSelectedAdmins(admins.map(a => a.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectAdmin = (adminId: string) => {
    if (selectedAdmins.includes(adminId)) {
      setSelectedAdmins(selectedAdmins.filter(id => id !== adminId));
    } else {
      setSelectedAdmins([...selectedAdmins, adminId]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setNewAdmin(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('New admin:', newAdmin);
    setShowAddModal(false);
    // Reset form
    setNewAdmin({
      fullName: '',
      email: '',
      phoneNumber: '',
      role: '',
      region: '',
      status: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
          Sub-regional admin
        </h1>
        <p className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
          Manage sub-admins roles for regional, fraud, and support operations.
        </p>
      </div>

      {/* Admin Table Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
              Regional Admins
            </h2>
            {selectedAdmins.length > 0 && (
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium" style={{ fontFamily: 'Urbanist' }}>
                {selectedAdmins.length} selected
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
              style={{ fontFamily: 'Urbanist' }}
            >
              + Add new admin
            </button>
            <div className="relative">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 w-64"
                style={{ fontFamily: 'Urbanist' }}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
              <MdFilterList className="text-xl text-[#8E98A8]" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-orange-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Level
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Clinton/Region-aid.com
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Active
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Date Added
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Urbanist' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedAdmins.includes(admin.id)}
                      onChange={() => handleSelectAdmin(admin.id)}
                      className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold text-sm">CT</span>
                      </div>
                      <span className="text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                        {admin.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {admin.level}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {admin.status}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {admin.region}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700" style={{ fontFamily: 'Urbanist' }}>
                      {admin.active}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: 'Urbanist' }}>
                    {admin.dateAdded}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MdEdit className="text-orange-500 text-lg" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MdDelete className="text-red-500 text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
            </select>
            <span className="text-sm text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>out of 25</span>
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

      {/* Add New Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                Add New Admin
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newAdmin.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={newAdmin.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={newAdmin.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Role
                </label>
                <select
                  value={newAdmin.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select role</option>
                  <option value="regional">Regional Admin</option>
                  <option value="fraud">Fraud Prevention</option>
                  <option value="support">Support</option>
                  <option value="operations">Operations</option>
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Region
                </label>
                <select
                  value={newAdmin.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select region</option>
                  <option value="texas">Texas</option>
                  <option value="california">California</option>
                  <option value="florida">Florida</option>
                  <option value="newyork">New York</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Status
                </label>
                <select
                  value={newAdmin.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-900 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex items-center gap-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontFamily: 'Urbanist' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
                style={{ fontFamily: 'Urbanist' }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}