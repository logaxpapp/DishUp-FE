"use client";

import React, { useState } from "react";
import Image from "next/image";
import DashboardHeader from "@/components/Dashboardheader";
import InventoryStatCard from "@/components/reusables/InventoryStatCard";
import {
  useGetAllInventoryListsQuery,
  useGetInventoryAnalyticsQuery,
} from "@/hooks/useInventoryQuery";
import InventoryForm from "@/components/Form/InventoryForm";
import { useGetAllCategoriesQuery } from "@/hooks/useBaseQuery";
import { useGetAllMenuListsQuery } from "@/hooks/useMenuQuery";
import { IInventoryLists } from "@/models/inventory";
import { useDebounce } from "@/hooks/useDebounce";
import { BounceLoader } from "react-spinners";
import { useGetAllSuppliersQuery } from "@/hooks/useSupplierQuery";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: analytics } = useGetInventoryAnalyticsQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: suppliers } = useGetAllSuppliersQuery();
  const debouncedSearchQuery: any = useDebounce(search, 500);
  const [singleInventory, setSingleInventory] =
    useState<IInventoryLists | null>(null);
  const { data: inventoryData, isLoading: isInventoryLoading } =
    useGetAllInventoryListsQuery(debouncedSearchQuery);
  const { data: menuItems, isLoading } = useGetAllMenuListsQuery();

  console.log({ categories, menuItems: menuItems });

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
        title="Inventory"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      <div className="p-8">
        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Supply Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Supply Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">In Stock</span>
                  <span className="text-sm font-medium text-gray-900">
                    8,843
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Re-Stock</span>
                  <span className="text-sm font-medium text-gray-900">2k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Low Stock</span>
                  <span className="text-sm font-medium text-gray-900">3k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Level Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Last 6 Months
            </h3>
            <div className="relative h-40">
              <svg className="w-full h-full" viewBox="0 0 300 150">
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="30"
                  x2="300"
                  y2="30"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="300"
                  y2="60"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="90"
                  x2="300"
                  y2="90"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="120"
                  x2="300"
                  y2="120"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />

                {/* Lines */}
                <path
                  d="M0,80 L50,60 L100,70 L150,50 L200,65 L250,55 L300,60"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <path
                  d="M0,100 L50,90 L100,95 L150,85 L200,90 L250,80 L300,85"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                />
                <path
                  d="M0,110 L50,105 L100,108 L150,100 L200,105 L250,95 L300,100"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">In Stock</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-600">Re-Stock</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-600">Low Stock</span>
                </div>
              </div>
            </div>
          </div>

          <InventoryStatCard analytics={analytics} />
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between border-b">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for Item..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
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
            {categories && menuItems?.data && suppliers && (
              <button
                onClick={() => {
                  setSingleInventory(null);
                  setIsModalOpen(true);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                + Add Item
              </button>
            )}
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  SKU/barcode
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  In Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Reorder level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isInventoryLoading ? (
                <tr>
                  <td colSpan={12} className="h-64">
                    <div className="flex justify-center items-center h-full w-full">
                      <BounceLoader color="#009688" size={60} />
                    </div>
                  </td>
                </tr>
              ) : (
                inventoryData?.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm text-gray-900">
                      {row?.menu?.itemName}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      {row?.barcode}
                    </td>

                    <td className="px-6 py-3 text-sm text-gray-600">
                      {row?.currentStock}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      {row?.reorderLevel}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      {row?.unit}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      {row?.supplier?.name}
                    </td>
                    <td
                      className={`px-6 py-3 text-sm font-medium ${
                        row.status === "LOWSTOCK"
                          ? "text-yellow-600"
                          : row.status === "INSTOCK"
                            ? "text-green-600"
                            : "text-gray-600"
                      }`}
                    >
                      {row.status}
                    </td>

                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          className="text-orange-500 hover:text-orange-600"
                          onClick={() => {
                            setSingleInventory(row);
                            setIsModalOpen(true);
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
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-500 hover:text-red-600">
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Showing</span>
              <select className="px-2 py-1 border border-gray-300 rounded text-xs">
                <option>9</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>out of 360</span>
            </div>

            <div className="flex items-center gap-1">
              <button className="w-6 h-6 flex items-center justify-center rounded bg-orange-500 text-white text-xs">
                1
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">
                2
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">
                3
              </button>
              <span className="text-xs">...</span>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-xs">
                5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <InventoryForm
          close={() => setIsModalOpen(false)}
          menuItems={menuItems?.data}
          categories={categories}
          singleInventory={singleInventory}
          suppliers={suppliers}
        />
      )}
    </div>
  );
}
