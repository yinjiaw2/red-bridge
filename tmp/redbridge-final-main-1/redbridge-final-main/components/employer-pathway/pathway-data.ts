export const heroTrustItems = [
  "482 & 186 covered end-to-end",
  "ICT & Marketing specialist network",
  "Licensed legal partner — MARN: 1467870",
  "Free eligibility assessment",
];

export const heroStats = [
  { value: "200+", label: "Career placements" },
  { value: "150+", label: "Employer matches made" },
  { value: "3–12", label: "Months to visa" },
  { value: "4.9★", label: "Client rating" },
];

export const fitCards = [
  {
    title: "This pathway suits you if…",
    tone: "yes",
    items: [
      "You have at least 1 year of paid, full-time work experience in a skilled occupation.",
      "Your occupation is eligible for employer sponsorship, especially across ICT and Marketing.",
      "You want a real employer sponsor rather than another points queue.",
      "You are willing to work with one employer long enough to build toward 186 PR.",
    ],
    footnote: null,
  },
  {
    title: "This may not suit you if…",
    tone: "no",
    items: [
      "You have less than 1 year of relevant work experience.",
      "Your occupation is not currently on an eligible skilled list.",
      "You have had a previous refusal and still need legal advice on its effect.",
      "You need a solution in under 3 months and do not yet have the work history or sponsor profile in place.",
    ],
    footnote: "Not sure? Book a free assessment and we'll tell you honestly which route fits.",
  },
] as const;

export const pathwayOptions = [
  {
    badge: "Foundation Stage — Career Launch First",
    title: "Under 1 Year Experience",
    subtitle: "You're one year away from 482 eligibility.",
    description:
      "If you do not yet have the minimum relevant experience, the honest answer is not to force a sponsorship application. It is to build the experience properly first.",
    leftTitle: "What you need",
    leftItems: [
      "1 year paid full-time experience in an eligible occupation.",
      "Verifiable employment records including payslips, contracts, and references.",
      "An employer willing to sponsor once that experience is in place.",
    ],
    rightTitle: "RedBridge's approach",
    rightItems: [
      "Career Launch or a structured training pathway to build genuine Australian experience.",
      "Skills assessment preparation where relevant for your future pathway.",
      "Transition into employer matching once the experience threshold is actually met.",
    ],
    chips: ["12–18 months to 482 readiness", "Career Launch → 482 → 186"],
    note: "We would rather tell you this earlier and build the case correctly than sell you a visa you do not yet qualify for.",
    ctaLabel: "View Career Launch Program",
    ctaHref: "/services#career-launch",
    tone: "foundation",
  },
  {
    badge: "Subclass 482 — Temporary Skill Shortage Visa",
    title: "1–3 Years Experience",
    subtitle: "Work in Australia with a verified employer sponsor.",
    description:
      "Once the experience is there, the core problem becomes employer quality. The right sponsor is not a spreadsheet. It is a verified nomination opportunity.",
    leftTitle: "482 visa — key requirements",
    leftItems: [
      "At least 1 year of relevant full-time work experience.",
      "Occupation eligible under the current sponsorship framework.",
      "Salary that meets TSMIT and market salary expectations.",
      "English proficiency and an employer with active sponsorship approval.",
    ],
    rightTitle: "What happens after 482",
    rightItems: [
      "186 TRT after 2 years with the sponsoring employer where the pathway is available.",
      "Regional alternatives such as 494 where appropriate.",
      "Parallel planning for longer-term PR from the moment the 482 is granted.",
    ],
    chips: ["3 months – 1 year to visa", "482 now → 186 later"],
    note: "The sponsoring employer must pay the SAF levy and nomination costs. Our fees are for placement and program support, not the employer's legal obligations.",
    ctaLabel: "Check My 482 Eligibility — Free",
    ctaHref: "/#contact",
    tone: "core",
  },
  {
    badge: "Subclass 186 — Employer Nomination Scheme (Direct Entry)",
    title: "3+ Years Experience",
    subtitle: "Skip the temporary stage and aim straight for PR.",
    description:
      "With enough experience and the right supporting evidence, the 186 Direct Entry stream can remove the temporary stage entirely and move you directly to permanent residency.",
    leftTitle: "186 Direct Entry — key requirements",
    leftItems: [
      "3 years of relevant experience in the nominated occupation.",
      "Positive skills assessment for the Direct Entry stream.",
      "Approved employer sponsor offering a genuine full-time role.",
      "Age and English requirements satisfied at application stage.",
    ],
    rightTitle: "Why choose Direct Entry",
    rightItems: [
      "Permanent residency from day one on grant.",
      "Full work rights and Medicare from the start.",
      "No need to wait through a temporary 482 stage before PR.",
    ],
    chips: ["PR on grant", "6 months – 1 year to grant"],
    note: "The skills assessment requirement adds work up front, so we prepare that in parallel with employer matching to keep the timeline efficient.",
    ctaLabel: "Check My 186 Direct Entry Eligibility",
    ctaHref: "/#contact",
    tone: "direct",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "See If I Qualify",
    description:
      "We review your occupation, experience, and visa history and give you an honest verdict on whether the employer-sponsored route is truly open now.",
    timing: "Week 1",
  },
  {
    number: "02",
    title: "Employer Matching",
    description:
      "We search our verified network for employers with current sponsorship approval and genuine demand aligned to your occupation and salary level.",
    timing: "Weeks 2–8",
  },
  {
    number: "03",
    title: "Nomination & Application",
    description:
      "Insight Idea prepares the nomination and visa application, with every document checked for compliance before lodgement.",
    timing: "Weeks 4–16",
  },
  {
    number: "04",
    title: "Grant & Beyond",
    description:
      "Once the visa is granted, we brief you on your obligations and map the 186 transition timeline from day one instead of leaving that planning until later.",
    timing: "Month 3–12",
  },
] as const;

