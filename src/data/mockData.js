export const CITIES = [
  { 
    id: 'all', 
    name: 'All Cities', 
    count: '1,450+',
    avgPrice: '₹ 14,500 / sq.ft',
    growthRate: '+12.4% YoY',
    rentalYield: '4.8% p.a.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    popular: ['Boat Club', 'Indiranagar', 'Jubilee Hills', 'Race Course', 'Irvine Spectrum']
  },
  { 
    id: 'chennai', 
    name: 'Chennai', 
    state: 'Tamil Nadu',
    count: '680+ Properties', 
    avgPrice: '₹ 16,800 / sq.ft',
    growthRate: '+11.2% YoY',
    rentalYield: '4.2% p.a.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: 'Chennai’s luxury corridors command premium status with green leafy avenues in Boat Club & Alwarpet and scenic waterfront estates along ECR.',
    popular: ['Alwarpet', 'Boat Club', 'Anna Nagar', 'ECR', 'OMR', 'Nungambakkam', 'Adyar', 'Poes Garden', 'R.A. Puram'],
    infrastructure: ['Chennai Metro Phase 2', 'ECR 6-Lane Expansion', 'New Parandur Greenfield Airport']
  },
  { 
    id: 'bengaluru', 
    name: 'Bengaluru', 
    state: 'Karnataka',
    count: '420+ Properties', 
    avgPrice: '₹ 18,200 / sq.ft',
    growthRate: '+15.8% YoY',
    rentalYield: '5.6% p.a.',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    description: 'The premier innovation hub of India where cosmopolitan demand in Indiranagar, Koramangala, and North Bengaluru drives unmatched real estate appreciation.',
    popular: ['Indiranagar', 'Koramangala', 'Whitefield', 'Sadashivanagar', 'HSR Layout', 'Lavelle Road', 'Hebbal', 'Bellandur'],
    infrastructure: ['Metro Yellow & Blue Lines', 'Satellite Town Ring Road (STRR)', 'Aerospace SEZ Corridor']
  },
  { 
    id: 'hyderabad', 
    name: 'Hyderabad', 
    state: 'Telangana',
    count: '240+ Properties', 
    avgPrice: '₹ 15,400 / sq.ft',
    growthRate: '+18.5% YoY',
    rentalYield: '5.1% p.a.',
    image: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80',
    description: 'High-velocity luxury living in Jubilee Hills, Banjara Hills and high-rise panoramic penthouses surrounding the Financial District and Neopolis.',
    popular: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitec City', 'Madhapur', 'Financial District', 'Kokapet', 'Neopolis'],
    infrastructure: ['Regional Ring Road (RRR)', 'Airport Express Metro', 'Neopolis Trumpet Interchange']
  },
  { 
    id: 'coimbatore', 
    name: 'Coimbatore', 
    state: 'Tamil Nadu',
    count: '90+ Properties', 
    avgPrice: '₹ 9,500 / sq.ft',
    growthRate: '+10.2% YoY',
    rentalYield: '4.5% p.a.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'The Manchester of South India offering serene gated villas along Avinashi Road and heritage colonial bungalows along the iconic Race Course promenade.',
    popular: ['Race Course', 'RS Puram', 'Avinashi Road', 'Saibaba Colony', 'Trichy Road', 'Saravanampatti'],
    infrastructure: ['Avinashi Elevated Expressway', 'Coimbatore Metro Phase 1', 'Defence Industrial Corridor']
  },
  { 
    id: 'pune', 
    name: 'Pune', 
    state: 'Maharashtra',
    count: '75+ Properties', 
    avgPrice: '₹ 12,900 / sq.ft',
    growthRate: '+11.8% YoY',
    rentalYield: '4.9% p.a.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Prestigious lifestyle in Koregaon Park and Kalyani Nagar coupled with thriving IT corridors in Hinjawadi and Kharadi.',
    popular: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Viman Nagar', 'Aundh', 'Hinjawadi Phase 1'],
    infrastructure: ['Pune Metro Extended Line', 'Ring Road Phase 1', 'Purandar International Airport']
  },
  { 
    id: 'irvine', 
    name: 'Irvine, California', 
    state: 'California, USA',
    count: '35+ Properties', 
    avgPrice: '$ 850 / sq.ft',
    growthRate: '+8.4% YoY',
    rentalYield: '5.2% p.a.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Our cross-border gateway in Orange County, California delivering tailored real estate investments, tax compliance, and diaspora portfolio management.',
    popular: ['Turtle Rock', 'Woodbury', 'Portola Springs', 'Oak Creek', 'Newport Beach Corridor'],
    infrastructure: ['Irvine Great Park Growth', 'Spectrum Tech Expansion', 'Orange County Transit Rail']
  }
];

