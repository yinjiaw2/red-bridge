"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { videoCards } from "./home-data";
import { ArrowRightIcon, XIcon } from "./icons";

type VideoCard = (typeof videoCards)[number];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

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
    if (!activeVideo || !videoRef.current) {
      return;
    }

    void videoRef.current.play().catch(() => {});
  }, [activeVideo]);

  return (
    <>
      <section id="videos" className="w-full bg-[var(--bg)] py-14 md:py-16">
        <div className="home-inner">
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow)] md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="section-eyebrow">About RedBridge</p>
                <h3 className="mt-2 font-display text-[2.25rem] leading-[0.98] text-[var(--text-main)] md:text-[2.75rem]">
                  Company Video Introduction
                </h3>
                <p className="mt-3 max-w-[560px] text-base leading-8 text-[var(--text-sub)]">
                  Get to know who we are, what we do, and how we help you succeed in Australia.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center gap-2 self-start text-sm font-bold text-[var(--accent)]">
                View All Videos
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {videoCards.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setActiveVideo(card)}
                  className="overflow-hidden rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg-card)] text-left shadow-[var(--shadow)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.poster}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute bottom-4 left-4 rounded-[8px] bg-black/70 px-3 py-1 text-xs font-bold text-white">
                      {card.duration}
                    </span>
                  </div>
                  <div className="px-5 py-5">
                    <h4 className="text-[1.52rem] leading-none text-[var(--text-main)]">{card.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
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
              aria-label="Close video"
            >
              <XIcon className="h-5 w-5" />
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
