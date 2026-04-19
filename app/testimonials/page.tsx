"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Star,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Settings,
    ShieldCheck,
    Clock,
} from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Adebayo Johnson",
        vehicle: "BMW X5 Owner",
        image: "https://i.pravatar.cc/150?u=ajohnson",
        quote: "KingsCarNotAutomobile diagnosed a problem three other mechanics couldn't find. Their advanced diagnostic tools pinpointed the exact ECU fault in minutes. Absolutely professional!"
    },
    {
        id: 2,
        name: "Chioma Okafor",
        vehicle: "Mercedes-Benz C300 Owner",
        image: "https://i.pravatar.cc/150?u=cokafor",
        quote: "The vehicle coding service was exceptional. They activated features I didn't even know my car had. The team is knowledgeable and transparent about every step."
    },
    {
        id: 3,
        name: "Emeka Nwosu",
        vehicle: "Toyota Camry Owner",
        image: "https://i.pravatar.cc/150?u=enwosu",
        quote: "After my instrument cluster replacement, they recalibrated my odometer perfectly. Legal, documented, and hassle-free. Highly recommend their services."
    },
    {
        id: 4,
        name: "Funke Adeyemi",
        vehicle: "Range Rover Sport Owner",
        image: "https://i.pravatar.cc/150?u=fadeyemi",
        quote: "Lost all my keys and was quoted an outrageous price by the dealer. KingsCarNotAutomobile programmed new keys at a fraction of the cost. Lifesavers!"
    },
    {
        id: 5,
        name: "Ibrahim Musa",
        vehicle: "Audi A4 Owner",
        image: "https://i.pravatar.cc/150?u=imusa",
        quote: "Their subscription service keeps me updated on maintenance schedules. The reminders have saved me from costly repairs more than once. Great value for money."
    },
    {
        id: 6,
        name: "Grace Eze",
        vehicle: "Honda Accord Owner",
        image: "https://i.pravatar.cc/150?u=geze",
        quote: "Professional, fast, and affordable. They traced a wiring fault that had been causing random electrical issues for months. Fixed in one visit!"
    },
];

const features = [
    { icon: Settings, title: "Precision Diagnostics", desc: "Pinpoint accuracy for complex issues." },
    { icon: ShieldCheck, title: "Certified Expertise", desc: "Trusted by luxury car owners worldwide." },
    { icon: Clock, title: "Rapid Turnaround", desc: "Get back on the road, faster." },
];

export default function TestimonialsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsToShow(1);
            else if (window.innerWidth < 1280) setCardsToShow(2);
            else setCardsToShow(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - cardsToShow);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <main className="min-h-screen bg-white text-slate-950 pb-24 font-sans overflow-x-hidden">
            {/* --- Hero Section --- */}
            <section className="min-h-[120vh] w-full relative flex items-center pt-20 md:pt-0">
                <div className="absolute inset-0 z-0 opacity-15">
                    <Image
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury Performance Automobile"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                </div>

                <div className="w-[80%] max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold tracking-wide shadow-inner">
                                <Settings className="w-4 h-4 text-teal-500" />
                                ADVANCED AUTOMOTIVE SOLUTIONS
                            </span>
                            <h1 className="text-6xl md:text-8xl xl:text-[96px] font-extrabold tracking-tighter leading-[0.95] text-slate-950">
                                Beyond <br />
                                Diagnostics. <br />
                                <span className="text-teal-600">Pure Performance.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-normal"
                        >
                            KingsCarNotAutomobile provides precision vehicle coding, legal odometer recalibration, and specialized diagnostics for luxury brands. Trusted performance, documented results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-5 pt-4"
                        >
                            <button className="px-10 py-5 rounded-full bg-slate-950 text-white font-bold text-lg hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-950/20 active:scale-95">
                                Book Your Session
                            </button>
                            <button className="px-10 py-5 rounded-full border-2 border-slate-200 text-slate-950 font-bold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-95">
                                Explore Services
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="lg:col-span-5 grid grid-cols-1 gap-6 lg:pl-10"
                    >
                        {features.map((feature, index) => (
                            <div key={feature.title} className={`p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-6 ${index === 1 ? 'lg:translate-x-6' : ''}`}>
                                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                                    <feature.icon className="w-8 h-8 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-950">{feature.title}</h3>
                                    <p className="text-slate-500 mt-1">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Logo Cloud --- */}
            <section className="bg-slate-50/50 py-32 md:py-40 border-y border-slate-100">
                <div className="w-[80%] max-w-[1450px] mx-auto space-y-20">
                    <h2 className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Specialized Support For Leading Brands</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-16 lg:gap-12 opacity-40 grayscale hover:opacity-100 transition-all duration-700">
                        {["BMW", "Mercedes-Benz", "Audi", "Range Rover", "Toyota", "Lexus"].map((brand) => (
                            <div key={brand} className="flex justify-center items-center">
                                <span className="text-3xl lg:text-4xl font-black tracking-tighter text-slate-900">{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Testimonials Slider --- */}
            <section className="w-[80%] max-w-[1450px] mx-auto py-32 md:py-40">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="space-y-4 max-w-xl">
                        <span className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest shadow-inner border border-teal-100">Client Stories</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 leading-tight">Trusted by Drivers. Proven by Results.</h2>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button onClick={prevSlide} className="p-5 rounded-full border-2 border-slate-100 text-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-sm hover:shadow-lg">
                            <ChevronLeft size={28} />
                        </button>
                        <button onClick={nextSlide} className="p-5 rounded-full border-2 border-slate-100 text-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-sm hover:shadow-lg">
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden px-1">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="px-4 flex flex-col"
                                style={{ minWidth: `${100 / cardsToShow}%` }}
                            >
                                <article className="bg-white border border-slate-100 rounded-[2.5rem] p-12 h-full flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden">
                                    <span className="absolute -top-6 -right-4 text-[160px] font-serif text-slate-50 opacity-80 group-hover:text-teal-50 group-hover:opacity-100 transition-colors duration-500">“</span>

                                    <div className="relative z-10">
                                        <div className="flex gap-1.5 text-amber-400 mb-10">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                                        </div>
                                        <p className="text-slate-700 text-xl leading-relaxed mb-12 italic font-medium relative">
                                            "{item.quote}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6 pt-10 border-t border-slate-100 relative z-10">
                                        <div className="relative w-20 h-20 shrink-0">
                                            <div className="absolute inset-0 bg-teal-500 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-teal-500/20" />
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100 shadow-inner">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="80px"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-slate-950 text-2xl tracking-tight">{item.name}</h4>
                                            <div className="flex items-center gap-2 text-base font-semibold text-teal-600 mt-1">
                                                <CheckCircle2 size={16} />
                                                {item.vehicle}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}