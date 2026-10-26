export const featuredProject = {
  id: 'daily-task-app',
  title: 'Daily Task App',
  category: 'Full-Stack Web App',
  description:
    'A full-stack task management application built to turn my web development learning into a working product. The application connects a React frontend to an Express API and a PostgreSQL database, allowing users to manage tasks through a deployed web interface.',
  imageUrl: '/images/daily-task-app.png',
  tags: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Neon', 'Git', 'GitHub', 'Vercel'],
  liveUrl: 'https://daily-task-app-dusky.vercel.app/',
  sourceUrl: 'https://github.com/krevathiashok/daily-task-app',
  role: 'Designer & Full-Stack Developer',
  problem:
    'Needed a practical project to tie together frontend design, REST API development, database persistence, and cloud deployment — from scratch.',
  flows: [
    {
      id: 'create',
      name: '1. Task Creation Flow',
      badge: 'POST /api/tasks',
      color: '#2563EB',
      summary: 'User input validation, asynchronous API communication, and database insertion.',
      steps: [
        'User enters task title into "What do you need to do?" field',
        'Clicks "+ Add Task" button or triggers Enter key',
        'React issues asynchronous POST fetch request with JSON payload',
        'Express API validates input and issues SQL INSERT to Neon PostgreSQL',
        'Real-time UI update instantly increments Total Tasks (4) and Pending (3)'
      ]
    },
    {
      id: 'filter',
      name: '2. Status & Filtering Flow',
      badge: 'Reactive Client Filter',
      color: '#7C3AED',
      summary: 'Multi-view segmentation by task status (All / Pending / Completed).',
      steps: [
        'User toggles between "All", "Pending", and "Completed" tabs',
        'React state filters the active array based on the is_completed boolean column',
        'Dynamic badge styling applies yellow tags for Pending and green for Completed',
        'Instant metric synchronization with summary cards (Total: 4 | Pending: 3 | Completed: 1)'
      ]
    },
    {
      id: 'actions',
      name: '3. Task Mutation & Actions Flow',
      badge: 'PUT & DELETE Operations',
      color: '#059669',
      summary: 'Complete, Edit, and Delete action handlers mapped to REST endpoints.',
      steps: [
        'Complete Action: Toggles status, applies strike-through decoration, and updates DB status',
        'Edit Action: Enables editing task description in real-time',
        'Delete Action: Issues HTTP DELETE request to remove row from PostgreSQL database',
        'Instant UI reconciliation ensures smooth, responsive task management'
      ]
    },
    {
      id: 'fullstack',
      name: '4. Full-Stack Persistence Flow',
      badge: 'React ➔ Express ➔ Neon DB ➔ Vercel',
      color: '#D97706',
      summary: 'Reliable cloud persistence with serverless PostgreSQL and automated deployment.',
      steps: [
        'Frontend: Built with React + Vite, deployed on Vercel with HTTPS',
        'Backend: Express.js server providing RESTful endpoints with CORS & environment variables',
        'Database: Serverless Neon PostgreSQL database with relational table schema',
        'Deployment: Git/GitHub workflow with continuous automated Vercel deployment'
      ]
    }
  ],
  learnings: [
    {
      title: 'Frontend-to-Backend Communication',
      detail: 'Connecting a React UI to an Express REST API using fetch and async/await patterns.',
    },
    {
      title: 'API Integration',
      detail: 'Building and consuming REST endpoints for CRUD operations on tasks.',
    },
    {
      title: 'Database Persistence',
      detail: 'Managing relational data with PostgreSQL hosted on Neon serverless platform.',
    },
    {
      title: 'Version Control',
      detail: 'Using Git & GitHub throughout the full development workflow with meaningful commits.',
    },
    {
      title: 'Deployment',
      detail: 'Publishing a full-stack app to Vercel with proper environment variable configuration.',
    },
  ],
}

