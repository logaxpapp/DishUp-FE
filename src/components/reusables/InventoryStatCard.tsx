import React from "react";

interface inventoryCardProps {
  analytics: {
    totalInventoryItems: number;
    inStockCount: number;
    lowStockCount: number;
    outOfStockCount: number;
    totalUnits: number;
  };
}
const InventoryStatCard = ({ analytics }: inventoryCardProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600">In Stock</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">
              {analytics?.inStockCount}
            </span>
            <span className="text-xs text-gray-500">Products</span>
          </div>
          <div className="flex items-end h-16 gap-1">
            {[30, 45, 35, 50, 40, 55, 45, 60, 50, 65].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-green-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-orange-500 rounded"></div>
              <span className="text-sm text-gray-600">Re-Stock</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">
              {analytics?.outOfStockCount}
            </span>
            <span className="text-xs text-gray-500">Products</span>
          </div>
          <div className="flex items-end h-16 gap-1">
            {[40, 35, 45, 40, 50, 45, 55, 50, 60, 55].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-orange-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">Low Stock</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">
              {analytics?.lowStockCount}
            </span>
            <span className="text-xs text-gray-500">Products</span>
          </div>
          <div className="flex items-end h-16 gap-1">
            {[35, 30, 40, 35, 45, 40, 50, 45, 55, 50].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-red-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStatCard;
