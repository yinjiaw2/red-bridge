import type { Metadata } from "next";
import { Pathway189Page } from "@/components/189-pathway/PathwayPage";

export const metadata: Metadata = {
  title: "189 Skilled Independent Visa | RedBridge Consulting",
  description:
    "Points-based permanent residency without employer sponsorship. RedBridge maps your points, prepares your skills assessment, and helps position your EOI for the 189 pathway.",
};

export default function Pathway189() {
  return <Pathway189Page />;
}
