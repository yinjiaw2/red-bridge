'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const B = {
  red: '#b11217',
  redLight: '#fdf0f0',
  navy: '#172d5d',
  bg: '#f4f4f5',
  cream: '#ffffff',
  amber: '#efb64f',
  textDeep: '#18181b',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

const VISA_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  '482': { bg: '#fdf0f0', border: '#f5d5d6', text: B.red },
  '186': { bg: '#eef1f8', border: '#c8d3e8', text: B.navy },
  '485→482': { bg: '#fdf7ee', border: '#f0d9a0', text: '#7a5000' },
};

type EntryType = { name: string; outcome: string; type: string; occupation: string; timeline: string };

function TickerCard({ entry }: { entry: EntryType }) {
  const vc = VISA_COLORS[entry.type] ?? VISA_COLORS['482'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: B.cream,
        border: `1px solid ${B.divider}`,
        borderRadius: 12,
        padding: '14px 18px',
        minWidth: 230,
        flexShrink: 0,
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Initials avatar */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: B.divider,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 700,
            color: B.textMuted,
            flexShrink: 0,
          }}
        >
          {entry.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: B.textDeep, margin: 0, lineHeight: 1.2 }}>
            {entry.name}
          </p>
          <p style={{ fontSize: 11.5, color: B.textMuted, margin: 0 }}>
            {entry.occupation}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Visa/outcome badge */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.04em',
            background: vc.bg,
            border: `1px solid ${vc.border}`,
            color: vc.text,
            borderRadius: 4,
            padding: '2px 7px',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.type}
        </span>
        <span style={{ fontSize: 12.5, color: B.textDeep, fontWeight: 500 }}>
          {entry.outcome}
        </span>
      </div>

      <p style={{ fontSize: 11, color: B.textMuted, margin: 0 }}>
        ⏱ {entry.timeline}
      </p>
    </div>
  );
}

export default function HomeTicker() {
  const t = useTranslations('v2.home.ticker');
  const trackRef = useRef<HTMLDivElement>(null);

  const ENTRIES = t.raw('entries') as EntryType[];
  const ALL = [...ENTRIES, ...ENTRIES];

  return (
    <section
      style={{
        background: B.bg,
        padding: '56px 0',
        overflow: 'hidden',
        fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)',
      }}
    >
      {/* Section intro */}
      <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 28 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: B.textMuted,
            margin: 0,
          }}
        >
          {t('label')}
        </p>
      </div>

      {/* Ticker track */}
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; }}
        onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; }}
      >
        {/* Fade masks */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: `linear-gradient(to right, ${B.bg}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: `linear-gradient(to left, ${B.bg}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 12,
            animation: 'rbTicker 50s linear infinite',
            width: 'max-content',
            padding: '4px 12px',
          }}
        >
          {ALL.map((entry, i) => (
            <TickerCard key={`${entry.name}-${i}`} entry={entry} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rbTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
