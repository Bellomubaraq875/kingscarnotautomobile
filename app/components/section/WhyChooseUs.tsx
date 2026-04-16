"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Timer, Zap, ShieldCheck, HeartPulse, Car } from 'lucide-react';

const WhyChooseUs = () => {
    const points = [
        {
            title: "Quick Response",
            desc: "Emergency diagnostic services with rapid turnaround times.",
            icon: <Timer size={20} className="text-blue-600" />,
        },
        {
            title: "Efficiency",
            desc: "Optimized coding processes to get you back on the road faster.",
            icon: <Zap size={20} className="text-blue-600" />,
        },
        {
            title: "Reliability",
            desc: "Manufacturer-grade tools ensuring long-term system stability.",
            icon: <ShieldCheck size={20} className="text-blue-600" />,
        },
        {
            title: "Expert Care",
            desc: "Specialized focus on complex Mercedes and BMW electronics.",
            icon: <HeartPulse size={20} className="text-blue-600" />,
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="w-[80%] max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT: Styled Image with Automotive Decorative Element */}
                    <div className="relative w-full lg:w-1/2">
                        {/* The "Curved Corner" Frame */}
                        <div className="relative z-10 rounded-tl-[120px] rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                            <Image
                                src="/images/download (5).jpg"
                                alt="Professional Technician at Work"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Automotive Icon - Replaces the "+" */}
                        <div className="absolute -bottom-6 -left-6 z-20 w-20 h-20 bg-[#00215E] rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                            <Car size={32} className="text-white" strokeWidth={1.5} />
                        </div>

                        {/* Subtle background glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 blur-[100px] rounded-full opacity-60" />
                    </div>

                    {/* RIGHT: Content Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-sm" />
                                <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                                    Why Choose Us?
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                                When You <span className="inline-block px-4 py-1 bg-blue-100 text-[#00215E] rounded-xl skew-x-[-3deg]">Need</span> It Most 
                                Urgent <span className="inline-block px-4 py-1 bg-[#00215E] text-white rounded-xl skew-x-[-3deg]">Software</span> Care
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed max-w-xl text-lg pt-4">
                                Electronic failures don't wait for a convenient time. We provide expert vehicle coding,
                                programming, and emergency electronic system repair when performance matters most.
                            </p>
                        </div>

                        {/* Grid of Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 pt-6">
                            {points.map((point, i) => (
                                <div key={i} className="group flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {point.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                                            {point.title}
                                        </h4>
                                        <p className="text-[13px] text-slate-500 font-medium leading-snug">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;