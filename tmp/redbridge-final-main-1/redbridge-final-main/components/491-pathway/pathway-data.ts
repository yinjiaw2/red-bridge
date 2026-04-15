export const heroTrustItems = [
  "+15 points from nomination",
  "Free state nomination — Victoria charges nothing",
  "191 PR after 3 years in regional VIC",
  "EOI + ROI by Insight Idea (MARN: 1467870)",
];

export const heroStats = [
  { value: "+15", label: "Points from nomination" },
  { value: "700", label: "Victoria places 2025–26" },
  { value: "3 yrs", label: "Regional living to earn 191 PR" },
  { value: "Free", label: "State nomination cost (VIC)" },
];

export const tradeoffRows = [
  { factor: "Points added", visa491: "+15 pts", visa190: "+5 pts", visa189: "0 pts" },
  { factor: "Visa type", visa491: "Provisional (5 yr)", visa190: "Permanent", visa189: "Permanent" },
  { factor: "PR pathway", visa491: "191 visa after 3 yrs", visa190: "Immediate", visa189: "Immediate" },
  { factor: "Where you live", visa491: "Regional VIC only", visa190: "Anywhere in VIC", visa189: "Anywhere in Australia" },
  { factor: "Employment required?", visa491: "Yes — regional VIC", visa190: "No, but helps ROI", visa189: "No" },
  { factor: "Nomination cost", visa491: "Free (VIC)", visa190: "Free (VIC)", visa189: "N/A" },
  {
    factor: "Best for",
    visa491: "70–85 base pts, employed in regional VIC",
    visa190: "75–90 base pts, employed anywhere in VIC",
    visa189: "90–100+ pts, no location constraint",
  },
];

export const regionalAreas = [
  {
    distance: "~1 hour from Melbourne",
    title: "Geelong",
    description:
      "Victoria's second-largest city with strong healthcare, education, and professional services demand, plus direct train access to Melbourne.",
    tags: ["Healthcare", "Education", "Engineering", "ICT (growing)"],
  },
  {
    distance: "~1.5 hours from Melbourne",
    title: "Ballarat",
    description:
      "A major regional centre with strong education and healthcare presence, plus steady government and construction activity.",
    tags: ["Healthcare", "Education", "Construction", "Government"],
  },
  {
    distance: "~1.5 hours from Melbourne",
    title: "Bendigo",
    description:
      "A significant regional hub with Bendigo Health, advanced manufacturing, and growing professional services and finance demand.",
    tags: ["Healthcare", "Manufacturing", "Engineering", "Finance"],
  },
  {
    distance: "Other regional VIC",
    title: "Shepparton, Wodonga, Warrnambool",
    description:
      "Further regional centres with specific shortage demand and, in some areas, lower competition for nomination than the larger regional cities.",
    tags: ["Healthcare", "Food Manufacturing", "Trades"],
  },
];

export const federalRequirements = [
  { title: "Under 45 years old", description: "At the time of nomination invitation." },
  {
    title: "Competent English minimum",
    description: "IELTS 6.0 in all bands or equivalent. Proficient and Superior English still earn bonus points.",
  },
  {
    title: "Positive skills assessment — mandatory",
    description:
      "Required for all 491 applicants, with at least 12 weeks of validity remaining at nomination application stage.",
  },
  {
    title: "Minimum 65 points including nomination",
    description: "A base score of 50 is the theoretical minimum, but in practice a stronger base score is needed.",
  },
  {
    title: "Occupation on the eligible skilled list",
    description: "Your nominated occupation must remain eligible under the federal skilled occupation framework.",
  },
];

export const stateRequirements = [
  {
    title: "Employment in regional Victoria — mandatory",
    description:
      "You must currently be employed in skilled work for an employer physically located in regional Victoria. Melbourne-based employers do not qualify.",
  },
  {
    title: "Annual earnings claim — required",
    description:
      "Your ROI must include an estimate of annual earnings, and applicants with stronger verified earnings are materially more competitive.",
  },
  {
    title: "Living in regional Victoria if you are onshore",
    description: "ROIs from applicants in Melbourne or other states are generally not selected.",
  },
  {
    title: "Commit to 3 years in regional Victoria",
    description:
      "You need three years of regional living and working after grant before you can move into the 191 permanent residence pathway.",
  },
  {
    title: "All ROI claims must be substantiated",
    description: "Victoria verifies employment, earnings, and residency evidence closely at nomination stage.",
  },
];

