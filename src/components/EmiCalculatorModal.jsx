import React, { useState } from 'react';
import { X, Calculator, IndianRupee, PieChart, ShieldCheck, Check } from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function EmiCalculatorModal({ onClose }) {
  const [loanAmount, setLoanAmount] = useState(15000000); // 1.5 Cr
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  // EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = () => {
    const P = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = tenureYears * 12;
    if (r === 0) return P / n;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEmi = calculateEMI();
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const principalPercent = Math.round((loanAmount / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" style={{ maxWidth: '850px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--color-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <Calculator size={20} />
            </div>
            <div>
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                as="h2"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: 'var(--color-dark)' }}
              >
                Home Loan & Mortgage EMI Calculator
              </TextAnimate>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>
                Plan your property investment with instant monthly payout calculations and bank partnership guidance.
              </p>
            </div>
          </div>


          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', marginTop: '28px' }}>
            {/* Left Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Loan Amount Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-dark)' }}>Loan Amount</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="500000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  <span>₹ 10 Lakh</span>
                  <span>₹ 5 Cr</span>
                  <span>₹ 10 Cr</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-dark)' }}>Interest Rate (p.a.)</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="6.5"
                  max="14.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  <span>6.5%</span>
                  <span>10.0%</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-dark)' }}>Loan Tenure</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {tenureYears} Years ({totalMonths} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div style={{
              background: 'linear-gradient(135deg, #17171d 0%, #291819 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#ffc278', fontWeight: 700, marginBottom: '6px' }}>
                  ESTIMATED MONTHLY PAYMENT
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  ₹ {monthlyEmi.toLocaleString('en-IN')}
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}> / mo</span>
                </div>

                {/* Progress Bar Visual */}
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <div style={{ height: '10px', width: '100%', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${principalPercent}%`, background: '#ffc278' }}></div>
                    <div style={{ width: `${interestPercent}%`, background: 'var(--color-primary-light)' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '6px', color: 'rgba(255,255,255,0.8)' }}>
                    <span>● Principal: {principalPercent}%</span>
                    <span>● Total Interest: {interestPercent}%</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Principal Loan Amount:</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(loanAmount)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Total Interest Payable:</span>
                    <span style={{ fontWeight: 700, color: '#ffc278' }}>{formatCurrency(totalInterest)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Total Payment (P + I):</span>
                    <span style={{ fontWeight: 800, fontSize: '1rem' }}>{formatCurrency(totalPayment)}</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918056035603?text=Hello%20Hanu%20Reddy%20Realty,%20I%20would%20like%20guidance%20on%20Home%20Loan%20assistance%20and%20bank%20interest%20rates."
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ background: 'var(--color-primary)', color: '#ffffff', width: '100%', marginTop: '20px', padding: '12px' }}
              >
                <span>Request Banking Assistance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
