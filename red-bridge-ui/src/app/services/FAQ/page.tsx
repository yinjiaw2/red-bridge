import type { Metadata } from "next";
import { FaqPage } from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RedBridge Consulting",
  description:
    "Straight answers about employer sponsorship, points-tested migration, skills assessments, and how RedBridge works.",
};

export default function FAQServicePage() {
  return <FaqPage />;
}
