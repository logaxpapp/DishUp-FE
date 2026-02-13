import { IBaseResponse, IMeta } from "./base";

export interface IMenuPayload {
  itemName: string;
  description: string;
  mealImageUrl: string;
  mealTime: string;
  defaultStock: number;
  reorderThreshold: number;
  categoryIds: string[];
}
export interface IMenuLists {
  id: string;
  itemName: string;
  description: string;
  mealImageUrl: string;
  defaultStock: number;
  reorderThreshold: number;
  mealTime: string;
  restaurantId: string;
  createdAt: string;
  updatedAt: string;
  menuCategories: {
    id: string;
    menuId: string;
    categoryId: string;
    createdAt: string;
    category: {
      id: string;
      name: string;
      description: string;
      createdAt: string;
    };
  }[];
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
export type IMenuListsApiResponse = IBaseResponse<{
  data: IMenuLists[];
  meta: IMeta;
}>;

export interface IMenuPricePayload {
  portionName: string;
  regularPrice: number;
  promoPrice: number;
  validDate: string;
}
