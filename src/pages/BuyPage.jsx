import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { PROPERTIES, CITIES, PROPERTY_TYPES, BUDGET_RANGES_BUY } from '../data/mockData';
import { 
  Search, Filter, SlidersHorizontal, MapPin, Bed, Bath, Car, 
  ShieldCheck, Sparkles, Eye, Scale, Calculator, ArrowRight, 
  Check, LayoutGrid, List, RotateCcw, Compass, Phone, MessageSquare 
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function BuyPage({
  onSelectProperty,
  onOpenEmiCalc,
  onOpenRoiCalc,
  onOpenVirtualTour,
  compareList = [],
  onToggleCompare,
  onNavigateHome,
  onOpenListProperty
}) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBudgetIdx, setSelectedBudgetIdx] = useState(0);
  const [selectedBhk, setSelectedBhk] = useState('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [virtualTourOnly, setVirtualTourOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Filter properties (Buy or Commercial or Plots)
  const filteredProperties = useMemo(() => {
    let list = PROPERTIES.filter(p => p.listingType !== 'rent');

    // City
    if (selectedCity !== 'all') {
      list = list.filter(p => p.city === selectedCity);
    }

    // Type
    if (selectedType !== 'All Types') {
      list = list.filter(p => p.propertyType === selectedType);
    }

    // Budget
    const budget = BUDGET_RANGES_BUY[selectedBudgetIdx];
    if (budget && budget.max !== Infinity) {
      list = list.filter(p => p.price >= budget.min && p.price <= budget.max);
    } else if (budget && budget.min > 0) {
      list = list.filter(p => p.price >= budget.min);
    }

    // BHK
    if (selectedBhk !== 'All') {
      list = list.filter(p => p.bhk && p.bhk.includes(selectedBhk));
    }

    // Verified
    if (verifiedOnly) {
      list = list.filter(p => p.verified);
    }

    // Virtual tour
    if (virtualTourOnly) {
      list = list.filter(p => p.virtualTourAvailable);
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.locality.toLowerCase().includes(q) ||
        p.cityName.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        (p.highlights && p.highlights.some(h => h.toLowerCase().includes(q)))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'area-desc') {
      list.sort((a, b) => b.areaSqft - a.areaSqft);
    }

    return list;
  }, [selectedCity, selectedType, selectedBudgetIdx, selectedBhk, verifiedOnly, virtualTourOnly, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCity('all');
    setSearchQuery('');
    setSelectedType('All Types');
    setSelectedBudgetIdx(0);
    setSelectedBhk('All');
    setVerifiedOnly(false);
    setVirtualTourOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="hanu-page-view hanu-buy-page">
      {/* Grand Luxury Header */}
      <PageHeader
        badge="Luxury Real Estate Marketplace"
        title="Curated Properties & Estates for Sale"
        subtitle="Discover vetted beachfront villas, palatial sky mansions, commercial assets and clear title plots across India & the USA."
        breadcrumb={[{ label: 'Buy Properties' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '1,450+', label: 'Verified Listings' },
          { value: '100%', label: 'Legal Due Diligence' },
          { value: '₹10,000 Cr+', label: 'Transacted Volume' },
          { value: '0%', label: 'Listing Markups' }
        ]}
      />

      {/* Filter & Search Bar Section */}
      <section className="hanu-marketplace-controls">
        <div className="container">
          
          {/* Top Search Input & City Selector Strip */}
          <div className="hanu-controls-top-row">
            {/* Search Input */}
            <div className="hanu-search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by locality, project name, landmark or keywords (e.g. Boat Club, Private Pool)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hanu-page-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear-btn">✕</button>
              )}
            </div>

            {/* City Tabs */}
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

          {/* Secondary Filter Row */}
          <div className="hanu-controls-secondary-row">
            {/* Property Type Select */}
            <div className="hanu-select-filter">
              <label>Property Type:</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {PROPERTY_TYPES.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div className="hanu-select-filter">
              <label>Budget:</label>
              <select 
                value={selectedBudgetIdx} 
                onChange={(e) => setSelectedBudgetIdx(Number(e.target.value))}
              >
                {BUDGET_RANGES_BUY.map((b, idx) => (
                  <option key={idx} value={idx}>{b.label}</option>
                ))}
              </select>
            </div>

            {/* BHK Filter */}
            <div className="hanu-bhk-pills">
              <label>BHK:</label>
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

            {/* Checkbox Toggles */}
            <div className="hanu-checkbox-filters">
              <label className="hanu-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={verifiedOnly} 
                  onChange={(e) => setVerifiedOnly(e.target.checked)} 
                />
                <span>Verified Legal Title Only</span>
              </label>

              <label className="hanu-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={virtualTourOnly} 
                  onChange={(e) => setVirtualTourOnly(e.target.checked)} 
                />
                <span>360° Virtual Tour Available</span>
              </label>
            </div>

            {/* Reset Button */}
            {(selectedCity !== 'all' || selectedType !== 'All Types' || selectedBudgetIdx !== 0 || selectedBhk !== 'All' || searchQuery || verifiedOnly || virtualTourOnly) && (
              <button onClick={resetFilters} className="hanu-btn-reset">
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* View Toolbar */}
          <div className="hanu-view-toolbar">
            <div className="toolbar-left">
              <span className="results-count">
                Showing <strong>{filteredProperties.length}</strong> Luxury Properties
              </span>
            </div>

            <div className="toolbar-right">
              {/* ROI & EMI Calculator shortcuts */}
              <button onClick={onOpenEmiCalc} className="hanu-toolbar-tool-btn">
                <Calculator size={15} />
                <span>EMI Calc</span>
              </button>

              <button onClick={onOpenRoiCalc} className="hanu-toolbar-tool-btn">
                <Sparkles size={15} />
                <span>ROI Estimator</span>
              </button>

              {/* Sort By */}
              <div className="hanu-sort-wrap">
                <label>Sort:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Hanu Reddy Signature</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="area-desc">Built-up Area (Largest)</option>
                </select>
              </div>

              {/* View mode toggle */}
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

      {/* Properties Display */}
      <section className="hanu-properties-container">
        <div className="container">
          {filteredProperties.length === 0 ? (
            <div className="hanu-no-results-box">
              <div className="no-results-icon">
                <Compass size={48} />
              </div>
              <h3>No matching luxury properties found</h3>
              <p>We update our off-market inventory daily. Our Senior Managing Directors can source private unlisted estates tailored to your criteria.</p>
              <div className="no-results-actions">
                <button onClick={resetFilters} className="hanu-btn-ghost">
                  Clear All Filters
                </button>
                <button onClick={onOpenListProperty} className="hanu-btn-primary">
                  Request VIP Private Sourcing
                </button>
              </div>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'hanu-properties-grid' : 'hanu-properties-list-view'}>
              {filteredProperties.map((prop) => {
                const isCompared = compareList.some(item => item.id === prop.id);

                return (
                  <div key={prop.id} className="hanu-property-luxury-card">
                    {/* Media Container */}
                    <div className="prop-card-media" onClick={() => onSelectProperty(prop)}>
                      <img src={prop.images[0]} alt={prop.title} loading="lazy" />
                      
                      {/* Top Badges */}
                      <div className="prop-badges-row">
                        {prop.exclusive && (
                          <span className="badge-tag badge-exclusive">Exclusive Mandate</span>
                        )}
                        {prop.verified && (
                          <span className="badge-tag badge-verified">
                            <ShieldCheck size={12} /> 100% Title Verified
                          </span>
                        )}
                      </div>

                      {/* 360 Virtual Tour badge */}
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

                      {/* Price Tag Overlay */}
                      <div className="prop-card-price-overlay">
                        <div className="price-main">{prop.priceFormatted}</div>
                        <div className="price-sqft">{prop.pricePerSqft}</div>
                      </div>
                    </div>

                    {/* Card Body */}
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

                      {/* Specs Row */}
                      <div className="prop-specs-row">
                        {prop.bhk && (
                          <div className="spec-item" title="Bedrooms">
                            <Bed size={15} />
                            <span>{prop.bhk}</span>
                          </div>
                        )}
                        {prop.areaSqft && (
                          <div className="spec-item" title="Built-up Area">
                            <Compass size={15} />
                            <span>{prop.areaSqft.toLocaleString()} sq.ft</span>
                          </div>
                        )}
                        {prop.bathrooms > 0 && (
                          <div className="spec-item" title="Bathrooms">
                            <Bath size={15} />
                            <span>{prop.bathrooms} Baths</span>
                          </div>
                        )}
                        {prop.carparks > 0 && (
                          <div className="spec-item" title="Car Parks">
                            <Car size={15} />
                            <span>{prop.carparks} Cars</span>
                          </div>
                        )}
                      </div>

                      {/* Assigned Realtor brief */}
                      {prop.agent && (
                        <div className="prop-agent-strip">
                          <img src={prop.agent.image} alt={prop.agent.name} className="agent-avatar" />
                          <div className="agent-info">
                            <span className="agent-role">Exclusive Advisor</span>
                            <span className="agent-name">{prop.agent.name}</span>
                          </div>
                          <a 
                            href={`https://wa.me/918056035603?text=${encodeURIComponent(`Hi, I would like to inquire about ${prop.title} (${prop.id}) listed at ${prop.priceFormatted}`)}`}
                            target="_blank" 
                            rel="noreferrer" 
                            className="agent-wa-btn"
                            title="Direct WhatsApp"
                          >
                            <MessageSquare size={14} />
                          </a>
                        </div>
                      )}

                      {/* Card Action Footer */}
                      <div className="prop-card-footer">
                        {/* Compare Checkbox */}
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

                        <div className="prop-footer-buttons">
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* VIP Sourcing Concierge Banner */}
      <section className="hanu-vip-sourcing-section">
        <div className="container">
          <div className="hanu-vip-sourcing-box">
            <div className="vip-sourcing-text">
              <div className="badge-tag badge-gold">
                <Sparkles size={14} />
                <span>Private Wealth Property Advisory</span>
              </div>
              <h2>Seeking an Off-Market or Bespoke Luxury Estate?</h2>
              <p>
                Over 40% of our most exclusive prime transactions (Boat Club, Poes Garden, Jubilee Hills, Indiranagar mansions) happen off-market to preserve discretion. Submit your acquisition brief to our Vice Chairman’s private desk.
              </p>
              <div className="vip-perks-row">
                <div className="vip-perk-item"><Check size={16} /> 100% Confidential Representation</div>
                <div className="vip-perk-item"><Check size={16} /> Verified 40-Point Title Clearance</div>
                <div className="vip-perk-item"><Check size={16} /> Direct Access to Ultra-HNI Sellers</div>
              </div>
            </div>

            <div className="vip-sourcing-form">
              <h3>Submit Acquisition Requirement</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your private property mandate has been submitted directly to our Senior Advisory Team. A Senior Managing Director will reach out within 2 hours.'); }}>
                <input type="text" placeholder="Your Full Name" required className="hanu-input-field" />
                <input type="tel" placeholder="Mobile Number / WhatsApp" required className="hanu-input-field" />
                <select className="hanu-input-field" required>
                  <option value="">Preferred Target Metropolis</option>
                  <option value="chennai">Chennai (Boat Club / Alwarpet / ECR)</option>
                  <option value="bengaluru">Bengaluru (Indiranagar / Koramangala / Sadashivanagar)</option>
                  <option value="hyderabad">Hyderabad (Jubilee / Banjara Hills / Neopolis)</option>
                  <option value="coimbatore">Coimbatore (Race Course / Avinashi)</option>
                  <option value="usa">USA / Cross-Border NRI Investments</option>
                </select>
                <select className="hanu-input-field">
                  <option value="">Target Acquisition Budget</option>
                  <option value="5-10cr">₹ 5 Cr – ₹ 10 Cr</option>
                  <option value="10-25cr">₹ 10 Cr – ₹ 25 Cr</option>
                  <option value="25cr+">₹ 25 Cr + (Ultra-Luxury & Commercial)</option>
                </select>
                <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request Private Mandate Call</span>
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
