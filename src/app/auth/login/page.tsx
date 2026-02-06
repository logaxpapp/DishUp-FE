"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [showPassword, setShowPassword] = useState(false);

  const ease = useMemo(() => [0.22, 1, 0.36, 1] as const, []);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: reduce
        ? { opacity: 1, transition: { duration: 0.15 } }
        : { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/business-details");
  };

  const handleBack = () => router.back();

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
            <motion.div variants={hero} initial="hidden" animate="visible" className="absolute -top-8 left-0">
              <Link href="/" aria-label="LogaDash home" className="inline-flex items-center">
                <Image
                  src="/logo3.png"
                  alt="LogaDash"
                  width={240}
                  height={80}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="visible" className="pt-10">
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Partner portal • Kitchen • Ops
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.12]"
              >
                Kitchen login for <span className="text-orange-600">LogaDash</span>.
              </motion.h1>

              <motion.p variants={item} className="mt-4 text-base text-gray-700 leading-relaxed">
                Sign in to manage orders, confirm preparation, and keep deliveries moving.
              </motion.p>

              {/* mini benefits */}
              <motion.div variants={item} className="mt-6 grid grid-cols-1 gap-3">
                {["See new orders instantly", "Track rider assignment", "Reduce prep-to-door time"].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-800">{t}</span>
                  </div>
                ))}
              </motion.div>

              {/* illustration */}
              <motion.div variants={item} className="mt-10 relative">
                <div className="absolute -inset-8 rounded-[32px] bg-orange-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-2xl backdrop-blur">
                  <Image
                    src="/chef-pizza.png"
                    alt="Chef preparing an order"
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
        <div className="relative flex items-center justify-center px-5 py-12 sm:px-8 lg:px-14">
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

          <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-[460px] pt-14 sm:pt-16 lg:pt-0">
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
                Login
              </h1>
              <p className="mt-2 text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Create one
                </Link>
              </p>
            </motion.div>

            {/* form card */}
            <motion.div
              variants={item}
              className="mt-8 rounded-3xl border border-gray-200 bg-white/90 p-5 sm:p-6 shadow-xl shadow-orange-600/5 backdrop-blur"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input label="Email address" type="email" placeholder="your@email.com" required />

                <div className="space-y-2">
                  <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    icon={
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="text-gray-400 hover:text-gray-600 transition"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeIconOpen /> : <EyeIconClosed />}
                      </button>
                    }
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Use your partner email</span>
                    <Link href="/auth/forgot-password" className="text-sm text-gray-600 hover:text-orange-600 font-semibold">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                >
                  Login
                </Button>
              </form>
            </motion.div>

            {/* micro footer */}
            <motion.p variants={item} className="mt-6 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} LogaDash. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ tiny icons (no dependency) ------------------ */

function EyeIconOpen() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function EyeIconClosed() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );
}
