"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mbKeys } from '@/app/data/keyRepairData';
import { ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

export default function KeyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const keyData = mbKeys.find(k => k.id === params.id);

    if (!keyData) return <div className="p-20 text-center">Protocol Error: Key Not Found</div>;

    return (
        <main className="min-h-screen bg-[#FDFDFF] pt-48 pb-32 font-jost">
            <div className="w-[85%] max-w-[1400px] mx-auto">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-600 mb-12 transition-colors"
                >
                    <ArrowLeft size={14} /> Back to Gallery
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-square bg-white rounded-[40px] border border-slate-100 shadow-2xl flex items-center justify-center p-20">
                        <Image src={keyData.image} alt={keyData.title} fill className="object-contain p-16" />
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">{keyData.category}</span>
                            <h2 className="text-5xl font-black text-slate-900 uppercase leading-none tracking-tighter">
                                {keyData.title}
                            </h2>
                        </div>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            {keyData.description}
                        </p>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            {keyData.specs.map((spec, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl">
                                    <Zap size={16} className="text-blue-600" />
                                    <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{spec}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link href="/contact">
                                <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-100">
                                    Book Restoration
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}