"use client";

import { useState } from "react";
import DashboardHeader from "@/components/Dashboardheader";
import {
  useDeleteSupplierMutation,
  useGetAllSuppliersQuery,
} from "@/hooks/useSupplierQuery";
import { ISupplier } from "@/models/supplier";
import SupplierForm from "@/components/Form/SupplierForm";
import WarningModal from "@/components/reusables/WarningModal";

export default function OrdersPage() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const { data: suppliers } = useGetAllSuppliersQuery(page, pageSize);
  const [supplierData, setSupplierData] = useState<ISupplier | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const deleteSupplier = useDeleteSupplierMutation({
    close: () => setIsDeleteModal(false),
  });

  // Handler functions for the shared header
  const handleNotificationClick = () => {
    console.log("Notifications clicked");
    // Add your notification logic here
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    // Add your settings logic here
  };

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Supplier"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <input
              type="text"
              //onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Supplier..."
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
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

          <div className="flex items-center gap-3">
            <></>

            <button
              onClick={() => {
                setSupplierData(null);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-sm font-medium">Create</span>
            </button>
          </div>
        </div>

        {/* Supplier Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {suppliers?.map((s, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {s?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {s?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {s?.phone}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            setSupplierData(s);
                            setIsModalOpen(true);
                          }}
                          className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          onClick={() => {
                            setSupplierData(s);
                            setIsDeleteModal(true);
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-1 14H6L5 7m5 4v6m4-6v6M9 7V4h6v3m-9 0h12"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>9</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-600">out of 360</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                3
              </button>
              <span className="text-gray-600">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm font-medium">
                5
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <SupplierForm
          close={() => setIsModalOpen(false)}
          supplier={supplierData}
          title={supplierData ? "Update Supplier " : "Create Supplier"}
        />
      )}
      <WarningModal
        title={`Are you sure you want to remove "${supplierData?.name}" from suppliers list?`}
        subTitle={
          "This action cannot be undone and will remove supplier from the list."
        }
        close={() => setIsDeleteModal(false)}
        open={isDeleteModal}
        type="delete"
        className={""}
        action={() => {
          deleteSupplier.mutate({ supplierId: supplierData?.id });
        }}
        actionText="Yes, Delete"
        loading={deleteSupplier?.isPending}
      />
    </div>
  );
}
