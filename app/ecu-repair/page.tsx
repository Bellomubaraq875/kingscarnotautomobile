"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ecuRepairs } from '@/data/ecuRepairData';
import { Cpu, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

export default function EcuRepairGallery() {
    return (
        <main className="min-h-screen bg-[#F7F9FA] pt-48 pb-32 font-jost">

            {/* HEADER SECTION */}
            <section className="w-[90%] max-w-[1450px] mx-auto text-center mb-24 space-y-4">
                <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Activity size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Diagnostic Lab</span>
                </div>
                <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                    ECU <span className="text-blue-600">Restoration.</span>
                </h1>
                <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">
                    Circuit-level repairs and digital synchronization for high-performance automotive control modules.
                </p>
            </section>

            {/* 4-COLUMN GRID */}
            <section className="w-[90%] max-w-[1450px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ecuRepairs.map((item) => (
                        <Link
                            key={item.id}
                            href={`/ecu-repair/${item.id}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-[40px] p-8 space-y-6 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2">

                                <div className="relative aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{item.category}</span>
                                        <Cpu size={14} className="text-slate-300" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                                    Analyze Protocol <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}