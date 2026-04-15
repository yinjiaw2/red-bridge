import { faqItems } from "./pathway-data";
import { PathwayFaqSection } from "@/components/shared/pathway/PathwayFaqSection";

export function FaqSection() {
  const items = faqItems.map((item) => ({
    question: item.question,
    answer: <p>{item.answer}</p>,
  }));

  return (
    <PathwayFaqSection
      eyebrow="Common Questions"
      title={
        <>
          Frequently Asked <span className="italic text-[#f6c257]">Questions</span>
        </>
      }
      description="Plain answers to the questions we hear most often about the 482 and 186 pathway."
      items={items}
    />
  );
}
