"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Play, Calendar, ArrowRight, Target, Users } from 'lucide-react';
import { dummyMedia } from '../data/dummyMedia';

const MediaCenter = () => {
    return (
        <main className="min-h-screen bg-white">

            {/* 1. IMMERSIVE HERO SECTION (85vh) */}
            <section className="relative h-[85vh] flex items-center justify-center bg-[#020617] text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1e3a8a_0%,transparent_70%)] opacity-30 pointer-events-none" />

                <div className="relative z-10 w-[80%] max-w-[1500px] mx-auto space-y-10">
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">
                        <Target size={14} className="text-blue-500" /> Engineering broadcasts
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <Users size={14} className="text-blue-500" /> Live diagnostics
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                        Technical <br /> <span className="text-blue-500">Insights</span> In Motion.
                    </h1>

                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                        Explore our laboratory of visual technical workshops, field intelligence, and specialized engineering sessions.
                    </p>
                </div>
            </section>

            {/* 2. MAIN CONTENT - Increased Gaps and Padding */}
            <section className="py-40 w-[80%] max-w-[1500px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-32"> {/* Massive gap between Sidebar and Feed */}

                    {/* LEFT SIDEBAR */}
                    <aside className="w-full lg:w-80 shrink-0 space-y-16">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">The <br /> Library</h2>
                            <p className="text-base text-slate-500 leading-relaxed font-medium">
                                Our archive of engineering breakthroughs and diagnostic protocols.
                            </p>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search sessions..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors">
                                <Search size={18} />
                            </button>
                        </div>

                        <nav className="flex flex-col border-t border-slate-100 pt-10">
                            {['All Sessions', 'Technical Workshops', 'Live Diagnostics', 'ECU Coding', 'Security Systems'].map((cat, i) => (
                                <button
                                    key={i}
                                    className={`flex items-center justify-between py-6 text-[11px] font-black uppercase tracking-[0.3em] border-b border-slate-50 transition-all group ${i === 0 ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'
                                        }`}
                                >
                                    <span className="group-hover:translate-x-2 transition-transform">{cat}</span>
                                    <span className="text-[10px] opacity-30 font-bold">{i === 0 ? '24' : `0${i + 3}`}</span>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* RIGHT FEED - Increased Grid Spacing */}
                    <div className="flex-grow space-y-32"> {/* Vertical breathing space between rows */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32"> {/* Increased gap between individual cards */}
                            {dummyMedia.map((item) => (
                                <Link href={`/media-center/${item.id}`} key={item.id} className="group block">
                                    <motion.div whileHover={{ y: -12 }} className="space-y-10 h-full flex flex-col">

                                        {/* Cinematic Thumbnail */}
                                        <div className="relative aspect-video rounded-[56px] overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 80vw, 600px"
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-700" />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-700 flex items-center justify-center">
                                                    <Play size={28} fill="currentColor" />
                                                </div>
                                            </div>

                                            <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[11px] font-black text-white tracking-[0.2em]">
                                                {item.duration}
                                            </div>
                                        </div>

                                        {/* Metadata & Content with extra internal spacing */}
                                        <div className="space-y-6 flex-grow px-4">
                                            <div className="flex items-center justify-between text-[11px] font-black tracking-[0.4em] uppercase">
                                                <span className="text-blue-600">{item.category}</span>
                                                <span className="text-slate-400 flex items-center gap-2">
                                                    <Calendar size={14} /> {item.date}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors uppercase">
                                                {item.title}
                                            </h3>
                                            <p className="text-xl text-slate-500 line-clamp-2 leading-relaxed font-medium">
                                                {item.description}
                                            </p>

                                            <div className="pt-10 flex items-center gap-3 text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] border-t border-slate-100">
                                                Watch Broadcast <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        <button className="w-full py-8 border-2 border-slate-100 rounded-[40px] text-[12px] font-black uppercase tracking-[0.5em] text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                            Load More Broadcasts
                        </button>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default MediaCenter;