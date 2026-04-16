"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
    Calendar,
    Clock,
    ArrowLeft,
    Share2,
    Bookmark,
    ShieldCheck,
    Cpu,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// In a real app, you would fetch this from your API based on the ID
const newsArticles = [
    {
        id: "1",
        category: "Technical Update",
        title: "Mastering FBS-4: New Frontiers in Mercedes Security Synchronization",
        subtitle: "Exploring the latest protocols for 2024+ Mercedes-Benz immobilizer systems and ECU marriages.",
        author: "Bello Mubaraq",
        content: `
      The evolution of the FBS-4 (Fahrberechtigungssystem) represents one of the most significant hurdles in modern automotive locksmithing and control module synchronization. Unlike its predecessor, FBS-3, which relied on local hash calculations, FBS-4 introduces a cloud-verified, certificate-based authentication system that connects the vehicle directly to the manufacturer's central servers.

      In our recent laboratory tests, we have successfully mapped the handshake sequence between the EIS (Electronic Ignition Switch) and the primary Engine Management System. This breakthrough allows for more efficient module replacement without the standard 48-hour cooldown periods usually mandated by dealership software.

      Key takeaways for workshops:
      1. Hardware synchronization now requires stable 13.5V power supply.
      2. Virtual handshake logs must be archived for security auditing.
      3. Use of high-speed CAN-FD interfaces is now mandatory for newer chassis.
    `,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
        date: "April 12, 2026",
        readTime: "8 min read",
        tags: ["Mercedes-Benz", "FBS-4", "Coding", "Security"]
    }
];

const ArticlePage = () => {
    const params = useParams();
    const router = useRouter();

    // Find the article based on URL ID
    const article = newsArticles.find(a => a.id === params.id) || newsArticles[0];

    return (
        <main className="min-h-screen bg-white">
            {/* 1. CINEMATIC HERO AREA */}
            <section className="relative w-full h-[70vh] flex items-end pb-20 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover brightness-50 scale-105"
                    priority
                />
                {/* Luminous blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#00215E]/30 z-0" />

                <div className="relative z-20 w-[85%] max-w-[1500px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl space-y-6"
                    >
                        <button
                            onClick={() => router.back()}
                            className="group flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase mb-8"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
                            Back to Journal
                        </button>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-[10px] font-black tracking-widest text-white uppercase">
                            {article.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                            {article.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. ARTICLE CONTENT LAYOUT */}
            <section className="relative z-30 -mt-10 pb-32">
                <div className="w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left Column: The Main Text */}
                    <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-slate-50">
                        <div className="flex items-center justify-between mb-12 pb-8 border-b border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black">
                                    {article.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{article.author}</p>
                                    <p className="text-xs text-slate-400 font-bold">{article.date} • {article.readTime}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 text-slate-300">
                                <button className="hover:text-blue-600 transition-colors"><Share2 size={18} /></button>
                                <button className="hover:text-blue-600 transition-colors"><Bookmark size={18} /></button>
                            </div>
                        </div>

                        {/* Render formatted content */}
                        <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                            {article.content.split('\n\n').map((para, i) => (
                                <p key={i} className="mb-6 text-xl">{para.trim()}</p>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 pt-12 border-t border-slate-50">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-black tracking-widest text-slate-400 uppercase border border-slate-100 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Technical Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="text-blue-600" size={20} />
                                <h3 className="text-[11px] font-black tracking-[0.3em] text-slate-900 uppercase">Related Systems</h3>
                            </div>
                            <ul className="space-y-4">
                                {['ECU Replacement', 'Immobilizer Sync', 'Cloud Coding', 'Module Marrying'].map(item => (
                                    <li key={item}>
                                        <Link href="/services" className="flex items-center justify-between text-sm font-bold text-slate-500 hover:text-blue-600 group transition-all">
                                            {item} <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#00215E] rounded-[32px] p-10 text-white relative overflow-hidden">
                            <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5" />
                            <div className="relative z-10 space-y-4">
                                <h4 className="text-xl font-black tracking-tight">Need Expert Assistance?</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed">Our engineers are available for complex remote coding sessions and FBS-4 synchronization.</p>
                                <button className="w-full bg-blue-600 py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-blue-600 transition-all">
                                    Book Session
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default ArticlePage;
