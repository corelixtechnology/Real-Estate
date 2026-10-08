import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/918056035603?text=Hello%20Hanu%20Reddy%20Realty,%20I%20would%20like%20to%20inquire%20about%20properties.";

  return (
    <div className="exact-floating-actions-container">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="exact-floating-btn exact-whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+914443999000"
        className="exact-floating-btn exact-phone-btn"
        title="Call Helpline"
        aria-label="Call Helpline"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
