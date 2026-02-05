"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  useActivateEmailMutation,
  useResendEmailMutation,
} from "@/hooks/useAuthQuery";

export default function VerifyCodePage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const { user, token } = useAppSelector((state) => state.auth);
  const activateMail = useActivateEmailMutation();
  const resendMail = useResendEmailMutation();

  const validateCode = (value: string) => {
    if (!value.trim()) {
      return "Verification code is required";
    }

    if (value.trim().length < 6) {
      return "Please enter a valid verification code";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validateCode(code);
    setError(validationError);
  };

  const handleResend = () => {
    resendMail.mutate(
      {
        email: user?.profile?.email,
      },
      {
        onSuccess: () => {
          setCode("");
          setError("");
        },
      },
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched(true);
    const validationError = validateCode(code);

    if (validationError) {
      setError(validationError);
      return;
    }
    activateMail.mutate({
      email: user?.profile?.email,
      code,
      token,
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
            <h1 className="text-3xl font-bold text-gray-900">Verify Code</h1>
            <p className="text-gray-600">
              An authentication code has been sent to your{" "}
              <span className="font-bold">{user?.profile?.email}</span> .
            </p>
          </div>

          {/* Form */}
          {resendMail?.isPending ? (
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-700"></div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <Input
                  name="code"
                  label="Enter Code"
                  type="text"
                  placeholder="A2B8P2V4R800"
                  value={code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched && error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>

              {/* Resend Link */}
              <div className="text-sm">
                <span className="text-gray-600">Didn't receive a code? </span>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendMail.isPending}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Resend
                </button>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6"
                loading={activateMail.isPending}
                disabled={activateMail.isPending}
              >
                Verify
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
