import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LayoutWrapper from "./components/layout/LayoutWrapper";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KingsCarNotAutomobile — Premium Diagnostics & Software",
  description:
    "OEM-Level diagnostic expertise, ECU programming, and software solutions for high-end automotive performance.",
  icons: {
    icon: "/images/Logos/Kingcarnotmobile.jpeg",
    shortcut: "/images/Logos/Kingcarnotmobile.jpeg",
    apple: "/images/Logos/Kingcarnotmobile.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body
        className={`${jost.className} antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* Feedback Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}