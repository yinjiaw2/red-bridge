import type { Metadata } from "next";
import { Pathway190Page } from "@/components/190-pathway/PathwayPage";

export const metadata: Metadata = {
  title: "190 State Nomination Visa | RedBridge Consulting",
  description:
    "Victoria state nomination adds 5 points and moves you into a separate selection queue. RedBridge maps your EOI and ROI strategy for the 190 pathway.",
};

export default function Pathway190() {
  return <Pathway190Page />;
}
