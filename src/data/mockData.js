export const CITIES = [
  { 
    id: 'all', 
    name: 'All Metros', 
    count: '850+ Workspaces',
    avgPrice: '₹ 14,500 / sq.ft',
    growthRate: '+12.4% YoY',
    rentalYield: '8.8% p.a.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    popular: ['OMR Cyber Vale', 'Indiranagar 100ft Rd', 'Hitec Financial Dist', 'Saravanampatti SEZ', 'Irvine Spectrum']
  },
  { 
    id: 'chennai', 
    name: 'Chennai', 
    state: 'Tamil Nadu',
    count: '340+ Commercial Spaces', 
    avgPrice: '₹ 16,800 / sq.ft',
    growthRate: '+11.2% YoY',
    rentalYield: '8.4% p.a.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Chennai’s premier corporate corridors along Rajiv Gandhi Salai (OMR), Mount Road / Guindy central arterial hub, and high-street retail promenades in Anna Nagar & Alwarpet.',
    popular: ['OMR IT Corridor', 'Guindy / Mount Road', 'Anna Nagar 2nd Ave', 'Alwarpet CBD', 'Perungudi SEZ', 'Ambattur Industrial Hub'],
    infrastructure: ['Chennai Metro Phase 2', 'OMR Multi-Tier Expressway', 'Parandur Aero-City Logistics Park']
  },
  { 
    id: 'bengaluru', 
    name: 'Bengaluru', 
    state: 'Karnataka',
    count: '280+ Commercial Spaces', 
    avgPrice: '₹ 18,200 / sq.ft',
    growthRate: '+15.8% YoY',
    rentalYield: '9.2% p.a.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    description: 'India’s Silicon Capital commanding highest institutional demand for Grade-A Tech Parks, turnkey managed enterprise suites, and vibrant coworking hubs.',
    popular: ['Indiranagar 100ft Road', 'Outer Ring Road (ORR)', 'Whitefield Tech Belt', 'Koramangala Startups Hub', 'HSR Layout', 'Manyata Embassy SEZ'],
    infrastructure: ['ORR Metro Blue Line', 'STRR Satellite Ring Road', 'Aerospace SEZ Corridor']
  },
  { 
    id: 'hyderabad', 
    name: 'Hyderabad', 
    state: 'Telangana',
    count: '160+ Commercial Spaces', 
    avgPrice: '₹ 15,400 / sq.ft',
    growthRate: '+18.5% YoY',
    rentalYield: '9.6% p.a.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Fastest-growing institutional commercial market in South Asia, spanning Financial District glass towers, Hitec City campuses, and Kokapet Neopolis mega-hubs.',
    popular: ['Financial District', 'Hitec City', 'Kokapet Neopolis', 'Gachibowli', 'Madhapur', 'Banjara Hills Commercial CBD'],
    infrastructure: ['Neopolis Trumpet Expressway', 'Airport Express Metro Line', 'Regional Ring Road (RRR)']
  },
  { 
    id: 'coimbatore', 
    name: 'Coimbatore', 
    state: 'Tamil Nadu',
    count: '65+ Commercial Spaces', 
    avgPrice: '₹ 9,500 / sq.ft',
    growthRate: '+10.2% YoY',
    rentalYield: '8.1% p.a.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    description: 'Western Tamil Nadu’s industrial and IT powerhouse with boutique corporate headquarters along Race Course and large-scale IT Parks along Avinashi Road.',
    popular: ['Race Course Promenade', 'Avinashi Road IT Belt', 'Saravanampatti Tech Zone', 'RS Puram Commercial', 'Trichy Road Corridor'],
    infrastructure: ['Avinashi Elevated Expressway', 'Coimbatore Metro Phase 1', 'Defence Industrial Corridor']
  },
  { 
    id: 'pune', 
    name: 'Pune', 
    state: 'Maharashtra',
    count: '55+ Commercial Spaces', 
    avgPrice: '₹ 12,900 / sq.ft',
    growthRate: '+11.8% YoY',
    rentalYield: '8.9% p.a.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Leading IT, SaaS, and automotive technology destination with thriving commercial SEZs in Hinjawadi, Kharadi World Trade Center, and Kalyani Nagar.',
    popular: ['Hinjawadi Phase 1 & 2', 'Kharadi WTC Hub', 'Viman Nagar CBD', 'Kalyani Nagar', 'Baner Tech Strip'],
    infrastructure: ['Pune Metro Extended Line', 'Ring Road Phase 1', 'Purandar International Cargo Hub']
  },
  { 
    id: 'irvine', 
    name: 'Irvine, California', 
    state: 'California, USA',
    count: '35+ Commercial Spaces', 
    avgPrice: '$ 850 / sq.ft',
    growthRate: '+8.4% YoY',
    rentalYield: '7.8% p.a.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    description: 'Our cross-border US commercial hub in Orange County, California delivering corporate headquarters leasing, tech flex offices, and high-yield CRE investments.',
    popular: ['Irvine Spectrum Tech Hub', 'Newport Center Corridor', 'Silicon Beach Expansion', 'John Wayne Airport Center'],
    infrastructure: ['Spectrum Center Expansion', 'Orange County Rapid Transit', 'SoCal BioTech Corridor']
  }
];

export const PROPERTY_TYPES = [
  'All Types',
  'Commercial Office',
  'Flexible Coworking & Desks',
  'Meeting & Conference Rooms',
  'Managed Office Suites',
  'Virtual Office & GST Reg',
  'Retail Showroom',
  'Warehouse / Industrial',
  'Commercial Land',
  'Pre-Leased Commercial'
];

export const BUDGET_RANGES_BUY = [
  { label: 'Any Commercial Budget', min: 0, max: Infinity },
  { label: 'Under ₹5 Cr', min: 0, max: 50000000 },
  { label: '₹5 Cr – ₹15 Cr', min: 50000000, max: 150000000 },
  { label: '₹15 Cr – ₹30 Cr', min: 150000000, max: 300000000 },
  { label: '₹30 Cr – ₹75 Cr', min: 300000000, max: 750000000 },
  { label: '₹75 Cr + (Institutional Asset)', min: 750000000, max: Infinity }
];

