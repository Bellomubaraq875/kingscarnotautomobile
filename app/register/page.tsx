"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Star, User, Mail, Lock, Car } from 'lucide-react';

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate registration logic
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#FDFDFF] flex overflow-hidden font-jost">

            {/* 1. LEFT SIDE: FORM SECTION (80% Constraint applied to inner content) */}
            <section className="w-full lg:w-[55%] flex items-center justify-center p-8 md:p-20">
                <div className="w-full max-w-md space-y-10">

                    {/* Brand/Back Link */}
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors">
                        <ArrowRight size={14} className="rotate-180" /> Back to Home
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 uppercase">
                            Join the <br /> <span className="text-blue-600">Protocol.</span>
                        </h1>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Register to access dealer-level diagnostics, ECU programming, and specialized module synchronization for your vehicle.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input
                                    type="text"
                                    placeholder="FIRST NAME"
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-xl text-[10px] font-bold tracking-widest focus:bg-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="LAST NAME"
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 p-4 px-6 rounded-xl text-[10px] font-bold tracking-widest focus:bg-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                required
                                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-xl text-[10px] font-bold tracking-widest focus:bg-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                            />
                        </div>

                        <div className="relative">
                            <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                            <select
                                required
                                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-xl text-[10px] font-bold tracking-widest focus:bg-white focus:border-blue-600 outline-none transition-all text-slate-400"
                            >
                                <option value="" disabled selected uppercase>SELECT YOUR CHASSIS</option>
                                <option value="mercedes">MERCEDES-BENZ</option>
                                <option value="bmw">BMW / MINI</option>
                                <option value="audi">AUDI / VW / VAG</option>
                                <option value="other">OTHER PREMIUM BRANDS</option>
                            </select>
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                            <input
                                type="password"
                                placeholder="CREATE PASSWORD"
                                required
                                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-xl text-[10px] font-bold tracking-widest focus:bg-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
                            >
                                {isLoading ? "SYNCHRONIZING..." : "CREATE ACCOUNT"}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Already registered? <Link href="/login" className="text-blue-600 hover:underline">Sign In</Link>
                    </p>
                </div>
            </section>

            {/* 2. RIGHT SIDE: VISUAL TRUST SECTION */}
            <section className="hidden lg:flex w-[45%] bg-slate-900 relative items-center justify-center p-20">
                {/* Luminous Gradient Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-teal-500/20" />

                <div className="relative z-10 space-y-12">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tighter leading-tight uppercase">
                            Experience <br /> Engineering <br /> Clarity.
                        </h2>
                    </div>

                    {/* Trust Card */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] space-y-6 max-w-sm">
                        <div className="flex gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                            "The registration process was seamless. I can now manage all my module repairs and programming requests in one dashboard."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-black text-xs">AJ</div>
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-white uppercase tracking-tight">Adebayo Johnson</span>
                                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">BMW X5 Owner</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-4">
                        {["Dealer-Level Protocols", "Secure Module Sync", "Real-time Fault Tracking"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-black text-white/60 uppercase tracking-widest">
                                <CheckCircle2 size={14} className="text-teal-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}