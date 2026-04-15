export const heroTrustItems = [
  "Permanent residency from day one",
  "+5 points from Victoria nomination",
  "Separate ROI queue — less competition",
  "EOI + ROI strategy by Insight Idea (MARN: 1467870)",
];

export const heroStats = [
  { value: "2,700", label: "Victoria 190 places 2025–26" },
  { value: "+5", label: "Bonus points from nomination" },
  { value: "80–85", label: "Typical competitive points in VIC" },
  { value: "2 yrs", label: "Victoria living commitment" },
];

type CompareColumn = {
  visa: string;
  title: string;
  tone: "light" | "accent";
  rows: { text: string; tone: "positive" | "neutral" | "negative" }[];
};

export const compareColumns: CompareColumn[] = [
  {
    visa: "Subclass 189 — Skilled Independent",
    title: "No sponsor, no state, no commitment.",
    tone: "light",
    rows: [
      { text: "No state nomination — you compete solely in the federal SkillSelect queue", tone: "negative" },
      { text: "No bonus points beyond the base test — maximum from your own profile only", tone: "negative" },
      { text: "No living commitment — live and work anywhere in Australia from day one", tone: "positive" },
      { text: "For ICT and Marketing, typically requires 95–100+ points for a timely invitation", tone: "negative" },
      { text: "Single process — EOI in SkillSelect, wait for invitation, then lodge application", tone: "positive" },
    ],
  },
  {
    visa: "Subclass 190 — Skilled Nominated · Victoria",
    title: "State nomination. Five extra points. A different queue.",
    tone: "accent",
    rows: [
      { text: "+5 points from Victoria nomination — often enough to move an 80-point profile to 85", tone: "positive" },
      { text: "Separate ROI-based selection system managed by Victoria independently of federal SkillSelect", tone: "positive" },
      { text: "Commitment to live and work in Victoria for at least 2 years after grant", tone: "neutral" },
      { text: "Often faster for well-matched profiles because Victoria's pool is smaller than the global 189 queue", tone: "positive" },
      { text: "Two-step process: federal EOI in SkillSelect plus ROI in the Live in Melbourne portal", tone: "neutral" },
    ],
  },
] as const;

type RoiStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  timing: string;
  tone: "federal" | "state" | "legal" | "success";
};

export const roiSteps: RoiStep[] = [
  {
    number: "01",
    label: "Federal — SkillSelect",
    title: "Submit EOI",
    description:
      "Lodge your Expression of Interest in the Department of Home Affairs SkillSelect system, selecting Victoria for nomination.",
    timing: "Free — online",
    tone: "federal",
  },
  {
    number: "02",
    label: "Victoria — Live in Melbourne",
    title: "Submit ROI",
    description:
      "Using your EOI number, submit a Registration of Interest with evidence of skills, employment, earnings, and Victorian ties.",
    timing: "Separate to EOI",
    tone: "state",
  },
  {
    number: "03",
    label: "Victoria — Live in Melbourne",
    title: "Invited to Apply",
    description:
      "Victoria issues invitations to its highest-ranked ROI candidates. Timing can be weeks to months, and you usually have 14 days to submit full nomination documents.",
    timing: "No set date",
    tone: "state",
  },
  {
    number: "04",
    label: "Insight Idea — MARA Agent",
    title: "Nomination Granted",
    description:
      "Your nomination certificate is issued, adding +5 points to your EOI and triggering a federal invitation to apply for the 190 visa.",
    timing: "After nomination approval",
    tone: "legal",
  },
  {
    number: "★",
    label: "Insight Idea — MARA Agent",
    title: "Visa Application",
    description:
      "Insight Idea lodges your 190 visa application within 60 days of nomination. Once granted, you are a Permanent Resident of Australia.",
    timing: "PR from grant date",
    tone: "success",
  },
];

export const federalRequirements = [
  {
    title: "Under 45 years old",
    description: "At the time of nomination invitation.",
  },
  {
    title: "At least Competent English",
    description:
      "IELTS 6.0 in all bands or equivalent. Proficient or Superior English earns additional points.",
  },
  {
    title: "Positive skills assessment",
    description:
      "Mandatory for all 190 applicants, and at least 12 weeks of validity must remain at nomination application stage.",
  },
  {
    title: "At least 65 points on the federal test",
    description: "Including the 5 points for state nomination, so a base score of 60 is the true minimum.",
  },
  {
    title: "Occupation on the skilled occupation list",
    description: "Your nominated occupation must be eligible under the federal skilled occupation framework.",
  },
];