export const BUDGET_RANGES_RENT = [
  { label: 'Any Rent / Plan', min: 0, max: Infinity },
  { label: 'Under ₹1,000 / day (Pass)', min: 0, max: 1000 },
  { label: '₹5,000 – ₹25,000 / mo (Desk)', min: 5000, max: 25000 },
  { label: '₹25,000 – ₹1 Lakh / mo', min: 25000, max: 100000 },
  { label: '₹1 Lakh – ₹5 Lakh / mo', min: 100000, max: 500000 },
  { label: '₹5 Lakh – ₹20 Lakh / mo', min: 500000, max: 2000000 },
  { label: '₹20 Lakh + / mo (Campus)', min: 2000000, max: Infinity }
];

export const REALTORS = [
  {
    id: 'r1',
    name: 'C. Suresh Reddy',
    designation: 'Vice Chairman & Senior Managing Director',
    experience: '32+ Years Experience',
    specialization: 'High-Value Commercial & Ultra-Luxury Prime Assets',
    phone: '+91 94222 33344',
    email: 'sureshreddy@hanureddyrealty.com',
    location: 'Chennai Central (Alwarpet HQ)',
    city: 'chennai',
    listingsCount: 48,
    awards: 'Lifetime Excellence in Real Estate Brokerage',
    languages: 'English, Tamil, Telugu, Hindi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneered organized real estate brokerage across South India with over 3 decades of ethical leadership and billions in landmark transactions.'
  },
  {
    id: 'r2',
    name: 'Nirupama Reddy',
    designation: 'Executive Director & Head of International NRI Services',
    experience: '22+ Years Experience',
    specialization: 'Global NRI CRE Advisory, Pre-Leased Commercial & Tech Corridors',
    phone: '+91 94222 33344',
    email: 'nirupama@hanureddyrealty.com',
    location: 'Chennai / Irvine, California',
    city: 'chennai',
    listingsCount: 36,
    awards: 'Global NRI Trusted Fiduciary Award 2025',
    languages: 'English, Telugu, Tamil',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Directs global NRI CRE investments, cross-border commercial property acquisitions and tech campus leasing in India and the US.'
  },
  {
    id: 'r3',
    name: 'K. S. Narayanan',
    designation: 'Senior Vice President - Commercial Leasing & Flexible Workspaces',
    experience: '24+ Years Experience',
    specialization: 'Corporate IT Parks, Grade-A Offices & Coworking Hubs',
    phone: '+91 94222 33344',
    email: 'narayanan@hanureddyrealty.com',
    location: 'OMR / Guindy Hub, Chennai',
    city: 'chennai',
    listingsCount: 42,
    awards: 'Top Commercial Dealmaker 2024',
    languages: 'English, Tamil, Hindi, Malayalam',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Advising Fortune 500 tech firms, multinational banks, and hybrid workspace operators in institutional acquisitions and multi-floor leasing.'
  },
  {
    id: 'r4',
    name: 'Rohit Balakrishnan',
    designation: 'Regional Director - Bengaluru Operations',
    experience: '18+ Years Experience',
    specialization: 'Prime Bengaluru Commercial Offices & Tech Corridor Land',
    phone: '+91 94222 33344',
    email: 'rohit@hanureddyrealty.com',
    location: 'Indiranagar, Bengaluru',
    city: 'bengaluru',
    listingsCount: 52,
    awards: 'Bengaluru Top Producer 2024 & 2025',
    languages: 'English, Kannada, Tamil, Hindi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Heads our Bengaluru team with deep expertise in Indiranagar, Koramangala, Whitefield, and North Bengaluru growth corridors.'
  },
  {
    id: 'r5',
    name: 'Ananya Deshmukh',
    designation: 'Principal Advisor - Hyderabad Commercial & Premium Assets',
    experience: '14+ Years Experience',
    specialization: 'Financial District Grade-A Spaces, HITEC City Commercial Assets',
    phone: '+91 94222 33344',
    email: 'ananya@hanureddyrealty.com',
    location: 'Banjara Hills, Hyderabad',
    city: 'hyderabad',
    listingsCount: 29,
    awards: 'Hyderabad Commercial Specialist of the Year',
    languages: 'English, Telugu, Hindi, Marathi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Renowned for discreet, high-trust CRE advisory for family offices, tech enterprise founders, and corporate leadership across Hyderabad.'
  },
  {
    id: 'r6',
    name: 'Venkatesh Raghavan',
    designation: 'Senior Consultant - Joint Ventures & Land Acquisition',
    experience: '20+ Years Experience',
    specialization: 'Land Monetization, JV Structuring, Clear Title Diligence',
    phone: '+91 94222 33344',
    email: 'venkatesh@hanureddyrealty.com',
    location: 'Anna Nagar / Central Chennai',
    city: 'chennai',
    listingsCount: 31,
    awards: 'Master of Land Due Diligence',
    languages: 'English, Tamil',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Over 85 successful Joint Development agreements structured between top-tier land owners and Grade-A developers with 100% clean track record.'
  }
];

