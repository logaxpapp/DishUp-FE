"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";  
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function WelcomePage() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const { token, user, isProfileCompleted } = useAppSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (token && isProfileCompleted) {
      router.push("/business-details");
      return;
    }

    if (token && isProfileCompleted) {
      router.push("/dashboard");
    }
  }, [token, isProfileCompleted, router]);

  const ease = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduce
        ? { duration: 0.2 }
        : { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    visible: reduce
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  // brand entrance (logo + subtle pop)
  const brand = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 },
    visible: reduce
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease },
        },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative isolate flex items-center justify-center px-5 py-14 sm:px-8 lg:px-14 lg:py-0">
          {/* subtle background wash */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_35%_25%,rgba(255,119,0,0.10),transparent_60%),radial-gradient(55%_55%_at_70%_65%,rgba(17,24,39,0.06),transparent_60%)]" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          </div>

          {/* LOGO (pixel-perfect placement) */}
          <motion.div
            variants={brand}
            initial="hidden"
            animate="visible"
            className="absolute left-5 top-5 sm:left-8 sm:top-7 lg:left-14 lg:top-10"
          >
            <Link
              href="/home"
              aria-label="Go to LogaDash homepage"
              className="inline-flex"
            >
              <Image
                src="/logo3.png"
                alt="LogaDash Logo"
                width={220}
                height={70}
                className="h-10 w-auto sm:h-18 lg:h-24"
                priority
              />
            </Link>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="w-full max-w-[520px]"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {/* badge */}
            <motion.div variants={item} className="mt-14 sm:mt-16 lg:mt-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-800 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Restaurants • Riders • Customers
              </div>
            </motion.div>

            {/* headlines */}
            <motion.div variants={item} className="mt-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.08]">
                Welcome to
              </h1>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02]">
                <span className="text-orange-600">Loga</span>
                <span className="text-gray-950">Dash</span>
              </h2>

              {/* micro underline accent */}
              <div className="mt-4 h-[3px] w-14 rounded-full bg-orange-500/80" />
            </motion.div>

            {/* copy */}
            <motion.p
              variants={item}
              className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-prose"
            >
              The all-in-one platform for restaurants, riders, and customers.
              Manage orders, grow your business, and deliver happiness — faster
              and smarter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/signup" className="sm:flex-1">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/login" className="sm:flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-2xl border-2 border-gray-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900"
                >
                  Already have an account? Login
                </Button>
              </Link>
            </motion.div>

            {/* trust row */}
            <motion.div
              variants={item}
              className="mt-9 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm text-gray-600"
            >
              <div className="inline-flex items-center gap-2">
                <span className="text-orange-500">★</span>
                <span className="font-medium">Trusted by 500+ restaurants</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-orange-500">⚡</span>
                <span className="font-medium">Average 25-min delivery</span>
              </div>
            </motion.div>

            {/* subtle bottom spacing so it never feels cramped on short screens */}
            <div className="h-10 sm:h-12" />
          </motion.div>
        </div>

        {/* RIGHT (desktop only) */}
        <div className="relative hidden lg:block overflow-hidden">
          <Image
            src="/restaurant-team.png"
            alt="Happy restaurant team using LogaDash"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-black/10" />

          {/* badge */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={
              reduce ? { duration: 0.1 } : { duration: 0.7, ease, delay: 0.35 }
            }
            className="absolute bottom-10 right-10 rounded-2xl bg-white/90 backdrop-blur-md px-6 py-4 shadow-xl border border-white/30"
          >
            <p className="text-sm font-semibold text-gray-900">
              Join 500+ growing partners
            </p>
            <p className="text-xs text-gray-600 mt-1">Today • Free to start</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

