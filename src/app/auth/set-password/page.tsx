"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function SetPasswordPage() {
  const router = useRouter();
  const reduce = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const ease = useMemo(() => [0.22, 1, 0.36, 1] as const, []);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: reduce
        ? { opacity: 1, transition: { duration: 0.15 } }
        : { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
    }),
    [reduce],
  );

  const item = useMemo(
    () => ({
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
      visible: reduce ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    }),
    [reduce, ease],
  );

  const validatePassword = (password: string) => {
    if (!password.trim()) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return "";
  };

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword.trim()) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = "";
    if (name === "password") error = validatePassword(form.password);
    if (name === "confirmPassword") error = validateConfirmPassword(form.confirmPassword, form.password);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ password: true, confirmPassword: true });

    const newErrors: Record<string, string> = {};
    const passwordError = validatePassword(form.password);
    if (passwordError) newErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(form.confirmPassword, form.password);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    router.push("/auth/password-reset-success");
  };

  const handleBack = () => router.back();

  // simple password strength hint (optional UI polish; not blocking)
  const strength = useMemo(() => {
    const p = form.password;
    if (!p) return { label: "—", pct: 0 };
    const checks = [
      p.length >= 8,
      /[A-Z]/.test(p),
      /[0-9]/.test(p),
      /[^A-Za-z0-9]/.test(p),
    ];
    const score = checks.filter(Boolean).length;
    const pct = (score / 4) * 100;
    const label = score <= 1 ? "Weak" : score === 2 ? "Fair" : score === 3 ? "Good" : "Strong";
    return { label, pct };
  }, [form.password]);

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Brand / Security */}
        <div className="relative hidden lg:flex items-center justify-center px-14 py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-50 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,119,0,0.16),transparent_60%),radial-gradient(55%_55%_at_70%_75%,rgba(17,24,39,0.10),transparent_60%)]" />
          </div>

          <motion.div variants={container} initial="hidden" animate="visible" className="relative w-full max-w-[540px]">
            {/* logo */}
            <motion.div variants={item} className="absolute -top-8 left-0">
              <Link href="/" aria-label="LogaDash home" className="inline-flex items-center">
                <Image
                  src="/logo3.png"
                  alt="LogaDash"
                  width={240}
                  height={80}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            <motion.div variants={item} className="pt-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-orange-600" />
                Password reset verified
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
                Set a new password.
              </h1>

              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                Choose a strong password to protect your partner account. Use at least 8 characters.
              </p>

              <div className="mt-6 grid gap-3">
                {["At least 8 characters", "Add a number or symbol", "Avoid common words"].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-800">{t}</span>
                  </div>
                ))}
              </div>

              <motion.div variants={item} className="mt-10 relative">
                <div className="absolute -inset-8 rounded-[32px] bg-orange-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-2xl backdrop-blur">
                  <Image
                    src="/security-illustration.png"
                    alt="Security verification illustration"
                    width={540}
                    height={540}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Form */}
        <div className="relative flex items-center justify-center px-5 py-12 sm:px-8 lg:px-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,119,0,0.10),transparent_55%)]" />
          </div>

          {/* mobile header */}
          <div className="lg:hidden absolute left-5 top-5 sm:left-8 sm:top-7">
            <Link href="/" aria-label="LogaDash home" className="inline-flex">
              <Image
                src="/logo3.png"
                alt="LogaDash"
                width={220}
                height={70}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
          </div>

          <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-[460px] pt-14 sm:pt-16 lg:pt-0">
            {/* back */}
            <motion.button
              variants={item}
              onClick={handleBack}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-gray-900 shadow-sm backdrop-blur hover:bg-white transition"
            >
              <ArrowLeft className="h-5 w-5 text-orange-600" />
              <span className="font-semibold">Back</span>
            </motion.button>

            <motion.div variants={item} className="mt-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                Set Password
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Your previous password has been reset. Please create a new one to continue.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 rounded-3xl border border-gray-200 bg-white/90 p-5 sm:p-6 shadow-xl shadow-orange-600/5 backdrop-blur"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <Input
                    name="password"
                    label="Create Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    icon={
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="hover:text-gray-700 text-gray-500"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                      </button>
                    }
                  />
                  {touched.password && errors.password && (
                    <p className="mt-2 text-sm font-medium text-red-600">{errors.password}</p>
                  )}

                  {/* strength meter */}
                  <div className="mt-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-orange-600" />
                        <span className="font-semibold text-gray-800">Strength</span>
                      </div>
                      <span className="font-semibold text-gray-700">{strength.label}</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-orange-600 transition-all"
                        style={{ width: `${strength.pct}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      Tip: Add an uppercase letter, a number, and a symbol for a stronger password.
                    </p>
                  </div>
                </div>

                <div>
                  <Input
                    name="confirmPassword"
                    label="Re-enter Password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    icon={
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((v) => !v)}
                        className="hover:text-gray-700 text-gray-500"
                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      >
                        {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                      </button>
                    }
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="mt-2 text-sm font-medium text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                >
                  Set Password
                </Button>
              </form>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} LogaDash. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
