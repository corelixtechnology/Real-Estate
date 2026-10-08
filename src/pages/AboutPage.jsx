import React from 'react';
import PageHeader from '../components/PageHeader';
import { ODYSSEY_MILESTONES, AWARDS_LIST, REALTORS } from '../data/mockData';
import { 
  ShieldCheck, Award, Users, Globe, Building2, 
  Sparkles, CheckCircle, ArrowRight, HeartHandshake, FileText, Lock 
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function AboutPage({ onNavigateHome, onNavigatePage }) {
  return (
    <div className="hanu-page-view hanu-about-page">
      {/* Page Header */}
      <PageHeader
        badge="Heritage & Leadership"
        title="Three Decades of Uncompromised Trust & Fiduciary Excellence"
        subtitle="Founded in 1993, Hanu Reddy Realty pioneered organized, transparent real estate brokerage across South India and the USA."
        breadcrumb={[{ label: 'About Us & Legacy' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '1993', label: 'Year Established' },
          { value: '₹10,000 Cr+', label: 'Volume Transacted' },
          { value: '25,000+', label: 'Satisfied Families' },
          { value: '100%', label: 'Zero Litigation Title Record' }
        ]}
      />

      {/* Leadership Spotlight Section */}
      <section className="hanu-founders-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Guiding Vision</span>
            <h2>Founders & Directorate Leadership</h2>
            <p>Pioneering ethical, institutional-grade real estate advisory since 1993.</p>
          </div>

          <div className="founders-grid">
            {/* Founder 1: C. Suresh Reddy */}
            <div className="founder-card-luxury">
              <div className="founder-image-wrap">
                <img src={REALTORS[0].image} alt={REALTORS[0].name} />
                <div className="founder-experience-badge">32+ Years Leadership</div>
              </div>
              <div className="founder-content">
                <span className="founder-tag">Senior Managing Director</span>
                <h3>C. Suresh Reddy</h3>
                <div className="founder-role">Vice Chairman & Senior Managing Director</div>
                <p className="founder-bio">
                  A revered visionary in Indian commercial and luxury residential real estate. Over 32 years, Mr. C. Suresh Reddy has structured landmark transactions worth thousands of crores while championing uncompromised ethical standards and zero-litigation due diligence.
                </p>
                <div className="founder-principles">
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> 100% Transparent Documentation</div>
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> Client Fiduciary Duty Above All</div>
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> Long-Term Generational Relationships</div>
                </div>
              </div>
            </div>

            {/* Founder 2: Nirupama Reddy */}
            <div className="founder-card-luxury">
              <div className="founder-image-wrap">
                <img src={REALTORS[1].image} alt={REALTORS[1].name} />
                <div className="founder-experience-badge">22+ Years Leadership</div>
              </div>
              <div className="founder-content">
                <span className="founder-tag">International NRI Directorate</span>
                <h3>Nirupama Reddy</h3>
                <div className="founder-role">Executive Director & Head of International Services</div>
                <p className="founder-bio">
                  Leading our global NRI wealth advisory and cross-border transactions across India and the United States (Irvine, California). She has empowered thousands of overseas Indian families to invest securely in high-appreciating residential and commercial portfolios.
                </p>
                <div className="founder-principles">
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> Cross-Border FEMA & Tax Advisory</div>
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> Turnkey NRI Remote Asset Care</div>
                  <div className="principle-item"><CheckCircle size={15} color="var(--color-primary)" /> Curated High-Yield Portfolios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hanu Reddy Fiduciary Oath */}
      <section className="hanu-fiduciary-oath-section">
        <div className="container">
          <div className="hanu-oath-box">
            <div className="oath-crest">
              <ShieldCheck size={44} color="var(--color-gold)" />
            </div>
            <span className="badge-tag badge-gold">The Hanu Reddy Code</span>
            <h2>Our Ironclad Fiduciary Standard</h2>
            <p className="oath-text">
              "We believe that real estate transactions involve a family's generational life savings and a company’s strategic future. We pledge to never compromise on legal diligence, to represent our clients with total transparency, and to stand by our 40-Point Title Audit without deviation."
            </p>
            <div className="oath-pillars-row">
              <div className="oath-pillar">
                <Lock size={20} />
                <h4>Confidentiality</h4>
                <span>Discreet handling of ultra-high-value family assets</span>
              </div>
              <div className="oath-pillar">
                <FileText size={20} />
                <h4>Zero-Litigation</h4>
                <span>Rigorous 30-year Encumbrance Certificate & Patta audit</span>
              </div>
              <div className="oath-pillar">
                <HeartHandshake size={20} />
                <h4>No Conflict of Interest</h4>
                <span>We represent our clients with complete honesty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 30-Year Milestones Timeline */}
      <section className="hanu-timeline-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Our Odyssey</span>
            <h2>30+ Years of Landmark Milestones</h2>
            <p>From a modest single office in Chennai to a trans-continental realty powerhouse.</p>
          </div>

          <div className="timeline-interactive-track">
            {ODYSSEY_MILESTONES.map((milestone, idx) => (
              <div key={idx} className={`timeline-node-card ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year-bubble">{milestone.year}</div>
                <div className="timeline-card-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Accreditations */}
      <section className="hanu-awards-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Recognition</span>
            <h2>Prestigious Accreditations & Honors</h2>
          </div>

          <div className="awards-grid">
            {AWARDS_LIST.map((award, idx) => (
              <div key={idx} className="award-card">
                <div className="award-year">{award.year}</div>
                <div className="award-icon"><Award size={26} color="var(--color-gold)" /></div>
                <h4>{award.title}</h4>
                <div className="award-org">{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hanu-about-cta-section">
        <div className="container">
          <div className="hanu-about-cta-box">
            <h2>Experience Real Estate Advisory the Hanu Reddy Way</h2>
            <p>Whether buying an iconic estate or monetizing prime land, our Senior Realtors are ready to guide you.</p>
            <div className="about-cta-buttons">
              <button onClick={() => onNavigatePage('agents')} className="hanu-btn-primary">
                <span>Meet Senior Managing Directors</span>
                <ArrowRight size={15} />
              </button>
              <button onClick={() => onNavigatePage('contact')} className="hanu-btn-ghost">
                <span>Visit Our Regional Offices</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
