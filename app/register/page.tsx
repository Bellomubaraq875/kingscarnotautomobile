"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    ArrowLeft,
    CheckCircle2,
    Star,
    User,
    Mail,
    Lock,
    Car,
    ChevronDown,
} from "lucide-react";

const testimonials = [
    {
        id: 1,
        initials: "AJ",
        name: "Adebayo Johnson",
        vehicle: "BMW X5 Owner",
        quote:
            "The registration process was seamless. I can now manage all my module repairs and programming requests in one secure dashboard.",
        color: "bg-blue-500",
    },
    {
        id: 2,
        initials: "CO",
        name: "Chioma Okafor",
        vehicle: "Mercedes C300",
        quote:
            "Finally, a platform that understands FBS-4 protocols. Booking my specialized module sync took less than two minutes.",
        color: "bg-purple-500",
    },
    {
        id: 3,
        initials: "EN",
        name: "Emeka Nwosu",
        vehicle: "Audi A4 Owner",
        quote:
            "Highly technical team. They resynced a used transmission module dealers said was impossible to reuse.",
        color: "bg-emerald-500",
    },
];

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen flex flex-col lg:flex-row bg-white font-jost">

            {/* LEFT: FORM */}
            <section className="w-full lg:w-1/2 flex justify-center px-6 py-16 lg:py-24">
                <div className="w-full max-w-md space-y-10">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600"
                    >
                        <ArrowLeft size={16} />
                        Back to home
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Join the{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                                Protocol
                            </span>
                        </h1>

                        <p className="text-slate-500 text-sm leading-relaxed">
                            Access dealer-level diagnostics and module synchronization in one secure dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input icon={<User size={16} />} placeholder="First name" />
                            <Input placeholder="Last name" />
                        </div>

                        <Input icon={<Mail size={16} />} type="email" placeholder="Email address" />

                        {/* Select */}
                        <div className="relative">
                            <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm focus:border-blue-600 focus:bg-white outline-none">
                                <option>Select your chassis</option>
                                <option>Mercedes-Benz</option>
                                <option>BMW / MINI</option>
                                <option>Audi / VW / VAG</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        </div>

                        <Input icon={<Lock size={16} />} type="password" placeholder="Create password" />

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition active:scale-[0.98] disabled:opacity-50"
                        >
                            {isLoading ? "Creating account..." : "Create account"}
                        </button>

                    </form>

                    <p className="text-sm text-center text-slate-500">
                        Already registered?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>

            {/* RIGHT: VISUAL */}
            <section className="hidden lg:flex w-1/2 bg-[#04070F] relative items-center justify-center px-12">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />

                <div className="relative z-10 max-w-md w-full space-y-12">

                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                            <ShieldCheck className="text-white" />
                        </div>

                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Engineering <span className="text-blue-400">Clarity</span>
                        </h2>
                    </div>

                    {/* Testimonial */}
                    <div className="relative h-64">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[current].id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4"
                            >
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-sm text-slate-300 italic">
                                    “{testimonials[current].quote}”
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className={`w-10 h-10 rounded-full ${testimonials[current].color} flex items-center justify-center text-xs font-bold text-white`}>
                                        {testimonials[current].initials}
                                    </div>

                                    <div>
                                        <p className="text-xs text-white font-semibold">
                                            {testimonials[current].name}
                                        </p>
                                        <p className="text-[11px] text-blue-400">
                                            {testimonials[current].vehicle}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                        {[
                            "Dealer-Level Protocols",
                            "Secure Module Sync",
                            "Real-time Fault Tracking",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                <CheckCircle2 size={16} className="text-teal-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

/* Reusable Input */
function Input({
    icon,
    ...props
}: any) {
    return (
        <div className="relative">
            {icon && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    {icon}
                </span>
            )}
            <input
                {...props}
                required
                className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white ${icon ? "pl-11 pr-4" : "px-4"
                    }`}
            />
        </div>
    );
}