export const PROPERTY_TYPES = [
  'All Types',
  'Flat / Apartment',
  'Independent House / Villa',
  'Luxury Penthouse',
  'Commercial Office',
  'Retail Showroom',
  'Residential Land / Plot',
  'Commercial Land',
  'Warehouse / Industrial'
];

export const BUDGET_RANGES_BUY = [
  { label: 'Any Budget', min: 0, max: Infinity },
  { label: 'Under ₹1 Cr', min: 0, max: 10000000 },
  { label: '₹1 Cr – ₹3 Cr', min: 10000000, max: 30000000 },
  { label: '₹3 Cr – ₹5 Cr', min: 30000000, max: 50000000 },
  { label: '₹5 Cr – ₹10 Cr', min: 50000000, max: 100000000 },
  { label: '₹10 Cr – ₹25 Cr', min: 100000000, max: 250000000 },
  { label: '₹25 Cr +', min: 250000000, max: Infinity }
];

export const BUDGET_RANGES_RENT = [
  { label: 'Any Rent', min: 0, max: Infinity },
  { label: 'Under ₹50,000 / mo', min: 0, max: 50000 },
  { label: '₹50,000 – ₹1 Lakh / mo', min: 50000, max: 100000 },
  { label: '₹1 Lakh – ₹2.5 Lakh / mo', min: 100000, max: 250000 },
  { label: '₹2.5 Lakh – ₹5 Lakh / mo', min: 250000, max: 500000 },
  { label: '₹5 Lakh + / mo', min: 500000, max: Infinity }
];

