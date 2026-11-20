export const companyInfo = {
  name: "JOHN CLEAN TECH",
  tagline: "Pure Water Begins with a Clean Tank.",
  motto: "Pure Water. Pure Living.",
  serviceSubheading: "PROFESSIONAL WATER TANK CLEANING SERVICES",
  location: "Coimbatore, Tamil Nadu",
  phones: [
    { display: "9944943484", raw: "9944943484", primary: true },
    { display: "9489529584", raw: "9489529584", primary: false },
  ],
  whatsapp: "919944943484",
  instagram: "https://www.instagram.com/john_cleantech?mdxt=d2ExZGxranh2cHc2",
  instagramHandle: "@john_cleantech",
  email: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_RESEND_TO_EMAIL) || "johncleantechh@gmail.com",
  workingHours: "Monday - Sunday: 7:00 AM - 8:30 PM",
  serviceAreas: [
    "Gandhipuram", "RS Puram", "Peelamedu", "Saravanampatti", "Saibaba Colony",
    "Singanallur", "Ganapathy", "Vadavalli", "Kovaipudur", "Ramanathapuram",
    "Sundarapuram", "Thudiyalur", "Hopes College", "Ondipudur", "Kuniyamuthur"
  ]
};

export const services = [
  {
    id: "overhead",
    title: "OVERHEAD WATER TANK CLEANING",
    shortTitle: "Overhead Tank",
    category: "Overhead",
    description: "Specialized high-pressure mechanized cleaning for rooftop Sintex, PVC, and concrete overhead tanks with deep sediment flushing and UV sterilization.",
    highlights: ["Rotary Jet Dirt Wash", "Algae & Biofilm Removal", "UV Radiation Sterilization", "Safe for Drinking Water Lines"],
    idealFor: "Villas, Independent Houses, Commercial Rooftops",
    badge: "Most Requested",
    icon: "Building2"
  },
  {
    id: "residential",
    title: "RESIDENTIAL WATER TANK CLEANING",
    shortTitle: "Residential",
    category: "Residential",
    description: "Complete water tank hygiene for independent houses and duplexes. We eliminate hazardous bacteria, pipe rust, and borewell sediment to safeguard family health.",
    highlights: ["Food-Grade Sanitizers", "Zero Chemical Odor", "Quick 60-90 Min Service", "Potable Water Safe"],
    idealFor: "Individual Homes, Villas, Row Houses",
    badge: "Family Health",
    icon: "Home"
  },
  {
    id: "commercial",
    title: "COMMERCIAL WATER TANK CLEANING",
    shortTitle: "Commercial",
    category: "Commercial",
    description: "Heavy-duty scheduled tank sanitization for hospitals, hotels, software parks, schools, textile mills, and industrial facilities in Coimbatore.",
    highlights: ["Compliance Certificates", "Zero Downtime Scheduling", "Industrial Sludge Vacuums", "Pump & Strainer Clean"],
    idealFor: "Offices, Hotels, Hospitals, Factories",
    badge: "Corporate Standards",
    icon: "Briefcase"
  },
  {
    id: "apartment",
    title: "APARTMENT WATER TANK CLEANING",
    shortTitle: "Apartment Societies",
    category: "Apartments",
    description: "Comprehensive end-to-end cleaning for gated communities and multi-story apartment complexes handling both master underground sumps and overhead tanks.",
    highlights: ["Multi-Tank Volume Capacity", "Association Reports", "Minimum Water Wastage", "Trained Uniformed Crew"],
    idealFor: "Gated Communities & Multi-Storey Flats",
    badge: "High Volume",
    icon: "Building"
  },
  {
    id: "underground",
    title: "UNDERGROUND WATER TANK CLEANING",
    shortTitle: "Underground Sump",
    category: "Underground",
    description: "Advanced submerged vacuum de-sludging and deep scrubbing for underground water sumps, effectively clearing heavy mud, silt, and anaerobic sludge buildup.",
    highlights: ["High-Volume Slurry Pumps", "Submerged Jet Flushing", "Mosquito Larva Elimination", "Wall Anti-Fungal Treatment"],
    idealFor: "Ground Level & Basement Sumps",
    badge: "Deep Extraction",
    icon: "Layers"
  }
];

