import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import HeroSection from "@/components/services/190-pathway/Herosection";
import ReviewedBanner from "@/components/services/190-pathway/ReviewedBanner";
import ComparisonSection from "@/components/services/190-pathway/ComparisonSection";
import ContextBand from "@/components/services/190-pathway/ContextBand";
import RoiExplainerSection from "@/components/services/190-pathway/RoiExplainerSection";
import RequirementsSection from "@/components/services/190-pathway/RequirementsSection";
import VictoriaPrioritiesSection from "@/components/services/190-pathway/VictoriaPrioritiesSection";
import SelectionFactorsSection from "@/components/services/190-pathway/SelectionFactorsSection";
import ProcessSection from "@/components/services/190-pathway/ProcessSection";
import CTABandSection from "@/components/services/190-pathway/CTABandSection";
import RelatedPathwaysSection from "@/components/services/190-pathway/RelatedPathwaysSection";
import Footer from "@/components/shared/Footer";
import InsightIdeaLinkBar from "@/components/services/InsightIdeaLinkBar";
import NavBar from "@/components/shared/NavBar";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Subclass 190 State Nominated Visa | Victoria Skilled Migration",
      description:
        "Apply for the Victoria subclass 190 state nomination, which adds 5 bonus points toward your Expression of Interest. RedBridge covers priority occupations, selection factors, and the full process.",
    },
    {
      title: "190技术提名签证 | 维州州提名额外5分 | 红桥咨询",
      description:
        "维州190州担保为您增加5分，进入独立筛选池，无需直接与全国EOI竞争。RedBridge 解析维州优先职业、申请条件与选拔因素。",
    },
    "/services/190-pathway",
  );
}

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden pt-[70px] md:pt-24">
        <HeroSection />
        <ReviewedBanner />
        <ComparisonSection />
        <ContextBand />
        <RoiExplainerSection />
        <RequirementsSection />
        <VictoriaPrioritiesSection />
        <SelectionFactorsSection />
        <ProcessSection />
        <InsightIdeaLinkBar />
        <CTABandSection />
        <RelatedPathwaysSection />
      </main>

      <Footer />
    </>
  );
}
