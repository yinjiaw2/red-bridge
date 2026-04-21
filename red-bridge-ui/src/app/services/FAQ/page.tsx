import type { Metadata } from "next";
import NavBar from "@/components/shared/NavBar";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqListSection } from "@/components/faq/FaqListSection";
import { FaqContactSection } from "@/components/faq/FaqContactSection";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RedBridge Consulting",
  description:
    "Straight answers about employer sponsorship, points-tested migration, skills assessments, and how RedBridge works.",
};

export default function FAQPageRoute() {
  return (
    <>
      <NavBar />
      <main className="min-h-full bg-background pt-16">
        <FaqHero />
        <FaqListSection />
        <FaqContactSection />
      </main>
      <Footer />
    </>
  );
}
