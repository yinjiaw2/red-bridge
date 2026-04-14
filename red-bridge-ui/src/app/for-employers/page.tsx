import EmployerNetworkSection from "@/components/employers/EmployerNetworkSection";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function EmployersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <EmployerNetworkSection />
      </main>
      <Footer />
    </>
  );
}
