export interface NewsArticle {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    content: string[];
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
            "The evolution of the FBS-4 (Fahrberechtigungssystem) represents one of the most significant hurdles in modern automotive locksmithing and control module synchronization. Unlike its predecessor, FBS-3, which relied on local hash calculations, FBS-4 introduces a cloud-verified, certificate-based authentication system.",
            "In our recent laboratory tests, we have successfully mapped the handshake sequence between the EIS (Electronic Ignition Switch) and the primary Engine Management System. This breakthrough allows for more efficient module replacement without the standard 48-hour cooldown periods usually mandated by dealership software.",
            "Key takeaways for workshops: Hardware synchronization now requires stable 13.5V power supply. Virtual handshake logs must be archived for security auditing. Use of high-speed CAN-FD interfaces is now mandatory for newer chassis like the W206 and W223."
        ],
        author: "Bello Mubaraq",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
        date: "April 12, 2026",
        readTime: "8 min read",
        featured: true,
        tags: ["Mercedes", "FBS-4", "Coding"]
    },
    {
        id: "vmax-unlocked",
        category: "Performance",
        title: "VMAX and Transmission Routines: Unlocking the AMG Potential",
        excerpt: "A deep dive into bypassing factory speed limiters and optimizing shift points via Vediamo.",
        content: [
            "Modern performance vehicles are often digitally shackled by regional regulations and fleet-wide safety limiters. For the AMG enthusiast, the 'VMAX' parameter is the gatekeeper of the vehicle's true top-end potential. By utilizing Vediamo or DTS Monaco, we can access the variant coding within the MED177 or Bosch MG1 control units.",
            "Beyond simple speed limiter removal, the true art of software engineering lies in the recalibration of transmission shift points. The 9G-Tronic transmission, while robust, is programmed for fuel efficiency at the cost of throttle response. By modifying the 'Agility Mode' bits in the VGS module, we can induce a sharper, more aggressive downshift profile that mimics the GT-series mapping.",
            "However, performance optimization must never come at the expense of mechanical longevity. We strictly adhere to thermal management limits. Unlocking VMAX also requires an audit of the vehicle's cooling capacity and tire speed ratings to ensure the digital freedom is matched by physical safety.",
            "Our team provides remote assistance for these specific coding strings, ensuring that checksums are verified before the final write to the EEPROM."
        ],
        author: "KingsCarNot Engineering",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070",
        date: "April 15, 2026",
        readTime: "12 min read",
        featured: false,
        tags: ["AMG", "Performance", "Coding"]
    },
    {
        id: "ev-diagnostics-2026",
        category: "Innovation",
        title: "High-Voltage Safety: Diagnosing the Porsche Taycan Battery",
        excerpt: "Navigating the complexities of 800V architectures and cell balancing via Piwis III.",
        content: [
            "As the workshop landscape shifts toward electrification, the tools of the trade are evolving from mechanical wrenches to high-isolation multi-meters and specialized software interfaces. The Porsche Taycan, with its 800-volt architecture, presents a unique challenge for the modern diagnostic technician.",
            "Using the Piwis III interface, we have developed a protocol for evaluating SOH (State of Health) at the individual module level. Often, a 'Power System Error' does not necessitate a full battery replacement. Through deep-level data logging, we can identify specific cell deviations that can be rectified through targeted balancing routines.",
            "Safety is paramount. Working with 800V systems requires certified insulated tools and a strict adherence to the 'De-energization' protocol. We provide full documentation on how to safely isolate the HV system before performing any physical inspections on the battery housing.",
            "This technical bulletin outlines the common error codes associated with the Taycan's DC/DC converter and provides the step-by-step flashing procedure to resolve software-induced charging interruptions."
        ],
        author: "Zainab Muhammad",
        image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=2070",
        date: "April 16, 2026",
        readTime: "10 min read",
        featured: false,
        tags: ["Porsche", "Taycan", "EV", "Battery"]
    },
    {
        id: "bmw-idrive-9",
        category: "User Experience",
        title: "Retrofitting iDrive 9: Challenges in the Linux Ecosystem",
        excerpt: "Why upgrading older head units to the latest Android-based BMW OS is a coding nightmare.",
        content: [
            "BMW's transition to iDrive 9 marks a departure from the QNX-based architectures of the past toward a Linux-based Android Automotive OS. While this offers a richer app ecosystem, it has created a massive rift in the retrofit community. The hardware requirements for MGU22 (Head Unit High) are significantly different from the previous NBT Evo or MGU generations.",
            "The primary challenge lies in the 'Secure Boot' sequence. iDrive 9 utilizes a hardware-level 'Root of Trust' that checks for signed certificates during every boot cycle. Attempting to fit this head unit into an older G-series chassis results in an immediate component protection lock.",
            "We are currently exploring the use of custom CAN-filters to spoof the required chassis signals. While we have achieved partial functionality, features like Augmented Reality Navigation and Digital Key 2.0 remain elusive without official FSC (Freischaltcode) enablement from BMW's servers.",
            "For workshops, we recommend sticking to iDrive 8.5 retrofits for the time being, as the stability of the iDrive 9 bridge is currently insufficient for daily-driven vehicles."
        ],
        author: "Bello Mubaraq",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070",
        date: "April 05, 2026",
        readTime: "9 min read",
        featured: false,
        tags: ["BMW", "iDrive", "Retrofit"]
    }
];