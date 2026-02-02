'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isPromotionsOpen, setIsPromotionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Auto-expand Promotions if we're on a promotions page
    if (pathname.startsWith('/dashboard/promotions')) {
      setIsPromotionsOpen(true);
    }
  }, [pathname]);

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      iconPath: '/dashboard.png',
      hasDropdown: false,
    },
    {
      name: 'Orders',
      href: '/dashboard/orders',
      iconPath: '/orders.png',
      hasDropdown: false,
    },
    {
      name: 'Menu',
      href: '/dashboard/menu',
      iconPath: '/menu.png',
      hasDropdown: false,
    },
    {
      name: 'Pricing',
      href: '/dashboard/pricing',
      iconPath: '/pricing.png',
      hasDropdown: false,
    },
    {
      name: 'Inventory',
      href: '/dashboard/inventory',
      iconPath: '/inventory.png',
      hasDropdown: false,
    },
    {
      name: 'Promotions',
      href: '/dashboard/promotions',
      iconPath: '/promotions.png',
      hasDropdown: true,
      subItems: [
        { name: 'Coupons', href: '/dashboard/promotions/coupons' },
        { name: 'Sponsored Listing', href: '/dashboard/promotions/sponsored' },
      ],
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      iconPath: '/trending-up.png',
      hasDropdown: false,
    },
    {
      name: 'Payouts',
      href: '/dashboard/payouts',
      iconPath: '/pricing.png',
      hasDropdown: false,
    },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="flex min-h-screen bg-orange-50/30">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-50 to-orange-100 border-r border-orange-200 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <Image
            src="/logo.png"
            alt="QickFetch Logo"
            width={150}
            height={45}
            className="w-auto h-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsPromotionsOpen(!isPromotionsOpen)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-orange-200/50'
                      }`}
                    >
                      <Image
                        src={item.iconPath}
                        alt={`${item.name} icon`}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="font-medium">{item.name}</span>
                      <svg
                        className={`w-4 h-4 ml-auto transition-transform ${
                          isPromotionsOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isPromotionsOpen && item.subItems && (
                      <ul className="mt-2 ml-9 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                pathname === subItem.href
                                  ? 'bg-orange-400 text-white'
                                  : 'text-gray-700 hover:bg-orange-200/50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-orange-200/50'
                    }`}
                  >
                    <Image
                      src={item.iconPath}
                      alt={`${item.name} icon`}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Help Section */}
        <div className="p-4 m-4 bg-orange-500 rounded-2xl text-white">
          <div className="relative w-32 h-32 mx-auto mb-4 -mt-12">
            <Image
              src="/plate.png"
              alt="Need Help?"
              width={128}
              height={128}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="font-semibold text-center mb-2">Need Help?</h3>
          <p className="text-sm text-center mb-4 text-orange-100">Contact Support</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}