export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#hero" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    items: [
      { label: "Career Launch Program", href: "/services#career-launch" },
      { label: "189 Skilled Pathway", href: "/189-pathway" },
      { label: "190 State Nomination", href: "/190-pathway" },
      { label: "491 Regional Pathway", href: "/491-pathway" },
      { label: "482/186 Employer Sponsored", href: "/employer-pathway" },
      { label: "FAQ", href: "/faqs" },
    ],
  },
  { label: "Success Cases", href: "/success-cases" },
  { label: "For Employers", href: "/employers" },
  { label: "FAQ", href: "/faqs" },
  { label: "About Us", href: "/about" },
];

export const heroStats = [
  { value: "200+", label: "Successful Placements", icon: "users" },
  { value: "300+", label: "Assessments Approved", icon: "clipboard" },
  { value: "Team Active", label: "Since 2018", accent: true, icon: "heart" },
] as const;

export const pathways = [
  {
    title: "I just graduated",
    description:
      "I have an Australian degree but not enough local work experience to qualify for migration yet.",
    cta: "Career Launch Program",
    href: "#contact",
    primary: true,
    icon: "graduate",
  },
  {
    title: "I need a visa sponsor",
    description:
      "I'm a skilled professional looking for an Australian employer who can sponsor my 482 or 186 visa.",
    cta: "Employer Sponsored Visas",
    href: "#employer-network",
    icon: "briefcase",
  },
  {
    title: "I want permanent residency",
    description:
      "I want to apply for PR independently through the points-tested skilled migration system.",
    cta: "189 / 190 / 491 Pathways",
    href: "#comparison",
    icon: "compass",
  },
] as const;

export const trustCards = [
  {
    label: "Licensed Migration Law Partner",
    title: "Insight Idea — Registered Law Firm",
    description: "Your pathway is designed and reviewed by qualified professionals.",
    href: "https://www.insightidea.com.au/en/success",
    icon: "shield",
  },
  {
    label: "Australian Registered Company",
    title: "Verify our ABN on the ABR",
    description: "We're a legitimate Australian business you can trust.",
    href: "https://www.abr.business.gov.au/",
    icon: "building",
  },
] as const;

export const comparisonRows = [
  {
    problem: "Job listings you can't verify",
    problemDescription: "You only find out they're fake after paying.",
    other: "Unclear employer details. No proof of sponsorship.",
    redbridge: "Verified Employers, Upfront",
    redbridgeDescription:
      "We share employer names, industry, and 482 sponsorship approval during your free consultation — before you commit.",
    icon: "file",
  },
  {
    problem: "Full fees charged upfront",
    problemDescription: "You pay thousands before any work begins.",
    other: "Large upfront payments. High financial risk.",
    redbridge: "Pay As We Progress",
    redbridgeDescription:
      "Fees are documented in a Client Agreement and split across 3–4 milestone stages.",
    icon: "card",
  },
  {
    problem: "Unregistered consultants",
    problemDescription: "Advice without legal accountability.",
    other: "Give migration advice without being licensed.",
    redbridge: "Licensed Migration Law Partner",
    redbridgeDescription:
      "All visa lodgements are handled by Insight Idea — a registered Australian law firm and MARA migration agent.",
    icon: "user-off",
  },
  {
    problem: "Fabricated work & weak evidence",
    problemDescription: "Internships or hours that fail skills assessment.",
    other: "Hard to verify work experience. Assessment at risk.",
    redbridge: "400+ Hours of Genuine Paid Work",
    redbridgeDescription:
      "Real projects with signed timesheets, in the exact format required for CAANZ, ACS, and AMI skills assessments.",
    icon: "clipboard-list",
  },
  {
    problem: "One-size-fits-all pathways",
    problemDescription: "Everyone gets the same recommendation.",
    other: "Pushes programs that may not suit your situation.",
    redbridge: "Honest Matching, Not Hard Selling",
    redbridgeDescription:
      "We listen first. If a pathway isn't right for you, we'll tell you at the free consultation.",
    icon: "route",
  },
  {
    problem: "You're left on your own",
    problemDescription: "Support ends after payment.",
    other: "Limited guidance after payment. You handle it alone.",
    redbridge: "Success Guarantee & Ongoing Support",
    redbridgeDescription:
      "If you complete the program and don't pass your skills assessment, we continue supporting you at no extra cost.",
    icon: "headset",
  },
] as const;

export const videoCards = [
  {
    title: "Welcome to RedBridge",
    description: "Our story, our mission, and why we do what we do.",
    duration: "02:45",
    poster: "/home-assets/wtc-hero.png",
    videoSrc: "/videos/Andy-2.mp4",
  },
  {
    title: "How We Work With You",
    description: "From assessment to placement — our proven process.",
    duration: "03:12",
    poster: "/home-assets/office-meeting.jpg",
    videoSrc: "/videos/Andy-3.mp4",
  },
  {
    title: "Success Stories",
    description: "Hear from our students and professionals who made it happen.",
    duration: "04:08",
    poster: "/home-assets/melbourne-city.jpg",
    videoSrc: "/videos/Edmond-3.mp4",
  },
] as const;

export type SuccessCaseStat = {
  value: string;
  label: string;
};

export type SuccessCaseFilter = {
  label: string;
  value: "all" | "career" | "employer" | "189" | "190" | "491";
};

export type SuccessMetric = {
  value: string;
  label: string;
};

export type SuccessStory = {
  categories: Exclude<SuccessCaseFilter["value"], "all">[];
  accent: "career" | "employer" | "189" | "190" | "491";
  outcomeTone: "placed" | "secured" | "granted" | "reversed";
  outcomeLabel: string;
  title: string;
  initials: string;
  avatarTone: "orange" | "sage" | "green" | "red";
  name: string;
  credentials: string;
  quote: string;
  metrics: SuccessMetric[];
};

export type SuccessTrustItem = {
  title: string;
  description: string;
  icon: "clipboard" | "users" | "shield" | "route";
};

export const successCaseStats: SuccessCaseStat[] = [
  { value: "200+", label: "Career placements — team active since 2018" },
  { value: "150+", label: "Employer matches secured" },
  { value: "300+", label: "Skills assessments passed first attempt" },
  { value: "4.9★", label: "Average client satisfaction rating" },
];

export const successCaseFilters: SuccessCaseFilter[] = [
  { label: "All Outcomes", value: "all" },
  { label: "Career Launch", value: "career" },
  { label: "Employer Sponsored", value: "employer" },
  { label: "189 Independent", value: "189" },
  { label: "190 State Nominated", value: "190" },
  { label: "491 Regional", value: "491" },
];

export const featuredSuccessCase = {
  eyebrow: "Featured Spotlight",
  title: "Lucas — Commerce Graduate, Melbourne",
  subtitle: "From Sceptic to Sponsored",
  quote:
    "I came to RedBridge after losing $8,000 to another agency. I was ready to walk away from the 482 pathway entirely. They showed me the employer profiles at the first meeting — before I signed anything.",
  highlights: [
    "482 visa lodged in 4 months",
    "ICT Business Analyst role secured",
    "ACS assessment passed — first attempt",
  ],
  paragraphs: [
    "Lucas had a Monash commerce degree, two years of casual work that did not qualify for any skills assessment, and a well-earned scepticism of migration consultancies. At his free consultation, our team showed him the employer profiles in our ICT network.",
    "Within three months he had 400+ logged hours of paid project work as a Business Analyst, a signed ACS-ready logbook, and a confirmed employer. He is now on a transition to permanent residency pathway via the 186 Transition Stream.",
  ],
};

