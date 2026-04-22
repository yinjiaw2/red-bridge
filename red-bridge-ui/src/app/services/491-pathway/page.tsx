import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import CTABandSection from "@/components/services/491-pathway/CTABandSection";
import ContextBand from "@/components/services/491-pathway/ContextBand";
import DifferenceSection from "@/components/services/491-pathway/DifferenceSection";
import HeroSection from "@/components/services/491-pathway/HeroSection";
import Pathway191Section from "@/components/services/491-pathway/Pathway191Section";
import ProcessSection from "@/components/services/491-pathway/ProcessSection";
import RegionalAreasSection from "@/components/services/491-pathway/RegionalAreasSection";
import RelatedPathwaysSection from "@/components/services/491-pathway/RelatedPathwaysSection";
import RequirementsSection from "@/components/services/491-pathway/RequirementsSection";
import ReviewedBanner from "@/components/services/491-pathway/ReviewedBanner";
import TradeoffSection from "@/components/services/491-pathway/TradeoffSection";
import Footer from "@/components/shared/Footer";
import InsightIdeaLinkBar from "@/components/services/InsightIdeaLinkBar";
import NavBar from "@/components/shared/NavBar";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Subclass 491 Regional Skilled Visa | 15 Bonus Points for PR",
      description:
        "The subclass 491 regional skilled visa gives you 15 extra points toward your EOI and a clear pathway to permanent residency via subclass 191. RedBridge explains eligible areas, requirements, and trade-offs.",
    },
    {
      title: "491偏远地区技术签证 | 额外15分通向PR | 红桥咨询",
      description:
        "491签证提供技术移民系统最多单项加分——15分。在维州偏远地区生活工作3年后，通过191签证直达永居。RedBridge 解析可申请地区、条件与取舍权衡。",
    },
    "/services/491-pathway",
  );
}

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden pt-[70px]">
        <HeroSection />
        <ReviewedBanner />
        <DifferenceSection />
        <TradeoffSection />
        <ContextBand />
        <RegionalAreasSection />
        <RequirementsSection />
        <ProcessSection />
        <Pathway191Section />
        <RelatedPathwaysSection />
        <InsightIdeaLinkBar />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}
