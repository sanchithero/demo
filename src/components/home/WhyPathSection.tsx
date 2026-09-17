import React from 'react';

export const WhyPathSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Native High-Altitude Lineage',
      tag: 'Local Knowledge',
      desc: 'Our expedition leads are not outsourced tour conductors. They are native Sherpas, Gurungs, and Newars whose families have inhabited these high valleys for centuries. Their deep kinship with local monastic keepers unlocks doors that remain sealed to ordinary travelers.'
    },
    {
      num: '02',
      title: 'Flawless Alpine Logistics',
      tag: 'Thoughtful Planning',
      desc: 'High mountain journeys require meticulous execution. With dedicated private Airbus H125 helicopters on standby, satellite telecommunications, heated high-altitude dome sanctuaries, and real-time biometric oxygen monitoring, luxury and safety exist in seamless harmony.'
    },
    {
      num: '03',
      title: 'Beyond the Commercial Treadmill',
      tag: 'Authentic Experiences',
      desc: 'We purposefully bypass overcrowded teahouses and generic trekking circuit cliches. Every PāTH itinerary is designed around private moments: private monastic pujas before dawn, sunrise landings at unmapped glacial ridges, and banquets in historic Newar palaces.'
    },
    {
      num: '04',
      title: 'Private Butler & Expedition Concierge',
      tag: 'Personal Service',
      desc: 'From custom dietary curations by alpine private chefs to seamless luggage transfers between luxury heritage estates and remote ridge lodges, your expedition is coordinated by a dedicated personal concierge available 24 hours a day.'
    },
    {
      num: '05',
      title: 'Regenerative Mountain Stewardship',
      tag: 'Responsible Travel',
      desc: 'We practice strict leave-no-trace protocols and contribute 5% of all expedition fees directly to high-altitude sherpa education, monastic fresco restoration, and glacial monitoring initiatives throughout the Everest, Annapurna, and Mustang regions.'
    }
  ];

  return (
    <section
      id="why-path-section"
      className="theme-surface section-py"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 68px)' }}>
          <div className="editorial-kicker">
            <span>The PāTH Distinction • हाम्रो विशेषता</span>
          </div>
          <h2 className="editorial-title-lg" style={{ maxWidth: '850px', color: 'var(--text-primary)' }}>
            Why Discerning Explorers Choose PāTH
          </h2>
          <p style={{ marginTop: '16px', fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '640px' }}>
            We do not sell packaged tours. We orchestrate transformational private encounters with the living spirit of the Himalayas.
          </p>
        </div>

        {/* Editorial Asymmetrical Staggered Columns on Dark Surface */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 36px)'
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              style={{
                padding: 'clamp(26px, 3vw, 36px)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
              className="why-path-card"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)'
                    }}
                  >
                    {pillar.num}
                  </span>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(163, 133, 96, 0.1)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-secondary)',
                      fontWeight: 500
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--color-text-main)',
                    marginBottom: '10px',
                    lineHeight: 1.28
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                    fontWeight: 300
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-accent-secondary)',
                  opacity: 0.5
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-path-card:hover {
          transform: translateY(-4px);
          border-color: rgba(163, 133, 96, 0.45) !important;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
    </section>
  );
};
