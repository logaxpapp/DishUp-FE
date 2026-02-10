"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // or your preferred router

const RoleSelectionPage = () => {
  const router = useRouter();

  const roles = [
    {
      title: "Customer",
      description: "Order food, send packages, track deliveries",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      alt: "Happy customer receiving food delivery at doorstep",
      path: "/signup/customer",
    },
    {
      title: "RIDER",
      description: "Deliver orders and earn money flexibly",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=900&q=80",
      alt: "Delivery rider on scooter with food package",
      path: "/signup/rider",
    },
    {
      title: "Restaurant Partner",
      description: "List your menu and receive more orders",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80",
      alt: "Restaurant chef preparing fresh meals",
      path: "/signup/restaurant",
    },
    {
      title: "Admin Partner",
      description: "Manage platform, users and operations",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80", // more admin-appropriate image
      alt: "Admin working on dashboard with analytics",
      path: "/signup/admin",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] flex items-center justify-center px-5 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3"
          >
            Who are you?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Choose your role to get started with the right experience.
          </motion.p>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {roles.map((role) => (
            <motion.button
              key={role.title}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(role.path)}
              className="group relative bg-[#fffaf2] rounded-[28px] focus:outline-none focus:ring-4 focus:ring-orange-500/40 text-left w-full"
            >
              {/* Image container */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] sm:aspect-[5/6]">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Role tag */}
                <div className="absolute top-5 left-5">
                  <span className="px-5 py-2 rounded-full text-sm font-medium text-gray-900 bg-white/90 backdrop-blur-md shadow-sm">
                    {role.title}
                  </span>
                </div>
              </div>

              {/* Arrow cutout - kept your style but smoother */}
              <div className="absolute -bottom-6 right-6 bg-[#fffaf2] p-1.5 rounded-full shadow-md">
                <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 bg-white group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Description overlay - appears on hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium drop-shadow-md bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl">
                  {role.description}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;