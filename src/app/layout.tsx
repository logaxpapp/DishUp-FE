import "./globals.css";
import { Urbanist } from "next/font/google";
import type { Metadata } from "next";
import {
  AxiosProvider,
  QueryProvider,
  ReduxProvider,
  ToastProvider,
} from "../utils/Providers";
import NextTopLoader from "nextjs-toploader";
import { StrictMode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
        <NextTopLoader height={4} showSpinner={true} />
        <ReduxProvider>
          <QueryProvider>
            <AxiosProvider>
              <StrictMode>
                <AntdRegistry>
                  <main className="min-h-screen">{children}</main>
                </AntdRegistry>
                <ToastProvider />
              </StrictMode>
            </AxiosProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
