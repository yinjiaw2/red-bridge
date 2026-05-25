import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import EmployerPathwayHero from "@/components/v2/services/EmployerPathwayHero";
import ThreeRoutes from "@/components/v2/services/ThreeRoutes";
import PaymentMilestones from "@/components/v2/services/PaymentMilestones";
import WhatWeDoSection from "@/components/v2/services/WhatWeDoSection";
import IndustryNetwork from "@/components/v2/services/IndustryNetwork";
import PageCTA from "@/components/v2/shared/PageCTA";

export default function EmployerPathwayV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <EmployerPathwayHero />
        <ThreeRoutes />
        <WhatWeDoSection />
        <IndustryNetwork />
        <PaymentMilestones />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}
