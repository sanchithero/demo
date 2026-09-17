import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

export const PlanCtaSection: React.FC = () => {
  return (
    <section
      id="plan-cta-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      <div className="container-editorial" style={{ position: 'relative', textAlign: 'center', zIndex: 10 }}>
        <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
          <span>Initiate Your Journey • यात्राको आरम्भ</span>
        </div>

        <h2
          className="editorial-title-lg"
          style={{
            maxWidth: '920px',
            margin: '0 auto 20px',
            lineHeight: 1.08,
            color: 'var(--text-primary)'
          }}
        >
          YOUR PATH THROUGH NEPAL STARTS HERE
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            fontWeight: 300,
            maxWidth: '680px',
            margin: '0 auto clamp(32px, 4vw, 48px)'
          }}
        >
          Whether you desire a private helicopter traverse into Upper Mustang or a reflective retreat among Newar courtyards, our lead expedition curators in Kathmandu are ready to craft your bespoke manifest.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <Link
            to="/inquiry"
            id="cta-plan-journey-btn"
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '0.84rem' }}
          >
            <span>Design Your Journey</span>
            <ArrowRight size={15} />
          </Link>

          <Link
            to="/contact"
            id="cta-speak-concierge-btn"
            className="btn-secondary"
            style={{ padding: '16px 32px', fontSize: '0.84rem' }}
          >
            <PhoneCall size={15} color="var(--accent-gold)" />
            <span>Speak to Private Concierge</span>
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(20px, 4vw, 40px)',
            marginTop: 'clamp(36px, 5vw, 60px)',
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            opacity: 0.9
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={15} color="var(--accent-gold)" /> 100% Tailored Private Itineraries
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={15} color="var(--accent-gold)" /> Direct Native Sherpa Expedition Leads
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={15} color="var(--accent-gold)" /> 24/7 Satellite & Heli Emergency Logistics
          </span>
        </div>
      </div>
    </section>
  );
};
