import Link from "next/link";
import { faqItems } from "./pathway-data";
import { PathwayFaqSection } from "@/components/shared/pathway/PathwayFaqSection";

export function FaqSection() {
  const items = faqItems.map((item) => ({
    question: item.question,
    answer:
      item.question === "My occupation is highly competitive. Should I also apply for 190 or 491?" ? (
        <p>
          {item.answer.replace(" We map all three options at your free consultation.", "")}{" "}
          We map all three options at your free consultation.{" "}
          <Link href="/190-pathway" className="font-semibold text-[#f6c257] underline underline-offset-4">
            Learn about the 190 pathway →
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
      description="Direct answers about the 189 pathway — including what we know has changed in 2026."
      items={items}
    />
  );
}
