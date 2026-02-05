import "./globals.css";
import {
  AxiosProvider,
  QueryProvider,
  ReduxProvider,
  ToastProvider,
} from "../utils/Providers";
import NextTopLoader from "nextjs-toploader";
import { StrictMode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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

        {/* <Footer /> */}
      </body>
    </html>
  );
}
