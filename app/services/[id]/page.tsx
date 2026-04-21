"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { technicalServices } from "../../data/servicesData";
import { ChevronLeft, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServiceDetailPage() {
    const params = useParams();
    const router = useRouter();
    const service = technicalServices.find((s) => s.id === params.id);

    if (!service) return <div className="min-h-screen flex items-center justify-center bg-white font-jost"><h1>Not Found</h1></div>;

    return (
        <main className="min-h-screen bg-white text-slate-900 pb-20 font-jost">
            <nav className="w-[80%] max-w-[1400px] mx-auto py-10 flex justify-between items-center">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
                    <ChevronLeft size={16} /> Back
                </button>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Technical Spec / {service.id}</span>
            </nav>

            <section className="w-[80%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-10">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest">{service.tag}</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-slate-900 uppercase">{service.title}</h1>
                    </div>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium border-l-4 border-blue-600 pl-8">{service.fullDesc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <ShieldCheck size={18} className="text-blue-600" />
                                <span className="text-xs font-bold uppercase tracking-tight text-slate-700">{f}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-10">
                        <Link href="/register"><button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-4">Register This Service <ArrowRight size={18} /></button></Link>
                    </div>
                </div>
                <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
            </section>
        </main>
    );
}