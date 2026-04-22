import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import RedBridgeIntro from "@/components/about/RedBridgeIntro";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import LegalPartnerSection from "@/components/about/LegalPartnerSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "About Us | Australian Migration & Career Specialists",
      description:
        "RedBridge Consulting is a registered Australian migration and career placement consultancy based in Melbourne's Docklands. Meet our team and learn how we help skilled professionals reach permanent residency.",
    },
    {
      title: "关于我们 | 红桥咨询",
      description:
        "RedBridge 专注职业发展与雇主匹配。帮助您积累真实本地经验、对接担保雇主，与持牌法律合作伙伴协调签证事务。墨尔本 Docklands 本地团队。",
    },
    "/about",
  );
}

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <RedBridgeIntro />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <LegalPartnerSection />
        <AboutCtaSection />
      </main>
      <Footer />
    </>
  );
}
