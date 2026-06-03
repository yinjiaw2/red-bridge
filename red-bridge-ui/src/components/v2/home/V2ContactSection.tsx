'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  redMid: '#f5d5d6',
  navy: '#172d5d',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  textDeep: '#18181b',
  textBody: '#27272a',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease 0s, transform 0.6s ease 0s';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const SOCIAL_META: Record<string, { href: string | null; qr: string | null; isFb?: boolean; isInstagram?: boolean; iconPath?: string }> = {
  wechat:    { href: null, qr: '/images/social/wechat-official-account-qr.jpg', iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  facebook:  { href: 'https://www.facebook.com/people/RedBridge-Consulting/61587635078885/', qr: null, isFb: true },
  rednote:   { href: 'https://www.xiaohongshu.com/user/profile/69c209f000000000260005c7', qr: null, iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  instagram: { href: 'https://www.instagram.com/redbridgeconsulting/', qr: null, isInstagram: true },
};

const CARD_ICON_PATHS = [
  'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
];
const CARD_HREFS = [null, 'tel:+61399617301', 'mailto:info@redbridgeconsulting.com.au'];

export default function V2ContactSection() {
  const locale = useLocale();
  const t = useTranslations('v2.home.contact');
  const ref = useReveal();

  const CONTACT_CARDS = (t.raw('cards') as { title: string; eyebrow: string; lines: string[]; sub: string | null }[]).map((c, i) => ({
    ...c,
    iconPath: CARD_ICON_PATHS[i],
    href: CARD_HREFS[i],
  }));
  const SOCIALS = (t.raw('socials') as { key: string; label: string }[]).map((s) => ({
    ...s,
    ...SOCIAL_META[s.key],
  }));

  return (
    <section
      style={{
        background: B.navy,
        padding: '88px 24px',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} style={{ maxWidth: 1060, margin: '0 auto', position: 'relative' }}>

        <div style={{ textAlign: 'center', marginBottom: 52 }}>
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
            {t('eyebrow')}
          </span>

          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('heading')}{' '}
            <em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {t('subheading')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
            marginBottom: 44,
          }}
        >
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '28px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(239,182,79,0.12)',
                  border: '1px solid rgba(239,182,79,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={card.iconPath} />
                </svg>
              </div>

              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  margin: '0 0 6px',
                }}
              >
                {card.eyebrow}
              </p>

              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </p>

              <div style={{ marginBottom: card.sub ? 10 : 0 }}>
                {card.lines.map((line) =>
                  card.href ? (
                    <a
                      key={line}
                      href={card.href}
                      style={{
                        display: 'block',
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.6,
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = B.amber; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={line}
                      style={{
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>

              {card.sub && (
                <p
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.4)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {card.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href={`/contact?ctasrc=home_v2_contact_cta&locale=${locale}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 36px',
              background: B.amber,
              color: B.textDeep,
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 24px rgba(239,182,79,0.3)',
              transition: 'background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = B.amberDeep;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(239,182,79,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = B.amber;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(239,182,79,0.3)';
            }}
          >
            {t('ctaPrimary')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', margin: '14px 0 24px', lineHeight: 1.5 }}>
            {t('responseNote')}
          </p>

          {/* Social row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginRight: 4 }}>
              {t('followUsLabel')}
            </span>
            {SOCIALS.map((s) => {
              const iconEl = s.isFb ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5H16l.5-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.1v2.1H7.5v3h2.6V21h3.4Z" />
                </svg>
              ) : s.isInstagram ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.iconPath} />
                </svg>
              );

              const btnStyle: React.CSSProperties = {
                position: 'relative',
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.55)',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
                textDecoration: 'none',
              };

              if (s.href) {
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={btnStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239,182,79,0.15)';
                      e.currentTarget.style.borderColor = 'rgba(239,182,79,0.4)';
                      e.currentTarget.style.color = B.amber;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                    }}
                  >
                    {iconEl}
                  </a>
                );
              }

              return (
                <div key={s.key} style={{ position: 'relative' }} className="rb-wechat-wrap">
                  <button
                    type="button"
                    aria-label={s.label}
                    style={btnStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239,182,79,0.15)';
                      e.currentTarget.style.borderColor = 'rgba(239,182,79,0.4)';
                      e.currentTarget.style.color = B.amber;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                    }}
                  >
                    {iconEl}
                  </button>
                  <div
                    className="rb-wechat-qr"
                    style={{
                      position: 'absolute',
                      bottom: '110%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#fff',
                      borderRadius: 10,
                      padding: 8,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      pointerEvents: 'none',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      zIndex: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Image src={s.qr!} alt={t('wechatQrAlt')} width={128} height={128} style={{ display: 'block', borderRadius: 6 }} />
                    <p style={{ fontSize: 10, color: B.textMuted, textAlign: 'center', margin: '6px 0 0', fontWeight: 600 }}>{t('wechatAccountLabel')}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .rb-wechat-wrap:hover .rb-wechat-qr { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
