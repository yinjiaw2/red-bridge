"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { videoCards } from "@/components/home/home-data";
import { XIcon } from "@/components/home/icons";

type VideoCard = (typeof videoCards)[number];

export function VideoGallery() {
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
      <section id="videos" className="w-full bg-[var(--bg)] py-10 md:py-14">
        <div className="home-inner">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)] md:px-8 md:py-8">
            <div className="max-w-[700px]">
              <p className="section-eyebrow">Video Stories</p>
              <h2 className="mt-3 text-[2.4rem] leading-[0.98] text-[var(--text-main)] md:text-[3rem]">
                Hear How Clients Describe the Journey
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-sub)]">
                These conversations complement the written case studies below and use the same privacy-first, outcomes-first
                approach.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {videoCards.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setActiveVideo(card)}
                  className="overflow-hidden rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] text-left shadow-[var(--shadow)] hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.poster}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/72 px-3 py-1 text-xs font-bold text-white">
                      {card.duration}
                    </span>
                  </div>

                  <div className="px-5 py-5">
                    <h3 className="text-[1.55rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)]">Open video story</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(26,32,37,0.84)] px-4 py-6"
          onClick={() => setActiveVideo(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[26px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/75"
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
