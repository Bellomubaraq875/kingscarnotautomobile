"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Share2, Bookmark } from 'lucide-react';

const newsArticles = [
    {
        id: 1,
        category: "Technical Update",
        title: "Mastering FBS-4: New Frontiers in Mercedes Security Synchronization",
        excerpt: "Exploring the latest protocols for 2024+ Mercedes-Benz immobilizer systems and ECU marriages.",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
        date: "April 12, 2026",
        readTime: "8 min read",
        featured: true
    },
    {
        id: 2,
        category: "Case Study",
        title: "Restoring the Nerve Center: 7G-Tronic VGS3 Recovery",
        excerpt: "A deep dive into a successful transmission control module revival for a classic S-Class.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        date: "April 08, 2026",
        readTime: "5 min read",
        featured: false
    },
    {
        id: 3,
        category: "Industry News",
        title: "The Shift to Cloud-Based OEM Diagnostics",
        excerpt: "How BMW and VAG Group are transitioning their workshop tools to always-on cloud environments.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
        date: "April 05, 2026",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 4,
        category: "Maintenance",
        title: "EIS Failure Prevention in High-Humidity Regions",
        excerpt: "Proactive steps to protect electronic ignition switches from environmental degradation in coastal cities.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop",
        date: "March 28, 2026",
        readTime: "4 min read",
        featured: false
    }
];

const NewsPage = () => {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            {/* 1. EDITORIAL HEADER */}
            <section className="w-[85%] max-w-[1500px] mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-blue-600"></span>
                            <span className="text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase">Field Reports</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Technical <br /> <span className="text-slate-200">Journal</span>
                        </h1>
                    </div>
                    <p className="text-slate-500 font-medium max-w-sm text-lg leading-relaxed">
                        Expert insights, software updates, and engineering breakthroughs from the KingsCarNot team.
                    </p>
                </div>
            </section>

            {/* 2. FEATURED ARTICLE (Standout Section) */}
            <section className="w-[85%] max-w-[1500px] mx-auto mb-24">
                {newsArticles.filter(a => a.featured).map(article => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer"
                    >
                        <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden rounded-[40px] shadow-2xl">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="lg:col-span-5 space-y-6">
                            <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
                                {article.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest pt-4">
                                <span className="flex items-center gap-2"><Calendar size={14} /> {article.date}</span>
                                <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* 3. NEWS GRID */}
            <section className="w-[85%] max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {newsArticles.filter(a => !a.featured).map((article) => (
                        <motion.div
                            key={article.id}
                            whileHover={{ y: -10 }}
                            className="group space-y-6 flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
                                        <Bookmark size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <span className="text-[9px] font-black tracking-[0.2em] text-blue-600 uppercase border-l-2 border-blue-600 pl-3">
                                    {article.category}
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-all pt-4 border-t border-slate-50">
                                READ FULL ARTICLE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. NEWSLETTER BLOCK (Reusing Brand Elements) */}
            <section className="w-[85%] max-w-[1500px] mx-auto mt-32">
                <div className="bg-[#00215E] rounded-[48px] p-12 md:p-20 relative overflow-hidden text-center space-y-8 shadow-2xl shadow-blue-900/40">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Stay Synchronized.</h2>
                        <p className="text-blue-100/70 text-lg font-medium">Join 2,000+ workshop owners and enthusiasts receiving our weekly technical bulletins.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                            <input type="email" placeholder="Your engineering email" className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 transition-all" />
                            <button className="bg-white text-[#00215E] px-8 py-4 rounded-2xl font-black tracking-widest text-xs uppercase hover:bg-blue-500 hover:text-white transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NewsPage;