import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { ForEmployersHero, HiringPainPoints, ThreePhases, FeesTable, DivisionRoles } from "@/components/v2/employers/ForEmployersSections";
import EmployerEnquirySection from "@/components/for-employers/table/EmployerEnquirySection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Hire & Sponsor Skilled Migrants | 482 Visa Employer Guide | RedBridge",
      description:
        "RedBridge connects Melbourne employers with work-ready ICT, accounting, and marketing professionals. We manage the complete 482 sponsorship process—from standard business sponsorship to nomination and visa grant.",
      keywords: [
        "employer sponsored visa", "482 visa", "482 employer sponsored visa",
        "employer sponsorship", "sponsor visa australia 482", "tss visa",
        "skills in demand visa", "company sponsorship visa", "visa sponsorship",
        "186 visa requirements", "186 visa", "what is 186 visa",
        "employer nomination scheme subclass 186", "subclass 186", "visa 186",
        "work sponsorship visa", "sponsorship visa australia",
        "migration services", "immigration consulting",
      ],
    },
    {
      title: "雇用并担保技术人才 | 482签证雇主指南 | 红桥咨询",
      description:
        "红桥咨询为墨尔本雇主提供现成可用的ICT、会计和市场营销专业人才。我们全程管理482担保流程——从标准商业担保到提名申请，直至签证获批。",
    },
    "/for-employers-v2",
  );
}

export default function ForEmployersV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <ForEmployersHero />
        <HiringPainPoints />
        <ThreePhases />
        <DivisionRoles />
        <FeesTable />
        <EmployerEnquirySection />
        <Footer />
      </main>
    </>
  );
}
