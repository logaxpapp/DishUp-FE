import "./globals.css";
import { Urbanist } from "next/font/google";
import type { Metadata } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogaDash",
  description: "LogaDash — restaurant delivery management platform",
  icons: {
    icon: "/logo3.png", // favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} overflow-x-hidden`}>
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}
