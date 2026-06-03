'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f4f4f5', cream: '#ffffff', amber: '#efb64f', amberDeep: '#d4a017',
  textDeep: '#18181b', textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7',
  green: '#2d6a4f', greenLight: '#eaf4ee',
};

const CAREER_LAUNCH_HREF = 'https://sidtalentlink.com';

const SPOKE_HREFS: Record<string, string> = {
  under1: '/services/employer-pathway/career-launch-program',
  one3: '/services/employer-pathway/482-visa-employer-matching',
  three: '/services/employer-pathway/186-direct-entry-sponsorship',
};

type TabId = 'under1' | 'one3' | 'three';

type ContentEntry = {
  headline: string;
  subhead: string;
  intro: string;
  timeline: string;
  pathway: string;
  honestNote: string | null;
  ctaLabel: string;
  requirements: { label: string; detail: string }[];
  steps: { num: string; label: string; detail: string }[];
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={B.green} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
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
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function ThreeRoutes() {
  const locale = useLocale();
  const t = useTranslations('v2.services.threeRoutes');
  const TABS = t.raw('tabs') as { id: string; label: string; labelShort: string }[];
  const CONTENT_RAW = t.raw('content') as Record<TabId, ContentEntry & { showSiddeleyNote?: boolean; ctaHref?: string }>;

  const [active, setActive] = useState<TabId>('one3');
  const ref = useReveal();
  const content = CONTENT_RAW[active];
  const showSiddeleyNote = active === 'under1';
  const ctaHref = active === 'under1' ? CAREER_LAUNCH_HREF : undefined;

  return (
    <section style={{ background: B.bg, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>
            {t('eyebrow')}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, margin: 0 }}>{t('subheading')}</p>
        </div>

        <div style={{ display: 'flex', background: B.divider, borderRadius: 10, padding: 4, marginBottom: 32, gap: 4 }}>
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActive(tab.id as TabId)} style={{ flex: 1, padding: '10px 14px', borderRadius: 7, border: active === tab.id ? `1px solid ${B.divider}` : '1px solid transparent', background: active === tab.id ? B.cream : 'transparent', color: active === tab.id ? B.red : B.textMuted, fontWeight: active === tab.id ? 700 : 500, fontSize: 13.5, cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease', boxShadow: active === tab.id ? '0 1px 4px rgba(34,21,15,0.1)' : 'none' }}>
              <span className="rb-tab-full">{tab.label}</span>
              <span className="rb-tab-short" style={{ display: 'none' }}>{tab.labelShort}</span>
            </button>
          ))}
        </div>

        <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ background: B.red, padding: '28px 32px', color: '#fff' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 6px' }}>{content.subhead}</p>
            <h3 style={{ fontSize: 'clamp(18px, 2.8vw, 24px)', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{content.headline}</h3>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: '0 0 16px', maxWidth: 560 }}>{content.intro}</p>
            <Link
              href={`/${locale}${SPOKE_HREFS[active]}`}
              style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.35)' }}
            >
              {t('guideLabel')}
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
            <div style={{ padding: '28px 32px', borderRight: `1px solid ${B.divider}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 16 }}>{t('requirementsLabel')}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {content.requirements.map((req) => (
                  <div key={req.label} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: B.textDeep, margin: '0 0 2px' }}>{req.label}</p>
                      <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0 }}>{req.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '28px 32px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 16 }}>{t('approachLabel')}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {content.steps.map((step, i) => (
                  <div key={step.num} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: B.red, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: B.textDeep, margin: '0 0 2px' }}>{step.label}</p>
                      <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.5 }}>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${B.divider}`, padding: '18px 32px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', background: '#f4f4f5' }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 2px' }}>{t('timelineLabel')}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: 0 }}>{content.timeline}</p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 2px' }}>{t('pathwayLabel')}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.red, margin: 0 }}>{content.pathway}</p>
              </div>
            </div>
            <a
              href={ctaHref ?? `/contact?ctasrc=employer_v2_three_routes_${active}_cta&locale=${locale}`}
              {...(ctaHref ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', background: B.red, color: '#fff', fontWeight: 700, fontSize: 13.5, borderRadius: 8, textDecoration: 'none' }}
            >
              {content.ctaLabel}
            </a>
          </div>

          {content.honestNote && (
            <div style={{ borderTop: `1px solid ${B.divider}`, padding: '16px 32px', display: 'flex', gap: 12, alignItems: 'flex-start', background: '#fdf7f0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              <p style={{ fontSize: 13, color: B.textBody, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: B.textDeep }}>{t('honestNoteLabel')}</strong>{content.honestNote}
              </p>
            </div>
          )}

          {showSiddeleyNote && (
            <div style={{ borderTop: `1px solid ${B.divider}`, padding: '16px 32px', display: 'flex', gap: 14, alignItems: 'flex-start', background: B.cream, borderLeft: `4px solid ${B.navy}` }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
              <p style={{ fontSize: 12.5, color: B.textMuted, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: B.navy }}>{t('siddeleylinkLabel')}</strong>
                {t('siddeleyNote')}{' '}
                <Link href="https://siddeleygroup-v.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: B.navy, fontWeight: 600 }}>{t('siddeleyLinkText')}</Link>
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .rb-tab-full { display: none !important; }
          .rb-tab-short { display: inline !important; }
        }
      `}</style>
    </section>
  );
}