export const uiuxProjects = [
  {
    id: 'admini',
    title: 'Admini — AI-Powered Business Development SaaS',
    category: 'SaaS Dashboard',
    description:
      'End-to-end UI/UX architecture for Admini, a comprehensive business development ecosystem for SMEs. Designed the unified navigation, modular switcher (Marketing, Lead, Workforce, Reports, Day-to-Day Admin), real-time notifications feed, and scalable design system.',
    tags: ['Figma', 'Design System', 'SaaS', 'Dashboard', 'Architecture'],
    imageUrl: '/images/admini-main-dashboard.png',
    tools: ['Figma', 'Adobe Illustrator', 'Design System Tokens'],
    liveUrl: '',
    sourceUrl: '',
    role: 'Lead UI/UX Designer & Creative Director',
    problem:
      'SMEs and business leaders were burdened by fragmented tools for sales, lead tracking, employee training, and reporting. Designed a unified, clean, modular interface where every department is accessible in one click.',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563EB 100%)',
    featured: true,
  },
  {
    id: 'crm-dashboard',
    title: 'Campaign Studio — Publishing Wizard',
    category: 'SaaS Dashboard',
    description:
      'A 5-step guided publishing wizard enabling businesses to configure, preview, and schedule visual creatives across multi-channel social platforms.',
    tags: ['Figma', 'Campaign Wizard', 'SaaS Workflow'],
    imageUrl: '/images/crm-analytics-dashboard.png',
    tools: ['Figma', 'Component Variants'],
    liveUrl: '',
    sourceUrl: '',
    role: 'Lead UI/UX Designer',
    problem:
      'Marketers needed a frictionless wizard to progress from text prompt suggestions and image upload to platform selection and instant preview without cognitive overload.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    id: 'admini-monthly-report',
    title: 'Executive Analytics — Performance Report',
    category: 'SaaS Dashboard',
    description:
      'Consolidated monthly analytics dashboard featuring reach trends, audience growth rates, KPI charts, and lead attribution indicators.',
    tags: ['Figma', 'Analytics', 'Data Visualization'],
    imageUrl: '/images/admini-monthly-report.png',
    tools: ['Figma', 'Data Viz Tokens'],
    liveUrl: '',
    sourceUrl: '',
    role: 'Lead UI/UX Designer',
    problem:
      'Executive stakeholders needed actionable cross-platform metrics with clear indicators of "What Hits the Target" vs. "What Failed to Hit" to guide upcoming marketing spend.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    id: 'admini-freelancers',
    title: 'Admini Marketplace — Freelancer Directory',
    category: 'Web App UI',
    description:
      'Curated talent directory with verified ratings, service tags, one-click WhatsApp/Email inquiries, and booking workflows.',
    tags: ['Figma', 'Marketplace', 'Directory UX'],
    imageUrl: '/images/admini-freelancers.png',
    tools: ['Figma', 'Design System'],
    liveUrl: '',
    sourceUrl: '',
    role: 'Lead Product Designer',
    problem:
      'Business clients needed a direct, reliable way to hire specialized creative talent without leaving the Admini workspace.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    id: 'inicare-patient-hub',
    title: 'INICARE — Patient Health Hub & Services',
    category: 'Mobile App UI',
    description:
      'Personalized mobile healthcare dashboard featuring one-tap access to Prescriptions, Medical Records, Lab Tests, and vital Health Tracking with quick family dependent management.',
    tags: ['Figma', 'Healthcare App', 'Patient UX'],
    imageUrl: '/images/inicare-patient-hub.png',
    tools: ['Figma', 'Mobile Design System', 'Accessibility Guidelines'],
    liveUrl: '',
    sourceUrl: '',
    role: 'Lead UI/UX Designer',
    problem:
      'Patients found navigating healthcare apps overwhelming during appointments. Designed high-contrast color-coded service cards and prominent user credentials for instant access.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    id: 'inicare-pharmacy-delivery',
    title: 'INICARE — Pharmacy Order & Prescription Flow',
    category: 'Mobile App UI',
    description:
      'Prescription management and medicine delivery interface with segmented tabs for Appointments, Deliveries, and Medication schedules, featuring 3D pill iconography and order tracking.',
    tags: ['Figma', 'Medicine Delivery', 'Order Flow'],
    imageUrl: '/images/inicare-pharmacy-delivery.png',
    tools: ['Figma', 'Component Variants', 'E-Pharmacy UX'],
    liveUrl: '',
    sourceUrl: '',
    role: 'UI/UX Designer',
    problem:
      'Patients needed transparent visibility into ongoing medication orders, pill quantities, dosage costs, and scheduled refills without complex multi-screen checkout friction.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    id: 'inicare-live-tracking',
    title: 'INICARE — Real-Time Order & Courier Tracking',
    category: 'Mobile App UI',
    description:
      'Live medicine delivery tracking screen integrating an active GPS route map with a 5-stage progress milestone stepper and clear order confirmation actions.',
    tags: ['Figma', 'Live GPS Tracking', 'Milestone Stepper'],
    imageUrl: '/images/inicare-live-tracking.png',
    tools: ['Figma', 'Interactive Prototyping', 'Live Tracking UI'],
    liveUrl: '',
    sourceUrl: '',
    role: 'UI/UX Designer',
    problem:
      'Patients waiting for critical prescriptions experienced anxiety without real-time milestone updates. Built an intuitive vertical progress stepper paired with live courier routing.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
]

