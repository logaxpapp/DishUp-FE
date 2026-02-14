"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MdDashboard,
  MdShoppingCart,
  MdRestaurantMenu,
  MdAttachMoney,
  MdInventory,
  MdLocalOffer,
  MdTrendingUp,
  MdPayment,
  MdKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { logOut } from "@/store/slices/auth";

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
  const router = useRouter();
  const [isPromotionsOpen, setIsPromotionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Auto-expand Promotions if we're on a promotions page
    if (pathname.startsWith("/dashboard/promotions")) {
      setIsPromotionsOpen(true);
    }
  }, [pathname]);

  const handleLogout = () => {
    dispatch(logOut());
    router.push("/login");
  };

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: MdDashboard,
      hasDropdown: false,
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
      icon: MdShoppingCart,
      hasDropdown: false,
    },
    {
      name: "Menu",
      href: "/dashboard/menu",
      icon: MdRestaurantMenu,
      hasDropdown: false,
    },
    // {
    //   name: "Pricing",
    //   href: "/dashboard/pricing",
    //   icon: MdAttachMoney,
    //   hasDropdown: false,
    // },
    {
      name: "Inventory",
      href: "/dashboard/inventory",
      icon: MdInventory,
      hasDropdown: false,
    },
    {
      name: "Promotions",
      href: "/dashboard/promotions",
      icon: MdLocalOffer,
      hasDropdown: true,
      subItems: [
        { name: "Coupons", href: "/dashboard/promotions/coupons" },
        { name: "Sponsored Listing", href: "/dashboard/promotions/sponsored" },
      ],
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: MdTrendingUp,
      hasDropdown: false,
    },
    {
      name: "Payouts",
      href: "/dashboard/payouts",
      icon: MdPayment,
      hasDropdown: false,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
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
      <aside className="w-[289px] h-screen fixed left-0 top-0 bg-gradient-to-b from-orange-50 to-orange-100 border-r border-orange-200 flex flex-col">
        {/* Logo — links to home, larger size */}
        <div className="px-6 py-6 flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="QickFetch Logo"
              width={240}
              height={72}
              className="w-[150px] h-auto"
              priority
            />
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
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:bg-orange-200/40 text-[#8E98A8]`}
                      style={{
                        fontFamily: "Urbanist",
                        fontSize: "20px",
                        lineHeight: "100%",
                        fontWeight: 400,
                      }}
                    >
                      <item.icon
                        className={`w-6 h-6 ${isActive(item.href) ? "text-orange-500" : ""}`}
                      />
                      <span>{item.name}</span>
                      <MdKeyboardArrowDown
                        className={`w-5 h-5 ml-auto transition-transform ${
                          isPromotionsOpen ? "rotate-180" : ""
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
                              style={{
                                fontFamily: "Urbanist",
                                fontSize: "18px",
                                lineHeight: "100%",
                                fontWeight: 400,
                              }}
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
                    style={{
                      fontFamily: "Urbanist",
                      fontSize: "20px",
                      lineHeight: "100%",
                      fontWeight: 400,
                    }}
                  >
                    <item.icon
                      className={`w-6 h-6 ${isActive(item.href) ? "text-orange-500" : ""}`}
                    />
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button — above help section */}
        <div className="px-4 pb-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:bg-red-50 text-[#a51212] hover:text-red-500"
            style={{
              fontFamily: "Urbanist",
              fontSize: "20px",
              lineHeight: "100%",
              fontWeight: 400,
            }}
          >
            <MdLogout className="w-6 h-6 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>

        {/* Help Section - Always visible at bottom */}
        <div className="p-4 m-4 bg-orange-500 rounded-2xl text-white flex-shrink-0">
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
          <p className="text-sm text-center mb-4 text-orange-100">
            Contact Support
          </p>
        </div>
      </aside>

      {/* Main Content - Add left margin to account for fixed sidebar */}
      <main className="flex-1 ml-[289px] overflow-auto bg-orange-50/30">
        {children}
      </main>
    </div>
  );
}
