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
  onOpenLeadModal,
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
                <div className="quick-card-tag">CRE Purchase & Yield</div>
                <h3>Grade-A Office Towers & Pre-Leased Assets</h3>
                <p>Institutional IT tech parks, 9.4% rental yield pre-leased floors & commercial land.</p>
                <div className="quick-card-link">
                  <span>Browse Commercial Buy</span>
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
                <div className="quick-card-tag">Flexible Workspaces & Flex</div>
                <h3>Coworking, Meeting Rooms & Managed Suites</h3>
                <p>On-demand day passes, hourly boardrooms, managed offices & virtual office GST registration.</p>
                <div className="quick-card-link">
                  <span>Browse Workspaces</span>
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
                <div className="quick-card-tag">Commercial Landlord Portal</div>
                <h3>List Your Commercial Space or Office Tower</h3>
                <p>Reach 25,000+ corporate enterprises, tech giants and institutional funds with zero upfront fee.</p>
                <div className="quick-card-link">
                  <span>List Commercial Space</span>
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
