'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  navy: '#172d5d',
  bg: '#f5f1ea',
  cream: '#fbf4ec',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#22150f',
  textBody: '#1f1f1f',
  textMuted: '#7a6a60',
  divider: '#ece5de',
};

const STATS = [
  { value: 200,   suffix: '+', label: 'Successful placements' },
  { value: 300,   suffix: '+', label: 'Skills assessments passed' },
  { value: 10,    suffix: '+', label: 'Employer sponsor partners' },
  {
    value: null,
    display: '4.9★',
    label: 'on Google Reviews',
    href: 'https://www.google.com/maps/search/?api=1&query=RedBridge+Consulting+Docklands',
    sublabel: '(47 reviews)',
  },
];

function useCountUp(target: number | null, duration: number = 1400, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, index, active }: { stat: typeof STATS[number]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1200 + index * 150, active);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px 16px',
        background: 'rgba(251,244,236,0.7)',
        border: `1px solid ${B.divider}`,
        borderRadius: 14,
        backdropFilter: 'blur(4px)',
        minWidth: 120,
        flex: '1 1 120px',
      }}
    >
      {stat.href ? (
        <a
          href={stat.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          aria-label={`${stat.display} ${stat.label} ${stat.sublabel ?? ''}`}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: B.red,
              margin: '0 0 2px',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {stat.display}
          </p>
          <p style={{ fontSize: 12, color: B.textMuted, margin: '0 0 1px', lineHeight: 1.4 }}>
            {stat.label}
          </p>
          {stat.sublabel && (
            <p style={{ fontSize: 11, color: B.textMuted, margin: 0, opacity: 0.7 }}>
              {stat.sublabel}
            </p>
          )}
        </a>
      ) : (
        <>
          <p
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: B.red,
              margin: '0 0 4px',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {active ? `${count}${stat.suffix}` : `0${stat.suffix}`}
          </p>
          <p style={{ fontSize: 12, color: B.textMuted, margin: 0, lineHeight: 1.4 }}>
            {stat.label}
          </p>
        </>
      )}
    </div>
  );
}

export default function HomeHero() {
  const locale = useLocale();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsActive(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      {/* Background hero image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/home-hero-bg.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Warm gradient overlay — darkens bottom for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(
                to bottom,
                rgba(245,241,234,0.15) 0%,
                rgba(34,21,15,0.0)    30%,
                rgba(34,21,15,0.55)   70%,
                rgba(34,21,15,0.82)   100%
              )
            `,
          }}
          aria-hidden="true"
        />
        {/* Brand red warm tint — subtle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(177,18,23,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── REGISTERED badge — top left ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: '20px 24px 0',
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: 1160,
          margin: '0 auto',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            background: 'rgba(23,45,93,0.5)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 6,
            padding: '5px 12px',
            backdropFilter: 'blur(6px)',
          }}
        >
          Registered Australian Consultancy · ABN 88 678 186 091
        </span>
      </div>

      {/* ── Hero content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 24px 64px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(177,18,23,0.15)',
            border: '1px solid rgba(177,18,23,0.3)',
            borderRadius: 6,
            padding: '5px 12px',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: B.amber,
              display: 'inline-block',
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Melbourne &amp; Sydney · Employer Sponsorship Specialists
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            margin: '0 0 18px',
            letterSpacing: '-0.03em',
            maxWidth: 700,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Build Your Career
          <br />
          <span style={{ color: B.amber }}>in Australia.</span>
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 700 }}>We Make It Real.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(15px, 2.2vw, 18px)',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.65,
            maxWidth: 520,
            margin: '0 0 32px',
          }}
        >
          Get placed with verified employers. Gain the right experience.
          Move from study to 482 visa and PR — with a legal partner
          at every step.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
          <Link
            href={`/contact?ctasrc=home_v2_hero_cta&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              background: B.amber,
              color: B.textDeep,
              fontWeight: 800,
              fontSize: 15.5,
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.18s ease, transform 0.18s ease',
              boxShadow: '0 4px 20px rgba(239,182,79,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = B.amberDeep;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = B.amber;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Free Consultation
          </Link>

          <Link
            href="/services/employer-pathway"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '14px 24px',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 10,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.18s ease, border-color 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            See How We Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={statsActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
