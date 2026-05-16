// src/data/keyRepairData.ts
import React from "react";
import { Key } from "lucide-react";

export const mbKeys = [
    {
        id: "mb-key-gen2-mod",
        title: "Modified MB - Key second-generation",
        category: "Electronic Key",
        image: "/images/keys/key-gen2-mod.jpg",
        description: "Modified second-generation electronic key. Features a ruggedized shell and optimized IR transponder for better response.",
        specs: ["Protocol: FBS3", "Battery: CR2025", "Frequency: 433MHz"]
    },
    {
        id: "mb-key-gen2-chrome",
        title: "MB - Key second-generation chrome",
        category: "Chrome Key",
        image: "/images/keys/key-gen2-chrome.jpg",
        description: "The classic chrome-sided second-gen key. We offer full internal board repair and new OE-spec housing.",
        specs: ["Protocol: FBS3", "Security: Rolling Code", "Finish: Polished Chrome"]
    },
    {
        id: "mb-key-gen3-electronic",
        title: "MB - Key third-generation electronic",
        category: "Electronic Key",
        image: "/images/keys/key-gen3.jpg",
        description: "Third-generation smart key. High-security encryption used in mid-2000s Mercedes-Benz luxury sedans.",
        specs: ["Protocol: FBS3", "Keyless-Go Support", "Range: 40 Meters"]
    },
    {
        id: "mb-key-fbs3-gen4-a",
        title: "MB - Key FBS3 Fourth-generation",
        category: "FBS3 Systems",
        image: "/images/keys/key-fbs3-gen4.jpg",
        description: "Fourth-generation high-gloss key. Common for resynchronization needs and button tactile restoration.",
        specs: ["Protocol: FBS3", "Battery: CR2032", "Compatibility: 2010+ Models"]
    },
    {
        id: "mb-ir-key-fob",
        title: "MB - IR Key Fob Remote",
        category: "Infrared Key",
        image: "/images/keys/key-ir-fob.jpg",
        description: "Traditional Infrared key for early electronic ignition systems. Prone to synchronization loss.",
        specs: ["Protocol: FBS2/3", "Signal: Infrared", "Compatibility: W210, W202"]
    },
    {
        id: "mb-key-battery-panel",
        title: "MB - Key Battery Cover Panel",
        category: "Accessories",
        image: "/images/keys/key-panel.jpg",
        description: "OEM replacement battery panels with high-integrity seals to protect the internal PCB from moisture.",
        specs: ["Material: High-Grade ABS", "Seal: Moisture Resistant", "Finish: Matte Black"]
    }
];