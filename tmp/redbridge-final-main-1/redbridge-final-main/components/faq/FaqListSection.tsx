import { faqItems } from "./faq-data";
import { FaqAccordion } from "./FaqAccordion";

export function FaqListSection() {
  return (
    <section className="bg-[var(--bg-2)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[920px]">
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
