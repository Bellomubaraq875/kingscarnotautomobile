"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Mail,
    Lock,
    ChevronRight,
    ShieldAlert,
    Cpu,
    Activity,
    Key
} from "lucide-react";

const carouselImages = [
    {
        id: 1,
        title: "Diagnostic Matrix",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
        label: "Dealer-Level Analysis"
    },
    {
        id: 2,
        title: "ECU Architecture",
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000",
        label: "Binary Logic & Flash"
    },
    {
        id: 3,
        title: "Security Synchronization",
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000",
        label: "FBS-4 Security Protocol"
    }
];

export default function LoginPage() {
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    // Auto-slide carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API delay
        setTimeout(() => {
            if (formData.email && formData.password) {
                localStorage.setItem("token", "demo-token");
                router.push("/dashboard/user");
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <main className="min-h-screen flex flex-col lg:flex-row bg-[#F7F9FA] font-jost overflow-hidden">

            {/* LEFT: CAROUSEL SECTION (90vh Visual) */}
            <section className="hidden lg:flex w-1/2 bg-[#04070F] relative items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={carouselImages[current].url}
                            alt="Automotive Tech"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04070F] via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Technical Overlay */}
                <div className="relative z-10 w-full max-w-lg p-12 space-y-8">
                    <div className="flex items-center gap-4 text-teal-500">
                        <ShieldAlert size={20} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Secure Access Required</span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-6xl font-black text-white leading-none uppercase tracking-tighter">
                            The <br /> <span className="text-blue-500">Protocol.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium italic">
                            "{carouselImages[current].label}"
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {carouselImages.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-blue-500' : 'w-4 bg-white/10'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* RIGHT: LOGIN FORM SECTION */}
            <section className="w-full lg:w-1/2 flex items-center justify-center px-6 py-24 lg:py-32">
                <div className="w-full max-w-md space-y-12">

                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-600 transition-all"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Welcome <br /> Back.
                        </h1>
                        <p className="text-sm font-semibold text-slate-500 leading-relaxed uppercase tracking-widest">
                            Authorize your session to proceed.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10" size={18} />
                            <input
                                type="email"
                                required
                                placeholder="EMAIL ADDRESS"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full rounded-2xl border border-slate-200 bg-white px-14 py-5 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:border-blue-600 shadow-sm placeholder:text-slate-300"
                            />
                        </div>

                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10" size={18} />
                            <input
                                type="password"
                                required
                                placeholder="PASSWORD"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full rounded-2xl border border-slate-200 bg-white px-14 py-5 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:border-blue-600 shadow-sm placeholder:text-slate-300"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Link href="/forgot-password" size={14} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600">
                                Recovery Access?
                            </Link>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-[20px] bg-slate-900 py-6 text-[10px] font-black uppercase tracking-[0.5em] text-white hover:bg-blue-600 transition active:scale-[0.98] disabled:opacity-50 shadow-2xl shadow-slate-200"
                            >
                                {isLoading ? "AUTHORIZING..." : "AUTHORIZE LOGIN"}
                            </button>
                        </div>
                    </form>

                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center text-slate-400">
                        Missing chassis profile?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}