'use client';

import { useTranslations } from 'next-intl';

const B = {
  navy: '#172d5d', amber: '#efb64f', bg: '#f4f4f5', cream: '#ffffff',
  divider: '#e4e4e7', textDeep: '#18181b', textBody: '#27272a', textMuted: '#71717a',
};

type Story = { initials: string; role: string; tag: string; quote: string };

export default function SuccessStrip() {
  const t = useTranslations('v2.services.successStrip');
  const stories = t.raw('stories') as Story[];

  return (
    <section style={{ background: B.bg, padding: '72px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.textMuted, margin: '0 0 32px' }}>
          {t('label')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {stories.map((s) => (
            <div
              key={s.initials}
              style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: B.navy, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0, letterSpacing: '0.02em' }}>
                  {s.initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: B.textDeep, margin: '0 0 5px' }}>{s.role}</p>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: B.amber, background: B.navy, borderRadius: 4, padding: '2px 7px', display: 'inline-block' }}>
                    {s.tag}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: B.textBody, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                "{s.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
