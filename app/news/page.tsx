"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowUpRight, Cpu, Database, Key, ShieldCheck, Star } from 'lucide-react';
import { dummyNews } from '../data/dummyNews';

const NewsPortal = () => {
    const categories = ["All", "Technical Update", "Performance", "Innovation", "User Experience", "Mercedes", "BMW"];

    const recommendedTopics = [
        { name: "Data Privacy & Protection", count: 20, icon: <ShieldCheck size={14} /> },
        { name: "Cloud Computing", count: 12, icon: <Database size={14} /> },
        { name: "ECU Synchronization", count: 15, icon: <Cpu size={14} /> },
        { name: "Key Security", count: 8, icon: <Key size={14} /> },
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* 1. DARK HERO SECTION (Style from Image) */}
            <section className="relative pt-40 pb-32 bg-[#020617] overflow-hidden">
                {/* Subtle Grid & Glow */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1e3a8a_0%,transparent_70%)] opacity-30" />

                <div className="relative z-10 w-[85%] max-w-[1500px] mx-auto text-center space-y-8">
                    {/* Floating Avatar Decorations (Representative of Team/Users) */}
                    {[
                        { pos: "top-0 left-[10%]", color: "bg-blue-500" },
                        { pos: "top-20 right-[15%]", color: "bg-emerald-500" },
                        { pos: "bottom-10 left-[20%]", color: "bg-amber-500" },
                        { pos: "bottom-0 right-[25%]", color: "bg-indigo-500" },
                    ].map((avatar, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                            className={`absolute hidden lg:block w-12 h-12 rounded-full border-2 border-white/10 ${avatar.color} ${avatar.pos} shadow-xl`}
                        />
                    ))}

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            Discover <span className="text-amber-400">Insights</span>.<br />
                            Fuel Your <span className="text-white">Curiosity</span>.
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            Dive into a world of technical articles, expert opinions, and automotive engineering breakthroughs.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative group">
                        <input
                            type="text"
                            placeholder="Search Technical Articles..."
                            className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/5 transition-all"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-black hover:bg-white transition-all">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. MAIN FEED LAYOUT */}
            <section className="py-24 w-[85%] max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT: Article Feed */}
                    <div className="lg:col-span-8 space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Article Post</h2>
                            <p className="text-slate-500 font-medium">Get started today and take your leading experience wherever you go.</p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-100">
                            {categories.map((cat, i) => (
                                <button key={i} className={`px-5 py-2 rounded-full text-[11px] font-black tracking-widest uppercase transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                    }`}>
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* List of Articles */}
                        <div className="space-y-12">
                            {dummyNews.map((article) => (
                                <Link href={`/news/${article.id}`} key={article.id} className="group flex flex-col md:flex-row gap-8 items-start">
                                    <div className="relative w-full md:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                                        <Image src={article.image} alt={article.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                                            <span>{article.date}</span>
                                            <span className="text-blue-600">{article.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center justify-between pt-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-900">{article.author.charAt(0)}</div>
                                                <span className="text-xs font-bold text-slate-900">{article.author}</span>
                                            </div>
                                            <div className="flex gap-4 text-slate-300">
                                                <span className="text-[10px] font-black">READ FULL</span>
                                                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-600" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <button className="w-full py-4 border-2 border-slate-100 rounded-2xl text-[11px] font-black tracking-widest uppercase text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                            Load More Technical Posts
                        </button>
                    </div>

                    {/* RIGHT: Sidebar Navigation */}
                    <aside className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-32">

                        {/* Recommended Topics */}
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-black tracking-[0.2em] text-slate-900 uppercase">Recommended Topics</h4>
                            <div className="flex flex-wrap gap-3">
                                {recommendedTopics.map((topic, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl cursor-pointer hover:border-blue-500/30 transition-all">
                                        <span className="text-blue-600">{topic.icon}</span>
                                        <span className="text-xs font-bold text-slate-700">{topic.name}</span>
                                        <span className="text-[9px] text-slate-400 font-bold ml-1">{topic.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Premium Card (Inspired by Image) */}
                        <div className="relative p-10 bg-[#00215E] rounded-[40px] text-white overflow-hidden shadow-2xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 blur-[60px] rounded-full" />
                            <div className="relative z-10 space-y-6">
                                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-black">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <h4 className="text-2xl font-black tracking-tight">Access Technical Documents</h4>
                                <p className="text-blue-100/60 text-sm font-medium leading-relaxed">
                                    Unlock exclusive repair manuals, wiring diagrams, and high-level ECU coding tutorials with a Pro account.
                                </p>
                                <button className="w-full bg-amber-400 py-4 rounded-xl text-[11px] font-black tracking-widest text-black uppercase hover:bg-white transition-all">
                                    See All Plans
                                </button>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="p-8 border border-slate-100 rounded-[40px] space-y-4">
                            <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Stay Synchronized</h4>
                            <p className="text-xs text-slate-400 font-medium">Get quarterly software updates and field reports directly.</p>
                            <div className="relative">
                                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 px-6 py-4 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                            </div>
                        </div>

                    </aside>

                </div>
            </section>

        </main>
    );
};

export default NewsPortal;