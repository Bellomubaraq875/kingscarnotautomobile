"use client";

import React from 'react';
import Image from 'next/image';
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
      { name: 'ECU Repair', path: '/ecu-repair' },
      { name: 'Key Programming', path: '/key-repair' },
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
    <footer className="bg-[#0b2a4f] text-white pt-24 pb-12 overflow-hidden">
      <div className="w-[80%] max-w-[1400px] mx-auto">

        {/* 1. TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-white/10">
          <div className="space-y-8">
            <NextLink href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white">
                <Image src="/images/Logos/Kingcarnotmobile.jpeg" alt="KingsCarNot logo" fill className="object-contain scale-[1.6]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-white leading-none">
                  KingsCar<span className="text-[#8ee02b]">Not</span>
                </span>
                <span className="text-sm text-white/55 font-semibold leading-none mt-1.5">
                  Automobile
                </span>
              </div>
            </NextLink>
            <p className="text-white/65 max-w-sm leading-relaxed font-medium">
              Elevating automotive performance through dealer-level diagnostics
              and precision software engineering.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <NextLink key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#8ee02b] hover:text-[#0b2a4f] hover:border-[#8ee02b] transition-all duration-300">
                  <Icon size={16} />
                </NextLink>
              ))}
            </div>
          </div>

          <div className="bg-[#8ee02b] text-[#0b2a4f] rounded-[40px] p-10 space-y-6">
            <h3 className="font-display text-3xl font-extrabold">Get workshop updates</h3>
            <p className="text-sm font-semibold text-[#0b2a4f]/75">Technical tips and service offers, sent occasionally.</p>
            <div className="relative">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 text-sm text-[#0b2a4f] placeholder:text-[#0b2a4f]/50 focus:outline-none focus:border-[#0b2a4f] transition-all"
              />
              <button aria-label="Subscribe" className="absolute right-2 top-2 bottom-2 bg-[#0b2a4f] hover:bg-[#14612b] px-6 rounded-xl transition-all flex items-center justify-center text-white">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="font-display text-lg font-bold text-[#8ee02b]">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <NextLink href={link.path} className="text-sm text-white/65 hover:text-white transition-colors flex items-center gap-1 group">
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 text-[#8ee02b]" />
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-[#8ee02b]">Contact</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#8ee02b]" /> New
                ultra moden mechanic village, opposite North
                West felling station,  Marian babagida junction,
                along Asaba Benin express road, block B1
                shop 51, Asaba Delta State. 
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#8ee02b]" /> +234 810 223 6065
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#8ee02b]" /> support@kingscarnot.com
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs font-semibold text-white/50">
            © {currentYear} KINGSCARNOT AUTOMOBILE. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-semibold text-white/50">
            <NextLink href="/privacy" className="hover:text-[#8ee02b] transition-colors">Security</NextLink>
            <NextLink href="/sitemap" className="hover:text-[#8ee02b] transition-colors">Sitemap</NextLink>
            <NextLink href="/cookies" className="hover:text-[#8ee02b] transition-colors">Cookie Policy</NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;