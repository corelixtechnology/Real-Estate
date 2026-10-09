import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Car, Check, ShieldCheck, Phone, MessageSquare, Calendar, Share2, Heart, Award, ArrowRight } from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function PropertyDetailModal({ property, onClose, onOpenEmiCalc }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scheduleSent, setScheduleSent] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientDate, setClientDate] = useState('');

  if (!property) return null;

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setScheduleSent(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hanu Reddy Realty, I am interested in property ${property.id}: "${property.title}" located at ${property.locality}, ${property.cityName} listed for ${property.priceFormatted}. Please share full details.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Top Gallery */}
        <div style={{ position: 'relative', background: '#17171d' }}>
          <div style={{ height: '420px', width: '100%', overflow: 'hidden' }}>
            <img
              src={property.images[activeImageIndex] || property.images[0]}
              alt={property.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Badges on Gallery */}
          <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
            <span className="badge-tag badge-exclusive">Exclusive Property</span>
            <span className="badge-tag badge-verified">100% Legal Title Verified</span>
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div style={{
              display: 'flex',
              gap: '10px',
              padding: '12px 20px',
              background: 'rgba(15, 15, 20, 0.85)',
              overflowX: 'auto'
            }}>
              {property.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="thumbnail"
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '80px',
                    height: '55px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    border: activeImageIndex === idx ? '2px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                    opacity: activeImageIndex === idx ? 1 : 0.65,
                    transition: 'var(--transition)'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: '36px' }}>
          {/* Header Row: Title & Price */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
                <MapPin size={16} />
                <span>{property.locality}, {property.cityName}</span>
                <span style={{ color: 'var(--color-text-muted)' }}>• ID: {property.id}</span>
              </div>
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                as="h2"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-dark)', lineHeight: 1.25, marginBottom: '6px' }}
              >
                {property.title}
              </TextAnimate>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                {property.address}
              </p>
            </div>


            <div style={{ textAlign: 'right', background: 'var(--color-bg-alt)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                {property.listingType === 'rent' ? 'Monthly Rental' : 'Investment Price'}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                {property.priceFormatted}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                {property.pricePerSqft}
              </div>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            background: 'var(--color-bg-main)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            marginBottom: '32px'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>BEDROOMS</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-dark)' }}>{property.bhk}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>SUPER BUILT-UP AREA</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-dark)' }}>{property.areaSqft.toLocaleString()} sq.ft</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>BATHROOMS</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-dark)' }}>{property.bathrooms} Luxury Baths</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>PARKING</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-dark)' }}>{property.carparks} Covered Bays</div>
            </div>
          </div>

          {/* Highlights & Features */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Property Highlights & Title Summary
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {property.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                  <ShieldCheck size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Badges */}
          <div style={{ marginBottom: '36px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-dark)', marginBottom: '14px' }}>
              Amenities & Infrastructure
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {property.amenities.map((amenity, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Check size={14} color="var(--color-primary)" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Assigned Realtor & Schedule Visit Box */}
          <div style={{
            background: 'linear-gradient(135deg, #1c1c22 0%, #291819 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '30px',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.8fr',
            gap: '30px'
          }}>
            {/* Realtor Info */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '20px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffc278', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                ASSIGNED SENIOR REALTOR
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ffc278' }}
                />
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>{property.agent.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>{property.agent.designation}</div>
                  <div style={{ fontSize: '0.78rem', color: '#ffc278', fontWeight: 600, marginTop: '2px' }}>{property.agent.experience}</div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`https://wa.me/912223334452?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: '#25D366', color: '#ffffff', fontSize: '0.88rem', padding: '10px 16px' }}
                >
                  <MessageSquare size={16} />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
                <a
                  href={`tel:${property.agent.phone}`}
                  className="btn"
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.88rem', padding: '10px 16px' }}
                >
                  <Phone size={16} />
                  <span>Call {property.agent.phone}</span>
                </a>
              </div>
            </div>

            {/* Schedule Visit Form */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffc278', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                REQUEST PRIVATE SITE INSPECTION
              </div>

              {scheduleSent ? (
                <div style={{ background: 'rgba(37, 211, 102, 0.15)', border: '1px solid #25D366', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <h4 style={{ color: '#25D366', fontSize: '1.1rem', marginBottom: '6px' }}>Site Visit Request Received!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    Our senior advisor {property.agent.name} will call you back within 15 minutes to confirm keys and appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 14px',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number *"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 14px',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <input
                    type="date"
                    value={clientDate}
                    onChange={(e) => setClientDate(e.target.value)}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '4px', background: 'var(--color-primary)' }}
                  >
                    <Calendar size={16} />
                    <span>Confirm Site Inspection Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
