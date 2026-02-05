'use client';

import React, { useState } from 'react';

interface UploadMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadMenuModal({ isOpen, onClose }: UploadMenuModalProps) {
  const [uploadStep, setUploadStep] = useState<'upload' | 'mapping' | 'success'>('upload');
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadStep('mapping');
    }
  };

  const handleDownloadTemplate = () => {
    // Download template logic
    console.log('Downloading template...');
  };

  const handleImportAll = () => {
    setUploadStep('success');
    setTimeout(() => {
      onClose();
      setUploadStep('upload');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Upload Menu Modal */}
      {uploadStep === 'upload' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upload Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Bulk import menu items via CSV or Excel
            </p>

            {/* File Tabs */}
            <div className="flex gap-2 mb-6 border-b">
              <button className="px-4 py-2 text-sm font-medium text-orange-500 border-b-2 border-orange-500">
                Step 1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400">
                Step 2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400">
                Step 3
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400">
                Step 4
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400">
                Step 5
              </button>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-6">
              <label className="cursor-pointer block">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-lg font-medium text-gray-900 mb-1">Choose File</p>
                <p className="text-sm text-gray-500">or Drag</p>
              </label>
            </div>

            <button
              onClick={handleDownloadTemplate}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Template
            </button>
          </div>
        </div>
      )}

      {/* Mapping Modal */}
      {uploadStep === 'mapping' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upload Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Bulk import menu items via CSV or Excel
            </p>

            {/* Map Columns Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Columns</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CSV Column</label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Map to Menu Field</label>
                </div>
              </div>

              <div className="space-y-3">
                {['Item name', 'Category', 'Meal time', 'Description', 'Image URL', 'Default Stock', 'Reorder Threshold', 'Tags/Promotions'].map((field, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={field}
                      readOnly
                      className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600"
                    />
                    <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>{field}</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Table */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Name</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Category</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Meal time</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Description</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Image URL</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Default Stock</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">Reorder Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="hover:bg-gray-50">
                        <td className="px-4 py-3">Cheeseburger</td>
                        <td className="px-4 py-3">Burger</td>
                        <td className="px-4 py-3">Dinner</td>
                        <td className="px-4 py-3">Classic cheese and tomato base</td>
                        <td className="px-4 py-3 text-xs text-blue-600">https://img.etc/cheeseburger.jpg</td>
                        <td className="px-4 py-3">30</td>
                        <td className="px-4 py-3">10</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Showing</span>
                  <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                    <option>3</option>
                  </select>
                  <span className="text-sm text-gray-600">out of 360</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-orange-500 text-white text-sm">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
                  <span className="text-gray-600">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">7</button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              >
                Import All
              </button>
              <button
                onClick={handleImportAll}
                className="flex-1 px-4 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
              >
                Import selected
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {uploadStep === 'success' && (
        <div className="fixed top-8 right-8 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Uploaded Successfully!</h3>
              <button
                onClick={() => {
                  onClose();
                  setUploadStep('upload');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Your menu items have been successfully uploaded.
            </p>
            
            <div className="text-sm text-gray-500 mb-4">
              File Name: menu_upload_09.csv
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  setUploadStep('upload');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
              >
                Dismiss File
              </button>
              <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600">
                Re-upload file
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}