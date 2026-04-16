"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter, ArrowUpRight, Zap, Target } from 'lucide-react';
import { spareParts } from '../data/spareParts';

const SparePartsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. INTERACTIVE HERO */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_#f0fdf4_0%,_#ffffff_100%)]" />

                <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-emerald-500"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase">OE Parts Inventory</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-[#00215E] tracking-tighter uppercase leading-[0.9]">
                            Choose Your <br /> <span className="text-emerald-500">Components</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-md leading-relaxed">
                            Access dealer-grade hardware and synchronized control units. Engineered for ultimate vehicle performance.
                        </p>
                    </div>

                    {/* Interactive Visual Element */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200"
                                alt="Automotive Visual"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 800px"
                                className="object-cover"
                            />
                            {/* Hotspot Floating Label */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute top-1/4 right-1/4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-2xl"
                            >
                                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                                <span className="text-[10px] font-black uppercase tracking-widest">ECU SYNC POINT</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT GRID */}
            <section className="py-24 w-[85%] max-w-[1500px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black text-[#00215E] uppercase tracking-tighter">Current Stock</h2>
                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">Verified OEM Components</p>
                    </div>
                    <button className="flex items-center gap-2 px-8 py-4 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                        <Filter size={14} /> Filter Inventory
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {spareParts.map((part) => (
                        <motion.div
                            key={part.id}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-slate-100 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                        >
                            {/* FIXED: Parent is now relative */}
                            <div className="relative h-72 bg-slate-50 overflow-hidden">
                                <Image
                                    src={part.image}
                                    alt={part.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black text-[#00215E] uppercase border border-slate-100 shadow-sm">
                                        {part.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-black text-[#00215E] leading-tight tracking-tight">{part.name}</h3>
                                    </div>
                                    <p className="text-emerald-600 font-black text-xl tracking-tighter">{part.price}</p>
                                </div>

                                <p className="text-base text-slate-500 font-medium line-clamp-2 leading-relaxed">
                                    {part.description}
                                </p>

                                <div className="flex items-center justify-between pt-8 border-t border-slate-50 gap-4">
                                    <Link href={`/spare-parts/${part.id}`} className="flex-grow">
                                        <button className="w-full bg-[#00215E] text-white py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
                                            ORDER NOW <ArrowUpRight size={14} />
                                        </button>
                                    </Link>
                                    <button className="p-4.5 bg-slate-50 rounded-2xl text-[#00215E] hover:bg-slate-900 hover:text-white transition-all">
                                        <ShoppingBag size={20} />
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