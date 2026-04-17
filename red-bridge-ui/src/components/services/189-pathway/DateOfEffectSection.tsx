"use client";

import { useTranslations } from "next-intl";
import { Clock3 } from "lucide-react";

export default function DateOfEffectSection() {
  const t = useTranslations("visa189DateOfEffectSection");

  return (
    <section id="doe" className="border-b border-border bg-background px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-lg leading-8 text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-8 rounded-none border border-border bg-muted px-8 py-12 md:grid-cols-[auto_1fr] md:px-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Clock3 className="h-8 w-8 text-primary" />
          </div>

          <div>
            <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">{t("card.title")}</h3>

            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              <strong className="font-bold text-foreground">{t("card.p1Strong")}</strong>
              {t("card.p1")}
            </p>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">{t("card.p2")}</p>

            <div className="mt-2 rounded-none border border-border bg-card px-6 py-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">{t("example.strong")}</strong>
                {t("example.text")}
              </p>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("card.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
