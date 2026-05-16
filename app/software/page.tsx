"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, ArrowRight, Zap, Globe } from 'lucide-react';
import { softwareSuites } from '../data/softwareData';

export default function SoftwarePage() {
    return (
        <main className="min-h-screen bg-[#F7F9FA] font-jost pb-32">

            {/* ARCHITECTURAL HERO */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-50">
                    <Image
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
                        alt="Engineering Hub"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-[#F7F9FA]" />

                <div className="relative z-10 text-center space-y-6 px-6">
                    <div className="flex items-center justify-center gap-3 text-blue-400">
                        <Terminal size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em]">System Architecture</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        Digital <span className="text-blue-500">Suites.</span>
                    </h1>
                    <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-medium">
                        OEM Diagnostic platforms and Engineering development tools calibrated for high-integrity vehicle synchronization.
                    </p>
                </div>
            </section>

            {/* SOFTWARE GRID */}
            <section className="w-[90%] max-w-[1450px] mx-auto -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {softwareSuites.map((suite) => (
                        <Link
                            key={suite.id}
                            href={`/software/${suite.id}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2">

                                <div className="relative w-full h-72 rounded-3xl overflow-hidden border border-slate-50 mb-8">
                                    <Image src={suite.image} alt={suite.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {suite.isPro && (
                                        <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                                            <ShieldCheck size={12} className="text-blue-400" />
                                            <span className="text-[9px] font-black text-white uppercase tracking-widest">Engineering Level</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{suite.category}</span>
                                            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">{suite.title}</h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>

                                    <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">
                                        {suite.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {suite.tools.slice(0, 3).map((tool) => (
                                            <span key={tool} className="px-4 py-2 bg-[#F7F9FA] border border-slate-100 rounded-xl text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}