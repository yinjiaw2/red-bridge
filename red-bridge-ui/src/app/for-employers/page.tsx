import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import EmployerNetworkSection from "@/components/for-employers/EmployerNetworkSection";
import SkillsgGapSection from "@/components/for-employers/SkillGapSection";
import EmployerProcessSection from "@/components/for-employers/EmployerProcessSection";
import EmployerFeesSection from "@/components/for-employers/EmployerFeesSection";
import EmployerObligationsSection from "@/components/for-employers/EmployerObligationsSection";
import EmployerPartnershipSection from "@/components/for-employers/EmployerPartnershipSection";
import EmployerDifferenceSection from "@/components/for-employers/EmployerDifferenceSection";
import EmployerFaqSection from "@/components/for-employers/EmployerFaqSection";
import EmployerEnquirySection from "@/components/for-employers/table/EmployerEnquirySection";
import EmployerCtaSection from "@/components/for-employers/EmployerCtaSection";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "For Employers | Hire & Sponsor Skilled Workers in Australia",
      description:
        "Partner with RedBridge to hire pre-vetted international talent, manage Standard Business Sponsorship (SBS), Labour Market Testing, and 482/186 visa nominations in Melbourne and Sydney.",
    },
    {
      title: "雇主专区 | 招募与担保技术人才 | 红桥咨询",
      description:
        "与RedBridge合作，招募经核实的国际技术人才，管理标准商业担保（SBS）、劳动力市场测试及482/186签证提名。墨尔本与悉尼全覆盖。",
    },
    "/for-employers",
  );
}

export default function EmployersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <EmployerNetworkSection />
        <SkillsgGapSection />
        <EmployerProcessSection />
        <EmployerFeesSection />
        <EmployerObligationsSection />
        <EmployerPartnershipSection />
        <EmployerDifferenceSection />
        <EmployerFaqSection />
        <EmployerEnquirySection />
        <EmployerCtaSection />
      </main>
      <Footer />
    </>
  );
}
