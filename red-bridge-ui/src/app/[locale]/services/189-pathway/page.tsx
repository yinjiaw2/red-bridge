import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import ReviewedBanner from "@/components/services/189-pathway/ReviewedBanner";
import HeroSection from "@/components/services/189-pathway/HeroSection";
import ContextBand from "@/components/services/189-pathway/ContextBand";
import PointsSection from "@/components/services/189-pathway/PointsSection";
import OccupationRealitySection from "@/components/services/189-pathway/OccupationRealitySection";
import DateOfEffectSection from "@/components/services/189-pathway/DateOfEffectSection";
import StrategySection from "@/components/services/189-pathway/StrategySection";
import ProcessSection from "@/components/services/189-pathway/ProcessSection";
import RelatedPathwaysSection from "@/components/services/189-pathway/RelatedPathwaysSection";
import CTABandSection from "@/components/services/189-pathway/CTABandSection";
import InsightIdeaLinkBar from "@/components/services/InsightIdeaLinkBar";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Subclass 189 Skilled Independent Visa | Points-Tested PR Pathway",
      description:
        "Apply for the Australian subclass 189 skilled independent visa. No employer or state sponsor required. RedBridge explains points requirements, eligible occupations, and your strategy to reach PR.",
      keywords: [
        "skills in demand visa", "migration agent", "migration services",
        "immigration consulting", "visa consultant", "189 visa",
        "skilled independent visa", "482 visa australia", "employer sponsored visa",
      ],
    },
    {
      title: "189技术独立签证 | 积分制永居申请路径 | 红桥咨询",
      description:
        "无需雇主担保，无需州提名。189签证是澳洲最纯粹的技术移民路径。RedBridge 帮您精准规划每一分，梳理职业清单与申请策略，提高获邀概率。",
    },
    "/services/189-pathway",
  );
}

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="pt-16 md:pt-24">
        <HeroSection />
        <ReviewedBanner />
        <PointsSection />
        <OccupationRealitySection />
        <DateOfEffectSection />
        <StrategySection />
        <ProcessSection />
        <RelatedPathwaysSection />
        <InsightIdeaLinkBar />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}
