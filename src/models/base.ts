export interface IBaseResponse<T> {
  statusCode: "success" | "error";
  message: string;
  data: T | null;
  meta: IMeta;
}

export interface IMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
