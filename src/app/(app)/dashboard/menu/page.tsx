"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UploadMenuModal } from "@/components/UploadMenuModal";
import { useGetAllCategoriesQuery } from "@/hooks/useBaseQuery";
import { useGetAllMenuListsQuery } from "@/hooks/useMenuQuery";
import { truncateText } from "@/helpers/truncate";
import { useDebounce } from "@/hooks/useDebounce";
import { BounceLoader } from "react-spinners";
import Pagination from "@/components/ui/Pagination";
import { MoreVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import { IMenuLists } from "@/models/menu";
import MenuForm from "@/components/Form/MenuForm";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [mealTime, setMealTime] = useState<string>("");
  const debouncedSearchQuery: any = useDebounce(search, 500);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { data: categories } = useGetAllCategoriesQuery();
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [menuItemList, setMenuItemList] = useState<IMenuLists | null>(null);

  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const handleMenuToggle = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const handleEdit = (item: IMenuLists) => {
    setActiveMenuIndex(null);
    setMenuItemList(item);
    setIsCreateModalOpen(true);
  };

  const handleDelete = (item: any) => {
    console.log("Delete", item);
    setActiveMenuIndex(null);
  };

  const { data: menuItems, isLoading } = useGetAllMenuListsQuery(
    debouncedSearchQuery,
    categoryId,
    mealTime,
    page,
    pageSize,
  );
  const handleChange = (id: string) => {
    if (categoryId === id) {
      setCategoryId("");
    } else {
      setCategoryId(id);
    }
  };
  const handleChangeMealTime = (m: string) => {
    if (mealTime === m) {
      setMealTime("");
    } else {
      setMealTime(m);
    }
  };
  const handleClickIcon = (index: number) => {
    setActiveMenuIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu</h1>
          <p className="text-sm text-gray-600">Hello, Welcome Back</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Notification bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* Settings icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>

          {/* AVATAR - ADD THIS */}
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
            <svg
              className="w-6 h-6"
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
      </header>

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
        <main className="flex-1 p-8 min-w-0">
          {/* Search and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Menu..."
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
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="text-sm font-medium">Upload Menu</span>
              </button>

              <button
                onClick={() => {
                  setMenuItemList(null);
                  setIsCreateModalOpen(true);
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
                <span className="text-sm font-medium">Add Item</span>
              </button>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="relative">
            {/* Loader overlay */}
            {isLoading && (
              <div className="absolute inset-0 mt-10  flex justify-center items-center bg-white/50 z-10">
                <BounceLoader color="orange" size={60} />
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
              {isLoading ? (
                <div className="col-span-full flex justify-center items-center h-64">
                  <BounceLoader color="#009688" size={60} />
                </div>
              ) : menuItems && menuItems?.data?.length > 0 ? (
                menuItems.data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        className="p-1 rounded-full hover:bg-gray-100"
                        onClick={() => handleClickIcon(index)}
                      >
                        <MoreVerticalIcon className="w-5 h-5 text-green-600" />
                      </button>

                      {activeMenuIndex === index && (
                        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                          <button
                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => handleEdit(item)}
                          >
                            <PencilIcon className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-red-500"
                            onClick={() => handleDelete(item)}
                          >
                            <TrashIcon className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Card Image */}
                    <div className="relative w-full h-40 mb-3 bg-orange-50 rounded-xl overflow-hidden">
                      <Image
                        src={item?.mealImageUrl || "/noMenu.jpg"}
                        alt={item?.itemName || "No Image"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Card Info */}
                    <h3 className="font-medium text-gray-900 mb-1">
                      {truncateText(item?.itemName, 15)}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-semibold">
                        {item?.defaultStock}
                      </span>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span className="text-sm text-gray-600">4.5</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm">
                  <div className="w-full max-w-xs h-70 rounded-xl flex flex-col items-center justify-center">
                    <Image
                      src="/noMenu.jpg"
                      alt="No Menu"
                      width={180}
                      height={54}
                    />
                  </div>
                  <p className="mt-4 text-gray-500 font-medium text-center">
                    Menu is empty
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <Pagination
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              totalItems={menuItems?.meta?.total ?? 0}
            />
          </div>
        </main>
      </div>

      {/* Upload Menu Modal */}
      <UploadMenuModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* Create Menu Item Modal */}
      {isCreateModalOpen && (
        <MenuForm
          close={() => setIsCreateModalOpen(false)}
          categories={categories}
          menuItemList={menuItemList}
          title={menuItemList ? "Edit New Menu Item" : "Create New Menu Item"}
        />
      )}
    </div>
  );
}
