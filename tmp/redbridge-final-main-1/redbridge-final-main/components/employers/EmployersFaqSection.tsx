import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { employerFaqs } from "./employers-data";

export function EmployersFaqSection() {
  return (
    <section id="faq" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Employer FAQs</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            Common Questions from <span className="italic text-[var(--accent)]">Hiring Managers</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-[820px]">
          <FaqAccordion items={employerFaqs} />
        </div>
      </div>
    </section>
  );
}
