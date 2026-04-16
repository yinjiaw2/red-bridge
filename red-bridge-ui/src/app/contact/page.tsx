import type { Metadata } from "next";
import { Footer } from "@/components/shared/Footer";
import { BookingExperience } from "@/components/booking/BookingExperience";
import NavBar from "@/components/shared/NavBar";
import { BookingHero } from "@/components/booking/BookingHero";

export const metadata: Metadata = {
  title: "Contact Us | RedBridge Consulting",
  description:
    "Book a free consultation with RedBridge and share your migration or career profile before the call.",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-full bg-[var(--bg)] pt-16">
        <BookingHero />
        <BookingExperience />
      </main>
      <Footer />
    </>
  );
}
