import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function PageHeader({
  badge = 'Luxury Real Estate',
  title,
  subtitle,
  breadcrumb = [],
  onNavigateHome,
  stats = []
}) {
  return (
    <section className="hanu-page-header">
      <div className="hanu-page-header-bg-glow"></div>
      <div className="container hanu-page-header-content">
        
        {/* Breadcrumb */}
        <div className="hanu-page-breadcrumb">
          <button 
            onClick={onNavigateHome} 
            className="hanu-breadcrumb-btn"
            title="Go to Homepage"
          >
            <Home size={14} />
            <span>Home</span>
          </button>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={13} className="hanu-breadcrumb-arrow" />
              {crumb.onClick ? (
                <button onClick={crumb.onClick} className="hanu-breadcrumb-btn">
                  {crumb.label}
                </button>
              ) : (
                <span className="hanu-breadcrumb-current">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Badge */}
        {badge && (
          <div className="hanu-page-badge">
            <Sparkles size={14} />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <div className="hanu-page-title-wrap">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            as="h1"
            className="hanu-page-title"
          >
            {title}
          </TextAnimate>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="hanu-page-subtitle">
            {subtitle}
          </p>
        )}

        {/* Optional Header Stats */}
        {stats.length > 0 && (
          <div className="hanu-page-header-stats">
            {stats.map((st, i) => (
              <div key={i} className="hanu-page-header-stat-item">
                <span className="stat-val">{st.value}</span>
                <span className="stat-lbl">{st.label}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
