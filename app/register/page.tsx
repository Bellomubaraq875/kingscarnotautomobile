"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

// 1. Keep the data outside the component
const testimonials = [
    {
        id: 1,
        initials: "AJ",
        name: "Adebayo Johnson",
        vehicle: "BMW X5 Owner",
        quote: "The registration process was seamless. I can now manage all my module repairs and programming requests in one secure dashboard.",
        color: "bg-blue-600",
    },
    {
        id: 2,
        initials: "CO",
        name: "Chioma Okafor",
        vehicle: "Mercedes C300",
        quote: "Finally, a platform that understands FBS-4 protocols. Booking my specialized module sync took less than two minutes.",
        color: "bg-purple-600",
    },
    {
        id: 3,
        initials: "EN",
        name: "Emeka Nwosu",
        vehicle: "Audi A4 Owner",
        quote: "Highly technical team. They resynced a used transmission module dealers said was impossible to reuse.",
        color: "bg-emerald-600",
    },
];

// 2. THE MAIN COMPONENT (MUST BE EXPORT DEFAULT)
export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            localStorage.setItem("token", "demo-token");
            router.push("/dashboard/user");
            setIsLoading(false);
        }, 2000);
    };

    return (
        <main className="min-h-screen flex flex-col lg:flex-row bg-[#F7F9FA] font-jost overflow-hidden">

            {/* FORM SECTION */}
            <section className="w-full lg:w-1/2 flex items-center justify-center px-6 py-24 lg:py-32 overflow-y-auto">
                <div className="w-full max-w-md space-y-12">

                    <Link href="/" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-600 transition-all">
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
                            Join the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                Protocol.
                            </span>
                        </h1>
                        <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-xs">
                            Synchronize your vehicle with industry-leading diagnostic standards.
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input icon={<User size={18} />} placeholder="FIRST NAME" />
                            <Input placeholder="LAST NAME" />
                        </div>

                        <Input icon={<Mail size={18} />} type="email" placeholder="EMAIL ADDRESS" />

                        <div className="relative group">
                            <Car className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-600 transition-colors z-10" size={18} />
                            <select required className="w-full appearance-none rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md px-14 py-5 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white cursor-pointer shadow-sm">
                                <option value="">SELECT YOUR CHASSIS</option>
                                <option value="mercedes">MERCEDES-BENZ</option>
                                <option value="bmw">BMW / MINI</option>
                                <option value="audi">AUDI / VW / VAG</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>

                        <Input icon={<Lock size={18} />} type="password" placeholder="CREATE PASSWORD" />

                        <div className="pt-4">
                            <button type="submit" disabled={isLoading} className="w-full rounded-[20px] bg-slate-900 py-6 text-[10px] font-black uppercase tracking-[0.5em] text-white hover:bg-blue-600 transition active:scale-[0.98] disabled:opacity-50 shadow-2xl shadow-slate-200">
                                {isLoading ? "SYNCHRONIZING..." : "CREATE ACCOUNT"}
                            </button>
                        </div>
                    </form>

                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center text-slate-400">
                        Already registered?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">Sign in</Link>
                    </p>
                </div>
            </section>

            {/* VISUAL SECTION */}
            <section className="hidden lg:flex w-1/2 bg-[#04070F] relative items-center justify-center px-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15),_transparent_70%)]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />

                <div className="relative z-10 w-full max-w-lg space-y-24">
                    <div className="space-y-10">
                        <div className="w-20 h-20 bg-blue-600 rounded-[28px] flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                            <ShieldCheck size={40} className="text-white" />
                        </div>
                        <h2 className="text-7xl font-bold text-white tracking-tighter leading-[0.85] uppercase">
                            Engineering <br /> <span className="text-blue-500">Clarity.</span>
                        </h2>
                    </div>

                    <div className="relative h-72">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[current].id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="absolute inset-0 bg-white/[0.03] backdrop-blur-[30px] border border-white/10 rounded-[48px] p-12 space-y-8 shadow-2xl"
                            >
                                <div className="flex gap-1.5 text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-xl text-slate-100 italic font-medium leading-relaxed tracking-tight">“{testimonials[current].quote}”</p>
                                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                                    <div className={`w-14 h-14 rounded-full ${testimonials[current].color} flex items-center justify-center text-[11px] font-black text-white shadow-lg`}>{testimonials[current].initials}</div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-black text-white uppercase tracking-wider">{testimonials[current].name}</span>
                                        <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em]">{testimonials[current].vehicle}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <ul className="space-y-6">
                        {["Dealer-Level Protocols", "Secure Module Sync", "Real-time Fault Tracking"].map((item, i) => (
                            <li key={i} className="flex items-center gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                                <CheckCircle2 size={20} className="text-teal-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

// 3. INTERNAL HELPER COMPONENT (NOT EXPORT DEFAULT)
function Input({ icon, ...props }: any) {
    return (
        <div className="relative group">
            {icon && (
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-600 transition-colors z-10">
                    {icon}
                </span>
            )}
            <input
                {...props}
                required
                className={`w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md py-5 text-[10px] font-black tracking-widest text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white placeholder:text-slate-400 shadow-sm ${icon ? "pl-14 pr-6" : "px-6"
                    }`}
            />
        </div>
    );
}