export const REALTORS = [
  {
    id: 'r1',
    name: 'C. Suresh Reddy',
    designation: 'Vice Chairman & Senior Managing Director',
    experience: '32+ Years Experience',
    specialization: 'High-Value Commercial & Ultra-Luxury Prime Assets',
    phone: '+91 98400 12345',
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
    specialization: 'NRI Portfolio Advisory, Luxury Estates & Gated Villas',
    phone: '+91 98402 33445',
    email: 'nirupama@hanureddyrealty.com',
    location: 'Chennai / Irvine, California',
    city: 'chennai',
    listingsCount: 36,
    awards: 'Global NRI Trusted Fiduciary Award 2025',
    languages: 'English, Telugu, Tamil',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Directs global NRI investments, cross-border property transactions and luxury residential developments in India and the US.'
  },
  {
    id: 'r3',
    name: 'K. S. Narayanan',
    designation: 'Senior Vice President - Commercial Leasing',
    experience: '24+ Years Experience',
    specialization: 'Corporate IT Parks, Grade-A Offices & Logistics',
    phone: '+91 98410 78901',
    email: 'narayanan@hanureddyrealty.com',
    location: 'OMR / Guindy Hub, Chennai',
    city: 'chennai',
    listingsCount: 42,
    awards: 'Top Commercial Dealmaker 2024',
    languages: 'English, Tamil, Hindi, Malayalam',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Advising Fortune 500 tech firms, multinational banks, and logistics giants in institutional acquisitions and multi-floor leasing.'
  },
  {
    id: 'r4',
    name: 'Rohit Balakrishnan',
    designation: 'Regional Director - Bengaluru Operations',
    experience: '18+ Years Experience',
    specialization: 'Prime Bengaluru Residences & Tech Corridor Land',
    phone: '+91 98450 67890',
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
    designation: 'Principal Advisor - Hyderabad Premium Residences',
    experience: '14+ Years Experience',
    specialization: 'Banjara & Jubilee Hills Mansions, Financial District',
    phone: '+91 98490 11223',
    email: 'ananya@hanureddyrealty.com',
    location: 'Banjara Hills, Hyderabad',
    city: 'hyderabad',
    listingsCount: 29,
    awards: 'Hyderabad Luxury Specialist of the Year',
    languages: 'English, Telugu, Hindi, Marathi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Renowned for discreet, high-trust advisory for family offices, founders, and industrialists across Hyderabad prime belts.'
  },
  {
    id: 'r6',
    name: 'Venkatesh Raghavan',
    designation: 'Senior Consultant - Joint Ventures & Land Acquisition',
    experience: '20+ Years Experience',
    specialization: 'Land Monetization, JV Structuring, Clear Title Diligence',
    phone: '+91 98408 99887',
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
    id: 'HR-CH-01',
    title: 'Ultra-Luxury 4 BHK Sky Residence in Boat Club',
    tagline: 'Exclusive Waterfront Living in Chennai’s Most Prestigious Enclave',
    listingType: 'buy',
    propertyType: 'Flat / Apartment',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Boat Club, RA Puram',
    address: 'Turnbulls Road, Boat Club Area, Chennai - 600028',
    price: 145000000,
    priceFormatted: '₹ 14.50 Cr',
    pricePerSqft: '₹ 32,500 / sq.ft',
    areaSqft: 4460,
    bhk: '4 BHK',
    bathrooms: 5,
    carparks: 3,
    facing: 'North-East',
    floor: '8th of 12 Floors',
    furnishing: 'Italian Marble, Fully Fitted Modular Kitchen & VRV Air-Conditioning',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private elevator opening directly into personal foyer',
      '100% Vastu compliant with serene Adyar river views',
      'Clubhouse with heated lap pool, concierge, and gym',
      'Zero litigation title thoroughly vetted by Hanu Reddy Legal Team',
      'Triple basement covered car parking with EV charger point'
    ],
    amenities: ['Private Elevator', 'Swimming Pool', 'Concierge Service', 'VRV AC', 'EV Charging', '24/7 Security', 'Gymnasium', 'Landscaped Garden'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CH-02',
    title: 'Contemporary Seafront Villa in ECR Golden Beach',
    tagline: 'Magnificent 5 BHK Beachfront Sanctuary with Private Pool',
    listingType: 'buy',
    propertyType: 'Independent House / Villa',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'East Coast Road (ECR), Injambakkam',
    address: 'Golden Beach Boulevard, ECR, Chennai - 600115',
    price: 88500000,
    priceFormatted: '₹ 8.85 Cr',
    pricePerSqft: '₹ 15,250 / sq.ft',
    areaSqft: 5800,
    landArea: '2.5 Grounds (6,000 sq.ft land)',
    bhk: '5 BHK',
    bathrooms: 6,
    carparks: 4,
    facing: 'East Facing Bay View',
    furnishing: 'Designer Semi-Furnished with Private Deck',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Direct beach access walkway within gated community',
      'Private infinity swimming pool & expansive rooftop barbecue deck',
      'Solar powered backup and smart home automation system',
      'Clear freehold patta land with clear documentation'
    ],
    amenities: ['Private Pool', 'Beach Access', 'Smart Home', 'Solar Backup', 'Servant Quarters', 'Home Theater', 'Lush Lawns'],
    agent: REALTORS[1]
  },
  {
    id: 'HR-BL-03',
    title: 'Penthouse Duplex in Indiranagar 100ft Road Belt',
    tagline: 'Super-Luxury 4 BHK with 360° Skyline Views & Terrace Garden',
    listingType: 'buy',
    propertyType: 'Luxury Penthouse',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    locality: 'Indiranagar 12th Main',
    address: '12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    price: 64000000,
    priceFormatted: '₹ 6.40 Cr',
    pricePerSqft: '₹ 16,800 / sq.ft',
    areaSqft: 3810,
    bhk: '4 BHK',
    bathrooms: 4,
    carparks: 2,
    facing: 'North Facing',
    floor: '4th & 5th (Duplex Penthouse)',
    furnishing: 'Fully Furnished with Custom Teak & Imported German Fittings',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: false,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '1,200 sq.ft private landscaped open-to-sky terrace',
      'Walking distance to top gourmet dining and metro station',
      'A-Khata, OC/CC received, 100% compliant property',
      'Ultra high rental yield for prime expat leasing'
    ],
    amenities: ['Terrace Garden', 'Clubhouse', 'Power Backup', 'Security 24/7', 'Gym', 'Automated Curtains', 'Italian Kitchen'],
    agent: REALTORS[3]
  },
  {
    id: 'HR-HY-04',
    title: 'Palatial Gated Villa in Jubilee Hills Road No. 36',
    tagline: 'Rare Architectural Masterpiece in Hyderabad’s Millionaire Belt',
    listingType: 'buy',
    propertyType: 'Independent House / Villa',
    city: 'hyderabad',
    cityName: 'Hyderabad',
    locality: 'Jubilee Hills',
    address: 'Road No. 36, Jubilee Hills, Hyderabad - 500033',
    price: 215000000,
    priceFormatted: '₹ 21.50 Cr',
    pricePerSqft: '₹ 28,600 / sq.ft',
    areaSqft: 7500,
    landArea: '700 sq. yards plot',
    bhk: '5 BHK',
    bathrooms: 6,
    carparks: 5,
    facing: 'East Facing',
    furnishing: 'Designer Furnished with Private Spa & Home Theater',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private temperature-controlled indoor pool and jacuzzi',
      'Acoustically treated 12-seater 4K Dolby Atmos private cinema',
      'Dual master suites with walk-in wardrobes and marble ensuites',
      'Prestigious neighborhood housing top business leaders and diplomats'
    ],
    amenities: ['Private Spa', 'Dolby Cinema', 'Indoor Pool', 'Smart Lighting', 'Guard House', 'Italian Marble', 'Landscaped Courtyard'],
    agent: REALTORS[4]
  },
  {
    id: 'HR-CH-05',
    title: 'Modern 3 BHK in Kasturi Rangan Road, Alwarpet',
    tagline: 'Prime Heart of Chennai with Leafy Avenues and High Privacy',
    listingType: 'buy',
    propertyType: 'Flat / Apartment',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Alwarpet',
    address: 'Kasturi Rangan Road, Alwarpet, Chennai - 600018',
    price: 36500000,
    priceFormatted: '₹ 3.65 Cr',
    pricePerSqft: '₹ 18,700 / sq.ft',
    areaSqft: 1950,
    bhk: '3 BHK',
    bathrooms: 3,
    carparks: 2,
    facing: 'North Facing',
    floor: '3rd of 5 Floors (Boutique Single Apartment per Floor)',
    furnishing: 'Semi-Furnished with Premium Teak Woodwork',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: false,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Boutique low-density community with only 5 bespoke apartments',
      'UDS (Undivided Share of Land) of over 1,020 sq.ft',
      'Surrounded by Chennai’s finest cultural centers, schools & cafes',
      'Complete title verification by Hanu Reddy Legal advisory'
    ],
    amenities: ['Generator Backup', 'Security', 'Covered Parking', 'High-Speed Lift', 'Piped Gas', 'Rainwater Harvesting'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CH-06',
    title: 'Grade-A Commercial Office Floor on Anna Salai / Guindy',
    tagline: 'Plug-and-Play Premium Corporate Headquarters with LEED Gold Rating',
    listingType: 'commercial',
    propertyType: 'Commercial Office',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Guindy / Anna Salai',
    address: 'Anna Salai, Mount Road Arterial Hub, Chennai - 600032',
    price: 185000000,
    priceFormatted: '₹ 18.50 Cr',
    pricePerSqft: '₹ 15,400 / sq.ft',
    areaSqft: 12000,
    rentPerMonth: 950000,
    rentFormatted: '₹ 9.50 Lakh / mo',
    bhk: 'Commercial (140 Workstations + 6 Cabins + Boardroom)',
    bathrooms: 8,
    carparks: 12,
    facing: 'Main Road Frontage',
    floor: '4th Floor',
    furnishing: 'Fully Furnished Plug & Play IT / Corporate Fitout',
    status: 'Ready for Immediate Occupation',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '140 ergonomic workstations, 6 executive cabins, 2 boardrooms & cafeteria',
      '100% DG power backup and central chilled water air conditioning',
      'Proximity to Metro station and Chennai International Airport (15 mins)',
      'Substantial return on investment with pre-leased blue-chip tenant option'
    ],
    amenities: ['100% DG Backup', 'Central AC', 'Access Control', 'Cafeteria', 'Visitor Parking', 'BMS Automation', 'Fire Sprinklers'],
    agent: REALTORS[2]
  },
  {
    id: 'HR-BL-07',
    title: 'Luxury 3 BHK Residence in Koramangala 4th Block',
    tagline: 'High-End Tree-Lined Residential Oasis in South Bengaluru',
    listingType: 'rent',
    propertyType: 'Flat / Apartment',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    locality: 'Koramangala 4th Block',
    address: '80 Feet Road, 4th Block, Koramangala, Bengaluru - 560034',
    price: 32000000,
    priceFormatted: '₹ 1.25 Lakh / mo',
    rentPerMonth: 125000,
    rentFormatted: '₹ 1.25 Lakh / mo',
    securityDeposit: '₹ 6.0 Lakhs',
    pricePerSqft: '₹ 52 / sq.ft rent',
    areaSqft: 2400,
    bhk: '3 BHK',
    bathrooms: 3,
    carparks: 2,
    facing: 'East Facing',
    floor: '3rd of 4 Floors',
    furnishing: 'Fully Furnished with Scandinavian Furniture & White Goods',
    status: 'Available for Rent',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Fully equipped with Bosch appliances, Smart TVs, and memory foam mattresses',
      '24/7 dedicated security, lift, and covered basement parking',
      'Ideal for senior executives, tech founders, and expatriates'
    ],
    amenities: ['Fully Furnished', 'Power Backup', 'Security', 'Covered Parking', 'Modular Kitchen', 'Balcony Garden'],
    agent: REALTORS[3]
  },
  {
    id: 'HR-CH-08',
    title: 'Prime 2-Ground Residential Plot in Anna Nagar West',
    tagline: 'Clear Title Corner Plot in Peaceful Established Sector',
    listingType: 'plots',
    propertyType: 'Residential Land / Plot',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Anna Nagar West Extension',
    address: '4th Main Road, Anna Nagar West, Chennai - 600101',
    price: 52000000,
    priceFormatted: '₹ 5.20 Cr',
    pricePerSqft: '₹ 10,833 / sq.ft',
    areaSqft: 4800,
    landArea: '2.0 Grounds (4,800 sq.ft)',
    bhk: 'Residential Plot (G+3 Approved Zone)',
    bathrooms: 0,
    carparks: 0,
    facing: 'North-East Corner Plot with 40ft & 30ft Roads',
    furnishing: 'Vacant Clear Land with Boundary Wall & Gate',
    status: 'Ready for Immediate Construction',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: false,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Exceptional corner frontage suitable for bespoke luxury villa or stilt+4 apartments',
      'CMDA approved layout, 100% clear parent documents dating back 40 years',
      'Excellent sweet water aquifer at just 25 feet depth',
      'Close to prominent schools, hospitals, and Metro corridor'
    ],
    amenities: ['Corner Plot', 'CMDA Approved', 'Clear Title', 'Sweet Ground Water', 'Gated Sector', '40ft Wide Road'],
    agent: REALTORS[5]
  },
  {
    id: 'HR-CB-09',
    title: 'Luxury 4 BHK Colonial Bungalow in Race Course',
    tagline: 'Prestigious Heritage Lifestyle in Coimbatore’s Top Promenade',
    listingType: 'buy',
    propertyType: 'Independent House / Villa',
    city: 'coimbatore',
    cityName: 'Coimbatore',
    locality: 'Race Course Road',
    address: 'Race Course Promenade, Coimbatore - 641018',
    price: 49500000,
    priceFormatted: '₹ 4.95 Cr',
    pricePerSqft: '₹ 11,000 / sq.ft',
    areaSqft: 4500,
    landArea: '1.8 Grounds (4,320 sq.ft land)',
    bhk: '4 BHK',
    bathrooms: 4,
    carparks: 3,
    facing: 'East Facing',
    furnishing: 'Semi-Furnished with Polished Rosewood Interiors',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Situated right on the iconic Race Course walking boulevard',
      'Expansive landscaped gardens with mature fruit trees and verandas',
      'Highest residential tranquility in Western Tamil Nadu'
    ],
    amenities: ['Heritage Architecture', 'Large Garden', 'Covered Porch', 'Servant Quarters', 'Solar Heating'],
    agent: REALTORS[0]
  },
  {
    id: 'HR-CH-10',
    title: 'Grand 4 BHK Waterfront Luxury Rental in ECR Akkarai',
    tagline: 'Expansive Sea View Villa with Private Plunge Pool & Deck',
    listingType: 'rent',
    propertyType: 'Independent House / Villa',
    city: 'chennai',
    cityName: 'Chennai',
    locality: 'Akkarai, ECR',
    address: 'Sea Breeze Enclave, Akkarai, ECR, Chennai - 600119',
    price: 250000,
    priceFormatted: '₹ 2.50 Lakh / mo',
    rentPerMonth: 250000,
    rentFormatted: '₹ 2.50 Lakh / mo',
    securityDeposit: '₹ 15.0 Lakhs',
    pricePerSqft: '₹ 50 / sq.ft rent',
    areaSqft: 5000,
    bhk: '4 BHK',
    bathrooms: 5,
    carparks: 3,
    facing: 'East Facing Ocean View',
    floor: 'G + 2 Floors Villa',
    furnishing: 'Fully Furnished with Imported Luxury Decor',
    status: 'Available Immediately',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private direct sea-facing sundeck and plunge pool',
      '24/7 armed security in gated luxury villa community',
      'Servant quarters, backup genset, and water filtration plant'
    ],
    amenities: ['Sea View', 'Plunge Pool', 'Fully Furnished', 'Genset 100%', 'Private Garden', 'Pet Friendly'],
    agent: REALTORS[1]
  },
  {
    id: 'HR-HY-11',
    title: 'High-Rise 4 BHK Sky Mansion in Kokapet / Neopolis',
    tagline: '54th Floor Panoramic Skyline Living with Private Terrace Pool',
    listingType: 'buy',
    propertyType: 'Luxury Penthouse',
    city: 'hyderabad',
    cityName: 'Hyderabad',
    locality: 'Kokapet, Neopolis',
    address: 'Neopolis Golden Mile, Kokapet, Hyderabad - 500075',
    price: 98000000,
    priceFormatted: '₹ 9.80 Cr',
    pricePerSqft: '₹ 15,800 / sq.ft',
    areaSqft: 6200,
    bhk: '4 BHK',
    bathrooms: 5,
    carparks: 4,
    facing: 'East Facing ORR Views',
    floor: '54th Floor',
    furnishing: 'Bare-shell with Italian Marble finish & Smart Automation',
    status: 'Possession in Q4 2026',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Overlooks Gandipet lake and Hyderabad glittering IT skyline',
      'Exclusive 7-star clubhouse with helipad and indoor golf simulator',
      'Direct connectivity to Financial District and Airport Express'
    ],
    amenities: ['Helipad', 'Golf Simulator', 'Sky Lounge', 'Infinity Pool', 'Valet Parking', 'Concierge 24/7'],
    agent: REALTORS[4]
  },
  {
    id: 'HR-US-12',
    title: 'Modern Single-Family Estate in Irvine Spectrum / Woodbury',
    tagline: 'Top School District Residence with California Sunshine Living',
    listingType: 'buy',
    propertyType: 'Independent House / Villa',
    city: 'irvine',
    cityName: 'Irvine, USA',
    locality: 'Woodbury, Irvine, CA',
    address: 'Vintage Way, Woodbury, Irvine, CA 92620, USA',
    price: 245000000,
    priceFormatted: '$ 2.85 Million (₹ 24.5 Cr)',
    pricePerSqft: '$ 810 / sq.ft',
    areaSqft: 3520,
    bhk: '5 BHK',
    bathrooms: 5,
    carparks: 2,
    facing: 'South Facing',
    furnishing: 'Hardwood Floors, Sub-Zero & Wolf Kitchen Appliances',
    status: 'Ready to Move',
    reraApproved: true,
    exclusive: true,
    verified: true,
    virtualTourAvailable: true,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Top-rated 10/10 Irvine Unified School District',
      'Private courtyard, outdoor BBQ kitchen and solar panels included',
      'Managed seamlessly for NRI investors with guaranteed expat rental yield'
    ],
    amenities: ['HOA Pool', 'Tennis Courts', 'Solar Panels', 'Sub-Zero Appliances', 'EV Charger', 'Community Parks'],
    agent: REALTORS[1]
  }
];

