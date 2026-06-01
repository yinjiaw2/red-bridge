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

const FIELD_ICON_PATHS = [
  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  'M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2M9 7h6m0 0l2-2m-2 2l2 2',
  'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'M19 8.5l-1.5-4.5H6.5L5 8.5M3 8.5h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zM7 14.5v2a1 1 0 001 1h1a1 1 0 001-1v-2M14 14.5v2a1 1 0 001 1h1a1 1 0 001-1v-2',
];

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function HomeEmployerNetwork() {
  const locale = useLocale();
  const t = useTranslations('v2.home.employerNetwork');
  const headerRef = useReveal(0);
  const verifyRef = useReveal(0.1);

  const FIELDS = (t.raw('fields') as { label: string; roles: string[] }[]).map((f, i) => ({
    ...f,
    iconPath: FIELD_ICON_PATHS[i],
  }));
  const VERIFY_STEPS = t.raw('verifySteps') as { num: string; title: string; detail: string }[];

  const gridRef = useRef<HTMLDivElement>(null);
  const [dropped, setDropped] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setDropped(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        background: B.navy,
        padding: '96px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ marginBottom: 52 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: B.amber,
              marginBottom: 14,
              display: 'block',
            }}
          >
            {t('eyebrow')}
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 'clamp(52px, 7vw, 76px)',
                fontWeight: 900,
                color: B.amber,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                flexShrink: 0,
              }}
            >
              {t('stat')}
            </span>
            <span
              style={{
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              {t('statLabel')}
            </span>
          </div>
          <p
            style={{
              fontSize: 14.5,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              margin: '12px 0 0',
            }}
          >
            {t('description')}
          </p>
        </div>

        {/* ── Field bricks ── */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
            gap: 12,
            marginBottom: 52,
          }}
        >
          {FIELDS.map((field, i) => (
            <div
              key={field.label}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '22px 20px',
                opacity: dropped ? undefined : 0,
                animation: dropped
                  ? `rbBrickDrop 0.55s cubic-bezier(0.215, 0.61, 0.355, 1) ${i * 0.09}s both`
                  : 'none',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(239,182,79,0.12)',
                  border: '1px solid rgba(239,182,79,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={field.iconPath} />
                </svg>
              </div>

              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}
              >
                {field.label}
              </p>

              {/* Role pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {field.roles.slice(0, 3).map((role) => (
                  <span
                    key={role}
                    style={{
                      fontSize: 10.5,
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      padding: '2px 7px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {role}
                  </span>
                ))}
                {field.roles.length > 3 && (
                  <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', padding: '2px 4px' }}>
                    +{field.roles.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Private & Protected + Verification steps ── */}
        <div
          ref={verifyRef}
          className="rb-verify-panel"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 18,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: 32,
          }}
        >
          {/* Left — private note, center aligned */}
          <div
            className="rb-verify-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: B.amber,
                }}
              >
                {t('privateBadge')}
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0 }}>
              {t('privateNote')}
            </p>
          </div>

          {/* Right — label + 3 steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                margin: 0,
              }}
            >
              {t('verificationLabel')}
            </p>
            {VERIFY_STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: i === 0 ? B.red : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${i === 0 ? B.red : 'rgba(255,255,255,0.15)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {i === 0 ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    step.num.slice(1)
                  )}
                </div>
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: '#fff', margin: '0 0 3px' }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link
            href={`/contact?ctasrc=home_v2_employer_network_cta&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 26px',
              background: B.amber,
              color: B.textDeep,
              fontWeight: 700,
              fontSize: 14.5,
              borderRadius: 9,
              textDecoration: 'none',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)}
            onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}
          >
            {t('cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes rbBrickDrop {
          0%   { opacity: 0; transform: translateY(-72px) scaleY(0.88) scaleX(1.04); }
          55%  { transform: translateY(10px) scaleY(1.06) scaleX(0.96); }
          75%  { transform: translateY(-5px) scaleY(0.97) scaleX(1.01); }
          90%  { transform: translateY(2px) scaleY(1.01) scaleX(1.00); }
          100% { opacity: 1; transform: translateY(0) scaleY(1) scaleX(1); }
        }
        .rb-verify-panel { padding: 24px 20px; }
        .rb-verify-left  { border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 24px; }
        @media (min-width: 600px) {
          .rb-verify-panel { padding: 36px 36px 32px; }
          .rb-verify-left  { border-bottom: none; border-right: 1px solid rgba(255,255,255,0.08); padding-bottom: 0; padding-right: 32px; }
        }
      `}</style>
    </section>
  );
}
