import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | RedBridge Consulting",
  description:
    "Meet the RedBridge team. Melbourne-based career and employer consultancy with verified sponsors and a licensed migration law partner.",
};

export default function About() {
  return <AboutPage />;
}
