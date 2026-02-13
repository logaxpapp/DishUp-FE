"use client";

import React, { useState } from "react";
import DashboardHeader from "@/components/Dashboardheader";
import { useGetAllMenuListsQuery } from "@/hooks/useMenuQuery";
import { useDebounce } from "@/hooks/useDebounce";
import Pagination from "@/components/ui/Pagination";
import PriceModalForm from "@/components/Form/PriceModalForm";
import { BounceLoader } from "react-spinners";
import { useGetAllCategoriesQuery } from "@/hooks/useBaseQuery";

export default function PricingPage() {
  interface Menu {
    item: string;
    category: string;
    mealTime: string;
    lunch: string | number;
    validDate: string;
    id: string;
    prices: {
      id: string;
      menuId: string;
      portionName: string;
      regularPrice: number;
      promoPrice: number;
      validDate: string;
      createdAt: string;
      updatedAt: string;
    }[];
  }
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [mealTime, setMealTime] = useState<string>("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const debouncedSearchQuery: any = useDebounce(search, 500);
  const [isAddPriceModalOpen, setIsAddPriceModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Pricing");
  const [menuItemsPrice, setMenuItemsPrice] = useState<Menu | null>(null);
  const { data: categories } = useGetAllCategoriesQuery();
  const [isEditClicked, setIsEditClicked] = useState(false);

  const { data: menuItems, isLoading } = useGetAllMenuListsQuery(
    debouncedSearchQuery,
    categoryId,
    mealTime,
    page,
    pageSize,
  );
  const handleNotificationClick = () => {
    console.log("Notifications clicked");
  };
  const handleChangeMealTime = (m: string) => {
    if (mealTime === m) {
      setMealTime("");
    } else {
      setMealTime(m);
    }
  };
  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };
  const priceData = menuItems?.data?.map((m) => ({
    item: m?.itemName,
    category: m?.menuCategories[0]?.category?.name,
    mealTime: m?.mealTime,
    lunch: m?.prices?.length === 0 ? "10" : 0,
    id: m?.id,
    //promo: "$2.00",
    //validDate: "31st June 2025",
    validDate: "31st June 2025",
    prices: m?.prices,
  }));

  const handleChange = (id: string) => {
    if (categoryId === id) {
      setCategoryId("");
    } else {
      setCategoryId(id);
    }
  };
  return (
    <div className="bg-orange-50/30">
      {/* Shared Header Component */}
      <DashboardHeader
        title="Price Management"
        subtitle="Hello, Welcome Back"
        onNotificationClick={handleNotificationClick}
        onSettingsClick={handleSettingsClick}
      />

      <div className="flex">
        {/* Sidebar Filter */}
        <aside className="w-64 bg-white border-r p-6 self-start">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-gray-900">Filter</h2>
            <button className="text-xs text-gray-400 hover:text-gray-600">
              ...
            </button>
          </div>

          {/* Category Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Category</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                {categories?.map((c) => (
                  <label
                    className="flex items-center gap-2 cursor-pointer"
                    key={c?.id}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                      checked={categoryId === c.id.toString()}
                      onChange={() => handleChange(c.id.toString())}
                    />
                    <span className="text-sm text-gray-600">{c?.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Meal Times Dropdown */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Meal Times</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                {["Breakfast", "Lunch", "Dinner"].map((m, index) => (
                  <label
                    className="flex items-center gap-2 cursor-pointer col-span-2"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                      checked={mealTime === m.toString()}
                      onChange={() => handleChangeMealTime(m.toString())}
                    />
                    <span className="text-sm text-gray-600">{m}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range Dropdown */}
          {/* <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Price Range</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">$0 - $10</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">$20 - $30</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">$10 - $20</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">$30 up</span>
                </label>
              </div>
            </div>
          </div> */}

          {/* Promos Dropdown */}
          {/* <div className="mb-6">
            <button className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3">
              <span>Promos</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="pl-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Buy get 1 free</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">20% OFF</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer col-span-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Buy get 1 free</span>
                </label>
              </div>
            </div>
          </div> */}

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
            Submit
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 min-w-0">
          {/* Breadcrumb Tabs */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <button className="text-gray-500 hover:text-gray-700">
              Dashboard
            </button>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <button className="text-gray-500 hover:text-gray-700">Menu</button>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <button className="text-gray-900 font-medium">Pricing</button>
            <svg
              className="w-4 h-4 text-gray-400"
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
          </div>

          {/* Search and Add Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Menu..."
                onChange={(e) => setSearch(e.target.value)}
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

            <button
              onClick={() => setIsAddPriceModalOpen(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              + Add New Price
            </button>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[120px]">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[100px]">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[100px]">
                    Meal Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[110px]">
                    Current Price
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[110px]">
                    Valid Until
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 min-w-[80px]">
                    Action
                  </th>
                </tr>
              </thead>
              {isLoading ? (
                <tbody>
                  <tr>
                    <td colSpan={6} className="py-20">
                      <div className="flex justify-center items-center">
                        <BounceLoader color="#009688" size={60} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {priceData?.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {row.mealTime}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-orange-500">
                        {row.lunch}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {row.validDate ?? "----"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <button
                            className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                            onClick={() => {
                              setMenuItemsPrice(row);
                              setIsAddPriceModalOpen(true);
                              setIsEditClicked(false);
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
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>

                          {row.prices && row.prices.length > 0 ? (
                            <button
                              onClick={() => {
                                setMenuItemsPrice(row);
                                setIsAddPriceModalOpen(true);
                                setIsEditClicked(true);
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
                          ) : (
                            <button
                              disabled
                              className="p-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed transition"
                              title="Add a price first"
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
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>

            {/* Pagination */}
            {/* <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between min-w-[800px]">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Showing</span>
                <select className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-500">
                  <option>9</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>out of 360</span>
              </div>

              <div className="flex items-center gap-1">
                <button className="w-6 h-6 flex items-center justify-center rounded bg-orange-500 text-white text-xs font-medium">
                  1
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  2
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  3
                </button>
                <span className="text-gray-500 text-xs">...</span>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-xs">
                  5
                </button>
                <button className="p-1 hover:bg-gray-100 rounded text-gray-600">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            <div className="flex items-center justify-between">
              <Pagination
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalItems={menuItems?.meta?.total ?? 0}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Add Price Modal */}
      {isAddPriceModalOpen && (
        <PriceModalForm
          close={() => setIsAddPriceModalOpen(false)}
          menuId={menuItemsPrice?.id}
          menuItemPrice={menuItemsPrice}
          option={isEditClicked}
        />
      )}
    </div>
  );
}
