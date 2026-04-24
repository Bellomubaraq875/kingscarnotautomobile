"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Star,
    User,
    Mail,
    Lock,
    Car,
} from "lucide-react";

const sidebarTestimonials = [
    {
        initials: "AJ",
        name: "Adebayo Johnson",
        vehicle: "BMW X5 Owner",
        quote: "The registration process was seamless. I can now manage all my module repairs in one secure dashboard."
    },
    {
        initials: "CO",
        name: "Chioma Okafor",
        vehicle: "Mercedes C300",
        quote: "Finally, a platform that understands FBS-4 protocols. Booking my module sync took less than two minutes."
    }
];

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [chassis, setChassis] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen bg-white flex overflow-hidden font-jost">

            {/* 1. FORM SECTION - Increased pt-48 for Navbar clearance */}
            <section className="w-full lg:w-[55%] flex items-start justify-center px-6 pt-48 pb-32 md:px-12 lg:px-24 overflow-y-auto">
                <div className="w-full max-w-md space-y-16">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-600 transition-colors"
                    >
                        <ArrowRight size={14} className="rotate-180" />
                        Back to Home
                    </Link>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 uppercase leading-[0.9]">
                            Join the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Protocol.</span>
                        </h1>
                        <p className="text-base font-medium leading-relaxed text-slate-500 max-w-sm">
                            Access dealer-level diagnostics and module synchronization in one secure, high-performance dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                <input
                                    type="text"
                                    placeholder="FIRST NAME"
                                    required
                                    className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 pl-14 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 placeholder:text-slate-300"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="LAST NAME"
                                    required
                                    className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                required
                                className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 pl-14 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 placeholder:text-slate-300"
                            />
                        </div>

                        <div className="relative">
                            <Car className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <select
                                required
                                value={chassis}
                                onChange={(e) => setChassis(e.target.value)}
                                className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 pl-14 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 appearance-none cursor-pointer"
                            >
                                <option value="" disabled>SELECT YOUR CHASSIS</option>
                                <option value="mercedes">MERCEDES-BENZ</option>
                                <option value="bmw">BMW / MINI</option>
                                <option value="audi">AUDI / VW / VAG</option>
                            </select>
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input
                                type="password"
                                placeholder="CREATE PASSWORD"
                                required
                                className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 pl-14 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 placeholder:text-slate-300"
                            />
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-[20px] bg-slate-900 px-6 py-6 text-[10px] font-black uppercase tracking-[0.5em] text-white transition hover:bg-blue-600 shadow-2xl shadow-slate-200 disabled:opacity-50 active:scale-[0.98]"
                            >
                                {isLoading ? "SYNCHRONIZING..." : "CREATE ACCOUNT"}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest pt-4">
                        Already registered?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>

            {/* 2. VISUAL TRUST SECTION - Increased py-48 */}
            <section className="hidden lg:flex w-[45%] bg-[#04070F] relative items-start justify-center pt-48 pb-32 px-16 overflow-y-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-teal-500/10 opacity-60" />

                <div className="relative z-10 space-y-20 w-full max-w-md">
                    <div className="space-y-10">
                        <div className="w-20 h-20 bg-blue-600 rounded-[24px] flex items-center justify-center shadow-2xl">
                            <ShieldCheck size={36} className="text-white" />
                        </div>
                        <h2 className="text-6xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
                            Engineering <br /> <span className="text-blue-400">Clarity.</span>
                        </h2>
                    </div>

                    {/* Testimonials Stack with increased margins */}
                    <div className="space-y-8">
                        {sidebarTestimonials.map((t, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] space-y-6 shadow-2xl">
                                <div className="flex gap-1 text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                                    “{t.quote}”
                                </p>
                                <div className="flex items-center gap-5 pt-6 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-black text-xs text-white">
                                        {t.initials}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black text-white uppercase tracking-tight">{t.name}</span>
                                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{t.vehicle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ul className="space-y-6 pt-10">
                        {["Dealer-Level Protocols", "Secure Module Sync", "Real-time Fault Tracking"].map((item, i) => (
                            <li key={i} className="flex items-center gap-5 text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">
                                <CheckCircle2 size={18} className="text-teal-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}