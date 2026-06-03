import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import NavBar from "@/components/shared/NavBar";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqListSection } from "@/components/faq/FaqListSection";
import { FaqContactSection } from "@/components/faq/FaqContactSection";
import Footer from "@/components/shared/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "FAQ | Visas, Sponsorship & How RedBridge Works",
      description:
        "Straight answers about employer sponsorship, skills assessments, and how RedBridge works, including 482 and 186 visa questions.",
      keywords: [
        "what is 482 visa", "482 visa requirements", "482 visa conditions",
        "482 visa", "482 visa australia", "186 visa requirements", "186 visa",
        "what is 186 visa", "employer sponsorship", "tss visa",
        "skills in demand visa", "migration agent", "visa consultant",
        "immigration consulting", "482 to pr", "visa 482", "employer sponsored visa",
      ],
    },
    {
      title: "常见问题 | 签证、担保与红桥咨询服务 | 红桥咨询",
      description:
        "关于482、186、189、190、491签证、技能评估、雇主担保及RedBridge服务方式的直接解答。这里整理了我们最常被问到的问题。",
    },
    "/services/faq",
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are RedBridge Consulting job placements genuine and verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every employer in our network is checked before we present them to clients. We only move forward when the sponsorship status, role details, and business context have been verified well enough to stand up to scrutiny.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a 482 and 186 employer sponsored visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 482 is a temporary employer-sponsored visa. The 186 is a permanent residency visa. Many clients start on a 482 and later transition to the 186 when the employer pathway and timing are right.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the 482 employer sponsored visa process take in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 482 process usually falls somewhere between 3 and 12 months. The range depends on the employer's sponsorship status, your occupation, document readiness, and current Department processing times.",
      },
    },
    {
      "@type": "Question",
      name: "Can international students apply without permanent residency or a job offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some clients begin with work-experience-building routes rather than immediate PR or sponsorship routes. The Career Launch Program is built for that earlier stage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does skilled migration cost in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your initial consultation with RedBridge is free. Program costs vary by route and scope, and government fees sit separately from our service fees. Costs are documented clearly before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Are there payment plans available for migration consultancy fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use milestone-based instalment structures rather than demanding full payment upfront. The exact timing depends on the service and the pathway being delivered.",
      },
    },
    {
      "@type": "Question",
      name: "What is the skills assessment success guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you complete the relevant program and your skills assessment is not successful, we continue supporting you at no additional cost until the assessment requirement is properly resolved.",
      },
    },
    {
      "@type": "Question",
      name: "Which visa pathway is right for my occupation and situation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recent graduates needing local experience should consider the Career Launch Program. Those with employer interest should look at the 482/186 Employer Sponsored pathway. For independent points-based PR, the 189 Pathway applies. For a state-backed points boost, the 190 Pathway is ideal. For regional migration with extra points, the 491 Pathway applies. Book the free consultation for a tailored assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Who handles visa lodgement and migration legal matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All formal migration advice and visa lodgements are handled by Insight Idea, our licensed legal partner. RedBridge handles the career, pathway, and employer side of the work.",
      },
    },
    {
      "@type": "Question",
      name: "Where is RedBridge Consulting located and do you offer online consultations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our office is at Level 9, Tower 3, 18-38 Siddeley Street, Docklands VIC 3008, and yes, we also offer online consultations for clients who are interstate, offshore, or simply prefer remote meetings.",
      },
    },
  ],
};

export default function FAQPageRoute() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <NavBar />
      <main className="min-h-full bg-background pt-16 md:pt-24">
        <FaqHero />
        <FaqListSection />
        <FaqContactSection />
      </main>
      <Footer />
    </>
  );
}
