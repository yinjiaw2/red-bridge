import Link from "next/link";
import { PathwayCtaBand } from "@/components/shared/pathway/PathwayCtaBand";

export function PathwayCta() {
  return (
    <PathwayCtaBand
      title={
        <>
          Know Your Score.
          <br />
          <span className="italic text-[#f6c257]">Own Your Timeline.</span>
        </>
      }
      description="Your free points assessment takes 30 minutes. You'll leave knowing exactly where you stand, which points you're missing, and whether the 189 is the right path or whether 190 or 491 will get you there faster."
      chips={[
        { label: "Free — no obligation", icon: "calendar" },
        { label: "Visa lodged by MARA agent", icon: "check" },
        { label: "Honest score — not inflated to close a sale", icon: "check" },
      ]}
      buttonLabel="Book My Free Points Assessment"
      buttonHref="/booking"
      footer={
        <>
          Or call us directly:{" "}
          <Link href="tel:0399617301" className="text-white/70 underline underline-offset-4">
            03 9961 7301
          </Link>
        </>
      }
    />
  );
}
