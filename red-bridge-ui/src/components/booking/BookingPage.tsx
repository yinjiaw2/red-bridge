import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { BookingExperience } from "./BookingExperience";
import { BookingHero } from "./BookingHero";

export function BookingPage() {
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
