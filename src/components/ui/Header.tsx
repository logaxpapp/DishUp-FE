// components/Header.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
  className?: string;
}

export default function Header({ transparent = false, className = '' }: HeaderProps) {
  return (
    <header 
      className={`w-full py-6 px-8 ${
        transparent ? 'bg-transparent' : 'bg-white'
      } ${className}`}
    >
      <Link href="/" className="inline-block">
        <Image 
          src="/logo.png" 
          alt="QuickFetch Logo" 
          width={180} 
          height={54}
          className="w-auto h-auto"
        />
      </Link>
    </header>
  );
}