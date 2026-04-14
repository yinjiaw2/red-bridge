import { useTranslations } from "next-intl";

export const RedBridgeIntro = () => {
  const t = useTranslations("aboutUs.intro");

  return (
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-px bg-[#A20000]" />
          <span className="text-[0.7rem] font-bold tracking-[0.22em] text-[#A20000] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-[#1a1209] leading-tight mb-8">
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            {t("headingLine1")}
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            {t("headingLine2")}
          </span>
        </h1>

        {/* Body */}
        <p className="text-[#6b5a4e] text-base md:text-lg leading-relaxed max-w-2xl">
          {t("body")}
        </p>
      </div>
    </section>
  );
};

export default RedBridgeIntro;
