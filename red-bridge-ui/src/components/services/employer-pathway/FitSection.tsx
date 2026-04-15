"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type FitBlock = {
  title: string;
  items: string[];
  note?: string;
  noteLinkText?: string;
  noteLinkHref?: string;
};

export default function FitSection() {
  const t = useTranslations("employerPathway.fit");
  const rawYes = t.raw("yes");
  const rawNo = t.raw("no");
  const yes = (rawYes ?? {}) as FitBlock;
  const no = (rawNo ?? {}) as FitBlock;
  const yesItems = Array.isArray(yes.items) ? yes.items : [];
  const noItems = Array.isArray(no.items) ? no.items : [];

  return (
    <section
      id="is-this-for-you"
      style={{ fontFamily: font }}
      className="bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")} <em className="not-italic text-primary">{t("title2")}</em>{" "}
            {t("title3")}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[10px] border border-border bg-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check size={18} className ="text-[#2d6a4f]"/>
              </div>
              <h3 className="text-[20px] font-semibold text-foreground">{yes.title}</h3>
            </div>
            <div className="space-y-3">
              {yesItems.map((item) => (
                <p key={item} className="flex items-start gap-3 text-[14px] leading-7 text-muted-foreground">
<Check size={14} className="mt-[4px] shrink-0 text-[#2d6a4f]" />
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[10px] border border-border bg-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <X size={18} />
              </div>
              <h3 className="text-[20px] font-semibold text-foreground">{no.title}</h3>
            </div>
            <div className="space-y-3">
              {noItems.map((item) => (
                <p key={item} className="flex gap-3 text-[14px] leading-7 text-muted-foreground">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </p>
              ))}
            </div>
            {no.note ? (
              <p className="mt-5 text-[13px] leading-6 text-muted-foreground">
                {no.note}{" "}
                {no.noteLinkText && no.noteLinkHref ? (
                  <Link
                    href={no.noteLinkHref}
                    className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
                  >
                    {no.noteLinkText}
                  </Link>
                ) : null}
              </p>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
}


