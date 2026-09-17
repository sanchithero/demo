import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TRIPS } from '../data/trips';
import { Clock, Mountain, MapPin, Calendar, Check, X, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export const TripDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const trip = TRIPS.find((t) => t.id === id || t.slug === id) || TRIPS[0];

  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [selectedTier, setSelectedTier] = useState<'signature' | 'privateBespoke'>('signature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const toggleDay = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  const handleInquireThisTrip = () => {
    navigate(`/inquiry?trip=${encodeURIComponent(trip.title)}&tier=${selectedTier}&dest=${encodeURIComponent(trip.region)}`);
  };

  return (
    <main id="trip-detail-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Dossier Hero Visual */}
      <section
        style={{
          position: 'relative',
          height: 'clamp(420px, 55vh, 580px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: 'clamp(32px, 5vw, 56px)'
        }}
      >
        <img
          src={trip.heroImage}
          alt={trip.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(3,17,13,0.15) 0%, rgba(3,17,13,0.95) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-xs)',
                background: 'var(--color-accent-primary)',
                border: '1px solid var(--color-accent-secondary)',
                color: 'var(--color-text-main)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {trip.category}
            </span>
            <span className="font-devanagari" style={{ color: 'var(--accent-gold)', fontSize: '1.05rem' }}>
              {trip.devanagari}
            </span>
          </div>

          <h1
            className="editorial-title-lg"
            style={{
              color: 'var(--text-primary)',
              maxWidth: '920px',
              marginBottom: '16px'
            }}
          >
            {trip.title}
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(16px, 3vw, 32px)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="var(--accent-gold)" /> {trip.duration}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="var(--accent-gold)" /> {trip.region}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mountain size={14} color="var(--accent-gold)" /> Elevation: {trip.elevationMax}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} color="var(--accent-gold)" /> Prime Season: {trip.bestSeason}
            </span>
          </div>
        </div>
      </section>

      {/* Main Two-Column Dossier Layout */}
      <section className="section-py">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Dossier Details & Itinerary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>
            {/* Overview */}
            <div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '14px', fontWeight: 400 }}>
                Expedition Overview
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300 }}>
                {trip.fullOverview}
              </p>
            </div>

            {/* Highlights */}
            <div
              style={{
                padding: '26px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 400 }}>
                Expedition Highlights
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {trip.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 300 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                  Day-by-Day Dossier
                </h2>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {trip.itinerary.length} Days Itinerary
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {trip.itinerary.map((day) => {
                  const isOpen = expandedDay === day.day;
                  return (
                    <div
                      key={day.day}
                      style={{
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-card)',
                        border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                        overflow: 'hidden',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <button
                        onClick={() => toggleDay(day.day)}
                        style={{
                          width: '100%',
                          padding: '18px 22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          background: 'transparent',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-sans)',
                              color: isOpen ? 'var(--accent-primary)' : 'var(--text-muted)',
                              fontWeight: 600
                            }}
                          >
                            DAY {day.day < 10 ? `0${day.day}` : day.day}
                          </span>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                            {day.title}
                          </h4>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '0.74rem', color: 'var(--accent-gold)' }} className="hide-mobile">
                            {day.altitude}
                          </span>
                          {isOpen ? <ChevronUp size={16} color="var(--accent-primary)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 22px 20px 22px', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '12px' }}>
                            {day.description}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '0.76rem', color: 'var(--accent-gold)' }}>
                            <span>Lodging: <strong>{day.lodging}</strong></span>
                            <span>Altitude: <strong>{day.altitude}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 500 }}>
                  Expedition Inclusions
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {trip.inclusions.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <Check size={14} color="var(--color-accent-secondary)" style={{ flexShrink: 0 }} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 500 }}>
                  Exclusions
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {trip.exclusions.map((exc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      <X size={14} color="var(--color-accent-primary)" style={{ flexShrink: 0 }} />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Accommodations */}
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 500 }}>
                Luxury Himalayan Sanctuaries
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300 }}>
                Accommodations for this expedition: <strong>{trip.accommodations}</strong>. Handpicked private heritage properties and secluded mountain lodges with heated duvets and private fireplaces.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Pricing Dossier Card */}
          <div
            style={{
              position: 'sticky',
              top: 'calc(var(--nav-height) + 20px)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-card)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.65)',
              padding: 'clamp(24px, 3.5vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }} className="font-display">
                Transparent Pricing Manifest
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginTop: '4px', fontWeight: 400 }}>
                Select Expedition Tier
              </h3>
            </div>

            {/* Tier Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Signature Tier */}
              <div
                onClick={() => setSelectedTier('signature')}
                style={{
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-sm)',
                  background: selectedTier === 'signature' ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                  border: selectedTier === 'signature' ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    Signature Small Group
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-accent-secondary)' }}>
                    ${trip.pricing.signature.toLocaleString()}
                  </span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', marginTop: '3px' }}>
                  Max 6 guests per departure, boutique mountain lodges, lead Sherpa.
                </p>
              </div>

              {/* Private Bespoke Tier */}
              <div
                onClick={() => setSelectedTier('privateBespoke')}
                style={{
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-sm)',
                  background: selectedTier === 'privateBespoke' ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                  border: selectedTier === 'privateBespoke' ? '1px solid var(--color-accent-secondary)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    Private Bespoke Expedition
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-accent-secondary)' }}>
                    ${trip.pricing.privateBespoke.toLocaleString()}
                  </span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
                  Completely private party, custom departure date, private concierge.
                </p>
              </div>

              {trip.pricing.heliUpgrade && (
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'var(--bg-card)',
                    border: '1px dashed var(--border-card)',
                    fontSize: '0.76rem',
                    color: 'var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>Charter Helicopter Upgrade</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+${trip.pricing.heliUpgrade.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Primary Action Button: Inquire About This Trip */}
            <button
              onClick={handleInquireThisTrip}
              id="inquire-this-trip-btn"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '0.84rem'
              }}
            >
              <span>Inquire About This Trip</span>
              <ArrowRight size={15} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={13} color="var(--accent-gold)" /> No commitment required today. Custom proposal issued in 24h.
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={13} color="var(--accent-gold)" /> 100% flexible rescheduling policy for private parties.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Concluding CTA Block */}
      <section
        className="theme-surface"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          textAlign: 'center'
        }}
      >
        <div className="container-editorial">
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Bespoke Manifest • यात्रा योजना</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Connect with our expedition leads in Kathmandu to finalize your private dates and flight manifests.
          </p>
          <Link to="/inquiry" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.82rem' }}>
            <span>Design Your Journey</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
};
