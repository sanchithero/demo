import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Award, HeartHandshake, Mountain } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: 'Pemba Dawa Sherpa',
      role: 'Co-Founder & Lead Alpine Curator',
      credentials: '6-time Everest Summiteer, UIAGM / IFMGA Certified',
      bio: 'Born in Pangboche in upper Khumbu, Pemba has spent 22 seasons guiding private expeditions across the highest massifs on Earth.',
      image: '/assets/images/stories/namche-ridge.webp'
    },
    {
      name: 'Sunita Malla Shrestha',
      role: 'Co-Founder & Director of Cultural Heritage',
      credentials: 'Art Historian, Kathmandu Valley Heritage Trust Fellow',
      bio: 'A native of Patan, Sunita specializes in Newar sacred iconography, medieval palace restorations, and curating private monastic audiences.',
      image: '/assets/images/stories/monasteries.webp'
    },
    {
      name: 'Julian Montgomery',
      role: 'Head of Global Expedition Design',
      credentials: 'Former Luxury Travel Editor, Fellow of the Royal Geographical Society',
      bio: 'Julian orchestrates private logistics, charter aviation, and bespoke culinary curations to ensure PāTH journeys exceed international luxury benchmarks.',
      image: '/assets/images/stories/fishtail-dawn.webp'
    }
  ];

  return (
    <main id="about-page" className="theme-primary" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-pt section-pb" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div className="editorial-kicker">
            <span>Origins & Ethos • हाम्रो कथा</span>
          </div>
          <h1 className="editorial-title-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            The Story of PāTH
          </h1>
          <p className="editorial-lead" style={{ color: 'var(--text-secondary)' }}>
            We founded PāTH with an unyielding conviction: that travel through the world’s highest sanctuary should be poetic, intellectually profound, and executed with world-class refinement.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy Section */}
      <section className="theme-surface section-py" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(36px, 6vw, 72px)',
              alignItems: 'center'
            }}
          >
            <div className="cinematic-media-frame" style={{ height: 'clamp(400px, 50vw, 580px)', borderRadius: 'var(--radius-lg)' }}>
              <img
                src="/assets/images/journeys/circuit-quiet.webp"
                alt="Sherpa trail in Annapurna"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="editorial-kicker">
                <span>The Word • पथ</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.15 }}>
                A Direction, A Calling, A Sacred Way.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)', fontWeight: 300 }}>
                In ancient Sanskrit, <strong>पथ (PāTH)</strong> is more than a trail on a topographic map. It is the chosen direction of one’s spirit—a mindful passage across sacred terrain.
              </p>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.75, color: 'var(--text-secondary)', fontWeight: 300 }}>
                Too often, travel in Nepal has been reduced to physical exertion or hurried checklists. PāTH reclaims the contemplative spirit of the grand Himalayan expedition. We replace standard teahouses with heated mountain sanctuaries, turbulent bus journeys with private helicopter traverses, and generic guide scripts with intimate conversations with monastic keepers and master artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Leadership with Fixed Image Cropping */}
      <section className="theme-primary section-py" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <div className="editorial-kicker">
              <span>Curators of the High Realm • हाम्रो समूह</span>
            </div>
            <h2 className="editorial-title-lg" style={{ color: 'var(--text-primary)' }}>
              Expedition Leadership
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(28px, 4vw, 40px)'
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
                className="team-member-card"
              >
                {/* 4/5 Aspect Ratio + objectPosition: 'top center' to preserve facial framing */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease'
                    }}
                    className="team-portrait-img"
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {member.name}
                  </h3>
                  <span style={{ fontSize: '0.74rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginTop: '4px', fontWeight: 600 }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                    {member.credentials}
                  </p>
                </div>

                <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Travel Stewardship */}
      <section className="theme-surface section-py" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-editorial">
          <div
            style={{
              padding: 'clamp(32px, 5vw, 60px)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)'
            }}
          >
            <div className="editorial-kicker">
              <span>Conservation Commitment • उत्तरदायी पर्यटन</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '14px', fontWeight: 400 }}>
              The PāTH Regenerative Pledge
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '24px' }}>
              The high Himalayas are fragile. We do not treat them as a backdrop for consumption. 5% of all expedition fees are directed to our independent Himalayan Trust:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '28px' }}>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-xs)', background: 'rgba(163, 133, 96, 0.08)', border: '1px solid var(--color-border)' }}>
                <h4 style={{ color: 'var(--color-accent-secondary)', fontSize: '0.94rem', marginBottom: '6px', fontWeight: 600 }}>Sherpa Education Fund</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Full academic scholarships for the children of high-altitude staff in Solukhumbu.</p>
              </div>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-xs)', background: 'rgba(163, 133, 96, 0.08)', border: '1px solid var(--color-border)' }}>
                <h4 style={{ color: 'var(--color-accent-secondary)', fontSize: '0.94rem', marginBottom: '6px', fontWeight: 600 }}>Monastery Fresco Restoration</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Funding gold-leaf preservation of 14th-century Buddhist frescoes in Upper Mustang.</p>
              </div>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-xs)', background: 'rgba(163, 133, 96, 0.08)', border: '1px solid var(--color-border)' }}>
                <h4 style={{ color: 'var(--color-accent-secondary)', fontSize: '0.94rem', marginBottom: '6px', fontWeight: 600 }}>Zero Plastic Wilderness</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>All our camps utilize high-performance UV filtration; single-use plastic is strictly prohibited.</p>
              </div>
            </div>

            <Link to="/inquiry" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.8rem' }}>
              <span>Plan an Expedition with Purpose</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-Footer Concluding CTA Block */}
      <section
        className="theme-surface"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-surface)',
          textAlign: 'center'
        }}
      >
        <div className="container-editorial">
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span>Begin Your Story • यात्रा</span>
          </div>
          <h2 className="editorial-title-lg" style={{ color: 'var(--color-text-main)', marginBottom: '16px' }}>
            YOUR PATH THROUGH NEPAL STARTS HERE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Connect with our founding team in Kathmandu to craft your private expedition.
          </p>
          <Link to="/inquiry" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.82rem' }}>
            <span>Design Your Journey</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        .team-member-card:hover {
          transform: translateY(-4px);
          border-color: rgba(163, 133, 96, 0.45) !important;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
        }
        .team-member-card:hover .team-portrait-img {
          transform: scale(1.03);
        }
      `}</style>
    </main>
  );
};
