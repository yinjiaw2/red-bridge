"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  MessageCircle,
  ExternalLink,
  Phone,
  Calendar,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQRawItem {
  question: string;
  answer?: string;
  bold1?: string; text1?: string; bold2?: string; text2?: string;
  prefix?: string; bold?: string; suffix?: string;
  linkText?: string; linkHref?: string; isExternal?: boolean;
  row1Label?: string; row1Link?: string; row1Href?: string;
  row2Label?: string; row2Link?: string; row2Href?: string;
  row3Label?: string; row3Link?: string; row3Href?: string;
  row4Label?: string; row4Link?: string; row4Href?: string;
  row5Label?: string; row5Link?: string; row5Href?: string;
  bookingCta?: string;
  addressLabel?: string; address?: string; phone?: string; onlineBooking?: string;
}

function renderAnswer(item: FAQRawItem) {
  if (item.answer) return <>{item.answer}</>;

  if (item.bold1) {
    return (
      <>
        <strong>{item.bold1}</strong>{item.text1}
        <strong>{item.bold2}</strong>{item.text2}
      </>
    );
  }

  if (item.bold && !item.linkText) {
    return <>{item.prefix}<strong>{item.bold}</strong>{item.suffix}</>;
  }

  if (item.linkText && !item.row1Label) {
    if (item.isExternal) {
      return (
        <>
          {item.prefix}
          <a href={item.linkHref} target="_blank" rel="noopener noreferrer"
            className="text-[#7c5a43] underline inline-flex items-center gap-1">
            {item.linkText} <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
          {item.suffix}
        </>
      );
    }
    return (
      <>
        {item.prefix}
        <Link href={item.linkHref!} className="text-[#b45309] underline mx-1">
          {item.linkText}
        </Link>
        {item.suffix}
      </>
    );
  }

  if (item.row1Label) {
    const rows = [
      { label: item.row1Label, link: item.row1Link!, href: item.row1Href! },
      { label: item.row2Label!, link: item.row2Link!, href: item.row2Href! },
      { label: item.row3Label!, link: item.row3Link!, href: item.row3Href! },
      { label: item.row4Label!, link: item.row4Link!, href: item.row4Href! },
      { label: item.row5Label!, link: item.row5Link!, href: item.row5Href! },
    ];
    return (
      <div className="space-y-3">
        {rows.map((row, i) => (
          <p key={i}>
            <strong>{row.label}</strong>{" "}
            <Link href={row.href} className="text-[#7c5a43] underline">{row.link}</Link>
          </p>
        ))}
        <Link href="/booking" className="inline-flex items-center gap-2 mt-2 font-bold text-[#b45309]">
          {item.bookingCta}
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  if (item.addressLabel) {
    return (
      <div className="space-y-2">
        <p>{item.addressLabel}<strong>{item.address}</strong></p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href={`tel:${item.phone?.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-[#7c5a43] font-bold">
            <Phone className="h-4 w-4" aria-hidden="true" /> {item.phone}
          </a>
          <Link href="/booking" className="flex items-center gap-2 text-[#b45309] font-bold">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> {item.onlineBooking}
          </Link>
        </div>
      </div>
    );
  }

  return null;
}

export const FAQSection = () => {
  const t = useTranslations("faq");
  const items = t.raw("items") as FAQRawItem[];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#fbf9f4] py-24 px-[5%]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
            {t("eyebrow")}
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}
            <span className="text-[#7c5a43] italic ml-2">{t("headingHighlight")}</span>
            {t("headingSuffix")}
          </h2>
          <p className="text-[#928276] text-lg">{t("description")}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-[#7c5a43] bg-white shadow-xl shadow-[#7c5a43]/5"
                    : "border-[#e8dfd4] bg-[#f5f1ea]/30"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? "text-[#7c5a43]" : "text-[#2d241e]"}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#a28e7e] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#7c5a43]" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-6 pt-0 text-[#928276] leading-relaxed border-t border-[#e8dfd4]/50">
                    {renderAnswer(item)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
