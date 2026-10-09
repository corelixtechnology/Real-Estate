import React, { useState, useMemo, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { REALTORS, CITIES } from '../data/mockData';
import {
  Users, Search, Phone, Mail, MessageSquare,
  MapPin, Award, ShieldCheck, ArrowRight, Sparkles, CheckCircle
} from 'lucide-react';

export default function AgentsPage({ onNavigateHome, onNavigatePage }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchName, setSearchName] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [consultModalAgent, setConsultModalAgent] = useState(null);

  useEffect(() => {
    if (consultModalAgent) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [consultModalAgent]);

  const filteredRealtors = useMemo(() => {
    let list = [...REALTORS];

    if (selectedCity !== 'all') {
      list = list.filter(r => r.city === selectedCity || r.location.toLowerCase().includes(selectedCity));
    }

    if (selectedSpecialization !== 'all') {
      list = list.filter(r => r.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase()));
    }

    if (searchName.trim()) {
      const q = searchName.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.designation.toLowerCase().includes(q) ||
        r.specialization.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCity, selectedSpecialization, searchName]);

  return (
    <div className="hanu-page-view hanu-agents-page">
      {/* Page Header */}
      <PageHeader
        badge="Senior Advisory Council"
        title="Meet Our Senior Managing Directors & Realtors"
        subtitle="150+ full-time institutional brokers upholding 30+ years of uncompromised fiduciary ethics, legal due diligence and local market mastery."
        breadcrumb={[{ label: 'Our Realtors' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '150+', label: 'Full-Time Licensed Realtors' },
          { value: '22 Yrs', label: 'Average Leadership Experience' },
          { value: '100%', label: 'In-House Fiduciary Standard' },
          { value: '25,000+', label: 'Clients Represented' }
        ]}
      />

      {/* Filter & Search Controls */}
      <section className="hanu-marketplace-controls">
        <div className="container">
          <div className="hanu-controls-top-row">
            {/* Search Input */}
            <div className="hanu-search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search advisor by name, designation, city or specialization..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="hanu-page-search-input"
              />
              {searchName && (
                <button onClick={() => setSearchName('')} className="search-clear-btn">✕</button>
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

          <div className="hanu-controls-secondary-row">
            <div className="hanu-select-filter">
              <label>Domain Specialization:</label>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                <option value="all">All Specializations</option>
                <option value="ultra-luxury">Ultra-Luxury Residential</option>
                <option value="commercial">Commercial & Corporate Leasing</option>
                <option value="nri">NRI Portfolio & Cross-Border Advisory</option>
                <option value="joint ventures">Joint Ventures & Land Acquisition</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Realtors Grid */}
      <section className="hanu-realtors-directory-section">
        <div className="container">
          <div className="hanu-realtors-directory-grid">
            {filteredRealtors.map((agent) => (
              <div key={agent.id} className="hanu-realtor-profile-card">

                {/* Top Image & Badge */}
                <div className="realtor-image-container">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="realtor-card-photo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="realtor-experience-pill">
                    <Award size={13} />
                    <span>{agent.experience}</span>
                  </div>
                  {agent.awards && (
                    <div className="realtor-award-badge-top" title={agent.awards}>
                      <Sparkles size={11} />
                      <span>{agent.awards}</span>
                    </div>
                  )}
                </div>

                {/* Profile Details */}
                <div className="realtor-details-body">
                  <div className="realtor-loc-tag">
                    <MapPin size={13} color="var(--color-primary)" />
                    <span>{agent.location}</span>
                  </div>

                  <h3 className="realtor-name">{agent.name}</h3>
                  <div className="realtor-designation">{agent.designation}</div>

                  <div className="realtor-specialization-box">
                    <strong>Focus:</strong> {agent.specialization}
                  </div>

                  <p className="realtor-bio-text">
                    {agent.bio}
                  </p>

                  {/* Languages Spoken & Listings Count */}
                  <div className="realtor-meta-row">
                    {agent.languages && (
                      <div className="realtor-meta-item">
                        <span className="lbl">Languages:</span>
                        <span className="val">{agent.languages}</span>
                      </div>
                    )}
                    <div className="realtor-meta-item">
                      <span className="lbl">Active Portfolios:</span>
                      <span className="val text-gold">{agent.listingsCount}+ Estates</span>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="realtor-contact-actions">
                    <div className="realtor-btn-split-row">
                      <a
                        href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                        className="realtor-action-call-btn"
                        title="Direct Call"
                      >
                        <Phone size={14} />
                        <span>Call Direct</span>
                      </a>

                      <a
                        href={`https://wa.me/918056035603?text=${encodeURIComponent(`Hello ${agent.name}, I would like to schedule a real estate advisory consultation with you.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="realtor-action-wa-btn"
                        title="WhatsApp Chat"
                      >
                        <MessageSquare size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setConsultModalAgent(agent)}
                      className="realtor-action-vip-btn"
                    >
                      <span>Book VIP Meeting</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Network Banner */}
      <section className="hanu-join-realtor-network">
        <div className="container">
          <div className="join-realtor-box">
            <div className="join-realtor-text">
              <span className="badge-tag badge-gold">Careers at Hanu Reddy</span>
              <h2>Are You an Experienced Real Estate Professional?</h2>
              <p>
                Join India's most prestigious institutional brokerage. Benefit from our 30+ year reputation, 40-point legal backup, structured mentorship, and uncapped earning potential.
              </p>
              <button
                onClick={() => onNavigatePage('careers')}
                className="hanu-btn-primary"
              >
                <span>Explore Careers & Realtor Academy</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Modal */}
      {consultModalAgent && (
        <div 
          className="modal-overlay" 
          onClick={() => setConsultModalAgent(null)}
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
        >
          <div 
            className="modal-content-box consult-modal-box" 
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={() => setConsultModalAgent(null)}>✕</button>

            <div className="consult-modal-head">
              <div className="badge-tag badge-gold">VIP Advisory Consultation</div>
              <h2>Book Private Meeting with {consultModalAgent.name}</h2>
              <p>{consultModalAgent.designation} • {consultModalAgent.location}</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Thank you! Your private consultation request with ${consultModalAgent.name} has been booked. Our coordinator will contact you to confirm time.`);
              setConsultModalAgent(null);
            }} className="consult-modal-form">
              <input type="text" placeholder="Your Full Name *" required className="hanu-input-field" />
              <input type="tel" placeholder="Mobile / WhatsApp Number *" required className="hanu-input-field" />
              <input type="email" placeholder="Email Address *" required className="hanu-input-field" />
              <select className="hanu-input-field" required>
                <option value="">Preferred Meeting Format</option>
                <option value="in-person">In-Person at Regional Office</option>
                <option value="video-call">Private 1-on-1 Zoom / Google Meet</option>
                <option value="phone-briefing">Confidential Phone Briefing</option>
              </select>
              <input type="date" className="hanu-input-field" required />
              <textarea placeholder="Briefly describe your property requirement or portfolio objective..." rows={3} className="hanu-input-field"></textarea>
              <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Confirm VIP Appointment</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
