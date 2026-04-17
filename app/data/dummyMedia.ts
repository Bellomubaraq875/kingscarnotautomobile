export interface MediaEntry {
    id: string;
    title: string;
    category: string;
    thumbnail: string;
    videoUrl: string; // Placeholder for YouTube/Vimeo/Internal
    duration: string;
    date: string;
    description: string;
    tags: string[];
}

export const dummyMedia: MediaEntry[] = [
    {
        id: "vgs3-sync-tutorial",
        title: "Mastering VGS3 Virginization & Personalization",
        category: "Technical Workshop",
        thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "14:20",
        date: "April 15, 2026",
        description: "A deep dive into the synchronization of the 7G-Tronic transmission control units. We cover zeroing out existing hash values and establishing a clean factory handshake.",
        tags: ["Transmission", "Coding", "Mercedes"]
    },
    {
        id: "fbs4-security-overview",
        title: "The Architecture of FBS-4 Security Systems",
        category: "Field Intelligence",
        thumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "08:45",
        date: "April 10, 2026",
        description: "Understanding the certificate-based authentication in modern Mercedes-Benz security modules.",
        tags: ["Security", "Chassis", "FBS-4"]
    },
    {
        id: "ecu-recovery-session",
        title: "Emergency ECU Recovery: Bosch MG1 Protocols",
        category: "Live Session",
        thumbnail: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "22:15",
        date: "March 28, 2026",
        description: "Step-by-step recovery process for bricked Bosch engine modules during high-level tuning or flashing.",
        tags: ["Performance", "Recovery", "Bosch"]
    }
];