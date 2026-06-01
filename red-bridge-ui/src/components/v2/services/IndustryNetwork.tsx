'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f4f4f5', cream: '#ffffff', amber: '#efb64f', amberDeep: '#d4a017',
  textDeep: '#18181b', textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7',
};

const SECTOR_ICON_PATHS = [
  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  'M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2M9 7h6m0 0l2-2m-2 2l2 2',
  'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
];

const SECTOR_COUNTS = [12, 8, 6, 5];

const VERIFY_ICON_PATHS = [
  'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
];

function useStaggerReveal() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { (entry.target as HTMLElement).style.opacity = '1'; (entry.target as HTMLElement).style.transform = 'translateY(0)'; obs.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    refs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return refs;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function IndustryNetwork() {
  const locale = useLocale();
  const t = useTranslations('v2.services.industryNetwork');

  const SECTORS = (t.raw('sectors') as { label: string; assessingBody: string; highlight: string[] }[]).map((s, i) => ({
    ...s,
    iconPath: SECTOR_ICON_PATHS[i],
    count: SECTOR_COUNTS[i],
  }));

  const VERIFY_STEPS = (t.raw('verifySteps') as { label: string; detail: string }[]).map((s, i) => ({
    ...s,
    icon: VERIFY_ICON_PATHS[i],
  }));

  const cardRefs = useStaggerReveal();
  const headerRef = useReveal();
  const verifyRef = useReveal();

  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div ref={headerRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 8px' }}>
              {t('heading')}{' '}<em style={{ fontStyle: 'italic', color: B.red }}>{t('headingEm')}</em>
            </h2>
            <p style={{ fontSize: 14.5, color: B.textMuted, margin: 0, maxWidth: 440, lineHeight: 1.6 }}>{t('subheading')}</p>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: B.redLight, border: `1px solid ${B.redMid}`, borderRadius: 8, padding: '10px 16px', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: B.red }}>{t('verifiedBadge')}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, marginBottom: 44 }}>
          {SECTORS.map((sector, i) => (
            <div key={sector.label} ref={(el) => { cardRefs.current[i] = el; }} style={{ background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14, opacity: 0, transform: 'translateY(22px)', transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: B.redLight, border: `1px solid ${B.redMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={sector.iconPath} /></svg>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: B.textDeep, letterSpacing: '-0.04em', lineHeight: 1 }}>{sector.count}</span>
                  <span style={{ fontSize: 10, color: B.textMuted, display: 'block', lineHeight: 1.3 }}>{t('employersUnit')}</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, color: B.textDeep, margin: '0 0 10px', lineHeight: 1.3 }}>{sector.label}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {sector.highlight.map((occ) => (
                    <li key={occ} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: B.textMuted, lineHeight: 1.4 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: B.red, flexShrink: 0, display: 'inline-block' }} aria-hidden="true" />{occ}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', color: B.navy, background: '#eef1f8', border: '1px solid #c8d3e8', borderRadius: 5, padding: '3px 8px', display: 'inline-block' }}>
                  {t('skillsAssessmentLabel')}{sector.assessingBody}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div ref={verifyRef} style={{ background: B.navy, borderRadius: 16, padding: '32px 32px 28px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, margin: '0 0 20px' }}>{t('verifyHeading')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
            {VERIFY_STEPS.map((step) => (
              <div key={step.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d={step.icon} /></svg>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 3px', lineHeight: 1.3 }}>{step.label}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href={`/contact?ctasrc=employer_v2_industry_network_cta&locale=${locale}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: B.red, color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 9, textDecoration: 'none' }}>
            {t('cta')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
