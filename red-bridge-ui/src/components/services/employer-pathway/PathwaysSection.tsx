"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Panel = {
  id: string;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
  leftTitle: string;
  leftItems: Array<{ title: string; desc: string }>;
  rightTitle: string;
  rightItems: Array<{ title: string; desc: string }>;
  chips: string[];
  note: string;
  buttonText: string;
  buttonHref: string;
};

export default function PathwaysSection() {
  const t = useTranslations("employerPathway.pathways");
  const rawPanels = t.raw("panels");
  const panels = Array.isArray(rawPanels) ? (rawPanels as Panel[]) : [];
  const [activeId, setActiveId] = useState(panels[0]?.id ?? "");
  const activePanel = panels.find((panel) => panel.id === activeId) ?? panels[0];

  return (
    <section
      id="pathways"
      style={{ fontFamily: font }}
      className="bg-muted px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")} <em className="not-italic text-primary">{t("title2")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActiveId(panel.id)}
              className={`rounded-full border px-5 py-3 text-[13px] font-semibold ${
                activeId === panel.id
                  ? "border-transparent bg-primary text-white shadow-sm"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        {activePanel ? (
          <div className="overflow-hidden rounded-[12px] border border-border bg-card shadow-[0_4px_24px_rgba(42,31,20,0.08)]">
            <div className="bg-primary px-8 py-10 text-white">
              <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85">
                {activePanel.badge}
              </div>
              <h3 className="text-[32px] font-semibold leading-tight">{activePanel.title}</h3>
              <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-white/75">{activePanel.subtitle}</p>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    {activePanel.leftTitle}
                  </h4>
                  <div className="space-y-4">
                    {activePanel.leftItems.map((item) => (
                      <div key={item.title} className="rounded-[8px] border border-border bg-background p-4">
                        <div className="text-[14px] font-semibold text-foreground">{item.title}</div>
                        <p className="mt-1 text-[13px] leading-6 text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    {activePanel.rightTitle}
                  </h4>
                  <div className="space-y-4">
                    {activePanel.rightItems.map((item) => (
                      <div key={item.title} className="rounded-[8px] border border-border bg-background p-4">
                        <div className="text-[14px] font-semibold text-foreground">{item.title}</div>
                        <p className="mt-1 text-[13px] leading-6 text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {activePanel.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[12px] font-medium text-primary">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[8px] border-l-[3px] border-primary bg-primary/5 px-5 py-4 text-[14px] leading-7 text-muted-foreground">
                {activePanel.note}
              </div>

              <Link
                href={activePanel.buttonHref}
                className="mt-7 inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-white"
              >
                {activePanel.buttonText}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