export const stateRequirements = [
  {
    title: "Living in Victoria if you are onshore",
    description: "ROIs from applicants living in other Australian states are generally not selected.",
  },
  {
    title: "Employment in Victoria is strongly advantageous",
    description:
      "Not mandatory, but skilled work for a Victoria-based employer lets you claim estimated annual earnings in your ROI.",
  },
  {
    title: "Commitment to live and work in Victoria",
    description: "At least 2 years after grant. Victoria may survey nominated applicants after arrival.",
  },
  {
    title: "ROI evidence must support every claim",
    description:
      "Your nomination can be refused if employment, earnings, or skills claims cannot be substantiated.",
  },
];

type PriorityCard = {
  label: string;
  title: string;
  description: string;
  tone: "high" | "mid" | "note";
};

export const priorityCards: PriorityCard[] = [
  {
    label: "Highest Priority",
    title: "Healthcare & Nursing",
    description:
      "Registered Nurses, GPs, and allied health roles dominated recent rounds and still enjoy the strongest nomination prospects.",
    tone: "high",
  },
  {
    label: "Highest Priority",
    title: "Education",
    description:
      "Primary, secondary, and early childhood teachers continue to receive strong support from Victoria's program.",
    tone: "high",
  },
  {
    label: "High Priority",
    title: "Construction & Trades",
    description:
      "Carpenters, plumbers, electricians, and construction managers remain closely tied to state infrastructure demand.",
    tone: "high",
  },
  {
    label: "Moderate Priority",
    title: "Engineering",
    description:
      "Civil, mechanical, and electrical engineers remain competitive but viable with a solid profile and Victorian employment.",
    tone: "mid",
  },
  {
    label: "Context Required",
    title: "ICT & Marketing",
    description:
      "Eligible, but not among Victoria's current headline priorities. Strong Victorian employment and earnings make the biggest difference.",
    tone: "note",
  },
];

type RoiFactor = {
  number: string;
  title: string;
  description: string;
  weight: string;
  tone: "high" | "mid" | "low";
};

export const roiFactors: RoiFactor[] = [
  {
    number: "1",
    title: "Estimated Annual Earnings in Victoria",
    description:
      "The strongest differentiator for onshore applicants. Higher verified earnings for a Victoria-based employer materially improve ranking.",
    weight: "Very High Weight",
    tone: "high",
  },
  {
    number: "2",
    title: "Occupation Demand in Victoria",
    description:
      "Victoria prioritises candidates whose occupations align with current state shortage areas, especially healthcare, education, and construction.",
    weight: "Very High Weight",
    tone: "high",
  },
  {
    number: "3",
    title: "SkillSelect Points Score",
    description:
      "Your federal score still matters, but it sits alongside state-specific ranking factors rather than replacing them.",
    weight: "High Weight",
    tone: "mid",
  },
  {
    number: "4",
    title: "English Proficiency Level",
    description:
      "Superior English is a major separator in Victoria's recent invitation rounds. Proficient English is the practical floor for competitiveness.",
    weight: "High Weight",
    tone: "mid",
  },
  {
    number: "5",
    title: "Ties to Victoria and Commitment Evidence",
    description:
      "A Victorian address, local employment, and clear commitment signals strengthen the nomination case and reduce refusal risk.",
    weight: "Moderate Weight",
    tone: "low",
  },
];