export const PROPERTIES = [
  {
    id: 'HR-CM-01',
    title: 'Grade-A Corporate IT Park Floor on OMR IT Corridor',
    tagline: 'LEED Platinum Plug-and-Play Corporate Facility in Chennai’s Tech Hub',
    listingType: 'rent',
    propertyType: 'Commercial Office',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'OMR, Perungudi Hub',
    address: 'Rajiv Gandhi Salai, Perungudi IT Expressway, Chennai - 600096',
    price: 1250000,
    priceFormatted: '₹ 12.50 Lakh / mo',
    rentPerMonth: 1250000,
    rentFormatted: '₹ 12.50 Lakh / mo',
    securityDeposit: '₹ 75.0 Lakhs',
    pricePerSqft: '₹ 68 / sq.ft / mo',
    areaSqft: 18500,
    bhk: '220 Workstations + 8 Cabins + 2 Boardrooms',
    bathrooms: 8,
    carparks: 24,
    facing: 'Main IT Corridor Arterial Frontage',
    floor: '5th of 14 Floors',
    furnishing: 'Fully Furnished Grade-A Plug & Play Corporate Fitout',
    status: 'Ready for Immediate Occupation',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '220 ergonomic Herman Miller workstations, 8 executive partner cabins & cafeteria',
      'Twin high-speed fiber broadband redundancy (Airtel + Tata) with 100% DG power backup',
      'LEED Platinum green building rating with central chilled water VRV air-conditioning',
      'Proximity to upcoming Metro Phase 2 station with multi-level basement car parking'
    ],
    amenities: ['220 Workstations', '100% DG Backup', 'Central VRV AC', 'High-Speed Fiber', 'Visitor Parking', 'BMS Automation', 'Fire Sprinklers', 'Cafeteria'],
    agent: REALTORS[2]
  },
  {
    id: 'HR-CM-02',
    title: 'Pre-Leased Commercial Headquarters in Guindy / Mount Road',
    tagline: 'High-Yield Institutional Commercial Asset with 9.4% Net Rental Return',
    listingType: 'buy',
    propertyType: 'Pre-Leased Commercial',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Guindy / Mount Road',
    address: 'Mount Road Arterial Hub, Guindy, Chennai - 600032',
    price: 245000000,
    priceFormatted: '₹ 24.50 Cr',
    pricePerSqft: '₹ 15,312 / sq.ft',
    areaSqft: 16000,
    bhk: 'Pre-Leased Institutional Asset (180 Workstations)',
    bathrooms: 6,
    carparks: 20,
    facing: 'Main Mount Road Frontage',
    floor: 'Standalone Commercial Building (G+4 Floors)',
    furnishing: 'Grade-A Corporate Fitout with Long-Term Institutional Lease',
    status: 'Income Generating (Immediate Returns)',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Leased to Fortune 500 MNC Bank with 9-year total lease tenure and 4.5 years lock-in remaining',
      'Generates steady ₹19.2 Lakhs / month rent with guaranteed 15% escalation every 3 years',
      'Strategic arterial visibility between Chennai Airport and Central Business District',
      '100% clear freehold institutional title audited by Hanu Reddy Legal Division'
    ],
    amenities: ['9.4% Rental Yield', 'Pre-Leased MNC', '100% Power Backup', 'Basement Parking', 'Dual Elevators', 'Access Control', 'LEED Certified'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CM-03',
    title: 'Signature Flexible Coworking & Hot Desk Hub in Indiranagar',
    tagline: 'On-Demand Day Passes, Dedicated Desks & Soundproof Pods on 100ft Road',
    listingType: 'rent',
    propertyType: 'Flexible Coworking & Desks',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    locality: 'Indiranagar 100ft Road',
    address: 'No. 423, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    price: 8999,
    priceFormatted: '₹ 8,999 / desk / mo',
    rentPerMonth: 8999,
    rentFormatted: 'From ₹ 499 / day pass',
    pricePerSqft: 'Zero Lock-in Commitment',
    areaSqft: 6200,
    bhk: '150 Flex Workstations + Day Passes',
    bathrooms: 4,
    carparks: 8,
    facing: 'North Facing 100ft Road Belt',
    floor: '2nd & 3rd Floors',
    furnishing: 'Ergonomic Desks, High-Speed Wi-Fi 6, Unlimited Artisanal Roast Coffee',
    status: 'Instant On-Demand Booking',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Day passes starting from ₹499 / day with zero deposit or paperwork required',
      'Dedicated desks with lockable pedestals and 24/7 biometric access',
      'Acoustic soundproof telephone calling booths and communal game lounge',
      'Walking distance from Indiranagar Metro Station and premier dining'
    ],
    amenities: ['Day Pass Available', 'Dedicated Desks', '1Gbps Wi-Fi', 'Artisanal Coffee', 'Phone Booths', 'Print Stations', 'Community Events', 'Power Backup'],
    agent: REALTORS[3]
  },
  {
    id: 'HR-CM-04',
    title: 'Executive 4K Boardroom & Meeting Suites in Financial District',
    tagline: 'Book Hourly / Daily Luxury Conference Rooms with Hybrid Video Conferencing',
    listingType: 'rent',
    propertyType: 'Meeting & Conference Rooms',
    city: 'hyderabad',
    cityName: 'Hyderabad',
    locality: 'Financial District, Gachibowli',
    address: 'Financial District Golden Mile, Nanakramguda, Hyderabad - 500032',
    price: 750,
    priceFormatted: '₹ 750 / hour | ₹ 5,500 / day',
    rentPerMonth: 5500,
    rentFormatted: 'From ₹ 750 / hour',
    pricePerSqft: 'Hourly Flexibility',
    areaSqft: 2200,
    bhk: '6 to 24-Seater Smart Conference Suites',
    bathrooms: 2,
    carparks: 10,
    facing: 'Skyline City Views',
    floor: '18th Floor Executive Club',
    furnishing: 'Leather Executive Chairs, Dual 85" 4K Displays, Logitech Rally VC Tech',
    status: 'Instant Hourly Confirmation',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Ideal for client board meetings, investor pitches, training workshops and interviews',
      'Integrated Polycom & Logitech video conferencing with high-gain ceiling mics',
      'Gourmet beverage service and executive administrative support included',
      'Instant calendar sync and multi-hour discounted enterprise packages'
    ],
    amenities: ['Hourly Booking', 'Dual 4K Screens', 'VC System', 'High-Speed Wi-Fi', 'Whiteboard', 'Executive Catering', 'Valet Parking', 'Concierge Desk'],
    agent: REALTORS[4]
  },
  {
    id: 'HR-CM-05',
    title: 'Turnkey Managed Enterprise Team Suite in Whitefield Tech Belt',
    tagline: 'Zero Capex 45-Seater Private Team Floor with Custom Branding & IT Ops',
    listingType: 'rent',
    propertyType: 'Managed Office Suites',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    locality: 'Whitefield IT Corridor',
    address: 'EPIP Zone, Near ITPL, Whitefield, Bengaluru - 560066',
    price: 380000,
    priceFormatted: '₹ 3.80 Lakh / mo (All-Inclusive)',
    rentPerMonth: 380000,
    rentFormatted: '₹ 3.80 Lakh / mo',
    pricePerSqft: '₹ 79 / sq.ft all-inclusive',
    areaSqft: 4800,
    bhk: '45 Dedicated Desks + 3 Cabins + Private Boardroom',
    bathrooms: 4,
    carparks: 6,
    facing: 'East Facing Campus View',
    floor: '4th Floor Private Wing',
    furnishing: 'Custom Branded Reception, Managed IT Infrastructure & Private Pantry',
    status: 'Move In within 7 Days',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Fully self-contained private office floor with custom company branding',
      'Single monthly invoice covering rent, high-speed internet, electricity & daily housekeeping',
      'Dedicated on-site operations manager and hardware support team',
      'Flexible 6 to 24 month tenure with no heavy initial capital expenditure'
    ],
    amenities: ['Zero Capex', 'Private Suite', 'Facility Manager', 'Biometric Security', '100% Power Backup', 'Dedicated Pantry', 'Private Boardroom', 'Housekeeping'],
    agent: REALTORS[3]
  },
  {
    id: 'HR-CM-06',
    title: 'Prime High-Street Retail Showroom on Anna Nagar 2nd Avenue',
    tagline: 'High-Footfall Double-Height Retail Flagship in Central Chennai',
    listingType: 'rent',
    propertyType: 'Retail Showroom',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Anna Nagar 2nd Avenue',
    address: 'XV-G2, 2nd Avenue, Near Roundtana, Anna Nagar, Chennai - 600040',
    price: 420000,
    priceFormatted: '₹ 4.20 Lakh / mo',
    rentPerMonth: 420000,
    rentFormatted: '₹ 4.20 Lakh / mo',
    securityDeposit: '₹ 25.0 Lakhs',
    pricePerSqft: '₹ 93 / sq.ft / mo',
    areaSqft: 4500,
    bhk: '60ft Arterial High-Street Glass Frontage (G+1)',
    bathrooms: 3,
    carparks: 8,
    facing: 'Main 2nd Avenue Prime Frontage',
    floor: 'Ground (2,500 sq.ft) + 1st Floor (2,000 sq.ft)',
    furnishing: 'Bare-shell with Clear Double-Height Ceiling & Heavy Power Load',
    status: 'Ready for Fitout',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '60 feet uninterrupted clear glass facade onto Chennai’s highest spending retail strip',
      'Approved 65 KVA commercial power sanction with dedicated transformer yard',
      'Ideal for luxury automobile showrooms, designer apparel flagships or jewelers',
      'Direct customer front-parking apron plus basement vehicular parking'
    ],
    amenities: ['60ft Frontage', 'Double Height', '65 KVA Power', 'Customer Parking', 'Heavy Footfall', 'High Visibility', 'Loading Bay'],
    agent: REALTORS[5]
  },
  {
    id: 'HR-CM-07',
    title: 'Grade-A Logistics & Industrial Hub in Sriperumbudur / Oragadam',
    tagline: 'PEB Industrial Facility with FM2 Super-Flat Floor & 6 Hydraulic Docks',
    listingType: 'rent',
    propertyType: 'Warehouse / Industrial',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Sriperumbudur / Oragadam Hub',
    address: 'SIPCOT Industrial Corridor, Sriperumbudur, Chennai - 602105',
    price: 840000,
    priceFormatted: '₹ 8.40 Lakh / mo',
    rentPerMonth: 840000,
    rentFormatted: '₹ 8.40 Lakh / mo',
    securityDeposit: '₹ 50.0 Lakhs',
    pricePerSqft: '₹ 24 / sq.ft / mo',
    areaSqft: 35000,
    bhk: 'Grade-A Logistics Facility (12m Clear Height, 6 Docks)',
    bathrooms: 6,
    carparks: 15,
    facing: '4-Lane Industrial Highway Frontage',
    floor: 'Single-Span PEB Shed with 2-Story Office Block',
    furnishing: 'FM2 Industrial Flooring, Skylights & High-Bay LED Lights',
    status: 'Ready for Immediate Occupation',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: false,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '12-meter clear internal height ideal for multi-tier racking systems',
      '6 automatic hydraulic dock levelers with 40-foot container turning apron',
      'Fire hydrant network with ESFR sprinkler system compliant with global MNC norms',
      'Direct connectivity to Chennai Port and Bangalore-Chennai Industrial Expressway'
    ],
    amenities: ['12m Height', '6 Hydraulic Docks', 'FM2 Flooring', 'ESFR Sprinklers', 'Truck Apron', 'Security Kiosk', 'Weighbridge Access'],
    agent: REALTORS[2]
  },
  {
    id: 'HR-CM-08',
    title: 'Prime Commercial IT Park Land in Kokapet Neopolis, Hyderabad',
    tagline: '2.2 Acre Commercial Land Parcel in High-Rise Golden Mile with Unlimited FSI',
    listingType: 'buy',
    propertyType: 'Commercial Land',
    city: 'hyderabad',
    cityName: 'Hyderabad',
    locality: 'Kokapet, Neopolis',
    address: 'Neopolis Golden Mile Sector, Kokapet, Hyderabad - 500075',
    price: 420000000,
    priceFormatted: '₹ 42.00 Cr',
    pricePerSqft: '₹ 4,382 / sq.ft land',
    areaSqft: 95832,
    landArea: '2.20 Acres (10,648 sq. yards)',
    bhk: '2.2 Acres Commercial Land (Unlimited FSI Approved Zone)',
    bathrooms: 0,
    carparks: 0,
    facing: '150ft Wide Sector Road Corner',
    furnishing: 'Clear Level Vacant Land with 100% Clear Title',
    status: 'Ready for Mega Development',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: false,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Located in Hyderabad’s prime Neopolis commercial skyscraper zone with unlimited FSI potential',
      'Direct connectivity to Outer Ring Road (ORR) and Rajiv Gandhi International Airport (20 mins)',
      'HMDA auctioned clear title with zero encumbrance and comprehensive legal title audit',
      'Suitable for 1.2 Million sq.ft Grade-A IT Park or mixed-use commercial tower'
    ],
    amenities: ['Unlimited FSI', 'HMDA Approved', '150ft Road', 'Zero Encumbrance', 'ORR Proximity', 'Corner Parcel', 'Power & Water Grid'],
    agent: REALTORS[4]
  },
  {
    id: 'HR-CM-09',
    title: 'Virtual Office with GST & MCA Business Address in Alwarpet CBD',
    tagline: 'Prestigious Corporate Address, Mail Handling & Instant GST Registration NOC',
    listingType: 'rent',
    propertyType: 'Virtual Office & GST Reg',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Alwarpet Central Business District',
    address: 'No. 14, Kasturi Rangan Road, Alwarpet, Chennai - 600018',
    price: 1499,
    priceFormatted: '₹ 1,499 / mo (Billed Annually)',
    rentPerMonth: 1499,
    rentFormatted: 'From ₹ 1,499 / mo',
    pricePerSqft: 'Instant Digital Setup',
    areaSqft: 1500,
    bhk: 'Virtual Office (Prime Commercial Address + Mail + GST NOC)',
    bathrooms: 2,
    carparks: 2,
    facing: 'Prime Central CBD',
    floor: '2nd Floor Corporate Hub',
    furnishing: 'Document Dispatch, Digital Courier Scanning & Receptionist Support',
    status: 'Instant Activation within 24 Hours',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Prestigious Alwarpet central business address for company registration, website and stationery',
      'Full legal NOC, electricity bill and commercial rent agreement for GST / MCA registration',
      'Professional mail handling, digital scanning and secure courier forwarding',
      'Includes 2 hours of complimentary luxury boardroom access per month'
    ],
    amenities: ['GST Registration NOC', 'MCA Compliant', 'Prime CBD Address', 'Mail Forwarding', 'Boardroom Access', 'Reception Support', 'Fast 24h Approval'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CM-10',
    title: 'Standalone Corporate Office Building on Race Course Promenade',
    tagline: 'Boutique G+3 Independent Corporate Landmark in Coimbatore’s Top District',
    listingType: 'buy',
    propertyType: 'Commercial Office',
    city: 'coimbatore',
    cityName: 'Coimbatore',
    locality: 'Race Course Road',
    address: 'No. 88, Race Course Road Promenade, Coimbatore - 641018',
    price: 87500000,
    priceFormatted: '₹ 8.75 Cr',
    pricePerSqft: '₹ 11,217 / sq.ft',
    areaSqft: 7800,
    bhk: 'Independent Corporate HQ (G+3 Floors, 80 Desks)',
    bathrooms: 6,
    carparks: 12,
    facing: 'East Facing Race Course Promenade',
    floor: 'Standalone Commercial Building (G+3 Floors)',
    furnishing: 'Fully Furnished Corporate Interior with Private Lift and Rooftop Cafeteria',
    status: 'Ready for Immediate Possession',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Prime independent corporate building with prestigious naming rights on Race Course',
      '80 workstations, 4 executive director cabins, 16-seater boardroom & rooftop deck',
      'Private 8-passenger elevator and dedicated 100% silent DG power generator',
      '100% clear parent title verified by Hanu Reddy Legal Division'
    ],
    amenities: ['Independent Building', '80 Workstations', 'Naming Rights', 'Private Elevator', '100% DG Backup', 'Rooftop Lounge', '12 Covered Parks'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CM-11',
    title: 'Pre-Leased IT Park Floor Plate with 8.8% Yield in Hinjawadi',
    tagline: 'High-Yield Commercial Tech Floor Plate Leased to Global SaaS Enterprise',
    listingType: 'buy',
    propertyType: 'Pre-Leased Commercial',
    city: 'pune',
    cityName: 'Pune',
    locality: 'Hinjawadi Phase 1 IT Park',
    address: 'Tech Boulevard, Hinjawadi Phase 1, Pune - 411057',
    price: 148000000,
    priceFormatted: '₹ 14.80 Cr',
    pricePerSqft: '₹ 13,214 / sq.ft',
    areaSqft: 11200,
    bhk: 'Pre-Leased SaaS MNC Tenant (95 Workstations)',
    bathrooms: 4,
    carparks: 14,
    facing: 'North-East Facing',
    floor: '6th of 12 Floors',
    furnishing: 'Plug & Play Grade-A IT Fitout Maintained by Tenant',
    status: 'Income Generating (Immediate Returns)',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Pre-leased to multinational cloud software firm with 5 years remaining on registered lease',
      'Monthly rental payout of ₹10.85 Lakhs providing 8.8% net annualized ROI',
      'Campus features food courts, gymnasiums, sports arena and high-speed transit links',
      'Bank-loan eligible asset with vetted documentation and clean encumbrance certificate'
    ],
    amenities: ['8.8% Net Yield', 'Pre-Leased Tech MNC', 'High-Speed Elevators', '100% DG Power', 'Central Air-Con', 'Visitor Parking', 'BMS Tech'],
    agent: REALTORS[3]
  },
  {
    id: 'HR-CM-12',
    title: 'Executive Tech Workspace in Irvine Spectrum Tech Hub',
    tagline: 'Silicon Beach Corporate Suite in Southern California’s Innovation Center',
    listingType: 'rent',
    propertyType: 'Commercial Office',
    city: 'irvine',
    cityName: 'Irvine, USA',
    locality: 'Irvine Spectrum Center, CA',
    address: '18000 Studebaker Rd, Irvine Spectrum Center, CA 92618, USA',
    price: 960000,
    priceFormatted: '$ 11,500 / mo (₹ 9.6 Lakh)',
    rentPerMonth: 960000,
    rentFormatted: '$ 11,500 / mo',
    securityDeposit: '$ 23,000',
    pricePerSqft: '$ 2.74 / sq.ft / mo',
    areaSqft: 4200,
    bhk: 'Silicon Beach Tech Suite (40 Workstations + Boardroom)',
    bathrooms: 3,
    carparks: 12,
    facing: 'Courtyard & Spectrum Views',
    floor: 'Suite 700 (Top Floor)',
    furnishing: 'Modern Scandinavian Ergonomic Desks, Conference Pods & Gigabit Fiber',
    status: 'Ready for Immediate Occupation',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Located inside premier Irvine Spectrum tech hub surrounded by global tech headquarters',
      'Open collaboration space, 40 ergonomic workstations, 2 executive cabins & 12-seater conference pod',
      'Managed directly by Hanu Reddy Realty Inc. USA with seamless cross-border accounting',
      'EV charging stations, fitness center, outdoor meeting patio and walking path'
    ],
    amenities: ['Irvine Spectrum HQ', 'Silicon Beach', 'Gigabit Fiber', 'EV Charging', 'Fitness Center', 'Outdoor Patio', '24/7 Security'],
    agent: REALTORS[1]
  }
];

