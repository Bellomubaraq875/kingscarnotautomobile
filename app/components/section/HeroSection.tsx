"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Cpu, Zap, Key, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    label: "Professional Diagnostics",
    icon: <ShieldCheck size={14} />,
    title: "Precision Diagnostics",
    subtitle: "for the Modern Vehicle",
    description: "Expert vehicle health assessments using dealer-level protocols. We identify faults before they become mechanical failures.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
    accent: "from-blue-400 to-indigo-300"
  },
  {
    id: 2,
    label: "Advanced Coding",
    icon: <Cpu size={14} />,
    title: "Unlock Hidden",
    subtitle: "Factory Features",
    description: "Personalize your driving experience. We activate hidden OEM features and calibrate software to your specific requirements.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000",
    accent: "from-emerald-400 to-cyan-300"
  },
  {
    id: 3,
    label: "Security Systems",
    icon: <Key size={14} />,
    title: "FBS-4 & Security",
    subtitle: "Synchronization",
    description: "Specialized in high-level key programming and immobilizer synchronization for modern luxury Mercedes and BMW chassis.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000",
    accent: "from-blue-500 to-blue-200"
  },
  {
    id: 4,
    label: "Peak Performance",
    icon: <Activity size={14} />,
    title: "Performance & ECU",
    subtitle: "Optimization",
    description: "Optimize Engine Management Systems for ultimate reliability and power delivery without compromising vehicle longevity.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000",
    accent: "from-indigo-400 to-purple-300"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[120vh] lg:h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#04070F]">

      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-[#00215E]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00215E]/60 via-transparent to-[#04070F] z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-[80%] max-w-[1400px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-4xl space-y-10"
          >
            <div className="flex items-center gap-3 w-fit bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full">
              <span className="text-blue-400">{heroSlides[current].icon}</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-100 uppercase">
                {heroSlides[current].label}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              {heroSlides[current].title} <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${heroSlides[current].accent}`}>
                {heroSlides[current].subtitle}
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-blue-100/60 leading-relaxed font-medium max-w-2xl">
              {heroSlides[current].description}
            </p>

            <div className="flex flex-wrap gap-5 pt-6">
              <button className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl text-[10px] font-black tracking-[0.2em] hover:bg-white hover:text-[#00215E] transition-all duration-500 shadow-2xl">
                GET STARTED
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl text-[10px] font-black tracking-[0.2em] hover:bg-white/10 transition-all">
                VIEW SERVICES
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-12">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className="group flex flex-col gap-3 text-left"
          >
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-black transition-colors ${current === index ? 'text-blue-400' : 'text-gray-500'}`}>
                0{slide.id}
              </span>
              <div className="w-24 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                {current === index && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute inset-0 bg-blue-500"
                  />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-10" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-10" />

    </section>
  );
};

export default HeroSection;