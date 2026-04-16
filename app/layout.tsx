import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KingsCarNotAutomobile — Premium Diagnostics & Software",
  description: "OEM-Level diagnostic expertise, ECU programming, and software solutions for high-end automotive performance.",
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
      <body className={`${jost.className} antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}>
        
        <Navbar />
        <main className="min-h-screen flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
        </main>
        <Footer />

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