export const SERVICES = [
  {
    id: 'flexible-coworking',
    title: 'Flexible Workspaces & Enterprise Flex',
    shortDesc: 'On-demand coworking day passes, hourly meeting & conference rooms, managed team suites, and virtual offices with GST compliance.',
    fullDesc: 'Empower hybrid teams and growing enterprises with ultra-flexible workspace solutions inspired by modern agile work culture. From booking boardrooms by the hour to deploying 20-200 seat bespoke managed offices with zero capex and flexible lock-in, Hanu Reddy Realty curates South India’s finest serviced and hybrid offices.',
    features: [
      'On-Demand Day Passes & Hot Desks with high-speed WiFi and coffee',
      'Meeting & Conference Rooms booked by the hour (4 to 25 seaters)',
      'Turnkey Managed Team Suites with zero upfront capital expenditure',
      'Virtual Office with prime commercial address & GST / MCA compliance',
      'Enterprise Flex passes for distributed corporate teams',
      'Zero lock-in options & instant plug-and-play move-in'
    ],
    targetClients: 'Startups, Hybrid Teams, Remote Workforces, Consultants, Expanding Enterprises',
    icon: 'Building2'
  },
  {
    id: 'preleased-cre',
    title: 'Pre-Leased Commercial & High-Yield Assets',
    shortDesc: 'Institutional pre-leased commercial floors, IT towers, and banking retail spaces generating guaranteed 8.5% – 10.5% rental yields.',
    fullDesc: 'With over three decades of commercial market mastery, Hanu Reddy Realty provides an uncompromising fiduciary standard for acquiring and divesting income-generating commercial real estate. We curate verified pre-leased assets with Fortune 500 tenants, long lock-in leases, structured escalations, and ironclad 40-point legal title clearances.',
    features: [
      'Grade-A multinational & banking tenant covenants',
      'Long-term 9-year to 15-year registered leases with periodic escalations',
      'Immediate recurring cash flow with verified bank payment histories',
      'Rigorous 40-point title, lease deed & building sanction audit',
      'Zero vacancy risk with multi-month security deposits in place',
      'Institutional exit, capital appreciation & tax depreciation advisory'
    ],
    targetClients: 'Family Offices, Corporate Treasuries, High-Net-Worth Investors, NRI Wealth Portfolios',
    icon: 'TrendingUp'
  },
  {
    id: 'commercial-leasing',
    title: 'Grade-A Office Leasing & Corporate Campuses',
    shortDesc: 'Connecting multinational corporations, fintechs, and tech leaders with prime Grade-A office buildings, tech SEZs, and corporate campuses.',
    fullDesc: 'From expanding enterprise headquarters to multi-floor tech park leasing, our commercial advisory division delivers data-driven intelligence on rental yields, floor plate efficiencies, and tenant covenants across South India’s major IT and business corridors.',
    features: [
      'Grade-A corporate office space leasing & tech park floors',
      'Retail showroom & flagship store acquisition in high-street CBDs',
      'Industrial logistics hubs & built-to-suit fulfillment centers',
      'Pre-leased investment opportunities with 8.5-10.5% net yields',
      'Lease structuring, lock-in terms & escalation advisory',
      'Fitout coordination & property handover management'
    ],
    targetClients: 'Multinational Corporations, IT Giants, Retail Chains, Real Estate Funds',
    icon: 'Building2'
  },
  {
    id: 'nri-services',
    title: 'NRI Commercial Asset Stewardship',
    shortDesc: 'Specialized fiduciary care for non-resident Indians: from remote commercial property acquisition and corporate tenant management to lease renewals.',
    fullDesc: 'Operating from our regional headquarters in Chennai and international hub in Irvine, California, we serve the global Indian diaspora with turnkey asset stewardship. We eliminate the stress of cross-border real estate management through Power of Attorney facilitation, FEMA compliance, and regular live video audits.',
    features: [
      'Complete remote commercial asset management & PoA guidance',
      'Vetted corporate & MNC tenant placement with timely rent escrow',
      'Periodic physical site inspections with 4K video reports',
      'FEMA compliant fund repatriation support (Form 15CA/CB)',
      'Property tax, utility and maintenance bill settlements',
      'Dedicated US & India cross-time-zone relationship desks'
    ],
    targetClients: 'NRIs in the USA, UK, Singapore, UAE, Europe, and Australia',
    icon: 'Globe'
  },
  {
    id: 'joint-ventures',
    title: 'Commercial Land Monetization & JVs',
    shortDesc: 'Bridging prominent commercial landowners with top-tier Grade-A developers to maximize returns through balanced, equitable development agreements.',
    fullDesc: 'Monetizing prime commercial land requires nuanced expertise in FAR/FSI regulations, revenue sharing matrices, and protective legal covenants. We have successfully closed over 85 commercial joint developments, ensuring land owners receive maximum capital appreciation while mitigating all execution and delay risks.',
    features: [
      'Careful builder track record & balance sheet verification',
      'Equitable sharing ratio negotiations & structuring',
      'Legal drafting & RERA documentation protection',
      'Monitoring project milestones until final handover of units',
      'Clear title documentation & government sanction vetting',
      'Tax optimization advice for joint development agreements'
    ],
    targetClients: 'Commercial Landowners, Corporate Estates, Trust & Institutional Landholders',
    icon: 'Handshake'
  },
  {
    id: 'legal-valuation',
    title: 'Title Verification & CRE Valuation',
    shortDesc: 'Independent, transparent due diligence and scientific asset valuations powered by our in-house legal experts and 30+ year commercial sales registry.',
    fullDesc: 'Our benchmark 40-Point Title Audit is renowned across the financial and legal community for discovering latent encumbrances, revenue record mismatches, and succession ambiguities before money changes hands. We protect your corporate capital with zero margin for error.',
    features: [
      'Comprehensive 30+ year Encumbrance Certificate (EC) audit',
      'Revenue records, Patta, CMDA/DTCP/BBMP/GHMC sanction checks',
      'Fair market value assessment reports using comparable registries',
      'Bank loan, legal vetting and mortgage advisory guidance',
      'Guideline value vs market transaction parity analysis',
      'Issuance of formal Hanu Reddy Title Verification Certificate'
    ],
    targetClients: 'Institutional Investors, Banks, Private Buyers, Estate Executors',
    icon: 'ShieldCheck'
  },
  {
    id: 'enterprise-fitouts',
    title: 'Enterprise Built-to-Suit & Managed Fitouts',
    shortDesc: 'Turnkey workplace transformation, agile interior fitouts, and managed enterprise offices tailored to modern corporate standards.',
    fullDesc: 'Deliver exceptional workspaces that attract top talent. Our enterprise solutions concierge partners with leading architects and MEP engineers to build turnkey office suites with zero capex, flexible lease lock-ins, and smart IoT workplace technology.',
    features: [
      'Zero upfront capex amortized into predictable monthly lease',
      'Ergonomic acoustic pods, collaborative breakout zones and boardrooms',
      'Tier-1 dual redundant fiber, UPS backup and biometric access',
      'Sustainability compliance (LEED, IGBC, WELL standards)',
      'Dedicated facility management and concierge support team'
    ],
    targetClients: 'Fast-Growing Tech Startups, Global Capability Centers (GCCs), MNC Hubs',
    icon: 'Compass'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'S. Rajagopalan — Asset Management Director',
    role: 'Commercial Landlord — Alwarpet Commercial Complex, Chennai',
    quote: 'Divesting our multi-floor commercial complex on Kasturi Rangan Road required discretion and high-caliber corporate buyers. Hanu Reddy Realty secured a marquee financial institution buyer and closed the transaction with zero regulatory friction.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    type: 'Commercial Landlord'
  },
  {
    id: 't2',
    name: 'Priya & Vikram Natarajan',
    role: 'NRI Investors — Bay Area & Indiranagar Tech Corridor, Bengaluru',
    quote: 'As NRIs living in California, we wanted a high-yielding pre-leased commercial floor in Bengaluru. Nirupama Reddy and her team structured an 9.2% net yield asset with an A-rated MNC tenant and handled all legal paperwork flawlessly. True peace of mind!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    type: 'NRI CRE Client'
  },
  {
    id: 't3',
    name: 'K. R. Chandrasekaran',
    role: 'Commercial Landowner — IT Park Joint Development, Anna Nagar',
    quote: 'Hanu Reddy Realty helped our family structure a joint development on our 3-acre commercial parcel with one of South India’s premier Grade-A builders. Their experience in negotiating FAR and protecting our floor share was simply unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    type: 'Commercial JV Partner'
  },
  {
    id: 't4',
    name: 'Anand Mahindra Global Tech Hub Lead',
    role: 'Corporate Tenant — Commercial Leasing, OMR',
    quote: 'We engaged Hanu Reddy Realty for our 35,000 sq.ft facility expansion in Chennai. Their deep local market insights, aggressive lease negotiations, and turnkey coordination saved us both substantial capex and weeks of operational time.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    type: 'Corporate Client'
  }
];

