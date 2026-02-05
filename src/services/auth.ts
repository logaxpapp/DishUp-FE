/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import {
  IActivateMailPayload,
  ILoginApiResponse,
  ILoginPayload,
  IRegisterPayload,
} from "@/models/auth";
import { API_ENDPOINTS } from "@/constants/api";

export async function login(payload: ILoginPayload) {
  const response = await axios.post<ILoginApiResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    payload,
  );
  return response.data.data;
}

export async function register(payload: IRegisterPayload) {
  const response = await axios.post(API_ENDPOINTS.AUTH.REGISTER, payload);
  return response.data.data;
}

export async function activateMail(payload: IActivateMailPayload) {
  const response = await axios.post(API_ENDPOINTS.AUTH.VERIFY_OTP, payload);
  return response.data.data;
}
export async function resendMail({ email }: { email: string }) {
  const response = await axios.post(API_ENDPOINTS.AUTH.RESEND_OTP, { email });
  return response.data.data;
}
export async function forgotPassword({ email }: { email: string }) {
  const response = await axios.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
    email,
  });
  return response.data.data;
}
export async function resetPassword({
  email,
  code,
  token,
  password,
}: {
  email: string;
  code: string;
  token: string;
  password: string;
}) {
  const response = await axios.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
    email,
    code,
    token,
    password,
  });
  return response.data.data;
}