export const graphicDesignItems = [
  {
    id: 'vaan-nila-oil',
    title: 'Vaan Nila Natural Oil — Product Campaign',
    client: 'Vaan Nila Oil Mill',
    category: 'Product Promo',
    imageUrl: '/images/posters/vaan-nila-oil.jpg',
    description:
      'Commercial product campaign creative highlighting 4 cold-pressed natural cooking oils (Coconut, Sunflower, Sesame, Groundnut) with organic leaf imagery, key health benefits, and direct order contact details.',
    tools: ['Adobe Photoshop', 'Illustrator', 'Digital Composition'],
    highlights: ['Cold Pressed Packaging', 'Organic Visual Concept', 'Social Conversion CTA'],
  },
  {
    id: 'jimmys-architects',
    title: "Jimmy's Architects — Corporate Brand Poster",
    client: "Jimmy's Architects & Builders",
    category: 'Brand Marketing',
    imageUrl: '/images/posters/jimmys-architects.jpg',
    description:
      'Modern architectural brand identity poster featuring contemporary commercial glass facade, warm sunrise lighting, and iconic Winston Churchill quote on a frosted glass monument.',
    tools: ['Adobe Photoshop', 'Illustrator', 'Typography Design'],
    highlights: ['Modern Architecture', 'Frosted Glass Mockup', 'Corporate Branding'],
  },
  {
    id: 'six-dots-digialign',
    title: 'Six Dots Digi Align — Healthcare Physiotherapy Campaign',
    client: 'Six Dots International',
    category: 'Campaigns',
    imageUrl: '/images/posters/six-dots-healthcare.png',
    description:
      'Holistic healthcare and physiotherapy promotional poster emphasizing root-cause healing with integrated approach, featuring outdoor posture imagery, vibrant brand curves, and social media channels.',
    tools: ['Adobe Photoshop', 'Canva', 'Social Media Strategy'],
    highlights: ['Physiotherapy Awareness', 'Active Lifestyle Visuals', 'Multi-Channel CTA'],
  },
  {
    id: 'royal-vishu',
    title: 'Happy Vishu — Traditional Festival Creative',
    client: 'Royal 3D Wall Decorators',
    category: 'Festival',
    imageUrl: '/images/posters/happy-vishu-festival.jpg',
    description:
      'Culturally rich festive greeting creative capturing the auspicious Vishu Kani arrangement with golden Uruli, lit brass Nilavilakku lamp, fresh fruits, yellow Kani Konna flowers, and ornate wall backdrop.',
    tools: ['Adobe Photoshop', 'Digital Lighting', 'Photo Retouching'],
    highlights: ['Vishu Kani Setting', 'Traditional Brass Lamp', 'Warm Festive Ambiance'],
  },
  {
    id: 'cruz-tyres',
    title: 'Cruz Tyres — Apollo Heavy-Duty Tire Creative',
    client: 'Cruz Tyres (Apollo Authorized Dealer)',
    category: 'Product Promo',
    imageUrl: '/images/posters/cruz-tyres-apollo.jpg',
    description:
      'High-impact commercial automotive poster designed for an authorized Apollo tire dealership, featuring heavy-duty tractor tire with dramatic terrain-cracking 3D effect under vibrant blue skies.',
    tools: ['Adobe Photoshop', '3D Manipulation', 'Visual Effects'],
    highlights: ['Heavy-Duty Tractor Tire', 'Terrain Cracking FX', 'Dealership Branding'],
  },
  {
    id: 'pep-and-lip',
    title: 'Pep & Lip — Crispy Chicken Social Creative',
    client: 'Pep & Lip Restaurant',
    category: 'Social Media',
    imageUrl: '/images/posters/pep-and-lip-chicken.png',
    description:
      'Playful commercial food marketing creative for Pep & Lip featuring crispy golden fried chicken with comic muscular arms, thought bubbles ("I have the POWER To fill your Tummy"), and direct dine-in call-to-action.',
    tools: ['Adobe Photoshop', 'Illustrator', 'Digital Illustration', 'Chalkboard Art'],
    highlights: ['Playful Food Illustration', 'Tattoo Muscular Arms Concept', 'Dine-In Conversion CTA'],
  },
]

