import React, { useState } from 'react';
import { X, TrendingUp, Calculator, ShieldCheck, DollarSign, Percent, PieChart, ArrowRight } from 'lucide-react';

export default function RoiCalculatorModal({ onClose, defaultPrice = 50000000 }) {
  const [propertyPrice, setPropertyPrice] = useState(defaultPrice);
  const [monthlyRent, setMonthlyRent] = useState(Math.round(defaultPrice * 0.0035));
  const [expectedAppreciation, setExpectedAppreciation] = useState(8.5);
  const [holdingYears, setHoldingYears] = useState(5);
  const [loanRatio, setLoanRatio] = useState(60); // 60% loan
  const [interestRate, setInterestRate] = useState(8.4);

  // Computations
  const annualRentalIncome = monthlyRent * 12;
  const grossRentalYield = ((annualRentalIncome / propertyPrice) * 100).toFixed(2);

  // Future appreciated value
  const futureValue = Math.round(propertyPrice * Math.pow(1 + expectedAppreciation / 100, holdingYears));
  const totalCapitalGain = futureValue - propertyPrice;
  const totalRentEarned = annualRentalIncome * holdingYears;
  const totalReturn = totalCapitalGain + totalRentEarned;
  const overallRoiPercent = (((futureValue + totalRentEarned - propertyPrice) / propertyPrice) * 100).toFixed(1);

  const formatINR = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${val.toLocaleString()}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box roi-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="roi-modal-header">
          <div className="badge-tag badge-gold">
            <Calculator size={14} />
            <span>Fiduciary Wealth Intelligence</span>
          </div>
          <h2 className="roi-modal-title">Luxury Real Estate ROI & Yield Calculator</h2>
          <p className="roi-modal-subtitle">
            Simulate capital appreciation, net rental yields, and wealth accumulation across prime Indian assets.
          </p>
        </div>

        <div className="roi-grid-container">
          {/* Controls Column */}
          <div className="roi-controls-col">

            {/* Property Price */}
            <div className="roi-field-group">
              <div className="roi-field-label">
                <span>Asset Acquisition Price</span>
                <span className="roi-val-display">{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min={10000000}
                max={300000000}
                step={2500000}
                value={propertyPrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setPropertyPrice(val);
                  setMonthlyRent(Math.round(val * 0.0035));
                }}
                className="roi-slider"
              />
              <div className="roi-scale-labels">
                <span>₹ 1 Cr</span>
                <span>₹ 15 Cr</span>
                <span>₹ 30 Cr</span>
              </div>
            </div>

            {/* Monthly Rental Expectation */}
            <div className="roi-field-group">
              <div className="roi-field-label">
                <span>Estimated Monthly Rental</span>
                <span className="roi-val-display">{formatINR(monthlyRent)} / mo</span>
              </div>
              <input
                type="range"
                min={30000}
                max={1500000}
                step={10000}
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-scale-labels">
                <span>₹ 30k</span>
                <span>₹ 7.5L</span>
                <span>₹ 15L / mo</span>
              </div>
            </div>

            {/* Expected Annual Appreciation */}
            <div className="roi-field-group">
              <div className="roi-field-label">
                <span>Annual Capital Appreciation Rate</span>
                <span className="roi-val-display">{expectedAppreciation}% p.a.</span>
              </div>
              <input
                type="range"
                min={4}
                max={20}
                step={0.5}
                value={expectedAppreciation}
                onChange={(e) => setExpectedAppreciation(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-scale-labels">
                <span>4% (Conservative)</span>
                <span>10% (Prime City Avg)</span>
                <span>20% (High Growth)</span>
              </div>
            </div>

            {/* Investment Horizon */}
            <div className="roi-field-group">
              <div className="roi-field-label">
                <span>Holding Horizon</span>
                <span className="roi-val-display">{holdingYears} Years</span>
              </div>
              <div className="roi-years-selector">
                {[3, 5, 7, 10, 15].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setHoldingYears(yr)}
                    className={`roi-year-btn ${holdingYears === yr ? 'active' : ''}`}
                  >
                    {yr} Yrs
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Analytics Column */}
          <div className="roi-results-col">
            <div className="roi-summary-card">
              <div className="roi-card-header">
                <TrendingUp size={20} color="var(--color-gold)" />
                <h4>Projected Asset Valuation at Year {holdingYears}</h4>
              </div>

              <div className="roi-mega-number">
                {formatINR(futureValue)}
              </div>
              <div className="roi-growth-tag">
                +{((futureValue / propertyPrice - 1) * 100).toFixed(1)}% Capital Growth ({formatINR(totalCapitalGain)})
              </div>

              <div className="roi-metrics-grid">
                <div className="roi-metric-item">
                  <span className="metric-label">Gross Rental Yield</span>
                  <span className="metric-val text-gold">{grossRentalYield}% p.a.</span>
                </div>
                <div className="roi-metric-item">
                  <span className="metric-label">Total Cumulative Rent</span>
                  <span className="metric-val">{formatINR(totalRentEarned)}</span>
                </div>
                <div className="roi-metric-item">
                  <span className="metric-label">Total Wealth Created</span>
                  <span className="metric-val text-success">{formatINR(totalReturn)}</span>
                </div>
                <div className="roi-metric-item">
                  <span className="metric-label">Total Overall ROI</span>
                  <span className="metric-val text-gold">{overallRoiPercent}%</span>
                </div>
              </div>

              <div className="roi-legal-note">
                <ShieldCheck size={16} />
                <span>Calculations based on 30+ year historical indices across Chennai, Bengaluru & Hyderabad prime corridors.</span>
              </div>

              <a
                href="tel:+919840012345"
                className="hanu-btn-primary"
                style={{ width: '100%', marginTop: '16px', textAlign: 'center', justifyContent: 'center' }}
              >
                <span>Consult Our Senior Wealth Advisory Desk</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
