/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMenu, getMenuLists, updateMenu } from "@/services/menu";

export function useCreateMenuMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMenu,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient.invalidateQueries({ queryKey: ["menu"] }).catch(() => {});
    },
  });
}
export function useGetAllMenuListsQuery(
  search: string,
  categoryId: string,
  mealTime: string,
  page: number,
  pageSize: number,
) {
  return useQuery({
    queryKey: ["menu", search, categoryId, mealTime, page, pageSize],
    queryFn: () => getMenuLists(search, categoryId, mealTime, page, pageSize),
  });
}

export function useUpdateMenuMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMenu,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient.invalidateQueries({ queryKey: ["menu"] }).catch(() => {});
    },
  });
}
