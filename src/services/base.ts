/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINTS } from "@/constants/api";
import { IAllBanksApiResponse } from "@/models/bank";
import {
  IAllCategoriesApiResponse,
  IAllCountryApiResponse,
  IAllStateApiResponse,
} from "@/models/location";

import axios from "axios";

export async function getBankLists() {
  const response = await axios.get<IAllBanksApiResponse>(
    `${API_ENDPOINTS.BANK.ALL_BANK_LISTS}`,
  );

  return response?.data?.data?.data;
}
export async function getCountryLists() {
  const response = await axios.get<IAllCountryApiResponse>(
    `${API_ENDPOINTS.LOCATION.ALL_COUNTRY_LISTS}`,
  );

  return response?.data?.data;
}
export async function getStateLists(countryId: string) {
  const response = await axios.get<IAllStateApiResponse>(
    `${API_ENDPOINTS.LOCATION.ALL_CITY_LISTS}/${countryId}/state`,
  );

  return response?.data?.data?.result;
}

export async function getCategories() {
  const response = await axios.get<IAllCategoriesApiResponse>(
    `${API_ENDPOINTS.CATEGORY.GET_CATEGORIES}`,
  );

  return response?.data?.data;
}
