import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, Sparkles, Building2, Phone, Mail, User, 
  MapPin, IndianRupee, Clock, ArrowRight, MessageSquare, Check, Award
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function LeadCaptureModal({ isOpen = true, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    countryCode: '+91',
    email: '',
    intent: 'buy', // 'buy', 'rent', 'sell', 'commercial', 'nri'
    preferredCity: 'Chennai',
    preferredLocality: '',
    budget: '₹1.5 Cr - ₹3.5 Cr',
    propertyType: 'Luxury Apartment / Flat',
    callbackTime: 'Immediate (Within 15 mins)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Lock background scrolling and pause Lenis while modal is open
  useEffect(() => {
    if (!isOpen) return;

    if (window.lenis) {
      window.lenis.stop();
    }

    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevWidth = document.body.style.width;

    document.body.style.overflow = 'hidden';

    return () => {
      if (window.lenis) {
        window.lenis.start();
      }
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.width = prevWidth;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const budgetOptions = {
    buy: [
      'Under ₹1 Crore',
      '₹1 Crore - ₹2.5 Crores',
      '₹2.5 Crores - ₹5 Crores',
      '₹5 Crores - ₹12 Crores',
      '₹12 Crores+ (Ultra Luxury / Estate)'
    ],
    rent: [
      '₹35,000 - ₹60,000 / month',
      '₹60,000 - ₹1.2 Lakhs / month',
      '₹1.2 Lakhs - ₹2.5 Lakhs / month',
      '₹2.5 Lakhs+ / month (Penthouse / Expat)'
    ],
    sell: [
      'Expected Value: Under ₹2 Cr',
      'Expected Value: ₹2 Cr - ₹5 Cr',
      'Expected Value: ₹5 Cr - ₹15 Cr',
      'Expected Value: ₹15 Cr+ (Bespoke Mandate)'
    ],
    commercial: [
      'Office Space / IT SEZ',
      'Retail Showroom / High Street',
      'Industrial / Warehousing Land',
      'Commercial Pre-Leased Investment'
    ],
    nri: [
      'Cross-Border Portfolio Advisory (India-US)',
      'High-Yield Rental Property Management',
      'Heritage / Ancestral Property Title & Sale',
      'Luxury Vacation Villa / Farmhouse'
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleIntentSelect = (intentKey) => {
    const currentBudgets = budgetOptions[intentKey] || budgetOptions.buy;
    setFormData((prev) => ({
      ...prev,
      intent: intentKey,
      budget: currentBudgets[1] || currentBudgets[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury concierge API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    }, 800);
  };

  const currentBudgetList = budgetOptions[formData.intent] || budgetOptions.buy;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      data-lenis-prevent="true"
      style={{ 
        zIndex: 1200, 
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div 
        className="modal-content-box lead-capture-modal-box" 
        data-lenis-prevent="true"
        style={{ 
          maxWidth: '860px',
          width: '95%',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          background: '#ffffff'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
          style={{
            top: '16px',
            right: '16px',
            zIndex: 30,
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div 
            className="lead-capture-success-container" 
            data-lenis-prevent="true"
            style={{ 
              padding: '48px 28px', 
              textAlign: 'center', 
              background: '#ffffff',
              overflowY: 'auto',
              maxHeight: '85vh'
            }}
          >
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(146, 28, 31, 0.1), rgba(197, 160, 89, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              border: '2px solid var(--color-primary)'
            }}>
              <CheckCircle2 size={44} color="var(--color-primary)" />
            </div>

            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: 'var(--color-primary)', marginBottom: '8px' }}
            >
              Consultation Request Confirmed!
            </TextAnimate>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', maxWidth: '540px', margin: '0 auto 16px auto', lineHeight: '1.6' }}>
              Thank you, <strong>{formData.fullName}</strong>. A dedicated Senior Realty Director for <strong>{formData.preferredCity}</strong> has been assigned to your requirement.
            </p>

            <div style={{
              background: 'var(--color-bg-alt)',
              borderRadius: '16px',
              padding: '16px 20px',
              maxWidth: '500px',
              margin: '0 auto 24px auto',
              textAlign: 'left',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Interest & Goal:</span>
                <strong style={{ color: 'var(--color-dark)', textTransform: 'capitalize' }}>
                  {formData.intent.toUpperCase()} • {formData.preferredCity}
                </strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Contact Registered:</span>
                <strong style={{ color: 'var(--color-dark)' }}>{formData.countryCode} {formData.phone}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Expected Callback:</span>
                <strong style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} /> {formData.callbackTime}
                </strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onClose}
                style={{ padding: '12px 26px', fontSize: '0.92rem' }}
              >
                Explore Properties
              </button>

              <a
                href={`https://wa.me/919840046555?text=${encodeURIComponent(`Hi Hanu Reddy Realty, I just submitted an inquiry for ${formData.intent} in ${formData.preferredCity} (Name: ${formData.fullName}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  padding: '12px 22px',
                  fontSize: '0.92rem',
                  borderColor: '#25D366',
                  color: '#128C7E',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={16} />
                Instant WhatsApp Connect
              </a>
            </div>
          </div>
        ) : (
          /* FORM GRID: SPLIT DESKTOP VIEW */
          <div 
            className="lead-modal-grid-layout" 
            data-lenis-prevent="true"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.35fr', 
              minHeight: '520px',
              overscrollBehavior: 'contain'
            }}
          >
            
            {/* Left Brand Panel */}
            <div 
              className="lead-modal-sidebar" 
              data-lenis-prevent="true"
              style={{
                background: 'linear-gradient(145deg, #1b1b22 0%, #301014 60%, #151518 100%)',
                padding: '38px 28px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background ambient glow */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                left: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.15)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }} />

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197, 160, 89, 0.15)', border: '1px solid rgba(197, 160, 89, 0.4)', borderRadius: '30px', padding: '5px 12px', marginBottom: '18px' }}>
                  <Sparkles size={13} color="#e5c382" />
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#e5c382' }}>
                    VIP Real Estate Advisory
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', lineHeight: '1.25', color: '#ffffff', marginBottom: '10px' }}>
                  Let Our Experts Find Your Next Prime Asset
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.55', marginBottom: '22px' }}>
                  Share your property requirements to receive curated off-market listings, transparent market valuations, and direct guidance from senior realtors.
                </p>

                {/* Key Value Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Award size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>30+ Years of Fiduciary Trust</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Zero litigation legal scrutiny on every registered estate.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Building2 size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Access 1,500+ Verified Properties</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Villas, sky mansions, commercial IT parks & plots.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <ShieldCheck size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Strict Zero Spam Guarantee</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Your phone and identity are never shared with third parties.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)' }}>
                  Trusted by over <strong style={{ color: '#ffffff' }}>25,000+ HNIs & Global NRI Families</strong> across Chennai, Bengaluru, Hyderabad & USA.
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div 
              className="lead-modal-form-content" 
              data-lenis-prevent="true"
              style={{ 
                padding: '34px 28px', 
                background: '#ffffff', 
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  <Sparkles size={13} />
                  <span>Personalized Property Match</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-dark)', margin: '4px 0 4px 0' }}>
                  Get In Touch With Our Lead Specialists
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                  Fill in your preferences below and a specialist will contact you with tailored options.
                </p>
              </div>

              {errorMsg && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.84rem', marginBottom: '14px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* 1. What are you looking to do? (Pill Buttons) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '7px' }}>
                    I am interested in:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {[
                      { key: 'buy', label: 'Buy Property' },
                      { key: 'rent', label: 'Rent / Lease' },
                      { key: 'sell', label: 'Sell / List' },
                      { key: 'commercial', label: 'Commercial' },
                      { key: 'nri', label: 'NRI Advisory' }
                    ].map((tab) => {
                      const isActive = formData.intent === tab.key;
                      return (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => handleIntentSelect(tab.key)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isActive ? 'var(--color-primary-bg)' : '#ffffff',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                            transition: 'var(--transition)'
                          }}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Full Name & Phone Number */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Full Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User size={15} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-muted)' }} />
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ paddingLeft: '34px', height: '40px', fontSize: '0.86rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Mobile Number *
                    </label>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        style={{
                          width: '70px',
                          height: '40px',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--color-bg-alt)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '0 4px',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+65">🇸🇬 +65</option>
                      </select>
                      <div style={{ position: 'relative', flex: 1 }}>
                        <Phone size={14} style={{ position: 'absolute', left: '10px', top: '13px', color: 'var(--color-text-muted)' }} />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="98400 12345"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          style={{ paddingLeft: '30px', height: '40px', fontSize: '0.86rem' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Email & Preferred City */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Email Address (Optional)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={15} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-muted)' }} />
                      <input
                        type="email"
                        name="email"
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ paddingLeft: '34px', height: '40px', fontSize: '0.86rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Target Metro City *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={15} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-muted)', zIndex: 1 }} />
                      <select
                        name="preferredCity"
                        value={formData.preferredCity}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ paddingLeft: '34px', height: '40px', fontSize: '0.86rem' }}
                      >
                        <option value="Chennai">Chennai, Tamil Nadu</option>
                        <option value="Bengaluru">Bengaluru, Karnataka</option>
                        <option value="Hyderabad">Hyderabad, Telangana</option>
                        <option value="Coimbatore">Coimbatore, Tamil Nadu</option>
                        <option value="Mysore">Mysuru, Karnataka</option>
                        <option value="California">California, USA (NRI Hub)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Budget / Requirement Segment */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Budget / Valuation Range
                    </label>
                    <div style={{ position: 'relative' }}>
                      <IndianRupee size={14} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)', zIndex: 1 }} />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ paddingLeft: '32px', height: '40px', fontSize: '0.84rem' }}
                      >
                        {currentBudgetList.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                      Preferred Locality / Area
                    </label>
                    <input
                      type="text"
                      name="preferredLocality"
                      placeholder="e.g. Boat Club, Alwarpet, ECR..."
                      value={formData.preferredLocality}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.84rem' }}
                    />
                  </div>
                </div>

                {/* 5. Callback Preference */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '5px' }}>
                    Preferred Callback Window
                  </label>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {[
                      'Immediate (Within 15 mins)',
                      'Morning (9 AM - 12 PM)',
                      'Afternoon (12 PM - 5 PM)',
                      'Evening (5 PM - 8 PM)'
                    ].map((time) => {
                      const isTimeActive = formData.callbackTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, callbackTime: time }))}
                          style={{
                            padding: '5px 9px',
                            borderRadius: '8px',
                            fontSize: '0.76rem',
                            border: isTimeActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isTimeActive ? 'var(--color-primary-bg)' : 'var(--color-bg-alt)',
                            color: isTimeActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {isTimeActive && <Check size={11} />}
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action */}
                <div style={{ marginTop: '6px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 8px 20px rgba(146, 28, 31, 0.3)'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Submitting Details...</span>
                    ) : (
                      <>
                        <span>Submit Details & Request Callback</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy footer */}
                <div style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <ShieldCheck size={13} color="var(--color-primary)" />
                  <span>Strictly confidential. No spam calls. Verified realtors only.</span>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
