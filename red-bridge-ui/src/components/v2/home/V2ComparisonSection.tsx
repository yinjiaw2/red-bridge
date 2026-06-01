'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  redMid: '#f5d5d6',
  navy: '#172d5d',
  navyLight: 'rgba(23,45,93,0.06)',
  navyBorder: 'rgba(23,45,93,0.12)',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#18181b',
  textBody: '#27272a',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};


function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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

export default function V2ComparisonSection() {
  const locale = useLocale();
  const t = useTranslations('v2.home.comparison');
  const headerRef = useReveal();
  const tableRef = useReveal();

  const ROWS = t.raw('rows') as { topic: string; others: { title: string; desc: string }; rb: { title: string; desc: string } }[];

  return (
    <section
      style={{
        background: B.cream,
        padding: '88px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 40 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: B.red,
              display: 'block',
              marginBottom: 14,
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
          <p style={{ fontSize: 15.5, color: B.textMuted, lineHeight: 1.65, margin: 0 }}>
            {t('subheading')}
          </p>
        </div>

        {/* Table */}
        <div
          ref={tableRef}
          style={{
            border: `1px solid ${B.divider}`,
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          {/* Column headers */}
          <div className="rb-cmp-grid" style={{ display: 'grid' }}>
            <div
              style={{
                padding: '14px 20px',
                background: B.bg,
                borderBottom: `1px solid ${B.divider}`,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: B.textMuted,
              }}
            >
              {t('colTopic')}
            </div>
            <div
              className="rb-cmp-others-header"
              style={{
                padding: '14px 20px',
                background: '#f0f0f1',
                borderBottom: `1px solid ${B.divider}`,
                borderLeft: `1px solid ${B.divider}`,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: B.textMuted,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: B.divider,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: B.textMuted,
                  flexShrink: 0,
                }}
              >
                <XIcon />
              </span>
              {t('colOthers')}
            </div>
            <div
              style={{
                padding: '14px 20px',
                background: B.navy,
                borderBottom: `1px solid rgba(255,255,255,0.1)`,
                borderLeft: `1px solid rgba(255,255,255,0.1)`,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: B.amber,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: B.navy,
                  flexShrink: 0,
                }}
              >
                <CheckIcon />
              </span>
              {t('colRedBridge')}
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.topic}
              className="rb-cmp-grid"
              style={{
                display: 'grid',
                borderBottom: i < ROWS.length - 1 ? `1px solid ${B.divider}` : 'none',
              }}
            >
              {/* Topic cell */}
              <div
                style={{
                  padding: '20px',
                  background: B.cream,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: B.redLight,
                    border: `1px solid ${B.redMid}`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: B.red,
                    flexShrink: 0,
                    marginTop: 1,
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: B.textDeep,
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {row.topic}
                </p>
              </div>

              {/* Others cell */}
              <div
                className="rb-cmp-others-cell"
                style={{
                  padding: '20px',
                  background: '#fafafa',
                  borderLeft: `1px solid ${B.divider}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: B.divider,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: B.textMuted,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <XIcon />
                  </span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: B.textBody, margin: '0 0 3px', lineHeight: 1.35 }}>
                      {row.others.title}
                    </p>
                    <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.5 }}>
                      {row.others.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* RedBridge cell */}
              <div
                style={{
                  padding: '20px',
                  background: B.navyLight,
                  borderLeft: `1px solid ${B.navyBorder}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: B.amber,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: B.navy,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: B.navy, margin: '0 0 3px', lineHeight: 1.35 }}>
                      {row.rb.title}
                    </p>
                    <p style={{ fontSize: 12.5, color: B.textBody, margin: 0, lineHeight: 1.5 }}>
                      {row.rb.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            marginTop: 28,
            background: B.navy,
            borderRadius: 14,
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
              {t('ctaStripHeading')}
            </p>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              {t('ctaStripSub')}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link
              href={`/contact?ctasrc=home_v2_comparison_cta&locale=${locale}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: B.amber,
                color: B.textDeep,
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 9,
                textDecoration: 'none',
                transition: 'background 0.18s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)}
              onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/services/employer-pathway"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 20px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 9,
                border: '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
                transition: 'border-color 0.18s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .rb-cmp-grid { grid-template-columns: 1fr 1fr; }
        .rb-cmp-others-header,
        .rb-cmp-others-cell { display: none !important; }
        @media (min-width: 768px) {
          .rb-cmp-grid { grid-template-columns: 1fr 1fr 1.2fr; }
          .rb-cmp-others-header,
          .rb-cmp-others-cell { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
