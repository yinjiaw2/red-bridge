import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AboutStory from "@/components/v2/about/AboutStory";
import AboutTeam from "@/components/v2/about/AboutTeam";
import AboutValues from "@/components/v2/about/AboutValues";
import AboutLegalPartner from "@/components/v2/about/AboutLegalPartner";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "About RedBridge | Melbourne Migration & Career Consultancy",
      description:
        "RedBridge was founded to give skilled professionals from China and Southeast Asia honest, direct access to Australia's employer sponsorship system. Based in Docklands, Melbourne.",
      keywords: [
        "migration agent", "visa consultant", "immigration consulting",
        "migration services", "career consulting", "career placement services",
        "employer sponsored visa", "482 visa australia", "placement services",
      ],
    },
    {
      title: "关于红桥咨询 | 墨尔本移民与职业发展机构",
      description:
        "红桥咨询成立的初衷，是为中国及东南亚技术专业人士提供真实透明的澳洲雇主担保移民路径支持。团队驻扎于墨尔本Docklands，本地服务，全程陪伴。",
    },
    "/about",
  );
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <AboutStory />
        <AboutTeam />
        <AboutValues />
        <AboutLegalPartner />
        <AboutCtaSection />
        <Footer />
      </main>
    </>
  );
}
