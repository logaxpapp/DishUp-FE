"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const roles = [
    {
      title: "Restaurant",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
      alt: "Restaurant chef preparing food",
      steps: [
        "Sign up & list your menu/items",
        "Receive and manage incoming orders",
        "Track deliveries in real time",
      ],
    },
    {
      title: "Customer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      alt: "Customer browsing menu on phone",
      steps: [
        "Choose your favorite restaurant",
        "Place order & watch real-time updates",
        "Track delivery or send items too",
      ],
    },
    {
      title: "Rider",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
      alt: "Delivery rider on scooter with package",
      steps: [
        "Get instant alerts for nearby orders",
        "Accept & view customer details",
        "Follow in-app map for smooth drop-off",
      ],
    },
    {
      title: "Admin",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      alt: "Admin dashboard on computer",
      steps: [
        "Oversee restaurants, riders & customers",
        "Monitor orders, revenue & ratings",
        "Ensure smooth platform operations",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 15, stiffness: 100 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            LogaDash simplifies everyday needs — from ordering food to sending packages — with seamless tools for everyone involved.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  {role.title}
                </h3>

                <ol className="space-y-4 text-gray-700">
                  {role.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center text-sm mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;