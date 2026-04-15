import Link from "next/link";
import { PathwayCtaBand } from "@/components/shared/pathway/PathwayCtaBand";

export function PathwayCta() {
  return (
    <PathwayCtaBand
      title={
        <>
          Five Points Can Change
          <br />
          <span className="italic text-[#f6c257]">Your Entire Timeline.</span>
        </>
      }
      description="Your free assessment covers your federal score, your Victorian ROI prospects, and whether 190, 189, or 491 is currently the fastest route for your exact profile."
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