export const successStories: SuccessStory[] = [
  {
    categories: ["career"],
    accent: "career",
    outcomeTone: "placed",
    outcomeLabel: "Big 4 Placement",
    title: "Graduate lands role at Big 4 Accounting firm within 3 months of program",
    initials: "M.C.",
    avatarTone: "orange",
    name: "M.C.",
    credentials: "Graduate Accountant · Big 4 Firm · Melbourne",
    quote:
      "University taught me theory, but RedBridge taught me Xero, SAP, and Australian tax law. Within 3 months of finishing their commercial project, I passed my interviews at a Big 4 firm.",
    metrics: [
      { value: "400 hrs", label: "Loggable Experience" },
      { value: "3 mo.", label: "Time to Placement" },
      { value: "Big 4", label: "Employer Tier" },
    ],
  },
  {
    categories: ["career", "employer"],
    accent: "employer",
    outcomeTone: "secured",
    outcomeLabel: "482 Visa Secured",
    title: "Marketing Manager secures employer sponsorship — pathway to 186 PR",
    initials: "S.L.",
    avatarTone: "orange",
    name: "S.L.",
    credentials: "Marketing Specialist · 482 Holder · Melbourne → Sydney",
    quote:
      "Marketing is incredibly competitive in Australia. RedBridge's Career Launch program helped me build the localised portfolio I needed to convince a Sydney firm to sponsor my 482 visa.",
    metrics: [
      { value: "482", label: "Visa Granted" },
      { value: "186 PR", label: "Next Milestone" },
      { value: "Sydney", label: "Placement City" },
    ],
  },
  {
    categories: ["189"],
    accent: "189",
    outcomeTone: "granted",
    outcomeLabel: "189 PR Granted",
    title: "Software Developer achieves 189 Permanent Residency in 8 months",
    initials: "J.W.",
    avatarTone: "green",
    name: "J.W.",
    credentials: "Software Engineer · 189 PR · ACS Assessed",
    quote:
      "I thought I would be stuck on temporary visas for years. RedBridge helped me maximise my points through a Professional Year and NAATI, bumping me to 90 points and clearing the 189 threshold.",
    metrics: [
      { value: "90 pts", label: "Total EOI Score" },
      { value: "8 mo.", label: "Total Timeline" },
      { value: "189 PR", label: "Visa Granted" },
    ],
  },
  {
    categories: ["190"],
    accent: "190",
    outcomeTone: "granted",
    outcomeLabel: "190 Nomination Approved",
    title: "Registered Nurse fast-tracks Victorian state nomination with priority occupation status",
    initials: "A.N.",
    avatarTone: "sage",
    name: "A.N.",
    credentials: "Registered Nurse · 190 Victoria · ANMAC Assessed",
    quote:
      "Working in healthcare in Victoria gave me priority processing, but the paperwork was overwhelming. The team handled my ANMAC assessment and ROI preparation — the nomination came through without any RFIs.",
    metrics: [
      { value: "Victoria", label: "Nomination State" },
      { value: "Priority", label: "Occupation Status" },
      { value: "0 RFIs", label: "Requests for Info" },
    ],
  },
  {
    categories: ["491"],
    accent: "491",
    outcomeTone: "granted",
    outcomeLabel: "491 Nomination Granted",
    title: "Civil Engineer bridges 10-point gap with regional 491 and employer match in Geelong",
    initials: "T.K.",
    avatarTone: "sage",
    name: "T.K.",
    credentials: "Civil Engineer · 491 Victoria · Regional Geelong",
    quote:
      "I was 10 points short for an independent visa. RedBridge arranged a regional employment opportunity for me in Geelong, allowing me to claim the 15 nomination points and secure my 491 visa.",
    metrics: [
      { value: "+15 pts", label: "Regional Bonus" },
      { value: "Geelong", label: "Regional Location" },
      { value: "191 PR", label: "Target in 3 yrs" },
    ],
  },
];

