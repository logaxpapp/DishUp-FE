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
}
export type IMenuListsApiResponse = IBaseResponse<{
  data: IMenuLists[];
  meta: IMeta;
}>;
