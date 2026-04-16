export interface SparePart {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    description: string;
    compatibility: string[];
    stock: boolean;
}

export const spareParts: SparePart[] = [
    {
        id: "vgs3-unit",
        name: "7G-Tronic VGS3 Unit",
        category: "Transmission",
        price: "$1,200.00",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
        description: "Fully synchronized VGS3 Transmission Control Module for Mercedes-Benz 722.9 systems.",
        compatibility: ["W204", "W212", "W221"],
        stock: true
    },
    {
        id: "fbs4-eis",
        name: "FBS-4 Electronic Ignition Switch",
        category: "Security",
        price: "$850.00",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
        description: "Original OEM EIS for FBS-4 chassis. Requires engineering synchronization.",
        compatibility: ["W205", "W213", "W222"],
        stock: true
    },
    // Add more parts as needed...
];