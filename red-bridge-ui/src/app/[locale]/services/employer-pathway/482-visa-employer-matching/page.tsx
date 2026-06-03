import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SpokeLayout from "@/components/v2/services/spokes/SpokeLayout";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Find a 482 Visa Sponsor | Employer Matching Australia | RedBridge",
      description:
        "Have 1–3 years of experience but can't find an Australian employer willing to sponsor you? RedBridge matches you to vetted 482 sponsors and manages the entire sponsorship process — SBS, nomination, and visa.",
      keywords: [
        "find 482 visa sponsor", "subclass 482 visa employer matching",
        "transition 482 to 186 visa", "482 visa employer australia",
        "482 sponsor australia", "482 tss visa employer match",
        "how to find 482 sponsor", "482 visa employer network",
        "482 to 186 trt stream",
      ],
    },
    {
      title: "寻找482签证担保雇主 | 雇主匹配服务 | 红桥咨询",
      description:
        "已有1至3年工作经验却找不到愿意担保的澳洲雇主？红桥咨询将您与经核实的482担保雇主匹配，并全程管理SBS申请、提名及签证流程。",
    },
    "/services/employer-pathway/482-visa-employer-matching",
  );
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "482 Visa Employer Matching — Subclass 482 TSS Sponsorship",
  provider: { "@type": "Organization", name: "RedBridge Consulting" },
  description:
    "RedBridge matches skilled professionals with 1–3 years of experience to verified Australian employers willing to sponsor a Subclass 482 TSS visa, and manages the complete sponsorship process through to 186 TRT permanent residency.",
  areaServed: { "@type": "Country", name: "Australia" },
  url: "https://redbridge-consulting.com.au/services/employer-pathway/482-visa-employer-matching",
};

export default function EmployerMatchingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SpokeLayout
          ns="spokes.employerMatching"
          ctasrc="spoke_employer_matching"
          hubHref="/services/employer-pathway"
        />
      </main>
      <Footer />
    </>
  );
}
