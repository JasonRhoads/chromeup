const cyberware = {
    "fashionware" : {
        "base" : [
            {
                "name" : "fashionware",
                "optionSlotsAvailable": 7,
                "required" : false
            }
        ],
        "options" : [
            {
                "name" : "Biomonitor",
                "install" : "Mall",
                "description" : "Subdermal implant which generates a readout of vitals. Can link to Agent.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },
            {
                "name" : "Chemskin",
                "install" : "Mall",
                "description" : "Dyes and pigments infused into the skin to permanently change its hue. +2 to Personal Grooming if user also has Techhair.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },
            {
                "name" : "EMP Threading",
                "install" : "Mall",
                "description" : "Thin silver lines that run in circuit-like patterns across the body.",
                "optionSlotsUses": 1,
                "cost" : 10,
                "humanityLoss" : "0"
            },
            {
                "name" : "Light Tattoo",
                "install" : "Mall",
                "description" : "Subdermal patches store light and project colored tattoos under the skin. +2 to Wardrobe and Style if user has three or more tattoos.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },
            {
                "name" : "Shift Tacts",
                "install" : "Mall",
                "description" : "Color-changing lenses implanted into the eye.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },
            {
                "name" : "Skinwatch",
                "install" : "Mall",
                "description" : "Subdermally implanted LED watch.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },
            {
                "name" : "Techhair",
                "install" : "Mall",
                "description" : "Color-light-emitting artificial hair. +2 to Personal Grooming if user also has Chemskin.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "0"
            },

        ]
    },
    "neuralware" : {
        "base" : [
            {
                "name" : "Neural Link",
                "install" : "Clinic",
                "description" : "Wired artificial nervouse system. Required to use Neuralware and Subdermal Grip.",
                "optionSlotsAvailable": 5,
                "cost" : 500,
                "humanityLoss" : "2d6",
                "required" : true
            }
        ],
        "options" : [
            {
                "name" : "Braindance Recorder",
                "install" : "Clinic",
                "description" : "Records user's experiences to memory chip or external device. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Chipware Socket",
                "install" : "Clinic",
                "description" : "A single socket installed in back of the neck. Required to use Chipware. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Interface Plugs",
                "install" : "Clinic",
                "description" : "Plugs in wrist or head that allow connection to machines. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Kerenzikov",
                "install" : "Clinic",
                "description" : "Speedware. User adds +2 to Initiative. Only 1 piece of Speedware can be installed at a time. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Sandevistan",
                "install" : "Clinic",
                "description" : "Speedware. When activated as an Action adds +3 to Initiative for one minute. Has 1 hour cool down period. Only 1 piece of Speedware can be installed at a time. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Chemical Analyzer",
                "install" : "N/A",
                "description" : "Chipware. Tests substance for precise chemical composition and compares to a database. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Memory Chip",
                "install" : "N/A",
                "description" : "Data storage. User's cyberware can store or access data on it.",
                "optionSlotsUses": 0,
                "cost" : 10,
                "humanityLoss" : "0"
            },
            {
                "name" : "Olfactory Boost",
                "install" : "N/A",
                "description" : "Chipware. User can use Tracking Skill to track via scent. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 100,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Pain Editor",
                "install" : "N/A",
                "description" : "Chipware. User ignores penalties due to being Seriously Wounded. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Skill Chip",
                "install" : "N/A",
                "description" : "Chipware. User has specific Skill at Level 3 unless Skill is already 3+. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Skill Chip (x2)",
                "install" : "N/A",
                "description" : "Chipware. User has specific Skill at Level 3 unless Skill is already 3+. Skill Chips for (x2) cost Skills cost more. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 1000,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Tactile Boost",
                "install" : "N/A",
                "description" : "Chipware. User can detect motion within 20m/yd by placing hand on surface. Requires Chipware Socket.",
                "optionSlotsUses": 0,
                "cost" : 100,
                "humanityLoss" : "2d6"
            }
        ]
    },
    "cyberoptics" : {
        "base" : [
            {
                "name" : "Left Cybereye",
                "install" : "Clinic",
                "description" : "Artificial Eye. Each Cybereye has 3 Option Slots. Some options must be paired (purchased twice and installed in two different Cybereyes on a user. HL must be paid for each).",
                "optionSlotsAvailable": 3,
                "cost" : 100,
                "humanityLoss" : "2d6",
                "required" : true
            },
            {
                "name" : "Right Cybereye",
                "install" : "Clinic",
                "description" : "Artificial Eye. Each Cybereye has 3 Option Slots. Some options must be paired (purchased twice and installed in two different Cybereyes on a user. HL must be paid for each).",
                "optionSlotsAvailable": 3,
                "cost" : 100,
                "humanityLoss" : "2d6",
                "required" : true
            },
        ],
        "options" : [
            {
                "name" : "Anti-Dazzle",
                "install" : "Mall",
                "description" : "User immune to effects caused by flashes of light. Requires two Cybereyes and must be paired.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Chyron",
                "install" : "Mall",
                "description" : "Projects subscreen into user's field of vision.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Color Shift",
                "install" : "Mall",
                "description" : "Unlimited color and pattern changes for the eye.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Dartgun",
                "install" : "Clinic",
                "description" : "Single shot Dartgun Exotic Weapon concealed in eye.",
                "optionSlotsUses": 3,
                "pairedRequired": false,
                "cost" : 500,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Image Enhance",
                "install" : "Mall",
                "description" : "Adds +2 to Perception, Lip Reading, and Conceal/Reveal Object. Requires two Cybereyes and must be paired.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Low Light / Infrared / UV",
                "install" : "Mall",
                "description" : "User can ignore penalties due to darkness, smoke, fog, etc. Requires two Cybereyes, must be paired, and takes 2 Option Slots per Cybereye.",
                "optionSlotsUses": 2,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "MicroOptics",
                "install" : "Clinic",
                "description" : "Provides user with 400x magnification.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "MicroVideo",
                "install" : "Clinic",
                "description" : "Camera in eye. Records audio and video to Memory Chip or linked Agent, takes 2 Option Slots.",
                "optionSlotsUses": 2,
                "pairedRequired": false,
                "cost" : 500,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Radiation Detector",
                "install" : "Clinic",
                "description" : "Radiation readings within 100m/yds displayed in form of blue glow.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 1000,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Targeting Scope",
                "install" : "Clinic",
                "description" : "Adds +1 to Check when making Aimed Shot.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "TeleOptics",
                "install" : "Clinic",
                "description" : "Can see detail up to 800m/yd away. +1 to Aimed Shots against target 51m/yds or farther away.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Virtuality",
                "install" : "Mall",
                "description" : "Projects cyberspace imagery over user's view of the world.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
        ]
    },
    "cyberaudio" : {
        "base" : [
            {
                "name" : "Cyberaudio Suite",
                "install" : "Clinic",
                "description" : "Cyberaudio Suite is installed invisibly in the inner skull. System has 3 Option Slots for Cyberaudio Options. User can only have one Cyberaudio Suite installed.",
                "optionSlotsAvailable": 3,
                "cost" : 500,
                "humanityLoss" : "2d6",
                "required" : true
            }
        ],
        "options" : [
            {
                "name" : "Amplified Hearing",
                "install" : "Mall",
                "description" : "+2 to Perception for Checks involving hearing.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Audio Recorder",
                "install" : "Clinic",
                "description" : "Records audio to Memory Chip or linked Agent.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Bug Detector",
                "install" : "Mall",
                "description" : "Beeps when within 2m/yds of a listening device.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Homing Tracer",
                "install" : "Clinic",
                "description" : "Can follow a linked tracer up to 1 mile away.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Internal Agent",
                "install" : "Mall",
                "description" : "Fully functional Agent installed internally. Can be linked to a Cybereye with Chyron display. Otherwise, audio only",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Level Damper",
                "install" : "Mall",
                "description" : "User immune to effects caused by loud noises.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Radio Communicator",
                "install" : "Mall",
                "description" : "User can communicate via radio. 1 mile range.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Radio Scanner / Music Player",
                "install" : "Clinic",
                "description" : "Can play music from Data Pool or Memory Chip or tune into radio broadcasts within 1 mile.",
                "optionSlotsUses": 1,
                "cost" : 50,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Radar Detector",
                "install" : "Clinic",
                "description" : "Beeps if active radar beam is within 100m/yd.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Scrambler / Descrambler",
                "install" : "Mall",
                "description" : "Allows user to scramble outgoing communications and descramble incoming communications.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Voice Stress Analyzer",
                "install" : "Mall",
                "description" : "+2 to Human Perception and Interrogation Checks.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            }
        ]
    },
    "internalCyberware" : {
        "base" : [
            {
                "name" : "Internal Cyberware",
                "optionSlotsAvailable": 7,
                "required" : false
            }
        ],
        "options" : [
            {
                "name" : "AudioVox",
                "install" : "Clinic",
                "description" : "Voice synthesizer. Adds +2 to Acting and Play Instrument when singing.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Contraceptive Implant",
                "install" : "Mall",
                "description" : "Prevents undesired pregnancy.",
                "optionSlotsUses": 1,
                "cost" : 10,
                "humanityLoss" : "0"
            },
            {
                "name" : "Enhanced Antibodies",
                "install" : "Mall",
                "description" : "After stabilization, user heals BODY x 2 for each day spent resting.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Cybersnake",
                "install" : "Hospital",
                "description" : "Esophagus mounted Very Heavy Melee Weapon. Can be concealed.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Gills",
                "install" : "Hospital",
                "description" : "User can breathe underwater.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Grafted Muscle and Bone Lace",
                "install" : "Hospital",
                "description" : "Increases BODY by 2. The increase changes HP, Wound Threshold, and Death Save. Multiple installments stack. Cannot raise BODY above 10.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Independent Air Supply",
                "install" : "Hospital",
                "description" : "Provides 30 minutes of oxygen. Takes 1 hour to refill from ambient atmosphere.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Midnight Lady™ Sexual Implant",
                "install" : "Clinic",
                "description" : "Be a Venus, be the fire, be desire.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Mr. Studd™ Sexual Implant",
                "install" : "Clinic",
                "description" : "All night, every night, and they'll never know.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Nasal Filters",
                "install" : "Clinic",
                "description" : "User immune to effects of toxic gases, fumes, and similar dangers.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Radar / Sonar Implant",
                "install" : "Clinic",
                "description" : "Scans terrain within 50m/yds. Cannot scan through cover.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Toxin Binders",
                "install" : "Clinic",
                "description" : "Adds +2 to Resist Torture/Drugs.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Vampyres",
                "install" : "Clinic",
                "description" : "Excellent Quality Light Melee Weapon implanted in mouth. Can be concealed. User can add Poison or Biotoxin.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "4d6"
            }
        ]
    },
    "externalCyberware" : {
        "base" : [
            {
                "name" : "External Cyberware",
                "optionSlotsAvailable": 7,
                "required" : false
            }
        ],
        "options" : [
            {
                "name" : "Hidden Holster",
                "install" : "Clinic",
                "description" : "Can store weapon capable of concealment inside body.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Skin Weave",
                "install" : "Hospital",
                "description" : "User's body and head armored at SP7. Does not stack with worn Armor. Ablates. Recovers 1 SP per day of rest.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Subdermal Armor",
                "install" : "Hospital",
                "description" : "User's body and head armored at SP11. Does not stack with worn Armor. Ablates. Recovers 1 SP per day of rest.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Subdermal Pocket",
                "install" : "Clinic",
                "description" : "2\" x 4\" (5cm x 10cm) storage space just under the skin with RealSkinn™ zipper.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            }
        ]
    },
    "cyberArms" : {
        "base" : [
            {
                "name" : "Left Cyberarm",
                "install" : "Hospital",
                "description" : "Replacement arm. Has 4 Option Slots. Comes installed with Standard Hand that doesn't cause Humanity Loss or take up an Option Slot.",
                "optionSlotsAvailable": 4,
                "cost" : 500,
                "humanityLoss" : "2d6",
                "cyberlimb" : true,
                "required" : true
            },
            {
                "name" : "Right Cyberarm",
                "install" : "Hospital",
                "description" : "Replacement arm. Has 4 Option Slots. Comes installed with Standard Hand that doesn't cause Humanity Loss or take up an Option Slot.",
                "optionSlotsAvailable": 4,
                "cost" : 500,
                "humanityLoss" : "2d6",
                "cyberlimb" : true,
                "required" : true
            }
        ],
        "options" : [
            {
                "name" : "Standard Hand",
                "install" : "Clinic",
                "description" : "Standard cybernetic hand. Can be installed in a meat arm.",
                "optionSlotsUses": 0,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Big Knucks",
                "install" : "Clinic",
                "description" : "Armored knuckles. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Cyberdeck",
                "install" : "Clinic",
                "description" : "Cyberdeck installed in Cyberarm. Requires a Cyberarm and takes up 3 Option Slots.",
                "optionSlotsUses": 3,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Grapple Hand",
                "install" : "Clinic",
                "description" : "Fires hand, along with a grapple line up to 30m/yds. Cannot be used as a weapon. Requires a Cyberarm.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Medscanner",
                "install" : "Clinic",
                "description" : "Medscanner installed in Cyberarm. Helps diagnose illness and injury. +2 to First Aid and Paramedic. Requires a Cyberarm and takes 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Popup Grenade Launcher",
                "install" : "Clinic",
                "description" : "A single shot Grenade Launcher installed in a Cyberarm. Weapon can be concealed. Requires a Cyberarm and takes up 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Popup Melee Weapon",
                "install" : "Clinic",
                "description" : "Any Light, Medium, or Heavy Melee Weapon installed in a Cyberarm. Weapon can be concealed even if not normally concealable. Requires a Cyberarm and takes up 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Popup Shield",
                "install" : "Clinic",
                "description" : "A Bulletproof Shield installed in the Cyberarm. Can be concealed and replaced when at 0 HP. Requires a Cyberarm and takes up 3 Option Slots.",
                "optionSlotsUses": 3,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Popup Ranged Weapon",
                "install" : "Clinic",
                "description" : "Any One Handed Ranged Weapon installed in a Cyberarm. Weapon can be concealed even if not normally concealable. Requires a Cyberarm and takes up 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Quick Change Mount",
                "install" : "Clinic",
                "description" : "Allows user to remove or install a Cyberarm as an Action.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Rippers",
                "install" : "Clinic",
                "description" : "Carbo-glass claws. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Scratchers",
                "install" : "Mall",
                "description" : "Carbo-glass fingernails. Light Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Shoulder Cam",
                "install" : "Clinic",
                "description" : "Video camera mounted in shoulder. Can be concealed. Requires a Cyberarm and takes up 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Slice 'N Dice",
                "install" : "Clinic",
                "description" : "Monofilament whip implanted in the thumb. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Subdermal Grip",
                "install" : "Clinic",
                "description" : "Allows user to use Smartgun without Interface Plug. Can be installed as only piece of Cyberware in a meat arm. Requires Neural Link.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Techscanner",
                "install" : "Clinic",
                "description" : "Techscanner installed in Cyberarm. Helps diagnose broken tech. +2 to multiple TECH-based Skills. Requires a Cyberarm and takes 2 Option Slots.",
                "optionSlotsUses": 2,
                "cost" : 500,
                "humanityLoss" : "2d6"
            },
            {
                "name" : "Tool Hand",
                "install" : "Clinic",
                "description" : "Fingers contain screwdriver, wrench, small drill, and other tools. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 100,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Wolvers",
                "install" : "Clinic",
                "description" : "Long claws extended from the knuckles. Heavy Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.",
                "optionSlotsUses": 1,
                "cost" : 500,
                "humanityLoss" : "2d6"
            }
        ]
    },
    "cyberLegs" : {
        "base" : [
            {
                "name" : "Left Cyberleg",
                "install" : "Hospital",
                "description" : "Replacement leg. Has 3 Option Slots. Comes installed with Standard Foot that doesn't cause Humanity Loss or take up an Option Slot. Most Cyberleg options must be paired.",
                "optionSlotsAvailable": 3,
                "cost" : 100,
                "humanityLoss" : "1d6",
                "cyberlimb" : true,
                "required" : true
            },
            {
                "name" : "Right Cyberleg",
                "install" : "Hospital",
                "description" : "Replacement leg. Has 3 Option Slots. Comes installed with Standard Foot that doesn't cause Humanity Loss or take up an Option Slot. Most Cyberleg options must be paired.",
                "optionSlotsAvailable": 3,
                "cost" : 100,
                "humanityLoss" : "1d6",
                "cyberlimb" : true,
                "required" : true
            }
        ],
        "options" : [
            {
                "name" : "Standard Foot",
                "install" : "Clinic",
                "description" : "Standard cybernetic foot. Can be installed in a meat leg.",
                "optionSlotsUses": 0,
                "cost" : 100,
                "humanityLoss" : "1d6/2"
            },
            {
                "name" : "Grip Foot",
                "install" : "Clinic",
                "description" : "Traction enhanced. Negates movement penalty when climbing. Requires two Cyberlegs and must be paired.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Jump Booster",
                "install" : "Clinic",
                "description" : "Hydraulics in legs. Negates movement penalty when jumping. Requires two Cyberlegs, takes up 2 Option Slots, and must be paired.",
                "optionSlotsUses": 2,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Skate Foot",
                "install" : "Clinic",
                "description" : "Inline skates built into feet. Can be concealed. Increases movement by 6m/yds when using Run Action. Requires two Cyberlegs and must be paired.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Talon Foot",
                "install" : "Clinic",
                "description" : "Blade mounted in foot. Light Melee Weapon. Can be concealed. Can be installed as the only piece of Cyberware in a meat leg.",
                "optionSlotsUses": 1,
                "pairedRequired": false,
                "cost" : 500,
                "humanityLoss" : "1d6"
            },
            {
                "name" : "Web Foot",
                "install" : "Clinic",
                "description" : "Thin webbing between toes. Negates movement penalty when swimming. Requires Two Cyberlegs and must be paired.",
                "optionSlotsUses": 1,
                "pairedRequired": true,
                "cost" : 500,
                "humanityLoss" : "1d6"
            }  
        ]
    },
    "borgware" : {
        "base" : [
            {
                "name" : "Borgware",
                "optionSlotsAvailable": 4,
                "required" : false
            }
        ],
        "options" : [
            {
                "name" : "Artificial Shoulder Mount",
                "install" : "Hospital",
                "description" : "User can mount 2 Cyberarms under first set of arms.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Implanted Linear Frame ß (Beta)",
                "install" : "Hospital",
                "description" : "Enhanced skeleton and support structure. Increases BODY to 14. The increase changes HP, Wound Threshold, and Death Save. Requires BODY 8 and 2 Grafted Muscles and Bone Lace.",
                "optionSlotsUses": 1,
                "cost" : 5000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Implanted Linear Frame Σ (Sigma)",
                "install" : "Hospital",
                "description" : "Enhanced skeleton and support structure. Increases BODY to 12. The increase changes HP, Wound Threshold, and Death Save. Requires BODY 6 and Grafted Muscles and Bone Lace.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "MultiOptic Mount",
                "install" : "Hospital",
                "description" : "User can mount up to 5 additional Cybereyes.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
            {
                "name" : "Sensor Array",
                "install" : "Clinic",
                "description" : "User can install up to 5 additional Cyberaudio Options. Requires Cyberaudio Suite but does not take up Cyberaudio Option Slot.",
                "optionSlotsUses": 1,
                "cost" : 1000,
                "humanityLoss" : "4d6"
            },
        ]
    }
};

const cyberLimbs = [
    {
        "name" : "Hardened Shielding",
        "install" : "Clinic",
        "description" : "Cyberlimb and installed options cannot be rendered inoperable by EMP pulses or Non-Black ICE Program effects. Requires Cyberarm or Cyberleg.",
        "optionSlotsUses": 1,
        "cost" : 1000,
        "humanityLoss" : "1d6"
    },
    {
        "name" : "Plastic Covering",
        "install" : "Mall",
        "description" : "Plastic coating for Cyberlimb. Available in wide variety of colors and patterns. Requires a Cyberarm or Cyberleg but does not take an Option Slot.",
        "optionSlotsUses": 0,
        "cost" : 100,
        "humanityLoss" : "0"
    },
    
    {
        "name" : "Realskinn™ Covering",
        "install" : "Mall",
        "description" : "Artificial skin coating for Cyberlimb. Requires a Cyberarm or Cyberleg but does not take an Option Slot.",
        "optionSlotsUses": 0,
        "cost" : 500,
        "humanityLoss" : "0"
    },
    
    {
        "name" : "Superchrome® Covering",
        "install" : "Mall",
        "description" : "Shiny metallic coating for Cyberlimb. +2 to Wardrobe and Style. Requires a Cyberarm or Cyberleg but does not take an Option Slot.",
        "optionSlotsUses": 0,
        "cost" : 1000,
        "humanityLoss" : "0"
    },
];