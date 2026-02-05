'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdShoppingCart, 
  MdPayment, 
  MdGavel,
  MdAnalytics,
  MdSettings,
  MdPeople,
  MdAdminPanelSettings,
  MdKeyboardArrowDown
} from 'react-icons/md';

interface SubItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDropdown: boolean;
  subItems?: SubItem[];
}
 


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

  const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: MdDashboard,
      hasDropdown: false,
    },
    {
      name: 'Orders',
      href: '/admin/ordermanagement',
      icon: MdShoppingCart,
      hasDropdown: false,
    },
    {
      name: 'Payment',
      href: '/admin/paymentmanagement',
      icon: MdPayment,
      hasDropdown: false,
    },
    {
      name: 'Disputes',
      href: '/admin/disputeresolution',
      icon: MdGavel,
      hasDropdown: false,
    },
    {
      name: 'SLA Analytics',
      href: '/admin/slaanalytics',
      icon: MdAnalytics,
      hasDropdown: false,
    },
    {
      name: 'Global Config.',
      href: '/admin/globalsettings',
      icon: MdSettings,
      hasDropdown: false,
    },
    {
      name: 'User Management',
      href: '/admin/usermanagement',
      icon: MdPeople,
      hasDropdown: false,
    },
    {
      name: 'Sub-admins',
      href: '/admin/subregionaladmin',
      icon: MdAdminPanelSettings,
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
      {/* Sidebar - Exact Figma Specs: width 289px, Fixed position */}
      <aside className="w-[289px] h-screen fixed left-0 top-0 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-200/50 flex flex-col">
       {/* Logo */}
<div className="px-6 py-8 flex-shrink-0">
  <Link href="/" className="flex items-center gap-1 cursor-pointer">
    <span className="text-3xl font-bold text-orange-500">Qick</span>
    <span className="text-3xl font-bold text-gray-800">Fetch</span>
  </Link>
</div>


        {/* Navigation - Figma Specs: text color #8E98A8, font-size 20px, line-height 100% */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsPromotionsOpen(!isPromotionsOpen)}
                      className="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:bg-orange-200/40 text-[#8E98A8]"
                      style={{ fontFamily: 'Urbanist', fontSize: '20px', lineHeight: '100%', fontWeight: 400 }}
                    >
                      <item.icon className={`w-6 h-6 ${isActive(item.href) ? 'text-orange-500' : ''}`} />
                      <span>{item.name}</span>
                      <MdKeyboardArrowDown
                        className={`w-5 h-5 ml-auto transition-transform ${
                          isPromotionsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isPromotionsOpen && item.subItems && (
                      <ul className="mt-2 ml-10 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block px-5 py-3 rounded-xl transition-all hover:bg-orange-200/40 text-[#8E98A8]"
                              style={{ fontFamily: 'Urbanist', fontSize: '18px', lineHeight: '100%', fontWeight: 400 }}
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
                    className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:bg-orange-200/40 text-[#8E98A8]"
                    style={{ fontFamily: 'Urbanist', fontSize: '20px', lineHeight: '100%', fontWeight: 400 }}
                  >
                    <item.icon className={`w-6 h-6 ${isActive(item.href) ? 'text-orange-500' : ''}`} />
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Help Section - Always visible at bottom */}
        <div className="p-5 m-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl text-white shadow-lg flex-shrink-0">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-1">Need Help?</h3>
            <p className="text-sm text-orange-50">Contact Support</p>
          </div>
        </div>
      </aside>

      {/* Main Content - Add left margin to account for fixed sidebar */}
      <main className="flex-1 ml-[289px] overflow-auto bg-orange-50/30">
        {children}
      </main>
    </div>
  );
}