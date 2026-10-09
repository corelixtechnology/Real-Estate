import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, Sparkles, Building2, Phone, Mail, User, 
  MapPin, IndianRupee, Clock, ArrowRight, MessageSquare, Check, Award,
  Briefcase, Landmark, Layers, TrendingUp, Star, Shield
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function LeadCaptureModal({ isOpen = true, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    countryCode: '+91',
    email: '',
    companyName: '',
    commercialIntent: 'Lease / Rent Space', // 'Lease / Rent Space', 'Commercial Purchase', 'Pre-Leased (High ROI)', 'List Commercial Space'
    commercialType: 'Corporate Office / IT Park',
    preferredCity: 'Chennai',
    preferredLocality: '',
    spaceRequired: '2,500 - 10,000 sq.ft',
    budget: '₹2 Lakhs - ₹8 Lakhs / month',
    callbackTime: 'Immediate (Within 15 mins)'
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
    document.body.style.overflow = 'hidden';

    return () => {
      if (window.lenis) {
        window.lenis.start();
      }
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const transactionModes = [
    { key: 'Lease / Rent Space', label: 'Lease / Rent Office' },
    { key: 'Commercial Purchase', label: 'Commercial Purchase' },
    { key: 'Pre-Leased (High ROI)', label: 'Pre-Leased (7-10% Yield)' },
    { key: 'List Commercial Space', label: 'List My Commercial Space' }
  ];

  const commercialCategories = [
    { key: 'Corporate Office / IT Park', label: 'Corporate Office / IT Park', desc: 'Warm Shell & Plug & Play', icon: Building2 },
    { key: 'Retail Showroom', label: 'Retail & Showrooms', desc: 'High Street & Prime Malls', icon: Landmark },
    { key: 'Warehouse & Logistics', label: 'Warehousing & Logistics', desc: 'Grade-A Logistics Parks', icon: Layers },
    { key: 'Commercial Land / Plots', label: 'Commercial Land / Plots', desc: 'Mixed-Use & Tech Corridors', icon: Briefcase }
  ];

  const spaceSizeOptions = [
    'Under 2,500 sq.ft (Boutique Office / Retail)',
    '2,500 - 10,000 sq.ft (Corporate Branch)',
    '10,000 - 35,000 sq.ft (Mid-Scale IT / Floor Plate)',
    '35,000 - 1,00,000+ sq.ft (Enterprise Campus)',
    'Multi-Acre Commercial Land'
  ];

  const budgetOptions = [
    'Lease: ₹50,000 - ₹2 Lakhs / month',
    'Lease: ₹2 Lakhs - ₹8 Lakhs / month',
    'Lease: ₹8 Lakhs - ₹25 Lakhs+ / month',
    'Purchase: ₹1 Cr - ₹3 Cr',
    'Purchase: ₹3 Cr - ₹10 Cr',
    'Purchase: ₹10 Cr - ₹50 Cr+ (Institutional Asset)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid mobile number.');
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

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      data-lenis-prevent="true"
      style={{ 
        zIndex: 1200, 
        padding: '20px 14px',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        background: 'rgba(8, 8, 12, 0.82)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div 
        className="modal-content-box lead-capture-modal-box" 
        data-lenis-prevent="true"
        style={{ 
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch'
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
            boxShadow: '0 4px 14px rgba(0,0,0,0.18)'
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
              padding: '52px 32px', 
              textAlign: 'center', 
              background: '#ffffff',
              overflowY: 'auto',
              maxHeight: '85vh'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(146, 28, 31, 0.12), rgba(197, 160, 89, 0.28))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(146, 28, 31, 0.2)'
            }}>
              <CheckCircle2 size={46} color="var(--color-primary)" />
            </div>

            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '8px' }}
            >
              Commercial Mandate Confirmed!
            </TextAnimate>

            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', maxWidth: '540px', margin: '0 auto 18px auto', lineHeight: '1.6' }}>
              Thank you, <strong>{formData.fullName}</strong>. A dedicated Senior Commercial Real Estate Director for <strong>{formData.preferredCity}</strong> has been assigned to your requirement.
            </p>

            <div style={{
              background: 'linear-gradient(135deg, #fdfbf7 0%, #f7f3eb 100%)',
              borderRadius: '16px',
              padding: '18px 24px',
              maxWidth: '500px',
              margin: '0 auto 26px auto',
              textAlign: 'left',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Commercial Segment:</span>
                <strong style={{ color: 'var(--color-dark)' }}>{formData.commercialType}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Intent & Target City:</span>
                <strong style={{ color: 'var(--color-dark)' }}>{formData.commercialIntent} • {formData.preferredCity}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Registered Contact:</span>
                <strong style={{ color: 'var(--color-dark)' }}>{formData.countryCode} {formData.phone}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Priority Callback:</span>
                <strong style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} /> {formData.callbackTime}
                </strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onClose}
                style={{ padding: '12px 28px', fontSize: '0.94rem' }}
              >
                Browse Commercial Spaces
              </button>

              <a
                href={`https://wa.me/919840046555?text=${encodeURIComponent(`Hi Hanu Reddy Realty, I need commercial real estate advisory for ${formData.commercialType} in ${formData.preferredCity}. (Name: ${formData.fullName}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.94rem',
                  borderColor: '#25D366',
                  color: '#128C7E',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={16} />
                Instant WhatsApp Commercial Desk
              </a>
            </div>
          </div>
        ) : (
          /* LUXURY SPLIT-CARD VIEW */
          <div 
            className="lead-modal-grid-layout" 
            data-lenis-prevent="true"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '325px 1fr', 
              minHeight: '560px',
              overscrollBehavior: 'contain'
            }}
          >
            
            {/* Left Brand Panel - Royal Dark Obsidian & Burgundy */}
            <div 
              className="lead-modal-sidebar" 
              data-lenis-prevent="true"
              style={{
                background: 'linear-gradient(160deg, #15151c 0%, #2f0d12 45%, #181820 100%)',
                padding: '38px 28px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                borderRight: '1px solid rgba(197, 160, 89, 0.25)'
              }}
            >
              {/* Radial ambient gold shimmer */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div>
                {/* Gold Crest Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.2), rgba(146, 28, 31, 0.3))',
                  border: '1px solid rgba(197, 160, 89, 0.55)',
                  borderRadius: '30px',
                  padding: '6px 14px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                }}>
                  <Sparkles size={14} color="#e5c382" />
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#e5c382' }}>
                    VIP COMMERCIAL DESK
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', lineHeight: '1.3', color: '#ffffff', marginBottom: '12px' }}>
                  Enterprise Commercial Spaces & High-Yield Assets
                </h3>

                <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.58', marginBottom: '22px' }}>
                  Connecting corporate enterprises, IT conglomerates, retail brands, and investors with Grade-A commercial properties.
                </p>

                {/* Trust Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.22)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Building2 size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Grade-A Tech Parks & Offices</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Turnkey warm shell & fully fitted plug-and-play spaces.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.22)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <TrendingUp size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Pre-Leased Assets (7.5% - 10% ROI)</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>MNC tenant covenants with long lock-ins and rental yield.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.22)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <ShieldCheck size={15} color="#e5c382" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>100% Title Verified & Zero Spam</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Direct legal scrutiny and transparent lease term negotiations.</p>
                    </div>
                  </div>
                </div>

                {/* Stat ribbon */}
                <div className="lead-trust-stat-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#e5c382', fontWeight: 700 }}>Volume Closed</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>₹10,000+ Cr</div>
                  </div>
                  <div style={{ width: '1px', height: '26px', background: 'rgba(255,255,255,0.15)' }} />
                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#e5c382', fontWeight: 700 }}>Trust Record</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>30+ Years</div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} color="#e5c382" />
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)' }}>
                  Trusted by Fortune 500 corporations, CXOs & NRI investors.
                </div>
              </div>
            </div>

            {/* Right Interactive Form - High-End Luxury White Studio */}
            <div 
              className="lead-modal-form-content" 
              data-lenis-prevent="true"
              style={{ 
                padding: '36px 32px', 
                background: '#ffffff', 
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  <Sparkles size={13} />
                  <span>Personalized Commercial Advisory</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--color-dark)', margin: '4px 0 4px 0', fontWeight: 700 }}>
                  Submit Your Commercial Requirement
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                  Tell us your commercial space requirement to connect with our senior corporate transaction advisors.
                </p>
              </div>

              {errorMsg && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '10px 14px', borderRadius: '10px', fontSize: '0.84rem', marginBottom: '14px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* 1. Transaction Requirement (Luxury Pill Buttons) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
                    I am interested in:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {transactionModes.map((tab) => {
                      const isActive = formData.commercialIntent === tab.key;
                      return (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, commercialIntent: tab.key }))}
                          className={`lead-mode-pill ${isActive ? 'active' : ''}`}
                          style={{
                            padding: '6px 13px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isActive ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                            color: isActive ? '#ffffff' : 'var(--color-text-main)'
                          }}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Commercial Property Category (Glass Cards) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
                    Commercial Property Type:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {commercialCategories.map((cat) => {
                      const isActive = formData.commercialType === cat.key;
                      const IconComp = cat.icon;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, commercialType: cat.key }))}
                          className={`lead-cat-card ${isActive ? 'active' : ''}`}
                          style={{
                            padding: '8px 10px',
                            borderRadius: '10px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isActive ? 'linear-gradient(135deg, rgba(146, 28, 31, 0.08), rgba(197, 160, 89, 0.14))' : '#ffffff',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textAlign: 'left'
                          }}
                        >
                          <div style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            background: isActive ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                            color: isActive ? '#ffffff' : 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <IconComp size={15} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.8rem' }}>{cat.label}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{cat.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Contact Name & Mobile Number */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Contact Name *
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
                        className="form-input lead-input-enhanced"
                        style={{ paddingLeft: '34px', height: '40px', fontSize: '0.86rem', borderRadius: '10px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Mobile Number *
                    </label>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        style={{
                          width: '72px',
                          height: '40px',
                          border: '1.5px solid var(--color-border)',
                          borderRadius: '10px',
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
                          className="form-input lead-input-enhanced"
                          style={{ paddingLeft: '30px', height: '40px', fontSize: '0.86rem', borderRadius: '10px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Company & Official Email */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Company / Enterprise Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Briefcase size={14} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)' }} />
                      <input
                        type="text"
                        name="companyName"
                        placeholder="e.g. Infotech Global / Retail Co"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="form-input lead-input-enhanced"
                        style={{ paddingLeft: '32px', height: '40px', fontSize: '0.86rem', borderRadius: '10px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Official Email ID
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={14} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)' }} />
                      <input
                        type="email"
                        name="email"
                        placeholder="anand@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input lead-input-enhanced"
                        style={{ paddingLeft: '32px', height: '40px', fontSize: '0.86rem', borderRadius: '10px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* 5. City & Space Required */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Target Metro City *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={14} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)', zIndex: 1 }} />
                      <select
                        name="preferredCity"
                        value={formData.preferredCity}
                        onChange={handleInputChange}
                        className="form-select lead-input-enhanced"
                        style={{ paddingLeft: '32px', height: '40px', fontSize: '0.84rem', borderRadius: '10px' }}
                      >
                        <option value="Chennai">Chennai (OMR, Guindy, Mount Rd)</option>
                        <option value="Bengaluru">Bengaluru (Whitefield, ORR, E-City)</option>
                        <option value="Hyderabad">Hyderabad (Hitec City, Financial Dist)</option>
                        <option value="Coimbatore">Coimbatore (Avinashi Rd, TIDEL)</option>
                        <option value="Mysore">Mysuru (Hebbal Industrial Area)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Space Required (Sq. Ft.)
                    </label>
                    <select
                      name="spaceRequired"
                      value={formData.spaceRequired}
                      onChange={handleInputChange}
                      className="form-select lead-input-enhanced"
                      style={{ height: '40px', fontSize: '0.84rem', borderRadius: '10px' }}
                    >
                      {spaceSizeOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 6. Budget Range & Preferred Callback */}
                <div className="lead-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Budget / Monthly Lease Range
                    </label>
                    <div style={{ position: 'relative' }}>
                      <IndianRupee size={13} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)', zIndex: 1 }} />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-select lead-input-enhanced"
                        style={{ paddingLeft: '30px', height: '40px', fontSize: '0.84rem', borderRadius: '10px' }}
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Preferred Callback Window
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Clock size={13} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-text-muted)', zIndex: 1 }} />
                      <select
                        name="callbackTime"
                        value={formData.callbackTime}
                        onChange={handleInputChange}
                        className="form-select lead-input-enhanced"
                        style={{ paddingLeft: '30px', height: '40px', fontSize: '0.84rem', borderRadius: '10px' }}
                      >
                        <option value="Immediate (Within 15 mins)">Immediate (Within 15 mins)</option>
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                        <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div style={{ marginTop: '6px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="lead-submit-vip-btn"
                    style={{
                      width: '100%',
                      padding: '13px 20px',
                      fontSize: '0.94rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      borderRadius: '12px',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Connecting Commercial Desk...</span>
                    ) : (
                      <>
                        <span>Submit Commercial Requirement & Request Callback</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy footer */}
                <div style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', paddingTop: '2px' }}>
                  <ShieldCheck size={14} color="var(--color-primary)" />
                  <span>Strictly confidential. Enterprise Grade-A Commercial Advisory.</span>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
