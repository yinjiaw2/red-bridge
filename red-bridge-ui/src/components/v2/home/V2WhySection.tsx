'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  redMid: '#f5d5d6',
  navy: '#172d5d',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#18181b',
  textBody: '#27272a',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease 0s, transform 0.6s ease 0s';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const DIFF_ICON_PATHS = [
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
];
const DIFF_ACCENTS = [B.navy, B.red, B.navy, B.red, '#2d6a4f', B.amber];

export default function V2WhySection() {
  const locale = useLocale();
  const t = useTranslations('v2.home.why');
  const headerRef = useReveal();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const DIFFERENTIATORS = (t.raw('differentiators') as { title: string; body: string }[]).map((d, i) => ({
    ...d,
    iconPath: DIFF_ICON_PATHS[i],
    accent: DIFF_ACCENTS[i],
  }));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cardRefs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        background: B.cream,
        padding: '88px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <div ref={headerRef} style={{ marginBottom: 48 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: B.red,
              marginBottom: 14,
              display: 'block',
            }}
          >
            {t('eyebrow')}
          </span>

          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: B.textDeep,
              lineHeight: 1.2,
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('heading')}{' '}
            <em style={{ fontStyle: 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: B.textMuted,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {t('subheading')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 18,
            marginBottom: 48,
          }}
        >
          {DIFFERENTIATORS.map((item, i) => {
            const accentBg =
              item.accent === B.red
                ? B.redLight
                : item.accent === B.navy
                ? 'rgba(23,45,93,0.06)'
                : item.accent === B.amber
                ? 'rgba(239,182,79,0.1)'
                : item.accent === '#2d6a4f'
                ? 'rgba(45,106,79,0.07)'
                : 'rgba(0,0,0,0.04)';
            const accentBorder =
              item.accent === B.red
                ? B.redMid
                : item.accent === B.navy
                ? 'rgba(23,45,93,0.12)'
                : item.accent === B.amber
                ? 'rgba(239,182,79,0.25)'
                : item.accent === '#2d6a4f'
                ? 'rgba(45,106,79,0.15)'
                : 'rgba(0,0,0,0.08)';

            return (
              <div
                key={item.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  background: B.bg,
                  border: `1px solid ${B.divider}`,
                  borderRadius: 14,
                  padding: '24px',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 28px rgba(0,0,0,0.09)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={item.iconPath} />
                  </svg>
                </div>

                <p
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: B.textDeep,
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </p>

                <p
                  style={{
                    fontSize: 13.5,
                    color: B.textBody,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <p
            style={{
              fontSize: 14,
              color: B.textMuted,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {t('ctaPrompt')}
          </p>
          <Link
            href={`/contact?ctasrc=home_v2_why_cta&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '11px 22px',
              background: B.red,
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 9,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8f0d11';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = B.red;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('cta')}
          </Link>
        </div>

      </div>
    </section>
  );
}
