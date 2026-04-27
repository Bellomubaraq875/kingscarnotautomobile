"use client";

import React from 'react';
import Link from 'next/image'; 
import NextLink from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send
} from 'lucide-react';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'News Journal', path: '/news' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Media Center', path: '/media-center' },
      { name: 'Founder', path: '/founder' }
    ],
    Services: [
      { name: 'ECU Repair', path: '/services/ecu-repair' },
      { name: 'Key Programming', path: '/services/key-repair' },
      { name: 'Spare Parts', path: '/spare-parts' },
      { name: 'Software Solutions', path: '/software' },
    ],
    Support: [
      { name: 'Contact', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-[#04070F] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="w-[80%] max-w-[1400px] mx-auto">

        {/* 1. TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-white/5">
          <div className="space-y-8">
            <NextLink href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                <span className="text-xl font-black text-blue-500">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-[0.05em] text-white leading-none uppercase">
                  KINGSCAR<span className="text-blue-600">NOT</span>
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.52em] text-gray-500 font-bold leading-none mt-1.5">
                  Automobile
                </span>
              </div>
            </NextLink>
            <p className="text-gray-400 max-w-sm leading-relaxed font-medium">
              Elevating automotive performance through dealer-level diagnostics
              and precision software engineering.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <NextLink key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                  <Icon size={16} />
                </NextLink>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl rounded-[40px] p-10 border border-white/5 space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-white">Join the Inner Circle</h3>
            <p className="text-sm text-gray-400">Receive technical updates and exclusive service offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 px-6 rounded-xl transition-all flex items-center justify-center text-white">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <NextLink href={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 text-blue-500" />
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" /> New
                ultra moden mechanic village, opposite North
                West felling station,  Marian babagida junction,
                along Asaba Benin express road, block B1
                shop 51, Asaba Delta State. 
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" /> +234 810 223 6065
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" /> support@kingscarnot.com
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © {currentYear} KINGSCARNOT AUTOMOBILE. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <NextLink href="/privacy" className="hover:text-blue-500 transition-colors">Security</NextLink>
            <NextLink href="/sitemap" className="hover:text-blue-500 transition-colors">Sitemap</NextLink>
            <NextLink href="/cookies" className="hover:text-blue-500 transition-colors">Cookie Policy</NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;