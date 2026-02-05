export interface IBaseResponse<T> {
  statusCode: "success" | "error";
  message: string;
  data: T | null;
}
