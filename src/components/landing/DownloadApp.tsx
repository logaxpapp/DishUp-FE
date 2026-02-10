"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DownloadApp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, damping: 14, stiffness: 90 },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 80, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 80, delay: 0.3 },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F5E6D3] to-[#FFE8D0] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          {/* Phone Mockups – stacked & floating */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px]">
              {/* Main phone – bigger & centered */}
              <motion.div
                variants={phoneVariants}
                whileHover={{ y: -12, rotate: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-20 drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="relative rounded-[3rem] overflow-hidden border-8 border-gray-900/80 bg-gray-900 shadow-2xl">
                  <Image
                    src="/phone-mockup.png"
                    alt="LogaDash mobile app on iPhone"
                    width={500}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating secondary phone – tilted */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: 40, rotate: 12 }}
                animate={{ opacity: 0.9, x: -20, y: 20, rotate: 8 }}
                transition={{ delay: 0.7, duration: 1.4, type: "spring" }}
                className="absolute top-[-15%] left-[-20%] w-[70%] z-10 hidden md:block pointer-events-none"
              >
                <div className="rounded-[3rem] overflow-hidden border-8 border-gray-900/60 bg-gray-900 shadow-2xl transform rotate-6">
                  <Image
                    src="/phone-mockup.png"
                    alt=""
                    width={500}
                    height={1000}
                    className="w-full h-auto object-cover opacity-90 blur-[1px]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content – bigger headline & better spacing */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 md:mb-10 tracking-tight">
              Download the{" "}
              <span className="relative inline-block">
                <span className="text-orange-600 font-extrabold">LogaDash</span>
                <span className="absolute -bottom-3 left-0 w-full h-5 bg-orange-500/25 rounded-full -z-10" />
              </span>{" "}
              App
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience lightning-fast delivery, live tracking, exclusive deals, and more — all in one powerful app.
            </p>

            {/* Store Buttons – premium style */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center lg:items-start">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.LogaDash" // ← replace with real link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                className="inline-flex items-center gap-4 bg-black text-white rounded-2xl px-7 py-5 shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[260px] group"
              >
                <Image
                  src="/google-play.png"
                  alt="Google Play Badge"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div className="text-left">
                  <div className="text-sm opacity-80">GET IT ON</div>
                  <div className="text-2xl font-bold tracking-tight">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                href="https://apps.apple.com/app/LogaDash" // ← replace with real link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                className="inline-flex items-center gap-4 bg-black text-white rounded-2xl px-7 py-5 shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[260px] group"
              >
                <Image
                  src="/app-store.png"
                  alt="App Store Badge"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div className="text-left">
                  <div className="text-sm opacity-80">Download on the</div>
                  <div className="text-2xl font-bold tracking-tight">App Store</div>
                </div>
              </motion.a>
            </div>

            {/* QR Code – modern & clean */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col items-center lg:items-start gap-5"
            >
              <p className="text-base font-medium text-gray-700">Scan to download instantly</p>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-200/50">
                <Image
                  src="/qr-code-placeholder.png" // ← replace with real QR
                  alt="LogaDash app QR code"
                  width={160}
                  height={160}
                  className="w-40 h-40 md:w-44 md:h-44"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}