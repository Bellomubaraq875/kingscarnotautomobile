// app/components/layout/LayoutWrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideLayout =
        pathname.startsWith("/login") ||
        pathname.startsWith("/register");

    return (
        <>
            {!hideLayout && <Navbar />}

            <main className="min-h-screen flex flex-col">
                <div className="flex-grow">
                    {children}
                </div>
            </main>

            {!hideLayout && <Footer />}
        </>
    );
}