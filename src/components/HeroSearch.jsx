import React, { useState } from 'react';
import { Search, MapPin, Building2, Home, IndianRupee, ChevronDown } from 'lucide-react';
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

  const marketSegments = ['Residential', 'Commercial', 'Land / Plots', 'Agricultural'];

  const propertyTypesMap = {
    'Residential': ['Flat', 'House / Villa', 'Penthouse', 'Residential Land'],
    'Commercial': ['Office Space', 'Retail Showroom', 'Commercial Land', 'Warehouse'],
    'Land / Plots': ['Residential Plot', 'Commercial Plot', 'Farm Land'],
    'Agricultural': ['Agricultural Land', 'Estate / Plantation']
  };

  const currentPropertyTypes = propertyTypesMap[marketSegment] || propertyTypesMap['Residential'];

  const budgetList = searchTab === 'rent' ? BUDGET_RANGES_RENT : BUDGET_RANGES_BUY;

  const cityName = CITIES.find(c => c.id === selectedCity)?.name || 'Coimbatore';

  return (
    <section id="hero" className="exact-hero-section">
      <div className="container-wide exact-hero-container">
        {/* Top Tag Badge */}
        <div className="exact-hero-badge">
          <span className="badge-dot">●</span>
          <TextAnimate animation="blurInUp" by="character" once as="span">
            BUY, SELL OR RENT, WITH CONFIDENCE
          </TextAnimate>
        </div>

        {/* Hero Main Headline - Blur In Up by Character */}
        <TextAnimate animation="blurInUp" by="character" once as="h1" className="exact-hero-title">
          Find Your Ideal Property With Trusted Real Estate Experts
        </TextAnimate>

        {/* Hero Subtitle Description - Fade In by Line */}
        <TextAnimate animation="fadeIn" by="line" as="p" className="exact-hero-description" delay={0.2}>
          Professional real estate services across Chennai, Bengaluru, Hyderabad, Pune, Coimbatore, Mysuru, Visakhapatnam and Irvine, California, backed by decades of local market expertise.
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
                All
              </button>
              <button
                className={`exact-tab-btn ${searchTab === 'buy' ? 'active' : ''}`}
                onClick={() => setSearchTab('buy')}
              >
                Buy
              </button>
              <button
                className={`exact-tab-btn ${searchTab === 'rent' ? 'active' : ''}`}
                onClick={() => setSearchTab('rent')}
              >
                Rent
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
              <label className="exact-filter-label">LOCATION</label>
              <div className="exact-filter-box">
                <MapPin size={16} className="exact-field-icon" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="exact-filter-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onPerformSearch();
                  }}
                />
              </div>
            </div>

            {/* 2. Market Segment */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">MARKET SEGMENT</label>
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

            {/* 3. Property Type */}
            <div className="exact-filter-col">
              <label className="exact-filter-label">PROPERTY TYPE</label>
              <div className="exact-filter-box">
                <Home size={16} className="exact-field-icon" />
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
              <label className="exact-filter-label">BUDGET</label>
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
                <span>Search Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

