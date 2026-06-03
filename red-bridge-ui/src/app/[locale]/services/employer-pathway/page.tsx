import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import EmployerPathwayHero from "@/components/v2/services/EmployerPathwayHero";
import ThreeRoutes from "@/components/v2/services/ThreeRoutes";
import PaymentMilestones from "@/components/v2/services/PaymentMilestones";
import WhatWeDoSection from "@/components/v2/services/WhatWeDoSection";
import IndustryNetwork from "@/components/v2/services/IndustryNetwork";
import PageCTA from "@/components/v2/shared/PageCTA";
import { JsonLd } from "@/components/seo/JsonLd";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the requirements for a 482 visa employer sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To qualify, you must have a valid job offer from an approved Australian sponsor, possess at least one year of relevant full-time work experience, and meet English language benchmarks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a 482 visa without 1 year of work experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you don't yet meet the experience threshold, RedBridge's Career Launch Program places you in a verified Australian role to legally build your experience record before entering the 482 sponsorship process.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my 482 employer sponsorship ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your employment ceases, you generally have 60 to 180 days to find a new approved sponsor, apply for a different visa type, or depart Australia.",
      },
    },
    {
      "@type": "Question",
      name: "Does a 482 visa pathway lead to Australian Permanent Residency (PR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under the Temporary Residence Transition (TRT) stream, 482 visa holders can transition to a permanent Subclass 186 visa after working full-time with their sponsoring employer for a designated period.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays for the 482 visa sponsorship costs and fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By Australian law, the sponsoring employer must pay all costs associated with becoming a sponsor and nominating the position. This includes the nomination fee and the Skilling Australians Fund (SAF) levy. The visa applicant can only pay for their own individual visa application charge and migration agent fees.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an age limit for a 482 visa sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no age limit to apply for or hold a temporary Subclass 482 visa. However, if your long-term goal is Permanent Residency via the Subclass 186 TRT stream, you generally need to be under 45 years of age at the time of the PR application, unless an exemption applies.",
      },
    },
    {
      "@type": "Question",
      name: "Which occupations are eligible for 482 visa sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your occupation must be on the relevant skilled occupation list, which maps to either the Short-term, Medium and Long-term, or Regional occupation lists. RedBridge helps align your specific qualifications with current Australian labor market demands.",
      },
    },
    {
      "@type": "Question",
      name: "Can I include my partner or family on a 482 visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can include immediate family members, such as your spouse, de facto partner, and dependent children, in your 482 visa application. Dependent partners receive full unrestricted work rights in Australia.",
      },
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Employer Sponsored Visa Pathway | 482 & 186 PR | RedBridge",
      description:
        "RedBridge matches skilled professionals to verified Australian employers for 482 TSS visa sponsorship, with a clear pathway to 186 permanent residency. Specialists in ICT, accounting, and marketing roles.",
      keywords: [
        "what is 482 visa", "what is 482 visa in australia", "482 visa",
        "482 visa australia", "482 visa requirements", "482 visa conditions",
        "482 visa application fee", "482 visa maternity leave", "482 visa to pr",
        "482 to pr", "482 to pr pathway", "new rules for 482 visa to permanent residency",
        "visa 482", "visa 482 to pr", "visa 482 australia", "482 work visa",
        "482 employer sponsored visa", "employer sponsored visa 482",
        "tss 482 visa", "tss visa", "gk 482 visa", "sponsorship visa australia",
        "sponsorship visa 482", "sponsor visa 482", "sponsor visa australia 482",
        "employer sponsored visa", "employer sponsorship", "work sponsorship visa",
        "company sponsorship visa", "visa sponsorship", "seek sponsorship jobs",
        "visa sponsorship jobs", "visa sponsorship jobs in australia",
        "what is 186 visa", "186 visa", "186 visa requirements", "186 visa australia",
        "visa 186", "employer nomination scheme subclass 186", "subclass 186",
        "migration services", "immigration consulting", "migration agent", "visa consultant",
      ],
    },
    {
      title: "雇主担保签证路径 | 482转186永居 | 红桥咨询",
      description:
        "红桥咨询为技术专业人士匹配经核实的澳洲雇主，获得482临时技术担保签证，并全程规划186永久居留路径。覆盖ICT、会计和市场营销方向。",
    },
    "/services/employer-pathway",
  );
}

export default function EmployerPathwayPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <NavBar />
      <main className="pt-16 md:pt-24">
        <EmployerPathwayHero />
        <ThreeRoutes />
        <WhatWeDoSection />
        <IndustryNetwork />
        <PaymentMilestones />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}
