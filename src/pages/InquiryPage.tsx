import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export const InquiryPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const initialDest = searchParams.get('dest') || 'Upper Mustang';
  const initialTrip = searchParams.get('trip') || '';
  const initialGuests = searchParams.get('guests') ? parseInt(searchParams.get('guests')!, 10) : 2;
  const initialSeason = searchParams.get('season') || 'Autumn (Oct – Nov)';

  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    // Step 1: About You
    name: '',
    email: '',
    phone: '',
    country: 'United States',
    // Step 2: Your Journey
    destination: initialDest,
    travelStyle: 'Luxury Lodge & Heli Traverse',
    altitudeExperience: 'Moderate High Altitude (up to 3,500m)',
    // Step 3: Dates & Travelers
    dates: initialSeason,
    travelers: initialGuests,
    partyType: 'Couple / Private Duo',
    // Step 4: Preferences & Budget
    budgetRange: '$6,000 – $10,000 per guest',
    helicopterInterest: 'Private Charter Helicopter Ascents',
    dietaryNotes: '',
    specialRequests: initialTrip ? `Inquiring specifically regarding the "${initialTrip}" expedition.` : ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextStep = () => {
    if (currentStep === 1 && (!formData.name.trim() || !formData.email.trim())) {
      alert('Please enter your full name and email to proceed.');
      return;
    }
    setCurrentStep((prev) => Math.min(5, prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  const steps = [
    { num: 1, title: 'About You' },
    { num: 2, title: 'Your Journey' },
    { num: 3, title: 'Dates & Travelers' },
    { num: 4, title: 'Preferences' },
    { num: 5, title: 'Review Manifest' }
  ];

  return (
    <main id="inquiry-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt" style={{ paddingBottom: '32px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Bespoke Concierge Consultation • यात्रा योजना</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '14px' }}>
            Plan Your Journey
          </h1>
          <p className="editorial-lead" style={{ margin: '0 auto', color: 'var(--text-secondary)' }}>
            A private consultation with our Kathmandu expedition leads. Complete the 5-step manifest below to receive a curated bespoke itinerary proposal.
          </p>
        </div>
      </section>

      {/* Multi-Step Concierge Form Section */}
      <section className="section-py">
        <div className="container-narrow inquiry-card-wrapper">
          {submitted ? (
            /* Success Manifest */
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(36px, 6vw, 64px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '22px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--accent-primary)',
                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.7)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(57, 5, 23, 0.4)',
                  border: '1px solid var(--color-accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-secondary)'
                }}
              >
                <CheckCircle2 size={32} />
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text-primary)', fontWeight: 400 }}>
                Namaste, {formData.name}.
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '540px', lineHeight: 1.7, fontWeight: 300 }}>
                Your private expedition dossier has been registered directly with our Senior Concierge in Kathmandu. A tailored itinerary manifest will be delivered to <strong style={{ color: 'var(--text-primary)' }}>{formData.email}</strong> within 24 hours.
              </p>

              {/* Manifest Summary Box */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  padding: '22px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  textAlign: 'left',
                  fontSize: '0.86rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px'
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Destination</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{formData.destination}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Travel Window</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{formData.dates}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Party Size</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{formData.travelers} Guests ({formData.partyType})</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Style & Budget</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{formData.budgetRange}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '12px' }}>
                <Link to="/trips" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.8rem' }}>
                  <span>Explore Other Journeys</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '0.8rem' }}>
                  <span>Return to Home</span>
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Step Progress Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  position: 'relative'
                }}
              >
                {steps.map((s) => {
                  const isCurrent = currentStep === s.num;
                  const isPast = currentStep > s.num;
                  return (
                    <div
                      key={s.num}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        flex: 1,
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          background: isPast
                            ? 'var(--color-accent-primary)'
                            : isCurrent
                            ? 'var(--color-accent-primary)'
                            : 'var(--color-bg-surface)',
                          border: isCurrent ? '2px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                          color: isCurrent || isPast ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isPast ? <CheckCircle2 size={16} /> : `0${s.num}`}
                      </div>
                      <span
                        className="hide-mobile"
                        style={{
                          fontSize: '0.72rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: isCurrent ? 'var(--text-primary)' : 'var(--text-muted)',
                          fontWeight: isCurrent ? 600 : 400
                        }}
                      >
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Form Container (Centered Refined Card with Stable Height) */}
              <form
                onSubmit={handleSubmit}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(28px, 5vw, 48px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  minHeight: '480px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-card)',
                  boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.7)'
                }}
              >
                {/* STEP 1: ABOUT YOU */}
                {currentStep === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'stepFade 0.3s ease' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Step 01 of 05
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400, marginTop: '4px' }}>
                        About You
                      </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="inquiry-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="inquiry-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="inquiry-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. United Kingdom, Switzerland, USA"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="inquiry-input"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: YOUR JOURNEY */}
                {currentStep === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'stepFade 0.3s ease' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Step 02 of 05
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400, marginTop: '4px' }}>
                        Your Desired Territory
                      </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Preferred Region
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="inquiry-input"
                        >
                          {DESTINATIONS.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name} ({d.devanagari})
                            </option>
                          ))}
                          <option value="Trans-Himalayan Crossing (Multi-Region)">Trans-Himalayan Crossing (Multi-Region)</option>
                          <option value="Curator Recommendation Needed">Curator Recommendation Needed</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Expedition Focus
                        </label>
                        <select
                          value={formData.travelStyle}
                          onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                          className="inquiry-input"
                        >
                          <option value="Luxury Lodge & Heli Traverse">Luxury Lodge & Private Helicopter Traverse</option>
                          <option value="High Altitude Sacred Exploration">High Altitude Sacred Exploration</option>
                          <option value="Artisan Heritage & Living Palaces">Artisan Heritage & Living Palaces</option>
                          <option value="Subtropical Terai Wildlife Safari">Subtropical Terai Wildlife Safari</option>
                          <option value="Himalayan Silence & Restorative Retreat">Himalayan Silence & Restorative Retreat</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Altitude Experience
                        </label>
                        <select
                          value={formData.altitudeExperience}
                          onChange={(e) => setFormData({ ...formData, altitudeExperience: e.target.value })}
                          className="inquiry-input"
                        >
                          <option value="First-time High Himalayan Explorer">First-time High Himalayan Explorer</option>
                          <option value="Moderate High Altitude (up to 3,500m)">Moderate High Altitude (up to 3,500m)</option>
                          <option value="Experienced Alpine Trekker (4,000m+)">Experienced Alpine Trekker (4,000m+)</option>
                          <option value="Prefer Helicopter Transit Only">Prefer Helicopter Transit Only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: TRAVEL DATES & TRAVELERS */}
                {currentStep === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'stepFade 0.3s ease' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Step 03 of 05
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400, marginTop: '4px' }}>
                        Cadence & Party Size
                      </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Anticipated Season or Dates
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. October 2026 or Spring 2027"
                          value={formData.dates}
                          onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                          className="inquiry-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="16"
                          value={formData.travelers}
                          onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value, 10) || 1 })}
                          className="inquiry-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Party Composition
                        </label>
                        <select
                          value={formData.partyType}
                          onChange={(e) => setFormData({ ...formData, partyType: e.target.value })}
                          className="inquiry-input"
                        >
                          <option value="Solo Traveler">Solo Traveler</option>
                          <option value="Couple / Private Duo">Couple / Private Duo</option>
                          <option value="Private Family Party">Private Family Party</option>
                          <option value="Private Small Group of Friends">Private Small Group of Friends</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: PREFERENCES & BUDGET */}
                {currentStep === 4 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'stepFade 0.3s ease' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Step 04 of 05
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400, marginTop: '4px' }}>
                        Preferences & Budget
                      </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Anticipated Budget (per guest)
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="inquiry-input"
                        >
                          <option value="$3,500 – $6,000 per guest">$3,500 – $6,000 per guest</option>
                          <option value="$6,000 – $10,000 per guest">$6,000 – $10,000 per guest</option>
                          <option value="$10,000 – $18,000 per guest">$10,000 – $18,000 per guest</option>
                          <option value="$18,000+ Bespoke VIP Helicopter Charter">$18,000+ Bespoke VIP Helicopter Charter</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                          Private Helicopter Access
                        </label>
                        <select
                          value={formData.helicopterInterest}
                          onChange={(e) => setFormData({ ...formData, helicopterInterest: e.target.value })}
                          className="inquiry-input"
                        >
                          <option value="Private Charter Helicopter Ascents">Private Charter Helicopter Ascents (Recommended)</option>
                          <option value="Ground 4WD + Selected Heli Flights">Ground 4WD + Selected Heli Flights</option>
                          <option value="Trekking & Heritage Walks Only">Trekking & Heritage Walks Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Dietary Aspirations or Health Considerations
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Organic plant-based, gluten-free, cardiovascular notes..."
                        value={formData.dietaryNotes}
                        onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                        className="inquiry-input"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: REVIEW & SEND */}
                {currentStep === 5 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'stepFade 0.3s ease' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Step 05 of 05
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 400, marginTop: '4px' }}>
                        Review Your Manifest
                      </h2>
                    </div>

                    {/* Summary Review Cards */}
                    <div
                      style={{
                        padding: '20px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '14px',
                        fontSize: '0.84rem'
                      }}
                    >
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Guest Name</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Email & Phone</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.email} • {formData.phone || 'N/A'}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Region / Territory</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.destination}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Dates & Party</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.dates} • {formData.travelers} Guests</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Expedition Tier</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.travelStyle}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Anticipated Budget</span>
                        <strong style={{ color: 'var(--accent-gold)' }}>{formData.budgetRange}</strong>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Special Wishes or Specific Monastery Requests
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any additional wishes or specific peak views you desire..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="inquiry-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                  </div>
                )}

                {/* Back / Next / Submit Controls */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: 'auto'
                  }}
                >
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                      style={{ padding: '10px 22px', fontSize: '0.78rem' }}
                    >
                      <ArrowLeft size={13} />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                      style={{ padding: '12px 28px', fontSize: '0.8rem' }}
                    >
                      <span>Continue</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      id="submit-inquiry-manifest-btn"
                      className="btn-primary"
                      style={{ padding: '14px 34px', fontSize: '0.84rem' }}
                    >
                      <span>Send Expedition Manifest</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={13} color="var(--accent-gold)" /> Private & Confidential. No commercial redistribution of your data.
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes stepFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .inquiry-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-xs);
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          color: var(--text-primary);
          font-size: 0.88rem;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }
        .inquiry-input:focus {
          border-color: var(--color-accent-secondary);
        }
        .inquiry-input option {
          background: #16302B;
          color: #E0E0E0;
        }
        @media (max-width: 768px) {
          .inquiry-card-wrapper {
            min-height: calc(100svh - 100px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
};
