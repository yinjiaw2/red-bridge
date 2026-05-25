import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SuccessQuote from "@/components/v2/success/SuccessQuote";
import TrustPillars from "@/components/v2/success/TrustPillars";
import SuccessCards from "@/components/v2/success/SuccessCards";
import PageCTA from "@/components/v2/shared/PageCTA";

export default function SuccessCasesV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <SuccessQuote />
        <TrustPillars />
        <SuccessCards />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}
