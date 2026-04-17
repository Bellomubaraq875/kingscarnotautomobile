"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Clock, Calendar, Search, ArrowRight, Video } from 'lucide-react';
import { dummyMedia } from '../data/dummyMedia';

const MediaPage = () => {
    const featured = dummyMedia[0];

    return (
        <main className="min-h-screen bg-white">
            {/* 1. CINEMATIC VIDEO HERO */}
            <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src={featured.thumbnail}
                        alt="Featured Video"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
                </div>

                <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Featured Broadcast</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                            Technical <br /> <span className="text-blue-600">Insights</span> In Motion.
                        </h1>
                        <p className="text-xl text-slate-400 font-medium max-w-lg leading-relaxed">
                            Explore our library of technical workshops, field intelligence, and live diagnostic sessions.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href={`/media-center/${featured.id}`}>
                                <button className="bg-white text-black px-10 py-5 rounded-2xl font-black tracking-widest text-xs uppercase flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all">
                                    <Play size={16} fill="currentColor" /> Watch Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative group cursor-pointer">
                        <Link href={`/media-center/${featured.id}`}>
                            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                                <Image src={featured.thumbnail} alt={featured.title} fill sizes="(max-width: 1200px) 100vw, 800px" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                                        <Play size={32} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. MEDIA GRID */}
            <section className="py-24 w-[85%] max-w-[1500px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">The Library</h2>
                        <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Latest Technical Uploads</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <input type="text" placeholder="Search videos..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-600 transition-all" />
                        <Search size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {dummyMedia.map((item) => (
                        <Link key={item.id} href={`/media-center/${item.id}`} className="group">
                            <motion.div whileHover={{ y: -8 }} className="space-y-6">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-200">
                                    <Image src={item.thumbnail} alt={item.title} fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-black rounded-lg">
                                        {item.duration}
                                    </div>
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white text-blue-600 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all flex items-center justify-center shadow-xl">
                                            <Play size={20} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <span className="text-blue-600">{item.category}</span>
                                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium line-clamp-2">{item.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MediaPage;