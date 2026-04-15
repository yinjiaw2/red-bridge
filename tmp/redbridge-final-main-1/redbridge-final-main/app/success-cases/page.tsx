import type { Metadata } from "next";
import { SuccessCasesPage } from "@/components/success-cases/SuccessCasesPage";

export const metadata: Metadata = {
  title: "Success Cases | RedBridge Consulting",
  description:
    "Browse real RedBridge outcomes across Career Launch, employer sponsorship, and 189, 190, and 491 skilled migration pathways.",
};

export default function SuccessCases() {
  return <SuccessCasesPage />;
}
