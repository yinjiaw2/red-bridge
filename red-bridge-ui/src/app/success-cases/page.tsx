import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SuccessCasesHero from "@/components/success-cases/SuccessCasesHero";
import SuccessCasesList from "@/components/success-cases/SuccessCasesList";
import SuccessCasesWhy from "@/components/success-cases/SuccessCasesWhy";
import SuccessCasesCta from "@/components/success-cases/SuccessCasesCta";

export default function SuccessCasesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <SuccessCasesHero />
        <SuccessCasesWhy />
        <SuccessCasesList />
        <SuccessCasesCta />
      </main>
      <Footer />
    </>
  );
}
