"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mbKeys } from '../data/keyRepairData';
import { Key } from 'lucide-react';

export default function KeyRepairPage() {
    return (
        <main className="min-h-screen bg-white pt-48 pb-32 font-jost">

            {/* Header Section */}
            <section className="w-[90%] max-w-[1450px] mx-auto text-center mb-24 space-y-4">
                <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Key size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Inventory</span>
                </div>
                <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                    MB-Keys
                </h1>
                <p className="text-slate-400 text-sm max-w-lg mx-auto font-medium">
                    Professional restoration and resynchronization for Mercedes-Benz electronic keys across all generations.
                </p>
            </section>

            {/* 5-Column Grid Layout */}
            <section className="w-[90%] max-w-[1450px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
                    {mbKeys.map((item) => (
                        <Link
                            key={item.id}
                            href={`/key-repair/${item.id}`}
                            className="group block space-y-6"
                        >
                            <div className="relative aspect-square bg-[#FBFBFC] rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:border-blue-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-[11px] font-bold text-blue-600 uppercase tracking-tight leading-snug transition-colors group-hover:text-blue-800">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}