/* eslint-disable @typescript-eslint/no-explicit-any */
import { customToast } from "@/helpers/customToast";
import {
  getBankLists,
  getCategories,
  getCountryLists,
  getStateLists,
} from "@/services/base";
import { useQuery } from "@tanstack/react-query";

export function useGetAllBanksQuery() {
  return useQuery({
    queryKey: ["banks"],
    queryFn: () => getBankLists(),
  });
}

export function useGetAllCountryQuery() {
  return useQuery({
    queryKey: ["country"],
    queryFn: () => getCountryLists(),
  });
}

export function useGetAllStatesQuery(countryId: string) {
  return useQuery({
    queryKey: ["statez", countryId],
    queryFn: () => getStateLists(countryId),
    enabled: !!countryId,
  });
}

export function useGetAllCategoriesQuery() {
  return useQuery({
    queryKey: ["cat"],
    queryFn: () => getCategories(),
  });
}
