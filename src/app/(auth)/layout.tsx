"use client"; // Must be a client component to use Redux hooks

import { useAppSelector } from "@/hooks/useAppSelector";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, isProfileCompleted } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token && !isProfileCompleted) {
      router.push("/business-details");
      return;
    }
    if (token && isProfileCompleted) {
      router.push("/dashboard");
    }
  }, [token, isProfileCompleted, router]);

  return <>{children}</>;
}
