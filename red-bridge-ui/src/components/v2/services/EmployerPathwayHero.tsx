'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  navy: '#172d5d',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#18181b',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

export default function EmployerPathwayHero() {
  const locale = useLocale();
  const t = useTranslations('v2.services.employerPathwayHero');
  const BADGES = t.raw('badges') as string[];

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
          src="/images/home/office-meeting.jpg"
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, marginBottom: 14 }}>
          {t('eyebrow')}
        </p>

        <div style={{ width: 'fit-content', maxWidth: '100%' }}>
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.12,
              margin: '0 0 16px',
              letterSpacing: '-0.025em',
            }}
          >
            {t('heading')}{' '}
            <span className="rb-hero-em">
              <em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
            </span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            {t('subheading')}
          </p>
        </div>

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
          {t('cta')}
        </Link>

        {/* Policy review note */}
        <p
          style={{
            fontSize: 11.5,
            color: 'rgba(255,255,255,0.45)',
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          {t('reviewNote')} <strong style={{ color: 'rgba(255,255,255,0.6)' }}>{t('reviewDate')}</strong>{t('reviewSuffix')}{' '}
          <a
            href="https://immi.homeaffairs.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: B.amber, textDecoration: 'none' }}
          >
            {t('dohaLink')}
          </a>
        </p>
      </div>

      <style>{`
        .rb-hero-em { display: block; }
        @media (min-width: 768px) { .rb-hero-em { display: inline; } }
      `}</style>
    </section>
  );
}
