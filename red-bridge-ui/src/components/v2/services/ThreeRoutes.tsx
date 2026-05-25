'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', amberDeep: '#d4a017',
  textDeep: '#22150f', textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
  green: '#2d6a4f', greenLight: '#eaf4ee',
};

const TABS = [
  { id: 'under1', label: 'Under 1 Year Exp', labelShort: '< 1 Year' },
  { id: 'one3',   label: '1–3 Years (482)',   labelShort: '1–3 Years' },
  { id: 'three',  label: '3+ Years (186 DE)',  labelShort: '3+ Years' },
];

type TabId = 'under1' | 'one3' | 'three';

const CONTENT: Record<TabId, {
  headline: string; subhead: string; intro: string;
  requirements: { label: string; detail: string }[];
  steps: { num: string; label: string; detail: string }[];
  timeline: string; pathway: string; honestNote: string | null;
  showSiddeleyNote: boolean; ctaLabel: string;
}> = {
  under1: {
    headline: "You're 1 Year Away From 482 Eligibility",
    subhead: 'Foundation Stage — Career Launch First',
    intro: "You don't qualify for a 482 visa yet, and any agency that suggests otherwise is misleading you. The good news: one year of genuine, verifiable Australian work experience changes everything.",
    requirements: [
      { label: '1 year paid full-time experience', detail: 'In an occupation on the MLTSSL or STSOL' },
      { label: 'Verifiable employment records', detail: 'Payslips, contract, reference letter — all documented' },
      { label: 'Employer willing to sponsor', detail: 'RedBridge connects you once experience is in place' },
    ],
    steps: [
      { num: '01', label: 'Enrol in Career Launch', detail: 'Gain 12 months of paid, structured work with our partner employers' },
      { num: '02', label: 'Skills assessment', detail: 'ACS (ICT) or AMI (Marketing) — your consultant confirms if required for your occupation' },
      { num: '03', label: 'Match to 482 sponsor', detail: 'We transition you directly from Career Launch into employer sponsorship' },
    ],
    timeline: '12–18 months to 482 readiness',
    pathway: 'Career Launch → 482 → 186',
    honestNote: "This is a longer path, but it's the right one. We would rather tell you this now and build your case properly than take your money for a visa you won't receive.",
    showSiddeleyNote: true,
    ctaLabel: 'Ask about Career Launch',
  },
  one3: {
    headline: 'You Qualify for a 482 Employer Sponsorship',
    subhead: '1–3 Years Experience — Direct 482 Pathway',
    intro: 'With 1–3 years of relevant experience and the right occupation, you are eligible for a 482 TSS visa via employer sponsorship. RedBridge will match you to a verified employer and manage the pathway to 186 PR.',
    requirements: [
      { label: 'Minimum 1 year full-time experience', detail: 'In your nominated ANZSCO occupation' },
      { label: 'Occupation on CSOL or MLTSSL', detail: 'Your consultant confirms your specific occupation' },
      { label: 'Skills assessment (where required)', detail: 'ACS, AMI, CAANZ — confirmed at free assessment' },
    ],
    steps: [
      { num: '01', label: 'Free eligibility assessment', detail: 'We confirm your occupation, experience, and employer match potential' },
      { num: '02', label: 'Employer match', detail: 'Introduction to verified 482-approved employers in your industry' },
      { num: '03', label: '482 nomination & visa lodgement', detail: 'Insight Idea handles the full legal lodgement process' },
      { num: '04', label: '186 PR transition at 2 years', detail: 'We plan your 186 ENS from day one, not as an afterthought' },
    ],
    timeline: '3–12 months to 482 grant',
    pathway: '482 → 186 ENS (at 2-year mark)',
    honestNote: null,
    showSiddeleyNote: false,
    ctaLabel: 'Check My 482 Eligibility',
  },
  three: {
    headline: '3+ Years? You May Qualify for Direct 186 Entry',
    subhead: '3+ Years Experience — 186 Direct Entry Stream',
    intro: 'With 3+ years of recent experience in an eligible occupation, you may not need to spend time on a 482 first. The 186 Direct Entry (DE) stream can get you to permanent residency faster — if your skills assessment and employer are both in place.',
    requirements: [
      { label: '3 years full-time recent experience', detail: 'In the nominated ANZSCO occupation within the past 5 years' },
      { label: 'Completed skills assessment', detail: 'CAANZ, ACS, AMI, or Engineers Australia depending on occupation' },
      { label: 'Employer willing to nominate for 186', detail: 'Must hold current SBS and nominate directly for permanent residency' },
    ],
    steps: [
      { num: '01', label: 'Skills assessment review', detail: 'We audit your existing assessment — or help you apply if not yet done' },
      { num: '02', label: 'Employer match (186-nominated)', detail: 'We identify employers willing to nominate for 186 DE directly' },
      { num: '03', label: '186 DE lodgement via Insight Idea', detail: 'Full legal handling of nomination and visa application' },
    ],
    timeline: '6–18 months to 186 grant',
    pathway: '186 Direct Entry → PR',
    honestNote: 'Not all experienced candidates qualify for 186 DE directly — your skills assessment result and occupation code matter significantly. We confirm at your free consultation.',
    showSiddeleyNote: false,
    ctaLabel: 'Check My 186 DE Eligibility',
  },
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
  const [active, setActive] = useState<TabId>('one3');
  const ref = useReveal();
  const locale = useLocale();
  const content = CONTENT[active];

  return (
    <section style={{ background: B.bg, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>
            Your Options
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            Three Routes.{' '}<em style={{ fontStyle: 'italic', color: B.red }}>One Goal.</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, margin: 0 }}>The right visa depends on how much experience you have right now.</p>
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
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0, maxWidth: 560 }}>{content.intro}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
            <div style={{ padding: '28px 32px', borderRight: `1px solid ${B.divider}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 16 }}>What You Need</p>
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
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 16 }}>RedBridge&apos;s Approach</p>
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

          <div style={{ borderTop: `1px solid ${B.divider}`, padding: '18px 32px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', background: '#f7f2eb' }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 2px' }}>Timeline</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: 0 }}>{content.timeline}</p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 2px' }}>Pathway</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.red, margin: 0 }}>{content.pathway}</p>
              </div>
            </div>
            <Link href={`/contact?ctasrc=employer_v2_three_routes_${active}_cta&locale=${locale}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', background: B.red, color: '#fff', fontWeight: 700, fontSize: 13.5, borderRadius: 8, textDecoration: 'none' }}>
              {content.ctaLabel}
            </Link>
          </div>

          {content.honestNote && (
            <div style={{ borderTop: `1px solid ${B.divider}`, padding: '16px 32px', display: 'flex', gap: 12, alignItems: 'flex-start', background: '#fdf7f0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              <p style={{ fontSize: 13, color: B.textBody, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: B.textDeep }}>Honest note: </strong>{content.honestNote}
              </p>
            </div>
          )}

          {content.showSiddeleyNote && (
            <div style={{ borderTop: `1px solid ${B.divider}`, padding: '16px 32px', display: 'flex', gap: 14, alignItems: 'flex-start', background: B.cream, borderLeft: `4px solid ${B.navy}` }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
              <p style={{ fontSize: 12.5, color: B.textMuted, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: B.navy }}>Career Launch Recruitment Partner: </strong>
                Career Launch placements are managed through <strong>Siddeley Talent Link</strong>, a specialist recruitment company within the Siddeley Group — the same group that operates RedBridge Consulting.{' '}
                <Link href="/for-employers" style={{ color: B.navy, fontWeight: 600 }}>Learn more about our group structure →</Link>
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
