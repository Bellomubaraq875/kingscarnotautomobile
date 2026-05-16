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
];