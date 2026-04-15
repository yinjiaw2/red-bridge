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
      "We identify pathways we can genuinely deliver. You see the employer profiles and a clear, costed plan before committing — no vague promises.",
  },
  {
    number: "03",
    title: "Employer Placement",
    description:
      "Connected with a verified employer from our vetted network. Real sponsorship credentials, real employment records that hold up to Department scrutiny.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We stay with you through skills assessment, visa lodgement, and settlement. Legal matters handled by licensed partner Insight Idea throughout.",
  },
] as const;

export const serviceCards = [
  {
    id: "career-launch",
    title: "Career Launch Program",
    eyebrow: "Career Development",
    description:
      "Real paid Australian work experience for recent graduates — 400+ hours working under a qualified mentor, building the logbook and reference letter that skills assessing bodies require. Available across Accounting, IT & Data, and Marketing majors.",
    href: "/services#career-launch",
    cta: "View Career Launch Program",
    featured: true,
    icon: "rocket",
    pills: [
      "400+ hours work experience",
      "Skills assessment guarantee",
      "CPA / ACS / AMI logbook",
      "Accounting · IT · Marketing",
    ],
  },
  {
    id: "pathway-189",
    title: "189 Skilled Pathway",
    eyebrow: "Independent Skilled Visa · Subclass 189",
    description:
      "Australia's purest merit-based permanent residency pathway — no employer sponsor, no state nomination, no regional obligation. We map every point available to you, prepare your skills assessment, and position your EOI for the next quarterly invitation round.",
    href: "/189-pathway",
    cta: "View 189 Pathway",
    icon: "star",
    pills: [
      "No employer needed",
      "Points maximisation strategy",
      "Direct PR from grant",
      "90–100+ pts competitive",
    ],
  },
  {
    id: "pathway-190",
    title: "190 State Nomination",
    eyebrow: "State Nominated Visa · Subclass 190",
    description:
      "Victoria's state nomination adds 5 points to your SkillSelect EOI and moves you into a state-managed selection pool — often less crowded than the federal queue for ICT and Marketing professionals. We prepare both your federal EOI and your Victorian ROI submission.",
    href: "/190-pathway",
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
    eyebrow: "Regional Skilled Visa · Subclass 491",
    description:
      "The largest single points boost in the skilled migration system — 15 points for committing to live and work in regional Victoria for three years. For ICT and Marketing professionals who can't reach competitive 189 scores, this is often the most viable route to a PR grant.",
    href: "/491-pathway",
    cta: "View 491 Pathway",
    icon: "sprout",
    pills: [
      "+15 bonus points",
      "Geelong, Ballarat, Bendigo",
      "3 years → PR pathway",
      "70–85 base pts viable",
    ],
  },
  {
    id: "employer-sponsored",
    title: "482/186 Employer Sponsored",
    eyebrow: "Employer Sponsored · Subclass 482 & 186",
    description:
      "Direct access to a verified employer network where every position is confirmed before it reaches you. We match your skills to a genuine sponsor, manage the 482 temporary visa, and stay with you all the way to 186 permanent residency — no lists, no guesswork.",
    href: "/employer-pathway",
    cta: "View Employer Sponsored",
    featured: true,
    icon: "briefcase",
    pills: [
      "Verified sponsor network",
      "482 temporary → 186 PR",
      "No points score needed",
      "150+ matches made",
    ],
  },
] as const;

export const finderCards = [
  {
    title: "Recent Graduate, No Australian Experience",
    description:
      "You have an overseas degree but lack the local work history skills assessing bodies require. The Career Launch Program builds your logbook and gives you the reference letters needed for a positive assessment.",
    href: "/services#career-launch",
    cta: "Career Launch Program",
    icon: "graduation",
  },
  {
    title: "Strong Points Score, No Sponsor Needed",
    description:
      "You have 90+ points and want the cleanest path to PR — no employer dependency, no regional commitment. The 189 gives you permanent residency on your own terms.",
    href: "/189-pathway",
    cta: "189 Skilled Pathway",
    icon: "star",
  },
  {
    title: "Employed in Victoria, Needs a Points Boost",
    description:
      "You're working in Melbourne with a solid profile but falling short of competitive 189 cut-offs. Victoria's 190 nomination adds 5 points and routes you through a less saturated selection pool.",
    href: "/190-pathway",
    cta: "190 State Nomination",
    icon: "map-pin",
  },
  {
    title: "Open to Regional Victoria, Needs More Points",
    description:
      "If you're currently employed — or willing to work — in regional Victoria, the 491's 15-point bonus often makes the difference between waiting years and receiving an invitation in the next round.",
    href: "/491-pathway",
    cta: "491 Regional Pathway",
    icon: "sprout",
  },
  {
    title: "Have a Job Offer or Want Employer Matching",
    description:
      "If you already have an employer interested in sponsoring you — or want us to find one — the 482 route gives you immediate work rights while your 186 PR is built over 2–3 years.",
    href: "/employer-pathway",
    cta: "482/186 Employer Sponsored",
    icon: "briefcase",
  },
  {
    title: "Not Sure Which Path Is Right",
    description:
      "Many clients run two pathways simultaneously — for example, 190 and 491, or Career Launch alongside a 189 EOI. We map the optimal strategy during your free consultation.",
    href: "/#contact",
    cta: "Book Free Consultation",
    icon: "question",
  },
] as const;
