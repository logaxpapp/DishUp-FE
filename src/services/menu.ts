import { API_ENDPOINTS } from "@/constants/api";
import {
  IMenuListsApiResponse,
  IMenuPayload,
  IMenuPricePayload,
} from "@/models/menu";
import axios from "axios";

export async function createMenu(payload: IMenuPayload) {
  const response = await axios.post(API_ENDPOINTS.MENU.MENU_API, payload);
  return response.data.data;
}
export async function updateMenu({
  payload,
  menuId,
}: {
  payload: IMenuPayload;
  menuId: string;
}) {
  const response = await axios.patch(
    `${API_ENDPOINTS.MENU.MENU_API}/${menuId}`,
    payload,
  );
  return response.data.data;
}

export async function getMenuLists(
  search: string,
  categoryId: string,
  mealTime: string,
  page: number,
  pageSize: number,
) {
  const response = await axios.get<IMenuListsApiResponse>(
    `${API_ENDPOINTS.MENU.MENU_API}`,
    {
      params: {
        search,
        categoryId,
        mealTime: mealTime.toUpperCase(),
        page,
        pageSize,
      },
    },
  );

  return response?.data?.data;
}

export async function addMenuPrice({
  payload,
  menuId,
}: {
  payload;
  menuId: string;
}) {
  const response = await axios.post(
    `${API_ENDPOINTS.MENU.MENU_PRICING}/${menuId}`,
    payload,
  );
  return response.data.data;
}
export async function updateMenuPrice({
  payload,
  menuPriceId,
}: {
  payload: {
    portionName: string;
    regularPrice: number;
    promoPrice: number;
    validDate: string;
  };
  menuPriceId: string;
}) {
  const response = await axios.patch(
    `${API_ENDPOINTS.MENU.MENU_PRICING}/${menuPriceId}`,
    payload,
  );
  return response.data.data;
}
