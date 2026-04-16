"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillProps {
    name: string;
    icon: React.ReactNode;
    level: number;
    years: number;
    x: string;
    y: string;
    size: string;
    color: string; 
}

const SkillBubble = ({ name, icon, level, years, x, y, size, color }: SkillProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="absolute flex items-center justify-center cursor-pointer"
            style={{
                top: y,
                left: x,
                width: size,
                height: size,
                zIndex: isHovered ? 50 : 10
            }}
            animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
            transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Bubble with Dynamic Color Glow */}
            <div
                className="relative w-full h-full rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center transition-all duration-700 group"
                style={{
                    borderColor: isHovered ? color : "rgba(255,255,255,0.05)",
                    boxShadow: isHovered ? `0 0 40px ${color}33` : "none"
                }}
            >
                <div
                    className="transition-all duration-500 scale-[1.4] md:scale-[1.7]"
                    style={{ color: isHovered ? color : "rgba(255,255,255,0.3)" }}
                >
                    {icon}
                </div>

                {/* Specular light hit */}
                <div className="absolute top-[15%] left-[20%] w-[25%] h-[25%] bg-white/10 rounded-full blur-[4px]" />
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: -30, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-full mb-2 w-44 p-5 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl pointer-events-none shadow-2xl"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: color }}>
                            {name}
                        </p>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-[8px] text-white/40 mb-1.5 font-bold uppercase tracking-widest">
                                    <span>Proficiency</span>
                                    <span>{level}%</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${level}%` }}
                                        className="h-full"
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[8px] text-white/40 mb-1.5 font-bold uppercase tracking-widest">
                                    <span>Exp</span>
                                    <span>{years} Years</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(years / 6) * 100}%` }}
                                        className="h-full bg-white/20"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SkillBubble;