export const beforeAfterCases = [
  {
    id: "residential-case",
    title: "RESIDENTIAL CLEANING",
    subtitle: "Independent Villa Water Tank in RS Puram, Coimbatore",
    category: "Residential",
    tankType: "1,500L Residential Storage Tank",
    beforeProblem: "Severe yellow borewell sediment crust, thick black fungal biofilm scaling, and murky unhygienic water output.",
    afterResult: "100% spotless white plastic interior, complete silt extraction, food-grade antibacterial treated, pure safe drinking water.",
    beforeMetrics: "Severe Yellow Sludge & Black Algae",
    afterMetrics: "Spotless White Tank Finish • Potable Safe",
    timeTaken: "60 Minutes (Mechanized)",
    imageTheme: "residential",
    beforeImage: "/images/residential-before.jpg",
    afterImage: "/images/residential-after.jpg",
    locationStamp: "RS Puram, Coimbatore, Tamil Nadu"
  },
  {
    id: "overhead-case",
    title: "OVERHEAD TANK CLEANING",
    subtitle: "Rooftop Sintex & Plastic Water Tank in Thudiyalur, Coimbatore",
    category: "Overhead",
    tankType: "1,000L Rooftop Sintex Tank",
    beforeProblem: "Concentric ring-pattern borewell mud sediment, yellow algal discoloration, and settled rust silt at the tank bottom.",
    afterResult: "100% spotless white plastic interior, complete silt extraction, food-grade antibacterial treated and UV disinfected.",
    beforeMetrics: "Borewell Mud Rings & Silt Layer",
    afterMetrics: "Spotless White Tank Finish • 100% Sterile",
    timeTaken: "40 Minutes (Mechanized)",
    imageTheme: "overhead",
    beforeImage: "/images/overhead-before.jpg",
    afterImage: "/images/overhead-after.jpg",
    locationStamp: "Thudiyalur, Coimbatore, Tamil Nadu"
  },
  {
    id: "commercial-case",
    title: "COMMERCIAL CLEANING",
    subtitle: "High-Capacity Storage Tank in Coimbatore, Tamil Nadu",
    category: "Commercial",
    tankType: "Commercial Overhead & Sump Storage Tank",
    beforeProblem: "Severe heavy brown sludge, accumulated borewell silt sediment at the tank bottom, and dark black fungal grime coating the inner walls.",
    afterResult: "100% spotless, sparkling sky-blue interior, complete sediment evacuation, food-grade antibacterial treated and sanitized.",
    beforeMetrics: "Heavy Silt Sediment & Wall Grime",
    afterMetrics: "Spotless Blue Finish • 100% Sanitized",
    timeTaken: "20 Minutes (Mechanized)",
    imageTheme: "commercial",
    beforeImage: "/images/commercial-before.jpg",
    afterImage: "/images/commercial-after.jpg",
    locationStamp: "Coimbatore, Tamil Nadu"
  },
  {
    id: "underground-case",
    title: "UNDERGROUND TANK CLEANING",
    subtitle: "Concrete & Masonry Sump in Coimbatore, Tamil Nadu",
    category: "Underground",
    tankType: "6,000L Underground Concrete Sump",
    beforeProblem: "Dark brown muddy water, thick anaerobic sediment settlement at the sump bed, and murky contaminated standing water.",
    afterResult: "Completely dewatered and dry vacuumed, spotless deep-scrubbed concrete floor and walls, sanitized and food-grade treated.",
    beforeMetrics: "Muddy Brown Standing Silt & Sludge",
    afterMetrics: "Spotless Clean Concrete Bed • Odor-Free",
    timeTaken: "2 Hours (High-Pressure Mechanized)",
    imageTheme: "underground",
    beforeImage: "/images/underground-before.jpg",
    afterImage: "/images/underground-after.jpg",
    locationStamp: "Coimbatore, Tamil Nadu"
  }
];

