'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

const B = {
  red: '#b11217',
  navy: '#172d5d',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  bg: '#f5f1ea',
  cream: '#fbf4ec',
  textDeep: '#22150f',
  textMuted: '#7a6a60',
  divider: '#ece5de',
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function PageCTA() {
  const locale = useLocale();
  const ref = useReveal();

  return (
    <section
      style={{
        background: B.bg,
        backgroundImage: `radial-gradient(ellipse 70% 80% at 50% 100%, #ead6bf44 0%, transparent 70%)`,
        padding: '80px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 860,
          margin: '0 auto',
          background: B.navy,
          borderRadius: 20,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        {/* Left — main CTA */}
        <div style={{ padding: '44px 40px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: B.amber,
              marginBottom: 14,
            }}
          >
            Get In Touch
          </span>

          <h2
            style={{
              fontSize: 'clamp(22px, 3.2vw, 30px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            Your first step is{' '}
            <em style={{ fontStyle: 'italic', color: B.amber }}>free.</em>
          </h2>

          <p
            style={{
              fontSize: 14.5,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            A no-obligation consultation. We'll give you an honest assessment —
            including telling you if none of our programs are the right fit for
            your situation.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <Link
              href={`/contact?ctasrc=page_v2_cta_primary&locale=${locale}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
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
              Book Free Consultation
            </Link>

            <a
              href="tel:0399617301"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 20px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 9,
                border: '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
                transition: 'border-color 0.18s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 15l.92 1.92z" />
              </svg>
              03 9961 7301
            </a>
          </div>

          {/* Trust micro-labels */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px', marginTop: 20 }}>
            {['Free — no obligation', 'Honest verdict, not a sales pitch', 'Legal partner on every case'].map((label) => (
              <span key={label} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — WeChat + office details */}
        <div
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            padding: '44px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          {/* WeChat — prominent, not buried in footer */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 12,
              }}
            >
              Chat in Mandarin 普通话咨询
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 10,
                padding: '12px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Image
                src="/wechat-official-account-qr.jpg"
                alt="Scan to contact us on WeChat"
                width={60}
                height={60}
                style={{ borderRadius: 6, flexShrink: 0 }}
              />
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 3px' }}>
                  WeChat 微信
                </p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>
                  Scan the QR to follow our official account or message us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Office locations */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 12,
              }}
            >
              Visit Us
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: B.amber, margin: '0 0 4px' }}>Melbourne HQ</p>
                <a
                  href="https://maps.google.com/?q=Level+9+Tower+3+18-38+Siddeley+Street+Docklands+VIC+3008"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, textDecoration: 'none', display: 'block' }}
                >
                  Level 9, Tower 3 · 18–38 Siddeley Street<br />
                  Docklands VIC 3008 · 5 min from Southern Cross
                </a>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: B.amber, margin: '0 0 4px' }}>Chengdu HQ</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>
                  成都市成华区杉板桥路1号<br />多弗国际中心写字楼
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <a
            href="mailto:info@red-bridge.com.au"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            info@red-bridge.com.au · Response within 24 hours
          </a>
        </div>
      </div>
    </section>
  );
}
