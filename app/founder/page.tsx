"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Cpu,
    ShieldCheck,
    Terminal,
    Zap,
    History,
    Award,
    ChevronRight,
    Code
} from 'lucide-react';

const FounderPage = () => {
    const skills = [
        { name: "ECU Programming", icon: <Cpu size={18} /> },
        { name: "Vehicle Coding", icon: <Code size={18} /> },
        { name: "Key Programming", icon: <Zap size={18} /> },
        { name: "CAN Bus Analysis", icon: <Terminal size={18} /> },
        { name: "OBD-II Diagnostics", icon: <ShieldCheck size={18} /> },
        { name: "Electrical Tracing", icon: <Zap size={18} /> },
    ];

    const milestones = [
        { year: "2010", title: "Engineering Degree", desc: "Graduated with a degree in Automotive/Electrical Engineering." },
        { year: "2013", title: "Industry Experience", desc: "Worked with leading dealerships mastering OEM diagnostic platforms." },
        { year: "2016", title: "Advanced Certifications", desc: "Earned certifications in ECU programming, vehicle coding, and CAN bus systems." },
        { year: "2018", title: "Founded KingsCarNot", desc: "Launched to bring dealership-grade diagnostics to the independent market." },
    ];

    return (
        <main className="min-h-screen bg-white pb-32">

            {/* 1. EDITORIAL HERO SECTION */}
            <section className="relative pt-44 pb-24 w-[80%] max-w-[1400px] mx-auto border-b border-slate-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-blue-600"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">The Visionary</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
                            Meet The <br /> <span className="text-slate-200">Visionary.</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg italic border-l-4 border-blue-600 pl-6">
                            "A passionate automobile diagnostician with over a decade of hands-on experience in electronic architecture."
                        </p>
                    </div>

                    <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-100 group">
                        {/* Placeholder for Founder Photo */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                            <History size={48} className="mb-4 opacity-20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Upload Coming Soon</span>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h3 className="text-4xl font-black tracking-tighter uppercase">King</h3>
                            <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-70">Founder & Lead Diagnostician</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CORE BIOGRAPHY & PHILOSOPHY */}
            <section className="py-32 w-[80%] max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7 space-y-10">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Technical Evolution</h2>
                        <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                            <p>
                                With a deep passion for automobiles and technology, King founded KingsCarNotAutomobile to revolutionize the way vehicle owners access professional diagnostics. His journey started from a genuine curiosity about how vehicles communicate through electronic systems.
                            </p>
                            <p>
                                Over the years, he has mastered advanced diagnostic tools across all major vehicle brands — from European luxury cars to Japanese and American models. His expertise spans ECU programming, vehicle coding, key programming, and complex electrical fault diagnosis.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                                <p className="text-slate-900 font-bold italic text-xl">
                                    "King's philosophy is simple: every vehicle owner deserves access to accurate, transparent, and affordable diagnostic services."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skill Matrix */}
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Specialized Matrix</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-slate-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{skill.name}</span>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. JOURNEY & MILESTONES (Vertical Timeline) */}
            <section className="py-32 bg-[#04070F] text-white rounded-[60px] mx-[2%] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

                <div className="w-[80%] max-w-[1200px] mx-auto space-y-20 relative z-10">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">Journey & <br /> <span className="text-blue-500">Milestones</span></h2>
                        <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Charting a decade of innovation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((item, i) => (
                            <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all group">
                                <span className="text-4xl font-black text-blue-500/30 group-hover:text-blue-500 transition-colors block mb-4">{item.year}</span>
                                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-white">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FounderPage;