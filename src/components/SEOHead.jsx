import { useEffect } from 'react';

const PAGE_SEO_DATA = {
  home: {
    title: 'Hanu Reddy Realty® | #1 Commercial Real Estate, Office Space & Tech Parks in Chennai, Bengaluru, Hyderabad',
    description: 'Hanu Reddy Realty — trusted real estate leadership since 1993. Buy, sell, lease Grade-A tech parks, managed office suites, pre-leased corporate assets (8.5-10.5% ROI), and flexible workspaces with 100% zero-litigation legal title audit.',
    canonical: 'https://hanureddyrealty.com/',
    ogImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&h=630&q=85',
    keywords: 'Commercial Real Estate Chennai, Commercial Office Space Bangalore, IT Park for Lease Hyderabad, Pre Leased Commercial Property High ROI'
  },
  buy: {
    title: 'Buy Grade-A Commercial Office Spaces & Pre-Leased Towers | Hanu Reddy Realty®',
    description: 'Explore high-yield pre-leased commercial office floors (8.5% - 10.5% net yield), standalone IT towers, and vetted commercial land for sale across Chennai, Bengaluru, and Hyderabad.',
    canonical: 'https://hanureddyrealty.com/#buy',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Buy Commercial Property, Pre-Leased Office Space, IT Tech Park For Sale, Commercial Real Estate Investment India, Commercial Land Chennai Bangalore'
  },
  rent: {
    title: 'Lease Commercial Office Space & Managed Coworking Hubs | Hanu Reddy Realty®',
    description: 'Find premium corporate office leases, plug-and-play managed workspaces, and enterprise coworking desks with flexible terms and zero brokerage markups.',
    canonical: 'https://hanureddyrealty.com/#rent',
    ogImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Commercial Office For Rent, Office Lease Chennai, Managed Office Suites Bangalore, Coworking Spaces Hyderabad, Corporate Office Rental'
  },
  calq: {
    title: 'CalQ™ Commercial Office Space & Rent Calculator | Hanu Reddy Realty®',
    description: 'Calculate your exact office space requirements by headcount, team seating density, and collaboration zones. Compare monthly leasing vs capital purchase costs instantly.',
    canonical: 'https://hanureddyrealty.com/#calq',
    ogImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Office Space Calculator, CalQ Commercial Real Estate, Office Seat Calculator, Commercial Rent Estimator, Workstation Area Planner'
  },
  sell: {
    title: 'List Commercial Office or Tech Park | Landlord Portal | Hanu Reddy Realty®',
    description: 'Monetize your commercial assets with fiduciary discretion. Connect with 25,000+ institutional tenants, MNCs, and verified HNI buyers with zero upfront registration fees.',
    canonical: 'https://hanureddyrealty.com/#sell',
    ogImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'List Commercial Space, Sell IT Park, Commercial Landlord Brokerage, Corporate Tenant Sourcing, Real Estate Monetization'
  },
  services: {
    title: 'Commercial Advisory, 40-Point Title Audit & NRI Desk | Hanu Reddy Realty®',
    description: 'Comprehensive 360° commercial advisory: 40-Point parent deed title verification, corporate workspace strategy, and turnkey cross-border NRI asset stewardship.',
    canonical: 'https://hanureddyrealty.com/#services',
    ogImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: '40 Point Title Audit, Zero Litigation Due Diligence, NRI Real Estate Management, Commercial Property Advisory India'
  },
  agents: {
    title: 'Senior Commercial Realtors Directory | 150+ Certified Advisors | Hanu Reddy Realty®',
    description: 'Meet our certified commercial realty advisors with decades of micro-market intelligence, corporate lease negotiation proficiency, and fiduciary ethics.',
    canonical: 'https://hanureddyrealty.com/#agents',
    ogImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Commercial Real Estate Brokers Chennai, CRE Consultants Bangalore, Commercial Property Agents Hyderabad, Hanu Reddy Realtors'
  },
  cities: {
    title: 'Commercial Hubs Network: Chennai, Bengaluru, Hyderabad, Irvine | Hanu Reddy Realty®',
    description: 'Explore Grade-A commercial corridors across South India and the USA Hub in Irvine, California. Localized micro-market vacancy, rental rates, and tech clusters.',
    canonical: 'https://hanureddyrealty.com/#cities',
    ogImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Chennai OMR Tech Hub, Bangalore Whitefield CRE, Hyderabad HITEC City Office Space, Coimbatore Commercial, Irvine California Real Estate'
  },
  about: {
    title: 'Our 30-Year Heritage, Founders & Fiduciary Trust | Hanu Reddy Realty®',
    description: 'Founded in 1993, Hanu Reddy Realty revolutionized Indian real estate with institutional ethics, 100% legal title purity, and ₹10,000+ Crores in closed corporate transactions.',
    canonical: 'https://hanureddyrealty.com/#about',
    ogImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Hanu Reddy Founder, Hanu Reddy Realty History, 30 Years Real Estate Excellence, Zero Litigation Realty Agency'
  },
  contact: {
    title: 'Contact Regional Hubs & Central Directorate | Hanu Reddy Realty®',
    description: 'Get in touch with our signature offices in Chennai, Bengaluru, Hyderabad, Coimbatore, and Irvine (California) or reach our 24/7 central client desk.',
    canonical: 'https://hanureddyrealty.com/#contact',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Hanu Reddy Realty Contact, Chennai Alwarpet Head Office, Helpline Phone Number, Real Estate Consultation Desk'
  },
  careers: {
    title: 'Careers & Realtor Academy | Join India’s Premier CRE Advisory | Hanu Reddy Realty®',
    description: 'Build an extraordinary career with India’s most prestigious commercial real estate advisory. Comprehensive professional training, institutional ethics, and uncapped wealth.',
    canonical: 'https://hanureddyrealty.com/#careers',
    ogImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'Real Estate Jobs Chennai, Commercial Property Broker Career, Hanu Reddy Realtor Academy, Real Estate Advisory Hiring'
  }
};

export default function SEOHead({ currentPage = 'home' }) {
  useEffect(() => {
    const seo = PAGE_SEO_DATA[currentPage] || PAGE_SEO_DATA.home;

    // 1. Update Document Title
    document.title = seo.title;

    // 2. Helper to set/update meta tag
    const updateMeta = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    updateMeta('description', seo.description);
    updateMeta('keywords', seo.keywords);

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // 5. Update Open Graph Tags
    updateMeta('og:title', seo.title, true);
    updateMeta('og:description', seo.description, true);
    updateMeta('og:url', seo.canonical, true);
    updateMeta('og:image', seo.ogImage, true);

    // 6. Update Twitter Tags
    updateMeta('twitter:title', seo.title);
    updateMeta('twitter:description', seo.description);
    updateMeta('twitter:image', seo.ogImage);

    // 7. Inject Dynamic Breadcrumb Structured Data for current page
    const breadcrumbJsonId = 'dynamic-breadcrumb-schema';
    let scriptEl = document.getElementById(breadcrumbJsonId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = breadcrumbJsonId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const pageLabel = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://hanureddyrealty.com/'
        },
        ...(currentPage !== 'home' ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': pageLabel,
          'item': seo.canonical
        }] : [])
      ]
    };
    scriptEl.textContent = JSON.stringify(breadcrumbSchema);

  }, [currentPage]);

  return null;
}
