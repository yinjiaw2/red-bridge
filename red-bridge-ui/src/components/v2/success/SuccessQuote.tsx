'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', navy: '#172d5d', bg: '#f4f4f5',
  cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b', textMuted: '#71717a',
  divider: '#e4e4e7', badgeBg: '#e4e4e7',
};

type QuoteData = { quote: string; name: string; role: string; city: string; visaType: string; initials: string };

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function QuoteCard({ q, isFeatured, delay, locale }: { q: QuoteData; isFeatured: boolean; delay: number; locale: string }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} style={{ background: isFeatured ? B.navy : B.cream, border: `1px solid ${isFeatured ? 'transparent' : B.divider}`, borderRadius: 18, padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', overflow: 'hidden' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 12, right: 24, fontSize: 96, lineHeight: 1, color: isFeatured ? 'rgba(255,255,255,0.07)' : 'rgba(34,21,15,0.06)', fontFamily: 'Georgia, serif', userSelect: 'none', pointerEvents: 'none' }}>&quot;</span>
      <span style={{ display: 'inline-flex', alignSelf: 'flex-start', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: isFeatured ? B.amber : B.red, background: isFeatured ? 'rgba(239,182,79,0.15)' : B.redLight, border: `1px solid ${isFeatured ? 'rgba(239,182,79,0.3)' : '#f5d5d6'}`, borderRadius: 5, padding: '3px 9px' }}>
        {q.visaType}
      </span>
      <blockquote style={{ fontSize: isFeatured ? 18 : 15, fontStyle: locale === 'zh' ? 'normal' : 'italic', color: isFeatured ? 'rgba(255,255,255,0.9)' : '#27272a', lineHeight: 1.7, margin: 0, position: 'relative', zIndex: 1, letterSpacing: '-0.01em' }}>
        &ldquo;{q.quote}&rdquo;
      </blockquote>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: isFeatured ? 'rgba(255,255,255,0.15)' : B.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: isFeatured ? '#fff' : B.textMuted, flexShrink: 0 }}>{q.initials}</div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: isFeatured ? '#fff' : B.textDeep, margin: '0 0 1px' }}>{q.name}</p>
          <p style={{ fontSize: 12.5, color: isFeatured ? 'rgba(255,255,255,0.55)' : B.textMuted, margin: 0 }}>{q.role} · {q.city}</p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessQuote() {
  const t = useTranslations('v2.success.quote');
  const locale = useLocale();
  const primaryQuote = t.raw('primaryQuote') as QuoteData;
  const secondaryQuote = t.raw('secondaryQuote') as QuoteData;
  const headerRef = useReveal(0);

  return (
    <section style={{ background: B.bg, padding: '72px 24px 64px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red }}>{t('eyebrow')}</span>
          <p style={{ fontSize: 15, color: B.textMuted, margin: '10px auto 0', lineHeight: 1.6, maxWidth: 440 }}>{t('subheading')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          <QuoteCard q={primaryQuote} isFeatured delay={0.05} locale={locale} />
          <QuoteCard q={secondaryQuote} isFeatured={false} delay={0.15} locale={locale} />
        </div>
        <p style={{ textAlign: 'center', fontSize: 11.5, color: B.textMuted, marginTop: 20, lineHeight: 1.5 }}>
          {t('footerNote')}
        </p>
      </div>
    </section>
  );
}
