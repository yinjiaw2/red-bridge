import {
  Search,
  CreditCard,
  ShieldOff,
  ClipboardX,
  LayoutList,
  UserMinus,
} from "lucide-react";

interface ComparisonRow {
  deserve: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  others: {
    title: string;
    description: string;
  };
  redBridge: {
    title: string;
    description: React.ReactNode;
  };
}

export const comparisonData: ComparisonRow[] = [
  {
    deserve: {
      icon: <Search size={16} aria-hidden="true" />,
      title: "Job listings you can verify",
      description: "You only find out they're fake after paying.",
    },
    others: {
      title: "Unverified employer details",
      description: "No proof of sponsorship.",
    },
    redBridge: {
      title: "Verified Employers, Upfront",
      description:
        "We share employer names, industry, and 482 sponsorship approval during your free consultation — before you commit.",
    },
  },
  {
    deserve: {
      icon: <CreditCard size={16} aria-hidden="true" />,
      title: "Full fees charged upfront",
      description: "They pay thousands before any work begins.",
    },
    others: {
      title: "Large upfront payments",
      description: "High financial risk.",
    },
    redBridge: {
      title: "Pay As We Progress",
      description:
        "Fees are documented in a Client Agreement and split across 3–4 milestone stages.",
    },
  },
  {
    deserve: {
      icon: <ShieldOff size={16} aria-hidden="true" />,
      title: "Unregistered consultants",
      description: "Advise without legal accountability.",
    },
    others: {
      title: "Give migration advice without being licensed",
      description: "No regulatory oversight.",
    },
    redBridge: {
      title: "Licensed Migration Law Partner",
      description: (
        <>
          All visa lodgements are handled by{" "}
          <a
            href="https://www.insightidea.com.au/en/success"
            target="_blank"
            rel="noopener"
            className="font-bold underline underline-offset-2"
          >
            Insight Idea
          </a>{" "}
          — a registered Australian law firm and MARA migration agent.
        </>
      ),
    },
  },
  {
    deserve: {
      icon: <ClipboardX size={16} aria-hidden="true" />,
      title: "Fabricated work & work evidence",
      description: "Hours/jobs that fail skill assessments.",
    },
    others: {
      title: "Hard to verify work experience",
      description: "Assessment risk.",
    },
    redBridge: {
      title: "400+ Hours of Genuine Paid Work",
      description:
        "We deliver documented paid timesheets in the exact format required for CAANZ, ACS, and AMI skills assessments.",
    },
  },
  {
    deserve: {
      icon: <LayoutList size={16} aria-hidden="true" />,
      title: "One-size-fits-all pathways",
      description: "Everyone gets the same recommendation.",
    },
    others: {
      title: "Pushes programs that may not suit your situation",
      description: "No personalised matching.",
    },
    redBridge: {
      title: "Not Matching, Not Selling",
      description:
        "We're clear first: if a pathway isn't right for you, we say so at the free consultation.",
    },
  },
  {
    deserve: {
      icon: <UserMinus size={16} aria-hidden="true" />,
      title: "You're left on your own",
      description: "Support ends after payment.",
    },
    others: {
      title: "Limited guidance after payment",
      description: "You handle it alone.",
    },
    redBridge: {
      title: "Success Guarantee & Ongoing Support",
      description:
        "If you complete the program and don't pass your skills assessment, we continue supporting you at no extra cost.",
    },
  },
];
