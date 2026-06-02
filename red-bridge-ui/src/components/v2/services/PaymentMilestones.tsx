'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', navy: '#172d5d', bg: '#f4f4f5',
  cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b', textBody: '#27272a',
  textMuted: '#71717a', divider: '#e4e4e7',
};

const PHASE_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'Start':     { bg: '#f4f4f5', border: '#e4e4e7', text: '#71717a', dot: '#71717a' },
  'Placement': { bg: '#fdf7ee', border: '#f0d9a0', text: '#7a5000', dot: '#efb64f' },
  '482':       { bg: '#fdf0f0', border: '#f5d5d6', text: '#b11217', dot: '#b11217' },
  '186':       { bg: '#eef1f8', border: '#c8d3e8', text: '#172d5d', dot: '#172d5d' },
  '186 ✓':    { bg: '#eaf4ee', border: '#b8d4b8', text: '#2d6a4f', dot: '#2d6a4f' },
};

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

export default function PaymentMilestones() {
  const t = useTranslations('v2.services.paymentMilestones');
  const locale = useLocale();
  const MILESTONES = t.raw('milestones') as { num: number; label: string; note: string; phase: string }[];
  const ref = useReveal();

  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, borderBottom: `1px solid ${B.divider}`, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            {t('subheading')}
          </p>
        </div>

        <div className="rb-milestone-grid">
          {MILESTONES.map((m, i) => {
            const pc = PHASE_COLORS[m.phase];
            const isLast = i === MILESTONES.length - 1;
            return (
              <div key={m.num} className="rb-milestone-item" style={{ position: 'relative', flex: 1, minWidth: 120 }}>
                {!isLast && (
                  <div className="rb-connector" aria-hidden="true" style={{ position: 'absolute', top: 20, left: '50%', width: '100%', height: 2, background: B.divider, zIndex: 0 }} />
                )}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: isLast ? '#2d6a4f' : pc.dot, border: `2px solid ${isLast ? '#2d6a4f' : pc.dot}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#fff', fontSize: 13, fontWeight: 800, boxShadow: `0 0 0 4px ${isLast ? '#eaf4ee' : pc.bg}` }}>
                    {isLast ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                    ) : m.num}
                  </div>
                  <span style={{ display: 'inline-block', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: pc.bg, border: `1px solid ${pc.border}`, color: pc.text, borderRadius: 4, padding: '2px 7px', marginBottom: 7 }}>
                    {m.phase === '186 ✓' ? '186 PR' : m.phase}
                  </span>
                  <p style={{ fontSize: 13, fontWeight: 700, color: B.textDeep, margin: '0 0 5px', lineHeight: 1.3 }}>{m.label}</p>
                  <p style={{ fontSize: 11.5, color: B.textMuted, margin: 0, lineHeight: 1.5 }}>{m.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, padding: '16px 24px', background: B.redLight, border: `1px solid #f5d5d6`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <p style={{ fontSize: 13, color: B.textBody, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: B.red }}>{t('feeMilestonesNote')}</strong>{t('feeMilestonesSuffix')}
          </p>
        </div>
      </div>

      <style>{`
        .rb-milestone-grid { display: flex; gap: 0; align-items: flex-start; }
        .rb-connector { display: block; }
        @media (max-width: 700px) {
          .rb-milestone-grid { flex-direction: column; gap: 28px; }
          .rb-connector { display: none !important; }
          .rb-milestone-item { display: flex; gap: 16px; align-items: flex-start; text-align: left !important; flex: none !important; width: 100%; }
          .rb-milestone-item > div:last-child { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
