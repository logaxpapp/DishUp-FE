"use client";

import React from "react";
import { motion } from "framer-motion";

const LogaDashFeatures = () => {
  const features = [
    {
      title: "Super-Fast Delivery",
      description:
        "Lightning-fast pickups and drop-offs across the city — your food or items arrive when you need them.",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=900&q=80",
      alt: "Fast delivery rider speeding through city streets",
    },
    {
      title: "All-in-One Convenience",
      description:
        "Order meals, send packages, schedule pickups — everything managed in one beautiful app.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
      alt: "Person using phone app for food and package delivery",
    },
    {
      title: "Reliable & Secure",
      description:
        "Live GPS tracking, verified riders, encrypted payments — peace of mind every delivery.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      alt: "Secure payment and real-time tracking on mobile",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 15, stiffness: 100 },
    },
  };

  return (
    <section className="bg-[#fffaf2] py-20 md:py-28 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-orange-500">Loga</span>Dash?
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Built for speed, simplicity, and trust — whether you're hungry, sending a package, or running a business.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image with overlay gradient */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Text content - now inside card, no negative positioning */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed drop-shadow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogaDashFeatures;