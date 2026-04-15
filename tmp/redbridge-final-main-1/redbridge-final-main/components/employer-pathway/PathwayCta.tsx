import Link from "next/link";
import { PathwayCtaBand } from "@/components/shared/pathway/PathwayCtaBand";

export function PathwayCta() {
  return (
    <PathwayCtaBand
      title={
        <>
          Your Sponsor is in Our <span className="italic text-[#f6c257]">Network.</span>
          <br />
          Let&apos;s Find Them.
        </>
      }
      description="Your free eligibility assessment takes about 30 minutes. You leave with a clear answer, not a vague brochure and a list of maybe-employers."
      chips={[
        { label: "Free — no obligation", icon: "calendar" },
        { label: "Legal partner on every case", icon: "check" },
        { label: "Honest verdict, not a sales pitch", icon: "check" },
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
