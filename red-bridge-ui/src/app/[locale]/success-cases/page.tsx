import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SuccessCasesHero from "@/components/success-cases/SuccessCasesHero";
import SuccessCasesList from "@/components/success-cases/SuccessCasesList";
import SuccessCasesWhy from "@/components/success-cases/SuccessCasesWhy";
import SuccessCasesCta from "@/components/success-cases/SuccessCasesCta";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Success Cases | Real Migration & Career Outcomes",
      description:
        "Real stories from skilled professionals RedBridge has helped reach Australian permanent residency through employer sponsorship, 189, 190, and 491 visa pathways.",
      keywords: [
        "482 visa", "186 visa", "employer sponsored visa", "482 to pr",
        "visa 482 to pr", "migration services", "employer sponsorship",
        "visa sponsorship", "482 visa australia", "career placement services",
      ],
    },
    {
      title: "成功案例 | 红桥咨询",
      description:
        "真实案例 —— 通过雇主担保、189、190、491签证路径成功移居澳大利亚的专业人士故事。超200个成功就业安置，客户满意度4.9★。",
    },
    "/success-cases",
  );
}

export default function SuccessCasesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SuccessCasesHero />
        <SuccessCasesWhy />
        <SuccessCasesList />
        <SuccessCasesCta />
      </main>
      <Footer />
    </>
  );
}
