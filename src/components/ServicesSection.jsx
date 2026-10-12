import React from 'react';
import { 
  Clock, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Rocket, 
  BadgePercent, 
  Headphones, 
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function ServicesSection({ onOpenListProperty, onSelectService }) {
  const features = [
    {
      id: 'flexibility',
      title: 'Freedom & Flexibility',
      desc: 'Rent by the hour, day, or month across India – without contracts.',
      icon: Clock,
      category: 'Hourly / Flex'
    },
    {
      id: 'instant',
      title: 'Instant Experience',
      desc: 'Book in under 3 minutes, with all amenities included.',
      icon: Zap,
      category: 'Instant Booking'
    },
    {
      id: 'pricing',
      title: 'Fair Pricing',
      desc: 'Best-price guarantee ensures affordability.',
      icon: ShieldCheck,
      category: 'Guaranteed Rates'
    },
    {
      id: 'network',
      title: 'Largest network',
      desc: 'More choices, more cities, instant availability',
      icon: Globe,
      category: 'Pan-India Footprint'
    },
    {
      id: 'startup',
      title: 'Startup Friendly',
      desc: 'We understand startups very deeply.',
      icon: Rocket,
      category: 'Agile & Scalable'
    },
    {
      id: 'brokerage',
      title: 'Zero Brokerage',
      desc: 'No markups and no brokerage. You get full value for your money.',
      icon: BadgePercent,
      category: 'Direct Value'
    },
    {
      id: 'advice',
      title: 'Tailored expert advice',
      desc: 'Data-driven, unbiased, and tailored to your growth',
      icon: Headphones,
      category: 'Dedicated Advisory'
    },
    {
      id: 'terms',
      title: 'Flexible Terms',
      desc: 'Add seats, upgrade plans, or switch locations without friction',
      icon: SlidersHorizontal,
      category: 'Zero Friction'
    }
  ];

  return (
    <section 
      id="services" 
      className="what-you-get-section"
      style={{
        backgroundImage: `url('/what-you-get-bg.jpg')`
      }}
    >
      {/* Warm Ambient Atmosphere Overlay matching GoFloaters wood & warm lights palette */}
      <div className="what-you-get-overlay" />

      <div className="container-wide what-you-get-container">
        
        {/* Top Header Row with Badge & Main Headline */}
        <div className="what-you-get-header">
          <div className="what-you-get-top-badge">
            <span className="badge-glow-dot">●</span>
            <span>ENTERPRISE AGILITY & MODERN WORKSPACES</span>
          </div>

          <TextAnimate animation="blurInUp" by="character" once as="h2" className="what-you-get-title">
            What You Get From Us
          </TextAnimate>
          
          <p className="what-you-get-subtitle">
            Experience friction-free workspace flexibility backed by 30+ years of Hanu Reddy fiduciary trust and pan-India commercial scale.
          </p>
        </div>

        {/* 8 Feature Cards Grid with GoFloaters Rounded Aesthetic */}
        <div className="what-you-get-grid">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="what-you-get-card"
                onClick={onOpenListProperty}
                role="button"
                tabIndex={0}
              >
                <div className="card-top-row">
                  <div className="what-you-get-icon-box">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <span className="card-micro-tag">{item.category}</span>
                </div>

                <h3 className="what-you-get-card-title">{item.title}</h3>
                <p className="what-you-get-card-desc">{item.desc}</p>
                
                <div className="card-hover-action">
                  <span>Explore options</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        </div>
    </section>
  );
}
