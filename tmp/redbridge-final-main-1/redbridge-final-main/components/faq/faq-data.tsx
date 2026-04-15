import Link from "next/link";
import type { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const faqItems: FaqItem[] = [
  {
    question: "Are RedBridge Consulting job placements genuine and verified?",
    answer: (
      <p>
        Yes. Every employer in our network is checked before we present them to clients. We only move forward when
        the sponsorship status, role details, and business context have been verified well enough to stand up to
        scrutiny.
      </p>
    ),
  },
  {
    question: "What is the difference between a 482 and 186 employer sponsored visa?",
    answer: (
      <p>
        The <strong>482</strong> is a temporary employer-sponsored visa. The <strong>186</strong> is a permanent
        residency visa. Many clients start on a 482 and later transition to the 186 when the employer pathway and
        timing are right.
      </p>
    ),
  },
  {
    question: "How long does the 482 employer sponsored visa process take in Australia?",
    answer: (
      <p>
        The 482 process usually falls somewhere between <strong>3 and 12 months</strong>. The range depends on the
        employer&apos;s sponsorship status, your occupation, document readiness, and current Department processing
        times.
      </p>
    ),
  },
  {
    question: "How long does 190 state nomination take in Victoria?",
    answer: (
      <p>
        Victoria 190 timing varies. A realistic range is often <strong>2 to 12 months</strong>, depending on your
        points, occupation, and the pace of invitation rounds during that period.
      </p>
    ),
  },
  {
    question: "Can international students apply without permanent residency or a job offer?",
    answer: (
      <p>
        Yes. Some clients begin with work-experience-building routes rather than immediate PR or sponsorship routes.{" "}
        <Link href="/services#career-launch" className="font-semibold text-[var(--accent)] underline underline-offset-4">
          Career Launch
        </Link>{" "}
        is built for that earlier stage.
      </p>
    ),
  },
  {
    question: "How much does skilled migration cost in Australia?",
    answer: (
      <p>
        Your initial consultation with RedBridge is free. Program costs vary by route and scope, and government fees
        sit separately from our service fees. The key principle is that costs are documented clearly before you commit.
      </p>
    ),
  },
  {
    question: "Are there payment plans available for migration consultancy fees?",
    answer: (
      <p>
        Yes. We use milestone-based instalment structures rather than demanding full payment upfront. The exact timing
        depends on the service and the pathway being delivered.
      </p>
    ),
  },
  {
    question: "What is the skills assessment success guarantee?",
    answer: (
      <p>
        If you complete the relevant program and your skills assessment is not successful, we continue supporting you
        at no additional cost until the assessment requirement is properly resolved.
      </p>
    ),
  },
  {
    question: "Which visa pathway is right for my occupation and situation?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>Recent graduates needing local experience:</strong>{" "}
          <Link href="/services#career-launch" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            Career Launch Program
          </Link>
        </p>
        <p>
          <strong>Employer interest or sponsor route:</strong>{" "}
          <Link href="/employer-pathway" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            482/186 Employer Sponsored
          </Link>
        </p>
        <p>
          <strong>Independent points-based PR:</strong>{" "}
          <Link href="/189-pathway" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            189 Pathway
          </Link>
        </p>
        <p>
          <strong>State-backed points boost:</strong>{" "}
          <Link href="/190-pathway" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            190 Pathway
          </Link>
        </p>
        <p>
          <strong>Regional migration with extra points:</strong>{" "}
          <Link href="/491-pathway" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            491 Pathway
          </Link>
        </p>
        <p>
          The fastest way to know is to book the free consultation and get a tailored, no-pressure assessment.
        </p>
      </div>
    ),
  },
  {
    question: "Who handles visa lodgement and migration legal matters?",
    answer: (
      <p>
        All formal migration advice and visa lodgements are handled by{" "}
        <Link
          href="https://www.insightidea.com.au/en/success"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--accent)] underline underline-offset-4"
        >
          Insight Idea
        </Link>
        , our licensed legal partner. RedBridge handles the career, pathway, and employer side of the work, while the
        legal migration work stays with the registered migration professionals.
      </p>
    ),
  },
  {
    question: "What industries and occupations does RedBridge Consulting specialise in?",
    answer: (
      <p>
        Our strongest focus is in <strong>Accounting and Finance</strong>, <strong>ICT and Technology</strong>, and{" "}
        <strong>Marketing and Business</strong>. Those are the sectors around which our employer network and skills
        assessment preparation systems have been built.
      </p>
    ),
  },
  {
    question: "Where is RedBridge Consulting located and do you offer online consultations?",
    answer: (
      <p>
        Our office is at <strong>Level 9, Tower 3, 18–38 Siddeley Street, Docklands VIC 3008</strong>, and yes, we
        also offer online consultations for clients who are interstate, offshore, or simply prefer remote meetings.
      </p>
    ),
  },
];
