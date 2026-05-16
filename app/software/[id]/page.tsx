"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Download, ExternalLink, Zap } from 'lucide-react';
import { softwareSuites } from '@/app/data/softwareData';

export default function SoftwarePage() {
    return (
        <main className="min-h-screen bg-[#04070F] font-jost pb-32">

            {/* CINEMATIC HERO */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000"
                        alt="Technical Architecture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#04070F]/50 via-[#04070F] to-[#04070F]" />

                <div className="relative z-10 text-center space-y-8 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 text-blue-400"
                    >
                        <Terminal size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em]">Binary Integrity Protocols</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
                    >
                        THE <span className="text-blue-500">SUITE.</span>
                    </motion.h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                        Professional-grade diagnostic software and engineering development tools.
                        Calibrated for variant coding, ECU development, and security synchronization.
                    </p>
                </div>
            </section>

            {/* SOFTWARE GRID */}
            <section className="w-[90%] max-w-[1400px] mx-auto -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {softwareSuites.map((suite) => (
                        <div
                            key={suite.id}
                            className="group relative bg-[#0A0F1D] border border-white/5 rounded-[40px] overflow-hidden p-1 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_80px_-20px_rgba(37,99,235,0.3)]"
                        >
                            <div className="flex flex-col h-full bg-[#0A0F1D] rounded-[38px] p-8 md:p-10 space-y-8">

                                {/* Image Header */}
                                <div className="relative w-full h-64 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src={suite.image} alt={suite.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent" />

                                    {suite.isPro && (
                                        <div className="absolute top-6 left-6 bg-blue-600 px-4 py-1.5 rounded-full flex items-center gap-2">
                                            <ShieldCheck size={12} className="text-white" />
                                            <span className="text-[9px] font-black text-white uppercase tracking-widest">Dev Access</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{suite.category}</span>
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{suite.title}</h3>
                                        </div>
                                        <Link href={`/software/${suite.id}`} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                            <ExternalLink size={18} />
                                        </Link>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                        {suite.description}
                                    </p>

                                    {/* Tool Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {suite.tools.map((tool) => (
                                            <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        <Zap size={14} className="text-blue-500" /> V. 2026.04 Ready
                                    </div>
                                    <button className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
                                        Request Setup <Download size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER CALLOUT */}
            <section className="mt-32 w-[90%] max-w-[1400px] mx-auto text-center">
                <div className="bg-gradient-to-r from-blue-600/10 to-transparent border border-white/5 rounded-[40px] p-16 space-y-8">
                    <Cpu size={48} className="text-blue-500 mx-auto" />
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Remote Installation Available</h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
                        All software suites can be remotely installed and configured by our engineering team via high-speed tunneling protocols.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                        Consult Specialist
                    </Link>
                </div>
            </section>
        </main>
    );
}