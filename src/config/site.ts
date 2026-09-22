import { ServiceItem, ProjectItem, TestimonialItem, GalleryMediaItem } from "@/types";

export const siteConfig = {
  business_name: "Creative Events & Wedding Planners",
  short_name: "Creative Events",
  tagline: "Every dreams begins with a wish",
  category: "Wedding and Event Planner and Decorations",
  description:
    "Creative Events & Wedding Planners is a professional event planning and decoration company based in Kanjirappilly, Kottayam, specializing in beautiful weddings, receptions, engagements, and special celebrations. We transform ideas and dreams into memorable experiences through creative concepts, elegant decorations, and carefully planned event execution.",
  target_audience:
    "Couples, families, and organizations looking for professional wedding planning, event decoration, stage design, and complete event management services across Kanjirappilly, Kottayam, and nearby areas.",
  unique_value_proposition:
    "We bring creativity, personalized planning, and elegant event styling together to create celebrations that reflect each client's unique dream, personality, and vision.",
  years_of_experience: "10+",
  stats: [
    { label: "Years of Experience", value: "10+", numeric: 10, suffix: "+" },
    { label: "Events Celebrated", value: "650+", numeric: 650, suffix: "+" },
    { label: "Happy Families", value: "1200+", numeric: 1200, suffix: "+" },
    { label: "Client Satisfaction", value: "99%", numeric: 99, suffix: "%" },
  ],
  location: {
    address: "Creative Events & Wedding Planners",
    city: "Kanjirappilly",
    district: "Kottayam",
    state_country: "Kerala, India",
    google_maps_embed_url:
      "https://www.google.com/maps?q=Kanjirappilly,+Kottayam,+Kerala&output=embed",
  },
  contact: {
    phones: [
      "+91 99619 03826",
      "+91 97471 77132",
      "+91 77366 85828",
      "+91 81119 62360",
    ],
    phone: "+91 99619 03826",
    altPhone: "+91 97471 77132",
    whatsapp: "+91 99619 03826",
    email: "creativeeventsandweddingplanners@gmail.com",
    business_hours: "Mon–Sat: 9:00 AM – 6:00 PM, Sun: By Appointment",
  },
  social_links: {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
    whatsapp: "https://wa.me/919961903826?text=Hello%20Creative%20Events,%20I%20would%20like%20to%20inquire%20about%20event%20planning%20and%20decorations.",
  },
  theme: "dark",
  brand_colors: {
    primary: "#C9A24D",
    secondary: "#0B1220",
    accent: "#7C5CFF",
    goldDark: "#9A782D",
    accentHover: "#9575FF",
  },
  primary_cta: "Request a Quote",
  secondary_cta: "View Our Work",
  domain: "https://www.creativeeventsandweddingplanners.in",
  seo_keywords: [
    "wedding planners in Kanjirappilly",
    "wedding decorators in Kottayam",
    "event planners Kanjirappilly",
    "wedding decoration Kottayam",
    "wedding planners Kottayam",
    "event management Kanjirappilly",
    "wedding stage decoration Kerala",
    "Creative Events Wedding Planners",
    "engagement decor Kanjirappilly",
    "mandap decoration Kottayam",
    "stage decoration Ponkunnam",
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-planning",
    slug: "wedding-planning",
    name: "Wedding Planning",
    summary: "Complete wedding planning tailored to your vision, style, and budget.",
    pricing: "Request Quote",
    fullDescription:
      "Our full-service wedding planning is designed to give you complete peace of mind. From the initial concept blueprint and venue matchmaking to day-of coordination and vendor management, we make sure every second of your wedding flows effortlessly and beautifully.",
    features: [
      "Full Wedding Planning & Concept Designing",
      "Vendor Coordination (Catering, Photo, Sound & Makeup)",
      "Event Day Management & Run-of-Show Itinerary",
      "Budget Optimization & Milestone Scheduling",
      "Guest Hospitality & Seating Coordination",
    ],
    benefits: [
      "Completely stress-free experience for the couple and families",
      "Trusted local vendor network across Kottayam and Central Kerala",
      "Personalized touch that mirrors your cultural heritage and modern taste",
    ],
    processSteps: [
      { title: "Dream Consultation", desc: "Understanding your story, preferences, traditions, and budget framework." },
      { title: "Theme & Vendor Locking", desc: "Developing bespoke mood boards and booking verified elite service providers." },
      { title: "Itinerary Coordination", desc: "Detailed schedule synchronization for rituals, catering, and entertainment." },
      { title: "Seamless Execution", desc: "Our on-ground team orchestrates every detail on your special day." },
    ],
    faqs: [
      {
        question: "How far in advance should we book Creative Events?",
        answer: "We recommend reserving your wedding date 2 to 6 months in advance, especially for popular wedding dates in Kerala.",
      },
      {
        question: "Do you coordinate events outside Kanjirappilly?",
        answer: "Yes, we handle weddings and events throughout Kanjirappilly, Kottayam, Pala, Ponkunnam, Mundakayam, Kumarakom, and neighboring districts.",
      },
    ],
    image: "/assets/Hero-section-desktop-screen.png",
    badge: "Full Service",
  },
  {
    id: "wedding-decorations",
    slug: "wedding-decorations",
    name: "Wedding Decorations",
    summary: "Elegant and personalized wedding decorations designed to create unforgettable venues.",
    pricing: "Request Quote",
    fullDescription:
      "Transforming ordinary venues into breathtaking celebration spaces. We create signature stage designs, grand floral backdrops, romantic aisle walkways, and customized ambient lighting tailored specifically for your love story.",
    features: [
      "Stage & Backdrop Decoration",
      "Floral Arrangements (Fresh & Exotic Silk)",
      "Venue Styling & Table Landscapes",
      "Couple Seating & Royal Furniture Setup",
      "Grand Entrance Gate & Aisle Treatment",
    ],
    benefits: [
      "Stunning photographic backgrounds for lifelong wedding albums",
      "Custom themes matched precisely to your wedding attire",
      "Premium quality blooms and immaculate structural finishes",
    ],
    processSteps: [
      { title: "Venue Inspection", desc: "Evaluating hall dimensions, ceiling height, and lighting parameters." },
      { title: "3D Stage Conceptualization", desc: "Presenting thematic design options tailored to your wedding style." },
      { title: "Precision Assembly", desc: "Overnight craftsmanship ensuring pristine freshness before guests arrive." },
    ],
    faqs: [
      {
        question: "Can you recreate a stage design from a reference picture?",
        answer: "Yes, we specialize in customized stage decor. You can share your inspiration photos and we will elevate it for your venue.",
      },
    ],
    image: "/assets/Image-30427.jpg",
    badge: "Signature Craft",
  },
  {
    id: "engagement-reception",
    slug: "engagement-reception",
    name: "Engagement & Reception",
    summary: "Beautiful and sophisticated setups for engagements, receptions, and pre-wedding events.",
    pricing: "Starting at ₹15,000",
    fullDescription:
      "Celebrate your betrothal and evening reception in high elegance. We craft intimate floral rings, fairy-lit backdrops, personalized couple monograms, and evening ambient lighting that set the perfect mood for celebration.",
    features: [
      "Theme-Based Decoration",
      "Stage Design & Floral Ring Backdrops",
      "Entrance Decoration & Welcome Easels",
      "LED Neon Signboards & Monograms",
      "Warm Ambient Lighting & Fairy Light Canopies",
    ],
    benefits: [
      "Cozy yet luxurious ambiance for high-emotion celebrations",
      "Tailored for both daytime ring ceremonies and evening receptions",
      "Budget-friendly packages starting from ₹15,000",
    ],
    processSteps: [
      { title: "Theme Discovery", desc: "Selecting pastel palettes, rustic boho, or royal gold themes." },
      { title: "Custom Signage & Arch Fabrication", desc: "Preparing bespoke initials, hashtags, and ring arches." },
      { title: "Day-of Setup", desc: "Setting up crisp backdrops and ambient lights ahead of time." },
    ],
    faqs: [
      {
        question: "What is included in the Engagement package?",
        answer: "Packages typically include stage backdrop, floral styling, couple seating, welcome board, and ambient lighting with options to customize.",
      },
    ],
    image: "/assets/Image-84520.jpg",
    badge: "Starting ₹15,000",
  },
  {
    id: "stage-mandap-decoration",
    slug: "stage-mandap-decoration",
    name: "Stage & Mandap Decoration",
    summary: "Traditional and contemporary stage concepts crafted around your celebration.",
    pricing: "Starting at ₹25,000",
    fullDescription:
      "From traditional South Indian Mandapams adorned with brass lamps and fresh marigolds to contemporary geometric architectural stages with crystal chandeliers, we build master stages that command attention.",
    features: [
      "Custom Stage Design (Traditional & Contemporary)",
      "Mandap Decoration with Traditional Elements",
      "Lighting & Floral Styling Integration",
      "Pillar Drapes, Temple Bells & Floral Garlands",
      "VIP Seating & Elevated Floor Platforms",
    ],
    benefits: [
      "Authentic cultural styling merged with modern design precision",
      "High-durability structures built safely for grand ceremonies",
      "Complete package solutions starting from ₹25,000",
    ],
    processSteps: [
      { title: "Style Selection", desc: "Choosing between classical Kerala, Vedic Mandapam, or Modern Floral Pavilion." },
      { title: "Structural Crafting", desc: "Building reinforced frames and curated drapery." },
      { title: "Ceremony Integration", desc: "Arranging sacred zones with fire-safe brass elements and fresh blossoms." },
    ],
    faqs: [
      {
        question: "Do you handle both church stages and traditional Hindu Mandapams?",
        answer: "Yes, our team has extensive experience styling Christian altar nuptial stages, Hindu wedding Mandapams, and Muslim Nikah stages.",
      },
    ],
    image: "/assets/Image-86413.jpg",
    badge: "Starting ₹25,000",
  },
  {
    id: "birthday-private-events",
    slug: "birthday-private-events",
    name: "Birthday & Private Events",
    summary: "Creative decorations for birthdays, anniversaries, family functions, and private celebrations.",
    pricing: "Starting at ₹8,000",
    fullDescription:
      "Make personal milestones extraordinary. We design joyful themed birthdays, anniversary celebrations, baby showers, housewarmings, and private parties with customized balloon art, thematic props, and photo corners.",
    features: [
      "Theme Decorations (Kids, Princess, Safari, Vintage)",
      "Balloon & Floral Styling with Organic Arches",
      "Photo Backdrops & 3D Number Props",
      "Cake Table Styling & Treat Displays",
      "Welcome Boards & Party Accessories",
    ],
    benefits: [
      "Vibrant, Instagram-worthy setups that guests love",
      "Quick and clean setup and dismantling at homes, halls, or outdoor lawns",
      "Affordable packages starting from ₹8,000",
    ],
    processSteps: [
      { title: "Concept Discussion", desc: "Picking your preferred cartoon, luxury, or floral theme." },
      { title: "Prop & Balloon Pre-styling", desc: "Preparing customized name banners and balloon clusters." },
      { title: "Party Delivery", desc: "Full installation ready for cake cutting and fun." },
    ],
    faqs: [
      {
        question: "Can you set up at home or outdoor lawns?",
        answer: "Yes, we frequently decorate home living rooms, backyards, rooftops, and private party banquet halls.",
      },
    ],
    image: "/assets/Image-30427.jpg",
    badge: "Starting ₹8,000",
  },
  {
    id: "corporate-special-events",
    slug: "corporate-special-events",
    name: "Corporate & Special Events",
    summary: "Professional planning and decoration for corporate gatherings and special occasions.",
    pricing: "Request Quote",
    fullDescription:
      "Deliver a powerful statement for your organization. We deliver turnkey corporate stages, conference setups, brand launches, annual general meetings, awards galas, and college festivals with punctual execution.",
    features: [
      "Stage & Venue Setup with Brand Integration",
      "Event Coordination & Delegate Management",
      "Professional Styling, Backdrops & Podium Decor",
      "Audio-Visual & Screen Synchronization",
      "Registration Counters & Media Walls",
    ],
    benefits: [
      "Punctual, seamless execution upholding your corporate reputation",
      "Crisp, elegant branding aesthetics",
      "Comprehensive vendor management under one invoice",
    ],
    processSteps: [
      { title: "Event Scope & Brand Guidelines", desc: "Understanding corporate themes, agenda, and technical needs." },
      { title: "Floor Plan & AV Engineering", desc: "Optimizing stage viewing angles, lighting, and sound coverage." },
      { title: "Live Event Production", desc: "Professional stage managers maintaining strict timelines." },
    ],
    faqs: [
      {
        question: "Do you provide LED walls and conference sound systems?",
        answer: "Yes, we provide high-definition LED displays, digital podiums, and professional sound solutions.",
      },
    ],
    image: "/assets/Image-84520.jpg",
  },
  {
    id: "floral-venue-styling",
    slug: "floral-venue-styling",
    name: "Floral & Venue Styling",
    summary: "Beautiful floral concepts and venue styling designed to complement your event theme.",
    pricing: "Request Quote",
    fullDescription:
      "Flowers bring life and romance to every celebration. Our talented florists craft mesmerizing botanical arrangements, cascading ceiling florals, bridal car decor, and entrance floral arches with fresh Dutch blooms and fragrant local botanicals.",
    features: [
      "Fresh & Artificial Flowers Crafting",
      "Hanging Floral Installations & Cascades",
      "Table & Venue Styling with Centerpieces",
      "Bridal Bouquets & Car Floral Decorations",
      "Floral Entrance Pathways & Walkways",
    ],
    benefits: [
      "Long-lasting freshness through specialized hydration techniques",
      "Rich sensory appeal and natural fragrance throughout the hall",
      "Color-coordinated with your event palette",
    ],
    processSteps: [
      { title: "Floral Palette Matching", desc: "Choosing roses, orchids, lilies, gypsophila, or traditional marigolds." },
      { title: "Direct Sourcing", desc: "Securing freshest blooms directly from top wholesale growers." },
      { title: "On-site Styling", desc: "Sculpting magnificent floral arrangements on the event day." },
    ],
    faqs: [
      {
        question: "Do you offer car decoration and bridal bouquets?",
        answer: "Yes, we create custom bridal bouquets, boutonnieres, and luxury car floral styling.",
      },
    ],
    image: "/assets/Image-86413.jpg",
  },
  {
    id: "lighting-special-effects",
    slug: "lighting-special-effects",
    name: "Lighting & Special Effects",
    summary: "Atmospheric lighting and special effects that bring your celebration to life.",
    pricing: "Request Quote",
    fullDescription:
      "Lighting creates the mood and elevates every design element. We provide architectural warm wash lighting, fairy light canopies, stage spotlights, cold pyro sparkles, and low fog effects for unforgettable couple entries.",
    features: [
      "Stage Lighting (Moving Heads, Par Cans, Warm Spotlights)",
      "Decorative Lighting (Fairy Light Curtains, Edison Bulbs, Chandeliers)",
      "Special Effects (Cold Pyro Sparkles, Low Fog Clouds, Bubble Machines)",
      "Outdoor Tree & Pathway Illumination",
      "Custom Monogram Go-Bo Projections",
    ],
    benefits: [
      "Ethereal, magical ambiance for night photography and video reels",
      "Safe, indoor-approved cold spark pyrotechnics",
      "Dynamic lighting programmed to ceremony transitions",
    ],
    processSteps: [
      { title: "Lighting Plan", desc: "Mapping electrical loads, ambiance color tones, and focal points." },
      { title: "Installation & Angle Tuning", desc: "Setting fixtures for optimum photography light balance." },
      { title: "Live Cues", desc: "Firing cold pyros and fog precisely during couple entry and cake cutting." },
    ],
    faqs: [
      {
        question: "Are cold pyros safe for indoor auditoriums?",
        answer: "Yes, our cold spark machines emit non-flammable, smoke-free sparkle fountains safe for indoor halls.",
      },
    ],
    image: "/assets/Hero-section-desktop-screen.png",
  },
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "royal-kanjirappilly-wedding",
    slug: "royal-kanjirappilly-wedding",
    title: "Grand Gold & Floral Nuptials",
    category: "Weddings",
    client: "Jerin & Annu",
    location: "Kanjirappilly, Kottayam",
    date: "January 2026",
    summary: "A magnificent royal wedding stage featuring cascading fresh white roses, gold filigree arches, and warm chandelier glow.",
    challenge: "Executing a 50-foot wide panoramic stage with fresh floral density within an 8-hour auditorium turnaround.",
    solution: "Pre-assembled modular structural panels and utilized specialized cold hydration floral blocks.",
    result: "A stunning ceremony praised by 1000+ guests and captured in breathtaking wedding portraits.",
    image: "/assets/Hero-section-desktop-screen.png",
    beforeImage: "/assets/Image-30427.jpg",
    afterImage: "/assets/Hero-section-desktop-screen.png",
    gallery: [
      "/assets/Hero-section-desktop-screen.png",
      "/assets/Image-30427.jpg",
      "/assets/Image-84520.jpg",
    ],
    tags: ["Christian Wedding", "Royal Gold", "Floral Stage", "Kanjirappilly"],
  },
  {
    id: "pastel-blush-betrothal",
    slug: "pastel-blush-betrothal",
    title: "Pastel Meadow Engagement",
    category: "Betrothals",
    client: "Mathew & Teresa",
    location: "Ponkunnam, Kottayam",
    date: "December 2025",
    summary: "An intimate betrothal celebration featuring circular floral rings, blush blossoms, and warm fairy lights.",
    challenge: "Designing a romantic, cozy atmosphere for 300 guests with custom couple neon monogram.",
    solution: "Blended pastel pink and ivory blooms on geometric gold arches with customized neon lighting.",
    result: "A charming, photogenic setup that created an emotional family milestone.",
    image: "/assets/Image-84520.jpg",
    beforeImage: "/assets/Image-86413.jpg",
    afterImage: "/assets/Image-84520.jpg",
    gallery: [
      "/assets/Image-84520.jpg",
      "/assets/Image-30427.jpg",
      "/assets/Hero-section-desktop-screen.png",
    ],
    tags: ["Betrothal", "Pastel Decor", "Neon Monogram", "Ponkunnam"],
  },
  {
    id: "enchanted-evening-reception",
    slug: "enchanted-evening-reception",
    title: "Crystal Candlelight Luxury Reception",
    category: "Receptions",
    client: "Dr. Alen & Dr. Sneha",
    location: "Kottayam",
    date: "February 2026",
    summary: "A glamorous evening celebration with crystal candle pedestals, suspended floral clouds, and low fog couple entrance.",
    challenge: "Synchronizing dynamic lighting and cold sparks for the couple's grand entrance.",
    solution: "Installed intelligent moving heads with synchronized warm amber washes and wireless cold pyros.",
    result: "Guests were mesmerized as the couple entered through a fairytale cloud of fog and sparklers.",
    image: "/assets/Image-30427.jpg",
    beforeImage: "/assets/Image-84520.jpg",
    afterImage: "/assets/Image-30427.jpg",
    gallery: [
      "/assets/Image-30427.jpg",
      "/assets/Hero-section-desktop-screen.png",
      "/assets/Image-86413.jpg",
    ],
    tags: ["Evening Reception", "Crystal Chandeliers", "Cold Pyros", "Kottayam"],
  },
  {
    id: "traditional-mandap-ceremony",
    slug: "traditional-mandap-ceremony",
    title: "Vedic Lotus Mandapam",
    category: "Floral & Stage",
    client: "Rahul & Gauthami",
    location: "Pala, Kottayam",
    date: "November 2025",
    summary: "A traditional wedding Mandapam adorned with fresh marigolds, brass lamps, and handcrafted floral pillars.",
    challenge: "Crafting an authentic traditional aesthetic while accommodating multi-angle live video streaming.",
    solution: "Used open four-pillar architectural styling with soft 3000K warm fill lights.",
    result: "A deeply spiritual, visually rich ambiance that honored ancient Kerala traditions.",
    image: "/assets/Image-86413.jpg",
    beforeImage: "/assets/Image-30427.jpg",
    afterImage: "/assets/Image-86413.jpg",
    gallery: [
      "/assets/Image-86413.jpg",
      "/assets/Image-84520.jpg",
      "/assets/Hero-section-desktop-screen.png",
    ],
    tags: ["Traditional Mandap", "Marigolds", "Brass Lamps", "Pala"],
  },
];