export const ODYSSEY_MILESTONES = [
  {
    year: '1993',
    title: 'The Inception in Chennai',
    desc: 'Founded by Mr. Hanu Reddy with a singular conviction: bringing organized professionalism, uncompromised honesty, and client fiduciary care to Indian real estate brokerage.'
  },
  {
    year: '1998',
    title: 'Regional Footprint Expansion',
    desc: 'Established dedicated regional hubs in Bengaluru and Hyderabad, pioneering transparent property documentation and zero-litigation due diligence.'
  },
  {
    year: '2005',
    title: 'Cross-Border Office in Irvine, CA',
    desc: 'Launched our international presence in Irvine, California to serve the fast-growing Indian diaspora with trusted cross-border real estate management.'
  },
  {
    year: '2015',
    title: '150+ Licensed Commercial Brokers & Advisors',
    desc: 'Built the region’s largest full-time, institutional-grade commercial advisor team, transacting landmark IT tech campuses and prime commercial assets.'
  },
  {
    year: '2023',
    title: '30 Years of Unbroken Trust',
    desc: 'Celebrated 3 decades of service with over ₹10,000 Crores in closed volume and 25,000+ satisfied families and global corporate clients.'
  },
  {
    year: '2026',
    title: 'Next-Gen PropTech Platform',
    desc: 'Combining modern digital tools, verified listings, 3D property tours, and high-touch advisory to empower homebuyers and investors worldwide.'
  }
];