export const logoDesignItems = [
  {
    id: 'mystical-six-yards',
    title: 'Mystical Six Yards',
    subtitle: 'The Saree Veshti Couture',
    client: 'Mystical Six Yards Couture',
    category: 'Luxury & Celebrations',
    imageUrl: '/images/logos/mystical-six-yards.png',
    bgTheme: 'dark',
    palette: ['#EAB308', '#EF4444', '#10B981', '#3B82F6', '#111827'],
    description:
      'Luxury couture brand mark for a bespoke Indian saree and veshti bridal fashion house. Combines an aristocratic royal gold peacock with ornate, jewel-toned plumage feathers evoking traditional handwoven craftsmanship and majestic celebratory elegance.',
    rationale:
      'The peacock symbolizes royal heritage, grace, and auspicious beauty. The jewel-toned plumage feathers reflect the vibrant spectrum of pure silk saree weaves, while the regal gold silhouette establishes premium couture positioning.',
    tools: ['Adobe Illustrator', 'Vector Illustration', 'Color Harmony'],
    tags: ['Luxury Couture', 'Peacock Emblem', 'Gold Silhouette', 'Ethnic Fashion'],
  },
  {
    id: 'sarvagah',
    title: 'Sarvagah',
    subtitle: 'Sacred Harmony & Holistic Living',
    client: 'Sarvagah Wellness',
    category: 'Spiritual & Wellness',
    imageUrl: '/images/logos/sarvagah.png',
    bgTheme: 'dark',
    palette: ['#F59E0B', '#D97706', '#92400E', '#18181B'],
    description:
      'Spiritual lifestyle and holistic wellness brand emblem. Features a concentric circular monogram uniting the letters "S" and "D" in textured brushed gold, encircling a radiant Sun mandala with a sacred Sri Yantra core and graceful dancing flame petals.',
    rationale:
      'Emphasizes omnipresence, cosmic energy, and inner radiance. The textured brushed gold imparts permanence and warmth, while the central Sri Yantra geometry and flame rays anchor the identity in spiritual balance and vitality.',
    tools: ['Adobe Illustrator', 'Sacred Geometry', 'Brushed Gold Texturing'],
    tags: ['Sacred Geometry', 'Brushed Gold', 'Sun Mandala', 'Holistic Wellness'],
  },
  {
    id: 'vaibhotsav',
    title: 'Vaibhotsav',
    subtitle: 'Grand Celebrations & Festive Splendor',
    client: 'Vaibhotsav Celebrations',
    category: 'Luxury & Celebrations',
    imageUrl: '/images/logos/vaibhotsav-gold.png',
    bgTheme: 'light',
    palette: ['#F59E0B', '#D97706', '#B45309', '#78350F'],
    description:
      'Opulent 3D metallic gold brand identity for a luxury celebrations and grand cultural festival enterprise. Features an inverted geometric "V" crest with a top horizontal anchor bar and custom Devanagari-inspired Latin typography with top-hanging headline bar (shirorekha) and dimensional bevel shadows.',
    rationale:
      'The Sanskrit roots "Vaibhav" (prosperity, grandeur) and "Utsav" (joyous celebration) are translated into sculpted 3D gold typography. The architectural shirorekha imparts timeless majesty and auspicious royal patron status.',
    tools: ['Adobe Illustrator', '3D Bevel & Emboss', 'Indic Typography Fusion'],
    tags: ['3D Metallic Gold', 'Indic Shirorekha', 'Grand Celebrations', 'Luxury Crest'],
  },
  {
    id: 'suga-foods',
    title: 'Suga Foods',
    subtitle: 'Homemade Masalas & Traditional Powders',
    client: 'Suga Foods',
    category: 'Food & FMCG',
    imageUrl: '/images/logos/suga-foods.png',
    bgTheme: 'light',
    palette: ['#581C87', '#EA580C', '#FACC15', '#2563EB'],
    description:
      'Warm and culturally grounded brand emblem for an authentic homemade spice and masala enterprise. Centered around a smiling maternal chef illustration holding a traditional ladle next to a steaming aroma bowl with organic leaves, set against a rich twilight-to-ember circular gradient.',
    rationale:
      'Captures the warmth, nostalgia, and purity of homemade cooking passed down through generations. The twilight-to-ember gradient signifies the slow-roasting of aromatic spices, while the yellow line art character communicates motherly love and authentic home kitchen taste.',
    tools: ['Adobe Illustrator', 'Character Illustration', 'Packaging Branding'],
    tags: ['Homemade Spices', 'Maternal Chef Line Art', 'Spice Gradient', 'Traditional Food'],
  },
  {
    id: 'graby',
    title: 'GRABY',
    subtitle: 'Coastal Seafood Kitchen & Dining',
    client: 'GRABY Seafood Kitchen',
    category: 'Food & FMCG',
    imageUrl: '/images/logos/graby-crab.png',
    bgTheme: 'color',
    palette: ['#70D6FF', '#809B69', '#FFFFFF', '#1E293B'],
    description:
      'Playful yet minimalist brand emblem for a contemporary seafood kitchen. Features a stylized symmetric crab silhouette crowned with a delicate culinary lotus motif, enclosed in a sage-green circular seal against a refreshing sky-blue field.',
    rationale:
      'The raised claws symbolize freshness and hearty hospitality, while the central lotus/crown crest elevates the mark beyond a generic seafood icon into a recognized culinary badge. The calming sage and sky-blue palette evokes coastal sea breezes and natural organic flavors.',
    tools: ['Adobe Illustrator', 'Silhouette Vectoring', 'Brand Identity'],
    tags: ['Seafood Kitchen', 'Crustacean Silhouette', 'Crown Crest', 'Coastal Palette'],
  },
  {
    id: 'warp-and-weft-story',
    title: 'Warp & Weft Story',
    subtitle: 'Artisan Handloom & Sustainable Textiles',
    client: 'Warp & Weft Story',
    category: 'Textiles & Craft',
    imageUrl: '/images/logos/warp-and-weft-story.png',
    bgTheme: 'light',
    palette: ['#15803D', '#EAB308', '#22C55E', '#0F172A'],
    description:
      'Brand identity for an artisan textile and sustainable handloom brand. The mark abstracts the physical crossing of warp (vertical) and weft (horizontal) threads into an interlocking ribbon rosette with vivid eco-green and golden amber hues.',
    rationale:
      'Directly honors the centuries-old tradition of handloom weaving. The dynamic interlace demonstrates structural strength and organic movement, complemented by clean, wide-tracked contemporary typography.',
    tools: ['Adobe Illustrator', 'Geometric Construction', 'Brand Identity System'],
    tags: ['Handloom Heritage', 'Interlocking Ribbons', 'Eco Fashion', 'Geometric Crest'],
  },
  {
    id: 'admini-logo',
    title: 'Admini',
    subtitle: 'AI for Business Development',
    client: 'Admini SaaS Ecosystem',
    category: 'SaaS & Tech',
    imageUrl: '/images/logos/admini-logo.png',
    bgTheme: 'light',
    palette: ['#2563EB', '#1D4ED8', '#60A5FA', '#0F172A'],
    description:
      'Primary logo badge for Admini, the AI-powered business development ecosystem. Features a geometric uppercase "A" chevron constructed from AI vector nodes, with royal crown icons topping the "i" letterforms in the custom wordmark.',
    rationale:
      'Communicates executive intelligence and authority. The upward-pointing chevron reflects growth and forward momentum, while the royal crowns signify industry leadership and mastery in business automation.',
    tools: ['Figma', 'Adobe Illustrator', 'Design System Tokens'],
    tags: ['AI SaaS', 'Tech Monogram', 'Crown Iconography', 'B2B Brand Kit'],
  },
  {
    id: 'aureon-consultancy',
    title: 'Aureon Consultancy',
    subtitle: 'Renewable Energy Solutions',
    client: 'Aureon Consultancy',
    category: 'CleanTech & Energy',
    imageUrl: '/images/logos/aureon-consultancy.png',
    bgTheme: 'light',
    palette: ['#0284C7', '#16A34A', '#65A30D', '#0F172A'],
    description:
      'Corporate brand identity for a renewable energy and sustainability consultancy firm. Fuses a dynamic architectural letter "A" monogram with a curved photovoltaic solar panel grid and a flowing organic green leaf ribbon.',
    rationale:
      'The bold cobalt "A" embodies structural engineering precision and technical expertise, while the integrated solar panel array directly reflects solar power capabilities. The sinuous green leaf wave seamlessly links clean energy with eco-restoration and sustainable future growth.',
    tools: ['Adobe Illustrator', 'Gradient Vector Mesh', 'Corporate Brand Guidelines'],
    tags: ['Renewable Energy', 'Solar Panel Monogram', 'Eco Leaf Ribbon', 'CleanTech Identity'],
  },
  {
    id: 'iniramsquare',
    title: 'INIRAMSQUARE',
    subtitle: 'Modern Digital & Architectural Studio',
    client: 'INIRAMSQUARE Studio',
    category: 'SaaS & Tech',
    imageUrl: '/images/logos/iniramsquare.png',
    bgTheme: 'color',
    palette: ['#007BFF', '#FFFFFF', '#0A2540'],
    description:
      'Architectural and digital studio brand identity. Employs strong positive-negative geometric letterforms ("I", "N", "I") within an electric cobalt blue rounded square canvas, producing high visual impact across digital icons and physical signage.',
    rationale:
      'Inspired by modernist Swiss graphic design and structural grid architecture. The sharp diagonal cut in the central "N" generates kinetic tension against the solid rectangular "I" pillars, making it instantly recognizable even at favicon scale.',
    tools: ['Adobe Illustrator', 'Grid Systems', 'Minimalist Vector Craft'],
    tags: ['Minimalist Monogram', 'Swiss Modernism', 'Electric Blue', 'Negative Space'],
  },
]