export const galleryMedia: GalleryMediaItem[] = [
  {
    id: "vid-1",
    title: "Cinematic Stage & Couple Entry Showcase",
    category: "videos",
    type: "video",
    src: "/assets/Reel-1.mp4",
    poster: "/assets/Image-30427.jpg",
    caption: "Dynamic live lighting and grand stage ambiance crafted by Creative Events in Kanjirappilly.",
  },
  {
    id: "vid-2",
    title: "Bespoke Event Walkthrough & Floral Artistry",
    category: "videos",
    type: "video",
    src: "/assets/Reel-2.mp4",
    poster: "/assets/Image-84520.jpg",
    caption: "Complete venue walkthrough showcasing seamless transitions from entrance to royal stage.",
  },
  {
    id: "img-1",
    title: "Signature Grand Luxury Stage",
    category: "stages",
    type: "image",
    src: "/assets/Hero-section-desktop-screen.png",
    caption: "Grand floral arch with royal gold lighting and luxury couple seating.",
  },
  {
    id: "img-2",
    title: "Enchanted Candlelight & Crystal Stage",
    category: "stages",
    type: "image",
    src: "/assets/Image-30427.jpg",
    caption: "Layered illuminated stage with hanging crystal elements and warm ambient glow.",
  },
  {
    id: "img-3",
    title: "Pastel Ring Betrothal Decor",
    category: "floral",
    type: "image",
    src: "/assets/Image-84520.jpg",
    caption: "Intimate floral circular ring styling adorned with fresh blooms and fairy lights.",
  },
  {
    id: "img-4",
    title: "Bespoke Mandap & Floral Craft",
    category: "stages",
    type: "image",
    src: "/assets/Image-86413.jpg",
    caption: "Artisanal floral stage styling for memorable celebrations.",
  },
  {
    id: "img-5",
    title: "Mobile Viewport Stage Elegance",
    category: "photos",
    type: "image",
    src: "/assets/Hero-section-mobile-screen.png",
    caption: "Tailored stage views crafted for pristine celebrations.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Jerin & Annu Mathew",
    role: "Bride & Groom",
    event: "Wedding & Grand Reception",
    location: "Kanjirappilly, Kottayam",
    rating: 5,
    content:
      "Creative Events & Wedding Planners transformed our dream into an unforgettable reality! The stage decoration in Kanjirappilly was breathtaking and our family received endless compliments. Every single detail from the floral arch to the lighting was handled with utmost care.",
    date: "January 2026",
  },
  {
    id: "t-2",
    name: "Thomas & Deepa Varghese",
    role: "Bride & Groom",
    event: "Engagement & Reception",
    location: "Ponkunnam",
    rating: 5,
    content:
      "From the very first phone call with the Creative Events team, their warmth and dedication stood out. They worked within our budget while delivering a luxury look that exceeded our expectations. Truly the best event planners in the area!",
    date: "December 2025",
  },
  {
    id: "t-3",
    name: "Dr. Abraham Kurian",
    role: "Father of the Bride",
    event: "Daughter's Wedding",
    location: "Kottayam",
    rating: 5,
    content:
      "Planning a 1000+ guest wedding was effortless with Creative Events taking charge of the stage, venue styling, and coordination. Punctual, polite, and extremely creative team. Highly recommend them for any grand family event.",
    date: "November 2025",
  },
  {
    id: "t-4",
    name: "Sandeep & Ritu",
    role: "Bride & Groom",
    event: "Contemporary Reception",
    location: "Mundakayam",
    rating: 5,
    content:
      "The floral artistry and lighting effects created such a magical atmosphere for our evening party. The cold sparklers and fog during our entry gave us movie-like photos!",
    date: "February 2026",
  },
];

