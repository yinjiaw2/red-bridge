import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
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
    "/services/faq",
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum experience required for a 482 visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need at least 1 year of full-time, paid work experience in your nominated ANZSCO occupation within the last 5 years. The experience must be verifiable and in a role that matches your nominated occupation.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't have enough experience for a 482 visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RedBridge's Career Launch Program places you in a verified Australian role to legally build your experience record. Once you meet the threshold, we match you with a 482 sponsor.",
      },
    },
    {
      "@type": "Question",
      name: "Can my employer pass the SAF levy cost to me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Australian law prohibits employers from passing the Skilling Australians Fund (SAF) levy to visa applicants. If any party asks you to pay it, that is illegal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I transition from a 482 visa to permanent residency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After 2 years on a 482 visa with the same employer, you become eligible for the 186 Employer Nomination Scheme (TRT stream). RedBridge tracks this milestone from day one and manages the transition process.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the 482 sponsorship process cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your initial consultation with RedBridge is free. Government fees, the SAF levy (paid by employer), and our service fees are itemised clearly before you commit. We use milestone-based payment structures.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an age limit for the 186 Direct Entry visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You must be under 45 years of age at the time of visa application for the 186 ENS Direct Entry stream.",
      },
    },
    {
      "@type": "Question",
      name: "Which occupations are eligible for employer sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Occupations must appear on the Medium and Long-term Strategic Skills List (MLTSSL) or relevant skilled occupation list. RedBridge confirms your occupation eligibility during the free assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Can my family members be included in my employer-sponsored visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eligible family members — including your spouse and dependent children — can be included as secondary applicants on both the 482 TSS and 186 ENS visa applications.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <NavBar />
      <main className="pt-16 md:pt-24">
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
