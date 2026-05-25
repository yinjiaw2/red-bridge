'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
  green: '#2d6a4f', greenLight: '#eaf4ee', greenBorder: '#b8d4b8',
};

const WE_DO = [
  { title: 'Verify every employer before presenting them', detail: 'Sponsorship approval status, genuine vacancy, and TSMIT salary compliance — all checked before any client introduction.' },
  { title: 'Give honest eligibility assessments', detail: "At the free consultation, including telling you clearly if you don't yet qualify for a 482 application." },
  { title: 'Work with a MARA-registered legal partner', detail: 'Insight Idea (MARN: 1467870) is based at the same Docklands address. No outsourced handoffs, no information gaps.' },
  { title: 'Structure fees across milestones', detail: 'You pay as outcomes are delivered — not as a single upfront sum before work has begun.' },
  { title: 'Plan your 186 PR from day one', detail: 'We map your 186 ENS transition from the moment your 482 is granted — never as a last-minute scramble.' },
];

const WE_DONT = [
  { title: 'Send unverified job lists', detail: 'Every employer introduction is personal and specific to your profile — not a spreadsheet of possibilities.' },
  { title: 'Guarantee visa outcomes', detail: 'No agency legally can. If one tells you otherwise, that is a red flag worth taking seriously.' },
  { title: "Take your money if you don't qualify", detail: "If your free assessment reveals the pathway isn't achievable, we say so before any fees are discussed." },
  { title: 'Fabricate work experience', detail: 'False histories fail and can create serious legal consequences. Every record we produce is genuine and traceable.' },
];

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

export default function WhatWeDoSection() {
  const ref = useReveal();

  return (
    <section style={{ background: B.bg, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>Transparency</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: 0 }}>
            What RedBridge Does —{' '}<em style={{ fontStyle: 'italic', color: B.red }}>And Doesn&apos;t</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 28 }}>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: B.green, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0 }}>What we do</p>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {WE_DO.map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: B.greenLight, border: `1px solid ${B.greenBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={B.green} strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 700, color: B.textDeep, margin: '0 0 3px', lineHeight: 1.3 }}>{item.title}</p>
                    <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.55 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: '#4a1b0c', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0 }}>What we don&apos;t do</p>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {WE_DONT.map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: B.redLight, border: `1px solid ${B.redMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 700, color: B.textDeep, margin: '0 0 3px', lineHeight: 1.3 }}>{item.title}</p>
                    <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, lineHeight: 1.55 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#eef1f8', border: `1px solid #c8d3e8`, borderRadius: 10, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <p style={{ fontSize: 13, color: B.navy, margin: 0, lineHeight: 1.6 }}>
            <strong>Legal partner:</strong> Migration advice and visa lodgement are handled exclusively by{' '}
            <Link href="https://www.insightidea.com.au/en" target="_blank" rel="noopener noreferrer" style={{ color: B.navy, fontWeight: 700 }}>Insight Idea</Link>
            , RedBridge&apos;s licensed legal partner (MARN: 1467870).
          </p>
        </div>
      </div>
    </section>
  );
}
