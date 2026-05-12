import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import HeroSection from "@/components/home/HeroSection";
import TrustSafetySection from "@/components/home/TrustSafetySection";
import SuccessTicker from "@/components/home/OutcomeTickerSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import EmployerNetwork from "@/components/home/EmployerNetworkSection";
import VideoSection from "@/components/home/VideoSection";
import Footer from "@/components/shared/Footer";
import { ContactSection } from "@/components/home/ContactSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title:
        "RedBridge Consulting | Australia Career and Recruitment Specialists",
      description:
        "Get placed with verified employers. Gain the right experience. Move from study to 482 visa and PR with confidence. Melbourne & Sydney's leading migration and career consultancy.",
    },
    {
      title: "红桥咨询 | 澳洲职业与招聘专家",
      description:
        "对接真实雇主，积累关键经验。从留学毕业求职到PR路径，走得更稳、更清晰。墨尔本与悉尼专业移民及职业咨询机构。",
    },
    "/",
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <HeroSection />
        <VideoSection />
        <TrustSafetySection />
        <SuccessTicker />
        <ComparisonSection />
        <EmployerNetwork />

        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
