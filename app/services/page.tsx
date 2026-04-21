"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu, Key, Settings, Zap, ShieldCheck, Radio,
  ChevronRight, Star, Users, Activity, Layers, ArrowUpRight
} from "lucide-react";

const mainServices = [
  { id: "ecu-repair", title: "ECU Repair", desc: "Surgical restoration of Engine Control Units and custom performance mapping.", icon: <Cpu className="text-blue-600" /> },
  { id: "eis-repair", title: "EIS/EZS Ignition", desc: "Electronic Ignition Switch diagnostics for seamless authorization and startup.", icon: <Radio className="text-purple-600" /> },
  { id: "fbs4-security", title: "FBS-4 Security", desc: "Advanced Authorization System solutions for modern vehicle electronic security.", icon: <ShieldCheck className="text-emerald-600" /> },
  { id: "module-prog", title: "Module Programming", desc: "Intelligent Servo Module (ISM) and 7G-Tronic calibration and sync.", icon: <Settings className="text-orange-600" /> },
  { id: "key-repair", title: "Key Restoration", desc: "Hardware and software restoration for specialized IR and transponder keys.", icon: <Key className="text-indigo-600" /> },
  { id: "wiring-harness", title: "Wiring & CAN Bus", desc: "Comprehensive loom restoration and circuit integrity testing for complex bays.", icon: <Zap className="text-amber-600" /> },
];

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#FDFDFF]" />;

  return (
    <main className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-20 overflow-hidden">

      {/* 1. CINEMATIC HERO SECTION (90vh) */}
      <section className="w-[80%] max-w-[1400px] mx-auto min-h-[90vh] flex items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="text-slate-200">/</span>
              <span className="text-blue-600">Services</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] uppercase">
              Automotive Tech <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Built For Precision.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              KingsCarNot offers a range of smart diagnostic services designed to simplify vehicle integrity management. We bridge the gap between dealerships and independent owners.
            </p>
            <Link href="/register">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center gap-4 group">
                Get Started <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trendex-Style Floating Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="w-[450px] h-[450px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-[80px] rotate-12 flex items-center justify-center border border-white shadow-inner relative">
              <motion.div
                animate={{ rotate: [-12, -8, -12] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <Cpu size={180} className="text-blue-500/10" />
              </motion.div>

              {/* Floating UI Cards */}
              <div className="absolute -top-10 -right-5 w-40 h-40 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl flex items-center justify-center border border-white">
                <Activity size={60} className="text-blue-500" />
              </div>
              <div className="absolute bottom-10 -left-10 w-48 h-20 bg-white rounded-2xl shadow-2xl flex items-center px-6 gap-4 border border-white">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Protocol</span>
                  <span className="text-[9px] font-bold text-slate-400">SYNC ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (80% Width) */}
      <section className="w-[80%] max-w-[1400px] mx-auto py-32 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-100 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 uppercase">Expert Capabilities</h2>
          <p className="text-slate-400 font-medium text-sm max-w-xs">Standardized electronic solutions for premium vehicle architectures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, i) => (
            <Link href={`/services/${service.id}`} key={i}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[48px] border border-slate-50 hover:border-blue-100 transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 24, className: "group-hover:text-white transition-colors" })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{service.desc}</p>
                </div>
                <div className="pt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore More <ChevronRight size={14} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SHOWCASE STRENGTHS */}
      <section className="w-[80%] max-w-[1400px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-t border-slate-50">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-none uppercase">
            Surgical <br /> <span className="text-slate-300">Precision.</span>
          </h2>
          <p className="text-slate-500 max-w-md text-lg leading-relaxed font-medium">
            We combine automotive engineering with deep software expertise to resolve complex module failures that dealerships typically replace at 5x the cost.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-4">
            <div className="space-y-2">
              <h4 className="text-4xl font-bold text-slate-900 tracking-tighter">15k+</h4>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Diagnostics</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-bold text-slate-900 tracking-tighter">99.8%</h4>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Sync Accuracy</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-2xl space-y-6 max-w-sm ml-auto">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-sm text-slate-500 font-medium italic leading-relaxed">
              "The FBS-4 resync was flawless. KingsCarNot saved me from a full module replacement at the dealer."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs uppercase">KJ</div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase">Kevin J.</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">S-Class Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA (Trendex Gradient) */}
      <section className="w-[80%] max-w-[1400px] mx-auto">
        <div className="bg-slate-950 rounded-[60px] p-20 md:p-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-teal-500/20 opacity-50" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">Ready to restore <br /> Vehicle Integrity?</h2>
            <Link href="/register">
              <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                Book A Diagnosis
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}