import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, Menu, X, Building2, User, Layers, 
  Sparkles, Phone, ShieldCheck, Home, Briefcase, Globe, Scale, Calculator, ArrowRight, Key, PlusCircle, CheckCircle2
} from 'lucide-react';

export default function Navbar({
  currentPage = 'home',
  onNavigatePage,
  onOpenListProperty,
  onOpenAuth,
  compareCount = 0
}) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [agentsDropdownOpen, setAgentsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const aboutRef = useRef(null);
  const agentsRef = useRef(null);
  const servicesRef = useRef(null);
  const propertiesRef = useRef(null);

  // Scroll listener for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (agentsRef.current && !agentsRef.current.contains(event.target)) {
        setAgentsDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (propertiesRef.current && !propertiesRef.current.contains(event.target)) {
        setPropertiesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (pageName) => {
    setAboutDropdownOpen(false);
    setAgentsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setPropertiesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (onNavigatePage) {
      onNavigatePage(pageName);
    }
  };

  return (
    <header className={`hanu-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Top Heritage Gold Bar */}
      <div className="hanu-navbar-top-strip">
        <div className="container-wide top-strip-inner">
          <div className="top-strip-left">
            <span className="strip-badge"><ShieldCheck size={13} /> 30+ YEARS OF FIDUCIARY TRUST</span>
            <span className="strip-dot">•</span>
            <span className="strip-text">Zero Litigation Legal Due Diligence Standard</span>
          </div>
          <div className="top-strip-right">
            <a href="tel:+914443999000" className="strip-phone">
              <Phone size={12} />
              <span>Central Helpline: +91 44 4399 9000</span>
            </a>
            <span className="strip-dot">•</span>
            <span className="strip-global">USA Hub: Irvine, California</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="container-wide hanu-navbar-inner">
        
        {/* Regal Brand Logo & Monogram */}
        <a 
          href="#home" 
          className="hanu-logo-link"
          onClick={(e) => { 
            e.preventDefault(); 
            handleNav('home'); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          <div className="brand-regal-crest">
            <span className="crest-initials">HR</span>
          </div>
          <div className="brand-text-stack">
            <span className="hanu-brand-wordmark">
              Hanu Reddy Realty<span className="hanu-registered-symbol">®</span>
            </span>
            <span className="hanu-brand-subtag">
              EST. 1993 • PRIME REAL ESTATE
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hanu-nav-links-desktop">
          
          {/* Home Link */}
          <button 
            className={`hanu-nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            <span>Home</span>
          </button>

          {/* About Dropdown */}
          <div 
            className="hanu-nav-item-dropdown" 
            ref={aboutRef}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button 
              className={`hanu-nav-link ${currentPage === 'about' || currentPage === 'cities' ? 'active' : ''}`}
              onClick={() => handleNav('about')}
            >
              <span>About</span>
              <ChevronDown size={13} className={`hanu-chevron ${aboutDropdownOpen ? 'open' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="hanu-dropdown-menu luxury-dropdown-box">
                <div className="hanu-dropdown-item" onClick={() => handleNav('about')}>
                  <div className="dropdown-icon-bubble"><Sparkles size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>Our Legacy & Founders</strong>
                    <span>30+ years of uncompromised honesty & fiduciary ethics</span>
                  </div>
                </div>
                <div className="hanu-dropdown-item" onClick={() => handleNav('cities')}>
                  <div className="dropdown-icon-bubble"><Globe size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>City Network & Metros</strong>
                    <span>Chennai, Bengaluru, Hyderabad, Coimbatore, USA</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buy Link */}
          <button 
            className={`hanu-nav-link ${currentPage === 'buy' ? 'active' : ''}`}
            onClick={() => handleNav('buy')}
          >
            <span>Buy</span>
          </button>

          {/* Rent Link */}
          <button 
            className={`hanu-nav-link ${currentPage === 'rent' ? 'active' : ''}`}
            onClick={() => handleNav('rent')}
          >
            <span>Rent</span>
          </button>

          {/* Services Dropdown */}
          <div 
            className="hanu-nav-item-dropdown" 
            ref={servicesRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className={`hanu-nav-link ${currentPage === 'services' || currentPage === 'calq' ? 'active' : ''}`}
              onClick={() => handleNav('services')}
            >
              <span>Services</span>
              <ChevronDown size={13} className={`hanu-chevron ${servicesDropdownOpen ? 'open' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="hanu-dropdown-menu luxury-dropdown-box mega-dropdown">
                <div className="hanu-dropdown-item" onClick={() => handleNav('services')}>
                  <div className="dropdown-icon-bubble"><Building2 size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>360° Real Estate Solutions</strong>
                    <span>Residential luxury acquisitions & commercial leasing</span>
                  </div>
                </div>

                <div className="hanu-dropdown-item highlight-item" onClick={() => handleNav('calq')}>
                  <div className="dropdown-icon-bubble gold"><Calculator size={16} /></div>
                  <div className="dropdown-item-texts">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <strong>CalQ Space Calculator</strong>
                      <span className="badge-new-glow">INTERACTIVE</span>
                    </div>
                    <span>Commercial office space sizing & cost comparison</span>
                  </div>
                </div>

                <div className="hanu-dropdown-item" onClick={() => handleNav('services')}>
                  <div className="dropdown-icon-bubble"><Globe size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>NRI Asset Stewardship</strong>
                    <span>Turnkey remote management & FEMA repatriation</span>
                  </div>
                </div>

                <div className="hanu-dropdown-item" onClick={() => handleNav('services')}>
                  <div className="dropdown-icon-bubble"><ShieldCheck size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>40-Point Title Audit</strong>
                    <span>Comprehensive 30-year zero-litigation diligence</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Highly Visible Luxury CalQ Space Calculator Pill */}
          <button 
            className={`hanu-nav-calq-btn ${currentPage === 'calq' ? 'active' : ''}`}
            onClick={() => handleNav('calq')}
            title="CalQ — Commercial Space & Cost Calculator"
          >
            <Calculator size={15} className="calq-btn-icon" />
            <span className="calq-btn-text">CalQ</span>
            <span className="calq-pulse-dot" />
          </button>

          {/* List your Properties (Dedicated Page) */}
          <button 
            className={`hanu-nav-link ${currentPage === 'sell' ? 'active' : ''}`}
            onClick={() => handleNav('sell')}
          >
            <span>List your Properties</span>
          </button>

          {/* Agents Dropdown */}
          <div 
            className="hanu-nav-item-dropdown" 
            ref={agentsRef}
            onMouseEnter={() => setAgentsDropdownOpen(true)}
            onMouseLeave={() => setAgentsDropdownOpen(false)}
          >
            <button 
              className={`hanu-nav-link ${currentPage === 'agents' || currentPage === 'careers' ? 'active' : ''}`}
              onClick={() => handleNav('agents')}
            >
              <span>Agents</span>
              <ChevronDown size={13} className={`hanu-chevron ${agentsDropdownOpen ? 'open' : ''}`} />
            </button>

            {agentsDropdownOpen && (
              <div className="hanu-dropdown-menu luxury-dropdown-box">
                <div className="hanu-dropdown-item" onClick={() => handleNav('agents')}>
                  <div className="dropdown-icon-bubble"><User size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>Our Senior Realtors</strong>
                    <span>150+ full-time institutional brokers</span>
                  </div>
                </div>
                <div className="hanu-dropdown-item" onClick={() => handleNav('careers')}>
                  <div className="dropdown-icon-bubble"><Briefcase size={16} /></div>
                  <div className="dropdown-item-texts">
                    <strong>Careers & Realtor Academy</strong>
                    <span>Join India's most prestigious realty firm</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <button 
            className={`hanu-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNav('contact')}
          >
            <span>Contact</span>
          </button>
        </nav>

        {/* Right CTA Area: List Property & VIP Login & Mobile Tools */}
        <div className="hanu-nav-right-action">
          
          <button 
            className="hanu-list-prop-quick-btn" 
            onClick={() => handleNav('sell')}
          >
            <PlusCircle size={15} />
            <span>List Property</span>
          </button>

          <button className="hanu-auth-btn-luxury" onClick={onOpenAuth}>
            <span>Register / Login</span>
          </button>

          {/* Quick Mobile CalQ Calculator Button */}
          <button 
            className={`hanu-mobile-quick-calq-btn ${currentPage === 'calq' ? 'active' : ''}`}
            onClick={() => handleNav('calq')}
            title="CalQ Space Calculator"
            aria-label="CalQ Space Calculator"
          >
            <Calculator size={14} />
            <span>CalQ</span>
            <span className="calq-pulse-dot" />
          </button>

          {/* Quick Mobile Call Shortcut */}
          <a 
            href="tel:+914443999000" 
            className="hanu-mobile-quick-phone-btn"
            title="Call Central Helpline"
            aria-label="Call Central Helpline"
          >
            <Phone size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="hanu-mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="hanu-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Luxury Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="hanu-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          
          {/* Drawer Top Header */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand-wrap">
              <div className="brand-regal-crest" style={{ width: '38px', height: '38px', fontSize: '1rem' }}>
                <span className="crest-initials">HR</span>
              </div>
              <div className="mobile-drawer-brand">
                <strong className="mobile-drawer-title">Hanu Reddy Realty®</strong>
                <span className="mobile-drawer-tagline">EST. 1993 • LUXURY REAL ESTATE</span>
              </div>
            </div>

            <button 
              className="mobile-drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Action Pills Grid */}
          <div className="mobile-quick-actions-row">
            <button 
              className="mobile-quick-pill highlight"
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
            >
              <User size={15} />
              <span>VIP Login</span>
            </button>
            <button 
              className="mobile-quick-pill gold"
              onClick={() => handleNav('sell')}
            >
              <PlusCircle size={15} />
              <span>List Property</span>
            </button>
            <a 
              href="https://wa.me/918056035603" 
              target="_blank" 
              rel="noreferrer" 
              className="mobile-quick-pill whatsapp"
            >
              <Sparkles size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Scrollable Navigation Category Cards */}
          <div className="mobile-drawer-links-scroll">
            
            {/* 1. Prime Marketplace */}
            <div className="mobile-section-group">
              <div className="mobile-section-label">PRIME MARKETPLACE</div>
              
              <button 
                className={`hanu-mobile-link-card ${currentPage === 'home' ? 'active' : ''}`} 
                onClick={() => handleNav('home')}
              >
                <div className="mobile-link-icon-bubble"><Home size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Home Showcase</strong>
                  <span>Featured prime residences & listings</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'buy' ? 'active' : ''}`} 
                onClick={() => handleNav('buy')}
              >
                <div className="mobile-link-icon-bubble"><Building2 size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Buy Luxury Properties</strong>
                  <span>Verified villas, penthouses & premium plots</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'rent' ? 'active' : ''}`} 
                onClick={() => handleNav('rent')}
              >
                <div className="mobile-link-icon-bubble"><Key size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Rent & Commercial Leases</strong>
                  <span>High-yield rentals & prime corporate spaces</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'sell' ? 'active' : ''}`} 
                onClick={() => handleNav('sell')}
              >
                <div className="mobile-link-icon-bubble gold"><PlusCircle size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>List Your Properties</strong>
                  <span>Fiduciary marketing & verified buyers</span>
                </div>
                <span className="mobile-link-badge gold">SELLER</span>
              </button>
            </div>

            {/* 2. Interactive Tools & Solutions */}
            <div className="mobile-section-group">
              <div className="mobile-section-label">INTERACTIVE LUXURY TOOLS</div>

              <button 
                className={`hanu-mobile-link-card highlight ${currentPage === 'calq' ? 'active' : ''}`} 
                onClick={() => handleNav('calq')}
              >
                <div className="mobile-link-icon-bubble gold"><Calculator size={18} /></div>
                <div className="mobile-link-text-stack">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <strong>CalQ Space Calculator</strong>
                    <span className="mobile-link-badge pulse">NEW</span>
                  </div>
                  <span>Office area, seat count & rent estimator</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'services' ? 'active' : ''}`} 
                onClick={() => handleNav('services')}
              >
                <div className="mobile-link-icon-bubble"><Layers size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>360° Real Estate Solutions</strong>
                  <span>40-Point title audit & NRI asset stewardship</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>
            </div>

            {/* 3. Heritage & Network */}
            <div className="mobile-section-group">
              <div className="mobile-section-label">HERITAGE & NETWORK</div>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'about' ? 'active' : ''}`} 
                onClick={() => handleNav('about')}
              >
                <div className="mobile-link-icon-bubble"><Sparkles size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Our 30-Year Story & Founders</strong>
                  <span>Zero-litigation fiduciary trust standard</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'agents' ? 'active' : ''}`} 
                onClick={() => handleNav('agents')}
              >
                <div className="mobile-link-icon-bubble"><User size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Senior Realtors Directory</strong>
                  <span>150+ full-time certified realty consultants</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'cities' ? 'active' : ''}`} 
                onClick={() => handleNav('cities')}
              >
                <div className="mobile-link-icon-bubble"><Globe size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>City Metro Network</strong>
                  <span>Chennai, Bengaluru, Hyderabad, Coimbatore, USA</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'careers' ? 'active' : ''}`} 
                onClick={() => handleNav('careers')}
              >
                <div className="mobile-link-icon-bubble"><Briefcase size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Careers & Realtor Academy</strong>
                  <span>Join India's most prestigious realty advisory</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>

              <button 
                className={`hanu-mobile-link-card ${currentPage === 'contact' ? 'active' : ''}`} 
                onClick={() => handleNav('contact')}
              >
                <div className="mobile-link-icon-bubble"><Phone size={18} /></div>
                <div className="mobile-link-text-stack">
                  <strong>Contact & Regional Offices</strong>
                  <span>Helpline numbers, branch addresses & maps</span>
                </div>
                <ArrowRight size={14} className="mobile-link-arrow" />
              </button>
            </div>
          </div>

          {/* Drawer Bottom Direct Contact Strip */}
          <div className="mobile-drawer-bottom-actions">
            <a href="tel:+914443999000" className="mobile-call-action-btn">
              <Phone size={16} />
              <span>Helpline: +91 44 4399 9000</span>
            </a>

            <div className="mobile-drawer-trust-note">
              <ShieldCheck size={14} className="trust-icon-gold" />
              <span>30+ Years of Fiduciary Trust • Zero Litigation Standard</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
