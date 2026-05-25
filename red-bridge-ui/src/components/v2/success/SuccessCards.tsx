'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
};

const VISA_STYLES: Record<string, { bg: string; border: string; text: string; label: string }> = {
  '482':           { bg: '#fdf0f0', border: '#f5d5d6', text: B.red,     label: '482 TSS' },
  '482 → 186':    { bg: '#fdf0f0', border: '#f5d5d6', text: B.red,     label: '482 → 186' },
  '486 → 482':    { bg: '#fdf0f0', border: '#f5d5d6', text: B.red,     label: '485 → 482' },
  '189':           { bg: '#eef1f8', border: '#c8d3e8', text: B.navy,    label: '189 PR' },
  '190':           { bg: '#eef1f8', border: '#c8d3e8', text: B.navy,    label: '190 State' },
  '491':           { bg: '#eef1f8', border: '#c8d3e8', text: B.navy,    label: '491 Regional' },
  'Career Launch': { bg: '#fdf7ee', border: '#f0d9a0', text: '#7a5000', label: 'Career Launch' },
};

const STATUS_STYLES: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'Approved':    { bg: '#eaf4ee', border: '#b8d4b8', text: '#2d6a4f', dot: '#2d6a4f' },
  'In Progress': { bg: '#fdf7ee', border: '#f0d9a0', text: '#7a5000', dot: B.amber },
  'Ongoing':     { bg: '#eef1f8', border: '#c8d3e8', text: B.navy,    dot: B.navy },
};

const CASES = [
  { category: 'Employer Sponsorship', headline: 'Accountant secures 482 sponsorship within 4 months', body: 'After two years on a 485 with no success applying independently, RedBridge matched her to a 482-eligible accounting firm. With CAANZ already complete, visa grant took under 4 months.', visa: '482', timeline: '4 months', assessment: 'CAANZ', status: 'Approved' },
  { category: 'Employer Sponsorship', headline: 'Marketing manager on employer-sponsored pathway to 186 PR', body: 'Client had an existing employer but no formal sponsorship. RedBridge lodged the SBS and 482 nomination concurrently. Now 18 months into a 482 and on track for 186 ENS transition.', visa: '482 → 186', timeline: 'Ongoing', assessment: 'AMI', status: 'In Progress' },
  { category: 'Skilled Independent', headline: 'IT engineer achieves permanent residency via 189 in 7 months', body: 'With a strong score and completed ACS assessment, the client\'s barrier was EOI strategy. RedBridge provided a points gap analysis — an invitation arrived within 7 months.', visa: '189', timeline: '~7 months', assessment: 'ACS', status: 'Approved' },
  { category: 'Career Launch', headline: 'Engineering graduate builds ANZSCO-aligned experience', body: 'Fresh out of university with no local work history, this client joined the Career Launch Program and accumulated 400+ hours of ANZSCO-aligned project work recognised by Engineers Australia over 12 months.', visa: 'Career Launch', timeline: '12 months', assessment: 'Engineers Australia', status: 'In Progress' },
  { category: 'Employer Sponsorship', headline: 'ICT specialist transitions from 485 to employer-sponsored 482', body: 'With 8 months left on his 485, RedBridge matched him with a Melbourne tech employer and lodged the nomination with a Bridging Visa A in place. The 482 was granted before the 485 expired.', visa: '486 → 482', timeline: '5 months', assessment: 'ACS', status: 'Approved' },
  { category: 'Skilled Independent', headline: 'International student uses marketing degree to reach 190 nomination', body: 'Consulting RedBridge while completing her marketing master\'s, this client was guided onto Victoria\'s 190 nomination pathway. A 24-month AMI-aligned career plan was designed and the invitation arrived on schedule.', visa: '190', timeline: '24 months', assessment: 'AMI', status: 'Approved' },
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

export default function SuccessCards() {
  const refs = useStaggerReveal();

  return (
    <section style={{ background: B.bg, padding: '0 24px 88px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 40 }}>
          {CASES.map((c, i) => {
            const vs = VISA_STYLES[c.visa] ?? VISA_STYLES['482'];
            const ss = STATUS_STYLES[c.status];
            return (
              <div
                key={c.headline}
                ref={(el) => { refs.current[i] = el; }}
                style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s` }}
              >
                <div style={{ height: 4, background: vs.text, opacity: 0.7 }} aria-hidden="true" />
                <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted }}>{c.category}</span>
                    <span style={{ color: B.divider, fontSize: 12 }}>·</span>
                    <span style={{ fontSize: 10, fontWeight: 700, background: vs.bg, border: `1px solid ${vs.border}`, color: vs.text, borderRadius: 4, padding: '2px 7px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{vs.label}</span>
                  </div>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, color: B.textDeep, lineHeight: 1.35, margin: 0 }}>{c.headline}</h3>
                  <p style={{ fontSize: 13, color: B.textMuted, lineHeight: 1.65, margin: 0, flex: 1 }}>{c.body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 12, borderTop: `1px solid ${B.divider}`, alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={B.textMuted} strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span style={{ fontSize: 12, color: B.textMuted }}>{c.timeline}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={B.textMuted} strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <span style={{ fontSize: 12, color: B.textMuted }}>{c.assessment}</span>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, background: ss.bg, border: `1px solid ${ss.border}`, color: ss.text, borderRadius: 5, padding: '3px 8px' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: ss.dot, display: 'inline-block' }} aria-hidden="true" />
                        {c.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: 12, color: B.textMuted, textAlign: 'center', lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>
          All cases are representative of real client outcomes. Client identities are presented using initials and occupation only to protect privacy. All visa results and project completions are verified against RedBridge internal records.
        </p>
      </div>
    </section>
  );
}