export const BRANCHES = [
  {
    city: 'Chennai',
    isHeadquarters: true,
    branches: [
      {
        name: 'Head Office — Alwarpet / Mylapore',
        address: 'No. 14, 2nd Floor, Kasturi Rangan Road, Alwarpet, Chennai - 600018',
        phone: '+91 94222 33344',
        email: 'chennai@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Alwarpet+Chennai'
      },
      {
        name: 'Anna Nagar Branch',
        address: 'XV-G2, 2nd Avenue, Near Roundtana, Anna Nagar, Chennai - 600040',
        phone: '+91 94222 33344',
        email: 'annanagar@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Anna+Nagar+Chennai'
      },
      {
        name: 'OMR Tech Corridor Hub',
        address: 'Tower 12, Rajiv Gandhi Salai (OMR), Perungudi, Chennai - 600096',
        phone: '+91 94222 33344',
        email: 'omr@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+OMR+Perungudi+Chennai'
      }
    ]
  },
  {
    city: 'Bengaluru',
    branches: [
      {
        name: 'Bengaluru Central — Indiranagar',
        address: 'No. 423, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
        phone: '+91 94222 33344',
        email: 'bengaluru@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Indiranagar+Bengaluru'
      }
    ]
  },
  {
    city: 'Hyderabad',
    branches: [
      {
        name: 'Hyderabad Central — Banjara Hills',
        address: 'Road No. 12, Near MLA Colony, Banjara Hills, Hyderabad - 500034',
        phone: '+91 94222 33344',
        email: 'hyderabad@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Banjara+Hills+Hyderabad'
      }
    ]
  },
  {
    city: 'Coimbatore',
    branches: [
      {
        name: 'Coimbatore Branch — Race Course',
        address: 'No. 88, Race Course Road, Coimbatore - 641018',
        phone: '+91 94222 33344',
        email: 'coimbatore@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Race+Course+Coimbatore'
      }
    ]
  },
  {
    city: 'United States of America',
    branches: [
      {
        name: 'Hanu Reddy Realty USA — Irvine, California',
        address: '18000 Studebaker Rd, Suite 700 / Irvine Spectrum Center, CA 92618',
        phone: '+91 94222 33344',
        email: 'usa@hanureddyrealty.com',
        timing: 'Mon – Fri: 9:00 AM – 5:30 PM PST',
        mapQuery: 'Irvine+Spectrum+Center+California'
      }
    ]
  }
];

