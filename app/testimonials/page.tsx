"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

const testimonials = [
    { id: 1, name: "Adebayo Johnson", vehicle: "BMW X5 Owner", initials: "AJ", quote: "KingsCarNotAutomobile diagnosed a problem three other mechanics couldn't find. Their advanced diagnostic tools pinpointed the exact ECU fault in minutes. Absolutely professional!" },
    { id: 2, name: "Chioma Okafor", vehicle: "Mercedes-Benz C300 Owner", initials: "CO", quote: "The vehicle coding service was exceptional. They activated features I didn't even know my car had. The team is knowledgeable and transparent about every step." },
    { id: 3, name: "Emeka Nwosu", vehicle: "Toyota Camry Owner", initials: "EN", quote: "After my instrument cluster replacement, they recalibrated my odometer perfectly. Legal, documented, and hassle-free. Highly recommend their services." },
    { id: 4, name: "Funke Adeyemi", vehicle: "Range Rover Sport Owner", initials: "FA", quote: "Lost all my keys and was quoted an outrageous price by the dealer. KingsCarNotAutomobile programmed new keys at a fraction of the cost. Lifesavers!" },
    { id: 5, name: "Ibrahim Musa", vehicle: "Audi A4 Owner", initials: "IM", quote: "Their subscription service keeps me updated on maintenance schedules. The reminders have saved me from costly repairs more than once. Great value for money." },
    { id: 6, name: "Grace Eze", vehicle: "Honda Accord Owner", initials: "GE", quote: "Professional, fast, and affordable. They traced a wiring fault that had been causing random electrical issues for months. Fixed in one visit!" },
    { id: 7, name: "Tunde Bakare", vehicle: "Ford Explorer Owner", initials: "TB", quote: "The CAN bus analysis they performed revealed multiple sensor issues. Their detailed report helped me understand exactly what needed fixing. Top-notch service." },
    { id: 8, name: "Amina Yusuf", vehicle: "Lexus RX350 Owner", initials: "AY", quote: "I've been a subscriber for over a year now. The proactive maintenance alerts have kept my car running smoothly. Customer service is always responsive and helpful." },
];

export default function TestimonialsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);

    // Handle responsiveness for the slider gap logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else setCardsToShow(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = testimonials.length - cardsToShow;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 pb-24 font-sans">
            {/* Header Section */}
            <section className="w-[80%] max-w-[1450px] mx-auto pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            What People Say <br />
                            <span className="text-teal-500">About Us</span>
                        </h1>
                    </div>
                    <div className="lg:ml-auto space-y-6 max-w-md">
                        <p className="text-base text-slate-500 leading-relaxed">
                            At KingsCarNotAutomobile, we pride ourselves on transforming vehicle
                            diagnostic experiences. Hear from our users about how our service
                            made a difference.
                        </p>
                        <div className="flex gap-3">
                            <button className="px-6 py-3 rounded-full border border-slate-300 text-sm font-bold hover:bg-slate-50 transition">Try Demo</button>
                            <button className="px-6 py-3 rounded-full bg-teal-500 text-white text-sm font-bold hover:bg-teal-600 transition shadow-lg shadow-teal-100">See All</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Cloud */}
            <section className="bg-slate-50 py-12 border-y border-slate-100">
                <div className="w-[80%] max-w-[1450px] mx-auto">
                    <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale">
                        {["DELTA", "Uber", "Unilever", "NETFLIX", "SAMSUNG", "SPACEX"].map((brand) => (
                            <span key={brand} className="text-xl font-bold tracking-widest">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Slider */}
            <section className="w-[80%] max-w-[1450px] mx-auto py-20">
                <div className="flex items-end justify-between mb-12">
                    <div className="space-y-3">
                        <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Trusted by Drivers</h2>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={prevSlide} className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="px-2"
                                style={{ minWidth: `${100 / cardsToShow}%` }}
                            >
                                <article className="bg-white border border-slate-100 rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex gap-1 text-amber-400 mb-6">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-600 leading-relaxed mb-8 italic">"{item.quote}"</p>
                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                                        <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center font-bold shadow-inner">
                                            {item.initials}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.name}</h4>
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                                                <CheckCircle2 size={14} className="text-teal-500" />
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

            {/* Social Proof Footer */}
            <section className="w-[80%] max-w-[1450px] mx-auto py-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex -space-x-3">
                        {["AJ", "CO", "EN", "FA", "TB"].map((init, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">
                                {init}
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                            +2k
                        </div>
                    </div>
                    <p className="text-sm font-medium text-slate-400">Joined by 2,000+ satisfied car owners</p>
                </div>
            </section>
        </main>
    );
}