import { ILoginResponse, IRegisterResponse } from "@/interfaces/auth";
import { IBaseResponse } from "./base";

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IRegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  agreeToTermAndCondition: boolean;
}

export interface IActivateMailPayload {
  email: string;
  code: string;
  token: string;
}
export type ILoginApiResponse = IBaseResponse<ILoginResponse>;
export type IRegisterApiResponse = IBaseResponse<IRegisterResponse>;
