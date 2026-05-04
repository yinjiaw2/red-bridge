import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/services/career-launch/HeroSection";
import CareerTabsSection from "@/components/services/career-launch/CategoryTabsSection";
import TimelineSection from "@/components/services/career-launch/TimelineSection";
import CTASection from "@/components/services/career-launch/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Career Launch Program | Work Experience for International Graduates",
      description:
        "RedBridge's Career Launch Program helps international graduates in Australia gain verified work experience in Accounting, ICT, and Marketing — building the foundation for 482 employer sponsorship and PR.",
    },
    {
      title: "职业起航计划 | 留学生本地工作经验与482签证路径 | 红桥咨询",
      description:
        "RedBridge 职业起航计划面向国际毕业生，提供真实付薪澳洲本地工作经验、400+小时可记录实践，及技能评估与移民规划结构化支持。会计、ICT、市场营销方向。",
    },
    "/services/career-launch",
  );
}

export default function CareerLaunchPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <HeroSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