export const industries = [
  {
    title: "ICT & Technology",
    description:
      "Our strongest network, spanning software, systems infrastructure, business analysis, and project delivery roles.",
    tags: ["Software Engineer", "ICT Project Manager", "Business Analyst", "Systems Analyst", "Developer"],
  },
  {
    title: "Marketing & Business",
    description:
      "A strong second cluster for Marketing Specialists, Digital Marketing Managers, and business-facing growth roles.",
    tags: ["Marketing Specialist", "Digital Marketing Mgr", "Market Research Analyst", "Business Dev Manager"],
  },
] as const;

export const promiseColumns = [
  {
    title: "What we do",
    tone: "yes",
    items: [
      "Verify every employer before introducing them to clients, including sponsorship status and role credibility.",
      "Give an honest eligibility assessment at the free consultation.",
      "Work with Insight Idea in the same Docklands office so your consultant and migration agent are tightly coordinated.",
      "Split fees across milestones rather than demanding a single large upfront payment.",
      "Plan the 186 PR transition from the moment your 482 is granted.",
    ],
  },
  {
    title: "What we don't do",
    tone: "no",
    items: [
      "We don't send unverified job lists and call that employer matching.",
      "We don't promise visa outcomes that no one can legally guarantee.",
      "We don't take payment for a path you clearly do not qualify for.",
      "We don't fabricate experience or documentation to push an assessment through.",
    ],
  },
] as const;

