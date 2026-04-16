"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    History,
    Target,
    ShieldCheck,
    ArrowRight,
    Scale,
    Wrench,
    HeartPulse,
    User,
    Star,
    Globe,
    Zap
} from 'lucide-react';

const About = () => {
    const storyPoints = [
        {
            title: "Our Heritage",
            icon: <History className="text-blue-600" size={24} />,
            content: "Founded in 2014, KingsCarNotAutomobile emerged from a passion for precision engineering. What started as a specialized diagnostic studio has evolved into a premier hub for high-end vehicle software and electronic synchronization."
        },
        {
            title: "The Mission",
            icon: <Target className="text-emerald-600" size={24} />,
            content: "To bridge the gap between dealership-level complexity and independent accessibility. We empower vehicle owners with the same diagnostic tools and patchers used by factory engineers, delivered with absolute transparency."
        },
        {
            title: "Our Values",
            icon: <ShieldCheck className="text-indigo-600" size={24} />,
            content: "Integrity is our engine. We prioritize technical accuracy over speed, ensuring that every line of code and every diagnostic scan meets the rigorous safety standards of original equipment manufacturers."
        }
    ];

    const coreValues = [
        {
            title: "Trust & Integrity",
            icon: <Scale className="text-blue-500" size={24} />,
            desc: "We build lasting relationships through honest diagnostics and transparent pricing."
        },
        {
            title: "Technical Excellence",
            icon: <Wrench className="text-emerald-500" size={24} />,
            desc: "Our team stays ahead with continuous training on the latest vehicle technologies."
        },
        {
            title: "Customer First",
            icon: <HeartPulse className="text-rose-500" size={24} />,
            desc: "Every vehicle gets the same meticulous attention, regardless of make or model."
        }
    ];

    const stats = [
        { value: "10+", label: "Years Experience", icon: <User size={20} className="text-blue-400" /> },
        { value: "5,000+", label: "Happy Customers", icon: <Star size={20} className="text-amber-400" /> },
        { value: "50+", label: "Brands Supported", icon: <Globe size={20} className="text-emerald-400" /> },
        { value: "15+", label: "Team Members", icon: <Zap size={20} className="text-indigo-400" /> }
    ];

    return (
        <main className="relative min-h-screen bg-white overflow-hidden">
            {/* 1. LUMINOUS PAGE-WIDE GRADIENT */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#f0f9ff_0%,_#f0fff4_30%,_#ffffff_70%)]" />

            {/* 2. HERO SECTION */}
            <section className="relative z-10 w-full h-[60vh] flex items-center overflow-hidden">
                <Image
                    src="/images/revanmp.jpg"
                    alt="KingsCarNot Workspace"
                    fill
                    className="object-cover brightness-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />

                <div className="relative z-20 w-[85%] max-w-[1500px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-xl space-y-6"
                    >
                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            About <span className="text-blue-600">Us</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                            Engineering excellence at the intersection of luxury and technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. OUR STORY SECTION */}
            <section className="relative z-10 py-32 border-b border-slate-100">
                <div className="w-[85%] max-w-[1500px] mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            Our <span className="text-slate-400">Story</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                        {storyPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                                className="p-12 md:p-16 space-y-8 transition-all duration-500 first:pl-0 last:pr-0"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center">
                                    {point.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-[12px] font-black tracking-[0.4em] text-slate-900 uppercase">
                                        {point.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                                        {point.content}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 uppercase cursor-pointer group">
                                    Discover More
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES SECTION */}
            <section className="relative z-10 py-32">
                <div className="w-[85%] max-w-[1500px] mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            Our Core <span className="text-slate-400">Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {coreValues.map((value, i) => (
                            <div key={i} className="flex flex-col items-center group space-y-6">
                                <div className="w-16 h-16 rounded-full border border-slate-100 bg-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-110">
                                    {value.icon}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. IMPACT STATS SECTION */}
            <section className="relative z-10 py-32 bg-slate-50/50">
                <div className="w-[85%] max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-10 bg-[#00215E] rounded-[48px] shadow-2xl relative overflow-hidden">
                        {/* Ambient Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full" />

                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4 px-8 border-r last:border-0 border-white/10 relative z-10">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    {stat.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                        {stat.value}
                                    </h3>
                                    <p className="text-[10px] font-black tracking-[0.3em] text-blue-200/50 uppercase text-nowrap">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;