import Link from "next/link";
import { PathwayCtaBand } from "@/components/shared/pathway/PathwayCtaBand";

export function PathwayCta() {
  return (
    <PathwayCtaBand
      title={
        <>
          Fifteen Points Could
          <br />
          <span className="italic text-[#f6c257]">Change Your Timeline.</span>
        </>
      }
      description="Your free assessment covers your points score, your regional Victoria employment situation, and whether the 491, 190, or 189 gives you the fastest realistic path to a PR grant."
      chips={[
        { label: "Free — no obligation", icon: "calendar" },
        { label: "EOI + ROI by MARA agent", icon: "check" },
        { label: "Honest dual-pathway strategy", icon: "check" },
      ]}
      buttonLabel="Book My Free Assessment"
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
