"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { dummyNews } from '../data/dummyNews';

const NewsPage = () => {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <section className="w-[85%] max-w-[1500px] mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Technical <br /> <span className="text-slate-200">Journal</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-[85%] max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {dummyNews.map((article) => (
                        <Link href={`/news/${article.id}`} key={article.id} className="group">
                            <motion.div whileHover={{ y: -10 }} className="space-y-6">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
                                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[9px] font-black tracking-[0.2em] text-blue-600 uppercase">{article.category}</span>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{article.title}</h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed line-clamp-2">{article.excerpt}</p>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase pt-4 border-t border-slate-50">
                                    Read Full Article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default NewsPage;