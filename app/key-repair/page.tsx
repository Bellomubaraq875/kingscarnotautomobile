"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mbKeys } from '../data/keyRepairData';
import { Key, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export default function KeyRepairPage() {
    return (
        <main className="min-h-screen bg-[#F7F9FA] font-jost overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
                        alt="Engineering Hero"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-[#F7F9FA]" />

                <div className="relative z-10 text-center space-y-6 px-6">
                    <div className="flex items-center justify-center gap-3 text-blue-400">
                        <ShieldCheck size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Protocol Engineering</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        Precision <span className="text-blue-500">Keys.</span>
                    </h1>
                    <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-medium">
                        Advanced restoration, resynchronization, and circuit-level repairs for Mercedes-Benz electronic vehicle keys.
                    </p>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="w-[90%] max-w-[1450px] mx-auto -mt-20 relative z-20 pb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mbKeys.map((item) => (
                        <Link
                            key={item.id}
                            href={`/key-repair/${item.id}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-[40px] p-8 space-y-6 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:-translate-y-2">

                                {/* Image Glass Container */}
                                <div className="relative aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Detail Area */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{item.category}</span>
                                        <Cpu size={14} className="text-slate-300" />
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2">
                                        {item.details}
                                    </p>
                                </div>

                                <div className="pt-2 flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                                    View Specs <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}