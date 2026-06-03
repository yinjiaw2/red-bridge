import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SuccessQuote from "@/components/v2/success/SuccessQuote";
import TrustPillars from "@/components/v2/success/TrustPillars";
import SuccessCards from "@/components/v2/success/SuccessCards";
import PageCTA from "@/components/v2/shared/PageCTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Client Success Stories | 482 & 186 Visa Outcomes | RedBridge",
      description:
        "Real outcomes from RedBridge clients—ICT specialists, accountants, and marketing professionals who secured Australian employer sponsorship and permanent residency via the 482 and 186 pathways.",
      keywords: [
        "482 visa", "186 visa", "employer sponsored visa", "482 to pr",
        "visa 482 to pr", "migration services", "employer sponsorship",
        "visa sponsorship", "482 visa australia", "career placement services",
      ],
    },
    {
      title: "客户成功案例 | 482与186签证真实成果 | 红桥咨询",
      description:
        "红桥咨询客户的真实成果——ICT专家、会计师及市场营销专业人士通过482和186签证路径，成功获得澳洲雇主担保及永久居留权。",
    },
    "/success-cases",
  );
}

export default function SuccessCasesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SuccessQuote />
        <TrustPillars />
        <SuccessCards />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}
