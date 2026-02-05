/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Toaster } from "react-hot-toast";
import { type ReactNode, type JSX } from "react";
import { customToast } from "@/helpers/customToast";
import { logOut } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { API_ENDPOINTS } from "@/constants/api";

interface Props {
  children: ReactNode;
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function QueryProvider({ children }: Props): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
// console.log(process.env.NODE_ENV, process.env.NEXT_PUBLIC_DEV_SERVER);
export function AxiosProvider({ children }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
    dispatch(logOut());
  };

  const { token } = useAppSelector((state) => state.auth);
  axios.interceptors.response.use(
    function (response) {
      return response;
    },

    async function (error: any) {
      console.log(error);

      if (
        error.response?.data.message === "jwt expired" ||
        error.response?.data.message === "Token is not valid!" ||
        error.response.status === 403
      ) {
        customToast.error("Session has expired");
        handleLogout();
        queryClient.clear();
      }
      if (error.request && !error.response?.data.message) {
        customToast.error(
          "No response from server. Please check your internet connection.",
        );
      }
      customToast.error(
        (error.response?.data.message ||
          error?.response?.data?.data?.message) ??
          "An error occurred",
      );
      return await Promise.reject(error);
    },
  );

  //axios.defaults.baseURL = "http://localhost:5057/api/v1";
  axios.defaults.baseURL = "https://flexcoop.michofat.com/api/v1";
  //axios.defaults.baseURL = "https://flexcoop.onrender.com/api/v1";

  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return <>{children}</>;
}

export function ReduxProvider({ children }: Props): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
}

export function ToastProvider(): JSX.Element {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{
        top: 20,
        right: 20,
      }}
      toastOptions={{
        duration: 15000,
        style: {
          borderRadius: "12px",
          background: "#ffffff",
          color: "#374151",
          fontSize: "14px",
          fontWeight: "500",
          padding: "16px 20px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          border: "1px solid #e5e7eb",
          maxWidth: "400px",
          fontFamily: "var(--font-inter)",
        },
        success: {
          style: {
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "#ffffff",
            border: "1px solid #059669",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#10b981",
          },
        },
        error: {
          style: {
            background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            color: "#ffffff",
            border: "1px solid #dc2626",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#ef4444",
          },
        },
        loading: {
          style: {
            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            color: "#ffffff",
            border: "1px solid #4f46e5",
          },
        },
      }}
    />
  );
}

export const uploadRequest = axios.create({
  baseURL: API_ENDPOINTS.FILE.UPLOAD_FILE,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
