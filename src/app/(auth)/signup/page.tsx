"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "@/components/FormElements/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validations/auth";
import { useRegisterMutation } from "@/hooks/useAuthQuery";

export default function SignupPage() {
  const router = useRouter();
  const reduce = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const ease = useMemo(() => [0.22, 1, 0.36, 1] as const, []);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: reduce
        ? { opacity: 1, transition: { duration: 0.15 } }
        : {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 },
          },
    }),
    [reduce],
  );

  const item = useMemo(
    () => ({
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
      visible: reduce
        ? { opacity: 1 }
        : { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    }),
    [reduce, ease],
  );

  const hero = useMemo(
    () => ({
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 },
      visible: reduce
        ? { opacity: 1 }
        : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
    }),
    [reduce, ease],
  );
  const { control, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const email = watch("email");
  const register = useRegisterMutation(email);

  const handleBack = () => router.back();
  const onSubmit = (data: any) => {
    const payload = { ...data, agreeToTermAndCondition: true };
    register.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Brand / Illustration */}
        <div className="relative hidden lg:flex items-center justify-center px-14 py-16">
          {/* background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,119,0,0.14),transparent_60%),radial-gradient(55%_55%_at_70%_70%,rgba(17,24,39,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-50 to-white" />
          </div>

          <div className="relative w-full max-w-[520px]">
            {/* top brand */}
            <motion.div
              variants={hero}
              initial="hidden"
              animate="visible"
              className="absolute -top-8 left-0"
            >
              <Link
                href="/"
                aria-label="LogaDash home"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo3.png"
                  alt="LogaDash"
                  width={240}
                  height={80}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="pt-10"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Restaurants • Riders • Customers
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.12]"
              >
                Create your <span className="text-orange-600">LogaDash</span>{" "}
                account.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-base text-gray-700 leading-relaxed"
              >
                Start taking orders, tracking deliveries, and managing your
                operations in one clean dashboard.
              </motion.p>

              {/* benefit list */}
              <motion.div
                variants={item}
                className="mt-6 grid grid-cols-1 gap-3"
              >
                {[
                  "Fast onboarding for restaurants & partners",
                  "Live tracking for every order",
                  "One account for web + mobile",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-800">
                      {t}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* illustration */}
              <motion.div variants={item} className="mt-10 relative">
                <div className="absolute -inset-8 rounded-[32px] bg-orange-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-2xl backdrop-blur">
                  <Image
                    src="/chef-pizza.png"
                    alt="Restaurant team"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="relative flex px-5 py-12 sm:px-8 lg:px-14">
          {/* mobile logo */}
          <div className="lg:hidden absolute left-5 top-5 sm:left-8 sm:top-7">
            <Link href="/" aria-label="LogaDash home" className="inline-flex">
              <Image
                src="/logo3.png"
                alt="LogaDash"
                width={220}
                height={70}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
          </div>

          {/* subtle bg wash */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,119,0,0.10),transparent_55%)]" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[460px] pt-14 sm:pt-16 lg:pt-0"
          >
            {/* back */}
            <motion.button
              variants={item}
              onClick={handleBack}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-gray-900 shadow-sm backdrop-blur hover:bg-white transition"
            >
              <ArrowLeft className="h-5 w-5 text-orange-600" />
              <span className="font-semibold">Back</span>
            </motion.button>

            {/* header */}
            <motion.div variants={item} className="mt-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                Create an account
              </h1>
              <p className="mt-2 text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Log in
                </Link>
              </p>
            </motion.div>

            {/* form card */}
            <motion.div
              variants={item}
              className="mt-8 rounded-3xl border border-gray-200 bg-white/90 p-5 sm:p-6 shadow-xl shadow-orange-600/5 backdrop-blur"
            >
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

                {/* terms row (optional but “premium” feel) */}
                <div className="pt-1 text-xs text-gray-500 leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-gray-700 hover:text-gray-900 font-semibold"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-gray-700 hover:text-gray-900 font-semibold"
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                  loading={register.isPending}
                  disabled={register.isPending}
                >
                  Create Account
                </Button>
              </form>
            </motion.div>

            {/* micro footer */}
            <motion.p
              variants={item}
              className="mt-6 text-center text-xs text-gray-500"
            >
              © {new Date().getFullYear()} LogaDash. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
