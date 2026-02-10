"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

function cx(...c: Array<string | false | undefined | null>) {
  return c.filter(Boolean).join(" ");
}

type FooterLink = { label: string; href: string; external?: boolean };
type Social = { name: string; href: string; Icon: React.ElementType };

const socials: Social[] = [
  { name: "X", href: "https://x.com/logadash", Icon: Twitter },
  { name: "Instagram", href: "#", Icon: Instagram },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
];

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Download App", href: "#download" },
  { label: "Why LogaDash", href: "#why-logadash" },
  { label: "FAQ", href: "#faq" },
];

const partnerLinks: FooterLink[] = [
  { label: "Restaurants", href: "/partners/restaurants" },
  { label: "Couriers / Riders", href: "/partners/couriers" },
  { label: "Become a Partner", href: "/become-partner" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");

  const ease = useMemo(() => [0.22, 1, 0.36, 1] as const, []);
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: reduce
        ? { opacity: 1, transition: { duration: 0.15 } }
        : { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
    }),
    [reduce]
  );

  const item = useMemo(
    () => ({
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
      visible: reduce ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    }),
    [reduce, ease]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your backend or email provider later
    // for now, keep it non-breaking
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gray-900/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(249,115,22,0.10),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Top section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="py-14 sm:py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Brand */}
            <motion.div variants={item} className="lg:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2 select-none" aria-label="LogaDash home">
                <span className="text-3xl sm:text-4xl font-black tracking-tight">
                  <span className="text-orange-600">Loga</span>
                  <span className="text-gray-900">Dash</span>
                </span>
              </Link>

              <p className="mt-5 max-w-md text-gray-600 leading-relaxed">
                The all-in-one platform for restaurants, riders, and customers. Manage orders, grow your business, and
                deliver joy — faster and smarter.
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`Follow us on ${name}`}
                    whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className={cx(
                      "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                      "border border-gray-200 bg-white/70 backdrop-blur",
                      "text-gray-700 shadow-sm hover:shadow-md transition"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>

              {/* Micro trust strip */}
              <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-700 shadow-sm backdrop-blur">
                <span className="font-semibold">Built by LogaXP</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>Secure</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>Fast onboarding</span>
              </div>
            </motion.div>

            {/* Link columns */}
            <motion.div variants={item} className="lg:col-span-2">
              <h4 className="text-sm font-bold tracking-wide text-gray-900">Quick Links</h4>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLinkItem {...l} />
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="lg:col-span-2">
              <h4 className="text-sm font-bold tracking-wide text-gray-900">Partner With Us</h4>
              <ul className="mt-5 space-y-3">
                {partnerLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLinkItem {...l} />
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact + newsletter */}
            <motion.div variants={item} className="lg:col-span-3">
              <h4 className="text-sm font-bold tracking-wide text-gray-900">Get in Touch</h4>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+2347898758939"
                  className="group inline-flex items-center gap-3 text-gray-600 hover:text-orange-600 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">+234 789 875 8939</span>
                </a>

                <a
                  href="mailto:support@logadash.com"
                  className="group inline-flex items-center gap-3 text-gray-600 hover:text-orange-600 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">support@logadash.com</span>
                </a>

                <div className="inline-flex items-center gap-3 text-gray-600">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">Nashville • Lagos • Remote</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-900">Stay updated</p>
                <p className="mt-1 text-sm text-gray-600">Product updates, partner tips, and offers.</p>

                <form onSubmit={onSubmit} className="mt-4">
                  <div
                    className={cx(
                      "flex flex-col gap-2 sm:flex-row sm:items-center",
                      "rounded-2xl border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur"
                    )}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className={cx(
                        "w-full flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400",
                        "outline-none"
                      )}
                      aria-label="Email for newsletter"
                      required
                    />
                    <button
                      type="submit"
                      className={cx(
                        "inline-flex items-center justify-center gap-2 rounded-2xl",
                        "bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white",
                        "shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition"
                      )}
                    >
                      <Send className="h-4 w-4" />
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div variants={item} className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-600">
                © {currentYear} <span className="font-semibold text-gray-900">LogaDash</span>. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm">
                {legalLinks.map((l) => (
                  <FooterLinkItem key={l.label} {...l} />
                ))}

                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 text-gray-700 shadow-sm hover:shadow-md hover:text-orange-600 transition"
                  aria-label="Back to top"
                >
                  Back to top <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLinkItem({ label, href, external }: FooterLink) {
  const isExternal = external ?? href.startsWith("http");
  const Comp: any = isExternal ? "a" : Link;

  return (
    <Comp
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "group inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition",
        "text-sm font-medium"
      )}
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight className="h-4 w-4 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
    </Comp>
  );
}
