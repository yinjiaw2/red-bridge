'use client';

import Link from 'next/link';

const B = {
  red: '#b11217', navy: '#172d5d', bg: '#f5f1ea', cream: '#fbf4ec',
  amber: '#efb64f', amberDeep: '#d4a017', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
  redLight: '#fdf0f0',
};

export function ForEmployersHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '48vh', display: 'flex', alignItems: 'flex-end', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: B.navy }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(177,18,23,0.15) 0%, transparent 60%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '64px 24px 52px', width: '100%' }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, display: 'block', marginBottom: 14 }}>
          Employer Sponsorship Network · 482 / 186
        </span>
        <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, margin: '0 0 16px', letterSpacing: '-0.025em', maxWidth: 560 }}>
          The talent you need{' '}<em style={{ fontStyle: 'italic', color: B.amber }}>is right here</em>
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 540, margin: '0 0 32px' }}>
          Hundreds of skilled visa holders in ICT, accounting, and marketing are actively seeking sponsorship. RedBridge handles candidate screening — Insight Idea manages the full 482 legal process.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
          {[
            { num: '150+', label: 'Pre-screened candidates' },
            { num: '35+',  label: 'Verified sponsoring employers' },
            { num: '4',    label: 'Key industry sectors' },
            { num: '1',    label: 'Legal firm, same office' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '12px 18px', backdropFilter: 'blur(4px)' }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 2px', letterSpacing: '-0.03em' }}>{s.num}</p>
              <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#employer-form" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 24px', background: B.amber, color: B.textDeep, fontWeight: 800, fontSize: 14.5, borderRadius: 9, textDecoration: 'none', transition: 'background 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)} onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}>
            Submit an Employer Enquiry
          </a>
          <a href="tel:0399617301" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '13px 20px', background: 'transparent', color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: 14, borderRadius: 9, border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}>
            03 9961 7301 · English &amp; Mandarin
          </a>
        </div>
      </div>
    </section>
  );
}

const PAIN_POINTS = [
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75', title: 'No qualified local candidates', detail: 'ICT, engineering, and accounting roles consistently attract few or no suitable local applicants. Genuine experience with specific certifications is structurally scarce domestically.' },
  { icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83', title: 'Extended vacancies cost real money', detail: 'Every month a critical role stays open means lost productivity, increased load on existing staff, and ground lost to competitors who have already filled theirs.' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Compliance complexity discourages action', detail: 'SBS applications, Labour Market Testing, nomination obligations, and ongoing sponsor duties feel overwhelming. They don\'t have to be — with the right guidance.' },
  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', title: 'Hard to find the right sponsored candidate', detail: 'Sponsorship only works when skills, visa eligibility, and long-term commitment all align. Finding that match without a trusted network is a genuine challenge.' },
];

export function HiringPainPoints() {
  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>Hiring Pain Points</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: 0 }}>
            Why Australian Businesses{' '}<em style={{ fontStyle: 'italic', color: B.red }}>Choose Sponsorship</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {PAIN_POINTS.map((p) => (
            <div key={p.title} style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 14, padding: '24px 22px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: B.redLight, border: `1px solid #f5d5d6`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d={p.icon} /></svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: B.textDeep, margin: '0 0 8px', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65 }}>{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  { num: '01', title: 'Eligibility & Role Assessment', who: 'RedBridge + Insight Idea', items: ['Confirm occupation is on CSOL', 'Labour Market Testing scope review', 'Candidate pre-screening against role requirements'] },
  { num: '02', title: 'Sponsorship & Nomination', who: 'Insight Idea Legal', items: ['Standard Business Sponsorship (SBS) application', 'Labour Market Testing advertising compliance', '482 nomination lodgement with DOHA'] },
  { num: '03', title: 'Visa Grant & Ongoing Compliance', who: 'RedBridge + Insight Idea', items: ['Visa holder onboarding and milestone tracking', 'Quarterly salary and compliance reviews', '186 ENS transition planning at 2-year mark'] },
];

export function ThreePhases() {
  return (
    <section style={{ background: B.navy, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.amber, display: 'block', marginBottom: 12 }}>Process Breakdown</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            Three Phases: From Gap to{' '}<em style={{ fontStyle: 'italic', color: B.amber }}>Visa Grant</em>
          </h2>
          <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Phases can run in parallel — you don&apos;t wait for one to close before the next begins.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {PHASES.map((phase, i) => (
            <div key={phase.num} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: i === 1 ? B.red : 'rgba(255,255,255,0.07)', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: i === 1 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: 4 }}>PHASE {phase.num}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.3 }}>{phase.title}</h3>
                <span style={{ fontSize: 10.5, fontWeight: 600, color: i === 1 ? 'rgba(255,255,255,0.6)' : B.amber, letterSpacing: '0.04em' }}>{phase.who}</span>
              </div>
              <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {phase.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 28 }}>
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" target="_blank" rel="noopener noreferrer" style={{ color: B.amber, textDecoration: 'none' }}>
            Learn more about the 482 Skills in Demand Visa on the DOHA website →
          </a>
        </p>
      </div>
    </section>
  );
}

