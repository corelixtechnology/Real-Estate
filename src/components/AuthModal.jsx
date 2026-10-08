import React, { useState } from 'react';
import { X, Phone, Mail, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function AuthModal({ onClose }) {
  const [authMode, setAuthMode] = useState('otp'); // 'otp' or 'password'
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 4 || otp.length === 6) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" style={{ maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div style={{ padding: '36px 30px' }}>
          {/* Brand Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="div"
              className="hr-logo-text"
              style={{ fontSize: '1.6rem', marginBottom: '4px' }}
            >
              Hanu Reddy Realty
            </TextAnimate>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Sign in to manage your saved properties, site visits, and direct realtor inquiries.
            </p>
          </div>


          {isLoggedIn ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle2 size={54} color="var(--color-primary)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-dark)', marginBottom: '8px' }}>
                Welcome Back!
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
                You are now securely signed in to Hanu Reddy Realty.
              </p>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
                Continue Browsing
              </button>
            </div>
          ) : (
            <div>
              {/* Tab Selector */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '20px' }}>
                <button
                  type="button"
                  onClick={() => { setAuthMode('otp'); setOtpSent(false); }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: authMode === 'otp' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    borderBottom: authMode === 'otp' ? '2px solid var(--color-primary)' : 'none'
                  }}
                >
                  Mobile & OTP
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMode('password'); setOtpSent(false); }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: authMode === 'password' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    borderBottom: authMode === 'password' ? '2px solid var(--color-primary)' : 'none'
                  }}
                >
                  Email & Password
                </button>
              </div>

              {authMode === 'otp' ? (
                !otpSent ? (
                  <form onSubmit={handleSendOtp}>
                    <div className="form-field-block">
                      <label className="form-label">Enter Mobile Number</label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{
                          background: 'var(--color-bg-alt)',
                          border: '1px solid var(--color-border)',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="98400 12345"
                          className="form-input"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          style={{ flex: 1 }}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '14px', padding: '12px' }}>
                      <span>Get OTP</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp}>
                    <div style={{ background: 'var(--color-primary-bg)', padding: '12px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-primary)', marginBottom: '16px', textAlign: 'center' }}>
                      OTP sent to <strong>+91 {phone}</strong> (Enter <strong>1234</strong> to demo)
                    </div>

                    <div className="form-field-block">
                      <label className="form-label">Enter 4-Digit OTP</label>
                      <input
                        type="text"
                        required
                        placeholder="• • • •"
                        className="form-input"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '8px', fontWeight: 800 }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '14px', padding: '12px' }}>
                      Verify & Log In
                    </button>
                  </form>
                )
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                  <div className="form-field-block">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-field-block">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '14px', padding: '12px' }}>
                    Register / Sign In
                  </button>
                </form>
              )}

              <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="var(--color-primary)" />
                <span>Zero spam guarantee. 100% data confidentiality.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
