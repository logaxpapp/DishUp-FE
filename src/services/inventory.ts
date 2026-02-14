import { API_ENDPOINTS } from "@/constants/api";
import {
  IInventoryAnalyticsResponse,
  IInventoryApiResponse,
} from "@/models/inventory";
import { IMenuListsApiResponse } from "@/models/menu";
import axios from "axios";

export async function getInventoryAnalytics() {
  const response = await axios.get<IInventoryAnalyticsResponse>(
    `${API_ENDPOINTS.INVENTORY.ANALYTICS}`,
  );

  return response?.data?.data;
}

export async function getAllInventoryItems(
  search?: string,
  status?: string,
  supplierId?: string,
  page?: number,
  pageSize?: number,
) {
  const response = await axios.get<IInventoryApiResponse>(
    `${API_ENDPOINTS.INVENTORY.INVENTORY_API}`,
    {
      params: {
        search,
        status,
        supplierId,
        page,
        pageSize,
      },
    },
  );

  return response?.data?.data?.items;
}
export async function updateInventory({
  payload,
  inventoryId,
}: {
  payload: {
    menuId: string;
    barcode: string;
    unit: string;
    currentStock: number;
    reorderLevel: number;
    leadTime: number;
    supplierId: string;
    additionalNote: string;
  };
  inventoryId: string;
}) {
  const response = await axios.patch(
    `${API_ENDPOINTS.INVENTORY.INVENTORY_API}/${inventoryId}`,
    payload,
  );
  return response.data.data;
}
export async function createInventory({
  payload,
}: {
  payload: {
    menuId: string;
    barcode: string;
    unit: string;
    currentStock: number;
    reorderLevel: number;
    leadTime: number;
    supplierId: string;
    additionalNote: string;
  };
}) {
  const response = await axios.post(
    `${API_ENDPOINTS.INVENTORY.INVENTORY_API}`,
    payload,
  );
  return response.data.data;
}
