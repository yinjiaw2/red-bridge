import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

type Country = {
  label: string;
  title: string;
};

type Stat = {
  value: string;
  label: string;
};

export default function HeroSection() {
  const t = useTranslations("hero");
  const countries = t.raw("countries") as Country[];
  const trustPoints = t.raw("trustPoints") as string[];
  const stats = t.raw("stats") as Stat[];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fff8f1_0%,#fff_40%,#fff7ee_100%)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/30 blur-3xl sm:h-96 sm:w-96"
        />

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-medium text-orange-900 shadow-sm shadow-orange-100/70 backdrop-blur">
            <ShieldCheck
              className="h-4 w-4 text-orange-600"
              aria-hidden="true"
            />
            <span>{t("badge")}</span>
          </div>

          <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-7xl">
            {t("titlePrefix")}
            <span className="mx-2 inline-block bg-[linear-gradient(135deg,#b45309,#f97316)] bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            {t("titleMiddle")}
            <br />
            {t("titleSuffix")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
            <strong className="font-semibold text-stone-950">
              {t("introLead")}
            </strong>
            {t("introCountriesPrefix")}{" "}
            {countries.map((country, index) => (
              <span key={country.title}>
                <span
                  title={country.title}
                  className="font-medium text-stone-900 underline decoration-orange-200 underline-offset-4"
                >
                  {country.label}
                </span>
                {index < countries.length - 1 ? " " : " "}
              </span>
            ))}
            {t("introCountriesSuffix")}
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-left">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking?src=home_hero_cta&lang=zh"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#b45309,#f97316)] px-8 text-base font-semibold text-white shadow-lg shadow-orange-300/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-300/50"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="/zh/success-cases.html"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-stone-300 bg-white px-8 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value + stat.label}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 text-center shadow-lg shadow-stone-200/50 backdrop-blur"
            >
              <div className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 whitespace-pre-line text-sm leading-6 text-stone-600 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
