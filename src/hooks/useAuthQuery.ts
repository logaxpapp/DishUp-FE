/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import {
  activateMail,
  forgotPassword,
  login,
  register,
  resendMail,
  resetPassword,
} from "../services/auth";
import { useAppDispatch } from "./useAppDispatch";
import { useRouter } from "next/navigation";
import { setRegisterUser, setUser } from "@/store/slices/auth";
import { customToast } from "@/helpers/customToast";
import { setObject } from "@/utils/storage";

export function useLoginMutation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: login,
    onSuccess: (response: any) => {
      dispatch(setUser(response));
      customToast.success("Login successful");
      if (response.isProfileCompleted) {
        router.push("/dashboard");
      } else {
        router.push("/business-details");
      }
    },

    onError: () => {},
    onSettled: () => {},
  });
}

export function useRegisterMutation(email: string) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: register,
    onSuccess: (response: any) => {
      const token = response?.token;

      dispatch(
        setRegisterUser({
          email,
          token,
        }),
      );

      customToast.success("Registration successful");
      router.push("/verify-code");
    },
  });
}

export function useActivateEmailMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: activateMail,
    onSuccess: (response: any) => {
      if (response) {
        customToast.success("Verification code has been resent to your email");
        router.push("/login");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
}

export function useResendEmailMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: resendMail,
    onSuccess: (response: any) => {
      if (response) {
        customToast.success("Email sent successful");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
}
export function useForgotPasswordMutation(email: string) {
  const router = useRouter();
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (response: any) => {
      if (response) {
        console.log(response);
        customToast.success("Email sent successful");
        setObject("authFlow", {
          email,
          token: response?.token,
        });
        router.push("/set-password");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
}
export function useResetPasswordMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (response: any) => {
      if (response) {
        customToast.success("Password reset successful");

        router.push("/password-reset-success");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
}
