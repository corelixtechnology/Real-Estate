import React from 'react';
import PageHeader from '../components/PageHeader';
import { CITIES } from '../data/mockData';
import { 
  MapPin, TrendingUp, DollarSign, Building, 
  ArrowRight, Sparkles, Compass, CheckCircle2, ShieldCheck 
} from 'lucide-react';

export default function CitiesPage({ onNavigateHome, onSelectCityAndSearch }) {
  const activeCities = CITIES.filter(c => c.id !== 'all');

  return (
    <div className="hanu-page-view hanu-cities-page">
      {/* Page Header */}
      <PageHeader
        badge="Regional Micro-Market Intelligence"
        title="Explore India’s Prime Metros & Cross-Border Hubs"
        subtitle="Unmatched neighborhood insights, capital growth metrics and curated inventory across South India and California."
        breadcrumb={[{ label: 'City Network' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '6', label: 'Strategic Regional Hubs' },
          { value: '45+', label: 'Prime Micro-Markets' },
          { value: '+14.2%', label: 'Avg Metro Capital Appreciation' },
          { value: '1,450+', label: 'Active Curated Properties' }
        ]}
      />

      {/* Cities Showcase Section */}
      <section className="hanu-cities-showcase-section">
        <div className="container">
          <div className="cities-detailed-list">
            {activeCities.map((city, idx) => (
              <div key={city.id} className="city-detailed-card">
                
                {/* City Image with Overlay */}
                <div className="city-card-image-wrap">
                  <img src={city.image} alt={city.name} />
                  <div className="city-badge-tag">{city.state}</div>
                  <div className="city-card-overlay-bottom">
                    <h3 className="city-big-name">{city.name}</h3>
                    <span className="city-prop-count">{city.count}</span>
                  </div>
                </div>

                {/* City Market Metrics & Narrative */}
                <div className="city-card-info-wrap">
                  <p className="city-editorial-desc">{city.description}</p>

                  {/* Metrics Row */}
                  <div className="city-metrics-triad">
                    <div className="metric-box">
                      <span className="m-label">Avg Benchmark Rate</span>
                      <span className="m-val text-gold">{city.avgPrice}</span>
                    </div>
                    <div className="metric-box">
                      <span className="m-label">Annual Appreciation</span>
                      <span className="m-val text-success">{city.growthRate}</span>
                    </div>
                    <div className="metric-box">
                      <span className="m-label">Gross Rental Yield</span>
                      <span className="m-val">{city.rentalYield}</span>
                    </div>
                  </div>

                  {/* Popular Micro-Markets */}
                  <div className="city-micro-markets">
                    <span className="micro-label">Prime Neighborhoods:</span>
                    <div className="micro-tags-row">
                      {city.popular.map((pop, i) => (
                        <span key={i} className="micro-tag-pill">{pop}</span>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure Growth Corridors */}
                  {city.infrastructure && (
                    <div className="city-infra-box">
                      <span className="infra-label">Catalyst Infrastructure Projects:</span>
                      <div className="infra-tags-row">
                        {city.infrastructure.map((inf, i) => (
                          <div key={i} className="infra-item">
                            <CheckCircle2 size={13} color="var(--color-primary)" />
                            <span>{inf}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="city-card-action">
                    <button
                      onClick={() => onSelectCityAndSearch(city.id)}
                      className="hanu-btn-primary"
                    >
                      <span>Explore {city.name} Luxury Properties</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Border Hub Highlight */}
      <section className="hanu-cross-border-banner">
        <div className="container">
          <div className="cross-border-box">
            <div className="cross-border-text">
              <span className="badge-tag badge-gold">Trans-Continental Bridge</span>
              <h2>Hanu Reddy Realty USA — Irvine, California</h2>
              <p>
                Our permanent office in Orange County, California bridges the global Indian diaspora with secure, high-yield Indian real estate and cross-border American properties.
              </p>
              <div className="cross-border-features">
                <div><ShieldCheck size={16} /> Licensed California Real Estate Brokerage</div>
                <div><ShieldCheck size={16} /> Turnkey FEMA & 15CA/CB Tax Compliance</div>
                <div><ShieldCheck size={16} /> Pacific Time-Zone Client Relationship Support</div>
              </div>
            </div>
            <div className="cross-border-cta">
              <a href="tel:+19493028877" className="hanu-btn-primary">
                <span>Connect with Irvine, CA Directorate</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
