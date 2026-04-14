import EmployerNetworkSection from "@/components/for-employers/EmployerNetworkSection";
import SkillsgGapSection from "@/components/for-employers/SkillGapSection";
import EmployerProcessSection from "@/components/for-employers/EmployerProcessSection";
import EmployerFeesSection from "@/components/for-employers/EmployerFeesSection";
import EmployerObligationsSection from "@/components/for-employers/EmployerObligationsSection";
import EmployerPartnershipSection from "@/components/for-employers/EmployerPartnershipSection";
import EmployerDifferenceSection from "@/components/for-employers/EmployerDifferenceSection";
import EmployerFaqSection from "@/components/for-employers/EmployerFaqSection";
import EmployerEnquirySection from "@/components/for-employers/table/EmployerEnquirySection";
import EmployerCtaSection from "@/components/for-employers/EmployerCtaSection";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function EmployersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <EmployerNetworkSection />
        <SkillsgGapSection />
        <EmployerProcessSection />
        <EmployerFeesSection />
        <EmployerObligationsSection />
        <EmployerPartnershipSection />
        <EmployerDifferenceSection />
        <EmployerFaqSection />
        <EmployerEnquirySection />
        <EmployerCtaSection />
      </main>
      <Footer />
    </>
  );
}
