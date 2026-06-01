'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', navy: '#172d5d', bg: '#f4f4f5',
  cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b', textBody: '#27272a',
  textMuted: '#71717a', divider: '#e4e4e7',
};

const CREDENTIAL_META = [
  { link: 'https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=4a87bac4-9b52-e411-9402-005056ab0eca' },
  { link: 'https://abr.business.gov.au/ABN/View?abn=97693501147' },
  { link: 'https://maps.google.com/?q=Level+9+Tower+3+18-38+Siddeley+Street+Docklands+VIC+3008' },
];

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

export default function AboutLegalPartner() {
  const ref = useReveal();
  const t = useTranslations('v2.about.legalPartner');

  const CREDENTIALS = (t.raw('credentials') as { label: string; value: string; note: string; linkLabel: string }[]).map((c, i) => ({
    ...c,
    link: CREDENTIAL_META[i].link,
  }));
  const SERVICES_PROVIDED = t.raw('services') as string[];

  return (
    <section style={{ background: B.bg, borderTop: `1px solid ${B.divider}`, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            {t('subheading')}
          </p>
        </div>

        <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 20, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div style={{ padding: '36px 36px 32px', borderRight: `1px solid ${B.divider}` }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#eaf4ee', border: '1px solid #b8d4b8', borderRadius: 7, padding: '6px 12px', marginBottom: 20 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#2d6a4f' }}>{t('maraTag')}</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: B.textDeep, margin: '0 0 4px', letterSpacing: '-0.02em' }}>{t('firmName')}</h3>
            <p style={{ fontSize: 13.5, color: B.textMuted, margin: '0 0 24px', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {t('firmDesc')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CREDENTIALS.map((c) => (
                <div key={c.label} style={{ background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 10, padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted }}>{c.label}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: B.navy }}>{c.value}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontSize: 12, color: B.textMuted }}>{c.note}</span>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, color: B.red, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>{c.linkLabel}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '36px 36px 32px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 16 }}>{t('servicesLabel')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {SERVICES_PROVIDED.map((service) => (
                <div key={service} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: B.textBody, lineHeight: 1.55 }}>{service}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#eef1f8', border: '1px solid #c8d3e8', borderRadius: 10, padding: '14px 16px', marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: B.navy, margin: 0, lineHeight: 1.6 }}>
                {t('coLocationNote')}
              </p>
            </div>
            <a
              href="https://www.insightidea.com.au/en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 600, color: B.navy, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = B.red)}
              onMouseLeave={(e) => (e.currentTarget.style.color = B.navy)}
            >
              {t('visitWebsite')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
            </a>
          </div>
        </div>

        <div style={{ marginTop: 20, padding: '14px 20px', background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={B.textMuted} strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.6 }}>
            {t('groupNote').split(t('siddeleylinkLabel')).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <a href="https://abr.business.gov.au/ABN/View?abn=97693501147" target="_blank" rel="noopener noreferrer" style={{ color: B.navy, fontWeight: 600, textDecoration: 'none' }}>{t('siddeleylinkLabel')}</a>
                </span>
              ) : <span key={i}>{part}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
