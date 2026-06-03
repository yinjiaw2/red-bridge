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

const TILT = 38 * Math.PI / 180; // orbital plane tilt angle
const ORBIT_R = 92;
const SPEED_DEG_PER_SEC = 28; // one full orbit ≈ 13 s

function OrbitStats({ active, chips }: { active: boolean; chips: { display: string; label: string }[] }) {
  const angleRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!active) return;
    const animate = (ts: number) => {
      if (lastTsRef.current !== null) {
        angleRef.current = (angleRef.current + (ts - lastTsRef.current) * SPEED_DEG_PER_SEC / 1000) % 360;
      }
      lastTsRef.current = ts;
      setTick(t => t + 1);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active]);

  const CX = 150, CY = 150;

  const positioned = chips.map((chip, i) => {
    const a = (angleRef.current + i * 120) * Math.PI / 180;
    const x = CX + ORBIT_R * Math.cos(a);
    const y = CY + ORBIT_R * Math.sin(a) * Math.sin(TILT);
    const depth = ORBIT_R * Math.sin(a) * Math.cos(TILT); // –R … +R, +R = front
    const dn = (depth + ORBIT_R) / (2 * ORBIT_R); // 0–1
    return { chip, x, y, dn, depth };
  }).sort((a, b) => a.depth - b.depth); // paint back → front

  return (
    <div style={{ position: 'relative', width: 300, height: 300, flexShrink: 0, overflow: 'visible' }}>
      {/* Implied centre — tiny amber glow, no visible ball */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 10, height: 10, borderRadius: '50%',
        background: B.amber,
        opacity: active ? 0.55 : 0,
        boxShadow: '0 0 28px 14px rgba(239,182,79,0.13)',
        transition: 'opacity 1.2s ease',
        pointerEvents: 'none',
      }} />

      {positioned.map(({ chip, x, y, dn }, idx) => {
        const scale = 0.68 + 0.32 * dn;
        const opacity = active ? 0.42 + 0.58 * dn : 0;
        const borderAlpha = (0.15 + 0.35 * dn).toFixed(2);

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${scale.toFixed(3)})`,
              opacity,
              transition: 'opacity 0.6s ease',
              background: 'rgba(15,28,56,0.72)',
              backdropFilter: 'blur(10px)',
              border: `1px solid rgba(239,182,79,${borderAlpha})`,
              borderRadius: 'clamp(6px, 0.8vw, 10px)',
              padding: 'clamp(5px, 0.6vw, 8px) clamp(8px, 1vw, 13px)',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              boxShadow: dn > 0.55 ? '0 4px 18px rgba(0,0,0,0.35)' : 'none',
            }}
          >
            <p style={{
              fontSize: chip.display.length > 4 ? 'clamp(11px, 1.4vw, 16px)' : 'clamp(15px, 2vw, 22px)',
              fontWeight: 800,
              color: B.amber,
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              {chip.display}
            </p>
            <p style={{
              fontSize: 'clamp(8px, 0.85vw, 10px)',
              color: 'rgba(255,255,255,0.55)',
              margin: '4px 0 0',
              lineHeight: 1.45,
              whiteSpace: 'pre-line',
            }}>
              {chip.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function HomeHero() {
  const locale = useLocale();
  const t = useTranslations('v2.home.hero');

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
          <source src="/videos/rb-hero-video.mp4" type="video/mp4" />
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
            <span style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', fontWeight: 700 }}>{t('headingLine3')}</span>
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
              href="/services/employer-pathway-v2"
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
      `}</style>
    </section>
  );
}