export const printBrandingItems = [
  {
    id: 'admini-trifold',
    title: 'Admini — AI Business Development Trifold Brochure',
    client: 'Dexa IT Solutions / Admini',
    category: 'Trifold Brochure',
    format: '6-Panel Trifold Marketing Collateral',
    imageUrl: '/images/print/admini-trifold-brochure.jpg',
    description:
      'Complete 6-panel marketing trifold brochure for Admini, showcasing institutional endorsements (StartupTN, Anna University, ITNT, BNI), customer ecosystem, pricing packages, and core functional modules.',
    details:
      'Designed for enterprise networking events, investor meetings, and direct client outreach. The layout harmonizes both the outer panels (institutional backing, pricing tiers, and contact QR code) and inner spreads (Social Hub, Work Hub, Lead Hub, and BizSights mentor workflows).',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'Print Production'],
    specs: ['6-Panel Trifold', '300 DPI CMYK', 'Matte Finish with Spot UV', 'Precision Folds'],
    highlights: ['Institutional Trust Badges', 'Customer Logos Grid', '3D Mascot Integration', 'QR Code Demo Link'],
  },
  {
    id: 'aureon-brochure',
    title: 'Aureon Consultancy — Corporate Profile & Services Brochure',
    client: 'Aureon Consultancy',
    category: 'Corporate Profile',
    format: 'Multi-Page Corporate Profile & Service Booklet',
    imageUrl: '/images/print/aureon-corporate-brochure.jpg',
    description:
      'Editorial corporate brochure and service profile for Aureon Consultancy, illustrating end-to-end renewable energy advisory across solar, wind, hybrid power systems, and regulatory policy.',
    details:
      'Engineered to present clean energy solutions with corporate authority. Features an architectural cover spread, company values, detailed service breakdowns (Solar & Wind Energy, Group Captive models, Technical Due Diligence), and high-resolution solar/wind farm imagery.',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'Editorial Layout'],
    specs: ['Multi-Page Booklet Spread', '300 DPI CMYK', 'Heavyweight Silk Stock', 'Saddle Stitch'],
    highlights: ['Multi-Page Spreads', 'CleanTech Visual Hierarchy', 'Data & Service Matrix', 'Corporate Due Diligence'],
  },
]

