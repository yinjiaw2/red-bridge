import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { BookingExperience } from "./BookingExperience";
import { BookingHero } from "./BookingHero";

export function BookingPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <BookingHero />
      <BookingExperience />
      <Footer />
    </main>
  );
}
