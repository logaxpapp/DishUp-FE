"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "@/validations/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "@/components/FormElements/Input";
import { useLoginMutation } from "@/hooks/useAuthQuery";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const login = useLoginMutation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: { username: string; password: string }) => {
    login.mutate({
      username: data?.username,
      password: data?.password,
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Image & Description */}
      <div className="hidden lg:flex flex-col justify-center items-center p-16 bg-gradient-to-br from-orange-50 to-orange-100 relative">
        <div className="max-w-md space-y-6 w-full">
          {/* Logo at top */}
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <div className="max-w-md w-full">
              <Image
                src="/logo.png"
                alt="QuickFetch Logo"
                width={180}
                height={54}
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Kitchen Login</h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Sign in to manage and track orders.
          </p>

          {/* Chef Image */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/chef-pizza.png"
              alt="Chef with pizza"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-white relative">
        {/* Transparent Header for Mobile */}
        <div className="lg:hidden absolute top-0 left-0 w-full px-8 py-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="QuickFetch Logo"
              width={200}
              height={60}
              className="w-auto h-auto cursor-pointer"
            />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8 mt-20 lg:mt-0">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium text-lg"
            type="button"
          >
            <ArrowLeft size={24} />
            <span>Back</span>
          </button>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Controller
              name={"username"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Username"
                  placeholder="Enter your username"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <div className="space-y-2">
              <Controller
                name={"password"}
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    {...field}
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    necessary
                    status={fieldState.error ? "error" : ""}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />

              <div className="text-right">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-gray-600 hover:text-orange-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
              disabled={login.isPending}
              loading={login.isPending}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
