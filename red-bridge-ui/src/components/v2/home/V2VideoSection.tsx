'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const B = {
  red: '#b11217',
  navy: '#172d5d',
  bg: '#f4f4f5',
  textDeep: '#18181b',
  textMuted: '#71717a',
  divider: '#e4e4e7',
};

const VIDEO_CARDS = [
  {
    key: 'welcome',
    poster: '/videos/Andy-2-cover.png',
    videoSrc: '/videos/Andy-2.mp4',
  },
  {
    key: 'process',
    poster: '/videos/Andy-3-cover.png',
    videoSrc: '/videos/Andy-3.mp4',
  },
  {
    key: 'stories',
    poster: '/videos/Edmond-3-cover.png',
    videoSrc: '/videos/Edmond-3.mp4',
  },
] as const;

type VideoCard = (typeof VIDEO_CARDS)[number];

const GAP = 20;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function V2VideoSection() {
  const t = useTranslations('v2.home.video');
  const locale = useLocale();
  const revealRef = useReveal();
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const total = VIDEO_CARDS.length;

  const visibleCount = containerWidth < 560 ? 1 : containerWidth < 900 ? 2 : 3;
  const canNavigate = total > visibleCount;
  const cardWidth = containerWidth > 0
    ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount
    : 300;
  const maxIndex = Math.max(0, total - visibleCount);

  const prev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCurrentIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!activeVideo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveVideo(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo || !videoRef.current) return;
    void videoRef.current.play().catch(() => {});
  }, [activeVideo]);

  const isZh = locale === 'zh';
  const trackOffset = currentIndex * (cardWidth + GAP);

  return (
    <>
      <section style={{ background: B.bg, padding: '80px 0' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
          <div ref={revealRef}>
            {/* Header row */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 40,
              gap: 16,
              flexWrap: 'wrap',
            }}>
              <div>
                <p style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: B.red,
                  marginBottom: 10,
                }}>
                  {t('eyebrow')}
                </p>
                <h2 style={{
                  fontSize: isZh ? 32 : 36,
                  fontWeight: isZh ? 700 : 600,
                  color: B.textDeep,
                  lineHeight: 1.1,
                  marginBottom: 10,
                  fontFamily: isZh ? 'inherit' : 'Georgia, serif',
                }}>
                  {t('heading')}
                </h2>
                <p style={{
                  fontSize: 15,
                  color: B.textMuted,
                  lineHeight: 1.7,
                  maxWidth: 520,
                  margin: 0,
                }}>
                  {t('subheading')}
                </p>
              </div>

              {/* Arrows — only shown when carousel is needed */}
              {canNavigate && (
                <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                  <ArrowBtn
                    onClick={prev}
                    disabled={currentIndex === 0}
                    label="Previous"
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </ArrowBtn>
                  <ArrowBtn
                    onClick={next}
                    disabled={currentIndex >= maxIndex}
                    label="Next"
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </ArrowBtn>
                </div>
              )}
            </div>

            {/* Carousel track */}
            <div ref={containerRef} style={{ overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                gap: GAP,
                transform: `translateX(-${trackOffset}px)`,
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                {VIDEO_CARDS.map((card) => (
                  <button
                    key={card.key}
                    type="button"
                    onClick={() => setActiveVideo(card)}
                    style={{
                      flex: `0 0 ${cardWidth}px`,
                      width: cardWidth,
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#ffffff',
                      border: `1px solid ${B.divider}`,
                      borderRadius: 16,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                      <Image
                        src={card.poster}
                        alt={t(`cards.${card.key}.title`)}
                        fill
                        sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
                      }} />
                      <span style={{
                        position: 'absolute', bottom: 10, left: 12,
                        background: 'rgba(0,0,0,0.65)',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        borderRadius: 6,
                        padding: '3px 8px',
                        letterSpacing: '0.04em',
                      }}>
                        {t(`cards.${card.key}.duration`)}
                      </span>
                      <span style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{
                          width: 52, height: 52,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.18)',
                          border: '1px solid rgba(255,255,255,0.35)',
                          backdropFilter: 'blur(4px)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff',
                        }}>
                          <Play size={20} style={{ fill: 'currentColor', marginLeft: 2 }} aria-hidden="true" />
                        </span>
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{ padding: '14px 16px 16px' }}>
                      <p style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: B.textDeep,
                        lineHeight: 1.5,
                        margin: 0,
                      }}>
                        {t(`cards.${card.key}.title`)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dot indicators — only when navigating */}
            {canNavigate && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: i === currentIndex ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === currentIndex ? B.red : B.divider,
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'width 0.3s ease, background 0.3s ease',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeVideo ? (
        <div
          role="presentation"
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'rgba(10,10,10,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px 16px',
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            role="presentation"
            style={{
              position: 'relative',
              width: '100%', maxWidth: 960,
              borderRadius: 20,
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label={t('close')}
              style={{
                position: 'absolute', top: 12, right: 12, zIndex: 10,
                width: 40, height: 40,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div style={{ aspectRatio: '16/9', background: '#000' }}>
              <video
                key={activeVideo.videoSrc}
                ref={videoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={activeVideo.poster}
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
              >
                <source src={activeVideo.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ArrowBtn({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        width: 44, height: 44,
        borderRadius: '50%',
        border: `1.5px solid ${disabled ? B.divider : B.navy}`,
        background: disabled ? 'transparent' : B.navy,
        color: disabled ? B.divider : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {children}
    </button>
  );
}
