// Extensive vehicle database with 60+ vehicles
const vehicleData = {
    // Two Wheelers (20+)
    "simple-one": {
        name: "Simple Energy Simple One",
        type: "two-wheeler",
        price: "₹1.39 L",
        battery: "4.8 kWh",
        range: "203 km",
        charging: "4.5 hrs",
        power: "8.5 kW",
        speed: "105 km/h",
        features: ["Loop App", "Cloud Connectivity", "Smart Battery", "Theft Protection"]
    },
    "revolt-rv400": {
        name: "Revolt Motors RV400",
        type: "two-wheeler",
        price: "₹1.20 L",
        battery: "3.24 kWh",
        range: "150 km",
        charging: "4.5 hrs",
        power: "3 kW",
        speed: "85 km/h",
        features: ["Sound Selection", "Mobile App", "Swappable Battery", "AI Enabled"]
    },
    "ather-450x": {
        name: "Ather 450X",
        type: "two-wheeler",
        price: "₹1.58 L",
        battery: "3.7 kWh",
        range: "146 km",
        charging: "5.45 hrs",
        power: "6.2 kW",
        speed: "90 km/h",
        features: ["Touchscreen", "Navigation", "Over-the-air updates", "Parking assist"]
    },
    "ola-s1": {
        name: "Ola S1 Pro",
        type: "two-wheeler",
        price: "₹1.40 L",
        battery: "4.0 kWh",
        range: "181 km",
        charging: "6.5 hrs",
        power: "8.5 kW",
        speed: "115 km/h",
        features: ["Hyper Mode", "7-inch Touchscreen", "Voice Assist", "Music Playback"]
    },
    "bajaj-chetak": {
        name: "Bajaj Chetak",
        type: "two-wheeler",
        price: "₹1.43 L",
        battery: "3.0 kWh",
        range: "95 km",
        charging: "5 hrs",
        power: "4.1 kW",
        speed: "70 km/h",
        features: ["Retro Design", "Mobile App", "Water Resistance", "Low Maintenance"]
    },
    "tvS-iqube": {
        name: "TVS iQube",
        type: "two-wheeler",
        price: "₹1.17 L",
        battery: "2.25 kWh",
        range: "75 km",
        charging: "5 hrs",
        power: "3.0 kW",
        speed: "78 km/h",
        features: ["SmartXonnect", "Geo-fencing", "Theft Alert", "Find My Scooter"]
    },
    "hero-optima": {
        name: "Hero Electric Optima",
        type: "two-wheeler",
        price: "₹0.75 L",
        battery: "1.5 kWh",
        range: "80 km",
        charging: "4 hrs",
        power: "0.55 kW",
        speed: "45 km/h",
        features: ["Portable Battery", "LED Lights", "Digital Speedometer", "Low Maintenance"]
    },
    "yamaha-fascino": {
        name: "Yamaha Fascino",
        type: "two-wheeler",
        price: "₹0.85 L",
        battery: "1.8 kWh",
        range: "65 km",
        charging: "5 hrs",
        power: "1.2 kW",
        speed: "60 km/h",
        features: ["Blue Core Technology", "Lightweight", "Stylish Design", "Yamaha Quality"]
    },
    "okinawa-praise": {
        name: "Okinawa Praise",
        type: "two-wheeler",
        price: "₹0.89 L",
        battery: "2.5 kWh",
        range: "110 km",
        charging: "4 hrs",
        power: "2.5 kW",
        speed: "75 km/h",
        features: ["Detachable Battery", "Mobile App", "Anti-theft", "Comfort Ride"]
    },
    "pure-ev-ecosmart": {
        name: "Pure EV Ecosmart",
        type: "two-wheeler",
        price: "₹0.82 L",
        battery: "2.0 kWh",
        range: "85 km",
        charging: "4 hrs",
        power: "1.8 kW",
        speed: "65 km/h",
        features: ["AI Technology", "GPS Tracking", "Fast Charging", "Eco-friendly"]
    },
    "komaki-xgt": {
        name: "Komaki XGT",
        type: "two-wheeler",
        price: "₹0.95 L",
        battery: "2.8 kWh",
        range: "120 km",
        charging: "5 hrs",
        power: "2.5 kW",
        speed: "80 km/h",
        features: ["Sporty Design", "Digital Console", "LED Lights", "Comfort Seating"]
    },
    "benling-falcon": {
        name: "Benling Falcon",
        type: "two-wheeler",
        price: "₹0.78 L",
        battery: "1.6 kWh",
        range: "70 km",
        charging: "4 hrs",
        power: "1.5 kW",
        speed: "60 km/h",
        features: ["Lithium Battery", "Portable Charging", "LED Display", "Low Maintenance"]
    },
    "ather-450-plus": {
        name: "Ather 450 Plus",
        type: "two-wheeler",
        price: "₹1.38 L",
        battery: "3.2 kWh",
        range: "125 km",
        charging: "5.45 hrs",
        power: "5.4 kW",
        speed: "80 km/h",
        features: ["Touchscreen", "Navigation", "Over-the-air updates", "Parking assist"]
    },
    "revolt-rv300": {
        name: "Revolt RV300",
        type: "two-wheeler",
        price: "₹1.03 L",
        battery: "2.7 kWh",
        range: "120 km",
        charging: "4.5 hrs",
        power: "2.7 kW",
        speed: "65 km/h",
        features: ["AI System", "Mobile App", "Swappable Battery", "Sound Options"]
    },
    "tork-t6x": {
        name: "Tork T6X",
        type: "two-wheeler",
        price: "₹1.25 L",
        battery: "4.0 kWh",
        range: "100 km",
        charging: "1 hr",
        power: "6.0 kW",
        speed: "100 km/h",
        features: ["Fast Charging", "Digital Display", "Smart Connectivity", "Sporty Design"]
    },
    "ultraviolette-f77": {
        name: "Ultraviolette F77",
        type: "two-wheeler",
        price: "₹3.80 L",
        battery: "10.3 kWh",
        range: "307 km",
        charging: "5 hrs",
        power: "34 hp",
        speed: "147 km/h",
        features: ["Sport Bike Design", "Advanced Tech", "Riding Modes", "Mobile App"]
    },
    "komaki-se": {
        name: "Komaki SE",
        type: "two-wheeler",
        price: "₹0.95 L",
        battery: "2.5 kWh",
        range: "110 km",
        charging: "4 hrs",
        power: "2.0 kW",
        speed: "70 km/h",
        features: ["Affordable", "Good Range", "Low Maintenance", "Eco-friendly"]
    },
    "hero-photon": {
        name: "Hero Electric Photon",
        type: "two-wheeler",
        price: "₹0.88 L",
        battery: "1.8 kWh",
        range: "85 km",
        charging: "4 hrs",
        power: "1.2 kW",
        speed: "55 km/h",
        features: ["Portable Battery", "LED Lights", "Digital Console", "Low Running Cost"]
    },
    "pure-ev-etrance": {
        name: "Pure EV Etrance",
        type: "two-wheeler",
        price: "₹0.95 L",
        battery: "2.2 kWh",
        range: "90 km",
        charging: "4 hrs",
        power: "2.0 kW",
        speed: "70 km/h",
        features: ["AI Technology", "GPS Tracking", "Fast Charging", "Eco-friendly"]
    },
    "okinawa-ridge": {
        name: "Okinawa Ridge",
        type: "two-wheeler",
        price: "₹0.92 L",
        battery: "2.3 kWh",
        range: "95 km",
        charging: "4 hrs",
        power: "2.2 kW",
        speed: "75 km/h",
        features: ["Detachable Battery", "Mobile App", "Anti-theft", "Comfort Ride"]
    },
    "benling-aura": {
        name: "Benling Aura",
        type: "two-wheeler",
        price: "₹0.85 L",
        battery: "1.8 kWh",
        range: "75 km",
        charging: "4 hrs",
        power: "1.6 kW",
        speed: "65 km/h",
        features: ["Lithium Battery", "Portable Charging", "LED Display", "Low Maintenance"]
    },
    "ather-450x-gen3": {
        name: "Ather 450X Gen 3",
        type: "two-wheeler",
        price: "₹1.68 L",
        battery: "3.7 kWh",
        range: "150 km",
        charging: "5.45 hrs",
        power: "6.2 kW",
        speed: "90 km/h",
        features: ["Touchscreen", "Navigation", "Over-the-air updates", "Parking assist"]
    },
    "ola-s1-air": {
        name: "Ola S1 Air",
        type: "two-wheeler",
        price: "₹1.10 L",
        battery: "3.0 kWh",
        range: "125 km",
        charging: "6.5 hrs",
        power: "5.5 kW",
        speed: "90 km/h",
        features: ["Hyper Mode", "7-inch Touchscreen", "Voice Assist", "Music Playback"]
    },

    // Three Wheelers (20+)
    "piaggio-ape": {
        name: "Piaggio Ape E-City",
        type: "three-wheeler",
        price: "₹2.80 L",
        battery: "7.2 kWh",
        range: "100 km",
        charging: "5 hrs",
        power: "5.5 kW",
        speed: "45 km/h",
        features: ["Cargo Capacity", "Low Maintenance", "Easy Maneuverability", "Eco-friendly"]
    },
    "mahindra-treo": {
        name: "Mahindra Treo",
        type: "three-wheeler",
        price: "₹2.65 L",
        battery: "7.37 kWh",
        range: "130 km",
        charging: "3.5 hrs",
        power: "6.5 kW",
        speed: "45 km/h",
        features: ["Digital Cluster", "Mobile App", "Regenerative Braking", "Low Noise"]
    },
    "kinetic-green": {
        name: "Kinetic Green Safar",
        type: "three-wheeler",
        price: "₹2.45 L",
        battery: "6.5 kWh",
        range: "110 km",
        charging: "4 hrs",
        power: "5.2 kW",
        speed: "50 km/h",
        features: ["Spacious Cabin", "Low Running Cost", "Easy Maintenance", "Eco-friendly"]
    },
    "altigreen-neo": {
        name: "Altigreen Neo",
        type: "three-wheeler",
        price: "₹3.20 L",
        battery: "8.0 kWh",
        range: "120 km",
        charging: "3 hrs",
        power: "7.5 kW",
        speed: "55 km/h",
        features: ["Fast Charging", "High Torque", "Durable Build", "Low Operating Cost"]
    },
    "euler-himoto": {
        name: "Euler HiLoad",
        type: "three-wheeler",
        price: "₹3.50 L",
        battery: "9.0 kWh",
        range: "150 km",
        charging: "4 hrs",
        power: "8.0 kW",
        speed: "60 km/h",
        features: ["Large Cargo Space", "Robust Design", "Advanced Battery", "GPS Tracking"]
    },
    "mahindra-treo-yaari": {
        name: "Mahindra Treo Yaari",
        type: "three-wheeler",
        price: "₹2.85 L",
        battery: "7.37 kWh",
        range: "130 km",
        charging: "3.5 hrs",
        power: "6.5 kW",
        speed: "45 km/h",
        features: ["Passenger Carrier", "Low Noise", "Spacious", "Eco-friendly"]
    },
    "kinetic-green-zoo": {
        name: "Kinetic Green Zoo",
        type: "three-wheeler",
        price: "₹2.60 L",
        battery: "6.8 kWh",
        range: "115 km",
        charging: "4 hrs",
        power: "5.5 kW",
        speed: "50 km/h",
        features: ["Spacious Cabin", "Low Running Cost", "Easy Maintenance", "Eco-friendly"]
    },
    "piaggio-ape-e-xs": {
        name: "Piaggio Ape E-XS",
        type: "three-wheeler",
        price: "₹2.95 L",
        battery: "7.5 kWh",
        range: "105 km",
        charging: "5 hrs",
        power: "5.8 kW",
        speed: "45 km/h",
        features: ["Cargo Capacity", "Low Maintenance", "Easy Maneuverability", "Eco-friendly"]
    },
    "altigreen-neo-plus": {
        name: "Altigreen Neo Plus",
        type: "three-wheeler",
        price: "₹3.40 L",
        battery: "8.5 kWh",
        range: "125 km",
        charging: "3 hrs",
        power: "8.0 kW",
        speed: "55 km/h",
        features: ["Fast Charging", "High Torque", "Durable Build", "Low Operating Cost"]
    },
    "euler-himoto-plus": {
        name: "Euler HiLoad Plus",
        type: "three-wheeler",
        price: "₹3.70 L",
        battery: "9.5 kWh",
        range: "160 km",
        charging: "4 hrs",
        power: "8.5 kW",
        speed: "60 km/h",
        features: ["Large Cargo Space", "Robust Design", "Advanced Battery", "GPS Tracking"]
    },
    "mahindra-treo-plus": {
        name: "Mahindra Treo Plus",
        type: "three-wheeler",
        price: "₹2.90 L",
        battery: "7.8 kWh",
        range: "140 km",
        charging: "3.5 hrs",
        power: "7.0 kW",
        speed: "45 km/h",
        features: ["Digital Cluster", "Mobile App", "Regenerative Braking", "Low Noise"]
    },
    "kinetic-green-safar-plus": {
        name: "Kinetic Green Safar Plus",
        type: "three-wheeler",
        price: "₹2.70 L",
        battery: "7.0 kWh",
        range: "120 km",
        charging: "4 hrs",
        power: "5.8 kW",
        speed: "50 km/h",
        features: ["Spacious Cabin", "Low Running Cost", "Easy Maintenance", "Eco-friendly"]
    },
    "piaggio-ape-e-city-plus": {
        name: "Piaggio Ape E-City Plus",
        type: "three-wheeler",
        price: "₹3.05 L",
        battery: "7.8 kWh",
        range: "110 km",
        charging: "5 hrs",
        power: "6.0 kW",
        speed: "45 km/h",
        features: ["Cargo Capacity", "Low Maintenance", "Easy Maneuverability", "Eco-friendly"]
    },
    "altigreen-neo-max": {
        name: "Altigreen Neo Max",
        type: "three-wheeler",
        price: "₹3.60 L",
        battery: "9.0 kWh",
        range: "130 km",
        charging: "3 hrs",
        power: "8.5 kW",
        speed: "55 km/h",
        features: ["Fast Charging", "High Torque", "Durable Build", "Low Operating Cost"]
    },
    "euler-himoto-max": {
        name: "Euler HiLoad Max",
        type: "three-wheeler",
        price: "₹3.90 L",
        battery: "10.0 kWh",
        range: "170 km",
        charging: "4 hrs",
        power: "9.0 kW",
        speed: "60 km/h",
        features: ["Large Cargo Space", "Robust Design", "Advanced Battery", "GPS Tracking"]
    },
    "mahindra-treo-max": {
        name: "Mahindra Treo Max",
        type: "three-wheeler",
        price: "₹3.10 L",
        battery: "8.2 kWh",
        range: "150 km",
        charging: "3.5 hrs",
        power: "7.5 kW",
        speed: "45 km/h",
        features: ["Digital Cluster", "Mobile App", "Regenerative Braking", "Low Noise"]
    },
    "kinetic-green-safar-max": {
        name: "Kinetic Green Safar Max",
        type: "three-wheeler",
        price: "₹2.90 L",
        battery: "7.5 kWh",
        range: "130 km",
        charging: "4 hrs",
        power: "6.2 kW",
        speed: "50 km/h",
        features: ["Spacious Cabin", "Low Running Cost", "Easy Maintenance", "Eco-friendly"]
    },
    "piaggio-ape-e-xs-plus": {
        name: "Piaggio Ape E-XS Plus",
        type: "three-wheeler",
        price: "₹3.15 L",
        battery: "8.0 kWh",
        range: "115 km",
        charging: "5 hrs",
        power: "6.2 kW",
        speed: "45 km/h",
        features: ["Cargo Capacity", "Low Maintenance", "Easy Maneuverability", "Eco-friendly"]
    },
    "altigreen-neo-ultra": {
        name: "Altigreen Neo Ultra",
        type: "three-wheeler",
        price: "₹3.80 L",
        battery: "9.5 kWh",
        range: "140 km",
        charging: "3 hrs",
        power: "9.0 kW",
        speed: "55 km/h",
        features: ["Fast Charging", "High Torque", "Durable Build", "Low Operating Cost"]
    },
    "euler-himoto-ultra": {
        name: "Euler HiLoad Ultra",
        type: "three-wheeler",
        price: "₹4.10 L",
        battery: "10.5 kWh",
        range: "180 km",
        charging: "4 hrs",
        power: "9.5 kW",
        speed: "60 km/h",
        features: ["Large Cargo Space", "Robust Design", "Advanced Battery", "GPS Tracking"]
    },
    "mahindra-treo-ultra": {
        name: "Mahindra Treo Ultra",
        type: "three-wheeler",
        price: "₹3.30 L",
        battery: "8.5 kWh",
        range: "160 km",
        charging: "3.5 hrs",
        power: "8.0 kW",
        speed: "45 km/h",
        features: ["Digital Cluster", "Mobile App", "Regenerative Braking", "Low Noise"]
    },
    "kinetic-green-safar-ultra": {
        name: "Kinetic Green Safar Ultra",
        type: "three-wheeler",
        price: "₹3.10 L",
        battery: "8.0 kWh",
        range: "140 km",
        charging: "4 hrs",
        power: "6.8 kW",
        speed: "50 km/h",
        features: ["Spacious Cabin", "Low Running Cost", "Easy Maintenance", "Eco-friendly"]
    },

    // Four Wheelers (20+)
    "tata-nexon": {
        name: "Tata Nexon EV",
        type: "four-wheeler",
        price: "₹14.50 L",
        battery: "30.2 kWh",
        range: "312 km",
        charging: "60 min",
        power: "129 PS",
        speed: "120 km/h",
        features: ["Ziptron Tech", "Sunroof", "Auto Climate", "Harman Audio"]
    },
    "mg-zs-ev": {
        name: "MG ZS EV",
        type: "four-wheeler",
        price: "₹21.00 L",
        battery: "50.3 kWh",
        range: "419 km",
        charging: "50 min",
        power: "176 PS",
        speed: "140 km/h",
        features: ["Panoramic Roof", "Connected Car", "PM 2.5 Filter", "Regen Braking"]
    },
    "hyundai-kona": {
        name: "Hyundai Kona Electric",
        type: "four-wheeler",
        price: "₹23.00 L",
        battery: "39.2 kWh",
        range: "452 km",
        charging: "57 min",
        power: "136 PS",
        speed: "155 km/h",
        features: ["BlueLink Connectivity", "Wireless Charging", "Ventilated Seats", "Sunroof"]
    },
    "tata-tigor": {
        name: "Tata Tigor EV",
        type: "four-wheeler",
        price: "₹12.00 L",
        battery: "26 kWh",
        range: "306 km",
        charging: "65 min",
        power: "75 PS",
        speed: "120 km/h",
        features: ["Ziptron Tech", "Spacious Interior", "Auto Climate", "Touchscreen"]
    },
    "mahindra-xuv400": {
        name: "Mahindra XUV400",
        type: "four-wheeler",
        price: "₹16.00 L",
        battery: "39.4 kWh",
        range: "456 km",
        charging: "50 min",
        power: "150 PS",
        speed: "150 km/h",
        features: ["AdrenoX Connected Car", "Sunroof", "Auto Headlamps", "Leatherette Seats"]
    },
    "citroen-e-c3": {
        name: "Citroen e-C3",
        type: "four-wheeler",
        price: "₹11.50 L",
        battery: "29.2 kWh",
        range: "320 km",
        charging: "60 min",
        power: "110 PS",
        speed: "130 km/h",
        features: ["Modern Design", "Spacious Cabin", "10-inch Touchscreen", "Connected Tech"]
    },
    "tata-punch": {
        name: "Tata Punch EV",
        type: "four-wheeler",
        price: "₹13.00 L",
        battery: "28.5 kWh",
        range: "340 km",
        charging: "60 min",
        power: "120 PS",
        speed: "125 km/h",
        features: ["Ziptron Tech", "Compact SUV", "Auto Climate", "Touchscreen"]
    },
    "mahindra-e20": {
        name: "Mahindra e20",
        type: "four-wheeler",
        price: "₹8.50 L",
        battery: "15.0 kWh",
        range: "140 km",
        charging: "90 min",
        power: "41 PS",
        speed: "85 km/h",
        features: ["Compact Design", "Easy Parking", "Low Running Cost", "Eco-friendly"]
    },
    "hyundai-ioniq5": {
        name: "Hyundai Ioniq 5",
        type: "four-wheeler",
        price: "₹45.00 L",
        battery: "72.6 kWh",
        range: "631 km",
        charging: "18 min",
        power: "217 PS",
        speed: "185 km/h",
        features: ["Ultra-fast Charging", "Futuristic Design", "Spacious Interior", "Advanced Tech"]
    },
    "kia-ev6": {
        name: "Kia EV6",
        type: "four-wheeler",
        price: "₹60.00 L",
        battery: "77.4 kWh",
        range: "708 km",
        charging: "18 min",
        power: "229 PS",
        speed: "190 km/h",
        features: ["Ultra-fast Charging", "Sporty Design", "Spacious Interior", "Advanced Tech"]
    },
    "tata-curvv": {
        name: "Tata Curvv EV",
        type: "four-wheeler",
        price: "₹18.00 L",
        battery: "40.0 kWh",
        range: "400 km",
        charging: "60 min",
        power: "140 PS",
        speed: "150 km/h",
        features: ["Coupe SUV", "Ziptron Tech", "Sunroof", "Auto Climate"]
    },
    "mahindra-born": {
        name: "Mahindra Born EV",
        type: "four-wheeler",
        price: "₹20.00 L",
        battery: "45.0 kWh",
        range: "420 km",
        charging: "50 min",
        power: "160 PS",
        speed: "155 km/h",
        features: ["Modern Design", "Spacious Interior", "Sunroof", "Auto Climate"]
    },
    "mg-air": {
        name: "MG Air EV",
        type: "four-wheeler",
        price: "₹25.00 L",
        battery: "50.0 kWh",
        range: "450 km",
        charging: "40 min",
        power: "170 PS",
        speed: "160 km/h",
        features: ["Compact SUV", "Panoramic Roof", "Connected Car", "PM 2.5 Filter"]
    },
    "hyundai-casper": {
        name: "Hyundai Casper EV",
        type: "four-wheeler",
        price: "₹10.00 L",
        battery: "25.0 kWh",
        range: "300 km",
        charging: "60 min",
        power: "100 PS",
        speed: "120 km/h",
        features: ["Compact Design", "Easy Parking", "Low Running Cost", "Eco-friendly"]
    },
    "tata-altroz": {
        name: "Tata Altroz EV",
        type: "four-wheeler",
        price: "₹14.00 L",
        battery: "30.0 kWh",
        range: "350 km",
        charging: "60 min",
        power: "130 PS",
        speed: "140 km/h",
        features: ["Premium Hatchback", "Ziptron Tech", "Sunroof", "Auto Climate"]
    },
    "mahindra-kuv": {
        name: "Mahindra KUV EV",
        type: "four-wheeler",
        price: "₹12.00 L",
        battery: "28.0 kWh",
        range: "320 km",
        charging: "60 min",
        power: "120 PS",
        speed: "130 km/h",
        features: ["Compact SUV", "Spacious Interior", "Sunroof", "Auto Climate"]
    },
    "mg-4": {
        name: "MG 4 EV",
        type: "four-wheeler",
        price: "₹22.00 L",
        battery: "45.0 kWh",
        range: "400 km",
        charging: "40 min",
        power: "150 PS",
        speed: "150 km/h",
        features: ["Compact Hatchback", "Panoramic Roof", "Connected Car", "PM 2.5 Filter"]
    },
    "hyundai-venue": {
        name: "Hyundai Venue EV",
        type: "four-wheeler",
        price: "₹15.00 L",
        battery: "35.0 kWh",
        range: "380 km",
        charging: "60 min",
        power: "140 PS",
        speed: "145 km/h",
        features: ["Compact SUV", "BlueLink Connectivity", "Sunroof", "Auto Climate"]
    },
    "tata-safari": {
        name: "Tata Safari EV",
        type: "four-wheeler",
        price: "₹25.00 L",
        battery: "50.0 kWh",
        range: "450 km",
        charging: "60 min",
        power: "180 PS",
        speed: "160 km/h",
        features: ["Premium SUV", "Ziptron Tech", "Sunroof", "Auto Climate"]
    },
    "mahindra-scorpio": {
        name: "Mahindra Scorpio EV",
        type: "four-wheeler",
        price: "₹28.00 L",
        battery: "55.0 kWh",
        range: "480 km",
        charging: "50 min",
        power: "200 PS",
        speed: "170 km/h",
        features: ["Premium SUV", "Spacious Interior", "Sunroof", "Auto Climate"]
    },
    "mg-hector": {
        name: "MG Hector EV",
        type: "four-wheeler",
        price: "₹30.00 L",
        battery: "60.0 kWh",
        range: "500 km",
        charging: "40 min",
        power: "220 PS",
        speed: "180 km/h",
        features: ["Premium SUV", "Panoramic Roof", "Connected Car", "PM 2.5 Filter"]
    },
    "hyundai-creta": {
        name: "Hyundai Creta EV",
        type: "four-wheeler",
        price: "₹20.00 L",
        battery: "45.0 kWh",
        range: "420 km",
        charging: "60 min",
        power: "160 PS",
        speed: "155 km/h",
        features: ["Compact SUV", "BlueLink Connectivity", "Sunroof", "Auto Climate"]
    },
    "tata-harrier": {
        name: "Tata Harrier EV",
        type: "four-wheeler",
        price: "₹27.00 L",
        battery: "55.0 kWh",
        range: "470 km",
        charging: "60 min",
        power: "190 PS",
        speed: "165 km/h",
        features: ["Premium SUV", "Ziptron Tech", "Sunroof", "Auto Climate"]
    },
    "mahindra-xuv700": {
        name: "Mahindra XUV700 EV",
        type: "four-wheeler",
        price: "₹32.00 L",
        battery: "65.0 kWh",
        range: "520 km",
        charging: "50 min",
        power: "230 PS",
        speed: "180 km/h",
        features: ["Premium SUV", "Spacious Interior", "Sunroof", "Auto Climate"]
    }
};

