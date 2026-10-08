import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp, Sparkles, Scale, ExternalLink, Calculator } from 'lucide-react';
import { CITIES } from '../data/mockData';

export default function Footer({ 
  onNavigatePage, 
  onOpenListProperty, 
  onOpenEmiCalc, 
  onOpenRoiCalc, 
  onSelectCity 
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageName) => {
    if (onNavigatePage) {
      onNavigatePage(pageName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="footer-main">
      <div className="container">

        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div className="brand-crest" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>HR</div>
              <div>
                <div className="brand-name" style={{ color: '#ffffff', fontSize: '1.2rem' }}>HANU REDDY REALTY</div>
                <div className="brand-sub" style={{ color: '#ffc278' }}>TRUSTED REAL ESTATE SINCE 1993</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Pioneers of organized institutional real estate brokerage in South India with cross-border operations in Irvine, California. Over 30 years of ethical leadership, zero litigation track record, and ₹10,000+ Crores in closed volume.
            </p>
            <div style={{ display: 'flex', gap: '8px', color: '#ffc278', fontSize: '0.85rem', alignItems: 'center' }}>
              <ShieldCheck size={16} />
              <span>100% Verified Legal Titles & Direct Fiduciary Advisory</span>
            </div>
          </div>

          {/* Col 2: Separate Pages Navigation */}
          <div>
            <h4 className="footer-col-title">Dedicated Portals</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item" onClick={() => handleNav('home')}>Home Overview</li>
              <li className="footer-link-item" onClick={() => handleNav('buy')}>Buy Luxury Estates</li>
              <li className="footer-link-item" onClick={() => handleNav('rent')}>Rentals & Leases</li>
              <li className="footer-link-item" onClick={() => handleNav('calq')}>CalQ Space Calculator</li>
              <li className="footer-link-item" onClick={() => handleNav('sell')}>List Your Property (Seller)</li>
              <li className="footer-link-item" onClick={() => handleNav('about')}>About Us & Founders</li>
              <li className="footer-link-item" onClick={() => handleNav('services')}>360° Services</li>
              <li className="footer-link-item" onClick={() => handleNav('agents')}>Senior Realtors</li>
            </ul>
          </div>

          {/* Col 3: Prime Cities */}
          <div>
            <h4 className="footer-col-title">Regional Metros</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item" onClick={() => { onSelectCity('chennai'); handleNav('buy'); }}>Chennai Luxury Corridor</li>
              <li className="footer-link-item" onClick={() => { onSelectCity('bengaluru'); handleNav('buy'); }}>Bengaluru Prime Residences</li>
              <li className="footer-link-item" onClick={() => { onSelectCity('hyderabad'); handleNav('buy'); }}>Hyderabad Jubilee Hills</li>
              <li className="footer-link-item" onClick={() => { onSelectCity('coimbatore'); handleNav('buy'); }}>Coimbatore Promenade</li>
              <li className="footer-link-item" onClick={() => { onSelectCity('irvine'); handleNav('buy'); }}>Irvine, California (USA)</li>
              <li className="footer-link-item" onClick={() => handleNav('cities')}>All City Network Guides</li>
            </ul>
          </div>

          {/* Col 4: Advisory & Tools */}
          <div>
            <h4 className="footer-col-title">Advisory & Tools</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item highlight-footer-item" onClick={() => handleNav('calq')}>
                <Calculator size={13} />
                <span>CalQ Office Space Calculator</span>
              </li>
              <li className="footer-link-item" onClick={onOpenEmiCalc}>Mortgage EMI Calculator</li>
              <li className="footer-link-item" onClick={onOpenRoiCalc}>Real Estate ROI Estimator</li>
              <li className="footer-link-item" onClick={() => handleNav('services')}>40-Point Title Audit</li>
              <li className="footer-link-item" onClick={() => handleNav('services')}>NRI Fiduciary Wealth Desk</li>
              <li className="footer-link-item" onClick={() => handleNav('careers')}>Careers & Realtor Academy</li>
              <li className="footer-link-item" onClick={() => handleNav('contact')}>Global Branch Directory</li>
            </ul>
          </div>

          {/* Col 5: Head Office & Helpline */}
          <div>
            <h4 className="footer-col-title">Central Directorate</h4>
            <div style={{ fontSize: '0.85rem', color: '#8c909e', lineHeight: 1.6, marginBottom: '14px' }}>
              No. 14, 2nd Floor, Kasturi Rangan Road, Alwarpet, Chennai, Tamil Nadu - 600018
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <a href="tel:+914443999000" style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} color="#ffc278" />
                <span>+91 44 4399 9000</span>
              </a>
              <a href="https://wa.me/918056035603" target="_blank" rel="noreferrer" style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '1.1rem' }}>●</span>
                <span>WhatsApp: +91 80560 35603</span>
              </a>
              <a href="mailto:chennai@hanureddyrealty.com" style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="#ffc278" />
                <span>chennai@hanureddyrealty.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Hanu Reddy Realty India Pvt Ltd & Hanu Reddy Realty Inc. (USA). All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>RERA & ISO 9001:2015 Compliant</span>
            <span>•</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Strict Non-Disclosure Privacy</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
