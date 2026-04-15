import type { Metadata } from "next";
import { EmployerPathwayPage } from "@/components/employer-pathway/PathwayPage";

export const metadata: Metadata = {
  title: "482/186 Employer Sponsored Pathway | RedBridge Consulting",
  description:
    "Verified employer-sponsored pathways through the 482 and 186 route. RedBridge matches skilled professionals to genuine sponsors and plans the PR transition clearly.",
};

export default function EmployerPathway() {
  return <EmployerPathwayPage />;
}
