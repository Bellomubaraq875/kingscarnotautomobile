"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { technicalServices } from "../data/servicesData";
import { ChevronRight, ArrowUpRight, Star, Cpu, Activity, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="min-h-screen bg-[#FDFDFF]" />;

  return (
    <main className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-20 overflow-hidden font-jost">
      {/* 1. HERO */}
      <section className="w-[80%] max-w-[1400px] mx-auto min-h-[90vh] flex items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <span className="text-blue-600">Services</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] uppercase">
              Automotive Tech <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Built For Precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium">KingsCarNot offers smart diagnostic services designed to simplify vehicle integrity management.</p>
            <Link href="/register">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center gap-4 group">
                Get Started <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-[80px] rotate-12 flex items-center justify-center border border-white shadow-inner relative">
              <Cpu size={140} className="text-blue-500/10 -rotate-12" />
              <div className="absolute -top-10 -right-5 w-40 h-40 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl flex items-center justify-center border border-white"><Activity size={60} className="text-blue-500" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID */}
      <section className="w-[80%] max-w-[1400px] mx-auto py-32 space-y-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 uppercase border-b border-slate-100 pb-12">Expert Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalServices.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <motion.div whileHover={{ y: -10 }} className="bg-white p-12 rounded-[48px] border border-slate-50 hover:border-blue-100 transition-all hover:shadow-2xl group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{service.shortDesc}</p>
                </div>
                <div className="pt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Explore More <ChevronRight size={14} /></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}