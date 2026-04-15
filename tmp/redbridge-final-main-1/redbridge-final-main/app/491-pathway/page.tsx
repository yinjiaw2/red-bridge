import type { Metadata } from "next";
import { Pathway491Page } from "@/components/491-pathway/PathwayPage";

export const metadata: Metadata = {
  title: "491 Regional Pathway | RedBridge Consulting",
  description:
    "Victoria's 491 regional nomination adds 15 points and creates a 3-year path to the 191 permanent residence visa. RedBridge maps your regional eligibility honestly.",
};

export default function Pathway491() {
  return <Pathway491Page />;
}
