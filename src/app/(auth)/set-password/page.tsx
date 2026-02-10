"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getObject } from "@/utils/storage";
import { useResetPasswordMutation } from "@/hooks/useAuthQuery";

export default function SetPasswordPage() {
  interface AuthFlowData {
    email: string;
    token?: string;
  }
  const router = useRouter();
  const authFlow = getObject<AuthFlowData>("authFlow");
  const resetPassword = useResetPasswordMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
    code: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validatePassword = (password: string) => {
    if (!password.trim()) {
      return "Password is required";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    return "";
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string,
  ) => {
    if (!confirmPassword.trim()) {
      return "Please confirm your password";
    }

    if (confirmPassword !== password) {
      return "Passwords do not match";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = "";
    if (name === "password") {
      error = validatePassword(form.password);
    } else if (name === "confirmPassword") {
      error = validateConfirmPassword(form.confirmPassword, form.password);
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      password: true,
      confirmPassword: true,
      code: true,
    });
    // Validate all fields
    const newErrors: Record<string, string> = {};

    const passwordError = validatePassword(form.password);
    if (passwordError) newErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(
      form.confirmPassword,
      form.password,
    );
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    resetPassword.mutate({
      email: authFlow?.email,
      password: form.password,
      code: form.code,
      token: authFlow?.token,
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Illustration & Description */}
      <div className="hidden lg:flex flex-col justify-center items-center p-16 bg-gradient-to-br from-orange-50 to-orange-100 relative">
        <div className="max-w-md space-y-6 w-full">
          {/* Logo at top */}
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <div className="max-w-md w-full">
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
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Restaurant Partner Authentication Screen
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            For your security, please verify your identity.
          </p>

          {/* Security Illustration */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/security-illustration.png"
              alt="Security verification illustration"
              width={400}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-white relative">
        {/* Transparent Header for Mobile */}
        <div className="lg:hidden absolute top-0 left-0 w-full px-8 py-6">
          <Image
            src="/logo.png"
            alt="QuickFetch Logo"
            width={180}
            height={54}
            className="w-auto h-auto"
          />
        </div>

        <div className="w-full max-w-md space-y-8 mt-20 lg:mt-0">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Set Password</h1>
            <p className="text-gray-600">
              Your previous password has been reset. Please set a new password
              for your account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Input
                name="code"
                label="Code"
                type={"text"}
                placeholder="Enter six digit code"
                value={form.code}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {!form?.code && (
                <p className="text-red-500 text-sm mt-1 font-bold">
                  Please enter the code sent to your email
                </p>
              )}
            </div>
            <div>
              <Input
                name="password"
                label="Create Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                icon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                }
              />
              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mt-1 font-bold">
                  {errors.password}
                </p>
              )}
            </div>
            <div>
              <Input
                name="confirmPassword"
                label="Re-enter Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                icon={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 font-bold">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
              loading={resetPassword.isPending}
              disabled={resetPassword.isPending}
            >
              Set Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
