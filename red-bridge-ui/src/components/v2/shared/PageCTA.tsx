
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import type { SVGProps } from 'react';

function WeChatIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M9.5 4C5.36 4 2 6.92 2 10.5c0 2.03 1.05 3.84 2.7 5.04L3.5 18l2.7-1.35A8.2 8.2 0 0 0 9.5 17c.34 0 .68-.02 1.01-.06A5.5 5.5 0 0 1 10 14.5C10 11.46 12.91 9 16.5 9c.18 0 .36.01.54.02C16.17 6.2 13.13 4 9.5 4zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.5 10C13.46 10 11 12.01 11 14.5S13.46 19 16.5 19c.7 0 1.37-.12 1.98-.34L21 20l-1.04-2.18A4.28 4.28 0 0 0 21 14.5C21 12.01 19.54 10 16.5 10zm-2 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
    </svg>
  );
}

function FacebookIcon({ size = 15, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.1v2.1H7.5v3h2.6V21h3.4Z" />
    </svg>
  );
}

function InstagramIcon({ size = 15, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type SocialKey = 'wechat' | 'rednote' | 'instagram' | 'facebook';

const SOCIAL_ICON_MAP: Partial<Record<SocialKey, React.ComponentType<{ size?: number }>>> = {
  wechat: WeChatIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

const SOCIAL_BG: Record<SocialKey, string> = {
  wechat: '#07C160',
  rednote: '#FF2442',
  instagram: 'linear-gradient(135deg, #a855f7, #ec4899, #fb923c)',
  facebook: '#1877F2',
};

const QR_IMAGE_MAP: Partial<Record<SocialKey, string>> = {
  wechat: '/images/social/wechat-official-account-qr.jpg',
};

const B = {
  red: '#b11217',
  navy: '#172d5d',
  amber: '#efb64f',
  amberDeep: '#d4a017',
  bg: '#f4f4f5',
  cream: '#ffffff',
  textDeep: '#18181b',
  textMuted: '#71717a',
  divider: '#e4e4e7',
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
  const t = useTranslations('v2.shared.pageCTA');
  const ref = useReveal();
  const [qrModal, setQrModal] = useState<SocialKey | null>(null);

  const trustLabels = t.raw('trustLabels') as string[];
  const socials = t.raw('socials') as { label: string; key: string; href: string | null }[];

  useEffect(() => {
    if (!qrModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setQrModal(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [qrModal]);

  const qrScanLabel = qrModal === 'rednote' ? t('rednoteQrScanLabel') : t('wechatQrScanLabel');

  return (
    <>
      <section
        style={{
          background: B.bg,
          backgroundImage: `radial-gradient(ellipse 70% 80% at 50% 100%, #e4e4e744 0%, transparent 70%)`,
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
              {t('eyebrow')}
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
              {t('heading')}{' '}
              <em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.amber }}>{t('headingEm')}</em>
            </h2>

            <p
              style={{
                fontSize: 14.5,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.65,
                margin: '0 0 28px',
              }}
            >
              {t('body')}
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
                {t('ctaPrimary')}
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
                {t('ctaPhone')}
              </a>
            </div>

            {/* Trust micro-labels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px', marginTop: 20 }}>
              {trustLabels.map((label) => (
                <span key={label} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — socials + office details */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 28,
            }}
          >
            {/* Follow us — all 4 socials (replaces WeChat QR card) */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
                {t('followUsChatLabel')}
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map((s) => {
                  const key = s.key as SocialKey;
                  const Icon = SOCIAL_ICON_MAP[key];
                  const isQr = !s.href;

                  const inner = (
                    <span style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: SOCIAL_BG[key],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}>
                      {key === 'rednote' ? (
                        <Image src="/images/logos/xhs-logo.png" alt="小红书" width={40} height={40} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        Icon && <Icon size={16} />
                      )}
                    </span>
                  );

                  const hoverStyle: React.CSSProperties = { background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none', transition: 'opacity 0.15s ease', minWidth: 0 };

                  if (isQr) {
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-label={s.label}
                        onClick={() => setQrModal(key)}
                        style={hoverStyle}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                      >
                        {inner}
                      </button>
                    );
                  }

                  return (
                    <a
                      key={key}
                      href={s.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={hoverStyle}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                      {inner}
                    </a>
                  );
                })}
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
                {t('visitUsLabel')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: B.amber, margin: '0 0 4px' }}>{t('melbourneHQLabel')}</p>
                  <a
                    href="https://maps.google.com/?q=Level+9+Tower+3+18-38+Siddeley+Street+Docklands+VIC+3008"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, textDecoration: 'none', display: 'block', whiteSpace: 'pre-line' }}
                  >
                    {t('melbourneHQAddress')}
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: B.amber, margin: '0 0 4px' }}>{t('chengduHQLabel')}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                    {t('chengduHQAddress')}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
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
                {t('emailAddress')}
              </a>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '4px 0 0 22px' }}>
                {t('emailResponseTime')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR modal */}
      {qrModal && QR_IMAGE_MAP[qrModal] && (
        <div
          role="presentation"
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
          }}
          onClick={() => setQrModal(null)}
        >
          <div
            role="presentation"
            style={{
              position: 'relative',
              background: B.navy,
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: 28,
              maxWidth: 280,
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrModal(null)}
              aria-label={t('closeLabel')}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 32, height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={15} aria-hidden="true" />
            </button>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: B.amber, marginBottom: 16 }}>
              {socials.find((s) => s.key === qrModal)?.label}
            </p>
            <Image
              src={QR_IMAGE_MAP[qrModal]!}
              alt={socials.find((s) => s.key === qrModal)?.label ?? ''}
              width={180}
              height={180}
              style={{ borderRadius: 12, margin: '0 auto', display: 'block' }}
            />
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 14, lineHeight: 1.6 }}>
              {qrScanLabel}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
