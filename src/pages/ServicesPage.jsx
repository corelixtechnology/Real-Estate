import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../data/mockData';
import { 
  Home, Building2, Globe, Handshake, ShieldCheck, 
  Compass, ArrowRight, CheckCircle2, Sparkles, HelpCircle, Phone, MessageSquare 
} from 'lucide-react';

export default function ServicesPage({ onNavigateHome, onOpenListProperty, onNavigatePage }) {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [quizGoal, setQuizGoal] = useState('');
  const [quizCity, setQuizCity] = useState('');
  const [quizResult, setQuizResult] = useState(null);

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home size={26} />;
      case 'Building2': return <Building2 size={26} />;
      case 'Globe': return <Globe size={26} />;
      case 'Handshake': return <Handshake size={26} />;
      case 'ShieldCheck': return <ShieldCheck size={26} />;
      case 'Compass': return <Compass size={26} />;
      default: return <Sparkles size={26} />;
    }
  };

  const handleRunMatchmaker = (e) => {
    e.preventDefault();
    if (!quizGoal) return;

    let matchedService = SERVICES[0];
    if (quizGoal === 'buy') matchedService = SERVICES[0];
    else if (quizGoal === 'commercial') matchedService = SERVICES[1];
    else if (quizGoal === 'nri') matchedService = SERVICES[2];
    else if (quizGoal === 'jv') matchedService = SERVICES[3];
    else if (quizGoal === 'legal') matchedService = SERVICES[4];
    else if (quizGoal === 'relocation') matchedService = SERVICES[5];

    setQuizResult(matchedService);
  };

  return (
    <div className="hanu-page-view hanu-services-page">
      {/* Page Header */}
      <PageHeader
        badge="Institutional Real Estate Solutions"
        title="Comprehensive 360° Real Estate Advisory"
        subtitle="From ultra-luxury acquisitions and commercial headquarters to cross-border NRI stewardship and joint venture structuring."
        breadcrumb={[{ label: 'Our Services' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '6', label: 'Specialized Verticals' },
          { value: '40-Point', label: 'Legal Audit Standard' },
          { value: '85+', label: 'Joint Ventures Closed' },
          { value: '100%', label: 'Fiduciary Client Alignment' }
        ]}
      />

      {/* Interactive Service Navigator Grid */}
      <section className="hanu-services-grid-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Advisory Verticals</span>
            <h2>Tailored Real Estate Solutions</h2>
            <p>Select any vertical below to explore methodology, deliverables and assigned senior directors.</p>
          </div>

          <div className="services-tab-selector-row">
            {SERVICES.map((srv) => {
              const isActive = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`service-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <div className="srv-icon-bubble">{getIconComponent(srv.icon)}</div>
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>

          {/* Deep Dive Active Service Detail Card */}
          <div className="hanu-service-spotlight-card">
            <div className="service-spotlight-left">
              <div className="srv-spotlight-badge">
                <Sparkles size={14} />
                <span>Featured Vertical</span>
              </div>
              <h2>{activeService.title}</h2>
              <p className="srv-full-desc">{activeService.fullDesc || activeService.shortDesc}</p>

              <div className="srv-target-box">
                <strong>Ideal For:</strong>
                <span>{activeService.targetClients || 'Discerning Property Buyers, Ultra-HNIs, Corporations'}</span>
              </div>

              <div className="srv-actions-row">
                <a 
                  href="tel:+919840012345" 
                  className="hanu-btn-primary"
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight size={15} />
                </a>
                <button onClick={onOpenListProperty} className="hanu-btn-ghost">
                  <span>List Your Property in this Vertical</span>
                </button>
              </div>
            </div>

            <div className="service-spotlight-right">
              <h3>Key Deliverables & Fiduciary Standards:</h3>
              <div className="srv-features-checklist">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="srv-feature-row">
                    <CheckCircle2 size={18} color="var(--color-primary)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Service Matchmaker Quiz */}
      <section className="hanu-matchmaker-section">
        <div className="container">
          <div className="hanu-matchmaker-card">
            <div className="matchmaker-header">
              <span className="badge-tag badge-gold">
                <HelpCircle size={14} /> Real Estate Matchmaker
              </span>
              <h2>Not Sure Which Service You Need?</h2>
              <p>Answer two quick questions to get directly paired with the right Senior Managing Directorate.</p>
            </div>

            <form onSubmit={handleRunMatchmaker} className="matchmaker-form">
              <div className="matchmaker-fields-row">
                <div className="matchmaker-field">
                  <label>1. What is your primary real estate objective?</label>
                  <select 
                    value={quizGoal} 
                    onChange={(e) => setQuizGoal(e.target.value)} 
                    required
                    className="hanu-input-field"
                  >
                    <option value="">Select your objective...</option>
                    <option value="buy">Purchase or Sell a Luxury Home / Apartment / Villa</option>
                    <option value="commercial">Lease or Acquire Grade-A Commercial Office / Tech Park</option>
                    <option value="nri">NRI Remote Property Management & Repatriation</option>
                    <option value="jv">Monetize Prime Land via Joint Development (JV)</option>
                    <option value="legal">Require 40-Point Title Audit & Scientific Property Valuation</option>
                    <option value="relocation">Corporate / Expat Family Relocation Support</option>
                  </select>
                </div>

                <div className="matchmaker-field">
                  <label>2. Which metropolis or market?</label>
                  <select 
                    value={quizCity} 
                    onChange={(e) => setQuizCity(e.target.value)} 
                    required
                    className="hanu-input-field"
                  >
                    <option value="">Select city...</option>
                    <option value="chennai">Chennai & ECR Corridor</option>
                    <option value="bengaluru">Bengaluru & Whitefield / Indiranagar</option>
                    <option value="hyderabad">Hyderabad & Jubilee Hills / Financial District</option>
                    <option value="coimbatore">Coimbatore & Western Tamil Nadu</option>
                    <option value="usa">USA / Cross-Border NRI Wealth</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="hanu-btn-primary matchmaker-btn">
                <span>Find Recommended Advisory Team</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {/* Quiz Result Modal / Banner */}
            {quizResult && (
              <div className="matchmaker-result-box">
                <div className="result-badge">
                  <Sparkles size={14} /> Recommended Vertical
                </div>
                <h3>{quizResult.title}</h3>
                <p>{quizResult.shortDesc}</p>
                <div className="result-cta-row">
                  <a 
                    href={`https://wa.me/918056035603?text=${encodeURIComponent(`Hi Hanu Reddy Realty, I completed the service matchmaker for "${quizResult.title}" in ${quizCity.toUpperCase()}. Please connect me with the Senior Director.`)}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="hanu-btn-primary"
                  >
                    <span>Connect with Senior Director via WhatsApp</span>
                    <MessageSquare size={15} />
                  </a>
                  <button 
                    onClick={() => {
                      setSelectedServiceId(quizResult.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hanu-btn-ghost"
                  >
                    <span>View Service Specifications</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Global NRI Desk Spotlight */}
      <section className="hanu-nri-spotlight-section">
        <div className="container">
          <div className="hanu-nri-banner-box">
            <div className="nri-banner-text">
              <span className="badge-tag badge-gold">Cross-Border Excellence</span>
              <h2>Fiduciary Property Stewardship for Global NRIs</h2>
              <p>
                Operating with direct offices in Irvine, California and South India, we serve NRI families across 15+ countries. From tenant placement and video inspections to FEMA repatriation (Form 15CA/CB) and inheritance restructuring.
              </p>
              <div className="nri-banner-highlights">
                <div className="nri-high-item"><CheckCircle2 size={16} /> Irvine, CA US Relationship Desk</div>
                <div className="nri-high-item"><CheckCircle2 size={16} /> Power of Attorney Facilitation</div>
                <div className="nri-high-item"><CheckCircle2 size={16} /> FEMA Repatriation Compliance</div>
              </div>
            </div>
            <div className="nri-banner-action">
              <a href="tel:+19493028877" className="hanu-btn-primary">
                <span>Call USA Office: +1 (949) 302-8877</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
