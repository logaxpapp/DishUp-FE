'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to login page after account creation
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Image & Description */}
      <div className="hidden lg:flex flex-col justify-center items-center p-16 bg-gradient-to-br from-orange-50 to-orange-100 relative">
        <div className="max-w-md space-y-6 w-full">
          {/* Logo at top */}
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <div className="max-w-md w-full">
              <Image 
                src="/logo.png" 
                alt="QuickFetch Logo" 
                width={180} 
                height={54}
                className="w-auto h-auto"
              />
            </div>
          </div>
          
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Create your <span className="text-orange-500">Quick</span>Fetch Account.
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Start your personalized fitness journey. It only takes a minute to build a plan tailored just for you.
          </p>
          
          {/* Chef Image */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/chef-pizza.png"
              alt="Chef with pizza"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-white relative">
        {/* Transparent Header for Mobile */}
        <div className="lg:hidden absolute top-0 left-0 w-full px-8 py-6">
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
        
        <div className="w-full max-w-md space-y-8 mt-20 lg:mt-0">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium text-lg"
            type="button"
          >
            <ArrowLeft size={24} />
            <span>Back</span>
          </button>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Create an account
            </h1>
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-orange-500 hover:text-orange-600 font-medium">
                Log in
              </Link>
            </p>
          </div>
          
          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="Restaurant Name"
              type="text"
              placeholder="Mama Dee"
              required
            />
            
            <Input
              label="Full Name"
              type="text"
              placeholder="Owners Name"
              required
            />
            
            <Input
              label="Email address"
              type="email"
              placeholder="your@email.com"
              required
            />
            
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+234 800 000 0000"
              required
            />
            
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              }
            />
            
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              icon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              }
            />
            
            <Button 
              type="submit"
              variant="primary" 
              size="lg" 
              className="w-full mt-6"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}