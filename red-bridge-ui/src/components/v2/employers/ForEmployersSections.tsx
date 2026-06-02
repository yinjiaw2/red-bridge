'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217', navy: '#172d5d', bg: '#f4f4f5', cream: '#ffffff',
  amber: '#efb64f', amberDeep: '#d4a017', textDeep: '#18181b',
  textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7',
  redLight: '#fdf0f0',
};

const PAIN_POINT_ICON_PATHS = [
  'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
  'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
];

export function ForEmployersHero() {
  const t = useTranslations('v2.employers.hero');
  const locale = useLocale();
  const STATS = t.raw('stats') as { num: string; label: string }[];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '48vh', display: 'flex', alignItems: 'flex-end', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: B.navy }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(177,18,23,0.15) 0%, transparent 60%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '64px 24px 52px', width: '100%' }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, display: 'block', marginBottom: 14 }}>
          {t('eyebrow')}
        </span>
        <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, margin: '0 0 16px', letterSpacing: '-0.025em', maxWidth: 560 }}>
          {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 540, margin: '0 0 32px' }}>
          {t('subheading')}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '12px 18px', backdropFilter: 'blur(4px)' }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 2px', letterSpacing: '-0.03em' }}>{s.num}</p>
              <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#employer-form" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 24px', background: B.amber, color: B.textDeep, fontWeight: 800, fontSize: 14.5, borderRadius: 9, textDecoration: 'none', transition: 'background 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)} onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}>
            {t('ctaEnquiry')}
          </a>
          <a href="tel:0399617301" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '13px 20px', background: 'transparent', color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: 14, borderRadius: 9, border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}>
            {t('ctaPhone')}
          </a>
        </div>
      </div>
    </section>
  );
}

export function HiringPainPoints() {
  const t = useTranslations('v2.employers.hiringPainPoints');
  const locale = useLocale();
  const PAIN_POINTS = (t.raw('painPoints') as { title: string; detail: string }[]).map((p, i) => ({
    ...p,
    icon: PAIN_POINT_ICON_PATHS[i],
  }));

  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: 0 }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {PAIN_POINTS.map((p) => (
            <div key={p.title} style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '24px 22px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: B.redLight, border: `1px solid #f5d5d6`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d={p.icon} /></svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: B.textDeep, margin: '0 0 8px', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65 }}>{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ThreePhases() {
  const t = useTranslations('v2.employers.threePhases');
  const locale = useLocale();
  const PHASES = t.raw('phases') as { num: string; title: string; who: string; items: string[] }[];

  return (
    <section style={{ background: B.navy, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{t('subheading')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {PHASES.map((phase, i) => (
            <div key={phase.num} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: i === 1 ? B.red : 'rgba(255,255,255,0.07)', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: i === 1 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: 4 }}>{t('phasePrefix')}{phase.num}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.3 }}>{phase.title}</h3>
                <span style={{ fontSize: 10.5, fontWeight: 600, color: i === 1 ? 'rgba(255,255,255,0.6)' : B.amber, letterSpacing: '0.04em' }}>{phase.who}</span>
              </div>
              <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {phase.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 28 }}>
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" target="_blank" rel="noopener noreferrer" style={{ color: B.amber, textDecoration: 'none' }}>
            {t('dohaLink')}
          </a>
        </p>
      </div>
    </section>
  );
}

export function FeesTable() {
  const t = useTranslations('v2.employers.feesTable');
  const FEES = t.raw('fees') as { label: string; note: string; amount: string; highlight?: boolean }[];

  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{t('heading')}</h2>
          <p style={{ fontSize: 14, color: B.textMuted, margin: '0 auto', lineHeight: 1.6, maxWidth: 480 }}>
            {t('subheading')}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FEES.map((fee) => (
            <div key={fee.label} style={{ background: fee.highlight ? '#fdf7ee' : B.bg, border: `1px solid ${fee.highlight ? '#f0d9a0' : B.divider}`, borderRadius: 10, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: '0 0 3px', lineHeight: 1.3 }}>{fee.label}</p>
                <p style={{ fontSize: 12, color: B.textMuted, margin: 0 }}>{fee.note}</p>
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: fee.highlight ? '#7a5000' : B.navy, whiteSpace: 'nowrap', flexShrink: 0 }}>{fee.amount}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, padding: '16px 20px', background: B.redLight, border: `1px solid #f5d5d6`, borderRadius: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <p style={{ fontSize: 13, color: B.textBody, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: B.red }}>{t('byLawLabel')}</strong>{t('byLawNote')}
          </p>
        </div>
      </div>
    </section>
  );
}

export function DivisionRoles() {
  const t = useTranslations('v2.employers.divisionRoles');
  const locale = useLocale();
  const REDBRIDGE_ITEMS = t.raw('redbridgeItems') as string[];
  const INSIGHT_ITEMS = t.raw('insightItems') as string[];

  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 14.5, color: B.textMuted, margin: '0 auto', maxWidth: 480 }}>
            {t('subheading')}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: B.red, padding: '22px 26px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 4px' }}>{t('redbridgeLabel')}</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>{t('redbridgeName')}</h3>
            </div>
            <div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {REDBRIDGE_ITEMS.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: B.textBody, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: B.navy, padding: '22px 26px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 4px' }}>{t('insightLabel')}</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>{t('insightName')}</h3>
            </div>
            <div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {INSIGHT_ITEMS.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: B.textBody, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