const FEES = [
  { label: 'Standard Business Sponsorship (SBS)', note: 'One-off. Not required if already an approved sponsor.', amount: 'AUD $420', highlight: false },
  { label: 'Nomination Fee — 482 (Skills in Demand)', note: 'Per nomination. Non-refundable.', amount: 'AUD $330', highlight: false },
  { label: 'Nomination Fee — 186 (ENS)', note: 'Per nomination. Non-refundable.', amount: 'AUD $540', highlight: false },
  { label: 'SAF Levy — Small Business (<$10M turnover)', note: 'Per visa year. Paid at nomination lodgement.', amount: 'AUD $1,200/yr', highlight: true },
  { label: 'SAF Levy — Large Business (≥$10M turnover)', note: 'Per visa year. Paid at nomination lodgement.', amount: 'AUD $1,800/yr', highlight: true },
  { label: 'Minimum Salary — Core Skills Stream', note: 'TSMIT as at current year. Add AMM where applicable.', amount: '$76,515+ super', highlight: false },
  { label: 'Minimum Salary — Specialist Skills Stream', note: 'For CSOL Specialist Tier. Subject to applicable determination.', amount: '$135,000+ super', highlight: false },
];

export function FeesTable() {
  return (
    <section style={{ background: B.cream, borderTop: `1px solid ${B.divider}`, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>Fee Breakdown</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Sponsorship Actual Costs</h2>
          <p style={{ fontSize: 14, color: B.textMuted, margin: '0 auto', lineHeight: 1.6, maxWidth: 480 }}>
            Government fees are mandatory and non-negotiable. RedBridge and Insight Idea service fees are provided as a fixed quote after your role assessment.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FEES.map((fee) => (
            <div key={fee.label} style={{ background: fee.highlight ? '#fdf7ee' : B.bg, border: `1px solid ${fee.highlight ? '#f0d9a0' : B.divider}`, borderRadius: 10, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: B.textDeep, margin: '0 0 3px', lineHeight: 1.3 }}>{fee.label}</p>
                <p style={{ fontSize: 12, color: B.textMuted, margin: 0 }}>{fee.note}</p>
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: fee.highlight ? '#7a5000' : B.navy, whiteSpace: 'nowrap', flexShrink: 0 }}>{fee.amount}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, padding: '16px 20px', background: B.redLight, border: `1px solid #f5d5d6`, borderRadius: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <p style={{ fontSize: 13, color: B.textBody, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: B.red }}>By law</strong>, all sponsorship costs must be borne by the employer. They cannot be charged to or recovered from visa holders. Insight Idea and RedBridge service fees are quoted separately and confirmed in writing before any work begins.
          </p>
        </div>
      </div>
    </section>
  );
}

const REDBRIDGE_ITEMS = [
  'Match candidates from our pool to role requirements and visa-eligible occupation levels',
  'Pre-screen skills assessment eligibility (ACS, AMI, Engineers Australia) before referral',
  'Coordinate candidate documentation and career preparation',
  'Manage employer–candidate communication and milestone support end-to-end',
  'CRM milestone tracking — flagging the 2-year milestone for 186 ENS transition eligibility',
];
const INSIGHT_ITEMS = [
  'Standard Business Sponsorship (SBS) application and DOHA approval',
  'Labour Market Testing — advertising compliance and documentation records',
  'Nomination preparation and lodgement (482 Core Skills / Specialist stream)',
  'Visa application support and internal document management',
  'Ongoing compliance monitoring and DOHA notifications',
  '2-year milestone 186 ENS transition lodgement and pathway planning',
];

export function DivisionRoles() {
  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 12 }}>Our Partnership</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
            RedBridge + Insight Idea —{' '}<em style={{ fontStyle: 'italic', color: B.red }}>Clear Division of Roles</em>
          </h2>
          <p style={{ fontSize: 14.5, color: B.textMuted, margin: '0 auto', maxWidth: 480 }}>
            RedBridge finds and prepares candidates. Insight Idea handles all migration law and compliance. Both teams are co-located at the same Docklands address.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: B.red, padding: '22px 26px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 4px' }}>Talent & Employer</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>RedBridge Consulting</h3>
            </div>
            <div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {REDBRIDGE_ITEMS.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.red} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: B.textBody, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ background: B.navy, padding: '22px 26px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 4px' }}>Law & Migration · MARN: 1467870</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Insight Idea</h3>
            </div>
            <div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {INSIGHT_ITEMS.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B.navy} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: B.textBody, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
