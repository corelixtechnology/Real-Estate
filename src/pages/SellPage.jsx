import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { CITIES, PROPERTY_TYPES, FAQS_DATA } from '../data/mockData';
import { 
  Building2, ShieldCheck, Camera, Sparkles, CheckCircle2, 
  ArrowRight, ArrowLeft, Lock, Users, Globe, Award, HelpCircle, Phone, Check 
} from 'lucide-react';

export default function SellPage({ onNavigateHome, onOpenEmiCalc }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [listingIntent, setListingIntent] = useState('sell'); // 'sell' | 'rent'
  const [ownerType, setOwnerType] = useState('Individual Owner');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  
  const [selectedCity, setSelectedCity] = useState('chennai');
  const [locality, setLocality] = useState('');
  const [propertyType, setPropertyType] = useState('Flat / Apartment');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [bhk, setBhk] = useState('3 BHK');
  const [expectedPrice, setExpectedPrice] = useState('');

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [propertyDescription, setPropertyDescription] = useState('');

  const AMENITY_OPTIONS = [
    'Private Swimming Pool', 'Italian Marble Flooring', '100% Vastu Compliant',
    'Sea View / Waterfront', 'Private Elevator', 'Smart Home Automation',
    'Private Garden / Terrace', 'Servant Quarters', 'Gated Security 24/7',
    'EV Charging Point', '100% DG Power Backup', 'Clear Freehold Patta'
  ];

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="hanu-page-view hanu-sell-page">
      {/* Page Header */}
      <PageHeader
        badge="Luxury Seller & Landlord Portal"
        title="Monetize Your Prime Real Estate with Fiduciary Discretion"
        subtitle="Connect with over 25,000+ verified high-net-worth buyers and global NRI investors. Zero upfront fees, 100% legal title protection."
        breadcrumb={[{ label: 'List Your Properties' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '₹10,000 Cr+', label: 'Volume Transacted' },
          { value: '150+', label: 'Full-time Licensed Brokers' },
          { value: '30+ Days', label: 'Average Liquidation Velocity' },
          { value: 'Zero', label: 'Upfront Registration Fee' }
        ]}
      />

      {/* Main Interactive Wizard Section */}
      <section className="hanu-sell-wizard-section">
        <div className="container">
          <div className="hanu-sell-wizard-card">
            
            {/* Wizard Step Progress Bar */}
            <div className="wizard-progress-bar">
              <div className={`wizard-step-node ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-circle">{currentStep > 1 ? <Check size={14} /> : '1'}</div>
                <div className="step-label">Owner Details</div>
              </div>
              <div className="wizard-step-connector"></div>

              <div className={`wizard-step-node ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-circle">{currentStep > 2 ? <Check size={14} /> : '2'}</div>
                <div className="step-label">Property Specs</div>
              </div>
              <div className="wizard-step-connector"></div>

              <div className={`wizard-step-node ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
                <div className="step-circle">{currentStep > 3 ? <Check size={14} /> : '3'}</div>
                <div className="step-label">Luxury Highlights</div>
              </div>
              <div className="wizard-step-connector"></div>

              <div className={`wizard-step-node ${currentStep >= 4 ? 'active' : ''} ${submitted ? 'completed' : ''}`}>
                <div className="step-circle">{submitted ? <Check size={14} /> : '4'}</div>
                <div className="step-label">Valuation & Submit</div>
              </div>
            </div>

            {/* Step Contents */}
            {!submitted ? (
              <form onSubmit={handleNext} className="wizard-form-body">
                
                {/* STEP 1: OWNER DETAILS */}
                {currentStep === 1 && (
                  <div className="wizard-step-content">
                    <div className="step-intro-header">
                      <span className="badge-tag badge-gold">Step 1 of 4</span>
                      <h3>Tell Us About Yourself & Listing Intent</h3>
                      <p>All information is kept strictly confidential under our non-disclosure fiduciary protocol.</p>
                    </div>

                    {/* Listing Intent Toggle */}
                    <div className="intent-switch-box">
                      <label>I want to:</label>
                      <div className="intent-pills">
                        <button
                          type="button"
                          onClick={() => setListingIntent('sell')}
                          className={`intent-btn ${listingIntent === 'sell' ? 'active' : ''}`}
                        >
                          Sell My Property
                        </button>
                        <button
                          type="button"
                          onClick={() => setListingIntent('rent')}
                          className={`intent-btn ${listingIntent === 'rent' ? 'active' : ''}`}
                        >
                          Rent / Lease My Property
                        </button>
                      </div>
                    </div>

                    {/* Owner Representation Type */}
                    <div className="wizard-form-group">
                      <label>Representation Capacity:</label>
                      <div className="owner-type-grid">
                        {['Individual Owner', 'NRI Homeowner', 'Corporate / Company Estate', 'Joint Family / Power of Attorney'].map((type) => (
                          <div
                            key={type}
                            onClick={() => setOwnerType(type)}
                            className={`owner-type-card ${ownerType === type ? 'selected' : ''}`}
                          >
                            <span className="radio-dot"></span>
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="wizard-inputs-row">
                      <div className="wizard-input-wrap">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Krishnan"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                          className="hanu-input-field"
                        />
                      </div>
                      <div className="wizard-input-wrap">
                        <label>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98400 XXXXX"
                          value={ownerPhone}
                          onChange={(e) => setOwnerPhone(e.target.value)}
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
                          placeholder="ramesh@domain.com"
                          value={ownerEmail}
                          onChange={(e) => setOwnerEmail(e.target.value)}
                          className="hanu-input-field"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: PROPERTY SPECS */}
                {currentStep === 2 && (
                  <div className="wizard-step-content">
                    <div className="step-intro-header">
                      <span className="badge-tag badge-gold">Step 2 of 4</span>
                      <h3>Property Location & Dimensions</h3>
                      <p>Provide specifications to help our valuation engine match active buyers.</p>
                    </div>

                    <div className="wizard-inputs-row">
                      <div className="wizard-input-wrap">
                        <label>City *</label>
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="hanu-input-field"
                        >
                          <option value="chennai">Chennai</option>
                          <option value="bengaluru">Bengaluru</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="coimbatore">Coimbatore</option>
                          <option value="pune">Pune</option>
                          <option value="irvine">Irvine, California (USA)</option>
                        </select>
                      </div>

                      <div className="wizard-input-wrap">
                        <label>Locality / Neighborhood *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Boat Club, Indiranagar 100ft Rd, Jubilee Hills"
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          className="hanu-input-field"
                        />
                      </div>
                    </div>

                    <div className="wizard-inputs-row">
                      <div className="wizard-input-wrap">
                        <label>Property Category *</label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="hanu-input-field"
                        >
                          {PROPERTY_TYPES.filter(t => t !== 'All Types').map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div className="wizard-input-wrap">
                        <label>Bedrooms / BHK</label>
                        <select
                          value={bhk}
                          onChange={(e) => setBhk(e.target.value)}
                          className="hanu-input-field"
                        >
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="4 BHK">4 BHK</option>
                          <option value="5 BHK">5 BHK</option>
                          <option value="Palatial / 6+ BHK">Palatial / 6+ BHK</option>
                          <option value="Commercial / Land">Commercial / Land</option>
                        </select>
                      </div>
                    </div>

                    <div className="wizard-inputs-row">
                      <div className="wizard-input-wrap">
                        <label>Built-up Area (Sq.Ft) *</label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 3850"
                          value={builtUpArea}
                          onChange={(e) => setBuiltUpArea(e.target.value)}
                          className="hanu-input-field"
                        />
                      </div>

                      <div className="wizard-input-wrap">
                        <label>{listingIntent === 'sell' ? 'Expected Price (₹)' : 'Expected Monthly Rent (₹)'} *</label>
                        <input
                          type="text"
                          required
                          placeholder={listingIntent === 'sell' ? 'e.g. ₹ 6.50 Cr' : 'e.g. ₹ 1.75 Lakhs'}
                          value={expectedPrice}
                          onChange={(e) => setExpectedPrice(e.target.value)}
                          className="hanu-input-field"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: LUXURY HIGHLIGHTS */}
                {currentStep === 3 && (
                  <div className="wizard-step-content">
                    <div className="step-intro-header">
                      <span className="badge-tag badge-gold">Step 3 of 4</span>
                      <h3>Luxury Amenities & Premium Features</h3>
                      <p>Select key lifestyle elements that make your estate stand out.</p>
                    </div>

                    <div className="amenities-selection-grid">
                      {AMENITY_OPTIONS.map((am) => {
                        const isSelected = selectedAmenities.includes(am);
                        return (
                          <div
                            key={am}
                            onClick={() => toggleAmenity(am)}
                            className={`amenity-choice-card ${isSelected ? 'selected' : ''}`}
                          >
                            <div className="choice-checkbox">
                              {isSelected && <Check size={12} />}
                            </div>
                            <span>{am}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="wizard-form-group" style={{ marginTop: '20px' }}>
                      <label>Additional Property Notes & Highlights:</label>
                      <textarea
                        rows={3}
                        placeholder="Mention custom imported woodwork, high ceiling height, river or ocean views, clear title history, etc."
                        value={propertyDescription}
                        onChange={(e) => setPropertyDescription(e.target.value)}
                        className="hanu-input-field"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* STEP 4: VALUATION & SUBMIT */}
                {currentStep === 4 && (
                  <div className="wizard-step-content">
                    <div className="step-intro-header">
                      <span className="badge-tag badge-gold">Step 4 of 4</span>
                      <h3>Review & Submit for Fiduciary Representation</h3>
                      <p>Our Senior Managing Director will initiate your complimentary 40-Point Title Audit.</p>
                    </div>

                    {/* Summary Review Card */}
                    <div className="wizard-summary-review">
                      <div className="summary-row">
                        <span className="sum-label">Owner Representation:</span>
                        <span className="sum-val">{ownerName} ({ownerType})</span>
                      </div>
                      <div className="summary-row">
                        <span className="sum-label">Property:</span>
                        <span className="sum-val">{bhk} {propertyType} in {locality}, {selectedCity.toUpperCase()}</span>
                      </div>
                      <div className="summary-row">
                        <span className="sum-label">Built-up Area:</span>
                        <span className="sum-val">{builtUpArea ? `${Number(builtUpArea).toLocaleString()} sq.ft` : 'N/A'}</span>
                      </div>
                      <div className="summary-row">
                        <span className="sum-label">Expected Value:</span>
                        <span className="sum-val text-gold">{expectedPrice}</span>
                      </div>
                    </div>

                    {/* Included Perks */}
                    <div className="perks-included-box">
                      <h4>Complimentary with Hanu Reddy Exclusive Mandate:</h4>
                      <div className="perks-grid">
                        <div className="perk-cell">
                          <CheckCircle2 size={16} color="var(--color-primary)" />
                          <span>Professional 4K Photoshoot & 360° Virtual Tour</span>
                        </div>
                        <div className="perk-cell">
                          <CheckCircle2 size={16} color="var(--color-primary)" />
                          <span>40-Point In-House Legal Title Verification</span>
                        </div>
                        <div className="perk-cell">
                          <CheckCircle2 size={16} color="var(--color-primary)" />
                          <span>Direct Outreach to 25,000+ Pre-Qualified HNIs</span>
                        </div>
                        <div className="perk-cell">
                          <CheckCircle2 size={16} color="var(--color-primary)" />
                          <span>Dedicated Senior Managing Director Representation</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Action Buttons */}
                <div className="wizard-action-buttons">
                  {currentStep > 1 && (
                    <button type="button" onClick={handlePrev} className="hanu-btn-ghost">
                      <ArrowLeft size={15} />
                      <span>Back</span>
                    </button>
                  )}

                  <button type="submit" className="hanu-btn-primary">
                    <span>{currentStep === 4 ? 'Confirm & Post Luxury Mandate' : 'Proceed to Next Step'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </form>
            ) : (
              /* Submission Success State */
              <div className="wizard-success-view">
                <div className="success-icon-wrap">
                  <Sparkles size={48} color="var(--color-gold)" />
                </div>
                <h2>Your Luxury Mandate Has Been Successfully Registered!</h2>
                <p>
                  Thank you, <strong>{ownerName}</strong>. Your property submission for <strong>{locality}, {selectedCity.toUpperCase()}</strong> has been routed directly to our Senior Advisory Directorate.
                </p>
                <div className="success-next-steps">
                  <h4>What Happens Next:</h4>
                  <ol>
                    <li>A Senior Realtor will contact you on <strong>{ownerPhone}</strong> within 2 business hours.</li>
                    <li>We will schedule a physical inspection and initiate the 40-Point Title Audit.</li>
                    <li>Our media crew will shoot 4K architectural photos and prepare the 360° virtual tour.</li>
                  </ol>
                </div>
                <div className="success-action-btns">
                  <button onClick={() => { setSubmitted(false); setCurrentStep(1); }} className="hanu-btn-ghost">
                    List Another Property
                  </button>
                  <button onClick={onNavigateHome} className="hanu-btn-primary">
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Why List with Hanu Reddy 6 Pillars */}
      <section className="hanu-seller-advantages-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">The Hanu Reddy Advantage</span>
            <h2>Why India’s Discerning Families Trust Us</h2>
            <p>Our institutional standards have set the benchmark in Indian luxury real estate for over 30 years.</p>
          </div>

          <div className="hanu-pillars-grid">
            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Lock size={22} /></div>
              <h3>Total Discretion & Privacy</h3>
              <p>We filter all prospective buyers rigorously. Zero unsolicited site visits, protected personal data, and confidential negotiations.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><ShieldCheck size={22} /></div>
              <h3>40-Point Title Verification</h3>
              <p>Our in-house legal counsel certifies the title before negotiations, preventing future litigation and speeding closing velocity.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Globe size={22} /></div>
              <h3>Global NRI Investor Reach</h3>
              <p>Direct presence in Irvine, California and strong ties across the USA, UK, UAE and Singapore diaspora markets.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Users size={22} /></div>
              <h3>150+ Licensed Full-time Realtors</h3>
              <p>No freelancers or part-time agents. Only seasoned, salaried professionals bound by our fiduciary code of ethics.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Award size={22} /></div>
              <h3>Scientific Market Valuation</h3>
              <p>Leveraging 30+ years of registered transaction registries to price your asset realistically for maximum capital gain.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Sparkles size={22} /></div>
              <h3>Zero Upfront Listing Fee</h3>
              <p>We invest 100% in marketing, virtual tours, and title verification upfront. Commission is payable only upon successful completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs for Sellers */}
      <section className="hanu-faqs-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Seller Intelligence</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="hanu-faqs-accordion">
            {FAQS_DATA.map((faq, i) => (
              <div key={i} className="hanu-faq-card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
