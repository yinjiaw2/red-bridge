import Link from "next/link";
import { ContextHighlight } from "@/components/shared/pathway/ContextHighlight";

export function ContextBand() {
  return (
    <ContextHighlight title="What ICT and Marketing professionals need to know about the 491">
      <p>
        Unlike the 190, the 491 requires you to be{" "}
        <strong className="text-[var(--text-main)]">
          currently employed in skilled work for a regional Victoria employer
        </strong>
        . That is a nomination requirement, not a nice-to-have. If you are not already working in Geelong, Ballarat,
        Bendigo, or another qualifying regional area, Victorian 491 nomination is usually not open from an onshore
        position. National 491 allocations have also tightened, so realism matters.{" "}
        <Link href="/190-pathway" className="font-semibold text-[var(--accent)] underline underline-offset-4">
          Learn about the 190 →
        </Link>
      </p>
    </ContextHighlight>
  );
}
