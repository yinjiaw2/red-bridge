import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import CareerTabsSection from "@/components/services/career-launch/CategoryTabsSection";

export default function CareerLaunchPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <CareerTabsSection />
      </main>
      <Footer />
    </>
  );
}
