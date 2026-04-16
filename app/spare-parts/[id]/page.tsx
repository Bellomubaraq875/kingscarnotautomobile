"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, ArrowLeft, Plus, Minus } from 'lucide-react';
import { spareParts } from '../../data/spareParts';

const PartDetails = () => {
    const { id } = useParams();
    const part = spareParts.find(p => p.id === id) || spareParts[0];

    return (
        <main className="min-h-screen bg-white pt-40 pb-20">
            <div className="w-[85%] max-w-[1500px] mx-auto">
                <Link href="/spare-parts" className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12 hover:text-emerald-600 transition-colors">
                    <ArrowLeft size={14} /> Back to Showroom
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Cinematic Image Gallery */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-[48px] overflow-hidden bg-slate-50 border border-slate-100">
                            <Image src={part.image} alt={part.name} fill className="object-cover" />
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden opacity-50 hover:opacity-100 transition-all cursor-pointer">
                                    <Image src={part.image} alt="Thumbnail" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technical Specs & Ordering */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">
                                {part.category} / Authentic Component
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black text-[#00215E] tracking-tighter uppercase leading-none">
                                {part.name}
                            </h1>
                            <p className="text-3xl font-black text-emerald-600">{part.price}</p>
                        </div>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {part.description}
                        </p>

                        <div className="space-y-6 pt-8 border-t border-slate-100">
                            <h4 className="text-xs font-black text-[#00215E] uppercase tracking-widest">Compatibility List</h4>
                            <div className="flex flex-wrap gap-2">
                                {part.compatibility.map(c => (
                                    <span key={c} className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600">
                                        Chassis {c}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <button className="p-2"><Minus size={18} /></button>
                                <span className="font-black">01</span>
                                <button className="p-2 text-emerald-600"><Plus size={18} /></button>
                            </div>
                            <button className="bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#00215E] transition-all shadow-xl shadow-emerald-100">
                                Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-10">
                            {[
                                { icon: <ShieldCheck size={20} />, label: "OEM Certified" },
                                { icon: <Zap size={20} />, label: "Sync Ready" },
                                { icon: <Truck size={20} />, label: "Global Ship" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-2">
                                    <div className="text-emerald-500">{item.icon}</div>
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