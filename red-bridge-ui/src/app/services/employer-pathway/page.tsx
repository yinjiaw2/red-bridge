import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import CTABandSection from "@/components/services/employer-pathway/CTABandSection";
import FitSection from "@/components/services/employer-pathway/FitSection";
import HeroSection from "@/components/services/employer-pathway/HeroSection";
import IndustrySection from "@/components/services/employer-pathway/IndustrySection";
import PathwaysSection from "@/components/services/employer-pathway/PathwaysSection";
import PromiseSection from "@/components/services/employer-pathway/PromiseSection";
import ReviewedBanner from "@/components/services/employer-pathway/ReviewedBanner";
import ServiceIntroSection from "@/components/services/employer-pathway/ServiceIntroSection";
import InsightIdeaLinkBar from "@/components/services/InsightIdeaLinkBar";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title:
        "482 Employer Sponsored Visa | From Work Visa to Permanent Residency",
      description:
        "RedBridge connects skilled professionals with verified Australian employers for 482 TSS visa sponsorship and the 186 permanent residency pathway. Melbourne & Sydney-based placements in Accounting, ICT, and Marketing.",
    },
    {
      title: "482雇主担保签证 | 从工签到永居全程陪同 | 红桥咨询",
      description:
        "RedBridge 为技术人才对接经核实的澳洲雇主，全程陪同482临时担保及186永居路径。墨尔本与悉尼，覆盖会计、ICT及市场营销方向。",
    },
    "/services/employer-pathway",
  );
}

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden pt-[70px]">
        <HeroSection />
        <ReviewedBanner />
        <FitSection />
        <PathwaysSection />

        <IndustrySection />
        <PromiseSection />
        <ServiceIntroSection />
        <InsightIdeaLinkBar />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}
