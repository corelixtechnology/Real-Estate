import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { PROPERTIES, CITIES, BUDGET_RANGES_RENT } from '../data/mockData';
import {
  Search, Filter, MapPin, Bed, Bath, Car, ShieldCheck,
  Sparkles, Eye, Scale, ArrowRight, LayoutGrid, List,
  RotateCcw, Compass, Phone, MessageSquare, Check, Key, Briefcase
} from 'lucide-react';

export default function RentPage({
  onSelectProperty,
  onOpenVirtualTour,
  compareList = [],
  onToggleCompare,
  onNavigateHome,
  onOpenListProperty
}) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBudgetIdx, setSelectedBudgetIdx] = useState(0);
  const [selectedFurnishing, setSelectedFurnishing] = useState('all');
  const [selectedBhk, setSelectedBhk] = useState('All');
  const [corporateOnly, setCorporateOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Filter rentals + commercial leasing
  const rentalProperties = useMemo(() => {
    // If property has listingType === 'rent' or rentPerMonth or listingType === 'commercial'
    let list = PROPERTIES.filter(p => p.listingType === 'rent' || p.rentPerMonth || p.listingType === 'commercial');

    // City
    if (selectedCity !== 'all') {
      list = list.filter(p => p.city === selectedCity);
    }

    // Budget
    const budget = BUDGET_RANGES_RENT[selectedBudgetIdx];
    if (budget && budget.max !== Infinity) {
      list = list.filter(p => {
        const r = p.rentPerMonth || (p.price <= 2000000 ? p.price : 150000);
        return r >= budget.min && r <= budget.max;
      });
    }

    // Furnishing
    if (selectedFurnishing !== 'all') {
      list = list.filter(p => p.furnishing && p.furnishing.toLowerCase().includes(selectedFurnishing));
    }

    // BHK
    if (selectedBhk !== 'All') {
      list = list.filter(p => p.bhk && p.bhk.includes(selectedBhk));
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.locality.toLowerCase().includes(q) ||
        p.cityName.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'rent-asc') {
      list.sort((a, b) => (a.rentPerMonth || a.price) - (b.rentPerMonth || b.price));
    } else if (sortBy === 'rent-desc') {
      list.sort((a, b) => (b.rentPerMonth || b.price) - (a.rentPerMonth || a.price));
    }

    return list;
  }, [selectedCity, searchQuery, selectedBudgetIdx, selectedFurnishing, selectedBhk, corporateOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCity('all');
    setSearchQuery('');
    setSelectedBudgetIdx(0);
    setSelectedFurnishing('all');
    setSelectedBhk('All');
    setCorporateOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="hanu-page-view hanu-rent-page">
      {/* Page Header */}
      <PageHeader
        badge="Luxury Rentals & Corporate Leases"
        title="Exclusive Residences & Penthouses for Rent"
        subtitle="Furnished luxury sky suites, waterfront villas and turnkey corporate office floors with complete landlord verification."
        breadcrumb={[{ label: 'Rent Properties' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '450+', label: 'Available Rentals' },
          { value: '24-48 Hrs', label: 'Fast Move-In Turnaround' },
          { value: '100%', label: 'Standard Expat Leases' },
          { value: 'Zero', label: 'Hidden Maintenance Surprises' }
        ]}
      />

      {/* Filter Section */}
      <section className="hanu-marketplace-controls">
        <div className="container">

          {/* Top Search & City Bar */}
          <div className="hanu-controls-top-row">
            <div className="hanu-search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search rentals by locality, landmark (e.g. Koramangala, Boat Club, Akkarai)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hanu-page-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear-btn">✕</button>
              )}
            </div>

            <div className="hanu-city-tabs-scroll">
              {CITIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCity(c.id)}
                  className={`hanu-city-tab-pill ${selectedCity === c.id ? 'active' : ''}`}
                >
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters */}
          <div className="hanu-controls-secondary-row">
            {/* Monthly Budget */}
            <div className="hanu-select-filter">
              <label>Monthly Rent Budget:</label>
              <select
                value={selectedBudgetIdx}
                onChange={(e) => setSelectedBudgetIdx(Number(e.target.value))}
              >
                {BUDGET_RANGES_RENT.map((b, idx) => (
                  <option key={idx} value={idx}>{b.label}</option>
                ))}
              </select>
            </div>

            {/* Furnishing */}
            <div className="hanu-select-filter">
              <label>Furnishing Status:</label>
              <select
                value={selectedFurnishing}
                onChange={(e) => setSelectedFurnishing(e.target.value)}
              >
                <option value="all">All Furnishing Levels</option>
                <option value="fully furnished">Fully Furnished / Designer</option>
                <option value="semi-furnished">Semi-Furnished</option>
                <option value="unfurnished">Bare Shell / Unfurnished</option>
              </select>
            </div>

            {/* BHK Filter */}
            <div className="hanu-bhk-pills">
              <label>Bedrooms:</label>
              <div className="bhk-options">
                {['All', '3 BHK', '4 BHK', '5 BHK'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBhk(b)}
                    className={`bhk-btn ${selectedBhk === b ? 'active' : ''}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Corporate lease check */}
            <div className="hanu-checkbox-filters">
              <label className="hanu-checkbox-item">
                <input
                  type="checkbox"
                  checked={corporateOnly}
                  onChange={(e) => setCorporateOnly(e.target.checked)}
                />
                <span>MNC & Diplomat Ready</span>
              </label>
            </div>

            {/* Reset */}
            {(selectedCity !== 'all' || selectedBudgetIdx !== 0 || selectedFurnishing !== 'all' || selectedBhk !== 'All' || searchQuery) && (
              <button onClick={resetFilters} className="hanu-btn-reset">
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Toolbar */}
          <div className="hanu-view-toolbar">
            <div className="toolbar-left">
              <span className="results-count">
                Showing <strong>{rentalProperties.length}</strong> Prime Rental & Lease Properties
              </span>
            </div>

            <div className="toolbar-right">
              <div className="hanu-sort-wrap">
                <label>Sort:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured Signature</option>
                  <option value="rent-asc">Rent: Low to High</option>
                  <option value="rent-desc">Rent: High to Low</option>
                </select>
              </div>

              <div className="view-mode-toggle">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  title="Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  title="Executive List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Rental Properties Display */}
      <section className="hanu-properties-container">
        <div className="container">
          {rentalProperties.length === 0 ? (
            <div className="hanu-no-results-box">
              <div className="no-results-icon">
                <Key size={48} />
              </div>
              <h3>No matching luxury rentals currently available</h3>
              <p>Looking for a specific corporate lease or diplomatic residence? Let our relocation specialists source bespoke homes.</p>
              <div className="no-results-actions">
                <button onClick={resetFilters} className="hanu-btn-ghost">Clear Filters</button>
                <button onClick={onOpenListProperty} className="hanu-btn-primary">Request Bespoke Rental Search</button>
              </div>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'hanu-properties-grid' : 'hanu-properties-list-view'}>
              {rentalProperties.map((prop) => {
                const isCompared = compareList.some(item => item.id === prop.id);
                const displayRent = prop.rentFormatted || prop.priceFormatted;

                return (
                  <div key={prop.id} className="hanu-property-luxury-card">
                    <div className="prop-card-media" onClick={() => onSelectProperty(prop)}>
                      <img src={prop.images[0]} alt={prop.title} loading="lazy" />

                      <div className="prop-badges-row">
                        <span className="badge-tag badge-gold">For Rent / Lease</span>
                        {prop.verified && (
                          <span className="badge-tag badge-verified">
                            <ShieldCheck size={12} /> Verified Landlord
                          </span>
                        )}
                      </div>

                      {prop.virtualTourAvailable && (
                        <button
                          className="prop-virtual-tour-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenVirtualTour(prop);
                          }}
                        >
                          <Sparkles size={13} />
                          <span>360° Virtual Tour</span>
                        </button>
                      )}

                      <div className="prop-card-price-overlay">
                        <div className="price-main">{displayRent}</div>
                        {prop.securityDeposit && (
                          <div className="price-sqft">Deposit: {prop.securityDeposit}</div>
                        )}
                      </div>
                    </div>

                    <div className="prop-card-body">
                      <div className="prop-location-row">
                        <MapPin size={15} color="var(--color-primary)" />
                        <span>{prop.locality}, {prop.cityName}</span>
                        <span className="prop-id-badge">ID: {prop.id}</span>
                      </div>

                      <h3 className="prop-card-title" onClick={() => onSelectProperty(prop)}>
                        {prop.title}
                      </h3>

                      <p className="prop-card-tagline">
                        {prop.tagline}
                      </p>

                      <div className="prop-specs-row">
                        {prop.bhk && (
                          <div className="spec-item">
                            <Bed size={15} />
                            <span>{prop.bhk}</span>
                          </div>
                        )}
                        {prop.areaSqft && (
                          <div className="spec-item">
                            <Compass size={15} />
                            <span>{prop.areaSqft.toLocaleString()} sq.ft</span>
                          </div>
                        )}
                        {prop.bathrooms > 0 && (
                          <div className="spec-item">
                            <Bath size={15} />
                            <span>{prop.bathrooms} Baths</span>
                          </div>
                        )}
                        {prop.carparks > 0 && (
                          <div className="spec-item">
                            <Car size={15} />
                            <span>{prop.carparks} Cars</span>
                          </div>
                        )}
                      </div>

                      {/* Furnishing highlight */}
                      <div className="rental-furnishing-pill">
                        <Key size={13} />
                        <span>{prop.furnishing}</span>
                      </div>

                      {prop.agent && (
                        <div className="prop-agent-strip">
                          <img src={prop.agent.image} alt={prop.agent.name} className="agent-avatar" />
                          <div className="agent-info">
                            <span className="agent-role">Rental Advisor</span>
                            <span className="agent-name">{prop.agent.name}</span>
                          </div>
                          <a
                            href={`https://wa.me/912223334452?text=${encodeURIComponent(`Hi, I am interested in renting ${prop.title} (${prop.id}) listed at ${displayRent}`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="agent-wa-btn"
                          >
                            <MessageSquare size={14} />
                          </a>
                        </div>
                      )}

                      <div className="prop-card-footer">
                        <label
                          className={`compare-checkbox-label ${isCompared ? 'checked' : ''}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            checked={isCompared}
                            onChange={() => onToggleCompare(prop)}
                          />
                          <Scale size={13} />
                          <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                        </label>

                        <button
                          onClick={() => onSelectProperty(prop)}
                          className="hanu-btn-primary-sm"
                        >
                          <span>View Details</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Landlord & Expat Concierge Banner */}
      <section className="hanu-vip-sourcing-section">
        <div className="container">
          <div className="hanu-vip-sourcing-box">
            <div className="vip-sourcing-text">
              <div className="badge-tag badge-gold">
                <Briefcase size={14} />
                <span>NRI Landlord Asset Stewardship</span>
              </div>
              <h2>Are You a High-End Property Owner Looking to Lease?</h2>
              <p>
                We place top-tier corporate tenants, multinational leadership, and expat diplomats with zero hassle. We handle tenant vetting, lease drafting with diplomatic safeguard clauses, security deposit escrows, and ongoing rent collection.
              </p>
              <div className="vip-perks-row">
                <div className="vip-perk-item"><Check size={16} /> Verified Blue-Chip & Expat Tenants</div>
                <div className="vip-perk-item"><Check size={16} /> Power of Attorney Management for NRIs</div>
                <div className="vip-perk-item"><Check size={16} /> Regular 4K Video Inspection Audits</div>
              </div>
            </div>

            <div className="vip-sourcing-form">
              <h3>List Your Rental Estate</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Your rental listing inquiry has been registered! A Senior Leasing Specialist will get in touch.'); }}>
                <input type="text" placeholder="Landlord Full Name" required className="hanu-input-field" />
                <input type="tel" placeholder="Mobile / WhatsApp Number" required className="hanu-input-field" />
                <input type="email" placeholder="Email Address" required className="hanu-input-field" />
                <input type="text" placeholder="Property Location (e.g. Alwarpet, Indiranagar)" required className="hanu-input-field" />
                <input type="text" placeholder="Expected Monthly Rent (₹)" required className="hanu-input-field" />
                <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request Landlord Consultation</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