type ProcessStep = {
  number: string;
  who: string;
  title: string;
  description: string;
  timing: string;
  legal?: boolean;
  success?: boolean;
  noteTitle?: string;
  noteBody?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    who: "RedBridge",
    title: "Free Assessment — Points, Employment & ROI Prospects",
    description:
      "We confirm your points, regional Victoria employment position, and whether Victorian 491 nomination is realistically open to you right now.",
    timing: "Week 1 — free, no obligation",
  },
  {
    number: "02",
    who: "RedBridge",
    title: "Skills Assessment Preparation",
    description:
      "RedBridge prepares your ACS, AMI, Engineers Australia, or other assessing-body submission while your EOI and ROI strategy is built in parallel.",
    timing: "4–12 weeks depending on assessing authority",
  },
  {
    number: "03",
    who: "Insight Idea — MARA Agent",
    title: "EOI in SkillSelect + ROI in Live in Melbourne",
    description:
      "Insight Idea lodges your federal EOI and prepares the regional ROI with verified employment, earnings, and supporting evidence for every claim.",
    timing: "After positive skills assessment result",
    legal: true,
    noteTitle: "14-day nomination deadline",
    noteBody:
      "If Victoria invites you to apply, the full nomination package usually has to be lodged within 14 days. We prepare it before the invitation lands.",
  },
  {
    number: "04",
    who: "Victorian Government",
    title: "Regional Nomination Granted",
    description:
      "Victoria approves the nomination, adding +15 points to your SkillSelect profile and triggering the federal invitation for the 491 visa.",
    timing: "Weeks to months — no set timeline",
  },
  {
    number: "05",
    who: "Insight Idea — MARA Agent",
    title: "491 Visa Granted",
    description:
      "The 491 is granted as a 5-year provisional visa, and Insight Idea briefs you on the regional living, work, and income obligations that lead to the 191.",
    timing: "Within 60 days of nomination",
    legal: true,
  },
  {
    number: "3yr",
    who: "You — Regional Victoria",
    title: "3 Years of Regional Living",
    description:
      "You live and work in designated regional Victoria for three years while meeting the required taxable income threshold. The job does not need to match your nominated occupation during this period.",
    timing: "3 years from visa grant",
    noteTitle: "Income threshold",
    noteBody:
      "The current benchmark is about $53,900 in taxable income per year for each of the three years. Tax returns are the key evidence source.",
  },
  {
    number: "★",
    who: "Insight Idea — MARA Agent",
    title: "191 Visa — Permanent Resident",
    description:
      "After the three-year regional period is complete, Insight Idea lodges the 191 permanent residence application and you move to full PR.",
    timing: "Permanent Resident",
    legal: true,
    success: true,
  },
];

export const pathway191Requirements = [
  {
    title: "3 years of residency",
    description: "You must genuinely live in a designated regional area rather than commuting from Melbourne.",
  },
  {
    title: "3 years of work",
    description:
      "You must work in the regional area, but the role does not need to remain aligned to your nominated occupation.",
  },
  {
    title: "Minimum taxable income",
    description:
      "Approximately $53,900 per year for each of the three years, evidenced primarily through tax returns.",
  },
];

export const pathway191Stats = [
  { value: "3", label: "Years required in regional VIC" },
  { value: "~$54K", label: "Minimum annual taxable income per year" },
  { value: "PR", label: "Permanent residency — live anywhere in Australia" },
];

export const faqItems = [
  {
    question: "How many points does the 491 visa add?",
    answer:
      "The 491 adds 15 points through state or territory nomination, which is the largest single points boost available in the skilled migration points test.",
  },
  {
    question: "Where is regional Victoria? Do I have to leave Melbourne?",
    answer:
      "Yes. Regional Victoria means outside Melbourne's metropolitan boundary, including places like Geelong, Ballarat, and Bendigo. You must genuinely live in the region.",
  },
  {
    question: "Is employment mandatory for the 491 nomination?",
    answer:
      "Yes. For Victorian 491 nomination, you must already be employed in skilled work for an employer physically located in regional Victoria and be able to support your earnings claim.",
  },
  {
    question: "How does the 491 lead to permanent residency?",
    answer:
      "After three years of regional living, working, and meeting the minimum taxable income threshold, you become eligible to apply for the 191 permanent residence visa.",
  },
  {
    question: "Is Victoria's 491 nomination really free?",
    answer:
      "Yes. Victoria does not charge a nomination fee for the 491, although the federal visa application cost still applies.",
  },
  {
    question: "Can I apply for both 190 and 491 at the same time?",
    answer:
      "Yes. Many applicants run both in parallel using the same federal EOI while submitting separate ROI strategies where appropriate.",
  },
];

export const relatedPathways = [
  {
    visa: "Subclass 190",
    title: "State Nomination",
    description:
      "+5 points and permanent residency from day one. Better fit if you are not yet working in regional Victoria.",
    href: "/190-pathway",
  },
  {
    visa: "Subclass 189",
    title: "Skilled Independent",
    description:
      "No regional commitment and no nomination required. Best suited to profiles already sitting in the stronger 189 range.",
    href: "/189-pathway",
  },
  {
    visa: "Subclass 482 / 186",
    title: "Employer Sponsored",
    description:
      "If a genuine sponsor is available, employer sponsorship can bypass the nomination queue entirely.",
    href: "/employer-pathway",
  },
];
