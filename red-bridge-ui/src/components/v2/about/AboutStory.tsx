'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', navy: '#172d5d', bg: '#f4f4f5',
  cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b', textBody: '#27272a',
  textMuted: '#71717a', divider: '#e4e4e7',
};

type StatItem = { value: number | null; display?: string; suffix: string; label: string; subLabel: string };

function useCountUp(target: number | null, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatItemCard({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.value, active);
  return (
    <div style={{ padding: '20px 0', borderBottom: `1px solid ${B.divider}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 36, fontWeight: 800, color: B.red, letterSpacing: '-0.04em', lineHeight: 1 }}>
          {stat.value !== null ? `${active ? count : 0}${stat.suffix}` : stat.display}
        </span>
      </div>
      <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: '0 0 3px' }}>{stat.label}</p>
      <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.5 }}>{stat.subLabel}</p>
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function AboutStory() {
  const t = useTranslations('v2.about.story');
  const STATS = t.raw('stats') as StatItem[];

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  const leftRef = useReveal();

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: B.bg, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
        <div ref={leftRef}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 16 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 20px', lineHeight: 1.15 }}>
            {t('heading')}{' '}<em style={{ fontStyle: 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 15, color: B.textBody, lineHeight: 1.7, margin: 0 }}>
              {t('para1')}
            </p>
            <p style={{ fontSize: 15, color: B.textBody, lineHeight: 1.7, margin: 0 }}>
              {t('para2')}
            </p>
            <p style={{ fontSize: 15, color: B.textBody, lineHeight: 1.7, margin: 0 }}>
              {t('para3').split(t('insightIdeaLinkLabel')).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href="https://www.insightidea.com.au/en" target="_blank" rel="noopener noreferrer" style={{ color: B.red, textDecoration: 'none', fontWeight: 600 }}>{t('insightIdeaLinkLabel')}</a>
                  </span>
                ) : <span key={i}>{part}</span>
              )}
            </p>
            <div style={{ background: '#fdf7f0', border: `1px solid #f0d9a0`, borderLeft: `4px solid ${B.amber}`, borderRadius: '0 10px 10px 0', padding: '16px 18px', marginTop: 4 }}>
              <p style={{ fontSize: 13.5, color: B.textBody, margin: 0, lineHeight: 1.65 }}>
                <strong style={{ color: B.textDeep }}>{t('honestNoteLabel')}</strong>
                {t('honestNote')}
              </p>
            </div>
          </div>
        </div>

        <div ref={statsRef}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 4 }}>{t('statsLabel')}</p>
          <div style={{ borderTop: `1px solid ${B.divider}` }}>
            {STATS.map((stat) => (
              <StatItemCard key={stat.label} stat={stat} active={statsActive} />
            ))}
          </div>
          <div style={{ marginTop: 24, padding: '16px 18px', background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 10 }}>
            <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.6 }}>
              {t('companyNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
