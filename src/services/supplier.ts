import { API_ENDPOINTS } from "@/constants/api";
import { ISupplierApiResponse } from "@/models/supplier";
import axios from "axios";

export async function createSupplier(payload: {
  name: string;
  email: string;
  phone: string;
  address: string;
}) {
  const response = await axios.post(
    API_ENDPOINTS.SUPPLIER.SUPPLIER_API,
    payload,
  );
  return response.data.data;
}
export async function updateSupplier({
  payload,
  supplierId,
}: {
  payload: { name: string; email: string; phone: string; address: string };
  supplierId: string;
}) {
  const response = await axios.patch(
    `${API_ENDPOINTS.SUPPLIER.SUPPLIER_API}/${supplierId}`,
    payload,
  );
  return response.data.data;
}

export async function getSuppliers(page: number, pageSize: number) {
  const response = await axios.get<ISupplierApiResponse>(
    `${API_ENDPOINTS.SUPPLIER.SUPPLIER_API}`,
    {
      params: {
        page,
        pageSize,
      },
    },
  );

  return response?.data?.data;
}
export async function deleteSupplier({ supplierId }: { supplierId: string }) {
  const response = await axios.delete(
    `${API_ENDPOINTS.SUPPLIER.SUPPLIER_API}/${supplierId}`,
  );
  return response.data.data;
}
