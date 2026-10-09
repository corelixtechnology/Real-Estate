import React, { useState } from 'react';
import { X, Eye, Compass, Maximize, RotateCcw, Volume2, VolumeX, Sparkles, MapPin, ChevronRight, Check } from 'lucide-react';

export default function VirtualTourModal({ property, onClose, onOpenSchedule }) {
  const [activeRoom, setActiveRoom] = useState('living');
  const [ambientAudio, setAmbientAudio] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!property) return null;

  const ROOMS = [
    { id: 'living', name: 'Grand Living & Foyer', image: property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', description: 'Italian Botticino marble flooring with soaring 12ft double-height ceiling and floor-to-ceiling glass fenestrations.' },
    { id: 'master', name: 'Master Presidential Suite', image: property.images[1] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', description: 'Expansive private suite with walk-in teak wardrobe, private morning terrace and marble ensuite jacuzzi.' },
    { id: 'deck', name: 'Skyline Terrace / Deck', image: property.images[2] || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', description: 'Open-to-sky panoramic lounge with landscaped planters, glass balustrades and sunset horizon vistas.' },
    { id: 'kitchen', name: 'Gourmet Chef Kitchen', image: property.images[3] || 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', description: 'German Poggenpohl modular cabinetry with built-in Miele appliances and quartz prep island.' }
  ];

  const currentRoomData = ROOMS.find(r => r.id === activeRoom) || ROOMS[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box virtual-tour-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn tour-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {/* 360 Viewport Container */}
        <div className="virtual-tour-viewport">
          <img
            src={currentRoomData.image}
            alt={currentRoomData.name}
            className="virtual-tour-image"
            style={{ transform: `scale(${zoomLevel})` }}
          />

          {/* Overlay UI Controls */}
          <div className="virtual-tour-overlay-top">
            <div className="tour-property-meta">
              <span className="badge-tag badge-gold">
                <Sparkles size={13} /> 360° Ultra HD Immersion
              </span>
              <h3 className="tour-property-name">{property.title}</h3>
              <div className="tour-property-loc">
                <MapPin size={14} />
                <span>{property.locality}, {property.cityName}</span>
              </div>
            </div>

            <div className="tour-quick-actions">
              <button
                onClick={() => setAmbientAudio(!ambientAudio)}
                className={`tour-tool-btn ${ambientAudio ? 'active' : ''}`}
                title="Toggle Ambient Audio"
              >
                {ambientAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button
                onClick={() => setZoomLevel(prev => prev === 1 ? 1.25 : 1)}
                className="tour-tool-btn"
                title="Toggle Zoom"
              >
                <Maximize size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Hotspot Pills */}
          <div className="tour-hotspot tour-hotspot-1">
            <span className="hotspot-pulse"></span>
            <div className="hotspot-tooltip">
              <strong>Botticino Italian Marble</strong>
              <span>Imported 20mm slab mirror polished</span>
            </div>
          </div>

          <div className="tour-hotspot tour-hotspot-2">
            <span className="hotspot-pulse"></span>
            <div className="hotspot-tooltip">
              <strong>Acoustic Double Glazing</strong>
              <span>Saint-Gobain sound-dampened 100% UV glass</span>
            </div>
          </div>

          {/* Room Selector Carousel */}
          <div className="virtual-tour-room-selector">
            <div className="room-selector-label">Select Viewpoint:</div>
            <div className="room-pills-row">
              {ROOMS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(room.id)}
                  className={`room-pill-btn ${activeRoom === room.id ? 'active' : ''}`}
                >
                  <Compass size={13} />
                  <span>{room.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info & Walkthrough Call-to-action */}
        <div className="virtual-tour-bottom-bar">
          <div className="tour-room-description">
            <h4 className="active-room-title">{currentRoomData.name}</h4>
            <p className="active-room-text">{currentRoomData.description}</p>
          </div>

          <div className="tour-booking-prompt">
            <div className="tour-advisor-brief">
              <img src={property.agent?.image} alt={property.agent?.name} className="advisor-avatar-sm" />
              <div>
                <div className="advisor-name-sm">{property.agent?.name}</div>
                <div className="advisor-role-sm">Senior Managing Advisor</div>
              </div>
            </div>

            <a
              href={`https://wa.me/918056035603?text=${encodeURIComponent(`Hi, I just viewed the 360 virtual tour for ${property.title} (${property.id}). I would like to arrange an in-person private viewing.`)}`}
              target="_blank"
              rel="noreferrer"
              className="hanu-btn-primary"
            >
              <span>Schedule In-Person Walkthrough</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
