import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KingsCarNotAutomobile - ",
  description: "Platform for automobile",
  icons: {
    icon: "/images/Logos/Kingcarnotautomobile.jpeg",
    shortcut: "/images/Logos/Kingcarnotautomobile.jpeg",
    apple: "/images/Logos/Kingcarnotautomobile.jpeg",
    other: [
      {
        rel: "icon",
        url: "/images/Logos/Kingcarnotautomobile.jpeg",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${jost.className}`}>
      <body className="antialiased bg-white text-gray-900 font-sans">

        {children}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

      </body>
    </html>
  );
}