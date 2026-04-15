import Link from "next/link";
import { faqItems } from "./pathway-data";
import { PathwayFaqSection } from "@/components/shared/pathway/PathwayFaqSection";

export function FaqSection() {
  const items = faqItems.map((item) => ({
    question: item.question,
    answer:
      item.question === "Is employment mandatory for the 491 nomination?" ? (
        <p>
          {item.answer}{" "}
          <Link href="/190-pathway" className="font-semibold text-[#f6c257] underline underline-offset-4">
            If you do not meet that test yet, compare the 190 pathway →
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
      description="Direct answers about Victoria's 491 pathway, including the regional commitment that turns the extra points into a permanent outcome."
      items={items}
    />
  );
}
