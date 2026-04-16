"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu, Database, Search, BookOpen, Wrench, Key,
    Laptop, Unlock, Package, Zap, RefreshCcw, Terminal,
    ArrowUpRight
} from 'lucide-react';

const solutionData = [
    { icon: <Cpu />, title: 'XENTRY Diagnostics', desc: 'Latest Mercedes-Benz XENTRY diagnostic software with full system access for cars and commercial vehicles.' },
    { icon: <Database />, title: 'DAS Standalone', desc: 'Diagnose-Assistenz-System with offline mode support, special functions, and developer capabilities.' },
    { icon: <Search />, title: 'Alldata', desc: 'Online subscription for all vehicle manufacturers—repair manuals, wiring diagrams, and TSBs.' },
    { icon: <BookOpen />, title: 'Haynes', desc: 'Comprehensive repair software manual covering all vehicle makes and models with detailed service procedures.' },
    { icon: <Wrench />, title: 'Mitchell & Techstream', desc: 'Mitchell pro repair data plus Techstream for Toyota/Lexus—full repair software manuals.' },
    { icon: <Key />, title: 'ElsaWin', desc: 'Official workshop software for VAG Group: VW, Audi, Skoda, SEAT, and Porsche—parts catalogs and wiring.' },
    { icon: <Laptop />, title: 'BMW Full Diagnostics PC', desc: 'Complete PC-based diagnostics toolkits for BMW—hardware and software configured for full system coverage.' },
    { icon: <Unlock />, title: 'Offline Key Programming', desc: 'Transponder key teach-in, SAM assignment, and immobilizer solutions for Smart and Mercedes platforms.' },
    { icon: <Package />, title: 'Vediamo, DTS & Monaco', desc: 'Advanced automotive programming tools—Vediamo, DTS, and Monaco for deep ECU coding.' },
    { icon: <Zap />, title: 'ECU Flash & Calibration', desc: 'Flash programming data, FDOK corrections, SCR/AdBlue solutions, and emissions calibration files.' },
    { icon: <RefreshCcw />, title: 'Software Updates', desc: 'All-in-one patchers, simple activation tools, and quarterly software updates for seamless operation.' },
    { icon: <Terminal />, title: 'Developer Mode', desc: 'Unlocked control unit adaptations, VMAX settings, transmission routines, and advanced developer tools.' },
];

const SoftwareSection = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-[#020617]">
            {/* High-Class Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#1e3a8a_0%,_#020617_100%)] opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Modern Editorial Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-blue-500"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Software & Solutions</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            OEM-Level <br /> <span className="text-blue-500">Diagnostic Software</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                            Secured access to original manufacturer software, custom patchers, and developer tools.
                            We bridge the gap between your workshop and factory servers.
                        </p>
                    </div>
                    <button className="hidden lg:flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
                        Browse All <ArrowUpRight size={16} />
                    </button>
                </div>

                {/* The Showroom Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {solutionData.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 rounded-[40px] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="space-y-6">
                                {/* Minimalist Icon Block */}
                                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    {/* FIXED: Added type assertion for size property to pass TypeScript build */}
                                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 22 })}
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-3 group-hover:text-slate-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/0 group-hover:bg-blue-500/10 blur-3xl rounded-full transition-all" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Support Label */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                        Platform Support: Mercedes-Benz, BMW, VAG Group, Toyota & More
                    </p>
                    <div className="flex gap-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Servers Online & Secure</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareSection;