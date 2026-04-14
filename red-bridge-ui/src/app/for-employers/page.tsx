import EmployerNetworkSection from "@/components/for-employers/EmployerNetworkSection";
import SkillsgGapSection from "@/components/for-employers/SkillGapSection";
import EmployerProcessSection from "@/components/for-employers/EmployerProcessSection";
import EmployerFeesSection from "@/components/for-employers/EmployerFeesSection";
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
      </main>
      <Footer />
    </>
  );
}
