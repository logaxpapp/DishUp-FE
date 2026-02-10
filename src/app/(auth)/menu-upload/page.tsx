'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function MenuUploadPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Illustration & Description */}
      <div className="hidden lg:flex flex-col justify-center items-center p-16 bg-gradient-to-br from-orange-50 to-orange-100 relative">
        <div className="max-w-md space-y-6 w-full">
          {/* Logo at top */}
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <div className="max-w-md w-full">
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
          </div>
          
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Upload your Menu
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Upload your menu file or connect via API to auto-sync your restaurant's offerings.
          </p>
          
          {/* Phone Menu Illustration */}
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/menu-phone.png"
              alt="Menu on phone illustration"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Right Side - Upload Options */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-white relative">
        {/* Transparent Header for Mobile */}
        <div className="lg:hidden absolute top-0 left-0 w-full px-8 py-6">
          <Image 
            src="/logo.png" 
            alt="QuickFetch Logo" 
            width={180} 
            height={54}
            className="w-auto h-auto"
          />
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
              Menu Upload
            </h1>
          </div>
          
          {/* Upload Options */}
          <div className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-400 transition-colors cursor-pointer">
              <input
                type="file"
                id="menu-upload"
                className="hidden"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
              />
              <label htmlFor="menu-upload" className="cursor-pointer">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      Click to upload menu file
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Upload in .XLS/CSV
                    </p>
                  </div>
                  {selectedFile && (
                    <p className="text-sm text-orange-500 font-medium">
                      {selectedFile.name}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* OR Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* API Sync */}
            <button
              type="button"
              className="w-full border-2 border-gray-300 rounded-lg p-12 text-center hover:border-orange-400 transition-colors"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-gray-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Sync via API
                  </p>
                </div>
              </div>
            </button>

            {/* Proceed Button */}
     <Button 
  type="button"
  variant="primary" 
  size="lg" 
  className="w-full mt-6"
  onClick={() => router.push('/dashboard')}
>
  Proceed to Dashboard
</Button>

          </div>
        </div>
      </div>
    </div>
  );
}