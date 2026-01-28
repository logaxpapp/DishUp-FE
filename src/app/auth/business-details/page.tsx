'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { FileUpload } from '@/components/ui/FileUpload';
import { Input } from '@/components/ui/input';

export default function BusinessDetailsPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    businessName: '',
    registrationNo: '',
    city: '',
    phone: '',
    taxId: '',
  });

  const [businessLicense, setBusinessLicense] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isFormValid =
    Object.values(form).every(Boolean) && businessLicense;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, form[name as keyof typeof form]);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    if (!value.trim()) {
      const fieldLabels: Record<string, string> = {
        businessName: 'Business name',
        registrationNo: 'Registration number',
        city: 'City',
        phone: 'Business phone number',
        taxId: 'Tax ID',
      };
      error = `${fieldLabels[name]} is required`;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(form).reduce((acc, key) => ({
      ...acc,
      [key]: true,
    }), { businessLicense: true });
    setTouched(allTouched);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    
    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    // Validate file upload
    if (!businessLicense) {
      newErrors.businessLicense = 'Business license is required';
    }

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Form is valid, proceed
    router.push('/auth/payout-setup');
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
              Tell Us About your Business
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Provide accurate details to verify your business.
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
          <Image 
            src="/logo.png" 
            alt="QuickFetch Logo" 
            width={180} 
            height={54}
            className="w-auto h-auto"
          />
        </div>
        
        <div className="w-full max-w-md space-y-8 mt-20 lg:mt-0">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Business Details
            </h1>
          </div>
          
          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Input
                name="businessName"
                label="Business"
                placeholder="Mama Dee"
                value={form.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.businessName && errors.businessName && (
                <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
              )}
            </div>

            <div>
              <Input
                name="registrationNo"
                label="Registration No."
                placeholder="Owners Name"
                value={form.registrationNo}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.registrationNo && errors.registrationNo && (
                <p className="text-red-500 text-sm mt-1">{errors.registrationNo}</p>
              )}
            </div>

            <div>
              <Input
                name="city"
                label="City"
                placeholder="Enter city"
                value={form.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.city && errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <div>
              <Input
                name="phone"
                label="Business Phone Number"
                placeholder="+234 800 000 0000"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <Input
                name="taxId"
                label="Tax ID"
                placeholder="Enter tax ID"
                value={form.taxId}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.taxId && errors.taxId && (
                <p className="text-red-500 text-sm mt-1">{errors.taxId}</p>
              )}
            </div>

            <div>
              <FileUpload
                label="Upload Business License"
                accept="image/jpeg,image/png"
                onChange={setBusinessLicense}
              />
              {touched.businessLicense && errors.businessLicense && (
                <p className="text-red-500 text-sm mt-1">{errors.businessLicense}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}