export const SERVICES = [
  {
    id: 'residential-sales',
    title: 'Residential Buying & Selling',
    shortDesc: 'Guiding you through every step of acquiring or monetizing luxury homes, apartments, villas, and residential plots with verified titles.',
    fullDesc: 'With over three decades of market mastery, Hanu Reddy Realty provides an uncompromising fiduciary standard for purchasing and divesting prime residential properties. We curate exclusive off-market estates, represent discerning sellers with complete privacy, and ensure ironclad 40-point legal title clearances.',
    features: [
      'Exclusively curated luxury & prime listings',
      'Rigorous 40-point title & legal due diligence',
      'Realistic property valuation & market pricing',
      'End-to-end registration & stamp duty assistance',
      'Confidential high-net-worth individual (HNI) transactions',
      'Dedicated senior realtor representation'
    ],
    targetClients: 'Homebuyers, Ultra-HNIs, Discerning Property Sellers, Family Offices',
    icon: 'Home'
  },
  {
    id: 'commercial-leasing',
    title: 'Commercial Real Estate & Leasing',
    shortDesc: 'Connecting corporate enterprises, retailers, and tech leaders with prime Grade-A office buildings, tech parks, and logistics warehouses.',
    fullDesc: 'From multinational corporate expansions to high-street retail acquisition, our commercial advisory division delivers data-driven intelligence on rental yields, floor plate efficiencies, and tenant covenants across South India’s major IT and business corridors.',
    features: [
      'Grade-A corporate office space leasing',
      'Retail showroom & flagship store acquisition',
      'Industrial warehouses & built-to-suit campuses',
      'Pre-leased investment opportunities with 8-10% yields',
      'Lease structuring, lock-in terms & escalation advisory',
      'Fitout coordination & property handover management'
    ],
    targetClients: 'Multinational Corporations, IT Giants, Retail Chains, Real Estate Funds',
    icon: 'Building2'
  },
  {
    id: 'nri-services',
    title: 'NRI Property Management & Advisory',
    shortDesc: 'Specialized fiduciary care for non-resident Indians: from remote property acquisition and tenant leasing to maintenance and sale repatriation.',
    fullDesc: 'Operating from our regional headquarters in Chennai and international hub in Irvine, California, we serve the global Indian diaspora with turnkey asset stewardship. We eliminate the stress of cross-border real estate management through Power of Attorney facilitation, FEMA compliance, and regular live video audits.',
    features: [
      'Complete remote management & Power of Attorney guidance',
      'Vetted corporate & expat tenant placement with rent collection',
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
    title: 'Joint Ventures & Land Monetization',
    shortDesc: 'Bridging prominent landowners with top-tier Grade-A developers to maximize returns through balanced, equitable development agreements.',
    fullDesc: 'Monetizing prime land requires nuanced expertise in FAR/FSI regulations, revenue sharing matrices, and protective legal covenants. We have successfully closed over 85 joint developments, ensuring land owners receive maximum capital appreciation while mitigating all execution and delay risks.',
    features: [
      'Careful builder track record & balance sheet verification',
      'Equitable sharing ratio negotiations & structuring',
      'Legal drafting & RERA documentation protection',
      'Monitoring project milestones until final handover of units',
      'Clear title documentation & government sanction vetting',
      'Tax optimization advice for joint development agreements'
    ],
    targetClients: 'Ancestral Landowners, Corporate Estates, Trust & Institutional Landholders',
    icon: 'Handshake'
  },
  {
    id: 'legal-valuation',
    title: 'Title Verification & Property Valuation',
    shortDesc: 'Independent, transparent due diligence and scientific asset valuations powered by our in-house legal experts and 30+ year sales registry.',
    fullDesc: 'Our benchmark 40-Point Title Audit is renowned across the financial and legal community for discovering latent encumbrances, revenue record mismatches, and succession ambiguities before money changes hands. We protect your generational wealth with zero margin for error.',
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
    id: 'relocation-corporate',
    title: 'Expat & Corporate Relocation',
    shortDesc: 'Turnkey relocation solutions for multinational leadership, embassy diplomats, and senior executives moving to South India’s key hubs.',
    fullDesc: 'Relocating to a new metropolis should be seamless and exhilarating. Our relocation concierge caters to senior executives, managing directors, and consular staff with tailored neighborhood orientations, international school alignments, and expat-grade furnished residences.',
    features: [
      'Bespoke neighbourhood orientation and school proximity mapping',
      'Pre-negotiated expat-standard rental leases with diplomatic clauses',
      'Move-in readiness, utility setup and broadband concierge support',
      'Dedicated single-point relationship manager for ongoing tenure',
      'Cross-cultural settling-in assistance for expatriate families'
    ],
    targetClients: 'Global Diplomats, Foreign Consulates, C-Suite Leaders, Expat Executives',
    icon: 'Compass'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Dr. Sandeep Raghavan & Dr. Malini',
    role: 'Property Sellers — Boat Club, Chennai',
    quote: 'Selling our family property in Boat Club was an emotional and high-stakes decision. Hanu Reddy Realty brought discerning, qualified buyers and managed every single legal formality with utmost transparency. The transaction concluded smoothly in record time.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    type: 'Seller Testimonial'
  },
  {
    id: 't2',
    name: 'Priya & Vikram Natarajan',
    role: 'NRI Homeowners — Bay Area, California & Indiranagar, Bengaluru',
    quote: 'As NRIs living in California, we were anxious about managing our property in Bengaluru. Nirupama Reddy and her team took over total management, secured an exceptional MNC tenant, and handled all tax and legal paperwork flawlessly. True peace of mind!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    type: 'NRI Client'
  },
  {
    id: 't3',
    name: 'K. R. Chandrasekaran',
    role: 'Landowner — Joint Development, Anna Nagar',
    quote: 'Hanu Reddy Realty helped our family structure a joint development on our 3-ground ancestral parcel with one of Chennai’s premier builders. Their experience in drafting safeguard clauses and ensuring our interest protected was simply unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    type: 'Joint Venture Partner'
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
    title: '150+ Licensed Realtors',
    desc: 'Built the region’s largest full-time, institutional-grade real estate advisor team, transacting landmark commercial campuses and premier residential addresses.'
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
        phone: '+91 44 4399 9000 / +91 80560 35603',
        email: 'chennai@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Alwarpet+Chennai'
      },
      {
        name: 'Anna Nagar Branch',
        address: 'XV-G2, 2nd Avenue, Near Roundtana, Anna Nagar, Chennai - 600040',
        phone: '+91 44 2626 5500',
        email: 'annanagar@hanureddyrealty.com',
        timing: 'Mon – Sat: 9:30 AM – 6:30 PM',
        mapQuery: 'Hanu+Reddy+Realty+Anna+Nagar+Chennai'
      },
      {
        name: 'OMR & ECR Coastal Hub',
        address: 'Plot 12, Rajiv Gandhi Salai (OMR), Perungudi, Chennai - 600096',
        phone: '+91 44 2496 1122',
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
        phone: '+91 80 4123 7890 / +91 98450 67890',
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
        phone: '+91 40 2335 6789 / +91 98490 11223',
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
        phone: '+91 422 222 1890 / +91 98400 12345',
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
        phone: '+1 (949) 302-8877',
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
    title: 'Senior Luxury Residential Consultant',
    location: 'Chennai (Alwarpet / Boat Club)',
    experience: '5+ Years in Prime Real Estate',
    type: 'Full-Time',
    compensation: 'High Base + Uncapped High-Yield Commission',
    overview: 'Represent high-net-worth individuals and corporate leaders in buying and selling premier residential homes and penthouses.'
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
