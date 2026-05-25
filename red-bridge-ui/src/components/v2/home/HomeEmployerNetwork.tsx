'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  redMid: '#f5d5d6',
  navy: '#172d5d',
  bg: '#f5f1ea',
  cream: '#fbf4ec',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#22150f',
  textBody: '#1f1f1f',
  textMuted: '#7a6a60',
  divider: '#ece5de',
};

const INDUSTRIES = [
  {
    label: 'Technology & ICT',
    labelZh: '科技与信息技术',
    count: 12,
    occupations: ['Software Engineer', 'ICT Project Manager', 'Business Analyst', 'Systems Analyst'],
    iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    label: 'Accounting & Finance',
    labelZh: '会计与金融',
    count: 8,
    occupations: ['Management Accountant', 'Financial Analyst', 'Tax Accountant', 'Auditor'],
    iconPath: 'M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2M9 7h6m0 0l2-2m-2 2l2 2',
  },
  {
    label: 'Marketing & Communications',
    labelZh: '市场营销',
    count: 6,
    occupations: ['Marketing Specialist', 'Digital Marketing Mgr', 'Market Research Analyst', 'Business Dev Manager'],
    iconPath: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    label: 'Engineering',
    labelZh: '工程',
    count: 5,
    occupations: ['Civil Engineer', 'Structural Engineer', 'Mechanical Engineer', 'Project Engineer'],
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'Automotive',
    labelZh: '汽车行业',
    count: 4,
    occupations: ['Automotive Technician', 'Service Manager', 'Parts Interpreter', 'Workshop Manager'],
    iconPath: 'M19 8.5l-1.5-4.5H6.5L5 8.5M3 8.5h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zM7 14.5v2a1 1 0 001 1h1a1 1 0 001-1v-2M14 14.5v2a1 1 0 001 1h1a1 1 0 001-1v-2',
  },
];

const VERIFY_STEPS = [
  {
    num: '01',
    title: 'Check Sponsorship Approval',
    detail: 'Confirm active 482 status against official DOHA records.',
  },
  {
    num: '02',
    title: 'Review Company & Role',
    detail: 'Assess business legitimacy, job duties, and TSMIT salary compliance.',
  },
  {
    num: '03',
    title: 'Ongoing Monitoring',
    detail: 'Regularly recheck status so it stays valid throughout your placement.',
  },
];

function useStaggerReveal(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    refs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return refs;
}

function useReveal(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function HomeEmployerNetwork() {
  const locale = useLocale();
  const cardRefs = useStaggerReveal(INDUSTRIES.length);
  const headerRef = useReveal(0);
  const verifyRef = useReveal(0.1);

  return (
    <section
      style={{
        background: B.navy,
        padding: '96px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ marginBottom: 52 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: B.amber,
              marginBottom: 14,
              display: 'block',
            }}
          >
            Our Employer Network
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              The Jobs Are{' '}
              <em style={{ fontStyle: 'italic', color: B.amber }}>Real</em>
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.6,
                maxWidth: 400,
                margin: 0,
              }}
            >
              Every employer is individually verified for active 482 sponsorship
              approval before we introduce them to any client.
            </p>
          </div>
        </div>

        {/* ── Industry cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 14,
            marginBottom: 52,
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '22px 20px',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(239,182,79,0.12)',
                  border: '1px solid rgba(239,182,79,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={ind.iconPath} />
                </svg>
              </div>

              {/* Employer count badge */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  {ind.count}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  Verified employers
                </span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}
              >
                {ind.label}
              </p>

              {/* Occupation pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {ind.occupations.slice(0, 3).map((occ) => (
                  <span
                    key={occ}
                    style={{
                      fontSize: 10.5,
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      padding: '2px 7px',
                    }}
                  >
                    {occ}
                  </span>
                ))}
                {ind.occupations.length > 3 && (
                  <span
                    style={{
                      fontSize: 10.5,
                      color: 'rgba(255,255,255,0.35)',
                      padding: '2px 4px',
                    }}
                  >
                    +{ind.occupations.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Private & Protected + Verification steps ── */}
        <div
          ref={verifyRef}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 18,
            padding: '36px 36px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 32,
          }}
        >
          {/* Left — private note */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: B.amber,
                }}
              >
                Private &amp; Protected
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: '0 0 20px' }}>
              Employer profiles are shared privately during your consultation — not
              publicly listed, to protect hiring relationships and your introduction.
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                margin: '0 0 6px',
              }}
            >
              Our Verification Process
            </p>
          </div>

          {/* Right — 3 steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {VERIFY_STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: i === 0 ? B.red : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${i === 0 ? B.red : 'rgba(255,255,255,0.15)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {i === 0 ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    step.num.slice(1) // '2', '3'
                  )}
                </div>
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: '#fff', margin: '0 0 3px' }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link
            href={`/contact?ctasrc=home_v2_employer_network_cta&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 26px',
              background: B.amber,
              color: B.textDeep,
              fontWeight: 700,
              fontSize: 14.5,
              borderRadius: 9,
              textDecoration: 'none',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = B.amberDeep)}
            onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}
          >
            Book your free consultation to see who's hiring
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
