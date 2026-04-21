import { Cpu, Radio, ShieldCheck, Settings, Key, Zap } from "lucide-react";
import React from "react";

export const technicalServices = [
    {
        id: "ecu-repair",
        title: "ECU Repair & Mapping",
        tag: "Computing",
        shortDesc: "Surgical restoration of Engine Control Units and custom performance mapping.",
        fullDesc: "Our ECU restoration service involves surgical-level repair of Engine Control Units. We address processor failures, water damage, and circuit integrity, alongside custom performance mapping tailored to your engine's specific tolerances.",
        features: ["Processor Re-soldering", "EEPROM Data Recovery", "Performance Remapping", "Component Level Replacement"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
        icon: React.createElement(Cpu, { size: 24 })
    },
    {
        id: "eis-repair",
        title: "EIS/EZS Ignition",
        tag: "Ignition",
        shortDesc: "Electronic Ignition Switch diagnostics for seamless authorization and startup.",
        fullDesc: "Specialized diagnostics and hardware repair for Electronic Ignition Switches (EIS/EZS). We resolve 'key not turning' issues and communication faults within the authorization daisy-chain.",
        features: ["Motor Replacement", "Data Synchronization", "Relay Restoration", "Auth-Protocol Testing"],
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000",
        icon: React.createElement(Radio, { size: 24 })
    },
    {
        id: "fbs4-security",
        title: "FBS-4 Security",
        tag: "Security",
        shortDesc: "Advanced Authorization System solutions for modern vehicle electronic security.",
        fullDesc: "High-level authorization solutions for the latest Mercedes-Benz electronic security protocols. We handle synchronization of used modules and key programming for FBS-4 equipped chassis.",
        features: ["Module Synchronization", "Key Programming", "Immobilizer Reset", "SCN Coding Support"],
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000",
        icon: React.createElement(ShieldCheck, { size: 24 })
    }
];