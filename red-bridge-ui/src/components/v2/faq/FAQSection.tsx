'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f4f4f5', cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b',
  textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7',
};

type FAQEntry = { q: string; preview: string; a: string };

function FAQItem({ item, isOpen, onToggle }: { item: FAQEntry; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ background: isOpen ? B.cream : B.bg, border: `1px solid ${isOpen ? B.redMid : B.divider}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s ease, background 0.2s ease' }}>
      <button onClick={onToggle} aria-expanded={isOpen} style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14.5, fontWeight: 700, color: isOpen ? B.red : B.textDeep, lineHeight: 1.35, transition: 'color 0.15s ease', flex: 1 }}>{item.q}</span>
          <span style={{ width: 24, height: 24, borderRadius: '50%', background: isOpen ? B.red : B.divider, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, transition: 'background 0.2s ease' }} aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : B.textMuted} strokeWidth="2.5" strokeLinecap="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {!isOpen && <span style={{ fontSize: 13, color: B.textMuted, lineHeight: 1.5, marginTop: 2 }}>{item.preview}</span>}
      </button>
      {isOpen && (
        <div style={{ padding: '0 20px 20px' }}>
          <p style={{ fontSize: 13.5, color: B.textBody, lineHeight: 1.75, margin: 0 }}>{item.a}</p>
        </div>
      )}
    </div>
  );
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
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function FAQSection() {
  const t = useTranslations('v2.faq');
  const locale = useLocale();
  const CATEGORIES = t.raw('categories') as string[];
  const FAQS_RAW = t.raw('faqs') as Record<string, FAQEntry[]>;

  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();
  const items = FAQS_RAW[activeCategory] ?? [];

  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: locale === 'zh' ? 'normal' : 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, margin: 0, lineHeight: 1.6 }}>{t('subheading')}</p>
        </div>

        <div style={{ display: 'flex', background: B.divider, borderRadius: 10, padding: 4, marginBottom: 24, gap: 4 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIndex(null); }} style={{ flex: 1, padding: '10px 12px', borderRadius: 7, border: activeCategory === cat ? `1px solid ${B.divider}` : '1px solid transparent', background: activeCategory === cat ? B.cream : 'transparent', color: activeCategory === cat ? B.red : B.textMuted, fontWeight: activeCategory === cat ? 700 : 500, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: activeCategory === cat ? '0 1px 4px rgba(34,21,15,0.08)' : 'none', whiteSpace: 'nowrap' }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
          {items.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>

        <div style={{ background: B.navy, borderRadius: 14, padding: '28px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{t('ctaStripHeading')}</p>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{t('ctaStripSub')}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/contact?ctasrc=faq_v2_cta" style={{ display: 'inline-flex', alignItems: 'center', padding: '11px 20px', background: B.amber, color: B.textDeep, fontWeight: 700, fontSize: 13.5, borderRadius: 8, textDecoration: 'none', transition: 'background 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#d4a017')} onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}>
              {t('ctaPrimary')}
            </Link>
            <a href="mailto:info@red-bridge.com.au" style={{ display: 'inline-flex', alignItems: 'center', padding: '11px 18px', background: 'transparent', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: 13.5, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
              {t('ctaEmail')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
