"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function PayoutSetupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    swiftCode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
    validateField(name, form[name as keyof typeof form]);
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    if (!value.trim()) {
      const fieldLabels: Record<string, string> = {
        bankName: "Bank name",
        accountNumber: "Account number",
        routingNumber: "Routing number",
        swiftCode: "SWIFT code",
      };
      error = `${fieldLabels[name]} is required`;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(form).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    );
    setTouched(allTouched);

    // Validate all fields
    const newErrors: Record<string, string> = {};

    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Form is valid, proceed to menu upload
    router.push("/menu-upload");
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
              Set up your Payout Account.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            We use this information to process secure payouts.
          </p>

          {/* Payment Security Illustration */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/payout-illustration.png"
              alt="Secure payment illustration"
              width={400}
              height={400}
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
            <h1 className="text-3xl font-bold text-gray-900">Bank details</h1>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Input
                name="bankName"
                label="Bank Name"
                type="text"
                placeholder="Mama Dee"
                value={form.bankName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.bankName && errors.bankName && (
                <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
              )}
            </div>

            <div>
              <Input
                name="accountNumber"
                label="Account Number"
                type="text"
                placeholder="0123456789"
                value={form.accountNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.accountNumber && errors.accountNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountNumber}
                </p>
              )}
            </div>

            <div>
              <Input
                name="routingNumber"
                label="Routing Number"
                type="text"
                placeholder="123456789"
                value={form.routingNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.routingNumber && errors.routingNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.routingNumber}
                </p>
              )}
            </div>

            <div>
              <Input
                name="swiftCode"
                label="SWIFT Code"
                type="text"
                placeholder="ABCDUS33XXX"
                value={form.swiftCode}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.swiftCode && errors.swiftCode && (
                <p className="text-red-500 text-sm mt-1">{errors.swiftCode}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
