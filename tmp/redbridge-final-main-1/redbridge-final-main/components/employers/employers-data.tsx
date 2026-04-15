import type { ReactNode } from "react";
import Link from "next/link";

export const employerHeroTrust = [
  "150+ employer matches completed across ICT, marketing, engineering, and hospitality",
  "Pre-vetted candidates — skills-assessed, English-tested, pathway-ready",
  "SBS to visa grant handled by Insight Idea (MARN: 1467870) — co-located Docklands",
  "CSIT salary floor AUD $76,515 from 1 July 2025 — we advise on full cost structure before you commit",
] as const;

export const employerProblems = [
  {
    title: "Can't find qualified local candidates",
    description:
      "Roles in ICT, engineering, healthcare, and marketing consistently attract insufficient qualified local applicants, particularly for mid-senior positions.",
  },
  {
    title: "Long vacancies cost the business",
    description:
      "Every month a specialist role sits unfilled has a direct revenue and productivity cost. Sponsorship, once the SBS is in place, moves faster than most employers expect.",
  },
  {
    title: "Compliance complexity holds businesses back",
    description:
      "Labour Market Testing, SAF levy, nomination requirements, and ongoing obligations feel overwhelming — especially for businesses sponsoring for the first time.",
  },
  {
    title: "Finding the right sponsored candidate",
    description:
      "Even when willing to sponsor, sourcing a candidate who is skills-assessed, occupation-matched, and visa-ready is a separate challenge that takes time and expertise.",
  },
] as const;

export const employerPhases = [
  {
    number: "01",
    label: "RedBridge + Insight Idea",
    title: "Eligibility & Role Assessment",
    items: [
      "Confirm occupation is on the Core Skills Occupation List for the role",
      "Verify salary meets CSIT and Annual Market Salary Rate requirements",
      "Assess Labour Market Testing requirements and ad timing",
      "Review your current sponsor status or start the SBS application",
      "Match pre-vetted candidates from RedBridge's assessed pool",
    ],
  },
  {
    number: "02",
    label: "Insight Idea — MARA Agent",
    title: "SBS -> Nomination -> Visa",
    items: [
      "Apply for Standard Business Sponsorship — typically 1 to 8 weeks",
      "Lodge nomination alongside SBS instead of waiting for separate approval",
      "Conduct and document Labour Market Testing where required",
      "Pay the SAF levy and government nomination fees",
      "Support the candidate's visa application and onshore bridging visa status",
    ],
  },
  {
    number: "03",
    label: "Ongoing — RedBridge + Insight Idea",
    title: "Visa Grant & Compliance",
    items: [
      "Monitor compliance obligations and Department notification deadlines",
      "Track the worker's two-year milestone toward 186 eligibility",
      "Manage material change notifications if the role or business structure changes",
      "Prepare the 186 TRT nomination when the worker becomes eligible",
    ],
  },
] as const;

export const employerCostRows = [
  {
    label: "Standard Business Sponsorship application fee",
    note: "One-time fee. SBS approval is valid for 5 years.",
    amount: "AUD $420",
  },
  {
    label: "Nomination fee — 482 Skills in Demand",
    note: "Per nomination. Non-refundable once lodged.",
    amount: "AUD $330",
  },
  {
    label: "Nomination fee — 186 Employer Nomination Scheme",
    note: "Per nomination. Non-refundable once lodged.",
    amount: "AUD $540",
  },
  {
    label: "SAF levy — small business",
    note: "Annual turnover under $10 million. Charged per year of visa period.",
    amount: "AUD $1,200 / yr",
  },
  {
    label: "SAF levy — large business",
    note: "Annual turnover $10 million or above. Charged per year of visa period.",
    amount: "AUD $1,800 / yr",
  },
  {
    label: "Minimum salary — Core Skills stream",
    note: "CSIT from 1 July 2025. Must also meet AMSR, whichever is higher.",
    amount: "AUD $76,515 + super",
  },
  {
    label: "Minimum salary — Specialist Skills stream",
    note: "For high-salary roles outside the standard occupation list framework.",
    amount: "AUD $135,000 + super",
  },
] as const;

export const employerObligations = {
  must: [
    "Pay the sponsored worker at least the nominated salary and Annual Market Salary Rate.",
    "Ensure the worker is employed in the nominated occupation and role scope.",
    "Notify the Department within 28 days of material business or employment changes.",
    "Maintain records of salary, duties, leave, and return-travel requests.",
    "Pay the SAF levy and government fees directly as the sponsoring employer.",
  ],
  cannot: [
    "Charge the worker for sponsorship, nomination, visa, or legal fees.",
    "Move the worker into a materially different occupation without a new nomination.",
    "Reduce salary below the nominated rate without Department approval.",
    "Nominate roles that are not genuine full-time positions tied to a real business need.",
  ],
} as const;

export const employerRoleLanes = [
  {
    eyebrow: "RedBridge Consulting",
    title: "Talent & Preparation",
    items: [
      "Identify pre-vetted candidates matched to your occupation and seniority.",
      "Verify skills assessment status before presenting shortlisted candidates.",
      "Coordinate candidate readiness, expectations, and documentation flow.",
      "Track key milestones including 186 eligibility windows for retention planning.",
    ],
  },
  {
    eyebrow: "Insight Idea — MARN: 1467870",
    title: "Legal & Migration",
    items: [
      "Prepare SBS applications, Labour Market Testing, and nomination lodgement.",
      "Handle 482 visa applications, bridging issues, and Department responses.",
      "Monitor sponsor compliance and reporting deadlines.",
      "Manage 186 TRT planning and lodgement at the two-year milestone.",
    ],
  },
] as const;

