import React from 'react';
import HeroSearch from '../components/HeroSearch';
import StatsRibbon from '../components/StatsRibbon';
import FeaturedProperties from '../components/FeaturedProperties';
import CityExplorer from '../components/CityExplorer';
import ServicesSection from '../components/ServicesSection';
import LegacyOdyssey from '../components/LegacyOdyssey';
import RealtorsSection from '../components/RealtorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import { ArrowRight, Sparkles, Building2, ShieldCheck, Users, Award } from 'lucide-react';

export default function HomePage({
  selectedCity,
  setSelectedCity,
  searchTab,
  setSearchTab,
  searchQuery,
  setSearchQuery,
  marketSegment,
  setMarketSegment,
  propertyType,
  setPropertyType,
  budgetRange,
  setBudgetRange,
  onPerformSearch,
  onSelectProperty,
  onOpenListProperty,
  onNavigatePage
}) {
  return (
    <div className="hanu-page-view hanu-home-page">
      {/* Hero with Search Bar */}
      <HeroSearch
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        marketSegment={marketSegment}
        setMarketSegment={setMarketSegment}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        budgetRange={budgetRange}
        setBudgetRange={setBudgetRange}
        onPerformSearch={onPerformSearch}
      />

      {/* Trust & Stats Ribbon */}
      <StatsRibbon />

      {/* Quick Navigation Cards Banner */}
      <section className="hanu-quick-nav-banner">
        <div className="container">
          <div className="hanu-quick-nav-grid">
            <div 
              className="hanu-quick-card"
              onClick={() => onNavigatePage('buy')}
            >
              <div className="quick-card-icon-wrap">
                <Building2 size={24} />
              </div>
              <div className="quick-card-content">
                <div className="quick-card-tag">Purchase</div>
                <h3>Explore Luxury Estates for Sale</h3>
                <p>Curated villas, sky mansions & verified plots across prime metros.</p>
                <div className="quick-card-link">
                  <span>Browse Buy Catalog</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div 
              className="hanu-quick-card"
              onClick={() => onNavigatePage('rent')}
            >
              <div className="quick-card-icon-wrap">
                <Sparkles size={24} />
              </div>
              <div className="quick-card-content">
                <div className="quick-card-tag">Rental & Lease</div>
                <h3>High-End Residences & Corporate Penthouses</h3>
                <p>Fully furnished expat-grade apartments with verified ownership.</p>
                <div className="quick-card-link">
                  <span>Browse Rental Catalog</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div 
              className="hanu-quick-card"
              onClick={() => onNavigatePage('sell')}
            >
              <div className="quick-card-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <div className="quick-card-content">
                <div className="quick-card-tag">Seller & Landlord Portal</div>
                <h3>List Your Prime Property with Hanu Reddy</h3>
                <p>Reach 25,000+ vetted buyers and global NRI investors with zero upfront fee.</p>
                <div className="quick-card-link">
                  <span>List Your Property</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div 
              className="hanu-quick-card"
              onClick={() => onNavigatePage('agents')}
            >
              <div className="quick-card-icon-wrap">
                <Users size={24} />
              </div>
              <div className="quick-card-content">
                <div className="quick-card-tag">Advisory</div>
                <h3>Consult Senior Managing Directors</h3>
                <p>Over 150+ licensed realtors with 30+ years of local market wisdom.</p>
                <div className="quick-card-link">
                  <span>Meet Our Realtors</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <FeaturedProperties
        selectedCity={selectedCity}
        searchQuery={searchQuery}
        propertyType={propertyType}
        onSelectProperty={onSelectProperty}
        onOpenListProperty={onOpenListProperty}
      />

      {/* City Explorer */}
      <CityExplorer
        onSelectCity={(cityId) => {
          setSelectedCity(cityId);
          onNavigatePage('buy');
        }}
      />

      {/* 360-degree Services */}
      <ServicesSection
        onOpenListProperty={onOpenListProperty}
        onSelectService={() => onNavigatePage('services')}
      />

      {/* Legacy & Founders Odyssey */}
      <LegacyOdyssey />

      {/* Senior Realtors Showcase */}
      <RealtorsSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Contact & Regional Branches Hub */}
      <ContactSection />
    </div>
  );
}
