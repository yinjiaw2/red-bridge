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
      title: "186 Direct Entry Sponsorship | Permanent Residency via Employer | RedBridge",
      description:
        "Skip the 482 and go straight to Australian Permanent Residency. RedBridge matches experienced professionals (3+ years) with employers willing to nominate directly for a Subclass 186 Direct Entry visa.",
      keywords: [
        "186 direct entry sponsor", "186 de visa employer pathway",
        "permanent residency employer sponsorship", "186 visa direct entry australia",
        "employer nomination scheme 186 de", "subclass 186 direct entry",
        "186 de sponsorship", "skip 482 straight to pr",
        "permanent residency employer nomination", "186 visa australia employer",
      ],
    },
    {
      title: "186直接入境雇主担保 | 通过雇主获得永久居留 | 红桥咨询",
      description:
        "跳过482，直达澳洲永居。红桥咨询为拥有3年以上经验的专业人士匹配愿意提名186直接入境签证的雇主，实现快速永居目标。",
    },
    "/services/employer-pathway/186-direct-entry-sponsorship",
  );
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "186 Direct Entry Sponsorship — Permanent Residency via Employer",
  provider: { "@type": "Organization", name: "RedBridge Consulting" },
  description:
    "RedBridge matches senior professionals with 3+ years of recent experience to Australian employers willing to nominate directly for a Subclass 186 Employer Nomination Scheme Direct Entry permanent visa.",
  areaServed: { "@type": "Country", name: "Australia" },
  url: "https://redbridge-consulting.com.au/services/employer-pathway/186-direct-entry-sponsorship",
};

export default function DirectEntrySponsorshipPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SpokeLayout
          ns="spokes.directEntry"
          ctasrc="spoke_direct_entry"
          hubHref="/services/employer-pathway"
        />
      </main>
      <Footer />
    </>
  );
}
