/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "@/services/supplier";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCreateSupplierMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSupplier,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient.invalidateQueries({ queryKey: ["supplier"] }).catch(() => {});
    },
  });
}
export function useGetAllSuppliersQuery(page: number, pageSize: number) {
  return useQuery({
    queryKey: ["supplier", page, pageSize],
    queryFn: () => getSuppliers(page, pageSize),
  });
}

export function useUpdateSupplierMutation({ close }: { close: () => void }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSupplier,
    onError: () => {},
    onSettled: () => {
      close();
      queryClient.invalidateQueries({ queryKey: ["supplier"] }).catch(() => {});
    },
  });
}

export function useDeleteSupplierMutation({ close }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSupplier,
    onError: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["supplier"] }).catch(() => {});
      close();
    },
  });
}
