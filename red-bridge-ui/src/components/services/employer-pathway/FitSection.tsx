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
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")} <em className="not-italic text-[#bf6b35]">{t("title2")}</em>{" "}
            {t("title3")}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(90,125,94,0.1)] text-[#5a7d5e]">
                <Check size={18} />
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a1f14]">{yes.title}</h3>
            </div>
            <div className="space-y-3">
              {yesItems.map((item) => (
                <p key={item} className="flex gap-3 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5a7d5e]" />
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(168,80,30,0.08)] text-[#bf6b35]">
                <X size={18} />
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a1f14]">{no.title}</h3>
            </div>
            <div className="space-y-3">
              {noItems.map((item) => (
                <p key={item} className="flex gap-3 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#bf6b35]" />
                  {item}
                </p>
              ))}
            </div>
            {no.note ? (
              <p className="mt-5 text-[13px] leading-6 text-[rgba(42,31,20,0.52)]">
                {no.note}{" "}
                {no.noteLinkText && no.noteLinkHref ? (
                  <Link href={no.noteLinkHref} className="text-[#a8501e] underline underline-offset-4">
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