type ProcessStep = {
  number: string;
  who: string;
  title: string;
  description: string;
  timing: string;
  legal: boolean;
  success: boolean;
  noteTitle?: string;
  noteBody?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    who: "RedBridge",
    title: "Free Assessment — Points & ROI Prospects",
    description:
      "Your consultant calculates your federal points, reviews your Victorian employment and earnings profile, and gives you an honest view of how realistic the 190 is for your occupation.",
    timing: "Week 1 — free, no obligation",
    legal: false,
    success: false,
  },
  {
    number: "02",
    who: "RedBridge",
    title: "Skills Assessment Preparation",
    description:
      "RedBridge prepares your ACS, AMI, Engineers Australia, or other assessing-body submission while the broader EOI and ROI strategy is built in parallel.",
    timing: "4–12 weeks depending on assessing body",
    legal: false,
    success: false,
  },
  {
    number: "03",
    who: "Insight Idea — MARA Agent",
    title: "EOI Lodged + ROI Submitted",
    description:
      "Insight Idea lodges your EOI in SkillSelect and prepares the separate ROI submission for Live in Melbourne, making sure your skills, earnings, and Victorian ties are documented properly.",
    timing: "After positive skills assessment",
    legal: true,
    success: false,
    noteTitle: "14-day deadline",
    noteBody:
      "If Victoria invites you to apply for nomination, you usually have only 14 days to submit the full nomination package. We prepare the evidence early so that window is never a scramble.",
  },
  {
    number: "04",
    who: "Victorian Government",
    title: "Nomination Granted",
    description:
      "Victoria approves your nomination and issues the certificate that triggers the federal invitation and the extra 5 points in your profile.",
    timing: "Weeks to months — no fixed timeline",
    legal: false,
    success: false,
  },
  {
    number: "05",
    who: "Insight Idea — MARA Agent",
    title: "190 Visa Application Lodged",
    description:
      "Insight Idea lodges the full visa application within the 60-day post-nomination window and manages the Department process end to end.",
    timing: "Within 60 days of nomination",
    legal: true,
    success: false,
  },
  {
    number: "★",
    who: "Insight Idea — MARA Agent",
    title: "190 Visa Granted — Permanent Resident",
    description:
      "You become a Permanent Resident of Australia from grant, with full work rights, Medicare, and a Victorian settlement commitment for at least two years.",
    timing: "Permanent Resident",
    legal: true,
    success: true,
  },
];

export const faqItems = [
  {
    question: "What is the difference between the 189 and 190 visa?",
    answer:
      "Both are permanent residency visas from the date of grant. The 189 has no state nomination and no living commitment. The 190 adds 5 points through state nomination and places you in Victoria's separate selection queue, but comes with a two-year commitment to live and work in Victoria.",
  },
  {
    question: "What is an ROI and how is it different from an EOI?",
    answer:
      "An EOI is your federal SkillSelect profile. An ROI is a separate request for state nomination submitted through the Live in Melbourne portal. You need both for Victoria's 190 pathway.",
  },
  {
    question: "Do I need to be employed in Victoria to apply?",
    answer:
      "No, but local skilled employment is one of Victoria's strongest selection factors because it allows you to claim estimated annual earnings in your ROI.",
  },
  {
    question: "How many points do I need for Victoria's 190?",
    answer:
      "The legal minimum is 65 including the 5 nomination points. In practice, recent rounds have favoured stronger profiles, often around 80–85 points or more depending on occupation and demand.",
  },
  {
    question: "Is a skills assessment mandatory for the 190?",
    answer:
      "Yes. A positive skills assessment is mandatory for all 190 applicants, and Victoria expects that assessment to still have at least 12 weeks of validity remaining when you submit your nomination application.",
  },
  {
    question: "Can I apply for both 189 and 190 at the same time?",
    answer:
      "Yes. Running a 189 EOI alongside a Victorian 190 ROI is often the recommended strategy for ICT and Marketing professionals so that whichever queue moves first becomes the fastest path to PR.",
  },
];

export const relatedPathways = [
  {
    visa: "Subclass 189",
    title: "Skilled Independent",
    description:
      "No state commitment and no nomination required. Best suited to applicants already sitting in the stronger 189 invitation range.",
    href: "/189-pathway",
  },
  {
    visa: "Subclass 491",
    title: "Regional Pathway",
    description:
      "+15 points from regional nomination and significantly lower competition. Often the strongest alternative for ICT profiles below the 189 cut-off range.",
    href: "/491-pathway",
  },
  {
    visa: "Subclass 482 / 186",
    title: "Employer Sponsored",
    description:
      "If you have a genuine employer path, this route can bypass the points queue entirely and move through work sponsorship toward PR.",
    href: "/employer-pathway",
  },
];
