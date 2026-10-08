import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { ODYSSEY_MILESTONES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function LegacyOdyssey() {
  return (
    <section id="odyssey" className="odyssey-section">
      <div className="container">
        <div className="odyssey-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              THE HANU REDDY LEGACY
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            The Odyssey of Trust & Integrity
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Founded in 1993, Hanu Reddy Realty revolutionized Indian real estate brokerage by introducing institutional ethics, transparent documentation, and lifelong client relationships.
          </TextAnimate>

        </div>


        {/* Founder Spotlight Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-xl)',
          padding: '40px',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Hanu Reddy Leadership"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)'
              }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Mr. Hanu Reddy</div>
                <div style={{ fontSize: '0.8rem', color: '#ffc278' }}>Founder & Global Chairman</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: '#ffc278', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              FOUNDER’S PHILOSOPHY
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
              "Real estate is not about concrete and land — it is about the sanctity of family savings and ethical custodianship."
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
              For over three decades, we have maintained a strict zero-compromise policy on legal title verification. Every property listed under the Hanu Reddy crest is examined by senior legal counsels with 40-year parent deed tracebacks, ensuring our buyers and investors sleep with total peace of mind.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: '#ffc278', fontWeight: 700, fontSize: '0.95rem' }}>100% Direct Verification</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem' }}>No unverified third-party scraped data</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: '#ffc278', fontWeight: 700, fontSize: '0.95rem' }}>Transparent Brokerage</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem' }}>Strict standard fee policy with zero hidden costs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Milestones Grid */}
        <div className="odyssey-timeline-grid">
          {ODYSSEY_MILESTONES.map((milestone, index) => (
            <div key={index} className="odyssey-card">
              <div className="odyssey-year">{milestone.year}</div>
              <div className="odyssey-title">{milestone.title}</div>
              <p className="odyssey-desc">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
