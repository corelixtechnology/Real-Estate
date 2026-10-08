import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { CITIES } from '../data/mockData';
import { 
  Calculator, Building2, Users, Briefcase, LayoutGrid, 
  Sparkles, Check, CheckCircle2, ArrowRight, DollarSign, 
  TrendingDown, ShieldCheck, Coffee, Monitor, PhoneCall, 
  Layers, PieChart, Download, HelpCircle, Phone, MessageSquare, Send, RotateCcw
} from 'lucide-react';
import { TextAnimate } from '@/registry/magicui/text-animate';

export default function CalqPage({ onNavigateHome, onOpenListProperty }) {
  // Input States
  const [selectedCity, setSelectedCity] = useState('chennai');
  const [workplaceStyle, setWorkplaceStyle] = useState('balanced'); // 'dense' (45 sqft/seat) | 'balanced' (60 sqft/seat) | 'spacious' (80 sqft/seat)
  
  // Workstations
  const [openSeats, setOpenSeats] = useState(25);
  const [managerSeats, setManagerSeats] = useState(4);
  
  // Cabins
  const [directorCabins, setDirectorCabins] = useState(2);
  const [ceoCabins, setCeoCabins] = useState(1);

  // Meeting & Collaboration
  const [boardrooms12, setBoardrooms12] = useState(1); // 12-16 seater
  const [meetingRooms6, setMeetingRooms6] = useState(2); // 6-8 seater
  const [phonePods, setPhonePods] = useState(3); // 1-person focus pods
  const [discussionLounges, setDiscussionLounges] = useState(1);

  // Common & Support Areas (Toggles & Quantities)
  const [hasReception, setHasReception] = useState(true);
  const [hasCafeteria, setHasCafeteria] = useState(true);
  const [cafeteriaSeats, setCafeteriaSeats] = useState(15);
  const [hasServerRoom, setHasServerRoom] = useState(true);
  const [hasBreakoutGaming, setHasBreakoutGaming] = useState(true);
  const [hasStorageRoom, setHasStorageRoom] = useState(false);

  // Comparison Model (Commercial Lease vs Managed / Coworking)
  const [leaseDurationMonths, setLeaseDurationMonths] = useState(36); // 3 years standard
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Benchmarks by City
  const CITY_RATES = {
    chennai: { avgRentSqft: 95, avgCoworkSeat: 8500, capexFitoutSqft: 2200, depositMonths: 6, primeHub: 'OMR / Guindy / Mount Road' },
    bengaluru: { avgRentSqft: 125, avgCoworkSeat: 11000, capexFitoutSqft: 2600, depositMonths: 6, primeHub: 'Indiranagar / ORR / Whitefield' },
    hyderabad: { avgRentSqft: 85, avgCoworkSeat: 8000, capexFitoutSqft: 2000, depositMonths: 5, primeHub: 'Hitec City / Financial District' },
    coimbatore: { avgRentSqft: 55, avgCoworkSeat: 5500, capexFitoutSqft: 1600, depositMonths: 6, primeHub: 'Avinashi Road / Race Course' },
    pune: { avgRentSqft: 80, avgCoworkSeat: 7500, capexFitoutSqft: 1900, depositMonths: 6, primeHub: 'Kharadi / Hinjawadi' },
    irvine: { avgRentSqft: 320, avgCoworkSeat: 32000, capexFitoutSqft: 4500, depositMonths: 3, primeHub: 'Irvine Spectrum / Newport' }
  };

  const cityData = CITY_RATES[selectedCity] || CITY_RATES.chennai;

  // Space Calculation Logic (Standard Architectural Fitout Guidelines)
  const areaBreakdown = useMemo(() => {
    // 1. Workstations
    const deskMultiplier = workplaceStyle === 'dense' ? 40 : workplaceStyle === 'balanced' ? 55 : 75;
    const openSeatsArea = openSeats * deskMultiplier;
    const managerSeatsArea = managerSeats * 85;

    // 2. Cabins
    const directorCabinsArea = directorCabins * 140;
    const ceoCabinsArea = ceoCabins * 220;

    // 3. Meeting Rooms
    const boardroomArea = boardrooms12 * 320;
    const meetingRoomArea = meetingRooms6 * 160;
    const phonePodsArea = phonePods * 30;
    const loungeArea = discussionLounges * 150;

    // 4. Common & Support
    const receptionArea = hasReception ? 200 : 0;
    const cafeteriaArea = hasCafeteria ? (cafeteriaSeats * 22 + 80) : 0;
    const serverArea = hasServerRoom ? 90 : 0;
    const breakoutArea = hasBreakoutGaming ? 220 : 0;
    const storageArea = hasStorageRoom ? 100 : 0;

    // Net Carpet Area
    const netCarpetArea = (
      openSeatsArea + managerSeatsArea + directorCabinsArea + ceoCabinsArea +
      boardroomArea + meetingRoomArea + phonePodsArea + loungeArea +
      receptionArea + cafeteriaArea + serverArea + breakoutArea + storageArea
    );

    // Circulation & Core Efficiency (25% for internal passages, walls, AHU, structural pillars)
    const circulationArea = Math.round(netCarpetArea * 0.25);
    const totalCarpetArea = netCarpetArea + circulationArea;

    // Super Built-up Area (SBUA) with standard 30% building loading (elevators, staircases, lobbies)
    const totalSbua = Math.round(totalCarpetArea * 1.32);

    const totalHeadcount = openSeats + managerSeats + directorCabins + ceoCabins;

    return {
      totalHeadcount,
      openSeatsArea,
      managerSeatsArea,
      directorCabinsArea,
      ceoCabinsArea,
      meetingTotalArea: boardroomArea + meetingRoomArea + phonePodsArea + loungeArea,
      supportTotalArea: receptionArea + cafeteriaArea + serverArea + breakoutArea + storageArea,
      circulationArea,
      netCarpetArea,
      totalCarpetArea,
      totalSbua
    };
  }, [
    workplaceStyle, openSeats, managerSeats, directorCabins, ceoCabins, 
    boardrooms12, meetingRooms6, phonePods, discussionLounges, 
    hasReception, hasCafeteria, cafeteriaSeats, hasServerRoom, hasBreakoutGaming, hasStorageRoom
  ]);

  // Financial Cost Comparison Model
  const financialCost = useMemo(() => {
    const sbua = areaBreakdown.totalSbua;
    const seats = areaBreakdown.totalHeadcount;

    // Option A: Traditional Bare-Shell Lease
    const monthlyRent = sbua * cityData.avgRentSqft;
    const securityDeposit = monthlyRent * cityData.depositMonths;
    const upfrontCapexFitout = sbua * cityData.capexFitoutSqft;
    const monthlyMaintenanceOps = sbua * 22; // Electricity, DG fuel, housekeeping, broadband, security
    const totalTraditionalCost = (monthlyRent + monthlyMaintenanceOps) * leaseDurationMonths + upfrontCapexFitout;

    // Option B: Managed / Enterprise Coworking Space
    const monthlyCoworkingCost = seats * cityData.avgCoworkSeat;
    const zeroCapex = 0;
    const totalManagedCost = monthlyCoworkingCost * leaseDurationMonths;

    // Savings Calculation
    const totalSavings = totalTraditionalCost - totalManagedCost;
    const savingsPercent = totalSavings > 0 ? ((totalSavings / totalTraditionalCost) * 100).toFixed(1) : 0;

    return {
      monthlyRent,
      securityDeposit,
      upfrontCapexFitout,
      monthlyMaintenanceOps,
      totalTraditionalCost,
      monthlyCoworkingCost,
      totalManagedCost,
      totalSavings,
      savingsPercent
    };
  }, [areaBreakdown, cityData, leaseDurationMonths]);

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${Math.round(amount).toLocaleString('en-IN')}`;
  };

  const handleReset = () => {
    setOpenSeats(25);
    setManagerSeats(4);
    setDirectorCabins(2);
    setCeoCabins(1);
    setBoardrooms12(1);
    setMeetingRooms6(2);
    setPhonePods(3);
    setDiscussionLounges(1);
    setHasReception(true);
    setHasCafeteria(true);
    setCafeteriaSeats(15);
    setHasServerRoom(true);
    setHasBreakoutGaming(true);
    setHasStorageRoom(false);
  };

  return (
    <div className="hanu-page-view hanu-calq-page">
      {/* Page Header */}
      <PageHeader
        badge="Enterprise Workspace Intelligence"
        title="CalQ — Commercial Office Space & Cost Calculator"
        subtitle="Scientifically estimate required carpet area, seating densities, meeting infrastructure, and compare Traditional Lease vs. Managed Enterprise Workspace."
        breadcrumb={[{ label: 'CalQ Space Calculator' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { value: `${areaBreakdown.totalHeadcount} Pax`, label: 'Total Capacity' },
          { value: `${areaBreakdown.totalSbua.toLocaleString()} sq.ft`, label: 'Estimated SBUA' },
          { value: `${financialCost.savingsPercent}%`, label: 'Projected Managed Savings' },
          { value: 'Zero', label: 'Upfront Fitout Capex' }
        ]}
      />

      {/* Main Interactive CalQ Workspace Section */}
      <section className="hanu-calq-calculator-section">
        <div className="container">
          
          {/* Top Control Ribbon: City & Density Style */}
          <div className="calq-top-config-bar">
            <div className="config-item">
              <label>Target Commercial Hub:</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="calq-select-field"
              >
                <option value="chennai">Chennai ({CITY_RATES.chennai.primeHub})</option>
                <option value="bengaluru">Bengaluru ({CITY_RATES.bengaluru.primeHub})</option>
                <option value="hyderabad">Hyderabad ({CITY_RATES.hyderabad.primeHub})</option>
                <option value="coimbatore">Coimbatore ({CITY_RATES.coimbatore.primeHub})</option>
                <option value="pune">Pune ({CITY_RATES.pune.primeHub})</option>
                <option value="irvine">Irvine, California ({CITY_RATES.irvine.primeHub})</option>
              </select>
            </div>

            <div className="config-item">
              <label>Workplace Layout Density:</label>
              <div className="density-toggle-group">
                <button
                  onClick={() => setWorkplaceStyle('dense')}
                  className={`density-btn ${workplaceStyle === 'dense' ? 'active' : ''}`}
                >
                  Compact (40 sq.ft/desk)
                </button>
                <button
                  onClick={() => setWorkplaceStyle('balanced')}
                  className={`density-btn ${workplaceStyle === 'balanced' ? 'active' : ''}`}
                >
                  Standard Balanced (55 sq.ft/desk)
                </button>
                <button
                  onClick={() => setWorkplaceStyle('spacious')}
                  className={`density-btn ${workplaceStyle === 'spacious' ? 'active' : ''}`}
                >
                  Executive Luxury (75 sq.ft/desk)
                </button>
              </div>
            </div>

            <button onClick={handleReset} className="calq-reset-btn" title="Reset to defaults">
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          </div>

          {/* CalQ Dual Column Grid */}
          <div className="calq-main-grid">
            
            {/* LEFT COLUMN: SPACE INPUT CONTROLS */}
            <div className="calq-inputs-column">
              
              {/* Card 1: Team & Workstations */}
              <div className="calq-input-card">
                <div className="calq-card-head">
                  <div className="card-icon-bubble"><Users size={20} /></div>
                  <div>
                    <h3>1. Team & Open Workstations</h3>
                    <p>Linear workstations, agile desks and team manager setups.</p>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Open Workstations / Desks</span>
                    <span className="counter-sub">Standard linear / cluster seating</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setOpenSeats(Math.max(0, openSeats - 5))}>-</button>
                    <input 
                      type="number" 
                      value={openSeats} 
                      onChange={(e) => setOpenSeats(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setOpenSeats(openSeats + 5)}>+</button>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Team Lead / Manager Workstations</span>
                    <span className="counter-sub">Larger L-shaped executive pods</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setManagerSeats(Math.max(0, managerSeats - 1))}>-</button>
                    <input 
                      type="number" 
                      value={managerSeats} 
                      onChange={(e) => setManagerSeats(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setManagerSeats(managerSeats + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Card 2: Executive Cabins */}
              <div className="calq-input-card">
                <div className="calq-card-head">
                  <div className="card-icon-bubble"><Briefcase size={20} /></div>
                  <div>
                    <h3>2. Private Cabins & Executive Suites</h3>
                    <p>Dedicated enclosed glass cabins with private visitor seating.</p>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Director / VP Cabins (4-Seater)</span>
                    <span className="counter-sub">Enclosed room with executive desk & guest chairs</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setDirectorCabins(Math.max(0, directorCabins - 1))}>-</button>
                    <input 
                      type="number" 
                      value={directorCabins} 
                      onChange={(e) => setDirectorCabins(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setDirectorCabins(directorCabins + 1)}>+</button>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">MD / CEO Suite (with Private Lounge)</span>
                    <span className="counter-sub">Large presidential suite with sofa seating & private restroom</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setCeoCabins(Math.max(0, ceoCabins - 1))}>-</button>
                    <input 
                      type="number" 
                      value={ceoCabins} 
                      onChange={(e) => setCeoCabins(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setCeoCabins(ceoCabins + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Card 3: Meeting & Collaboration */}
              <div className="calq-input-card">
                <div className="calq-card-head">
                  <div className="card-icon-bubble"><Monitor size={20} /></div>
                  <div>
                    <h3>3. Meeting & Conference Rooms</h3>
                    <p>Audio-visual boardrooms, client presentation suites and phone pods.</p>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Executive Boardrooms (12–16 Seater)</span>
                    <span className="counter-sub">Video conferencing & motorized presentation screens</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setBoardrooms12(Math.max(0, boardrooms12 - 1))}>-</button>
                    <input 
                      type="number" 
                      value={boardrooms12} 
                      onChange={(e) => setBoardrooms12(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setBoardrooms12(boardrooms12 + 1)}>+</button>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Discussion Rooms (6–8 Seater)</span>
                    <span className="counter-sub">Team scrums and internal client calls</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setMeetingRooms6(Math.max(0, meetingRooms6 - 1))}>-</button>
                    <input 
                      type="number" 
                      value={meetingRooms6} 
                      onChange={(e) => setMeetingRooms6(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setMeetingRooms6(meetingRooms6 + 1)}>+</button>
                  </div>
                </div>

                <div className="calq-counter-row">
                  <div className="counter-info">
                    <span className="counter-title">Acoustic Phone Booths / Zoom Pods</span>
                    <span className="counter-sub">Single-person soundproof private call pods</span>
                  </div>
                  <div className="counter-actions">
                    <button onClick={() => setPhonePods(Math.max(0, phonePods - 1))}>-</button>
                    <input 
                      type="number" 
                      value={phonePods} 
                      onChange={(e) => setPhonePods(Math.max(0, parseInt(e.target.value) || 0))} 
                    />
                    <button onClick={() => setPhonePods(phonePods + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Card 4: Common Amenities & Support Infrastructure */}
              <div className="calq-input-card">
                <div className="calq-card-head">
                  <div className="card-icon-bubble"><Coffee size={20} /></div>
                  <div>
                    <h3>4. Common Amenities & Support</h3>
                    <p>Reception lobby, cafeteria, IT server room, and employee lounges.</p>
                  </div>
                </div>

                <div className="calq-toggles-grid">
                  <label className={`calq-toggle-pill ${hasReception ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasReception} 
                      onChange={(e) => setHasReception(e.target.checked)} 
                    />
                    <span>Grand Reception & Waiting Foyer (200 sq.ft)</span>
                  </label>

                  <label className={`calq-toggle-pill ${hasCafeteria ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasCafeteria} 
                      onChange={(e) => setHasCafeteria(e.target.checked)} 
                    />
                    <span>Cafeteria & Gourmet Pantry ({cafeteriaSeats} Seats)</span>
                  </label>

                  <label className={`calq-toggle-pill ${hasServerRoom ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasServerRoom} 
                      onChange={(e) => setHasServerRoom(e.target.checked)} 
                    />
                    <span>Dedicated IT Server & UPS Hub (90 sq.ft)</span>
                  </label>

                  <label className={`calq-toggle-pill ${hasBreakoutGaming ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasBreakoutGaming} 
                      onChange={(e) => setHasBreakoutGaming(e.target.checked)} 
                    />
                    <span>Breakout Zone & Employee Gaming Lounge (220 sq.ft)</span>
                  </label>

                  <label className={`calq-toggle-pill ${hasStorageRoom ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasStorageRoom} 
                      onChange={(e) => setHasStorageRoom(e.target.checked)} 
                    />
                    <span>Document Archive & Stationery Store (100 sq.ft)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: REAL-TIME SPACE & FINANCIAL SAVINGS DASHBOARD */}
            <div className="calq-dashboard-column">
              
              {/* Dashboard 1: Space Requirement Summary */}
              <div className="calq-summary-card">
                <div className="summary-badge-top">
                  <Sparkles size={14} />
                  <span>Real-Time Architectural Calculation</span>
                </div>
                
                <h2 className="summary-card-title">Commercial Space Matrix</h2>
                <div className="summary-headcount-tag">
                  Total Team Capacity: <strong>{areaBreakdown.totalHeadcount} Professionals</strong>
                </div>

                <div className="calq-area-highlight-box">
                  <div className="area-item">
                    <span className="lbl">Usable Carpet Area</span>
                    <span className="val">{areaBreakdown.totalCarpetArea.toLocaleString()} <span>sq.ft</span></span>
                  </div>
                  <div className="area-divider"></div>
                  <div className="area-item highlight">
                    <span className="lbl">Chargeable SBUA Area</span>
                    <span className="val">{areaBreakdown.totalSbua.toLocaleString()} <span>sq.ft</span></span>
                    <span className="sub-note">Includes 32% building core loading</span>
                  </div>
                </div>

                {/* Visual Area Allocation Bar */}
                <div className="area-progress-breakdown">
                  <div className="progress-labels">
                    <span>Space Allocation Breakdown:</span>
                  </div>
                  <div className="multi-progress-bar">
                    <div 
                      className="bar-segment bar-workstation" 
                      style={{ width: `${(areaBreakdown.openSeatsArea + areaBreakdown.managerSeatsArea) / areaBreakdown.totalCarpetArea * 100}%` }}
                      title="Workstations"
                    ></div>
                    <div 
                      className="bar-segment bar-cabins" 
                      style={{ width: `${(areaBreakdown.directorCabinsArea + areaBreakdown.ceoCabinsArea) / areaBreakdown.totalCarpetArea * 100}%` }}
                      title="Cabins"
                    ></div>
                    <div 
                      className="bar-segment bar-meeting" 
                      style={{ width: `${areaBreakdown.meetingTotalArea / areaBreakdown.totalCarpetArea * 100}%` }}
                      title="Meeting Rooms"
                    ></div>
                    <div 
                      className="bar-segment bar-support" 
                      style={{ width: `${areaBreakdown.supportTotalArea / areaBreakdown.totalCarpetArea * 100}%` }}
                      title="Amenities & Pantry"
                    ></div>
                    <div 
                      className="bar-segment bar-circ" 
                      style={{ width: `${areaBreakdown.circulationArea / areaBreakdown.totalCarpetArea * 100}%` }}
                      title="Circulation"
                    ></div>
                  </div>

                  <div className="progress-legend-grid">
                    <div className="legend-item"><span className="dot bar-workstation"></span> Desks: {areaBreakdown.openSeatsArea + areaBreakdown.managerSeatsArea} sq.ft</div>
                    <div className="legend-item"><span className="dot bar-cabins"></span> Cabins: {areaBreakdown.directorCabinsArea + areaBreakdown.ceoCabinsArea} sq.ft</div>
                    <div className="legend-item"><span className="dot bar-meeting"></span> Meetings: {areaBreakdown.meetingTotalArea} sq.ft</div>
                    <div className="legend-item"><span className="dot bar-support"></span> Support: {areaBreakdown.supportTotalArea} sq.ft</div>
                    <div className="legend-item"><span className="dot bar-circ"></span> Passages: {areaBreakdown.circulationArea} sq.ft</div>
                  </div>
                </div>

              </div>

              {/* Dashboard 2: Financial Cost Comparison (Traditional Lease vs Managed Workspace) */}
              <div className="calq-financial-card">
                <div className="financial-card-head">
                  <DollarSign size={20} color="var(--color-gold)" />
                  <h3>Cost Comparison ({leaseDurationMonths / 12} Years Horizon)</h3>
                </div>

                <div className="lease-duration-selector">
                  <label>Lock-in Term:</label>
                  <div className="term-pills">
                    {[12, 24, 36, 60].map((months) => (
                      <button
                        key={months}
                        onClick={() => setLeaseDurationMonths(months)}
                        className={`term-btn ${leaseDurationMonths === months ? 'active' : ''}`}
                      >
                        {months / 12} {months === 12 ? 'Year' : 'Years'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comparison Matrix Columns */}
                <div className="comparison-dual-matrix">
                  
                  {/* Traditional Lease Column */}
                  <div className="matrix-col traditional-col">
                    <div className="matrix-badge">Option A</div>
                    <h4>Traditional Bare-Shell Lease</h4>
                    <div className="matrix-total-price">
                      {formatCurrency(financialCost.totalTraditionalCost)}
                    </div>
                    <div className="matrix-sub">Total {leaseDurationMonths / 12}-Yr TCO</div>

                    <ul className="matrix-details-list">
                      <li>
                        <span>Upfront Fitout Capex:</span>
                        <strong>{formatCurrency(financialCost.upfrontCapexFitout)}</strong>
                      </li>
                      <li>
                        <span>Security Deposit ({cityData.depositMonths} mo):</span>
                        <strong>{formatCurrency(financialCost.securityDeposit)}</strong>
                      </li>
                      <li>
                        <span>Monthly Rent ({areaBreakdown.totalSbua} sq.ft):</span>
                        <strong>{formatCurrency(financialCost.monthlyRent)} / mo</strong>
                      </li>
                      <li>
                        <span>Monthly Maintenance & Power:</span>
                        <strong>{formatCurrency(financialCost.monthlyMaintenanceOps)} / mo</strong>
                      </li>
                      <li>
                        <span>Fitout Execution Delay:</span>
                        <strong className="text-danger">90 – 120 Days</strong>
                      </li>
                    </ul>
                  </div>

                  {/* Managed Workspace Column */}
                  <div className="matrix-col managed-col">
                    <div className="matrix-badge gold">Option B (Recommended)</div>
                    <h4>Enterprise Managed / Cowork</h4>
                    <div className="matrix-total-price text-gold">
                      {formatCurrency(financialCost.totalManagedCost)}
                    </div>
                    <div className="matrix-sub">Total {leaseDurationMonths / 12}-Yr TCO</div>

                    <ul className="matrix-details-list">
                      <li>
                        <span>Upfront Fitout Capex:</span>
                        <strong className="text-success">₹ 0 (Zero Capex)</strong>
                      </li>
                      <li>
                        <span>Security Deposit:</span>
                        <strong>Only 2 Months</strong>
                      </li>
                      <li>
                        <span>All-Inclusive Monthly Cost:</span>
                        <strong className="text-gold">{formatCurrency(financialCost.monthlyCoworkingCost)} / mo</strong>
                      </li>
                      <li>
                        <span>Facility & Utility Mgmt:</span>
                        <strong className="text-success">100% Handled</strong>
                      </li>
                      <li>
                        <span>Move-In Turnaround:</span>
                        <strong className="text-success">Instant / 7 Days</strong>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Savings Banner */}
                {financialCost.totalSavings > 0 && (
                  <div className="calq-savings-highlight-banner">
                    <div className="savings-icon"><TrendingDown size={28} /></div>
                    <div>
                      <div className="savings-title">
                        Estimated Net Savings: <strong>{formatCurrency(financialCost.totalSavings)}</strong> ({financialCost.savingsPercent}%)
                      </div>
                      <div className="savings-desc">
                        By switching to a turnkey enterprise managed workspace in {selectedCity.toUpperCase()}, you eliminate upfront capital expenditure and facility overheads.
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Dashboard 3: Sourcing & Advisory Booking Form */}
              <div className="calq-inquiry-box">
                {!inquirySubmitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setInquirySubmitted(true); }} className="calq-lead-form">
                    <h3>Request Curated Commercial Options in {selectedCity.toUpperCase()}</h3>
                    <p>Our Commercial Leasing Directorate will send you pre-vetted Grade-A office options matching {areaBreakdown.totalSbua.toLocaleString()} sq.ft.</p>

                    <div className="wizard-inputs-row">
                      <input type="text" placeholder="Your Name *" required className="hanu-input-field" />
                      <input type="tel" placeholder="Mobile / WhatsApp *" required className="hanu-input-field" />
                    </div>

                    <div className="wizard-inputs-row">
                      <input type="email" placeholder="Corporate Email *" required className="hanu-input-field" />
                      <input type="text" placeholder="Company Name *" required className="hanu-input-field" />
                    </div>

                    <button type="submit" className="hanu-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>Receive Tailored Commercial Proposal</span>
                      <ArrowRight size={15} />
                    </button>
                  </form>
                ) : (
                  <div className="calq-form-success">
                    <CheckCircle2 size={44} color="#22c55e" />
                    <h3>Commercial Requirement Registered!</h3>
                    <p>
                      Our Senior Commercial Leasing Vice President for <strong>{selectedCity.toUpperCase()}</strong> has received your brief for <strong>{areaBreakdown.totalHeadcount} seats ({areaBreakdown.totalSbua.toLocaleString()} sq.ft)</strong>. We will share curated Grade-A options within 2 hours.
                    </p>
                    <button onClick={() => setInquirySubmitted(false)} className="hanu-btn-ghost">
                      Modify Parameters
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Commercial Advisory Benefits Section */}
      <section className="hanu-commercial-benefits-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag badge-gold">Enterprise Corporate Solutions</span>
            <h2>Why Fortune 500 & High-Growth Startups Partner with Hanu Reddy</h2>
            <p>We combine 30+ years of institutional commercial landlord relationships with scientific space intelligence.</p>
          </div>

          <div className="hanu-pillars-grid">
            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Building2 size={22} /></div>
              <h3>Off-Market Grade-A IT Parks</h3>
              <p>Direct mandate access to marquee tech parks and standalone corporate towers across Chennai, Bengaluru, and Hyderabad.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><ShieldCheck size={22} /></div>
              <h3>Aggressive Lease & Fitout Terms</h3>
              <p>We negotiate rent-free fitout periods, capped CAM escalations, and diplomatic exit clauses to safeguard your corporate balance sheet.</p>
            </div>

            <div className="hanu-pillar-card">
              <div className="pillar-icon-wrap"><Sparkles size={22} /></div>
              <h3>Turnkey Managed Space Sourcing</h3>
              <p>Partnering with India’s top enterprise coworking operators to secure custom built-to-suit managed floors at discounted wholesale rates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
