export const heroTrustItems = [
  "Permanent residency from day one",
  "Full work rights — any employer",
  "Skills assessment preparation included",
  "EOI lodged by Insight Idea (MARN: 1467870)",
] as const;

export const heroStats = [
  { value: "65+", label: "Minimum points to lodge" },
  { value: "85+", label: "Effective target for most occupations" },
  { value: "4×", label: "Quarterly invitation rounds per year" },
  { value: "300+", label: "Skills assessments prepared by RedBridge" },
] as const;

export const pointsCategories = [
  {
    title: "Age",
    max: "Max: 30 pts",
    icon: "age",
    note: "Age is calculated at the time of invitation, not application. If you are approaching a threshold, timing your EOI submission carefully can preserve points.",
    rows: [
      ["18–24 years", "25 pts"],
      ["25–32 years", "30 pts"],
      ["33–39 years", "25 pts"],
      ["40–44 years", "15 pts"],
      ["45+ years", "Not eligible"],
    ],
  },
  {
    title: "English Language",
    max: "Max: 20 pts",
    icon: "language",
    note: "The 20-point gap between Competent and Superior English is the single largest swing available to most applicants. Retaking your English test is frequently the fastest way to move from 75 points to 95 points.",
    rows: [
      ["Superior English (IELTS 8+ all bands)", "20 pts"],
      ["Proficient English (IELTS 7+ all bands)", "10 pts"],
      ["Competent English (IELTS 6+ all bands)", "Mandatory — 0 bonus"],
    ],
  },
  {
    title: "Skilled Employment",
    max: "Max: 20 pts (overseas) + 20 pts (Australian)",
    icon: "briefcase",
    note: "Australian experience counts separately from and in addition to overseas experience. Both streams can be claimed simultaneously. RedBridge's Career Launch Program can generate legitimate, verified Australian experience for clients who need it.",
    rows: [
      ["Australian — 8+ years", "20 pts"],
      ["Australian — 5–7 years", "15 pts"],
      ["Australian — 3–4 years", "10 pts"],
      ["Australian — 1–2 years", "5 pts"],
      ["Overseas — 8+ years", "15 pts"],
      ["Overseas — 5–7 years", "10 pts"],
      ["Overseas — 3–4 years", "5 pts"],
    ],
  },
  {
    title: "Education & Qualifications",
    max: "Max: 20 pts",
    icon: "education",
    note: "The Professional Year (PY) is a structured 44-week graduate program that awards 5 bonus points. For ICT graduates, the PY is run by the Australian Computer Society Foundation (ACSF). For Accountants, by relevant accounting bodies. RedBridge advises on PY eligibility as part of your points mapping.",
    rows: [
      ["Doctorate (PhD)", "20 pts"],
      ["Bachelor's or Master's degree", "15 pts"],
      ["Diploma or trade qualification", "10 pts"],
      ["Australian study requirement met", "5 pts"],
      ["Specialist education (regional campus)", "5 pts"],
      ["Professional Year completed", "5 pts"],
    ],
  },
  {
    title: "Partner & Other Factors",
    max: "Max: 10 pts partner + 5 pts NAATI",
    icon: "partner",
    note: "Partner points are frequently overlooked. If your partner has a relevant skills assessment, claiming those 10 points can move an 80-point profile to 90 — a significant queue position improvement. NAATI certification in a community language (including Mandarin) is also claimable.",
    rows: [
      ["Partner: skills assessment + competent English", "10 pts"],
      ["Partner: competent English only", "5 pts"],
      ["Applicant is single / partner not accompanying", "10 pts"],
      ["NAATI credentialled community language", "5 pts"],
    ],
  },
  {
    title: "Your Total — What It Means",
    max: "Out of 130 possible",
    icon: "star",
    featured: true,
    note: "This is your starting point. RedBridge's free assessment identifies every category where you may be leaving points unclaimed — and maps the fastest route to the score your occupation requires.",
    rows: [
      ["Under 65 pts", "Not eligible to lodge EOI"],
      ["65–79 pts", "Eligible, but may wait 1–3+ years"],
      ["80–89 pts", "Competitive for many occupations"],
      ["90–94 pts", "Strong — most occupations viable"],
      ["95–100+ pts", "ICT/Marketing competitive range"],
    ],
  },
] as const;

