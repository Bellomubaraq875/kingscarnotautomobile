"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Star,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Adebayo Johnson",
        vehicle: "BMW X5 Owner",
        initials: "AJ",
        quote:
            "KingsCarNotAutomobile diagnosed a problem three other mechanics couldn't find. Their advanced diagnostic tools pinpointed the exact ECU fault in minutes. Absolutely professional!",
    },
    {
        id: 2,
        name: "Chioma Okafor",
        vehicle: "Mercedes-Benz C300 Owner",
        initials: "CO",
        quote:
            "The vehicle coding service was exceptional. They activated features I didn't even know my car had. The team is knowledgeable and transparent about every step.",
    },
    {
        id: 3,
        name: "Emeka Nwosu",
        vehicle: "Toyota Camry Owner",
        initials: "EN",
        quote:
            "After my instrument cluster replacement, they recalibrated my odometer perfectly. Legal, documented, and hassle-free. Highly recommend their services.",
    },
    {
        id: 4,
        name: "Funke Adeyemi",
        vehicle: "Range Rover Sport Owner",
        initials: "FA",
        quote:
            "Lost all my keys and was quoted an outrageous price by the dealer. KingsCarNotAutomobile programmed new keys at a fraction of the cost. Lifesavers!",
    },
    {
        id: 5,
        name: "Ibrahim Musa",
        vehicle: "Audi A4 Owner",
        initials: "IM",
        quote:
            "Their subscription service keeps me updated on maintenance schedules. The reminders have saved me from costly repairs more than once. Great value for money.",
    },
    {
        id: 6,
        name: "Grace Eze",
        vehicle: "Honda Accord Owner",
        initials: "GE",
        quote:
            "Professional, fast, and affordable. They traced a wiring fault that had been causing random electrical issues for months. Fixed in one visit!",
    },
    {
        id: 7,
        name: "Tunde Bakare",
        vehicle: "Ford Explorer Owner",
        initials: "TB",
        quote:
            "The CAN bus analysis they performed revealed multiple sensor issues. Their detailed report helped me understand exactly what needed fixing. Top-notch service.",
    },
    {
        id: 8,
        name: "Amina Yusuf",
        vehicle: "Lexus RX350 Owner",
        initials: "AY",
        quote:
            "I've been a subscriber for over a year now. The proactive maintenance alerts have kept my car running smoothly. Customer service is always responsive and helpful.",
    },
];

export default function TestimonialsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;
    const maxIndex = Math.max(0, testimonials.length - visibleCount);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 pb-24">
            <section className="w-[92%] max-w-[1450px] mx-auto pt-24 md:pt-28 pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] max-w-xl">
                            What People Say
                            <br />
                            About Us
                        </h1>
                    </div>

                    <div className="max-w-xl lg:ml-auto space-y-6">
                        <p className="text-sm md:text-base text-slate-500 leading-7">
                            At KingsCarNotAutomobile, we pride ourselves on transforming vehicle
                            diagnostic experiences. Hear from our users about how our service
                            made a difference in their lives.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2.5 rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                                Try Demo
                            </button>
                            <button className="px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition shadow-sm">
                                See Testimonial
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#DDF8F3] py-14 md:py-16 border-y border-teal-50">
                <div className="w-[92%] max-w-[1450px] mx-auto flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            Press Releases & Coverage
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full border border-teal-200 bg-white/40 text-slate-700">
                            18 Total
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-8 opacity-80 grayscale contrast-125">
                        {["DELTA", "Uber", "Unilever", "NETFLIX", "SAMSUNG", "SPACEX", "Walmart"].map(
                            (brand) => (
                                <span key={brand} className="text-xl md:text-2xl font-semibold tracking-tight">
                                    {brand}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </section>

            <section className="w-[92%] max-w-[1450px] mx-auto py-16 md:py-20">
                <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
                    <div className="space-y-3">
                        <span className="inline-flex px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[11px] font-semibold">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            What Our Users Say
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 max-w-xl">
                            Real feedback from customers who’ve used our diagnostic and maintenance services.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition active:scale-95"
                        >
                            <ChevronLeft size={18} className="text-slate-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition active:scale-95"
                        >
                            <ChevronRight size={18} className="text-slate-600" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-4 md:gap-5"
                        animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 22 }}
                    >
                        {testimonials.map((item) => (
                            <article
                                key={item.id}
                                className="min-w-full sm:min-w-[48%] lg:min-w-[24%] bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex gap-1 text-amber-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-sm md:text-[15px] text-slate-600 leading-7">
                                    “{item.quote}”
                                </p>

                                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900">
                                            {item.name}
                                        </h4>
                                        <div className="flex items-center gap-1 text-xs text-slate-500">
                                            <CheckCircle2 size={12} className="text-teal-500" />
                                            <span>{item.vehicle}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="w-[92%] max-w-[1450px] mx-auto pt-10 pb-10 text-center">
                <div className="flex justify-center">
                    <div className="flex -space-x-3">
                        {["AJ", "CO", "EN", "FA"].map((init, i) => (
                            <div
                                key={i}
                                className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-[10px] font-semibold text-slate-600 shadow-sm"
                            >
                                {init}
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-teal-500 flex items-center justify-center text-[10px] font-semibold text-white shadow-sm">
                            +2k
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}