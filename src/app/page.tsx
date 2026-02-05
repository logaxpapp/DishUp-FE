"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const { token, user, isProfileCompleted } = useAppSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (token && isProfileCompleted) {
      router.push("/business-details");
      return;
    }

    if (token && isProfileCompleted) {
      router.push("/dashboard");
    }
  }, [token, isProfileCompleted, router]);
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Content */}
      <div className="relative flex items-center justify-center p-8 lg:p-16 bg-white">
        {/* Logo */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-md">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="QuickFetch Logo"
              width={200}
              height={60}
              className="w-auto h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Centered Content */}
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-orange-500">Quick</span>
              <span className="text-gray-900">Fetch</span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Join a growing network of local food businesses managing orders and
            customer experience all in one place.
          </p>

          <Link href="/signup">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative">
        <Image
          src="/restaurant-team.png"
          alt="Restaurant team collaborating"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
