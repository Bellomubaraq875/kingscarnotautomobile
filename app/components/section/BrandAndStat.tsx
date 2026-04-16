"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

// --- ANIMATED NUMBER COMPONENT ---
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Clean the string (e.g., "5,000+" becomes 5000)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9,]/g, '');

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = numericValue;
            const totalFrames = duration * 60;
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                // Ease out expo for a smooth finish
                const current = Math.floor(end * (1 - Math.pow(2, -10 * progress)));
                setDisplayValue(current);

                if (frame === totalFrames) clearInterval(counter);
            }, 1000 / 60);

            return () => clearInterval(counter);
        }
    }, [isInView, numericValue, duration]);

    return (
        <span ref={ref}>
            {displayValue.toLocaleString()}{suffix}
        </span>
    );
};

const BrandsAndStats = () => {
    const brands = [
        { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1280px-BMW.svg.png" },
        { name: "Audi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4f-mRJPxI2q_lmLlHQu-Sgw0aLD4gmvHzg&s" },
        { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/3840px-Mercedes-Logo.svg.png" },
        { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/960px-Volkswagen_logo_2019.svg.png?_=20250119012118" },
        { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/960px-Toyota_logo_%28Red%29.svg.png" },
        { name: "Porsche", logo: "https://icon2.cleanpng.com/lnd/20241224/wo/6f05182acb530c6bb3fc0fb079a5eb.webp" },
        { name: "Land Rover", logo: "https://pngimg.com/d/land_rover_PNG58.png" },
        { name: "Lexus", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLJSOEcOcryityhRzn-ZU7YgNDcEI97WrIw&s" },
        { name: "Ford", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPIlq1kgrNeQRXx435tS42K13SClJnkv9Ng&s" },
    ];

    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="w-[80%] max-w-[1400px] mx-auto space-y-24">

                {/* BRANDS SECTION - SLIDING ANIMATION */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <span className="h-[1px] w-12 bg-blue-600"></span>
                        <h2 className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase">
                            Brands We Support
                        </h2>
                    </div>

                    <div className="relative flex overflow-hidden py-10">
                        <motion.div
                            className="flex gap-20 items-center whitespace-nowrap"
                            animate={{ x: [0, -1920] }} // Adjust based on total width
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {duplicatedBrands.map((brand, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-4 min-w-[120px]">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-14 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                    />
                                    <span className="text-[9px] font-bold tracking-widest text-slate-300 uppercase">{brand.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* STATS SECTION - CLEAN & ANIMATED */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-gray-100">
                    {[
                        { label: "Vehicles Serviced", value: "5,000+" },
                        { label: "Fix Rate Success", value: "98%" },
                        { label: "Brands Supported", value: "50+" },
                        { label: "Remote Support", value: "24/7" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-2">
                            <h3 className="text-5xl font-black text-[#00215E] tracking-tighter">
                                <Counter value={stat.value} />
                            </h3>
                            <p className="text-[10px] font-black tracking-[0.2em] text-blue-600/60 uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BrandsAndStats;