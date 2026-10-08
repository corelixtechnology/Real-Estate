import React from 'react';
import { Home, Building2, Globe, Handshake, ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function ServicesSection({ onOpenListProperty, onSelectService }) {
  const iconMap = {
    Home: Home,
    Building2: Building2,
    Globe: Globe,
    Handshake: Handshake,
    ShieldCheck: ShieldCheck,
    Compass: Compass
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              FULL SPECTRUM REAL ESTATE ADVISORY
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Comprehensive Real Estate Services
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            Whether you are buying a family villa, leasing a multinational corporate campus, or monetizing ancestral land, our team provides 360-degree fiduciary guidance.
          </TextAnimate>

        </div>


        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div key={service.id} className="service-box-card">
                <div className="service-icon-wrap">
                  <Icon size={26} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-bullets">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="service-bullet-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '24px', width: '100%', fontSize: '0.88rem' }}
                  onClick={onOpenListProperty}
                >
                  <span>Inquire About Service</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
