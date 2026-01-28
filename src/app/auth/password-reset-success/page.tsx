'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function PasswordResetSuccessPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Illustration & Description */}
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
              Restaurant Partner Authentication Screen
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            For your security, please verify your identity.
          </p>
          
          {/* Security Illustration */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/security-illustration.png"
              alt="Security verification illustration"
              width={400}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Right Side - Success Message */}
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
        
        <div className="w-full max-w-md space-y-8 mt-20 lg:mt-0 text-center">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Password Reset Successful!
            </h1>
            <p className="text-gray-600">
              Your previous password has been reset. Please set a new password for your account.
            </p>
          </div>
          
          {/* Success Icon */}
          <div className="flex justify-center py-8">
            <div className="relative w-32 h-32">
              {/* Orange Circle Background */}
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-orange-500 rounded-full opacity-30"></div>
              
              {/* White Circle with Checkmark */}
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg 
                  className="w-12 h-12 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Go to Login Button */}
          <Link href="/auth/login" className="block">
            <Button 
              type="button"
              variant="primary" 
              size="lg" 
              className="w-full"
            >
              Go to Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}