"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const contactIcons = [MapPin, Phone, Mail];

export function FaqContactSection() {
  const t = useTranslations("faqPage.contact");
  const cards = t.raw("cards") as Array<{
    title: string;
    lines: string[];
    caption: string;
    href: string;
  }>;

  return (
    <section id="contact" className="bg-secondary px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-lg font-bold uppercase tracking-[0.25em] text-highlight">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-serif text-[2.7rem] leading-[0.98] text-white md:text-[3.2rem]">
            {t("title1")} <span className="text-highlight">{t("title2")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-white/75">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 px-6 py-7 shadow-lg md:px-8 md:py-8">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = contactIcons[index] ?? Mail;
              const external = card.href.startsWith("http");

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="rounded-[20px] border border-white/10 bg-white/[0.06] px-5 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-highlight/35 hover:bg-white/10 hover:shadow-lg"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-[1.4rem] leading-none text-white">{card.title}</h3>
                  <div className="mt-4 space-y-1 text-base text-white/70">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-white/55">{card.caption}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-highlight px-8 py-4 text-base font-bold text-secondary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl"
            >
              {t("primaryCta")}
            </Link>
            <p className="text-base text-white/70">
              {t("secondaryPrefix")}{" "}
              <Link href="/contact" className="font-semibold text-highlight underline underline-offset-4">
                {t("secondaryLink")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

