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
    Milestone,
    Code,
    ArrowDown
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
        {
            year: "2010",
            title: "Engineering Degree",
            desc: "Graduated with a degree in Automotive/Electrical Engineering.",
            icon: <History size={20} />
        },
        {
            year: "2013",
            title: "Industry Experience",
            desc: "Worked with leading dealerships mastering OEM diagnostic platforms.",
            icon: <Zap size={20} />
        },
        {
            year: "2016",
            title: "Advanced Certifications",
            desc: "Earned certifications in ECU programming, vehicle coding, and CAN bus systems.",
            icon: <Award size={20} />
        },
        {
            year: "2018",
            title: "Founded KingsCarNot",
            desc: "Launched the company to bring dealership-grade diagnostics to everyone.",
            icon: <Milestone size={20} />
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">

            {/* 1. HERO SECTION: THE VISIONARY */}
            <section className="relative pt-44 pb-24 w-[80%] max-w-[1500px] mx-auto border-b border-slate-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div className="space-y-10">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-blue-600"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">Founder & Lead Engineer</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
                            Meet The <br /> <span className="text-slate-200">Visionary.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-lg italic border-l-4 border-blue-600 pl-8">
                            "A passionate automobile diagnostician with over a decade of hands-on experience in electronic architecture."
                        </p>
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="pt-8 hidden lg:block">
                            <ArrowDown size={32} className="text-slate-200" />
                        </motion.div>
                    </div>

                    <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-100 group">
                        {/* Placeholder for Photo */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                            <History size={48} className="mb-4 opacity-20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Upload Coming Soon</span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        <div className="absolute bottom-12 left-12 text-white">
                            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">King</h3>
                            <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 mt-2">Founder & Lead Diagnostician</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. BIOGRAPHY & TECHNICAL SKILL MATRIX */}
            <section className="py-32 w-[80%] max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-7 space-y-12">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Technical <br /> Philosophy</h2>
                        <div className="space-y-8 text-xl text-slate-600 font-medium leading-relaxed">
                            <p>
                                With a deep passion for automobiles and technology, King founded <span className="text-slate-900 font-bold">KingsCarNotAutomobile</span> to revolutionize the way vehicle owners access professional diagnostics. His journey started from a genuine curiosity about how vehicles communicate through electronic systems.
                            </p>
                            <p>
                                Over the years, he has mastered advanced diagnostic tools across all major vehicle brands — from European luxury cars to Japanese and American models. His expertise spans ECU programming, vehicle coding, and complex electrical fault diagnosis.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[48px] border border-slate-100 relative overflow-hidden group">
                                <QuoteIcon className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-200/50" />
                                <p className="text-slate-900 font-black italic text-2xl leading-tight relative z-10">
                                    "Every vehicle owner deserves access to accurate, transparent, and affordable diagnostic services."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skill Matrix */}
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] border-b border-slate-100 pb-6">Engineering Capabilities</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-[24px] hover:border-blue-600/30 hover:shadow-xl transition-all group">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 bg-slate-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{skill.name}</span>
                                    </div>
                                    <Zap size={16} className="text-slate-200 group-hover:text-blue-500 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. JOURNEY & MILESTONES (The Dark Roadmap) */}
            <section className="py-32 bg-[#04070F] text-white rounded-[60px] mx-[2%] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

                <div className="relative z-10 w-[80%] max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-white/5 pb-16">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">A Decade of Precision</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                                Journey & <br /> <span className="text-blue-500">Milestones</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-lg max-w-sm font-medium leading-relaxed">
                            From academic foundations to industry-leading diagnostic breakthroughs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="relative p-10 bg-white/[0.03] border border-white/5 rounded-[48px] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-500 group"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-500">
                                        {item.year}
                                    </span>
                                    <div className="p-3 bg-white/5 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xl font-black uppercase tracking-tight text-white leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1 h-6 bg-blue-600 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

// Simple internal icon for the bio quote
const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11.5M14.017 21H10.017V15C10.017 13.8954 9.12157 13 8.017 13H5.017C4.46472 13 4.017 13.4477 4.017 14V21M14.017 21H18.017" />
    </svg>
);

export default FounderPage;