"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function ContextBand() {
  const t = useTranslations("visa491.contextBand");

  return (
    <section
      style={{ fontFamily: font }}
      className="border-y border-primary/20 bg-primary/5 px-6 py-10 md:px-8"
    >
      <div className="mx-auto grid max-w-[920px] gap-5 md:grid-cols-[44px_1fr]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Info size={18} />
        </div>
        <div>
          <h3 className="mb-2 text-[16px] font-semibold text-foreground">
            {t("title")}
          </h3>
          <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.68)]">
            {t("body")}{" "}
            <Link
              href="/services/190-pathway"
              className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
            >
              {t("linkText")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}