export const successTrustItems: SuccessTrustItem[] = [
  {
    title: "Verified skills assessments",
    description:
      "300+ ACS, AMI, and Engineers Australia assessments passed first attempt — preparation is the differentiator.",
    icon: "clipboard",
  },
  {
    title: "Employer network of 10+",
    description:
      "Verified sponsors across ICT, marketing, engineering, and hospitality — direct matching, not job board listings.",
    icon: "users",
  },
  {
    title: "MARA-registered legal partner",
    description:
      "Insight Idea (MARN: 1467870) handles all migration advice and applications. Co-located in our Docklands office.",
    icon: "shield",
  },
  {
    title: "Points-first strategy",
    description:
      "We map the fastest realistic pathway to a competitive EOI score before any application work begins.",
    icon: "route",
  },
];

export const employerFeatures = [
  {
    title: "Verified Sponsorship",
    description: "We confirm 482 approval before sharing any employer.",
    icon: "shield",
  },
  {
    title: "Full Transparency",
    description: "You'll see the company, industry, and approval status during consultation.",
    icon: "lock",
  },
  {
    title: "No Vague Promises",
    description: "Real companies. Real roles. Real opportunities.",
    icon: "users",
  },
] as const;

export const employerSteps = [
  {
    title: "Check Sponsorship Approval",
    description: "Confirm active 482 sponsorship status with official records.",
  },
  {
    title: "Review Company & Role",
    description: "Assess business legitimacy, job duties, and suitability.",
  },
  {
    title: "Ongoing Monitoring",
    description: "Regularly recheck status to ensure it stays valid.",
  },
] as const;

export const industries = [
  { title: "Technology & ICT", count: "12", icon: "laptop" },
  { title: "Accounting & Finance", count: "8", icon: "calculator" },
  { title: "Marketing & Communications", count: "6", icon: "megaphone" },
  { title: "Engineering", count: "5", icon: "hard-hat" },
  { title: "Healthcare", count: "4", icon: "heartbeat" },
] as const;

export const contactCards = [
  {
    title: "Visit Us",
    body: ["Level 9, Tower 3", "18–38 Siddeley Street", "Docklands VIC 3008"],
    caption: "5 min walk from Southern Cross",
    href: "https://maps.google.com/?q=Level+9,+Tower+3,+18-38+Siddeley+Street,+Docklands+VIC+3008",
    icon: "map",
  },
  {
    title: "Call Us",
    body: ["03 9961 7301"],
    caption: "Mon–Thu 12pm–6pm · Fri 12pm–5pm",
    href: "tel:0399617301",
    icon: "phone",
  },
  {
    title: "Email Us",
    body: ["info@red-bridge.com.au"],
    caption: "Response within 24 hours",
    href: "mailto:info@red-bridge.com.au",
    icon: "mail",
  },
] as const;

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Career Launch Program", href: "/services#career-launch" },
      { label: "189 Skilled Pathway", href: "/189-pathway" },
      { label: "190 State Nomination", href: "/190-pathway" },
      { label: "491 Regional Pathway", href: "/491-pathway" },
      { label: "482/186 Employer Sponsored", href: "/employer-pathway" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "News & Updates", href: "/#videos" },
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/success-cases" },
      { label: "For Employers", href: "/employers" },
      { label: "FAQ", href: "/faqs" },
      { label: "Book a Consultation", href: "/booking" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/redbridgeconsulting/" },
  { label: "RedNote", href: "https://www.xiaohongshu.com/user/profile/6363be4d000000001f017d2c" },
  { label: "WhatsApp", href: "https://wa.me/61400000000" },
] as const;

export const outcomes = [
  "Lucas S. — 482 visa lodged · ICT Business Analyst · 4 months",
  "Wei L. — 190 nominated · Accountant · NSW · 6 months",
  "Priya M. — CAANZ assessment passed · First attempt · Career Launch Program",
  "Ming H. — 186 permanent residency · Software Engineer · 2 years with sponsor",
  "Linh T. — ACS assessment passed · Portfolio of 3 live projects · 3 months",
  "Rajesh K. — 491 regional approved · Marketing Specialist · SA nomination",
  "Sasha R. — Career Launch placed · Digital Marketer · AMI eligible",
] as const;
