"use client";

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Bookmark, Cpu, ShieldCheck } from 'lucide-react';
import { dummyNews } from '../../data/dummyNews';

const ArticlePage = () => {
    const { id } = useParams();
    const router = useRouter();

    const article = dummyNews.find(a => a.id === id);

    if (!article) return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-slate-400">Article Not Found</div>;

    return (
        <main className="min-h-screen bg-white">
            {/* Cinematic Hero */}
            <section className="relative w-full h-[65vh] flex items-end pb-20 overflow-hidden">
                <Image src={article.image} alt={article.title} fill className="object-cover brightness-50" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />

                <div className="relative z-20 w-[85%] max-w-[1500px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-6">
                        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-400 uppercase mb-4">
                            <ArrowLeft size={14} /> Back to Journal
                        </button>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">{article.title}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-30 -mt-10 pb-32">
                <div className="w-[85%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-slate-50">
                        <div className="flex items-center justify-between mb-12 pb-8 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest">
                            <span>BY {article.author}</span>
                            <span>{article.date}</span>
                        </div>

                        <div className="space-y-8">
                            {article.content.map((para, i) => (
                                <p key={i} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-32">
                        <div className="bg-[#00215E] rounded-[32px] p-10 text-white space-y-4">
                            <ShieldCheck size={32} />
                            <h4 className="text-xl font-black uppercase tracking-tight">Technical Support</h4>
                            <p className="text-blue-100/60 text-lg font-medium">Need help with these protocols? Our engineers are ready to assist.</p>
                            <button className="w-full bg-blue-600 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">Book Coding Session</button>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default ArticlePage;