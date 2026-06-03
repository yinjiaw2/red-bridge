"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const videoCards = [
  {
    key: "welcome",
    duration: "02:45",
    poster: "/images/home/wtc-hero.jpg",
    videoSrc: "/videos/Andy-2.mp4",
    position: "object-center",
  },
  {
    key: "process",
    duration: "03:12",
    poster: "/images/home/office-meeting.jpg",
    videoSrc: "/videos/Andy-3.mp4",
    position: "object-center",
  },
  {
    key: "stories",
    duration: "04:08",
    poster: "/images/home/melbourne-city.jpg",
    videoSrc: "/videos/Edmond-3.mp4",
    position: "object-center",
  },
] as const;

type VideoCard = (typeof videoCards)[number];

export function VideoSection() {
  const t = useTranslations("homeVideo");
  const locale = useLocale();
  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo || !videoRef.current) return;
    void videoRef.current.play().catch(() => {});
  }, [activeVideo]);

  return (
    <>
      <section
        id="videos"
        className="w-full bg-background px-5 py-12 sm:px-[5%] md:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[16px] border border-border bg-card p-4 shadow-md sm:rounded-[22px] sm:p-6 md:p-8">
            <div>
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.22em] text-primary">
                  {t("eyebrow")}
                </p>
                <h3
                  className={`mt-2 font-serif text-[2rem] leading-[1.02] text-foreground sm:text-[2.25rem] md:text-[2.75rem]${locale === "zh" ? " font-bold" : ""}`}
                >
                  {t("title")}
                </h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {t("description")}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {videoCards.map((card) => (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActiveVideo(card)}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-card text-left shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.poster}
                      alt={t(`cards.${card.key}.title`)}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${card.position}`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">
                      {t("cardTag")}
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-[8px] bg-black/70 px-3 py-1 text-xs font-bold text-white">
                      {card.duration}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/18 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <h4 className="min-h-0 text-[1.3rem] leading-tight text-foreground sm:min-h-[3.25rem] sm:text-[1.52rem] sm:leading-none">
                      {t(`cards.${card.key}.title`)}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {t(`cards.${card.key}.description`)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(12,10,9,0.82)] px-4 py-6"
          onClick={() => setActiveVideo(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/75"
              aria-label={t("close")}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <video
                key={activeVideo.videoSrc}
                ref={videoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={activeVideo.poster}
                className="h-full w-full bg-black object-contain"
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

export default VideoSection;