export const CAREER_OPENINGS = [
  {
    id: 'job-1',
    title: 'Senior Commercial Real Estate (CRE) Advisor',
    location: 'Chennai (Alwarpet / OMR IT Corridor)',
    experience: '5+ Years in Prime Commercial Brokerage',
    type: 'Full-Time',
    compensation: 'High Base + Uncapped Institutional Deal Commission',
    overview: 'Represent multinational enterprises, private equity funds, and business leaders in leasing and acquiring premier Grade-A corporate towers and pre-leased assets.'
  },
  {
    id: 'job-2',
    title: 'Commercial Leasing & Corporate Advisor',
    location: 'Bengaluru (Indiranagar / Whitefield)',
    experience: '4+ Years in Office / Tech Park Leasing',
    type: 'Full-Time',
    compensation: 'Competitive Fixed + Deal-Sharing Structure',
    overview: 'Drive transactions for Grade-A office buildings, tech parks, and commercial retail chains across Bengaluru.'
  },
  {
    id: 'job-3',
    title: 'NRI Client Relationship Executive',
    location: 'Hyderabad (Banjara Hills) / Remote USA Desk',
    experience: '3+ Years in NRI Wealth / Real Estate',
    type: 'Full-Time',
    compensation: 'Fixed CTC + Annual Bonus + Foreign Travel Allowance',
    overview: 'Manage portfolio requirements for non-resident Indian families across the US, UK, and Middle East.'
  },
  {
    id: 'job-4',
    title: 'Legal Title & Due Diligence Officer',
    location: 'Chennai HQ',
    experience: '4+ Years in Property Law / Revenue Records',
    type: 'Full-Time',
    compensation: 'Industry Best Professional Package',
    overview: 'Execute our trademark 40-Point Title Audit, verify Patta, revenue records, and ensure zero-litigation security for clients.'
  }
];

