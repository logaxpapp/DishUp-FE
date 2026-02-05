"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const headerStyle = scrolled
    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/80"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerStyle}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-orange-600">Loga</span>
              <span className="text-gray-950">Dash</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="/auth/login">Login</NavLink>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Become a Partner
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700 transition-colors"
            >
              Download App
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-3.5 py-2.5 text-gray-800 shadow-sm hover:bg-gray-50 transition"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay + Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              ref={panelRef}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 top-16 sm:top-20 z-50 px-4 sm:px-6 md:hidden"
            >
              <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="divide-y divide-gray-100">
                  <div className="p-4 space-y-2">
                    <MobileNavItem href="#features" onClose={() => setMobileOpen(false)}>
                      Features
                    </MobileNavItem>
                    <MobileNavItem href="#how-it-works" onClose={() => setMobileOpen(false)}>
                      How It Works
                    </MobileNavItem>
                    <MobileNavItem href="/auth/login" onClose={() => setMobileOpen(false)}>
                      Login
                    </MobileNavItem>
                  </div>

                  <div className="p-5 space-y-4">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full rounded-xl bg-orange-600 py-4 text-base font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
                    >
                      Download App
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full rounded-xl border border-gray-200 bg-white py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      Become a Partner
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ────────────────────────────────────────────── */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-gray-800 transition-colors hover:text-orange-600 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

/* ────────────────────────────────────────────── */

function MobileNavItem({
  href,
  children,
  onClose,
}: {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="flex items-center justify-between rounded-xl px-5 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors"
    >
      {children}
      <span className="text-gray-400">→</span>
    </Link>
  );
}