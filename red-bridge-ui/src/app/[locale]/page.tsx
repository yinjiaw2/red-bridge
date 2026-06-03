import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/v2/home/HomeHero";
import HomeTicker from "@/components/v2/home/HomeTicker";
import HomeEmployerNetwork from "@/components/v2/home/HomeEmployerNetwork";
import V2TrustSection from "@/components/v2/home/V2TrustSection";
import V2WhySection from "@/components/v2/home/V2WhySection";
import V2ComparisonSection from "@/components/v2/home/V2ComparisonSection";
import V2VideoSection from "@/components/v2/home/V2VideoSection";
import PageCTA from "@/components/v2/shared/PageCTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "RedBridge Consulting | Employer Sponsored Visa & Career Placement Australia",
      description:
        "Melbourne-based migration and career consultancy specialising in 482 employer sponsorship, 186 PR pathways, and skilled migration. Matched to verified employers in ICT, accounting, and marketing.",
      keywords: [
        "482 visa australia", "employer sponsored visa", "employer sponsorship",
        "visa sponsorship", "migration services", "immigration consulting",
        "career consulting", "migration agent", "visa consultant",
        "career placement services", "job placement services", "482 visa",
        "tss visa", "482 to pr", "482 visa to pr", "sponsorship visa australia",
      ],
    },
    {
      title: "红桥咨询 | 澳洲雇主担保签证与职业发展专家",
      description:
        "墨尔本专业移民与职业咨询机构。对接经核实的482雇主担保，技能评估支持，482→186永居全程规划。覆盖ICT、会计与市场营销方向。",
    },
    "/",
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HomeHero />
        <HomeTicker />
        <HomeEmployerNetwork />
        <V2TrustSection />
        <V2WhySection />
        <V2ComparisonSection />
        <V2VideoSection />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}
