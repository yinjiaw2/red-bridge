import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import CTABandSection from "@/components/services/employer-pathway/CTABandSection";
import HeroSection from "@/components/services/employer-pathway/HeroSection";
import IndustrySection from "@/components/services/employer-pathway/IndustrySection";
import PathwaysSection from "@/components/services/employer-pathway/PathwaysSection";
import PaymentNodeSection from "@/components/services/employer-pathway/PaymentNodeSection";
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
      keywords: [
        "what is 482 visa", "what is 482 visa in australia", "482 visa",
        "482 visa australia", "482 visa requirements", "482 visa conditions",
        "482 visa application fee", "482 visa maternity leave", "482 visa to pr",
        "482 to pr", "482 to pr pathway", "new rules for 482 visa to permanent residency",
        "visa 482", "visa 482 to pr", "visa 482 australia", "482 work visa",
        "482 employer sponsored visa", "employer sponsored visa 482",
        "tss 482 visa", "tss visa", "gk 482 visa", "sponsorship visa australia",
        "sponsorship visa 482", "sponsor visa 482", "sponsor visa australia 482",
        "employer sponsored visa", "employer sponsorship", "work sponsorship visa",
        "company sponsorship visa", "visa sponsorship", "seek sponsorship jobs",
        "visa sponsorship jobs", "visa sponsorship jobs in australia",
        "what is 186 visa", "186 visa", "186 visa requirements", "186 visa australia",
        "visa 186", "employer nomination scheme subclass 186", "subclass 186",
        "migration services", "immigration consulting", "migration agent", "visa consultant",
      ],
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

      <main className="overflow-hidden pt-[70px] md:pt-24">
        <HeroSection />
        <ReviewedBanner />

        <PathwaysSection />
        <ServiceIntroSection />
        <PaymentNodeSection />
        <IndustrySection />
        <PromiseSection />

        <InsightIdeaLinkBar />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}
