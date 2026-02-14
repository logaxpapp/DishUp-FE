/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAllInventoryItems,
  getInventoryAnalytics,
  createInventory,
  updateInventory,
} from "@/services/inventory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetInventoryAnalyticsQuery() {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: () => getInventoryAnalytics(),
  });
}
export function useGetAllInventoryListsQuery(
  search?: string,
  status?: string,
  supplierId?: string,
  page?: number,
  pageSize?: number,
) {
  return useQuery({
    queryKey: ["inventory", search, status, supplierId, page, pageSize],
    queryFn: () =>
      getAllInventoryItems(search, status, supplierId, page, pageSize),
  });
}
export function useCreateInventoryMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createInventory,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient
        .invalidateQueries({ queryKey: ["inventory"] })
        .catch(() => {});
    },
  });
}
export function useUpdateteInventoryMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateInventory,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient
        .invalidateQueries({ queryKey: ["inventory"] })
        .catch(() => {});
    },
  });
}
