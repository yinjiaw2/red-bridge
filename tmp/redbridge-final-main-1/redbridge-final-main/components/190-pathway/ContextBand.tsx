import Link from "next/link";
import { ContextHighlight } from "@/components/shared/pathway/ContextHighlight";

export function ContextBand() {
  return (
    <ContextHighlight title="Honest context for ICT and Marketing professionals">
      <p>
        Victoria&apos;s recent invitation rounds have clearly prioritised healthcare, teaching, aged care, construction,
        and trade occupations. ICT and Marketing remain eligible, but they are not in the state&apos;s current highest
        priority group. That does not close the 190 to those professions. It means the profile has to be better
        matched, especially if you can show genuine Victorian employment and earnings.{" "}
        <strong className="text-[var(--text-main)]">
          We assess that realism first, and if the 491 or 189 is the stronger route, we will say so plainly.
        </strong>{" "}
        <Link href="/services#pathway-491" className="font-semibold text-[var(--accent)] underline underline-offset-4">
          Learn about the 491 →
        </Link>
      </p>
    </ContextHighlight>
  );
}
