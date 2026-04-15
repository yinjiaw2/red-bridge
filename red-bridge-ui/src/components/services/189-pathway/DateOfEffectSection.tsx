"use client";

import { useTranslations } from "next-intl";
import { Clock3 } from "lucide-react";

export default function DateOfEffectSection() {
  const t = useTranslations("visa189DateOfEffectSection");

  return (
    <section
      id="doe"
      className="bg-white px-6 py-24 md:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brandred">
            <span className="h-px w-6 bg-brandred" />
            {t("eyebrow")}
          </div>

          <h2 className="text-4xl font-bold leading-tight font-serif text-naviblue md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-brandred">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-8 rounded-none border border-gray-200 bg-gray-50 px-8 py-12 md:grid-cols-[auto_1fr] md:px-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-none bg-brandred/10">
            <Clock3 className="h-8 w-8 text-brandred" />
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-bold text-naviblue font-serif">
              {t("card.title")}
            </h3>

            <p className="mb-4 text-base leading-relaxed text-gray-700">
              <strong className="font-bold text-naviblue">
                {t("card.p1Strong")}
              </strong>
              {t("card.p1")}
            </p>

            <p className="mb-6 text-base leading-relaxed text-gray-700">
              {t("card.p2")}
            </p>

            <div className="mt-2 rounded-none bg-white border border-gray-200 px-6 py-5">
              <p className="text-base leading-relaxed text-gray-700">
                <strong className="font-bold text-naviblue">
                  {t("example.strong")}
                </strong>
                {t("example.text")}
              </p>
            </div>

            <p className="mt-6 text-base leading-relaxed text-gray-700">
              {t("card.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
