'use client';

import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdEdit, MdDelete, MdAdd, MdClose } from 'react-icons/md';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Vendor' | 'Courier' | 'Admin' | 'Customer';
  status: 'Active' | 'Inactive' | 'Suspended';
  joinedDate: string;
  lastActivity: string;
}

export default function UserManagement() {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userRole: '',
    vendor: '',
    status: ''
  });

  const users: User[] = [
    {
      id: '1',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Vendor',
      status: 'Active',
      joinedDate: '4 July, 2025',
      lastActivity: '2 mins ago'
    },
    {
      id: '2',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Courier',
      status: 'Inactive',
      joinedDate: '4 July, 2025',
      lastActivity: 'Yesterday'
    },
    {
      id: '3',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Vendor',
      status: 'Active',
      joinedDate: '4 July, 2025',
      lastActivity: '1 month ago'
    },
    {
      id: '4',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Courier',
      status: 'Active',
      joinedDate: '4 July, 2025',
      lastActivity: '10 mins ago'
    },
    {
      id: '5',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Vendor',
      status: 'Inactive',
      joinedDate: '4 July, 2025',
      lastActivity: '10 mins ago'
    },
    {
      id: '6',
      name: 'Clinton Success',
      email: 'clintonsuccess@gmail.com',
      role: 'Courier',
      status: 'Active',
      joinedDate: '4 July, 2025',
      lastActivity: '10 mins ago'
    },
  ];

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({
      fullName: '',
      email: '',
      userRole: '',
      vendor: '',
      status: ''
    });
    setShowAddEditModal(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      fullName: user.name,
      email: user.email,
      userRole: user.role,
      vendor: '',
      status: user.status
    });
    setShowAddEditModal(true);
  };

  const handleSave = () => {
    // Handle save logic here
    setShowAddEditModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FEF8F4] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Urbanist' }}>
          User Management
        </h1>
        <p className="text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
          Manage all users from in your account, and their account permissions here
        </p>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
            Users
          </h2>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-[#8E98A8] focus:outline-none focus:border-orange-500" style={{ fontFamily: 'Urbanist' }}>
              <option>User role</option>
              <option>Vendor</option>
              <option>Courier</option>
              <option>Admin</option>
            </select>
            <select className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-[#8E98A8] focus:outline-none focus:border-orange-500" style={{ fontFamily: 'Urbanist' }}>
              <option>Registration date</option>
            </select>
            <select className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-[#8E98A8] focus:outline-none focus:border-orange-500" style={{ fontFamily: 'Urbanist' }}>
              <option>User activity</option>
            </select>
            <button className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-[#8E98A8] hover:bg-gray-100 transition-colors" style={{ fontFamily: 'Urbanist' }}>
              Clear all
            </button>
            <button className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors" style={{ fontFamily: 'Urbanist' }}>
              Export
            </button>
            <button
              onClick={handleAddUser}
              className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              style={{ fontFamily: 'Urbanist' }}
            >
              <MdAdd className="text-xl" />
              Add New User
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1">
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E98A8] text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
              style={{ fontFamily: 'Urbanist' }}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
            <MdFilterList className="text-xl text-[#8E98A8]" />
          </button>
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
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Role
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Joined Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Last Activity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#8E98A8]" style={{ fontFamily: 'Urbanist' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium" style={{ fontFamily: 'Urbanist' }}>
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {user.role}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 ${
                      user.status === 'Active' ? 'text-green-600' :
                      user.status === 'Inactive' ? 'text-gray-400' :
                      'text-red-600'
                    }`} style={{ fontFamily: 'Urbanist' }}>
                      <span className={`w-2 h-2 rounded-full ${
                        user.status === 'Active' ? 'bg-green-600' :
                        user.status === 'Inactive' ? 'bg-gray-400' :
                        'bg-red-600'
                      }`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {user.joinedDate}
                  </td>
                  <td className="px-6 py-4 text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                    {user.lastActivity}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        <MdEdit className="text-xl" />
                      </button>
                      <button className="text-red-500 hover:text-red-600 transition-colors">
                        <MdDelete className="text-xl" />
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

      {/* Add/Edit User Modal */}
      {showAddEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Urbanist' }}>
                Add New User & Edit
              </h3>
              <button
                onClick={() => setShowAddEditModal(false)}
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
                  placeholder="Francis Chukwuma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
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
                  placeholder="Francis-Chukwuma@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
                  style={{ fontFamily: 'Urbanist' }}
                />
              </div>

              {/* User Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  User Role
                </label>
                <select
                  value={formData.userRole}
                  onChange={(e) => setFormData({...formData, userRole: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select a User Role</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Courier">Courier</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>

              {/* Assign Vendor (for Courier) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Assign Vendor (for Courier)
                </label>
                <select
                  value={formData.vendor}
                  onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select category</option>
                  <option value="Vendor1">Vendor 1</option>
                  <option value="Vendor2">Vendor 2</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Urbanist' }}>
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 text-gray-700"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  <option value="">Select category</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex items-center gap-4">
              <button
                onClick={() => setShowAddEditModal(false)}
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
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}