export const cleaningSteps = [
  {
    step: "01",
    title: "Mechanized Dewatering",
    description: "We use high-power submersible dewatering pumps to safely empty leftover contaminated water and surface scum without flooding surrounding areas.",
    icon: "Droplets"
  },
  {
    step: "02",
    title: "Sludge & Sediment Removal",
    description: "Heavy-duty industrial vacuum pumps extract years of thick mud, silt, decayed rust, and settled organic debris from the bottom corners.",
    icon: "Trash2"
  },
  {
    step: "03",
    title: "High Pressure Rotary Scrubbing",
    description: "150-bar German jet sprayers together with rotary mechanical brushes strip away tenacious green algae, calcium scaling, and biofilm without damaging walls.",
    icon: "Gauge"
  },
  {
    step: "04",
    title: "Vacuum Slurry Extraction",
    description: "All loosened scale particles, dirt emulsion, and wash water are completely vacuumed out, leaving the tank floor completely spotless and dry.",
    icon: "Wind"
  },
  {
    step: "05",
    title: "Antibacterial & UV Disinfection",
    description: "Tanks are treated with eco-friendly food-grade sanitizing agents followed by UV germicidal radiation to neutralize 99.9% of bacteria, viruses & spores.",
    icon: "ShieldCheck"
  },
  {
    step: "06",
    title: "Purity Check & Seal",
    description: "Inspection of inlet/outlet foot valves and pump strainers, followed by proper mosquito-mesh sealing to keep your pure water protected.",
    icon: "CheckCircle2"
  }
];

export const testimonials = [
  {
    name: "Dr. K. Sundararajan",
    area: "RS Puram, Coimbatore",
    comment: "John Clean Tech transformed our 20-year-old underground sump and overhead tank. The difference was unbelievable! The water is now sparkling clear and smells fresh. Prompt and very courteous team.",
    rating: 5,
    service: "Residential Sump & Overhead"
  },
  {
    name: "S. Balachandran (Secretary)",
    area: "Greenfield Apts, Peelamedu",
    comment: "We booked them for our 32-flat apartment complex with two 15,000L sumps. Their high-pressure jet equipment and vacuum cleaners did the job in half a day with zero hassle to residents. Top notch service!",
    rating: 5,
    service: "Apartment Water Tank Cleaning"
  },
  {
    name: "Priya Vellingiri",
    area: "Saravanampatti, Coimbatore",
    comment: "Called 9944943484 in the morning due to dirty tap water, and their team arrived by 1:30 PM. Honest pricing, mechanized machines, and polite staff. Pure Water Begins with a Clean Tank indeed!",
    rating: 5,
    service: "Overhead Tank Cleaning"
  },
  {
    name: "R. Mohanraj (Plant Admin)",
    area: "Singanallur Industrial Area",
    comment: "Commercial water tank cleaning done with utmost precision for our textile facility. Very methodical 6-step process and eco-friendly chemicals. We have signed up for their bi-annual maintenance contract.",
    rating: 5,
    service: "Commercial Water Tank"
  }
];

export const faqs = [
  {
    q: "How often should water tanks and sumps be cleaned in Coimbatore?",
    a: "Health authorities and WHO recommend cleaning water tanks at least once every 6 months. Due to hard water and borewell sediment common in Coimbatore (RS Puram, Peelamedu, Saravanampatti), biannual mechanized cleaning prevents dangerous bacteria, dengue mosquito breeding, and clogged plumbing."
  },
  {
    q: "How long does the water tank cleaning process take?",
    a: "A typical 1,000L to 2,000L residential overhead tank takes approximately 60 to 90 minutes. Large underground sumps (5,000L - 15,000L) take about 2 to 3.5 hours using our high-speed mechanized dewatering and vacuum sludge extraction machines."
  },
  {
    q: "Do you use harsh chemical bleaches that leave a bad smell?",
    a: "Never! At John Clean Tech, we use 100% certified food-grade, eco-friendly sanitizing solutions combined with high-pressure water jets and UV disinfection. There is zero toxic residue, no strong chlorine stench, and the water is completely safe for bathing and cooking right after refilling."
  },
  {
    q: "Do you clean both Overhead Tanks and Underground Sumps?",
    a: "Yes! We specialize in all types: Overhead Sintex/PVC plastic tanks, rooftop RCC concrete tanks, underground sumps, apartment master tanks, and commercial industrial storage tanks across Coimbatore."
  },
  {
    q: "What are your service charges in Coimbatore?",
    a: "Our rates are highly affordable and transparent based on tank capacity (e.g. 500L, 1000L, 2000L, 5000L+). We provide free instant estimates via our online calculator or on phone call (9944943484 / 9489529584) with no hidden travel fees across Coimbatore."
  },
  {
    q: "Which areas in Coimbatore do you cover?",
    a: "We serve the entire Coimbatore district including Gandhipuram, RS Puram, Peelamedu, Saravanampatti, Saibaba Colony, Singanallur, Ganapathy, Vadavalli, Kovaipudur, Ramanathapuram, Sundarapuram, Thudiyalur, Ondipudur, and surrounding suburban areas."
  }
];
