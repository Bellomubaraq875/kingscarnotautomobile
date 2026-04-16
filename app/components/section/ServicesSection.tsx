"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Code2,
    Zap,
    Gauge,
    Key,
    CarFront,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        title: "Advanced Diagnostics",
        description: "Full-spectrum OBD-II and manufacturer-level diagnostic scans using dealership-grade tools.",
        icon: <Cpu className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Vehicle Coding",
        description: "Module coding and feature activation for all major brands. Personalize your driving experience.",
        icon: <Code2 className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-400"
    },
    {
        title: "ECU Programming",
        description: "Flash programming, software updates, and ECU calibration for peak engine performance.",
        icon: <Zap className="w-6 h-6" />,
        color: "from-orange-500 to-red-400"
    },
    {
        title: "Odometer Correction",
        description: "Legal odometer recalibration for instrument cluster replacements and digital dashboard synchronization.",
        icon: <Gauge className="w-6 h-6" />,
        color: "from-green-500 to-emerald-400"
    },
    {
        title: "Key Programming",
        description: "Transponder key programming, immobilizer reset, and smart key setup for security systems.",
        icon: <Key className="w-6 h-6" />,
        color: "from-blue-600 to-indigo-500"
    },
    {
        title: "Electrical Diagnostics",
        description: "Wiring fault tracing, CAN bus analysis, and sensor calibration to resolve complex issues.",
        icon: <CarFront className="w-6 h-6" />,
        color: "from-slate-700 to-slate-900"
    }
];

const ServicesSection = () => {
    return (
        <section className="bg-[#f8fafc] py-24 overflow-hidden">
            <div className="w-[80%] max-w-[1400px] mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-blue-600"></span>
                            <span className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase">Expert Solutions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            Our Premium Services
                        </h2>
                        <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
                            Comprehensive diagnostics and programming solutions tailored for high-performance
                            and luxury vehicle makes and models.
                        </p>
                    </div>
                    <button className="text-[12px] font-black tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                        EXPLORE ALL SERVICES
                    </button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-[32px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background Accent Glow */}
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500" />

                            <div className="relative z-10 space-y-6">
                                {/* Icon Box */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    {service.icon}
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <button className="flex items-center gap-2 text-[11px] font-black tracking-[0.1em] text-slate-400 group-hover:text-blue-600 transition-all">
                                    LEARN MORE <ArrowUpRight size={14} />
                                </button>
                            </div>

                            {/* Bottom Decorative Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;