export const journeyTracks = [
  {
    key: "track-a",
    title: "I gained 1 year of experience on my 485",
    timeline: ["500 Student", "485 Graduate", "Skills Assessment", "482 Sponsor", "186 TRT", "PR"],
    leftTitle: "Your starting advantage",
    leftItems: [
      "You already meet the most common 482 experience barrier.",
      "Skills assessment can run in parallel with employer matching.",
      "This is the cleanest 485-to-PR employer-sponsored route.",
    ],
    rightTitle: "What RedBridge handles",
    rightItems: [
      "Skills assessment preparation for ICT or Marketing.",
      "Employer matching from our verified 482-approved network.",
      "186 TRT planning from the day the 482 is granted.",
    ],
    ctaLabel: "Start My Track A Assessment",
    ctaHref: "/#contact",
    timing: "Est. 3–5 years to PR from today",
  },
  {
    key: "track-b",
    title: "I found relevant work late on my 485",
    timeline: ["500 Student", "485 Graduate", "407 Training", "Skills Assessment", "482 Sponsor", "PR via 186"],
    leftTitle: "About the 407 training visa",
    leftItems: [
      "The 407 is a structured training visa rather than a standard work visa.",
      "It can close the experience gap needed before a proper 482 application.",
      "We plan the 407 → 482 transition early so there is no last-minute rush.",
    ],
    rightTitle: "What RedBridge handles",
    rightItems: [
      "407-capable employer sourcing where a genuine training route exists.",
      "Experience documentation structured around the later 482 requirement.",
      "Transition planning into the employer-sponsored stage.",
    ],
    ctaLabel: "Assess My 407 → 482 Options",
    ctaHref: "/#contact",
    timing: "Est. 4–6 years to PR",
  },
  {
    key: "track-c",
    title: "I have no relevant experience yet",
    timeline: ["485 Active", "Career Launch / 407", "Skills Assessment", "482 Sponsor", "PR via 186"],
    leftTitle: "Why this route is still viable",
    leftItems: [
      "No experience now does not mean no pathway later.",
      "Career Launch can produce genuine, paid, documented experience.",
      "Many applicants complete this longer track successfully when it is planned honestly.",
    ],
    rightTitle: "What RedBridge handles",
    rightItems: [
      "Career Launch planning or a structured alternative first step.",
      "Skills assessment preparation built in parallel.",
      "Direct employer matching once the experience threshold is genuinely met.",
    ],
    ctaLabel: "View Career Launch Program",
    ctaHref: "/services#career-launch",
    timing: "Est. 5–7 years to PR",
  },
  {
    key: "track-d",
    title: "I'm a secondary applicant on a partner's 482",
    timeline: ["Secondary 482", "Build Experience", "Skills Assessment", "Your Own 482", "PR via 186"],
    leftTitle: "Understanding this track",
    leftItems: [
      "As a secondary applicant you can work while building your own qualifying experience.",
      "You cannot convert into the primary holder of your partner's visa, but you can build your own pathway.",
      "Starting assessment and employer search early reduces transition delays later.",
    ],
    rightTitle: "What RedBridge handles",
    rightItems: [
      "Review of whether your current work counts toward the 1-year requirement.",
      "Skills assessment preparation while you are still on the secondary visa.",
      "Employer matching for your own independent 482 primary application.",
    ],
    ctaLabel: "Assess My Secondary → Primary Path",
    ctaHref: "/#contact",
    timing: "Timeline depends on your current secondary start date",
  },
] as const;

export const faqItems = [
  {
    question: "What is the minimum work experience required for a 482 visa?",
    answer:
      "You need at least 1 year of full-time relevant work experience in an occupation closely related to the nominated role, and it must be documented properly.",
  },
  {
    question: "Can a 482 visa lead directly to Permanent Residency?",
    answer:
      "Yes. For many eligible occupations, the 482 can lead to the 186 Transition stream after a qualifying period with the sponsoring employer. In some cases, 186 Direct Entry may be available sooner.",
  },
  {
    question: "Does my employer pay for the 482 visa fees?",
    answer:
      "The sponsoring employer must pay the SAF levy and sponsorship nomination costs. Our program fees are separate from those employer obligations.",
  },
  {
    question: "What is TSMIT and does it affect me?",
    answer:
      "TSMIT is the Temporary Skilled Migration Income Threshold. Your nominated salary must meet or exceed it and still reflect the market salary rate for the role.",
  },
  {
    question: "My occupation isn't in ICT or Marketing — can RedBridge still help?",
    answer:
      "Our strongest network is in ICT and Marketing, but we assess all occupations individually and will tell you honestly if our network is not the right fit.",
  },
  {
    question: "How long does the full 482 visa process take?",
    answer:
      "The typical range is 3 months to 1 year from first consultation to grant, depending on current Department timing, employer sponsorship status, and document readiness.",
  },
] as const;
