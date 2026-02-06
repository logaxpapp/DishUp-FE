"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ShieldCheck, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

function cx(...c: Array<string | false | undefined | null>) {
  return c.filter(Boolean).join(" ");
}

export default function VerifyCodePage() {
  const router = useRouter();
  const reduce = useReducedMotion();

  // ---- OTP state (6 digits) ----
  const OTP_LEN = 6;
  const [digits, setDigits] = useState<string[]>(Array(OTP_LEN).fill(""));
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  // ---- resend state ----
  const RESEND_SECONDS = 45;
  const [cooldown, setCooldown] = useState(0);
  const canResend = cooldown === 0;

  const refs = useRef<Array<HTMLInputElement | null>>([]);

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

  const code = digits.join("");

  const validate = (value: string) => {
    if (!value.trim()) return "Verification code is required";
    if (value.length < OTP_LEN) return "Please enter the 6-digit code";
    if (!/^\d{6}$/.test(value)) return "Code must be 6 digits";
    return "";
  };

  // cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  // auto-clear error as user completes code
  useEffect(() => {
    if (!error) return;
    const v = validate(code);
    if (!v) setError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const focusIndex = (i: number) => refs.current[i]?.focus();

  const setAt = (i: number, val: string) => {
    setDigits((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleOtpChange = (i: number, raw: string) => {
    const v = raw.replace(/\D/g, ""); // digits only
    if (!v) {
      setAt(i, "");
      return;
    }

    // if user pasted multiple digits into one box
    if (v.length > 1) {
      const chunk = v.slice(0, OTP_LEN - i).split("");
      setDigits((prev) => {
        const next = [...prev];
        chunk.forEach((ch, idx) => {
          next[i + idx] = ch;
        });
        return next;
      });
      const nextFocus = Math.min(i + v.length, OTP_LEN - 1);
      focusIndex(nextFocus);
      return;
    }

    setAt(i, v);
    if (i < OTP_LEN - 1) focusIndex(i + 1);
  };

  const handleOtpKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (digits[i]) {
        setAt(i, "");
        return;
      }
      if (i > 0) {
        setAt(i - 1, "");
        focusIndex(i - 1);
      }
    }

    if (e.key === "ArrowLeft" && i > 0) focusIndex(i - 1);
    if (e.key === "ArrowRight" && i < OTP_LEN - 1) focusIndex(i + 1);
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text");
    const v = text.replace(/\D/g, "").slice(0, OTP_LEN);
    if (!v) return;

    e.preventDefault();
    const next = Array(OTP_LEN).fill("");
    v.split("").forEach((ch, idx) => (next[idx] = ch));
    setDigits(next);
    focusIndex(Math.min(v.length, OTP_LEN - 1));
  };

  const handleResend = async () => {
    if (!canResend) return;

    // TODO: call your API here
    // await authService.resendCode(...)
    setCooldown(RESEND_SECONDS);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    const v = validate(code);
    if (v) {
      setError(v);
      return;
    }

    router.push("/auth/set-password");
  };

  const handleBack = () => router.back();

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
                Partner authentication
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
                Verify your code.
              </h1>

              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                We sent a 6-digit verification code to your email. Enter it to continue.
              </p>

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
                Verify Code
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Enter the 6-digit code sent to your email.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 rounded-3xl border border-gray-200 bg-white/90 p-5 sm:p-6 shadow-xl shadow-orange-600/5 backdrop-blur"
            >
              {/* Hidden input fallback (keeps your Input component in the file) */}
              <div className="hidden">
                <Input name="code" label="Enter Code" type="text" placeholder="123456" />
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Enter Code</label>

                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    {digits.map((d, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          refs.current[i] = el;
                        }}
                        value={d}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={i === 0 ? OTP_LEN : 1} // allows paste handling on first field too
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        onPaste={i === 0 ? handleOtpPaste : undefined}
                        onBlur={() => {
                          if (!touched) setTouched(true);
                          const v = validate(code);
                          setError(v);
                        }}
                        className={cx(
                          "h-12 sm:h-14 w-full",
                          "rounded-2xl border bg-white text-center",
                          "text-lg sm:text-xl font-extrabold tracking-[0.22em]",
                          "outline-none transition",
                          error ? "border-red-300 ring-4 ring-red-100" : "border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100",
                        )}
                        aria-label={`Digit ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      Code length: <span className="font-semibold text-gray-700">{OTP_LEN}</span> digits
                    </p>
                    <p className="text-xs text-gray-500">
                      Entered: <span className="font-semibold text-gray-700">{code.replace(/\d/g, "•").length}</span>
                    </p>
                  </div>

                  {touched && error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}
                </div>

                {/* resend */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Didn't receive a code?</span>

                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={!canResend}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-xl px-3 py-2 font-semibold transition",
                      canResend
                        ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        : "text-gray-400 cursor-not-allowed",
                    )}
                  >
                    <RefreshCcw className="h-4 w-4" />
                    {canResend ? "Resend" : `Resend in ${cooldown}s`}
                  </button>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                >
                  Verify
                </Button>

                <p className="pt-2 text-center text-xs text-gray-500">
                  By continuing, you confirm this is your email address.
                </p>
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
