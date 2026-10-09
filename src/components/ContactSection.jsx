import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BRANCHES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function ContactSection() {
  const [selectedCityTab, setSelectedCityTab] = useState('Chennai');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Chennai',
    service: 'Buying Property',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const activeBranchGroup = BRANCHES.find((b) => b.city === selectedCityTab) || BRANCHES[0];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <MapPin size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              GET IN TOUCH WITH OUR EXPERTS
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Branch Offices & Contact Hub
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Visit our prime regional headquarters or connect directly with our advisory desks across India and the United States.
          </TextAnimate>

        </div>


        {/* Contact Layout Grid: Info Panel + Form */}
        <div className="contact-layout-grid">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div>
              <div style={{ fontSize: '0.78rem', color: '#ffc278', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                DIRECT ADVISORY DESK
              </div>
              <h3>Connect Directly With Our Senior Team</h3>
              <p>
                Have an inquiry about an existing listing, need confidential property valuation, or looking for joint development structuring?
              </p>

              <div className="contact-direct-items">
                <div className="contact-item-row">
                  <div className="contact-item-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">General Helpline (Mylapore HQ)</div>
                    <a href="tel:+914443999000" className="contact-item-val">+91 44 4399 9000</a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-item-icon" style={{ background: 'rgba(37, 211, 102, 0.3)', borderColor: '#25D366' }}>
                    <MessageSquare size={18} color="#25D366" />
                  </div>
                  <div>
                    <div className="contact-item-title">Official WhatsApp Desk</div>
                    <a href="https://wa.me/912223334452" target="_blank" rel="noreferrer" className="contact-item-val">+91 80560 35603</a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-item-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">General Inquiries</div>
                    <a href="mailto:info@hanureddyrealty.com" className="contact-item-val">info@hanureddyrealty.com</a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-item-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">Operating Timings</div>
                    <div className="contact-item-val">Mon – Sat: 9:30 AM – 6:30 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
              Over 30 Years of Unbroken Trust & Fiduciary Integrity.
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-dark)', marginBottom: '8px' }}>
              Send an Advisory Request
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Fill in your contact information and requirement. A senior micro-market specialist will reach out to you within 30 minutes.
            </p>

            {formSubmitted ? (
              <div style={{ background: 'var(--color-primary-bg)', border: '1.5px solid var(--color-primary)', borderRadius: 'var(--radius-md)', padding: '30px', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="var(--color-primary)" style={{ margin: '0 auto 14px auto' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Thank You, {formData.name}!
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  Your inquiry regarding <strong>{formData.service}</strong> in <strong>{formData.city}</strong> has been assigned to our senior regional manager. We will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-field-block">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Krishnan"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98400 12345"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field-block">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. ramesh@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">City of Interest</label>
                    <select
                      name="city"
                      className="form-input"
                      value={formData.city}
                      onChange={handleInputChange}
                    >
                      <option value="Chennai">Chennai</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Irvine, CA (USA)">Irvine, CA (USA)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-block">
                  <label className="form-label">Requirement Type</label>
                  <select
                    name="service"
                    className="form-input"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="Buying Residential Property">Buying Residential Property</option>
                    <option value="Renting / Leasing Home">Renting / Leasing Home</option>
                    <option value="Selling / Monetizing Property">Selling / Monetizing Property</option>
                    <option value="Commercial Office / Retail Space">Commercial Office / Retail Space</option>
                    <option value="NRI Property Management">NRI Property Management</option>
                    <option value="Joint Development / Land Valuation">Joint Development / Land Valuation</option>
                  </select>
                </div>

                <div className="form-field-block">
                  <label className="form-label">Message / Details</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Describe budget, preferred localities, timeline..."
                    className="form-input"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Branch Offices Directory Tabs */}
        <div className="branch-directory-wrap">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
            Our Regional Branch Network
          </h3>

          <div className="branch-city-tabs">
            {BRANCHES.map((b) => (
              <button
                key={b.city}
                className={`branch-tab-btn ${selectedCityTab === b.city ? 'active' : ''}`}
                onClick={() => setSelectedCityTab(b.city)}
              >
                {b.city} {b.isHeadquarters ? '(HQ)' : ''}
              </button>
            ))}
          </div>

          <div className="branches-cards-grid">
            {activeBranchGroup.branches.map((branch, idx) => (
              <div key={idx} className="branch-card">
                <div className="branch-name">{branch.name}</div>
                <div className="branch-address">
                  <MapPin size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-top', color: 'var(--color-primary)' }} />
                  {branch.address}
                </div>
                <div className="branch-phone">
                  <Phone size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-top' }} />
                  {branch.phone}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '6px' }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {branch.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
