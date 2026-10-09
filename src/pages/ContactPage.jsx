import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { BRANCHES } from '../data/mockData';
import {
  MapPin, Phone, Mail, Clock, MessageSquare,
  Sparkles, CheckCircle2, ArrowRight, ExternalLink, Send, ShieldCheck
} from 'lucide-react';

export default function ContactPage({ onNavigateHome }) {
  const [selectedCityTab, setSelectedCityTab] = useState('Chennai');
  const [formSent, setFormSent] = useState(false);

  // Form State
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactNature, setContactNature] = useState('Buying a Luxury Residence');
  const [contactMessage, setContactMessage] = useState('');

  const currentCityData = BRANCHES.find(b => b.city === selectedCityTab) || BRANCHES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="hanu-page-view hanu-contact-page">
      {/* Page Header */}
      <PageHeader
        badge="Global Reach & Local Mastery"
        title="Contact Our Regional Hubs & VIP Directorate"
        subtitle="Visit our signature offices in Chennai, Bengaluru, Hyderabad, Coimbatore and Irvine (California) or book a private consultation."
        breadcrumb={[{ label: 'Contact & Branches' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '7', label: 'Signature Regional Offices' },
          { value: '2 Hours', label: 'Average Response Time' },
          { value: 'Mon – Sat', label: 'Dedicated Client Desks' },
          { value: '24/7', label: 'Rapid WhatsApp Support' }
        ]}
      />

      {/* Main Offices & Branches Explorer */}
      <section className="hanu-branches-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Regional Presence</span>
            <h2>Our Global Network of Offices</h2>
            <p>Select any city below for detailed branch addresses, phone lines and operating hours.</p>
          </div>

          {/* City Selector Tabs */}
          <div className="branches-city-tabs">
            {BRANCHES.map((b) => (
              <button
                key={b.city}
                onClick={() => setSelectedCityTab(b.city)}
                className={`branch-city-tab-btn ${selectedCityTab === b.city ? 'active' : ''}`}
              >
                <span>{b.city}</span>
                {b.isHeadquarters && <span className="hq-tag">HQ</span>}
              </button>
            ))}
          </div>

          {/* Active City Branches Grid */}
          <div className="branches-cards-grid">
            {currentCityData.branches.map((branch, idx) => (
              <div key={idx} className="hanu-branch-card">
                <div className="branch-card-header">
                  <div className="branch-icon-pin">
                    <MapPin size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="branch-name">{branch.name}</h3>
                    <div className="branch-city-lbl">{currentCityData.city}</div>
                  </div>
                </div>

                <div className="branch-address-box">
                  <p>{branch.address}</p>
                </div>

                <div className="branch-contacts-list">
                  <div className="branch-contact-row">
                    <Phone size={15} color="var(--color-primary)" />
                    <a href={`tel:${branch.phone.split('/')[0].trim()}`}>{branch.phone}</a>
                  </div>

                  <div className="branch-contact-row">
                    <Mail size={15} color="var(--color-primary)" />
                    <a href={`mailto:${branch.email}`}>{branch.email}</a>
                  </div>

                  <div className="branch-contact-row">
                    <Clock size={15} color="var(--color-primary)" />
                    <span>{branch.timing}</span>
                  </div>
                </div>

                <div className="branch-card-actions">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery || encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="branch-maps-btn"
                  >
                    <ExternalLink size={14} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/912223334452?text=${encodeURIComponent(`Hello Hanu Reddy Realty ${branch.name}, I would like to visit your office.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="branch-wa-btn"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VIP Consultation & Message Section */}
      <section className="hanu-contact-form-section">
        <div className="container">
          <div className="contact-form-container-box">

            {/* Left Info Column */}
            <div className="contact-info-col">
              <span className="badge-tag badge-gold">VIP Concierge</span>
              <h2>Schedule a Private Consultation</h2>
              <p>
                Whether you are looking to purchase an iconic luxury estate, monetize prime land, or structure corporate office leasing, our Senior Managing Directors will provide a bespoke market briefing.
              </p>

              <div className="contact-direct-points">
                <div className="point-item">
                  <div className="point-icon"><Phone size={18} /></div>
                  <div>
                    <strong>Central Helpline (India)</strong>
                    <div>+91 44 4399 9000 / +91 80560 35603</div>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon"><Phone size={18} /></div>
                  <div>
                    <strong>USA Cross-Border Desk (Irvine, CA)</strong>
                    <div>+1 (949) 302-8877</div>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon"><Mail size={18} /></div>
                  <div>
                    <strong>Executive Email</strong>
                    <div>contact@hanureddyrealty.com</div>
                  </div>
                </div>
              </div>

              <div className="fiduciary-promise-box">
                <ShieldCheck size={20} color="var(--color-gold)" />
                <span>We guarantee 100% data privacy. Your contact details are never shared with third-party agents or advertising aggregators.</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              {!formSent ? (
                <form onSubmit={handleSubmit} className="vip-enquiry-form">
                  <h3>Direct Inquiry Form</h3>

                  <div className="wizard-inputs-row">
                    <div className="wizard-input-wrap">
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Sundaram"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="hanu-input-field"
                      />
                    </div>

                    <div className="wizard-input-wrap">
                      <label>Mobile Number / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 XXXXX"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="hanu-input-field"
                      />
                    </div>
                  </div>

                  <div className="wizard-inputs-row">
                    <div className="wizard-input-wrap">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="sundaram@company.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="hanu-input-field"
                      />
                    </div>

                    <div className="wizard-input-wrap">
                      <label>Requirement Type *</label>
                      <select
                        value={contactNature}
                        onChange={(e) => setContactNature(e.target.value)}
                        className="hanu-input-field"
                      >
                        <option value="Buying a Luxury Residence">Buying a Luxury Residence</option>
                        <option value="Selling / Monetizing Property">Selling / Monetizing Property</option>
                        <option value="Luxury Rental / Corporate Lease">Luxury Rental / Corporate Lease</option>
                        <option value="Joint Development / Land JV">Joint Development / Land JV</option>
                        <option value="NRI Asset Management">NRI Asset Management</option>
                        <option value="Commercial Office Leasing">Commercial Office Leasing</option>
                        <option value="Legal Title 40-Point Audit">Legal Title 40-Point Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="wizard-input-wrap">
                    <label>How can we assist you? (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred budget, target localities, property specifications or questions..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="hanu-input-field"
                    ></textarea>
                  </div>

                  <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Submit VIP Inquiry</span>
                    <Send size={15} />
                  </button>
                </form>
              ) : (
                <div className="contact-success-card">
                  <div className="success-icon-wrap">
                    <Sparkles size={44} color="var(--color-gold)" />
                  </div>
                  <h3>Thank You, {contactName}!</h3>
                  <p>
                    Your inquiry regarding <strong>{contactNature}</strong> has been assigned to our Senior Directorate. A Senior Managing Realtor will contact you at <strong>{contactPhone}</strong> within 2 hours.
                  </p>
                  <button onClick={() => setFormSent(false)} className="hanu-btn-ghost" style={{ marginTop: '16px' }}>
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
