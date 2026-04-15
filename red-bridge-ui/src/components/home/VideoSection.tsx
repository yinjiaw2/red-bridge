"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { useTranslations } from "next-intl";

const videoCards = [
  {
    key: "welcome",
    duration: "02:45",
    poster: "/home-assets/wtc-hero.png",
    videoSrc: "/videos/Andy-2.mp4",
    position: "object-center",
  },
  {
    key: "process",
    duration: "03:12",
    poster: "/home-assets/office-meeting.jpg",
    videoSrc: "/videos/Andy-3.mp4",
    position: "object-center",
  },
  {
    key: "stories",
    duration: "04:08",
    poster: "/home-assets/melbourne-city.jpg",
    videoSrc: "/videos/Edmond-3.mp4",
    position: "object-center",
  },
] as const;

type VideoCard = (typeof videoCards)[number];

export function VideoSection() {
  const t = useTranslations("homeVideo");
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
      <section id="videos" className="w-full bg-background px-[5%] py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[22px] border border-border bg-card p-6 shadow-md md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-primary">
                  {t("eyebrow")}
                </p>
                <h3 className="mt-2 font-serif text-[2.25rem] leading-[0.98] text-foreground md:text-[2.75rem]">
                  {t("title")}
                </h3>
                <p className="mt-3 max-w-[560px] text-base leading-8 text-muted-foreground">
                  {t("description")}
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 self-start text-sm font-bold text-primary"
              >
                {t("viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {videoCards.map((card) => (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActiveVideo(card)}
                  className="group overflow-hidden rounded-[18px] border border-border bg-card text-left shadow-md transition-transform duration-200 hover:-translate-y-0.5"
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
                  <div className="px-5 py-5">
                    <h4 className="text-[1.52rem] leading-none text-foreground">
                      {t(`cards.${card.key}.title`)}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
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
