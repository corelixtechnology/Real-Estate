import React, { useState } from 'react';
import { MapPin, Bed, Bath, Car, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function FeaturedProperties({ 
  selectedCity, 
  filterCategory, 
  setFilterCategory, 
  searchQuery, 
  propertyType, 
  onSelectProperty,
  onOpenListProperty
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Prime Listings' },
    { id: 'buy', label: 'Exclusive Residential Buy' },
    { id: 'rent', label: 'Luxury Rentals' },
    { id: 'commercial', label: 'Commercial & Tech Parks' },
    { id: 'plots', label: 'Plots & Land' }
  ];

  // Filter properties based on city, tab, search query, and property type
  const filteredProperties = PROPERTIES.filter((prop) => {
    // City filter
    if (selectedCity && selectedCity !== 'all' && prop.city !== selectedCity) {
      return false;
    }

    // Category tab filter
    if (activeTab !== 'all' && prop.listingType !== activeTab) {
      return false;
    }

    // Property type filter
    if (propertyType && propertyType !== 'All Types' && prop.propertyType !== propertyType) {
      return false;
    }

    // Text query filter
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = prop.title.toLowerCase().includes(q);
      const matchLocality = prop.locality.toLowerCase().includes(q);
      const matchCity = prop.cityName.toLowerCase().includes(q);
      const matchType = prop.propertyType.toLowerCase().includes(q);
      if (!matchTitle && !matchLocality && !matchCity && !matchType) {
        return false;
      }
    }

    return true;
  });

  return (
    <section id="properties" className="properties-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-tag">
            <CheckCircle2 size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              100% VERIFIED EXCLUSIVE PORTFOLIO
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Featured Real Estate Collections
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Hand-picked prime residences, commercial landmarks, and approved plots thoroughly audited for 100% clear ownership.
          </TextAnimate>

        </div>


        {/* Filter Category Pills */}
        <div className="property-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="properties-cards-grid">
            {filteredProperties.map((property) => (
              <div key={property.id} className="property-card">
                {/* Image Container */}
                <div className="card-image-wrap" onClick={() => onSelectProperty(property)} style={{ cursor: 'pointer' }}>
                  <img src={property.images[0]} alt={property.title} className="card-img" />
                  
                  {/* Badges Top */}
                  <div className="card-badges-top">
                    {property.exclusive && (
                      <span className="badge-tag badge-exclusive">Exclusive</span>
                    )}
                    {property.verified && (
                      <span className="badge-tag badge-verified">Verified Title</span>
                    )}
                    <span className="badge-tag badge-type">{property.propertyType}</span>
                  </div>

                  {/* Price Banner Overlay */}
                  <div className="card-price-overlay">
                    <div>
                      <div className="card-price">{property.priceFormatted}</div>
                      <div className="card-price-sqft">{property.pricePerSqft}</div>
                    </div>
                    <div style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px' }}>
                      ID: {property.id}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="card-body">
                  <div className="card-location-row">
                    <MapPin size={14} />
                    <span>{property.locality}, {property.cityName}</span>
                  </div>

                  <h3 
                    className="card-title" 
                    onClick={() => onSelectProperty(property)}
                    style={{ cursor: 'pointer' }}
                  >
                    {property.title}
                  </h3>

                  {/* Specs Row */}
                  <div className="card-specs-grid">
                    <div className="spec-item">
                      <Bed size={15} />
                      <span>{property.bhk}</span>
                    </div>
                    <div className="spec-item">
                      <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>Sq.Ft:</span>
                      <span>{property.areaSqft.toLocaleString()}</span>
                    </div>
                    <div className="spec-item">
                      <Car size={15} />
                      <span>{property.carparks} Covered</span>
                    </div>
                  </div>

                  {/* Footer with Realtor & View Details */}
                  <div className="card-footer-agent">
                    <div className="agent-mini">
                      <img src={property.agent.image} alt={property.agent.name} className="agent-avatar" />
                      <div>
                        <div className="agent-name">{property.agent.name}</div>
                        <div className="agent-title">{property.agent.designation.split('&')[0]}</div>
                      </div>
                    </div>

                    <button 
                      className="card-action-btn"
                      onClick={() => onSelectProperty(property)}
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '10px' }}>
              No Properties Found Matching Your Filter
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              We have private off-market listings available for this criterion. Contact our expert realtors directly or post your requirement.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab('all');
                }}
              >
                Reset Filters
              </button>
              <button className="btn btn-secondary" onClick={onOpenListProperty}>
                Post Your Property Requirement
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