export const contentItems = [
  {
    id: 'social-copy',
    title: 'Social Media Copywriting',
    category: 'Social Media Copy',
    description:
      'Engaging social media captions, hashtag strategies, and posting plans for B2B and B2C brands across LinkedIn, Instagram, and Twitter.',
    icon: 'PenLine',
  },
  {
    id: 'promo-copy',
    title: 'Promotional & Marketing Copy',
    category: 'Promotional Copy',
    description:
      'Persuasive product descriptions, email campaigns, landing page copy, and ad copy designed for high conversion.',
    icon: 'Megaphone',
  },
  {
    id: 'video-scripts',
    title: 'Video & YouTube Scripts',
    category: 'Video Scripts',
    description:
      'Structured video scripts for YouTube channels, explainer videos, and promotional clips with clear narrative arcs and call-to-action endings.',
    icon: 'FileVideo',
  },
  {
    id: 'brand-comms',
    title: 'Brand Communication',
    category: 'Brand Communication',
    description:
      'Developing brand voice guides, messaging frameworks, taglines, and consistent communication standards across all touchpoints.',
    icon: 'MessageSquare',
  },
]

export const aiVideoItems = [
  {
    id: 'ai-motivation',
    title: 'AI Motivational Shorts',
    category: 'Motivational',
    description:
      'AI-generated motivational video series with voiceover, uplifting visuals, and cinematic text overlays.',
    youtubeId: '',
    tools: ['Midjourney', 'Runway', 'Filmora'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563EB 100%)',
  },
  {
    id: 'kids-stories',
    title: 'AI Kids Story Videos',
    category: 'Kids Stories',
    description:
      'Animated-style storytelling videos for children using AI art, narration, and background music composition.',
    youtubeId: '',
    tools: ['Ideogram', 'Filmora', 'AI Voiceover'],
    gradient: 'linear-gradient(135deg, #831843 0%, #F59E0B 100%)',
  },
  {
    id: 'devotional',
    title: 'Devotional Content Series',
    category: 'Devotional',
    description:
      'Peaceful devotional video content with AI-generated scenic backgrounds, sacred text overlays, and calming audio.',
    youtubeId: '',
    tools: ['Midjourney', 'Adobe Premiere Pro', 'Canva'],
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #7C3AED 100%)',
  },
  {
    id: 'ai-production',
    title: 'AI Visual Production',
    category: 'AI Production',
    description:
      'Full AI-assisted video production workflow: concept → AI image generation → video assembly → color grading → export.',
    youtubeId: '',
    tools: ['Midjourney', 'Runway', 'Premiere Pro', 'Filmora'],
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
  },
]
