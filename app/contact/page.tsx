"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageSquare,
    ChevronRight,
    ShieldCheck,
    Globe
} from 'lucide-react';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            toast.success("Inquiry received. An engineer will contact you shortly.");
        }, 2000);
    };

    return (
        <main className="relative min-h-screen bg-white pt-32 pb-24 overflow-hidden">

            {/* 1. LUMINOUS PAGE-WIDE GRADIENT */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#f0f9ff_0%,_#f0fff4_30%,_#ffffff_70%)]" />

            <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto">

                {/* 2. EDITORIAL HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-slate-100 pb-16 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-blue-600"></span>
                            <span className="text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase">Connect With Us</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Direct <br /> <span className="text-slate-200">Engineering</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-md leading-relaxed">
                        Technical synchronization requires precision. Contact our laboratory for ECU, coding, or diagnostic inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* 3. CONTACT INFO SIDEBAR */}
                    <div className="lg:col-span-4 space-y-12">
                        <section className="space-y-8">
                            <h3 className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Global Headquarters</h3>
                            <div className="space-y-6">
                                <div className="group flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-slate-900">Ibadan, Nigeria</p>
                                        <p className="text-slate-500">Premium Tech Hub, North Gate</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-slate-900">+234 810 000 0000</p>
                                        <p className="text-slate-500">Mon - Fri, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-slate-900">support@kingscarnot.com</p>
                                        <p className="text-slate-500">Inquiries within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Availability Badge */}
                        <div className="p-8 bg-blue-600 rounded-[32px] text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
                            <Globe className="absolute -bottom-6 -right-6 w-32 h-32 text-white/10" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <p className="text-[10px] font-black tracking-widest uppercase">Servers Live</p>
                                </div>
                                <h4 className="text-xl font-bold">Remote Coding Available</h4>
                                <p className="text-blue-100/70 text-sm leading-relaxed font-medium">We provide cloud-based synchronization for Mercedes and BMW chassis globally.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. CONCIERGE FORM (GLASSMOPHISM) */}
                    <div className="lg:col-span-8">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/40 backdrop-blur-xl border border-white p-8 md:p-16 rounded-[48px] shadow-2xl space-y-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">Full Name</label>
                                    <input required type="text" placeholder="e.g. Bello Mubaraq" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">Email Address</label>
                                    <input required type="email" placeholder="engineer@domain.com" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">Vehicle Chassis (VIN)</label>
                                    <input type="text" placeholder="W205, G20, etc." className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">Inquiry Type</label>
                                    <select className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option>Software Installation</option>
                                        <option>ECU/Module Repair</option>
                                        <option>Key Programming</option>
                                        <option>Technical Consultation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">How can we assist?</label>
                                <textarea required rows={5} placeholder="Provide technical details of your request..." className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <ShieldCheck size={18} className="text-blue-600" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase">End-to-End Encrypted Inquiry</span>
                                </div>
                                <button
                                    disabled={loading}
                                    className="w-full md:w-auto bg-[#00215E] text-white px-12 py-5 rounded-2xl font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-blue-900/20"
                                >
                                    {loading ? "Transmitting..." : "Send Request"}
                                    <Send size={16} />
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;