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
      title: "482 Visa No Experience | Career Launch Program | RedBridge",
      description:
        "Don't have 2 years of work experience for a 482 visa? RedBridge's Career Launch Program places you in a verified Australian role to legally build your experience record and qualify for employer sponsorship.",
      keywords: [
        "482 visa no experience", "bridge skills gap australia",
        "employer sponsorship training visa", "482 visa graduate",
        "working holiday 482 visa", "482 visa without experience",
        "career launch program australia", "build experience for 482 visa",
        "482 visa pathway fresh graduate",
      ],
    },
    {
      title: "482签证无经验路径 | 职业起航计划 | 红桥咨询",
      description:
        "还没有2年工作经验申请482签证？红桥咨询的职业起航计划将您安置于经核实的澳洲企业，帮您合法积累经验，为雇主担保资格打下基础。",
    },
    "/services/employer-pathway/career-launch-program",
  );
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Career Launch Program — 482 Visa Experience Pathway",
  provider: { "@type": "Organization", name: "RedBridge Consulting" },
  description:
    "A structured 12-month paid placement program for graduates and career changers who do not yet meet the 2-year experience requirement for a 482 employer-sponsored visa.",
  areaServed: { "@type": "Country", name: "Australia" },
  url: "https://redbridge-consulting.com.au/services/employer-pathway/career-launch-program",
};

export default function CareerLaunchProgramPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SpokeLayout
          ns="spokes.careerLaunch"
          ctasrc="spoke_career_launch"
          hubHref="/services/employer-pathway"
        />
      </main>
      <Footer />
    </>
  );
}
