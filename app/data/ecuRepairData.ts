export const ecuRepairs = [
    {
        id: "mb-me97-restoration",
        title: "Mercedes ME9.7 ECU Restoration",
        category: "Engine Control Unit",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000",
        description: "Surgical repair for ME9.7 modules common in M272/M273 engines. Our protocol addresses thermal-induced communication failures and driver-stage degradation.",
        specs: ["Protocol: Bosch ME9.7", "Chassis: W204, W212, W221", "Service: Component Level"],
        faults: [
            "Vehicle not starting when hot (Thermal Failure)",
            "Low fuel pressure at operating temperatures",
            "Engine fan runs at full speed unexpectedly",
            "Alternator serial interface communication faults",
            "Throttle body response issues due to internal icing"
        ],
        harnessIssues: [
            "Injector pulse instability",
            "Idle control irregularities",
            "Ignition output voltage drops"
        ],
        services: [
            {
                name: "SCN Coding Service",
                description: "Standard ECU replacement requires SCN coding to authorize the module. We offer full remote/bench SCN synchronization.",
                requirements: ["VIN Number", "OEM Part Number"]
            },
            {
                name: "Make Virgin Service",
                description: "We manipulate your existing data to reset the ECU to a factory 'Virgin' state, allowing for easy adaptation without a donor unit.",
                requirements: ["Original ECU Data Dump", "VIN Number", "Part Number"]
            }
        ]
    },
    {
        id: "mb-esp-abs-repair",
        title: "ESP / ABS Controller Restoration",
        category: "Braking & Stability",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000",
        description: "Surgical repair of electronic stability program modules. We address internal pressure sensor failures and solenoid driver faults without replacing the hydraulic block.",
        specs: ["Protocol: Bosch / ATE", "Chassis: W204, W212, W164, W221", "Service: Component Level"],
        faults: [
            "Internal Pressure Sensor (C1210) faults",
            "CAN Communication timeout with Traction recovery",
            "Intermittent ABS/ESP warning lights when hot",
            "Wheel speed sensor signal processing errors"
        ],
        harnessIssues: [
            "Corroded pins at the main 47-pin connector",
            "Grounding fluctuations causing false sensor data",
            "Voltage spikes from alternator serial faults"
        ],
        services: [
            {
                name: "ABS SCN Coding",
                description: "Standard replacement requires VIN-specific parameters for brake force distribution. We offer offline SCN calibration.",
                requirements: ["VIN Number", "Full Fault Log"]
            },
            {
                name: "VIN Adaptation",
                description: "Adapting a donor ESP module to your chassis identity to ensure system authorization.",
                requirements: ["Donor Unit ID", "Chassis VIN"]
            }
        ]
    },
    {
        id: "mb-sam-module-repair",
        title: "Front & Rear SAM Restoration",
        category: "Body Control",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
        description: "Signal Acquisition Module (SAM) repair for water-damaged or short-circuited units. Critical for lighting, wiper, and central locking protocols.",
        specs: ["Protocol: Continental / Hella", "Chassis: W164, W251, W204, W212", "Service: Micro-Soldering"],
        faults: [
            "Headlights or tail lights staying on/off",
            "Fuel gauge reporting inaccurate levels",
            "Wipers running at full speed unexpectedly",
            "Battery drain due to relay stay-alive faults"
        ],
        harnessIssues: [
            "Water ingress via windshield cowl",
            "Corroded loom at the rear wheel well (W164)",
            "Short circuits in the tailgate wiring"
        ],
        services: [
            {
                name: "SAM Data Recovery",
                description: "Extraction of configuration data from water-damaged units to transfer into new hardware.",
                requirements: ["Original Unit", "VIN Number"]
            }
        ]
    },
    {
        id: "mb-srs-airbag-reset",
        title: "SRS Airbag Control Unit",
        category: "Safety Systems",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000",
        description: "Digital reset of SRS Airbag modules after deployment. We remove 'Hard Crash Data' to restore the module to factory virgin state.",
        specs: ["Protocol: Autoliv / Temic", "Chassis: All Generation 3 & 4", "Service: EEPROM Reset"],
        faults: [
            "Permanent 'Crash Data Stored' faults",
            "Internal Control Module Memory Error (B1000)",
            "Occupancy sensor communication faults",
            "Firing circuit resistance high/low errors"
        ],
        harnessIssues: [
            "Under-seat connector resistance spikes",
            "Clock-spring ribbon cable fractures",
            "Pre-tensioner circuit open faults"
        ],
        services: [
            {
                name: "Crash Data Removal",
                description: "Removing deployment flags from the EEPROM to allow module reuse after a safe mechanical repair.",
                requirements: ["Part Number", "EEPROM Dump"]
            }
        ]
    },
    {
        id: "mb-led-hli-repair",
        title: "Multibeam LED / HLI Modules",
        category: "Lighting Intelligence",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000",
        description: "Repair and SCN coding of Intelligent Light System (ILS) and Multibeam control modules (HLI).",
        specs: ["Protocol: FBS4 / DAS4", "Chassis: W205, W213, W222", "Service: SCN / Coding"],
        faults: [
            "Adaptive Highbeam Assist Inoperative",
            "Individual LED segment failures",
            "Headlight horizontal/vertical adjustment faults",
            "Communication error with the Camera/MPC module"
        ],
        harnessIssues: [
            "Headlight connector moisture intrusion",
            "LIN-bus communication interference",
            "Pinching in the front bumper loom"
        ],
        services: [
            {
                name: "HLI SCN Coding",
                description: "New Multibeam modules require online SCN coding to match the vehicle's specific lighting configuration.",
                requirements: ["VIN Number", "Part Number"]
            }
        ]
    }
];