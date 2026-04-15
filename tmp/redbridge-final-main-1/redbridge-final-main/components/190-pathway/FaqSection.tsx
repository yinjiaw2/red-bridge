import Link from "next/link";
import { faqItems } from "./pathway-data";
import { PathwayFaqSection } from "@/components/shared/pathway/PathwayFaqSection";

export function FaqSection() {
  const items = faqItems.map((item) => ({
    question: item.question,
    answer:
      item.question === "What is the difference between the 189 and 190 visa?" ? (
        <p>
          {item.answer}{" "}
          <Link href="/189-pathway" className="font-semibold text-[#f6c257] underline underline-offset-4">
            Learn about the 189 pathway →
          </Link>
        </p>
      ) : (
        <p>{item.answer}</p>
      ),
  }));

  return (
    <PathwayFaqSection
      eyebrow="Common Questions"
      title={
        <>
          Frequently Asked <span className="italic text-[#f6c257]">Questions</span>
        </>
      }
      description="Direct answers about Victoria's 190 pathway, including when it genuinely makes more sense than waiting on a 189 invitation."
      items={items}
    />
  );
}