export const occupationTiers = [
  {
    label: "Highly Competitive",
    title: "ICT — Software Engineers, Business Analysts, IT Project Managers",
    description:
      "Among the highest-volume EOI fields globally. Occupation ceilings apply — the government limits how many invitations are issued per occupation per round to manage market saturation. Requires a consistently strong profile to receive invitation within a reasonable timeframe.",
    score: "95–100+",
    scoreLabel: "Typical cut-off pts",
    tone: "hard",
  },
  {
    label: "Highly Competitive",
    title: "Marketing — Marketing Specialists, Digital Marketing Managers",
    description:
      "Marketing occupations sit in the same saturated tier as ICT for SkillSelect purposes. The AMI skills assessment is a prerequisite regardless of the mandatory assessment instrument — and a strong Australian work history is the most effective differentiator.",
    score: "90–100+",
    scoreLabel: "Typical cut-off pts",
    tone: "hard",
  },
  {
    label: "Competitive",
    title: "Engineering — Civil, Mechanical, Electrical Engineers",
    description:
      "Engineers Australia (EA) assessment required. Generally sits in the competitive-but-manageable tier, with most applicants needing 85–90 points for a realistic invitation timeline.",
    score: "85–90",
    scoreLabel: "Typical cut-off pts",
    tone: "mid",
  },
  {
    label: "Lower Competition",
    title: "Trades — Carpenters, Plumbers, Electricians, Welders",
    description:
      "Critical shortage occupations. Government actively prioritises these. Invitations have been issued from as low as 65–70 points in recent rounds, with far less waiting time than professional occupations.",
    score: "65–75",
    scoreLabel: "Typical cut-off pts",
    tone: "easy",
  },
] as const;

export const strategyCards = [
  {
    title: "Full Points Audit",
    description:
      "We map every available points category against your profile — age, English level, employment history (Australian and overseas), qualifications, partner factors, and NAATI. Many clients discover unclaimed points in categories they had overlooked.",
    badge: "Free at consultation",
    icon: "calculator",
  },
  {
    title: "English Score Strategy",
    description:
      "The gap between Proficient and Superior English is 10 points — enough to change your entire invitation timeline. We assess your current test scores and, where the improvement is realistic, build a structured preparation plan targeting the specific band scores that trigger the uplift.",
    badge: "Up to +10 pts",
    icon: "language",
  },
  {
    title: "Skills Assessment Preparation",
    description:
      "A positive skills assessment is mandatory for the 189 — from ACS for ICT occupations, AMI for Marketing, or Engineers Australia for engineers. RedBridge prepares your employment documentation, project evidence, and application narrative to give your assessment the best chance of a first-attempt pass.",
    badge: "Required for all 189 applicants",
    icon: "clipboard",
  },
  {
    title: "Australian Experience Building",
    description:
      "Each additional year of verified Australian skilled employment in your nominated occupation adds points to your profile. For clients who need more Australian experience to reach a competitive score, our Career Launch Program generates genuine, documented employment that satisfies ACS and AMI assessment requirements.",
    badge: "Up to +20 pts (AU employment)",
    icon: "briefcase",
  },
  {
    title: "Partner Points Review",
    description:
      "If your partner is accompanying you and has a relevant skills assessment from a recognised authority, you can claim 10 additional points. We review your partner's qualifications and advise on whether obtaining a skills assessment is worthwhile given the points gain and assessment cost.",
    badge: "Up to +10 pts",
    icon: "users",
  },
  {
    title: "Alternative Pathway Mapping",
    description:
      "If your current profile makes the 189 timeline unrealistic, we tell you clearly — and then map your 190 or 491 options, where state nomination adds 5–15 points and the competition pool is significantly smaller. A parallel strategy often gets you PR faster than waiting for a 189 invitation alone.",
    badge: "Honest assessment — no upsell",
    icon: "map-pin",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    who: "RedBridge",
    title: "Free Points Assessment",
    description:
      "Your RedBridge consultant maps your full points profile across every available category. You receive a clear score calculation, an honest assessment of your invitation prospects by occupation, and — if relevant — a recommendation to consider 190 or 491 as a parallel strategy.",
    timing: "Week 1 — free, no obligation",
    legal: false,
  },
  {
    number: "02",
    who: "RedBridge",
    title: "Skills Assessment Preparation",
    description:
      "RedBridge prepares your skills assessment submission — employment documentation, statutory declarations, project evidence, and role descriptions structured to meet ACS, AMI, or Engineers Australia requirements. The assessment is then submitted to the relevant authority. Results typically take 4–12 weeks depending on the assessing body.",
    timing: "Weeks 2–16 depending on assessing authority",
    legal: false,
  },
  {
    number: "03",
    who: "RedBridge",
    title: "Points Maximisation Window",
    description:
      "While your skills assessment is in progress, RedBridge works on any remaining points opportunities — English test strategy, Professional Year eligibility, partner assessment, and NAATI. The goal is to have your EOI at the highest possible score before lodgement.",
    timing: "Parallel to skills assessment",
    legal: false,
  },
  {
    number: "04",
    who: "Insight Idea — MARA Agent",
    title: "EOI Lodged in SkillSelect",
    description:
      "Once your skills assessment result is received, Insight Idea reviews your full profile, confirms your points, and lodges your Expression of Interest in SkillSelect. Your Date of Effect is set from this moment. Insight Idea also advises on whether to lodge immediately or wait for a specific additional improvement first.",
    timing: "After positive skills assessment result",
    legal: true,
  },
  {
    number: "05",
    who: "Insight Idea — MARA Agent",
    title: "Invitation Received — Application Lodged",
    description:
      "When the Department issues your Invitation to Apply (ITA), you have 60 days to lodge your complete visa application. Insight Idea prepares every document, manages any Department requests for further information, and lodges the final application.",
    timing: "60 days from ITA to lodge",
    legal: true,
  },
  {
    number: "★",
    who: "Insight Idea — MARA Agent",
    title: "189 Visa Granted — Permanent Resident",
    description:
      "Your 189 visa is granted. You are a Permanent Resident of Australia from the date of grant — full work rights, Medicare, and a pathway to citizenship after 4 years as a PR. RedBridge CRM tracks your milestone and Insight Idea is notified of any relevant post-grant obligations.",
    timing: "Permanent Resident",
    legal: true,
    success: true,
  },
] as const;

