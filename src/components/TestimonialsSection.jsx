import React from 'react';
import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">

        <div className="section-header-center">
          <div className="section-tag">
            <MessageSquare size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              CLIENT EXPERIENCES
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Trusted By Discerning Families & Global Corporates
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Read authentic feedback from home sellers, NRI investors, landowners, and Fortune 500 business heads who partnered with Hanu Reddy Realty.
          </TextAnimate>

        </div>


        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div className="rating-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" />
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-bg)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                  {item.type}
                </span>
              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-user">
                <img src={item.avatar} alt={item.name} className="user-avatar" />
                <div>
                  <div className="user-name">{item.name}</div>
                  <div className="user-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
