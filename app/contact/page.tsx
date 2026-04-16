"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    // Twitter,
    // Instagram,
    Send,
    MapPin,
    Mail,
    Phone,
    Globe,
    ChevronRight
} from 'lucide-react';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [selectedService, setSelectedService] = useState('Diagnostics');
    const [selectedUrgency, setSelectedUrgency] = useState('Standard');

    const services = ["Diagnostics", "ECU Coding", "Key Sync", "Software Update", "Retrofits", "Performance"];
    const urgencies = ["Standard", "Urgent", "Emergency (24h)"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Project inquiry synchronized successfully.");
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-white pb-20">

            {/* 1. CINEMATIC HERO SECTION */}
            <section className="relative w-full h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/revanmp.jpg" 
                    alt="Technical Diagnostics Hero"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />

                <div className="relative z-10 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase mb-4">
                            Engineering Support
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                            contact <span className="text-blue-700">Us.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. MAIN CONTENT GRID (Based on "Hire Us" Format) */}
            <div className="w-[85%] max-w-[1400px] mx-auto mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* LEFT COLUMN: BRAND & MAP */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                                A Project With <br /> <span className="text-blue-700">KingsCarNot?</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium max-w-md leading-relaxed">
                                We strategically engineer software solutions that work. Synchronizing your vehicle with factory servers is our expertise.
                            </p>
                        </div>

                        {/* MAP SECTION */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                                <MapPin size={14} className="text-blue-600" /> Factory Location
                            </div>
                            <div className="w-full h-72 bg-slate-100 rounded-[32px] overflow-hidden border border-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126588.24644086036!2d3.8184560413554035!3d7.400511475753063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff3f67%3A0x132a8732049836f3!2sIbadan!5e0!3m2!1sen!2sng!4v1713289000000!5m2!1sen!2sng"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* CONTACT & SOCIALS */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contacts</p>
                                <p className="text-sm md:text-lg font-black text-slate-900 break-words uppercase">Support@Kingscarnot.com</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Follow</p>
                                <div className="flex gap-4">
                                    {/* <Twitter size={18} className="text-slate-900 hover:text-blue-600 cursor-pointer transition-colors" /> */}
                                    {/* <Instagram size={18} className="text-slate-900 hover:text-blue-600 cursor-pointer transition-colors" /> */}
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">© KingsCarNot 2026</p>
                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE CONCIERGE FORM */}
                    <div className="bg-slate-50/50 rounded-[48px] p-8 md:p-12 border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-10">

                            {/* Services Selector */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Services</p>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setSelectedService(service)}
                                            className={`px-6 py-3 rounded-full text-[11px] font-black tracking-widest uppercase transition-all border ${selectedService === service
                                                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl'
                                                    : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Your Name</label>
                                    <input required type="text" placeholder="Bello Mubaraq" className="w-full bg-transparent border-none p-2 text-lg font-medium focus:outline-none placeholder:text-slate-200" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Your Email</label>
                                    <input required type="email" placeholder="Email@domain.com" className="w-full bg-transparent border-none p-2 text-lg font-medium focus:outline-none placeholder:text-slate-200" />
                                </div>
                            </div>

                            {/* Urgency Selector */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Project Urgency</p>
                                <div className="flex flex-wrap gap-3">
                                    {urgencies.map((level) => (
                                        <button
                                            key={level}
                                            type="button"
                                            onClick={() => setSelectedUrgency(level)}
                                            className={`px-6 py-3 rounded-full text-[11px] font-black tracking-widest uppercase transition-all border ${selectedUrgency === level
                                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                                                    : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                                                }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="space-y-2 border-b border-slate-100 pb-6">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Inquiry Details</label>
                                <textarea rows={2} placeholder="Briefly describe your vehicle's technical needs..." className="w-full bg-transparent border-none p-2 text-lg font-medium focus:outline-none resize-none placeholder:text-slate-200" />
                            </div>

                            {/* Send Button */}
                            <div className="flex justify-center md:justify-end">
                                <button
                                    disabled={loading}
                                    className="w-24 h-24 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center gap-1 hover:bg-blue-600 transition-all active:scale-90 shadow-2xl group"
                                >
                                    <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-[9px] font-black uppercase tracking-tighter">
                                        {loading ? "SYNCING" : "SEND"}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;