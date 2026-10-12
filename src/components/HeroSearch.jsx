import React, { useState } from 'react';
import { Search, MapPin, Building2, Building, Briefcase, ChevronDown } from 'lucide-react';
import { CITIES, BUDGET_RANGES_BUY, BUDGET_RANGES_RENT } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function HeroSearch({
  searchTab,
  setSearchTab,
  selectedCity,
  setSelectedCity,
  searchQuery,
  setSearchQuery,
  marketSegment,
  setMarketSegment,
  propertyType,
  setPropertyType,
  budgetRange,
  setBudgetRange,
  onPerformSearch
}) {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const marketSegments = ['Commercial'];

  const propertyTypesMap = {
    'Commercial': [
      'All Types',
      'Commercial Office',
      'Flexible Coworking & Desks',
      'Meeting & Conference Rooms',
      'Managed Office Suites',
      'Virtual Office & GST Reg',
      'Retail Showroom',
      'Warehouse',
      'Pre-Leased Commercial',
      'IT Park / Tech SEZ'
    ]
  };

  const currentPropertyTypes = propertyTypesMap['Commercial'];

  const budgetList = searchTab === 'rent' ? BUDGET_RANGES_RENT : BUDGET_RANGES_BUY;

  const cityName = CITIES.find(c => c.id === selectedCity)?.name || 'Coimbatore';

  return (
    <section id="hero" className="exact-hero-section">
      <div className="container-wide exact-hero-container">
        {/* Top Tag Badge */}
        <div className="exact-hero-badge">
          <span className="badge-dot">●</span>
          <TextAnimate animation="blurInUp" by="character" once as="span">
            GRADE-A COMMERCIAL REAL ESTATE & FLEXIBLE WORKSPACES
          </TextAnimate>
        </div>

        {/* Hero Main Headline */}
        <TextAnimate animation="blurInUp" by="character" once as="h1" className="exact-hero-title">
          India’s Premier Commercial Real Estate & Flexible Workspaces Platform
        </TextAnimate>

        {/* Hero Subtitle Description */}
        <TextAnimate animation="fadeIn" by="line" as="p" className="exact-hero-description" delay={0.2}>
          Grade-A corporate office towers, flexible coworking hubs, hourly smart meeting suites, and high-yield pre-leased commercial assets across prime business districts and IT corridors.
        </TextAnimate>

        {/* Dark Glass Search Card */}
        <div className="exact-search-card">
          {/* Top Row: Category Tabs + City Selector */}
          <div className="exact-search-top-row">
            <div className="exact-search-tabs">
              <button
                className={`exact-tab-btn ${searchTab === 'all' ? 'active' : ''}`}
                onClick={() => setSearchTab('all')}
              >
                All Workspaces
              </button>
              <button
                className={`exact-tab-btn ${searchTab === 'rent' ? 'active' : ''}`}
                onClick={() => setSearchTab('rent')}
              >
                Lease & Coworking
              </button>
              <button
                className={`exact-tab-btn ${searchTab === 'buy' ? 'active' : ''}`}
                onClick={() => setSearchTab('buy')}
              >
                Buy & Pre-Leased
              </button>
            </div>

            {/* City Selector Dropdown */}
            <div className="exact-city-dropdown-wrap">
              <button
                className="exact-city-select-btn"
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              >
                <span>{cityName === 'All Cities' ? 'Coimbatore' : cityName}</span>
                <ChevronDown size={15} />
              </button>

              {cityDropdownOpen && (
                <div className="exact-city-menu">
                  {CITIES.filter(c => c.id !== 'all').map((c) => (
                    <div
                      key={c.id}
                      className="exact-city-option"
                      onClick={() => {
                        setSelectedCity(c.id);
                        setCityDropdownOpen(false);
                      }}
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Row: Filter Fields Grid */}
          <div className="exact-search-filters-grid">
            {/* 1. Location Input */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">LOCATION / TECH PARK</label>
              <div className="exact-filter-box">
                <MapPin size={16} className="exact-field-icon" />
                <input
                  type="text"
                  placeholder="e.g. OMR, Indiranagar, Financial District"
                  className="exact-filter-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onPerformSearch();
                  }}
                />
              </div>
            </div>

            {/* 2. Workspace Category */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">CATEGORY</label>
              <div className="exact-filter-box">
                <Building2 size={16} className="exact-field-icon" />
                <select
                  className="exact-filter-select"
                  value={marketSegment}
                  onChange={(e) => {
                    setMarketSegment(e.target.value);
                    setPropertyType(propertyTypesMap[e.target.value][0]);
                  }}
                >
                  {marketSegments.map((seg) => (
                    <option key={seg} value={seg}>{seg}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="exact-select-arrow" />
              </div>
            </div>

            {/* 3. Space Type */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">SPACE TYPE</label>
              <div className="exact-filter-box">
                <Building size={16} className="exact-field-icon" />
                <select
                  className="exact-filter-select"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {currentPropertyTypes.map((pt) => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="exact-select-arrow" />
              </div>
            </div>

            {/* 4. Budget */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">BUDGET / TIER</label>
              <div className="exact-filter-box">
                <span className="exact-currency-symbol">₹</span>
                <select
                  className="exact-filter-select"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                >
                  {budgetList.map((b) => (
                    <option key={b.label} value={b.label}>{b.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="exact-select-arrow" />
              </div>
            </div>

            {/* 5. Search Action Button */}
            <div className="exact-btn-col">
              <button className="exact-search-submit-btn" onClick={onPerformSearch}>
                <Search size={17} />
                <span>Search Workspaces</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

