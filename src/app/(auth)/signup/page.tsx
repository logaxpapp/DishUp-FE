"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import CustomInput from "@/components/FormElements/Input";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "@/validations/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "@/hooks/useAuthQuery";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { control, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const email = watch("email");
  const register = useRegisterMutation(email);

  const handleBack = () => {
    router.back();
  };

  const onSubmit = (data: any) => {
    const payload = { ...data, agreeToTermAndCondition: true };
    register.mutate(payload);

    console.log(payload);
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
            <h1 className="text-3xl font-bold text-gray-900">
              Create your <span className="text-orange-500">Quick</span>Fetch
              Account.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Start your personalized fitness journey. It only takes a minute to
            build a plan tailored just for you.
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
            <h1 className="text-3xl font-bold text-gray-900">
              Create an account
            </h1>
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Log in
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name={"firstName"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="First Name"
                  placeholder="Enter your firstname"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"lastName"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="First Name"
                  placeholder="Enter your firstname"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name={"email"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  label="Email address"
                  placeholder="your@email.com"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"phoneNumber"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  label="Phone number"
                  placeholder="+234 800 000 0000"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                />
              )}
            />
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

            <Controller
              name={"confirmPassword"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
              loading={register.isPending}
              disabled={register.isPending}
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
