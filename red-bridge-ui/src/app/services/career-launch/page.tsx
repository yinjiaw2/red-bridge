import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
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
