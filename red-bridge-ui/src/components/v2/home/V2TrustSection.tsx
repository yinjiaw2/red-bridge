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

const CREDENTIAL_ICON_PATHS = [
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
];
const CREDENTIAL_META = [
  { ctaHref: 'https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=4a87bac4-9b52-e411-9402-005056ab0eca', ctaExternal: true, accent: B.navy },
  { ctaHref: 'https://abr.business.gov.au/ABN/View?abn=88678186091', ctaExternal: true, accent: B.navy },
  { ctaHref: '/contact?ctasrc=home_v2_trust_cta', ctaExternal: false, accent: B.red },
];

export default function V2TrustSection() {
  const locale = useLocale();
  const t = useTranslations('v2.home.trust');
  const ref = useReveal();

  const CREDENTIALS = (t.raw('credentials') as { title: string; badge: string; desc: string; ctaLabel: string }[]).map((c, i) => ({
    ...c,
    iconPath: CREDENTIAL_ICON_PATHS[i],
    ...CREDENTIAL_META[i],
  }));

  return (
    <section
      style={{
        background: B.bg,
        padding: '88px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      <div ref={ref} style={{ maxWidth: 1060, margin: '0 auto' }}>

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
            margin: '0 0 16px',
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
            margin: '0 0 48px',
          }}
        >
          {t('subheading')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
            marginBottom: 48,
          }}
        >
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.title}
              style={{
                background: B.cream,
                border: `1px solid ${B.divider}`,
                borderRadius: 14,
                padding: '24px',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
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
                  background: cred.accent === B.red ? B.redLight : 'rgba(23,45,93,0.06)',
                  border: `1px solid ${cred.accent === B.red ? B.redMid : 'rgba(23,45,93,0.12)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cred.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={cred.iconPath} />
                </svg>
              </div>

              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: B.textDeep,
                  margin: '0 0 8px',
                  lineHeight: 1.3,
                }}
              >
                {cred.title}
              </p>

              <span
                style={{
                  display: 'inline-block',
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: cred.accent,
                  background: cred.accent === B.red ? B.redLight : 'rgba(23,45,93,0.06)',
                  border: `1px solid ${cred.accent === B.red ? B.redMid : 'rgba(23,45,93,0.12)'}`,
                  borderRadius: 5,
                  padding: '3px 8px',
                  marginBottom: 14,
                }}
              >
                {cred.badge}
              </span>

              <p
                style={{
                  fontSize: 13.5,
                  color: B.textBody,
                  lineHeight: 1.65,
                  margin: '0 0 18px',
                }}
              >
                {cred.desc}
              </p>

              {cred.ctaExternal ? (
                <a
                  href={cred.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: cred.accent,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${cred.accent === B.red ? B.redMid : 'rgba(23,45,93,0.2)'}`,
                    paddingBottom: 1,
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  {cred.ctaLabel}
                </a>
              ) : (
                <Link
                  href={cred.ctaHref}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: cred.accent,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${B.redMid}`,
                    paddingBottom: 1,
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  {cred.ctaLabel}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href={`/contact?ctasrc=home_v2_trust_cta_bottom&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: B.amber,
              color: B.textDeep,
              fontWeight: 800,
              fontSize: 15,
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.18s ease, transform 0.18s ease',
              boxShadow: '0 4px 20px rgba(239,182,79,0.35)',
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
            {t('ctaBottom')}
          </Link>
        </div>

      </div>

      <style>{`
        .rb-trust-break { display: none; }
        @media (min-width: 600px) and (max-width: 1023px) {
          .rb-trust-break { display: block; }
        }
      `}</style>
    </section>
  );
}
