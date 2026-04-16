"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Filter, ArrowUpRight, Zap } from 'lucide-react';
import { spareParts } from '../data/spareParts';

const SparePartsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. INTERACTIVE HERO (Inspired by orange car reference) */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_#f0fdf4_0%,_#ffffff_100%)]" />

                <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-emerald-500"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase">OE Parts Inventory</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-[#00215E] tracking-tighter uppercase leading-none">
                            Choose Your <br /> <span className="text-emerald-500">Components</span>
                        </h1>
                        <p className="text-lg text-slate-500 font-medium max-w-md">
                            Access dealer-grade hardware and synchronized control units. Ready for immediate deployment.
                        </p>
                    </div>

                    {/* Interactive Visual Element */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200"
                                alt="Automotive Visual"
                                fill
                                className="object-cover"
                            />
                            {/* Hotspot Floating Label (From Reference 1) */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute top-1/4 right-1/4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-2xl"
                            >
                                <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                                <span className="text-[10px] font-black uppercase tracking-widest">ECU SYNC POINT</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT GRID (Inspired by Reference 2) */}
            <section className="py-24 w-[85%] max-w-[1500px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-[#00215E] uppercase tracking-tighter">Current Stock</h2>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">Verified OEM Components</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                            <Filter size={14} /> Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {spareParts.map((part) => (
                        <motion.div
                            key={part.id}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 bg-slate-50 overflow-hidden">
                                <Image src={part.image} alt={part.name} fill className="object-cover" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black text-[#00215E] uppercase border border-slate-100">
                                        {part.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-black text-[#00215E] leading-tight">{part.name}</h3>
                                    <span className="text-emerald-600 font-black text-lg">{part.price}</span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">
                                    {part.description}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    <Link href={`/spare-parts/${part.id}`} className="flex-grow">
                                        <button className="w-full bg-[#00215E] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group">
                                            ORDER NOW <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <button className="ml-3 p-4 bg-slate-50 rounded-2xl text-[#00215E] hover:bg-slate-900 hover:text-white transition-all">
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SparePartsPage;