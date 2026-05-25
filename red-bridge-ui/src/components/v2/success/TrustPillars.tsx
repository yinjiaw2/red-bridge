'use client';

import { useEffect, useRef } from 'react';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de', badgeBg: '#ead6bf',
};

const PILLARS = [
  { iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Employer verification before introduction', detail: 'Every employer in our network is confirmed as an approved sponsor with DOHA before any candidate is introduced. There are no "potential" sponsors on our list.', accent: B.red, accentLight: B.redLight, accentBorder: B.redMid },
  { iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', title: 'Migration law on every case', detail: 'Insight Idea (MARN 1467870) is co-located at the same address. Your case is reviewed by a licensed migration agent at every stage — not managed remotely or outsourced.', accent: B.navy, accentLight: '#eef1f8', accentBorder: '#c8d3e8' },
  { iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Named consultant, not a case number', detail: "You're assigned one consultant who manages your entire pathway. No handoffs to junior staff mid-process, no account managers rotating out after your first payment.", accent: '#2d6a4f', accentLight: '#eaf4ee', accentBorder: '#b8d4b8' },
  { iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', title: 'Fees tied to milestones', detail: "You don't pay lump sums upfront and hope for the best. Payment gates are structured around outcomes: employer match, visa lodgement, visa grant.", accent: '#7a5000', accentLight: '#fdf7ee', accentBorder: '#f0d9a0' },
  { iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', title: 'Honest "no" before a costly mistake', detail: "If your free consultation reveals you don't qualify, we say so clearly. No reframing, no selling you an inferior product, no deferred payment for work that won't succeed.", accent: B.red, accentLight: B.redLight, accentBorder: B.redMid },
  { iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Documented, verifiable timelines', detail: "Every case summary shows real lodgement and grant timelines. We don't cherry-pick exceptional outliers — the range shown is representative of standard processing.", accent: B.navy, accentLight: '#eef1f8', accentBorder: '#c8d3e8' },
];

function useStaggerReveal() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
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

export default function TrustPillars() {
  const cardRefs = useStaggerReveal();
  const headerRef = useReveal();

  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, borderBottom: `1px solid ${B.divider}`, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>Why Our Outcomes Are Real</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.2 }}>
            The Difference Between{' '}<em style={{ fontStyle: 'italic', color: B.red }}>a Case and a Claim</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>Anyone can publish outcomes. Here&apos;s what makes ours verifiable.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '24px 22px', display: 'flex', gap: 16, alignItems: 'flex-start', opacity: 0, transform: 'translateY(22px)', transition: `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s, box-shadow 0.2s ease`, cursor: 'default' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(34,21,15,0.09)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: pillar.accentLight, border: `1px solid ${pillar.accentBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={pillar.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={pillar.iconPath} /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, color: B.textDeep, margin: '0 0 6px', lineHeight: 1.3 }}>{pillar.title}</h3>
                <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65 }}>{pillar.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
