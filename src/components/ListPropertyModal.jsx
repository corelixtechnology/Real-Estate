import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle2, ShieldCheck, Building, Home, MapPin, IndianRupee, Sparkles } from 'lucide-react';
import { CITIES, PROPERTY_TYPES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function ListPropertyModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    userType: 'Owner',
    intent: 'Sale',
    propertyType: 'Flat / Apartment',
    city: 'Chennai',
    locality: '',
    address: '',
    bhk: '3 BHK',
    areaSqft: '',
    expectedPrice: '',
    name: '',
    phone: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <Sparkles size={14} />
              <TextAnimate animation="blurInUp" by="character" once as="span">
                POST YOUR PROPERTY EXCLUSIVELY
              </TextAnimate>
            </div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-dark)', margin: '6px 0' }}
            >
              List Your Property With Hanu Reddy Realty
            </TextAnimate>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Gain direct access to over 50,000+ verified NRI investors, HNI families, and multinational corporate tenants.
            </p>
          </div>


          {submitted ? (
            <div style={{ background: 'var(--color-primary-bg)', border: '1.5px solid var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '40px 24px', textAlign: 'center' }}>
              <CheckCircle2 size={54} color="var(--color-primary)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Property Successfully Submitted!
              </h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 20px auto' }}>
                Thank you, <strong>{formData.name}</strong>. A dedicated micro-market specialist for <strong>{formData.locality || formData.city}</strong> has been notified and will call you at <strong>{formData.phone}</strong> for physical title inspection and photography.
              </p>
              <button className="btn btn-primary" onClick={onClose}>
                Back to Homepage
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* Stepper Indicator */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: step >= s ? 'var(--color-primary)' : 'var(--color-border)',
                      transition: 'var(--transition)'
                    }}
                  />
                ))}
              </div>

              {/* Step 1: Persona & Intent */}
              {step === 1 && (
                <div>
                  <div style={{ marginBottom: '20px' }}>
                    <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>I am the:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                      {['Owner', 'Landlord / Lessor', 'Joint Venture Landowner', 'Authorized Builder'].map((role) => (
                        <div
                          key={role}
                          onClick={() => setFormData({ ...formData, userType: role })}
                          style={{
                            padding: '12px 8px',
                            textAlign: 'center',
                            borderRadius: 'var(--radius-md)',
                            border: formData.userType === role ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: formData.userType === role ? 'var(--color-primary-bg)' : 'var(--color-bg-main)',
                            color: formData.userType === role ? 'var(--color-primary)' : 'var(--color-text-main)',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>I want to:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {['Sale (Sell Property)', 'Rent / Lease Out', 'Joint Development (JV)'].map((action) => (
                        <div
                          key={action}
                          onClick={() => setFormData({ ...formData, intent: action })}
                          style={{
                            padding: '12px',
                            textAlign: 'center',
                            borderRadius: 'var(--radius-md)',
                            border: formData.intent === action ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: formData.intent === action ? 'var(--color-primary-bg)' : 'var(--color-bg-main)',
                            color: formData.intent === action ? 'var(--color-primary)' : 'var(--color-text-main)',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Property Type</label>
                    <select
                      name="propertyType"
                      className="form-input"
                      value={formData.propertyType}
                      onChange={handleChange}
                    >
                      {PROPERTY_TYPES.filter(t => t !== 'All Types').map((pt) => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Property Details */}
              {step === 2 && (
                <div>
                  <div className="form-grid-2">
                    <div className="form-field-block">
                      <label className="form-label">City *</label>
                      <select
                        name="city"
                        className="form-input"
                        value={formData.city}
                        onChange={handleChange}
                      >
                        {CITIES.filter(c => c.id !== 'all').map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field-block">
                      <label className="form-label">Locality / Area *</label>
                      <input
                        type="text"
                        name="locality"
                        required
                        placeholder="e.g. Alwarpet, Indiranagar, Jubilee Hills"
                        className="form-input"
                        value={formData.locality}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field-block">
                      <label className="form-label">Configuration (BHK / Rooms)</label>
                      <select
                        name="bhk"
                        className="form-input"
                        value={formData.bhk}
                        onChange={handleChange}
                      >
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                        <option value="4 BHK">4 BHK</option>
                        <option value="5+ BHK Villa">5+ BHK Villa</option>
                        <option value="Commercial / Land">Commercial / Land</option>
                      </select>
                    </div>

                    <div className="form-field-block">
                      <label className="form-label">Super Built-Up Area (Sq.Ft) *</label>
                      <input
                        type="number"
                        name="areaSqft"
                        required
                        placeholder="e.g. 2400"
                        className="form-input"
                        value={formData.areaSqft}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Expected Price / Monthly Rent (INR) *</label>
                    <input
                      type="text"
                      name="expectedPrice"
                      required
                      placeholder="e.g. ₹ 3.50 Cr or ₹ 1.2 Lakh / mo"
                      className="form-input"
                      value={formData.expectedPrice}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Owner Details */}
              {step === 3 && (
                <div>
                  <div className="form-grid-2">
                    <div className="form-field-block">
                      <label className="form-label">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. C. S. Reddy"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field-block">
                      <label className="form-label">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98400 12345"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. owner@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Any Special Details / Notes</label>
                    <textarea
                      name="comments"
                      rows="2"
                      placeholder="Clear title history, furnishings, preferred site inspection timings..."
                      className="form-input"
                      value={formData.comments}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                {step > 1 ? (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous Step
                  </button>
                ) : <div />}

                <button type="submit" className="btn btn-primary">
                  {step === 3 ? 'Confirm & Submit Property' : 'Continue to Next Step'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
