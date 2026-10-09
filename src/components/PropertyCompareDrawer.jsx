import React, { useState } from 'react';
import { X, Check, ArrowRight, Scale, Trash2, Eye } from 'lucide-react';

export default function PropertyCompareDrawer({
  compareList = [],
  onRemoveFromCompare,
  onClearCompare,
  onSelectProperty,
  onOpenEmiCalc
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Dock */}
      <div className="hanu-compare-floating-dock">
        <div className="hanu-compare-dock-inner">
          <div className="hanu-compare-dock-left">
            <div className="hanu-compare-badge-count">
              <Scale size={18} />
              <span>{compareList.length} / 3 Properties Selected</span>
            </div>
            <div className="hanu-compare-dock-thumbnails">
              {compareList.map((item) => (
                <div key={item.id} className="hanu-compare-thumb-pill">
                  <img src={item.images[0]} alt={item.title} />
                  <span className="thumb-title">{item.locality}</span>
                  <button
                    onClick={() => onRemoveFromCompare(item.id)}
                    className="thumb-remove"
                    title="Remove"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="hanu-compare-dock-actions">
            <button
              onClick={onClearCompare}
              className="hanu-btn-ghost-sm"
              title="Clear all"
            >
              Clear
            </button>
            <button
              onClick={() => setIsOpenModal(true)}
              className="hanu-btn-primary-sm"
            >
              <span>Compare Side-by-Side</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Comparison Modal */}
      {isOpenModal && (
        <div className="modal-overlay" onClick={() => setIsOpenModal(false)}>
          <div className="modal-content-box compare-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsOpenModal(false)}>
              <X size={20} />
            </button>

            <div className="compare-modal-header">
              <div className="badge-tag badge-gold">
                <Scale size={14} />
                <span>Executive Estate Comparison</span>
              </div>
              <h2 className="compare-modal-title">Side-by-Side Property Analysis</h2>
              <p className="compare-modal-subtitle">
                Compare floor plans, specifications, rates per sq.ft and fiduciary legal status.
              </p>
            </div>

            <div className="compare-table-wrapper">
              <table className="compare-luxury-table">
                <thead>
                  <tr>
                    <th className="feature-col">Specification</th>
                    {compareList.map((prop) => (
                      <th key={prop.id} className="property-col">
                        <div className="compare-card-head">
                          <img src={prop.images[0]} alt={prop.title} className="compare-card-img" />
                          <button
                            onClick={() => onRemoveFromCompare(prop.id)}
                            className="compare-card-remove-btn"
                            title="Remove"
                          >
                            <Trash2 size={13} />
                          </button>
                          <h4 className="compare-card-title">{prop.title}</h4>
                          <div className="compare-card-price">{prop.priceFormatted}</div>
                          <div className="compare-card-locality">{prop.locality}, {prop.cityName}</div>

                          <div className="compare-card-btn-group">
                            <button
                              onClick={() => {
                                setIsOpenModal(false);
                                onSelectProperty(prop);
                              }}
                              className="hanu-btn-primary-xs"
                            >
                              <Eye size={13} />
                              <span>View Estate</span>
                            </button>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat-name">Property ID</td>
                    {compareList.map(p => <td key={p.id} className="feat-val"><strong>{p.id}</strong></td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Property Type</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.propertyType}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Total Price</td>
                    {compareList.map(p => <td key={p.id} className="feat-val highlight-gold">{p.priceFormatted}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Rate per Sq.Ft</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.pricePerSqft}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Built-up Area</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.areaSqft.toLocaleString()} sq.ft</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Bedrooms / BHK</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.bhk}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Bathrooms</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.bathrooms || 'N/A'}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Car Parks</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.carparks || 'N/A'}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Facing</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.facing || 'East'}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Furnishing Status</td>
                    {compareList.map(p => <td key={p.id} className="feat-val">{p.furnishing}</td>)}
                  </tr>
                  <tr>
                    <td className="feat-name">Legal Title Clearance</td>
                    {compareList.map(p => (
                      <td key={p.id} className="feat-val text-success">
                        <span className="badge-pill-verified">
                          <Check size={12} /> 100% Verified
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feat-name">RERA Approved</td>
                    {compareList.map(p => (
                      <td key={p.id} className="feat-val">
                        {p.reraApproved ? '✓ Yes (Registered)' : 'Exempt / Freehold'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feat-name">Key Amenities</td>
                    {compareList.map(p => (
                      <td key={p.id} className="feat-val">
                        <div className="compare-amenities-tags">
                          {p.amenities?.slice(0, 4).map((am, i) => (
                            <span key={i} className="mini-amenity-tag">{am}</span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feat-name">Assigned Senior Realtor</td>
                    {compareList.map(p => (
                      <td key={p.id} className="feat-val">
                        <div className="compare-realtor-cell">
                          <img src={p.agent?.image} alt={p.agent?.name} />
                          <div>
                            <div className="agent-mini-name">{p.agent?.name}</div>
                            <div className="agent-mini-phone">{p.agent?.phone}</div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