export const whyChooseUsData = [
  {
    title: "10+ Years of Proven Excellence",
    desc: "Over a decade of creating mesmerizing weddings, receptions, and celebrations across Kanjirappilly and Kottayam.",
    icon: "Award",
  },
  {
    title: "Personalized Creative Concepts",
    desc: "Every event begins with your unique wish—customized mood boards, stage layouts, and bespoke color palettes.",
    icon: "Sparkles",
  },
  {
    title: "Fresh & Artisanal Floral Styling",
    desc: "Direct procurement of freshest roses, orchids, and local botanicals ensuring vibrant beauty all day long.",
    icon: "Flower2",
  },
  {
    title: "Dedicated On-Ground Coordination",
    desc: "Our responsive event managers oversee setup, vendor flow, and timing so you can enjoy every moment.",
    icon: "Clock",
  },
  {
    title: "Transparent & Value-Driven Pricing",
    desc: "Clear upfront proposals starting from ₹8,000 for private events with zero hidden charges.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Turnkey Execution",
    desc: "From stage fabrication, sound & lighting, to florals, entry special effects, and venue styling under one roof.",
    icon: "Layers",
  },
];

export const partnerVenues = [
  "St. Dominic's Cathedral Banquets, Kanjirappilly",
  "Town Hall & Convention Centres, Kanjirappilly",
  "Ponkunnam Convention Centre",
  "Pala Sports Complex & Convention Centre",
  "Windsor Castle, Kottayam",
  "Mammen Mappillai Hall, Kottayam",
  "Kumarakom Lake Resorts & Banquets",
  "Mundakayam Community & Parish Halls",
];

export const timelineMilestones = [
  {
    year: "Inception",
    title: "The Creative Journey Begins",
    desc: "Founded in Kanjirappilly with a passion for transforming personal dreams into magical celebrations.",
  },
  {
    year: "Growth",
    title: "In-House Floral & Stage Fabrication",
    desc: "Established dedicated workshops for custom woodwork, metallic arches, and fresh floral artistry.",
  },
  {
    year: "Expansion",
    title: "650+ Milestone Celebrations",
    desc: "Expanded across Kottayam, Ponkunnam, Pala, and Kumarakom with full turnkey wedding management.",
  },
  {
    year: "Today",
    title: "10+ Years of Creative Mastery",
    desc: "Recognized as a trusted name in Kanjirappilly for luxury weddings, intimate betrothals, and elegant event design.",
  },
];
