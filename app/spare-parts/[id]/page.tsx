"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { spareParts } from '../../data/spareParts';

const PartDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const part = spareParts.find(p => p.id === id) || spareParts[0];

    return (
        <main className="min-h-screen bg-white pt-40 pb-32">
            <div className="w-[85%] max-w-[1500px] mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12 hover:text-emerald-600 transition-colors group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Inventory
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left: Gallery */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* FIXED: Parent relative for LCP Image */}
                        <div className="relative aspect-square rounded-[56px] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl">
                            <Image
                                src={part.image}
                                alt={part.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 700px"
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden opacity-50 hover:opacity-100 transition-all cursor-pointer">
                                    <Image
                                        src={part.image}
                                        alt="Product View"
                                        fill
                                        sizes="200px"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technical Specs */}
                    <div className="lg:col-span-6 space-y-12 py-4">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-[10px] font-black text-emerald-600 tracking-widest uppercase rounded-lg">
                                {part.category} / OEM Component
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-[#00215E] tracking-tighter uppercase leading-[0.9]">
                                {part.name}
                            </h1>
                            <p className="text-4xl font-black text-emerald-600 tracking-tighter">{part.price}</p>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                            {part.description}
                        </p>

                        <div className="space-y-6 pt-10 border-t border-slate-100">
                            <h4 className="text-[11px] font-black text-[#00215E] uppercase tracking-[0.2em]">Vehicle Compatibility</h4>
                            <div className="flex flex-wrap gap-3">
                                {part.compatibility.map(c => (
                                    <span key={c} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black text-slate-600">
                                        Chassis {c}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <div className="flex items-center justify-between w-full sm:w-40 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <button className="p-2 hover:text-emerald-600 transition-colors"><Minus size={20} /></button>
                                <span className="font-black text-lg">01</span>
                                <button className="p-2 hover:text-emerald-600 transition-colors"><Plus size={20} /></button>
                            </div>
                            <button className="flex-grow bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#00215E] transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3">
                                <ShoppingCart size={18} /> Add to System
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-12">
                            {[
                                { icon: <ShieldCheck size={22} />, label: "OEM Certified" },
                                { icon: <Zap size={22} />, label: "Sync Ready" },
                                { icon: <Truck size={22} />, label: "Global Express" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-3 group">
                                    <div className="p-4 bg-slate-50 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PartDetails;