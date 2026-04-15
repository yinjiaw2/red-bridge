export const servicesStats = [
  { value: "200+", label: "Career placements" },
  { value: "300+", label: "Skills assessments passed" },
  { value: "150+", label: "Employer matches made" },
  { value: "5", label: "Migration pathways covered" },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We assess your background, goals, and eligibility honestly. No obligation, no upfront cost. If we can't genuinely help you, we'll say so clearly.",
  },
  {
    number: "02",
    title: "Pathway Match",
    description:
      "We identify pathways we can genuinely deliver. You see the employer profiles and a clear, costed plan before committing.",
  },
  {
    number: "03",
    title: "Employer Placement",
    description:
      "Connected with a verified employer from our vetted network. Real sponsorship credentials and real employment records that hold up to scrutiny.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We stay with you through skills assessment, visa lodgement, and settlement. Legal matters are handled by our licensed partner Insight Idea throughout.",
  },
] as const;

export const serviceCards = [
  {
    id: "career-launch",
    title: "Career Launch Program",
    eyebrow: "Career Development",
    description:
      "Real paid Australian work experience for recent graduates, with supervised mentoring, logbook support, and reference letters for your next migration step.",
    href: "/services/career-launch",
    cta: "View Career Launch Program",
    featured: true,
    icon: "rocket",
    pills: [
      "400+ hours work experience",
      "Skills assessment support",
      "CPA / ACS / AMI aligned",
      "Accounting, IT, Marketing",
    ],
  },
  {
    id: "pathway-189",
    title: "189 Skilled Pathway",
    eyebrow: "Independent Skilled Visa",
    description:
      "A direct PR route without employer sponsorship or state nomination. We help you maximise points, prepare the skills assessment, and position your EOI strategically.",
    href: "/services/189-pathway",
    cta: "View 189 Pathway",
    icon: "star",
    pills: [
      "No employer needed",
      "Points strategy",
      "Direct PR from grant",
      "Strong EOI positioning",
    ],
  },
  {
    id: "pathway-190",
    title: "190 State Nomination",
    eyebrow: "State Nominated Visa",
    description:
      "Victoria nomination adds bonus points and opens a state-managed pathway. We prepare both your federal EOI and state ROI with a focused strategy.",
    href: "/services/190-pathway",
    cta: "View 190 Pathway",
    icon: "map-pin",
    pills: [
      "+5 bonus points",
      "Victoria nomination support",
      "EOI + ROI preparation",
      "Direct PR from grant",
    ],
  },
  {
    id: "pathway-491",
    title: "491 Regional Pathway",
    eyebrow: "Regional Skilled Visa",
    description:
      "A high-points-boost pathway for clients open to regional Victoria. Often the most realistic route when 189 is too competitive and you still want a PR outcome.",
    href: "/services/491-pathway",
    cta: "View 491 Pathway",
    icon: "sprout",
    pills: [
      "+15 bonus points",
      "Regional Victoria focus",
      "Pathway toward PR",
      "Stronger invitation odds",
    ],
  },
  {
    id: "employer-sponsored",
    title: "482/186 Employer Sponsored",
    eyebrow: "Employer Sponsored Visa",
    description:
      "Access to verified sponsor opportunities and a structured route from temporary work rights to permanent residency through the right employer match.",
    href: "/services/employer-pathway",
    cta: "View Employer Sponsored",
    featured: true,
    icon: "briefcase",
    pills: [
      "Verified sponsor network",
      "482 to 186 pathway",
      "No points score needed",
      "Employer matching support",
    ],
  },
] as const;

export const finderCards = [
  {
    title: "Recent Graduate, No Australian Experience",
    description:
      "You need local work history and proper references before your next migration step can become realistic.",
    href: "/services/career-launch",
    cta: "Career Launch Program",
    icon: "graduation",
  },
  {
    title: "Strong Points Score, No Sponsor Needed",
    description:
      "You want the cleanest PR route and have a competitive profile for an independent skilled pathway.",
    href: "/services/189-pathway",
    cta: "189 Skilled Pathway",
    icon: "star",
  },
  {
    title: "Employed in Victoria, Needs a Points Boost",
    description:
      "You're close to invitation level but need the extra advantage that state nomination can provide.",
    href: "/services/190-pathway",
    cta: "190 State Nomination",
    icon: "map-pin",
  },
  {
    title: "Open to Regional Victoria, Needs More Points",
    description:
      "Regional work and location flexibility could unlock a much stronger migration position for you.",
    href: "/services/491-pathway",
    cta: "491 Regional Pathway",
    icon: "sprout",
  },
  {
    title: "Have a Job Offer or Want Employer Matching",
    description:
      "You want sponsorship support now, or you'd like us to help identify a genuine employer pathway.",
    href: "/services/employer-pathway",
    cta: "482/186 Employer Sponsored",
    icon: "briefcase",
  },
  {
    title: "Not Sure Which Path Is Right",
    description:
      "Some clients qualify for more than one route. We map the strongest option during your free consultation.",
    href: "/contact",
    cta: "Book Free Consultation",
    icon: "question",
  },
] as const;