export const employerValueCards = [
  {
    title: "Candidates already assessed",
    description:
      "Every candidate in our pool has an occupation match, English position, and skills-assessment readiness checked before you see them.",
  },
  {
    title: "Legal partner on-site",
    description:
      "Insight Idea is in the same Docklands office, which keeps candidate preparation and visa lodgement tightly coordinated.",
  },
  {
    title: "Compliance tracked for the life of the visa",
    description:
      "We track the worker's 186 milestone and key sponsor obligations so important deadlines are not missed.",
  },
  {
    title: "Full cost transparency upfront",
    description:
      "You see government fees, SAF levy implications, and our professional scope before you commit to the process.",
  },
  {
    title: "Verified sponsor relationships",
    description:
      "We already work with verified employers across ICT, marketing, engineering, and hospitality, which speeds up matching and expectations.",
  },
  {
    title: "Bilingual candidate communication",
    description:
      "Our English and Mandarin-speaking team helps manage candidate communication clearly from first match to visa grant.",
  },
] as const;

export const employerFaqs: readonly { question: string; answer: ReactNode }[] = [
  {
    question: "What is the minimum salary I must pay a sponsored worker?",
    answer: (
      <>
        From 1 July 2025, the Core Skills Income Threshold is AUD $76,515 per annum excluding superannuation. You
        must also meet the Annual Market Salary Rate for the role, whichever is higher. For high-salary specialist
        positions, the threshold can be significantly higher. See{" "}
        <Link
          href="https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominate-a-position/salary-requirements"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--accent)] underline underline-offset-4"
        >
          Department of Home Affairs salary requirements
        </Link>
        .
      </>
    ),
  },
  {
    question: "How long does the whole process take?",
    answer:
      "SBS approval typically takes 1 to 8 weeks. Nominations can usually be prepared in parallel, and total timelines from first meeting to visa grant are often 3 to 7 months depending on occupation, documentation, and whether Labour Market Testing is required.",
  },
  {
    question: "Do I have to advertise the role before sponsoring?",
    answer:
      "Usually yes for standard 482 nominations. Labour Market Testing generally requires ads on at least two platforms for four weeks within the four months before nomination lodgement. Some circumstances are exempt, and specialist high-salary roles can be assessed differently.",
  },
  {
    question: "Can I sponsor a part-time worker?",
    answer:
      "No — the standard 482 pathway requires a genuine full-time role. Part-time or casual arrangements are not normally eligible unless a separate Labour Agreement framework applies.",
  },
  {
    question: "What happens when the 482 visa expires — can I keep the worker?",
    answer:
      "Yes, often through the 186 Temporary Residence Transition stream. After two years of eligible employment with your business, the worker may become eligible for employer-nominated permanent residency, which we can plan for well in advance.",
  },
];

export const employerInquirySections = [
  {
    title: "Company & Contact Details",
    fields: [
      { key: "businessName", label: "Business Name*", type: "text" },
      { key: "abn", label: "ABN*", type: "text" },
      { key: "contactName", label: "Contact Person*", type: "text" },
      { key: "contactTitle", label: "Job Title*", type: "text" },
      { key: "email", label: "Email*", type: "email" },
      { key: "phone", label: "Phone*", type: "tel" },
      { key: "businessAddress", label: "Business Address*", type: "text" },
    ],
  },
  {
    title: "Sponsorship History",
    fields: [
      {
        key: "isApprovedSponsor",
        label: "Is your business currently an approved Standard Business Sponsor?*",
        type: "select",
        options: ["Yes", "No", "In Progress"],
      },
      {
        key: "sponsoredBefore",
        label: "Have you sponsored foreign workers before?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "isAccredited",
        label: "Are you an accredited sponsor?*",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    title: "Financial & Operational Eligibility",
    fields: [
      {
        key: "lawfulProof",
        label: "Can you provide proof that your business is lawfully operating?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "financialCapacity",
        label: "Can the business demonstrate financial capacity to pay the required market salary rate?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "workerRatio",
        label: "Current ratio of local to overseas workers (approx.)*",
        type: "text",
      },
    ],
  },
  {
    title: "Position & Job Requirements",
    fields: [
      {
        key: "onSkilledList",
        label: "Is the proposed occupation on the Core Skills Occupation List?*",
        type: "select",
        options: ["Yes", "No", "Unsure"],
      },
      {
        key: "willingToLmt",
        label: "Are you willing to conduct Labour Market Testing where required?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "provideJd",
        label: "Can you provide a detailed position description that meets ANZSCO skill level expectations?*",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    title: "Costs & Financial Responsibilities",
    fields: [
      {
        key: "coverFees",
        label: "Will the company cover all sponsorship, nomination, and legal fees?*",
        type: "select",
        options: ["Yes", "No", "Partial / Negotiable"],
      },
      {
        key: "awareOfSaf",
        label: "Are you aware of the SAF levy requirement?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "coverRelocation",
        label: "Will you cover relocation costs if required?*",
        type: "select",
        options: ["Yes", "No", "Negotiable"],
      },
    ],
  },
  {
    title: "Compliance & Commitment",
    fields: [
      {
        key: "provideContract",
        label: "Will you provide a full-time, legally binding ongoing employment contract?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "meetCompliance",
        label: "Are you prepared to meet compliance requirements like timesheets and payslips?*",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        key: "pathwayToPr",
        label: "Does this position offer a pathway to PR, such as 186 TRT?*",
        type: "select",
        options: ["Yes", "No", "Unsure"],
      },
    ],
  },
] as const;
