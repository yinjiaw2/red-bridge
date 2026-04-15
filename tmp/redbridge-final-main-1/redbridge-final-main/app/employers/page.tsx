import type { Metadata } from "next";
import { EmployersPage } from "@/components/employers/EmployersPage";

export const metadata: Metadata = {
  title: "For Employers | RedBridge Consulting",
  description:
    "Employer sponsorship support for Australian businesses hiring skilled overseas workers already in Australia.",
};

export default function Employers() {
  return <EmployersPage />;
}
