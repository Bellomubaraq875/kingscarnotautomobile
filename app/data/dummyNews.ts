// src/app/data/dummyNews.ts

export interface NewsArticle {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    content: string[]; // Array of strings to represent paragraphs
    author: string;
    image: string;
    date: string;
    readTime: string;
    featured: boolean;
    tags: string[];
}

export const dummyNews: NewsArticle[] = [
    {
        id: "fbs4-mastery",
        category: "Technical Update",
        title: "Mastering FBS-4: New Frontiers in Mercedes Security",
        excerpt: "Exploring the latest protocols for 2024+ Mercedes-Benz immobilizer systems and ECU marriages.",
        content: [
            "The evolution of the FBS-4 (Fahrberechtigungssystem) represents one of the most significant hurdles in modern automotive locksmithing and control module synchronization. Unlike its predecessor, FBS-3, which relied on local hash calculations, FBS-4 introduces a cloud-verified authentication system.",
            "In our recent laboratory tests, we have successfully mapped the handshake sequence between the EIS (Electronic Ignition Switch) and the primary Engine Management System. This breakthrough allows for more efficient module replacement without the standard cooldown periods.",
            "Key takeaways for workshops: Hardware synchronization now requires stable 13.5V power supply, and the use of high-speed CAN-FD interfaces is now mandatory for newer chassis like the W206 and W223."
        ],
        author: "Bello Mubaraq",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
        date: "April 12, 2026",
        readTime: "8 min read",
        featured: true,
        tags: ["Mercedes", "FBS-4", "Coding"]
    },
    {
        id: "bmw-cloud-diag",
        category: "Industry News",
        title: "The Shift to Cloud-Based OEM Diagnostics",
        excerpt: "How BMW and VAG Group are transitioning their workshop tools to always-on cloud environments.",
        content: [
            "The automotive industry is witnessing a massive transition from local software installations to 'Always-Connected' cloud diagnostics. BMW's latest ISTA versions and VAG's ODIS are increasingly requiring real-time token validation from factory servers.",
            "For independent workshops, this means high-speed internet is no longer optional—it is a core tool. Our engineers are currently developing a localized cache patch to help regions with unstable connectivity maintain diagnostic stability."
        ],
        author: "KingsCarNot Engineering",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070",
        date: "April 10, 2026",
        readTime: "5 min read",
        featured: false,
        tags: ["BMW", "VAG", "Cloud"]
    }
];