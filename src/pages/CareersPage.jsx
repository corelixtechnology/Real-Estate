import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { CAREER_OPENINGS } from '../data/mockData';
import { 
  Briefcase, GraduationCap, TrendingUp, Award, 
  CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send, Users, Heart 
} from 'lucide-react';

export default function CareersPage({ onNavigateHome }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [appSubmitted, setAppSubmitted] = useState(false);

  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantCity, setApplicantCity] = useState('chennai');
  const [applicantExp, setApplicantExp] = useState('3-5 years');
  const [applicantNotes, setApplicantNotes] = useState('');

  const handleApply = (job) => {
    setSelectedJob(job);
    setAppSubmitted(false);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setAppSubmitted(true);
  };

  return (
    <div className="hanu-page-view hanu-careers-page">
      {/* Page Header */}
      <PageHeader
        badge="Join India’s Elite Brokerage"
        title="Build an Extraordinary Career in Luxury Real Estate"
        subtitle="Experience the prestige of representing high-net-worth families, Fortune 500 enterprises and iconic architectural estates."
        breadcrumb={[{ label: 'Careers & Academy' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: '150+', label: 'Active Licensed Realtors' },
          { value: '30+ Yrs', label: 'Brand Heritage & Trust' },
          { value: 'Uncapped', label: 'Earning Potential' },
          { value: '100%', label: 'In-House Legal Backing' }
        ]}
      />

      {/* Why Build Your Career at Hanu Reddy */}
      <section className="hanu-career-benefits-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">The Advisor Experience</span>
            <h2>Why the Industry's Finest Brokers Choose Hanu Reddy</h2>
            <p>We provide the institutional infrastructure, high-value listings, and legal safety for you to thrive.</p>
          </div>

          <div className="career-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrap"><Award size={24} /></div>
              <h3>Prestigious 30-Year Brand Equity</h3>
              <p>Doors open when you introduce yourself from Hanu Reddy Realty. Sellers and buyers respect our 30-year zero litigation track record.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap"><ShieldCheck size={24} /></div>
              <h3>In-House 40-Point Legal Protection</h3>
              <p>Never worry about complicated title issues. Our dedicated legal team conducts all due diligence, Patta checks, and agreement drafting.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap"><TrendingUp size={24} /></div>
              <h3>Uncapped High-Yield Commissions</h3>
              <p>Earn industry-leading commission splits on multi-crore residential estates, commercial office towers and land monetization joint ventures.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap"><GraduationCap size={24} /></div>
              <h3>The Hanu Reddy Realtor Academy</h3>
              <p>Continuous executive coaching in HNI client psychology, high-stakes negotiation, RERA compliance and luxury digital presentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Open Positions */}
      <section className="hanu-open-roles-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Open Opportunities</span>
            <h2>Current Strategic Openings</h2>
            <p>Explore opportunities across our regional hubs in Chennai, Bengaluru, Hyderabad, and Coimbatore.</p>
          </div>

          <div className="roles-list-container">
            {CAREER_OPENINGS.map((job) => (
              <div key={job.id} className="job-opening-card">
                <div className="job-card-left">
                  <div className="job-type-pill">{job.type} • {job.experience}</div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-location">
                    <Briefcase size={14} />
                    <span>{job.location}</span>
                  </div>
                  <p className="job-overview">{job.overview}</p>
                  <div className="job-comp-badge">
                    <span>Compensation:</span> <strong>{job.compensation}</strong>
                  </div>
                </div>

                <div className="job-card-right">
                  <button 
                    onClick={() => handleApply(job)}
                    className="hanu-btn-primary"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Application Banner */}
      <section className="hanu-fast-app-section">
        <div className="container">
          <div className="fast-app-card">
            <div className="fast-app-intro">
              <span className="badge-tag badge-gold">Direct Application</span>
              <h2>Send an Open Application to Our Directorate</h2>
              <p>Don't see an exact match? We are always seeking exceptional talent in luxury real estate, corporate leasing, and legal title due diligence.</p>
              <div className="fast-app-perks">
                <div><CheckCircle2 size={16} /> Confidential HR Review within 48 Hours</div>
                <div><CheckCircle2 size={16} /> Direct Interview with Managing Director</div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Application received! Our Talent Acquisition Directorate will review your credentials and contact you.'); }} className="fast-app-form">
              <input type="text" placeholder="Your Full Name *" required className="hanu-input-field" />
              <input type="tel" placeholder="Mobile / WhatsApp Number *" required className="hanu-input-field" />
              <input type="email" placeholder="Email Address *" required className="hanu-input-field" />
              <select className="hanu-input-field" required>
                <option value="">Preferred Location</option>
                <option value="chennai">Chennai HQ & Branches</option>
                <option value="bengaluru">Bengaluru Hub</option>
                <option value="hyderabad">Hyderabad Hub</option>
                <option value="coimbatore">Coimbatore Hub</option>
              </select>
              <textarea rows={3} placeholder="Brief summary of your real estate or corporate sales experience..." className="hanu-input-field" required></textarea>
              <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Submit Confidential Application</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content-box apply-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedJob(null)}>✕</button>

            {!appSubmitted ? (
              <>
                <div className="apply-modal-header">
                  <span className="badge-tag badge-gold">Application Form</span>
                  <h2>{selectedJob.title}</h2>
                  <p>{selectedJob.location} • {selectedJob.type}</p>
                </div>

                <form onSubmit={handleApplicationSubmit} className="apply-modal-form">
                  <div className="wizard-inputs-row">
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required 
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="hanu-input-field" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone / WhatsApp *" 
                      required 
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="hanu-input-field" 
                    />
                  </div>

                  <div className="wizard-inputs-row">
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required 
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="hanu-input-field" 
                    />
                    <select 
                      value={applicantExp} 
                      onChange={(e) => setApplicantExp(e.target.value)}
                      className="hanu-input-field"
                    >
                      <option value="1-3 years">1 – 3 Years Experience</option>
                      <option value="3-5 years">3 – 5 Years Experience</option>
                      <option value="5-10 years">5 – 10 Years Experience</option>
                      <option value="10+ years">10+ Years (Senior Lead)</option>
                    </select>
                  </div>

                  <textarea 
                    rows={3} 
                    placeholder="Tell us about your key real estate transactions and strengths..."
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    className="hanu-input-field"
                    required
                  ></textarea>

                  <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Submit Application for {selectedJob.title}</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              </>
            ) : (
              <div className="wizard-success-view">
                <Sparkles size={48} color="var(--color-gold)" />
                <h2>Application Submitted Successfully!</h2>
                <p>Thank you, <strong>{applicantName}</strong>. Your profile for <strong>{selectedJob.title}</strong> has been forwarded to our HR & Managing Directorate.</p>
                <button onClick={() => setSelectedJob(null)} className="hanu-btn-primary">
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
