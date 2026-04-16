"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ArrowRight, ShieldCheck, Zap, Bell } from 'lucide-react';

const StandoutCTA = () => {
    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden">
            {/* 1. LAYERED AMBIENT BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full" />
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[grid-white_20px_20px]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 w-[85%] max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 bg-white/[0.02] backdrop-blur-3xl rounded-[48px] border border-white/5 overflow-hidden shadow-2xl">

                    {/* LEFT SIDE: Visual Brand Power */}
                    <div className="w-full lg:w-1/2 p-12 lg:p-20 bg-gradient-to-br from-blue-600/10 to-transparent">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">System Ready</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                                Unlock Your <br />
                                <span className="text-blue-500">Vehicle's DNA.</span>
                            </h2>

                            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                                Join the elite network of workshops and owners using OEM-level diagnostics to maintain peak automotive performance.
                            </p>

                            {/* Minimalist Feature List */}
                            <div className="space-y-4 pt-4">
                                {[
                                    { icon: <ShieldCheck size={18} />, text: "Free Diagnostic Reports" },
                                    { icon: <Bell size={18} />, text: "Proactive Maintenance Alerts" },
                                    { icon: <Zap size={18} />, text: "Priority Technical Support" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="text-blue-500">{item.icon}</div>
                                        <span className="text-sm font-bold tracking-wide uppercase">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Action Card */}
                    <div className="w-full lg:w-1/2 p-12 lg:p-20 bg-white/[0.02] border-l border-white/5 flex flex-col items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full max-w-sm space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-6">
                                    <UserPlus size={28} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Create Profile</h3>
                                <p className="text-gray-500 text-sm">Takes less than 60 seconds.</p>
                            </div>

                            <button className="w-full group relative flex items-center justify-center gap-4 bg-white text-[#020617] py-5 rounded-2xl font-black tracking-[0.2em] uppercase text-sm hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
                                Start For Free
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>

                            <div className="flex justify-center gap-8 pt-4 border-t border-white/5">
                                <div className="text-center">
                                    <p className="text-white font-bold text-lg leading-none">5k+</p>
                                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1 text-nowrap">Users</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-bold text-lg leading-none">100%</p>
                                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1 text-nowrap">Secure</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StandoutCTA;