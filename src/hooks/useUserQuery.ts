/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth";
import { useAppDispatch } from "./useAppDispatch";
import { useRouter } from "next/navigation";
import { customToast } from "@/helpers/customToast";
import { setObject } from "@/utils/storage";
import { completeBusinessProfile } from "@/services/user";
import { completeProfile } from "@/store/slices/auth";

export function useCompleteBusinessInfoMutation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: completeBusinessProfile,
    onSuccess: (response: any) => {
      dispatch(completeProfile(true));
      router.push("/dashboard");
    },

    onError: () => {},
    onSettled: () => {},
  });
}
