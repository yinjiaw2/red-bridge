'use client';

import { useEffect, useRef } from 'react';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
};

const VALUES = [
  { iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', label: 'Honesty first', body: 'We tell clients what they don\'t want to hear when the alternative is wasting their time and money. A free consultation that ends with "you don\'t qualify yet" is still a useful consultation.', accent: B.red, bg: B.redLight, border: B.redMid },
  { iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Verification, not promises', body: 'Every employer we introduce is confirmed as an active sponsor before any client meets them. We don\'t share "potential" leads — every introduction is a verified opportunity.', accent: B.navy, bg: '#eef1f8', border: '#c8d3e8' },
  { iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Named responsibility', body: 'Every client is assigned one named consultant. There are no handoffs, no "your case manager has changed", no restarting from scratch when someone leaves the team.', accent: '#2d6a4f', bg: '#eaf4ee', border: '#b8d4b8' },
  { iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', label: 'Legal compliance, always', body: 'Migration advice without MARA registration is illegal in Australia. Every piece of migration-related advice at RedBridge is reviewed or delivered by Insight Idea — licensed agents, same floor.', accent: '#7a5000', bg: '#fdf7ee', border: '#f0d9a0' },
  { iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', label: 'Milestone-based fees', body: 'We don\'t take large upfront payments. Fees are structured around delivery: employer match, visa lodgement, visa grant. You\'re paying for outcomes, not activity.', accent: B.red, bg: B.redLight, border: B.redMid },
  { iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', label: 'Genuine documentation', body: 'Every work record, project portfolio, and skills assessment submission we help prepare is real, traceable, and yours. We do not fabricate, inflate, or backdate employment histories.', accent: B.navy, bg: '#eef1f8', border: '#c8d3e8' },
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

export default function AboutValues() {
  const cardRefs = useStaggerReveal();
  const headerRef = useReveal();

  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>How We Work</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Our Principles —{' '}<em style={{ fontStyle: 'italic', color: B.red }}>In Practice</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
            The things we commit to because they matter — not because they make good marketing copy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))', gap: 16 }}>
          {VALUES.map((v, i) => (
            <div
              key={v.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 14, opacity: 0, transform: 'translateY(22px)', transition: `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s, box-shadow 0.2s ease, border-color 0.2s ease` }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(34,21,15,0.09)'; e.currentTarget.style.borderColor = v.border; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = B.divider; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: v.bg, border: `1px solid ${v.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={v.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={v.iconPath} /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: B.textDeep, margin: '0 0 7px', lineHeight: 1.3 }}>{v.label}</h3>
                <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65 }}>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
