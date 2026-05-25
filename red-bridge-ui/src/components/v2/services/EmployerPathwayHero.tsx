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
  textMuted: '#7a6a60',
  divider: '#ece5de',
};

const BADGES = [
  '482 & 186 covered end-to-end',
  'ICT & Marketing specialist network',
  'MARN: 1467870 — licensed legal partner',
  'Free eligibility assessment',
];

const STATS = [
  { value: 200, suffix: '+', label: 'Career placements' },
  { value: 150, suffix: '+', label: 'Employer matches made' },
  { label: '3–12', suffix: '', display: '3–12', unit: 'months', subLabel: 'Typical time to visa', isText: true },
  {
    isRating: true,
    display: '4.9★',
    label: 'Google Reviews',
    sublabel: '47 reviews',
    href: 'https://www.google.com/maps/search/?api=1&query=RedBridge+Consulting+Docklands',
  },
];

function useCountUp(target: number | undefined, active: boolean, duration: number = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || !target) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, index, active }: { stat: typeof STATS[number]; index: number; active: boolean }) {
  const count = useCountUp('value' in stat ? stat.value : undefined, active, 1200 + index * 100);

  return (
    <div
      style={{
        background: 'rgba(251,244,236,0.85)',
        border: `1px solid ${B.divider}`,
        borderRadius: 12,
        padding: '16px 20px',
        minWidth: 110,
        backdropFilter: 'blur(4px)',
      }}
    >
      {stat.isRating ? (
        <a
          href={stat.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <p style={{ fontSize: 24, fontWeight: 800, color: B.red, margin: '0 0 2px', letterSpacing: '-0.03em' }}>
            {stat.display}
          </p>
          <p style={{ fontSize: 11.5, color: B.textMuted, margin: 0, lineHeight: 1.4 }}>{stat.label}</p>
          <p style={{ fontSize: 10.5, color: B.textMuted, margin: 0, opacity: 0.7 }}>{stat.sublabel}</p>
        </a>
      ) : stat.isText ? (
        <>
          <p style={{ fontSize: 24, fontWeight: 800, color: B.red, margin: '0 0 4px', letterSpacing: '-0.03em' }}>
            {stat.display} <span style={{ fontSize: 13, fontWeight: 600 }}>{stat.unit}</span>
          </p>
          <p style={{ fontSize: 11.5, color: B.textMuted, margin: 0 }}>{stat.subLabel}</p>
        </>
      ) : (
        <>
          <p style={{ fontSize: 24, fontWeight: 800, color: B.red, margin: '0 0 4px', letterSpacing: '-0.03em' }}>
            {active ? `${count}${stat.suffix}` : `0${stat.suffix}`}
          </p>
          <p style={{ fontSize: 11.5, color: B.textMuted, margin: 0 }}>{stat.label}</p>
        </>
      )}
    </div>
  );
}

export default function EmployerPathwayHero() {
  const locale = useLocale();
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '52vh',
        display: 'flex',
        alignItems: 'flex-end',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/home-assets/office-meeting.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(23,45,93,0.3) 0%, rgba(23,45,93,0.75) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1100,
          margin: '0 auto',
          padding: '64px 24px 52px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: B.amber,
            marginBottom: 14,
          }}
        >
          Employer Sponsored Visas
        </p>

        <h1
          style={{
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.12,
            margin: '0 0 16px',
            letterSpacing: '-0.025em',
            maxWidth: 620,
          }}
        >
          Your Skills Deserve{' '}
          <em style={{ fontStyle: 'italic', color: B.amber }}>a Real Sponsor</em>
        </h1>

        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.65,
            maxWidth: 560,
            margin: '0 0 28px',
          }}
        >
          The 482 visa requires an employer. Most agencies sell you a job list and
          hope for the best. We give you direct access to a verified employer
          network where every position is confirmed before it reaches you — and
          we stay with you to the 186 PR finish line.
        </p>

        {/* Feature badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
          {BADGES.map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 6,
                padding: '4px 10px',
                backdropFilter: 'blur(4px)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        <Link
          href={`/contact?ctasrc=employer_pathway_v2_hero_cta&locale=${locale}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '13px 26px',
            background: B.amber,
            color: B.textDeep,
            fontWeight: 800,
            fontSize: 15,
            borderRadius: 9,
            textDecoration: 'none',
            marginBottom: 40,
            transition: 'background 0.18s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)}
          onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}
        >
          Book My Free Assessment
        </Link>

        {/* Stats row */}
        <div
          ref={statsRef}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={active} />
          ))}
        </div>

        {/* Policy review note */}
        <p
          style={{
            fontSize: 11.5,
            color: 'rgba(255,255,255,0.45)',
            margin: '20px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          Information last reviewed <strong style={{ color: 'rgba(255,255,255,0.6)' }}>March 2026</strong>. Immigration policy changes regularly.{' '}
          <a
            href="https://immi.homeaffairs.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: B.amber, textDecoration: 'none' }}
          >
            Visit DOHA for the latest →
          </a>
        </p>
      </div>
    </section>
  );
}
