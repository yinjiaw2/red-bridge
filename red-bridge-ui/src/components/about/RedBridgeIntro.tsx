import { useTranslations } from "next-intl";

export const RedBridgeIntro = () => {
  const t = useTranslations("aboutUs.intro");

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-gray-900 leading-tight mb-8">
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            {t("headingLine1")}
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            {t("headingLine2")}
          </span>
        </h1>

        {/* Body */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
          {t("body")}
        </p>
      </div>
    </section>
  );
};

export default RedBridgeIntro;
