'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  navy: '#172d5d',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#18181b',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

const CIRC = 2 * Math.PI * 90; // ≈ 565.5

const CHIP_POSITIONS = [
  {
    ringX: 150, ringY: 60,       // angle -90° (top)
    wrapStyle: { top: 2, left: 0, right: 0 } as React.CSSProperties,
    textAlign: 'center' as const,
    fadeY: -8,
  },
  {
    ringX: 228, ringY: 195,      // angle 30° (bottom-right)
    wrapStyle: { bottom: 2, right: 8 } as React.CSSProperties,
    textAlign: 'right' as const,
    fadeY: 8,
  },
  {
    ringX: 72, ringY: 195,       // angle 150° (bottom-left)
    wrapStyle: { bottom: 2, left: 8 } as React.CSSProperties,
    textAlign: 'left' as const,
    fadeY: 8,
  },
];

function RingStats({ active, chips }: { active: boolean; chips: { display: string; label: string; ringX: number; ringY: number; wrapStyle: React.CSSProperties; textAlign: 'center' | 'left' | 'right'; fadeY: number }[] }) {
  const CX = 150, CY = 150;

  return (
    <div style={{ position: 'relative', width: 300, height: 300, flexShrink: 0 }}>
      <svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
        {/* Decorative background rings */}
        <circle cx={CX} cy={CY} r={40}  fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={65}  fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={115} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Ghost track */}
        <circle cx={CX} cy={CY} r={90} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />

        {/* Animated amber ring */}
        <circle
          cx={CX} cy={CY} r={90}
          fill="none"
          stroke={B.amber}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={active ? 0 : CIRC}
          transform={`rotate(-90, ${CX}, ${CY})`}
          style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />

        {/* Amber dots at stat positions on ring */}
        {chips.map((c, i) => (
          <circle
            key={i}
            cx={c.ringX} cy={c.ringY} r="3"
            fill={B.amber}
            style={{
              opacity: active ? 1 : 0,
              transition: `opacity 0.4s ease ${1 + i * 0.18}s`,
            }}
          />
        ))}

        {/* Short tick lines outward from each dot */}
        {chips.map((c, i) => {
          const dx = (c.ringX - CX) / 90;
          const dy = (c.ringY - CY) / 90;
          return (
            <line
              key={i}
              x1={c.ringX} y1={c.ringY}
              x2={c.ringX + dx * 14} y2={c.ringY + dy * 14}
              stroke="rgba(239,182,79,0.45)"
              strokeWidth="1"
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity 0.4s ease ${1.1 + i * 0.18}s`,
              }}
            />
          );
        })}

        {/* Centre dot */}
        <circle cx={CX} cy={CY} r="4" fill="rgba(239,182,79,0.2)" />
        <circle cx={CX} cy={CY} r="2" fill={B.amber} />
      </svg>

      {/* Stat chips — absolutely positioned within the 300×300 container */}
      {chips.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...c.wrapStyle,
            textAlign: c.textAlign,
            opacity: active ? 1 : 0,
            transform: `translateY(${active ? 0 : c.fadeY}px)`,
            transition: `opacity 0.5s ease ${0.7 + i * 0.18}s, transform 0.5s ease ${0.7 + i * 0.18}s`,
          }}
        >
          <p style={{ fontSize: 26, fontWeight: 800, color: B.amber, margin: 0, letterSpacing: '-0.03em', lineHeight: 1 }}>
            {c.display}
          </p>
          <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0', lineHeight: 1.45, whiteSpace: 'pre-line' }}>
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function HomeHero() {
  const locale = useLocale();
  const t = useTranslations('v2.home.hero');
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const chipData = (t.raw('chips') as { display: string; label: string }[]);
  const CHIPS = chipData.map((c, i) => ({ ...c, ...CHIP_POSITIONS[i] }));

  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="rb-hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      {/* Background hero video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: 'scale(1.15)', transformOrigin: 'center 40%' }}
        >
          <source src="/rb-hero-video.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom,
              rgba(15,28,56,0.15) 0%,
              rgba(15,28,56,0.0)  30%,
              rgba(15,28,56,0.6)  70%,
              rgba(15,28,56,0.88) 100%)`,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(177,18,23,0.18) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Hero content ── */}
      <div
        className="rb-hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1160,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
        }}
      >
        {/* Left: text content */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>

          {/* Eyebrow badges */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, marginBottom: 20 }}>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(177,18,23,0.15)', border: '1px solid rgba(177,18,23,0.3)',
                borderRadius: 6, padding: '5px 12px',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: B.amber, display: 'inline-block' }} aria-hidden="true" />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                {t('eyebrow')}
              </span>
            </div>
            <span
              style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)', background: 'rgba(23,45,93,0.5)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6,
                padding: '5px 12px', backdropFilter: 'blur(6px)',
              }}
            >
              {t('abn')}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 800, color: '#fff', lineHeight: 1.1,
              margin: '0 0 18px', letterSpacing: '-0.03em',
              maxWidth: 620, textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            {t('headingLine1')}
            <br />
            <span style={{ color: B.amber }}>{t('headingLine2')}</span>
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 700 }}>{t('headingLine3')}</span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.8)', lineHeight: 1.65,
              maxWidth: 480, margin: '0 0 32px',
            }}
          >
            {t('subheading')}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link
              href={`/contact?ctasrc=home_v2_hero_cta&locale=${locale}`}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 28px', background: B.amber, color: B.textDeep,
                fontWeight: 800, fontSize: 15.5, borderRadius: 10, textDecoration: 'none',
                letterSpacing: '-0.01em', transition: 'background 0.18s ease, transform 0.18s ease',
                boxShadow: '0 4px 20px rgba(239,182,79,0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = B.amberDeep; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = B.amber; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/services/employer-pathway"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '14px 24px', background: 'rgba(255,255,255,0.1)', color: '#fff',
                fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)',
                transition: 'background 0.18s ease, border-color 0.18s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >
              {t('ctaSecondary')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: animated ring (hidden on mobile) */}
        <div ref={ringRef} className="rb-ring-col">
          <RingStats active={active} chips={CHIPS} />
        </div>
      </div>

      <style>{`
        .rb-hero-section {
          height: 100vh;
          height: 100dvh;
          margin: 0;
          padding-top: 64px;
        }
        @media (min-width: 768px) {
          .rb-hero-section { padding-top: 96px; }
        }
        .rb-hero-content {
          flex: 1;
          padding: 0 24px;
        }
        .rb-ring-col { display: block; }
        @media (max-width: 740px) {
          .rb-ring-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
