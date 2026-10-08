import React from 'react';
import { MapPin, ArrowRight, Building, Sparkles } from 'lucide-react';
import { CITIES } from '../data/mockData';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function CityExplorer({ onSelectCity }) {
  const cityCards = [
    {
      id: 'chennai',
      name: 'Chennai',
      state: 'Tamil Nadu (Headquarters)',
      count: '680+ Verified Properties',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      popular: 'Boat Club • Alwarpet • Anna Nagar • ECR • OMR • Nungambakkam'
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      state: 'Karnataka',
      count: '420+ Verified Properties',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
      popular: 'Indiranagar • Koramangala • Whitefield • Sadashivanagar'
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      state: 'Telangana',
      count: '240+ Verified Properties',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
      popular: 'Jubilee Hills • Banjara Hills • Financial District • Gachibowli'
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      state: 'Tamil Nadu',
      count: '90+ Verified Properties',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      popular: 'Race Course • RS Puram • Avinashi Road'
    },
    {
      id: 'irvine',
      name: 'Irvine, CA (USA)',
      state: 'California, USA',
      count: '35+ Global Listings',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80',
      popular: 'Turtle Rock • Woodbury • Spectrum Center'
    }
  ];

  return (
    <section id="cities" className="city-explorer-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <MapPin size={14} />
            <TextAnimate animation="blurInUp" by="character" once as="span">
              GLOBAL & REGIONAL FOOTPRINT
            </TextAnimate>
          </div>
          <TextAnimate animation="blurInUp" by="character" once as="h2" className="section-title">
            Explore Properties By City
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="section-subtitle" delay={0.15}>
            From premier metropolitan penthouses in Chennai and Bengaluru to NRI cross-border advisory in California.
          </TextAnimate>

        </div>


        <div className="cities-grid">
          {cityCards.map((card) => (
            <div
              key={card.id}
              className="city-tile-card"
              onClick={() => {
                onSelectCity(card.id);
                const elem = document.getElementById('properties');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src={card.image} alt={card.name} className="city-tile-img" />
              <div className="city-tile-overlay">
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
                  {card.state}
                </div>
                <h3 className="city-tile-name">{card.name}</h3>
                <div className="city-tile-count">{card.count}</div>
                <div className="city-tile-popular">{card.popular}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
