import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import FAQSection from "@/components/v2/faq/FAQSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "482 & 186 Visa FAQ | Employer Sponsorship Questions Answered | RedBridge",
      description:
        "Honest answers to the most common questions about the 482 TSS visa, 186 ENS transition, SAF levy, skills assessments, and employer sponsorship pathways in Australia.",
      keywords: [
        "what is 482 visa", "482 visa requirements", "482 visa conditions",
        "482 visa", "482 visa australia", "186 visa requirements", "186 visa",
        "what is 186 visa", "employer sponsorship", "tss visa",
        "skills in demand visa", "migration agent", "visa consultant",
        "immigration consulting", "482 to pr", "visa 482", "employer sponsored visa",
      ],
    },
    {
      title: "482与186签证常见问题解答 | 雇主担保移民FAQ | 红桥咨询",
      description:
        "关于482临时技术短缺签证、186雇主提名过渡、SAF征税、技能评估及澳洲雇主担保路径最常见问题的权威解答。",
    },
    "/services/faq-v2",
  );
}

export default function FAQv2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
