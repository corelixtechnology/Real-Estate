import React from 'react';
import { Phone, MessageSquare, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { REALTORS } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function RealtorsSection() {
  return (
    <section id="realtors" className="realtors-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <Award size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              150+ FULL-TIME LICENSED ADVISORS
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Meet Our Senior Realtors
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Our advisors bring decades of local micro-market mastery, legal proficiency, and elite negotiation skills to your transaction.
          </TextAnimate>

        </div>


        <div className="realtors-grid">
          {REALTORS.map((realtor) => {
            const waMsg = encodeURIComponent(
              `Hello ${realtor.name}, I found your profile on Hanu Reddy Realty and would like to consult with you regarding property investment.`
            );

            return (
              <div key={realtor.id} className="realtor-profile-card">
                <div className="realtor-img-wrap">
                  <img src={realtor.image} alt={realtor.name} className="realtor-img" />
                  <div className="realtor-exp-badge">{realtor.experience}</div>
                </div>

                <div className="realtor-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-muted)', fontSize: '0.78rem', marginBottom: '4px' }}>
                    <MapPin size={13} color="var(--color-primary)" />
                    <span>{realtor.location}</span>
                  </div>

                  <h3 className="realtor-name">{realtor.name}</h3>
                  <div className="realtor-desig">{realtor.designation}</div>
                  <p className="realtor-spec">{realtor.specialization}</p>

                  <div className="realtor-actions">
                    <a
                      href={`tel:${realtor.phone}`}
                      className="realtor-btn realtor-call-btn"
                    >
                      <Phone size={14} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/912223334452?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="realtor-btn realtor-wa-btn"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
