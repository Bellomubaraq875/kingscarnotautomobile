"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Send,
    Phone,
    Mail,
    MapPin,
    ShieldCheck,
    Globe,
    ArrowDown
} from 'lucide-react';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);

    const contactData = [
        { title: "Headquarters", icon: <MapPin size={22} className="text-blue-600" />, content: "Ibadan, Nigeria", sub: "Premium Tech Hub" },
        { title: "Direct Line", icon: <Phone size={22} className="text-emerald-600" />, content: "+234 810 000 0000", sub: "Mon-Fri (9am-6pm)" },
        { title: "Engineering Support", icon: <Mail size={22} className="text-indigo-600" />, content: "support@kingscarnot.com", sub: "Inquiries < 24hrs" },
        { title: "System Status", icon: <Globe size={22} className="text-emerald-500 animate-pulse" />, content: "Servers Online", sub: "Cloud Sync Live" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Request synchronized. An engineer will contact you shortly.");
        }, 2000);
    };

    return (
        <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden font-sans">

            {/* 1. ADVANCED FLUID BACKGROUND GRADIENT (Azure & Jade) */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#f0f9ff_0%,_#f0fff4_25%,_#ffffff_60%,_#f0fff4_85%,_#e0f7fa_100%)]" />

            {/* 2. CINEMATIC HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-24 border-b border-slate-100">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tech-diagnostics.jpg" // High-res close-up of a premium vehicle dashboard interface
                        alt="Advanced Automotive Engineering"
                        fill
                        className="object-cover brightness-[0.98]"
                        priority
                    />
                    {/* Subtle blend overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-64 h-full bg-gradient-to-l from-emerald-50/20 to-transparent pointer-events-none" />
                </div>

                <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                                <span className="text-[10px] font-black tracking-[0.4em] text-blue-700 uppercase">
                                    Technical synchronization
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                                Direct <br /> <span className="text-slate-200">Concierge</span> <br /> Access.
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl">
                            <span className="text-slate-900 font-bold">KingsCarNotAutomobile</span> merges dealer-level diagnostic protocols with immediate engineering support. Use the portal below for ECU, coding, or programming inquiries.
                        </p>

                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="pt-4">
                            <ArrowDown size={32} className="text-slate-300" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. SIMPLIFIED DATA BAR (Architectural boxes) */}
            <section className="relative z-10 py-20 border-b border-slate-100 bg-white/40 backdrop-blur-sm">
                <div className="w-[85%] max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactData.map((data, i) => (
                            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[28px] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-blue-500/20">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                                    {data.icon}
                                </div>
                                <h4 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 mb-2">{data.title}</h4>
                                <p className="text-lg font-black tracking-tight text-blue-900">{data.content}</p>
                                <p className="text-[13px] text-slate-500 font-medium">{data.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ADVANCED CONCIERGE PORTAL (Float Form) */}
            <section className="relative z-10 py-32">
                <div className="w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-emerald-500"></span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">System Ready</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighterLEADING-TIGHT">
                            Initialize Technical <br /> Request
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                            Complete the configuration below. Our specialized engineering team performs individual checksum validation for every diagnostic request.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/40 backdrop-blur-3xl border border-white p-8 md:p-12 rounded-[48px] shadow-2xl space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField required label="Full Name" type="text" placeholder="e.g. Bello Mubaraq" />
                                <InputField required label="Engineering Email" type="email" placeholder="engineer@domain.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField label="Vehicle Chassis (VIN/Model)" type="text" placeholder="W206, G20, etc." />
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">Request Type</label>
                                    <select className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4.5 text-slate-900 focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer font-medium text-sm">
                                        <option>ECU/Module Programming</option>
                                        <option>Offline Key Programming</option>
                                        <option>FBS-4 Synchronization</option>
                                        <option>Advanced Variant Coding</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">How can we assist?</label>
                                <textarea required rows={5} placeholder="Provide technical details of your request, fault codes, or desired software routine..." className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none font-medium text-sm leading-relaxed" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100/50">
                                <div className="flex items-center gap-3 text-emerald-600">
                                    <ShieldCheck size={18} className="text-emerald-500" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase">Encrypted Transmission</span>
                                </div>
                                <button
                                    disabled={loading}
                                    className="w-full md:w-auto group relative flex items-center justify-center gap-3 bg-[#00215E] text-white px-10 py-5 rounded-2xl font-black tracking-[0.2em] uppercase text-xs overflow-hidden transition-all hover:bg-blue-600 shadow-xl shadow-blue-950/20 disabled:opacity-50"
                                >
                                    <span className="relative z-10">{loading ? "Transmitting..." : "Send Request"}</span>
                                    <Send size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>
        </main>
    );
};

const InputField = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="space-y-3">
        <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">{label}</label>
        <input {...props} className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all" />
    </div>
);

export default ContactPage;