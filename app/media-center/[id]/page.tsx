"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ShieldCheck, Video } from 'lucide-react';
import { dummyMedia } from '../../data/dummyMedia';

const VideoPlayerPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const media = dummyMedia.find(m => m.id === id) || dummyMedia[0];

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="w-[85%] max-w-[1500px] mx-auto">

                {/* Navigation & Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4">
                        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-all group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Media Center
                        </button>
                        <h1 className="text-4xl md:text-6xl font-black text-[#00215E] tracking-tighter uppercase leading-none max-w-4xl">
                            {media.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 pt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2 text-blue-600"><Video size={14} /> {media.category}</span>
                            <span className="flex items-center gap-2"><Calendar size={14} /> {media.date}</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> {media.duration}</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-blue-600 transition-all"><Share2 size={20} /></button>
                        <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-blue-600 transition-all"><Bookmark size={20} /></button>
                    </div>
                </div>

                {/* Cinematic Video Player */}
                <div className="relative aspect-video rounded-[48px] overflow-hidden bg-slate-900 shadow-2xl border-4 border-slate-50 mb-16">
                    <iframe
                        src={media.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Content & Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-[12px] font-black tracking-[0.3em] text-slate-900 uppercase">Session Description</h3>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                                {media.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-100">
                            {media.tags.map(tag => (
                                <span key={tag} className="px-5 py-2.5 bg-slate-50 rounded-xl text-xs font-black text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-8">
                        <div className="bg-[#00215E] rounded-[40px] p-10 text-white relative overflow-hidden">
                            <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5" />
                            <div className="relative z-10 space-y-6">
                                <h4 className="text-2xl font-black uppercase tracking-tight">Need Technical Help?</h4>
                                <p className="text-blue-100/60 text-base font-medium">Our engineers are available for live coding sessions based on the techniques shown in this video.</p>
                                <button className="w-full bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">Request Support</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default VideoPlayerPage;