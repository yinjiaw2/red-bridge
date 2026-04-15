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
    <section id="contact" className="bg-background px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-serif text-[2.7rem] leading-[0.98] text-foreground md:text-[3.2rem]">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 rounded-[28px] border border-primary/15 bg-[linear-gradient(145deg,var(--card)_0%,color-mix(in_oklab,var(--card)_86%,var(--primary)_14%)_100%)] px-6 py-7 shadow-lg md:px-8 md:py-8">
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
                  className="rounded-[20px] border border-border bg-background px-5 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-[1.4rem] leading-none text-foreground">{card.title}</h3>
                  <div className="mt-4 space-y-1 text-base text-muted-foreground">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground/80">{card.caption}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95"
            >
              {t("primaryCta")}
            </Link>
            <p className="text-base text-muted-foreground">
              {t("secondaryPrefix")}{" "}
              <Link href="/booking" className="font-semibold text-primary underline underline-offset-4">
                {t("secondaryLink")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
