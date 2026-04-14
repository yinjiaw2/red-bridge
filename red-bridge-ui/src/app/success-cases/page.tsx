import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SuccessCasesHero from "@/components/success-cases/SuccessCasesHero";

export default function SuccessCasesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <SuccessCasesHero />
      </main>
      <Footer />
    </>
  );
}
