"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  LogOut,
  LayoutDashboard,
  ArrowRight,
  Phone,
  Menu,
  X,
  ChevronRight,
  Settings,
  ShieldCheck,
  LogIn // Fixed: Correctly imported icon
} from 'lucide-react';

const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    "ECU Repair", "EIS/EZS Repair", "ESL/ELV Repair", "Key Repair",
    "7G-Tronic", "ISM Module", "Steering Angle Sensor", "Wiring Harness",
    "FBS-4 Solutions", "FBS-3 Solutions",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

      {/* 1. TOP UTILITY SECTION */}
      <div className="hidden md:block bg-[#0b2a4f] text-white/75 py-2 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-semibold">
          <div className="flex gap-8 items-center">
            <Link href="/about" className="hover:text-[#8ee02b] transition-colors">About Us</Link>
            <Link href="/news" className="hover:text-[#8ee02b] transition-colors">Technical News</Link>
            <Link href="/contact" className="hover:text-[#8ee02b] transition-colors">Contact</Link>
          </div>

          <div className="flex gap-6 items-center">
            <Link href="/dashboard" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LayoutDashboard size={11} className="text-[#8ee02b]" /> Client Portal
            </Link>
            <span className="w-[1px] h-3 bg-white/10" />

            {/* FIXED: Login now links to /login with correct Icon component */}
            <Link href="/login" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LogIn size={11} className="text-[#8ee02b]" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className={`transition-all duration-500 border-b ${scrolled
        ? 'bg-white/95 backdrop-blur-xl border-[#8ee02b] py-3 shadow-[0_6px_0_rgba(11,42,79,0.08)]'
        : 'bg-white border-[#8ee02b] py-4 md:py-5'
        }`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Hamburger (Mobile) */}
          <button aria-label="Open menu" onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-[#0b2a4f]">
            <Menu size={24} />
          </button>

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl bg-white border border-[#8ee02b]/60 transition-transform group-hover:scale-105 duration-500">
              <Image src="/images/Logos/Kingcarnotmobile.jpeg" alt="KingsCarNot logo" fill className="object-contain scale-[1.6]" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base md:text-xl font-extrabold text-[#0b2a4f] leading-none">
                KingsCar<span className="text-[#2f9e2f]">Not</span>
              </span>
              <span className="text-[10px] md:text-xs text-[#0b2a4f]/55 font-semibold leading-none mt-1">
                Automobile
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />

            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsServiceOpen(true)} onMouseLeave={() => setIsServiceOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-bold transition-colors ${isServiceOpen ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServiceOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full -left-20 w-[500px] pt-5">
                    <div className="bg-white rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-gray-100 p-8">
                      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                        <span className="text-sm font-bold text-[#2f9e2f]">OE solutions</span>
                        <Link href="/services" className="text-sm font-bold text-[#0b2a4f]/60 hover:text-[#2f9e2f] transition-colors">All services</Link>
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                        {services.map((item) => (
                          <Link key={item} href={`/services/${item.toLowerCase().replace(/[\/\s]/g, '-')}`} className="flex items-center py-2 text-sm font-semibold text-[#0b2a4f]/75 hover:text-[#2f9e2f] group/item transition-all">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/software" label="Software" />
            <NavLink href="/spare-parts" label="Parts" />
            <NavLink href="/media-center" label="Media" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden xl:flex items-center gap-2 text-sm font-bold text-[#0b2a4f]/70 hover:text-[#0b2a4f] transition-colors">
              <Phone size={14} className="text-blue-600" /> +234 Support
            </button>
             <Link href= "/contact">
            <button className="bg-[#8ee02b] text-[#0b2a4f] px-5 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-[#0b2a4f] hover:text-white transition-all active:scale-95">
              <span className="hidden sm:inline">Book appointment</span>
              <span className="sm:hidden text-xs">Book now</span>
            </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[70] p-8 flex flex-col shadow-2xl">

              <div className="flex justify-between items-center mb-12">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><ShieldCheck size={24} /></div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-full"><X size={20} /></button>
              </div>

              <div className="flex flex-col gap-8 overflow-y-auto pr-2">
                <MobileLink href="/" label="Home" active onClick={() => setIsMobileMenuOpen(false)} />
                <MobileLink href="/about" label="About Us" onClick={() => setIsMobileMenuOpen(false)} />

                <div className="space-y-4">
                  <p className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">Diagnostics</p>
                  <div className="grid gap-4">
                    {services.slice(0, 4).map(s => (
                      <Link key={s} href={`/services/${s.toLowerCase().replace(/[\/\s]/g, '-')}`} className="flex items-center justify-between text-base font-bold text-slate-800">
                        {s} <ChevronRight size={16} className="text-blue-200" />
                      </Link>
                    ))}
                  </div>
                </div>

                <MobileLink href="/software" label="OEM Software" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileLink href="/spare-parts" label="Spare Parts" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileLink href="/media-center" label="Media Center" onClick={() => setIsMobileMenuOpen(false)} />
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 space-y-4">
                <Link href="/dashboard" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-blue-600"><LayoutDashboard size={20} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">Portal</p>
                    <p className="text-[10px] text-gray-500">Access your files</p>
                  </div>
                </Link>
                <button className="w-full bg-[#0b2a4f] text-white py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2">
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ href, label, active = false }: { href: string, label: string, active?: boolean }) => (
  <Link href={href} className={`text-sm font-bold transition-all relative py-1 group whitespace-nowrap ${active ? 'text-[#2f9e2f]' : 'text-[#0b2a4f]/70 hover:text-[#0b2a4f]'}`}>
    {label}
    <span className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#8ee02b] transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
  </Link>
);

const MobileLink = ({ href, label, active = false, onClick }: { href: string, label: string, active?: boolean, onClick: () => void }) => (
  <Link href={href} onClick={onClick} className={`font-display text-3xl font-extrabold ${active ? 'text-[#2f9e2f]' : 'text-[#0b2a4f]'}`}>
    {label}
  </Link>
);

export default Navbar;