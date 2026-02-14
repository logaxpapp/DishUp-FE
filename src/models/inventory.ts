import { IBaseResponse, IMeta } from "./base";

export interface IInventoryAnalytics {
  totalInventoryItems: number;
  inStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  totalUnits: number;
}
export interface IInventoryLists {
  id: string;
  menuId: string;
  barcode: string;
  unit: string;
  currentStock: number;
  reorderLevel: number;
  leadTime: number;
  supplierId: string;
  restaurantId: string;
  additionalNote: string;
  createdAt: string;
  updatedAt: string;
  menu: {
    id: string;
    itemName: string;
    description: string;
    mealImageUrl: string;
    defaultStock: number;
    reorderThreshold: number;
    mealTime: string;
    restaurantId: string;
    hasPortions: boolean;
    createdAt: string;
    updatedAt: string;
  };
  supplier: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    restaurantId: string;
    createdAt: string;
    updatedAt: string;
  };
  status: string;
}
[];

export type IInventoryAnalyticsResponse = IBaseResponse<IInventoryAnalytics>;
export type IInventoryApiResponse = IBaseResponse<{
  items: IInventoryLists[];
  meta: IMeta;
}>;
