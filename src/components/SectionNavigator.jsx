import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'stats', label: 'Key Highlights' },
  { id: 'properties', label: 'Prime Properties' },
  { id: 'cities', label: 'City Explorer' },
  { id: 'services', label: 'Services' },
  { id: 'odyssey', label: 'Our Legacy' },
  { id: 'realtors', label: 'Senior Realtors' },
  { id: 'testimonials', label: 'Client Reviews' },
  { id: 'contact', label: 'Offices & Contact' }
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            setCurrentIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -75, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };


  const handleNextSection = () => {
    const nextIdx = (currentIndex + 1) % SECTIONS.length;
    scrollToSection(SECTIONS[nextIdx].id);
  };

  const handlePrevSection = () => {
    const prevIdx = (currentIndex - 1 + SECTIONS.length) % SECTIONS.length;
    scrollToSection(SECTIONS[prevIdx].id);
  };

  const nextSectionName = SECTIONS[(currentIndex + 1) % SECTIONS.length].label;

  return (
    <>
      {/* Side Dot Navigation Bar */}
      <nav className="section-side-nav" aria-label="Page Sections">
        {SECTIONS.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className={`section-nav-dot-btn ${activeSection === sec.id ? 'active' : ''}`}
            aria-label={`Scroll to ${sec.label}`}
          >
            <span className="section-nav-tooltip">{sec.label}</span>
            <span className="section-nav-dot" />
          </button>
        ))}
      </nav>
    </>
  );
}
