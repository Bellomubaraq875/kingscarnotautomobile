"use client";

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden">

      {/* 1. BACKGROUND IMAGE WITH BLUE OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('/images/Car racing.jpg')`,
        }}
      >
        {/* The Exact Brand Blue Tint - adjusted opacity for high-class depth */}
        <div className="absolute inset-0 bg-[#00215E]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00215E]/50 via-transparent to-[#00215E]" />
      </div>

      {/* 2. CONTENT CONTAINER (80% Width) */}
      <div className="relative z-10 w-[80%] max-w-[1400px]">
        <div className="max-w-3xl space-y-8">

          {/* Top Label */}
          <div className="flex items-center gap-3 w-fit bg-blue-500/10 backdrop-blur-md border border-blue-400/20 px-4 py-2 rounded-full">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-[11px] font-black tracking-[0.3em] text-blue-100 uppercase">
              Professional Automobile Diagnostics
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            Precision Diagnostics <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              for the Modern Vehicle
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed font-medium max-w-2xl">
            Expert vehicle coding, programming, and electronic system repair.
            We speak your car's language, ensuring optimal health for your luxury vehicle.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 pt-6">
            <button className="group flex items-center gap-3 bg-[#2E59FF] text-white px-10 py-4 rounded-xl text-sm font-black tracking-widest hover:bg-white hover:text-[#00215E] transition-all duration-500 shadow-2xl shadow-blue-500/20">
              GET STARTED
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white/10 transition-all">
              VIEW SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* 3. DESIGN ELEMENTS: Ambient Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

    </section>
  );
};

export default HeroSection;