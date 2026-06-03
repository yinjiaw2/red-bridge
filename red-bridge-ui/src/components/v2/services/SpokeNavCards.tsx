'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const B = {
  navy: '#172d5d', amber: '#efb64f', bg: '#f4f4f5', cream: '#ffffff',
  divider: '#e4e4e7', textDeep: '#18181b', textBody: '#27272a', textMuted: '#71717a',
  red: '#b11217',
};

type Card = { tag: string; title: string; desc: string; cta: string; href: string };

export default function SpokeNavCards() {
  const t = useTranslations('v2.services.spokeNavCards');
  const locale = useLocale();
  const cards = t.raw('cards') as Card[];

  return (
    <section style={{ background: B.cream, padding: '72px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)', borderTop: `1px solid ${B.divider}` }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 28px' }}>
          {t('eyebrow')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {cards.map((card) => (
            <Link
              key={card.href}
              href={`/${locale}${card.href}`}
              style={{ display: 'flex', flexDirection: 'column', background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 16, padding: '24px 24px 20px', textDecoration: 'none' }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.amber, background: B.navy, borderRadius: 4, padding: '2px 7px', display: 'inline-block', marginBottom: 14, width: 'fit-content' }}>
                {card.tag}
              </span>
              <p style={{ fontSize: 15, fontWeight: 700, color: B.textDeep, margin: '0 0 10px', lineHeight: 1.3 }}>{card.title}</p>
              <p style={{ fontSize: 14, color: B.textBody, lineHeight: 1.65, margin: '0 0 18px', flexGrow: 1 }}>{card.desc}</p>
              <span style={{ fontSize: 13, fontWeight: 700, color: B.red }}>{card.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
