import React from 'react';
import { Award, TrendingUp, Users, Building, ShieldCheck } from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function StatsRibbon() {
  const stats = [
    {
      icon: Award,
      number: '30+ Years',
      label: 'Of Excellence',
      sub: 'Founded in 1993'
    },
    {
      icon: TrendingUp,
      number: '₹ 10,000+ Cr',
      label: 'Volume Transacted',
      sub: 'Landmark Real Estate'
    },
    {
      icon: Users,
      number: '150+ Full-Time',
      label: 'Expert Realtors',
      sub: 'Trained & Certified'
    },
    {
      icon: Building,
      number: '25,000+',
      label: 'Satisfied Clients',
      sub: 'Families & MNCs'
    },
    {
      icon: ShieldCheck,
      number: '100% Clear',
      label: 'Zero Litigation',
      sub: 'Strict Fiduciary Due Diligence'
    }
  ];

  return (
    <section id="stats" className="stats-ribbon-section">
      <div className="container">

        <div className="stats-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="stat-item">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                  <Icon size={22} color="var(--color-primary)" />
                </div>
                <TextAnimate animation="blurInUp" by="character" once as="div" className="stat-number">
                  {item.number}
                </TextAnimate>
                <div className="stat-label">{item.label}</div>
                <div className="stat-sub">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

