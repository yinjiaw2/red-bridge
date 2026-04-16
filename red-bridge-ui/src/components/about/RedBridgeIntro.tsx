import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export const RedBridgeIntro = () => {
  const t = useTranslations("aboutUs.intro");

  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-gray-200 bg-[#f8f6f2]">
      <Image
        src="/about-assets/redbridge-sydney-desk.png"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,242,0.98)_0%,rgba(248,246,242,0.96)_36%,rgba(248,246,242,0.72)_52%,rgba(248,246,242,0.18)_75%,rgba(248,246,242,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,242,0.18)_0%,rgba(248,246,242,0)_42%,rgba(248,246,242,0.16)_100%)]" />

      <div className="relative z-10 flex min-h-[560px] items-center px-5 py-16 sm:px-[6%] lg:px-[6%]">
        <div className="max-w-[610px]">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-7 bg-brandred" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brandred">
              {t("eyebrow")}
            </span>
          </div>

          <h1 className="mb-7 font-serif text-[2.65rem] font-bold leading-[1.08] text-[#1f2937] sm:text-[3.45rem] lg:text-[4.2rem]">
            <span className="block">{t("headingLine1")}</span>
            <span className="block text-brandred">{t("headingLine2")}</span>
          </h1>

          <p className="max-w-[590px] text-[15px] leading-8 text-slate-600 sm:text-base">
            {t("body")}
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brandred px-7 text-sm font-bold text-white transition-colors hover:bg-red-800"
            >
              {t("primaryCta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-400 bg-white/30 px-7 text-sm font-bold text-slate-800 backdrop-blur-[2px] transition-colors hover:bg-white/55"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedBridgeIntro;
