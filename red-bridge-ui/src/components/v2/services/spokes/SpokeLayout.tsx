'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217', navy: '#172d5d', bg: '#f4f4f5', cream: '#ffffff',
  amber: '#efb64f', amberDeep: '#d4a017', textDeep: '#18181b',
  textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7',
  green: '#2d6a4f', greenLight: '#eaf4ee', greenBorder: '#b8d4b8',
};

type Step = { num: string; label: string; detail: string };
type Req  = { label: string };
type Link_ = { label: string; href: string };

export default function SpokeLayout({
  ns,
  ctasrc,
  hubHref,
}: {
  ns: 'spokes.careerLaunch' | 'spokes.employerMatching' | 'spokes.directEntry';
  ctasrc: string;
  hubHref: string;
}) {
  const t = useTranslations(ns);
  const locale = useLocale();
  const steps       = t.raw('steps')    as Step[];
  const reqs        = t.raw('requirements') as Req[];
  const related     = t.raw('related')  as Link_[];

  return (
    <div style={{ fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>

      {/* Hero */}
      <section style={{ background: B.navy, padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <Link href={`/${locale}${hubHref}`} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-block', marginBottom: 24 }}>
            {t('backLink')}
          </Link>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, marginBottom: 14 }}>
            {t('eyebrow')}
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, margin: '0 0 20px', letterSpacing: '-0.025em' }}>
            {t('heading')}{' '}
            <em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, maxWidth: 640, margin: '0 0 36px' }}>
            {t('subheading')}
          </p>
          <Link
            href={`/contact?ctasrc=${ctasrc}_hero&locale=${locale}`}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 26px', background: B.amber, color: B.textDeep, fontWeight: 800, fontSize: 15, borderRadius: 9, textDecoration: 'none' }}
          >
            {t('cta')}
          </Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section style={{ background: B.bg, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, padding: '28px 32px', borderTop: `4px solid ${B.red}` }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, margin: '0 0 12px' }}>{t('problemLabel')}</p>
            <p style={{ fontSize: 15, color: B.textBody, lineHeight: 1.7, margin: 0 }}>{t('problemBody')}</p>
          </div>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, padding: '28px 32px', borderTop: `4px solid ${B.green}` }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.green, margin: '0 0 12px' }}>{t('solutionLabel')}</p>
            <p style={{ fontSize: 15, color: B.textBody, lineHeight: 1.7, margin: 0 }}>{t('solutionBody')}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: B.cream, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 32 }}>{t('stepsLabel')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '22px 24px' }}>
                <p style={{ fontSize: 11, fontWeight: 800, color: B.red, margin: '0 0 10px', letterSpacing: '0.06em' }}>{step.num}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: '0 0 8px', lineHeight: 1.3 }}>{step.label}</p>
                <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.6 }}>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Timeline */}
      <section style={{ background: B.bg, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, padding: '28px 32px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 20px' }}>{t('requirementsLabel')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {reqs.map((r) => (
                <div key={r.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={B.green} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p style={{ fontSize: 14, color: B.textBody, margin: 0, lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: B.navy, borderRadius: 16, padding: '28px 32px', color: '#fff' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>{t('timelineLabel')}</p>
              <p style={{ fontSize: 17, fontWeight: 700, color: B.amber, margin: 0, lineHeight: 1.4 }}>{t('timeline')}</p>
            </div>
            <div style={{ background: '#fdf7f0', border: `1px solid ${B.divider}`, borderRadius: 16, padding: '20px 24px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              <p style={{ fontSize: 13, color: B.textBody, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: B.textDeep }}>{t('honestNoteLabel')}</strong>{t('honestNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Spokes */}
      <section style={{ background: B.cream, padding: '56px 24px', borderTop: `1px solid ${B.divider}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 20 }}>{t('relatedLabel')}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {related.map((r) => (
              <Link
                key={r.href}
                href={`/${locale}${r.href}`}
                style={{ fontSize: 14, fontWeight: 600, color: B.navy, background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 8, padding: '10px 16px', textDecoration: 'none' }}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: B.red, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            {t('cta')}
          </h2>
          <Link
            href={`/contact?ctasrc=${ctasrc}_bottom&locale=${locale}`}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: B.amber, color: B.textDeep, fontWeight: 800, fontSize: 16, borderRadius: 10, textDecoration: 'none' }}
          >
            {t('cta')}
          </Link>
        </div>
      </section>

    </div>
  );
}
