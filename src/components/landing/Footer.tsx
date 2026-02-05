"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // assuming Next.js — use <a> if not

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "https://x.com/quickfetch" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "Facebook", icon: "f", href: "#" },
  { name: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    rest: { color: "#4B5563" },
    hover: { color: "#F97316", x: 4, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-extrabold">
                <span className="text-orange-600">Quick</span>
                <span className="text-gray-900">Fetch</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Fast, reliable delivery of food, packages, and more — right to your door, anytime.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "How it Works", href: "#how-it-works" },
                { label: "Download App", href: "#download" },
                { label: "Why QuickFetch", href: "#why-quickfetch" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <motion.li key={link.label} variants={linkVariants} initial="rest" whileHover="hover">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Partner With Us */}
          <div>
            <h4 className="text-gray-900 font-semibold text-lg mb-5">Partner With Us</h4>
            <ul className="space-y-3">
              {[
                { label: "Restaurants", href: "/partners/restaurants" },
                { label: "Couriers / Riders", href: "/partners/couriers" },
                { label: "Become a Partner", href: "/become-partner" },
              ].map((link) => (
                <motion.li key={link.label} variants={linkVariants} initial="rest" whileHover="hover">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold text-lg mb-5">Get in Touch</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="tel:+2347898758939"
                  className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
                >
                  +234 789 875 8939
                </a>
              </li>
              <li>
                <a
                  href="mailto:quickfetch@gmail.com"
                  className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
                >
                  quickfetch@gmail.com
                </a>
              </li>
            </ul>

            {/* Simple Newsletter Signup */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Stay updated with offers</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40 text-sm w-full"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition-colors whitespace-nowrap text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} QuickFetch. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}