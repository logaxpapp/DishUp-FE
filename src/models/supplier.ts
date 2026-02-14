import { IBaseResponse, IMeta } from "./base";
export interface ISupplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  restaurantId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ISupplierApiResponse = IBaseResponse<ISupplier[]>;
