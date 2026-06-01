'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f4f4f5', cream: '#ffffff', amber: '#efb64f', textDeep: '#18181b',
  textBody: '#27272a', textMuted: '#71717a', divider: '#e4e4e7', badgeBg: '#e4e4e7',
};

const TEAM_PHOTOS = [
  { photo: '/team/ryan-b.jpg',  initials: 'RB' },
  { photo: '/team/cindy-c.jpg', initials: 'CC' },
  { photo: '/team/brook-a.jpg', initials: 'BA' },
];

type MemberData = { name: string; role: string; languages: string; description: string; specialties: string[] };

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function PhotoPlaceholder({ initials }: { initials: string }) {
  return (
    <div style={{ width: '100%', aspectRatio: '1 / 1', background: `linear-gradient(135deg, ${B.badgeBg} 0%, #d4d4d8 100%)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, color: B.textMuted, letterSpacing: '-0.02em', userSelect: 'none' }} aria-hidden="true">
      {initials}
    </div>
  );
}

function TeamCard({ member, photo, initials, delay, bookCta }: { member: MemberData; photo: string; initials: string; delay: number; bookCta: string }) {
  const ref = useReveal(delay);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div ref={ref} style={{ background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 20px 0', position: 'relative' }}>
        {imgFailed ? (
          <PhotoPlaceholder initials={initials} />
        ) : (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', borderRadius: 12, overflow: 'hidden' }}>
            <Image src={photo} alt={`${member.name}, ${member.role}`} fill style={{ objectFit: 'cover', objectPosition: 'top' }} onError={() => setImgFailed(true)} />
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 8, right: 28, background: B.navy, borderRadius: 6, padding: '3px 8px' }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{member.languages}</span>
        </div>
      </div>
      <div style={{ padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: B.textDeep, margin: '0 0 2px' }}>{member.name}</h3>
          <p style={{ fontSize: 12.5, color: B.red, fontWeight: 600, margin: 0 }}>{member.role}</p>
        </div>
        <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65, flex: 1 }}>{member.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {member.specialties.map((s) => (
            <span key={s} style={{ fontSize: 11, color: B.textMuted, background: B.bg, border: `1px solid ${B.divider}`, borderRadius: 4, padding: '2px 7px' }}>{s}</span>
          ))}
        </div>
        <Link
          href={`/contact?from=team_${initials.toLowerCase()}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: B.red, textDecoration: 'none', marginTop: 4, transition: 'gap 0.15s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
        >
          {bookCta}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  const t = useTranslations('v2.about.team');
  const MEMBERS = t.raw('members') as MemberData[];
  const headerRef = useReveal(0);

  return (
    <section style={{ background: B.bg, padding: '88px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div ref={headerRef} style={{ marginBottom: 44, textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>{t('eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            {t('heading')}{' '}<em style={{ fontStyle: 'italic', color: B.red }}>{t('headingEm')}</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            {t('subheading')}
          </p>
        </div>

        <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 40, position: 'relative', height: 320, background: `linear-gradient(135deg, ${B.badgeBg} 0%, #d4d4d8 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${B.divider}` }}>
          <div style={{ textAlign: 'center', padding: 32 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: B.textMuted, margin: '0 0 6px' }}>{t('teamPhotoCaption')}</p>
            <p style={{ fontSize: 12.5, color: B.textMuted, margin: 0, opacity: 0.7 }}>{t('teamPhotoHint')}</p>
          </div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(23,45,93,0.85)', backdropFilter: 'blur(6px)', borderRadius: 8, padding: '8px 14px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', margin: '0 0 1px' }}>{t('officeLabel')}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{t('officeSub')}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {MEMBERS.map((member, i) => (
            <TeamCard key={member.name} member={member} photo={TEAM_PHOTOS[i].photo} initials={TEAM_PHOTOS[i].initials} delay={i * 0.1} bookCta={t('bookCta')} />
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '18px 24px', background: B.cream, border: `1px solid ${B.divider}`, borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.amber} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <p style={{ fontSize: 13, color: B.textMuted, margin: 0, lineHeight: 1.65 }}>
            <strong style={{ color: B.textDeep }}>{t('howItWorksLabel')}</strong>
            {t('howItWorks')}
          </p>
        </div>
      </div>
    </section>
  );
}
