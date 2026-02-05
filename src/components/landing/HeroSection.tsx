"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function HeroSection() {
  const status = useRotatingStatus([
    {
      title: "Live Delivery",
      line: "🚗 Rider is picking up your order",
      progress: 42,
      left: "Order placed",
      right: "Rider assigned",
    },
    {
      title: "Live Delivery",
      line: "🚗 Rider is 6 mins away",
      progress: 66,
      left: "Picked up",
      right: "On the way",
    },
    {
      title: "Live Delivery",
      line: "🚗 On the way to you",
      progress: 78,
      left: "In transit",
      right: "Arriving soon",
    },
    {
      title: "Live Delivery",
      line: "🚗 Arriving in 2 mins",
      progress: 92,
      left: "Almost there",
      right: "At your door",
    },
  ]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 16, stiffness: 110 },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 14, stiffness: 160 },
    },
  };

  return (
    <section className="relative overflow-x-hidden bg-gradient-to-b from-[#FFFCF7] to-[#FFF8F0] pb-20 lg:pb-28">
      {/* Subtle top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-22 pt-20 lg:pt-24">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* LEFT – Text Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-orange-200/80 bg-white/80 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-gray-800 shadow-sm"
            >
              <span className="size-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span>Fast • Live • Reliable</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-gray-950"
            >
              Delivery made{" "}
              <span className="relative inline-block text-orange-600">
                fast
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-orange-500/20 rounded-full -z-10" />
              </span>
              ,{" "}
              <span className="text-orange-600">simple</span>, and{" "}
              <span className="text-orange-600">reliable</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl"
            >
              Order food, send packages, track every step — LogaDash delivers speed and trust for customers and restaurants alike.
            </motion.p>

            {/* Pills */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2.5">
              {["Real-time Tracking", "Verified Riders", "Restaurant Tools"].map((text, i) => (
                <motion.div key={text} variants={pillVariants} custom={i}>
                  <Pill>{text}</Pill>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex-1 sm:flex-none rounded-2xl bg-orange-600 px-8 py-4.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-700 transition-colors"
              >
                Download App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex-1 sm:flex-none rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Become a Partner
              </motion.button>
            </motion.div>

            {/* Mobile Live Status Card */}
            <div className="mt-10 md:hidden">
              <LiveCard status={status} />
            </div>
          </div>

          {/* RIGHT – Visual */}
          <div className="relative hidden md:block">
            <div className="relative flex justify-end">
              {/* Main rider image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  scale: 1.04, 
                  rotate: 1.5, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <img
                  src="/rider.png"
                  alt="Delivery rider in action"
                  className="w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[560px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
                />
              </motion.div>

              {/* Small info badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute top-8 right-8 hidden lg:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 px-5 py-3 shadow-md"
              >
                <span className="text-2xl">🍔</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Meals • Packages • Pickup</p>
                  <p className="text-xs text-gray-600">Fast & tracked delivery</p>
                </div>
              </motion.div>

              {/* Live status card – desktop */}
              <div className="absolute bottom-10 right-6 hidden lg:block w-[320px]">
                <LiveCard status={status} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gray-200/70 bg-white/90 backdrop-blur-sm px-5 py-2 text-sm font-medium text-gray-800 shadow-sm">
      {children}
    </span>
  );
}

// ──────────────────────────────────────────────

type Status = {
  title: string;
  line: string;
  progress: number;
  left: string;
  right: string;
};

function LiveCard({ status }: { status: Status }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={status.progress}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.95 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden"
      >
        <div className="px-6 pt-5 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {status.title}
            </span>
            <span className="flex items-center gap-2 text-xs font-medium text-gray-700">
              <span className="size-2.5 rounded-full bg-orange-500 animate-pulse" />
              Live
            </span>
          </div>

          <p className="mt-3 text-base font-semibold text-gray-900 leading-tight">
            {status.line}
          </p>

          <div className="mt-5 h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${status.progress}%` }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>

          <div className="mt-4 flex justify-between text-xs text-gray-600 font-medium">
            <span>{status.left}</span>
            <span>{status.right}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ──────────────────────────────────────────────

function useRotatingStatus(items: Status[], intervalMs = 3200) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeItems.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [safeItems.length, intervalMs]);

  return safeItems[index] ?? items[0];
}