export const faqItems = [
  {
    question: "How many points do I need for a 189 visa in 2026?",
    answer:
      "You need a minimum of 65 points to submit an Expression of Interest. In practice, for most professional occupations — including ICT and Marketing — the effective minimum to receive an invitation within a reasonable timeframe is 85 points, and highly competitive occupations frequently require 95–100 or more. Trades occupations have seen invitations issued from 65–70 points due to genuine critical shortages. Your specific target depends on your occupation, and we calculate this during your free assessment.",
  },
  {
    question: "What is SkillSelect and how do quarterly rounds work?",
    answer:
      "SkillSelect is the Australian Government's online Expression of Interest system. You submit your EOI with your points score, and the Department conducts invitation rounds approximately four times per year. In each round, the highest-scoring EOIs are invited first. For equal scores, the Date of Effect determines who is invited. The November 2025 round issued 10,000 invitations for the 189 alone, which was one of the largest rounds in recent years.",
  },
  {
    question: "Is a skills assessment mandatory for the 189 visa?",
    answer:
      "Yes — a positive skills assessment is a mandatory requirement for the 189 visa regardless of occupation. This is different from the 482 visa, where assessment is only mandatory for 25 specific occupations. For the 189, every applicant must have their skills formally assessed by the relevant authority before their EOI can be submitted. RedBridge prepares clients for their ACS, AMI, or Engineers Australia assessment as part of the 189 program.",
  },
  {
    question: "What is the Date of Effect and why does it matter?",
    answer:
      "The Date of Effect (DOE) is the date you first reached your current points score in SkillSelect. When two applicants share the same points score in an invitation round, the one with the earlier DOE is invited first. This means the timing of your EOI submission is a strategic decision — submitting early locks in a favourable DOE, but updating your score later resets it to the date of the improvement. Insight Idea advises on optimal submission timing as part of your EOI strategy.",
  },
  {
    question: "My occupation is highly competitive. Should I also apply for 190 or 491?",
    answer:
      "For ICT and Marketing professionals, a dual strategy is often the fastest route to PR. The 190 State Nomination adds 5 points to your score and puts you in a separate, usually less crowded invitation queue. The 491 Regional Pathway adds 15 points and is significantly less competitive. If your profile makes the 189 timeline realistic in under 2–3 years, we recommend pursuing it as the primary path. If the timeline is longer, we recommend running 190 or 491 in parallel. We map all three options at your free consultation.",
  },
  {
    question: "Can my partner's skills assessment add points to my application?",
    answer:
      "Yes. If your accompanying partner has a positive skills assessment from a recognised authority and competent English, you can claim 10 additional points. If they have competent English but no skills assessment, you claim 5 points. If you are applying as a single applicant or your partner is not accompanying you, you also claim 10 points. We review partner factors as part of your free points audit.",
  },
] as const;

export const relatedPathways = [
  {
    visa: "Subclass 190",
    title: "State Nomination",
    description:
      "+5 points from state nomination. Separate, less crowded invitation queue. Often faster than 189 for ICT and Marketing profiles sitting at 80–90 points.",
    href: "/190-pathway",
  },
  {
    visa: "Subclass 491",
    title: "Regional Pathway",
    description:
      "+15 points from regional nomination. Significantly lower competition. Leads to 191 PR after 3 years of regional living and working. Worth considering seriously for ICT profiles.",
    href: "/491-pathway",
  },
  {
    visa: "Subclass 482 / 186",
    title: "Employer Sponsored",
    description:
      "If you have 1+ year of experience and a willing employer, the 482 → 186 route avoids the points queue entirely. Permanent residency via employment rather than competition.",
    href: "/employer-pathway",
  },
] as const;
