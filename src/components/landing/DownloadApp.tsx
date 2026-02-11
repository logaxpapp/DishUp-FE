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

            {/* Store Buttons – distinct styles per platform */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">

              {/* Google Play – dark with subtle Google-color shimmer */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.LogaDash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -5 }}
                whileTap={{ scale: 0.97 }}
                variants={itemVariants}
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}
                className="relative inline-flex items-center gap-4 bg-gray-950 text-white rounded-2xl px-6 py-4 transition-all duration-300 min-w-[230px] overflow-hidden group"
              >
                {/* Rainbow shimmer on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#EA4335]/20 via-[#FBBC05]/20 to-[#34A853]/20 pointer-events-none rounded-2xl" />
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain relative z-10 flex-shrink-0"
                />
                <div className="text-left relative z-10">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-0.5">
                    Get it on
                  </div>
                  <div className="text-[19px] font-bold tracking-tight leading-none">Google Play</div>
                </div>
              </motion.a>

              {/* App Store – clean white card so black Apple logo is fully visible */}
              <motion.a
                href="https://apps.apple.com/app/LogaDash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -5 }}
                whileTap={{ scale: 0.97 }}
                variants={itemVariants}
                style={{ boxShadow: "0 8px 32px rgba(251,146,60,0.18), 0 2px 8px rgba(0,0,0,0.08)" }}
                className="relative inline-flex items-center gap-4 bg-white text-gray-900 rounded-2xl px-6 py-4 border border-orange-100 transition-all duration-300 min-w-[230px] overflow-hidden group"
              >
                {/* Warm orange glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-50 to-amber-50 pointer-events-none rounded-2xl" />
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain relative z-10 flex-shrink-0"
                />
                <div className="text-left relative z-10">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-0.5">
                    Download on the
                  </div>
                  <div className="text-[19px] font-bold tracking-tight leading-none">App Store</div>
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
                  src="/qr-code-placeholder.png"
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