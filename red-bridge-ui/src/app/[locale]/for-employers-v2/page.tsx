import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { ForEmployersHero, HiringPainPoints, ThreePhases, FeesTable, DivisionRoles } from "@/components/v2/employers/ForEmployersSections";
import EmployerEnquirySection from "@/components/for-employers/table/EmployerEnquirySection";

export default function ForEmployersV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <ForEmployersHero />
        <HiringPainPoints />
        <ThreePhases />
        <DivisionRoles />
        <FeesTable />
        <EmployerEnquirySection />
        <Footer />
      </main>
    </>
  );
}
