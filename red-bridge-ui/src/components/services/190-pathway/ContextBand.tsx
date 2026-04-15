"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function ContextBand() {
  const t = useTranslations("visa190.contextBand");

  return (
    <section
      style={{ fontFamily: font }}
      className="border-y border-primary/20 bg-primary/5 px-6 py-10 md:px-8"
    >
      <div className="mx-auto grid max-w-[960px] gap-5 md:grid-cols-[44px_1fr]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Info size={18} />
        </div>
        <div>
          <h3 className="mb-2 text-[16px] font-semibold text-foreground">
            {t("title")}
          </h3>
          <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.68)]">
            {t("body")}{" "}
            <Link href="/services/491-pathway" className="text-primary underline underline-offset-4">
              {t("linkText")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}