export const AWARDS_LIST = [
  { year: '2025', title: 'South India’s Most Trusted Real Estate Brand', org: 'National Realty Leadership Summit' },
  { year: '2024', title: 'Excellence in Ethical Brokerage & Title Integrity', org: 'Confederation of Real Estate Advisors' },
  { year: '2023', title: 'Top NRI Real Estate Fiduciary Partner', org: 'Global Indian Diaspora Forum (California)' },
  { year: '2021', title: '30-Year Golden Heritage Trophy', org: 'Indian Property Federation' }
];

export const FAQS_DATA = [
  {
    q: 'What is the Hanu Reddy 40-Point Title Audit?',
    a: 'It is our proprietary legal due diligence process where our in-house legal team verifies 30+ years of Encumbrance Certificates, parent title deeds, Patta records, local body planning sanctions, and court registers to ensure the property has zero disputes.'
  },
  {
    q: 'How does Hanu Reddy Realty assist NRI buyers and sellers?',
    a: 'We provide end-to-end fiduciary support including Power of Attorney (PoA) guidance, video property tours, tenant vetting, rent collection, NRI tax compliance, and FEMA repatriation guidance (15CA/CB).'
  },
  {
    q: 'What are the charges for listing a property on Hanu Reddy Realty?',
    a: 'We do not charge any upfront listing fee. We work on a success-based standard brokerage commission only when your property is successfully sold or leased.'
  },
  {
    q: 'How do I book a private property viewing?',
    a: 'You can click "Schedule Tour" on any property card or contact the designated Senior Realtor directly via Phone or WhatsApp for an exclusive private escorted walkthrough.'
  }
];