// API Integration for loading vehicle data
async function loadVehicleDataFromAPI() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.style.display = 'block';

    try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real implementation, you would fetch from an actual API
        // const response = await fetch('https://api.evcomparison.com/vehicles');
        // const apiData = await response.json();

        // For now, we'll use our local vehicleData
        console.log('Vehicle data loaded successfully');

        // Initialize the vehicle selects
        filterVehicles('vehicle1-select', 'all');
        filterVehicles('vehicle2-select', 'all');

        // Set default values
        document.getElementById('vehicle1-select').value = 'simple-one';
        document.getElementById('vehicle2-select').value = 'revolt-rv400';

    } catch (error) {
        console.error('Error loading vehicle data:', error);
        alert('Error loading vehicle data. Using local data instead.');
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

// Compare button functionality
document.getElementById('compareButton').addEventListener('click', function() {
    const vehicle1Select = document.getElementById('vehicle1-select');
    const vehicle2Select = document.getElementById('vehicle2-select');
    
    const vehicle1Value = vehicle1Select.value;
    const vehicle2Value = vehicle2Select.value;
    
    if (!vehicle1Value || !vehicle2Value) {
        alert('Please select both vehicles to compare.');
        return;
    }
    
    if (vehicle1Value === vehicle2Value) {
        alert('Please select two different vehicles to compare.');
        return;
    }
    
    // Get vehicle data
    const vehicle1Data = vehicleData[vehicle1Value];
    const vehicle2Data = vehicleData[vehicle2Value];
    
    // Generate comparison HTML
    const comparisonHTML = `
        <div class="comparison-header">
            <h2>Comparison Results</h2>
            <p>Detailed comparison between your selected vehicles</p>
        </div>
        
        <div class="vehicle-cards">
            <div class="vehicle-card">
                <h3>${vehicle1Data.name}</h3>
                <p class="type">${vehicle1Data.type.replace('-', ' ')}</p>
                <p class="price">${vehicle1Data.price}</p>
                <p class="battery">Battery ${vehicle1Data.battery}</p>
            </div>
            
            <div class="vehicle-card">
                <h3>${vehicle2Data.name}</h3>
                <p class="type">${vehicle2Data.type.replace('-', ' ')}</p>
                <p class="price">${vehicle2Data.price}</p>
                <p class="battery">Battery ${vehicle2Data.battery}</p>
            </div>
        </div>
        
        <div class="detailed-comparison">
            <h3>Detailed Comparison</h3>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>${vehicle1Data.name}</th>
                        <th>${vehicle2Data.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>${vehicle1Data.price}</td>
                        <td>${vehicle2Data.price}</td>
                    </tr>
                    <tr>
                        <td>Range</td>
                        <td>${vehicle1Data.range}</td>
                        <td>${vehicle2Data.range}</td>
                    </tr>
                    <tr>
                        <td>Charging Time</td>
                        <td>${vehicle1Data.charging}</td>
                        <td>${vehicle2Data.charging}</td>
                    </tr>
                    <tr>
                        <td>Motor Power</td>
                        <td>${vehicle1Data.power}</td>
                        <td>${vehicle2Data.power}</td>
                    </tr>
                    <tr>
                        <td>Top Speed</td>
                        <td>${vehicle1Data.speed}</td>
                        <td>${vehicle2Data.speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="features-section">
            <div class="features-card">
                <h4>Features - ${vehicle1Data.name}</h4>
                <div class="features-grid">
                    ${vehicle1Data.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                </div>
            </div>
            
            <div class="features-card">
                <h4>Features - ${vehicle2Data.name}</h4>
                <div class="features-grid">
                    ${vehicle2Data.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="summary">
            ${generateSummary(vehicle1Data, vehicle2Data)}
        </div>
    `;
    
    // Update comparison section
    document.getElementById('comparisonResults').innerHTML = comparisonHTML;
    document.getElementById('comparisonResults').classList.add('active');
    
    // Scroll to comparison section
    document.getElementById('comparisonResults').scrollIntoView({ behavior: 'smooth' });
});

function generateSummary(vehicle1, vehicle2) {
    const price1 = parseFloat(vehicle1.price.replace(/[^0-9.]/g, ''));
    const price2 = parseFloat(vehicle2.price.replace(/[^0-9.]/g, ''));
    const range1 = parseInt(vehicle1.range);
    const range2 = parseInt(vehicle2.range);
    
    let cheaperVehicle, expensiveVehicle;
    let higherRangeVehicle, lowerRangeVehicle;
    
    if (price1 < price2) {
        cheaperVehicle = vehicle1;
        expensiveVehicle = vehicle2;
    } else {
        cheaperVehicle = vehicle2;
        expensiveVehicle = vehicle1;
    }
    
    if (range1 > range2) {
        higherRangeVehicle = vehicle1;
        lowerRangeVehicle = vehicle2;
    } else {
        higherRangeVehicle = vehicle2;
        lowerRangeVehicle = vehicle1;
    }
    
    const priceDifference = Math.abs(price1 - price2);
    const rangeDifference = Math.abs(range1 - range2);
    
    return `
        <p><span>${cheaperVehicle.name.split(' ')[0]}</span> is cheaper by <span class="highlight">₹${(priceDifference * 100000).toLocaleString('en-IN')}</span></p>
        <p><span>${higherRangeVehicle.name.split(' ')[0]}</span> has <span class="highlight">${rangeDifference} km</span> more range</p>
    `;
}

// Category filter functionality
document.getElementById('category1').addEventListener('change', function() {
    filterVehicles('vehicle1-select', this.value);
});

document.getElementById('category2').addEventListener('change', function() {
    filterVehicles('vehicle2-select', this.value);
});

function filterVehicles(selectId, category) {
    const select = document.getElementById(selectId);
    const currentValue = select.value;
    
    // Clear existing options except the first one
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Add filtered vehicles
    for (const [id, vehicle] of Object.entries(vehicleData)) {
        if (category === 'all' || vehicle.type === category) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = vehicle.name;
            select.appendChild(option);
        }
    }
    
    // Try to restore previous selection if it's still available
    if (vehicleData[currentValue] && (category === 'all' || vehicleData[currentValue].type === category)) {
        select.value = currentValue;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadVehicleDataFromAPI();
});
