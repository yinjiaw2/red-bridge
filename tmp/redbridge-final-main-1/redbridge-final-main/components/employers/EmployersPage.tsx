import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { EmployerInquirySection } from "./EmployerInquirySection";
import { EmployersCostSection } from "./EmployersCostSection";
import { EmployersCtaSection } from "./EmployersCtaSection";
import { EmployersFaqSection } from "./EmployersFaqSection";
import { EmployersHero } from "./EmployersHero";
import { EmployersNetworkSection } from "./EmployersNetworkSection";
import { EmployersObligationsSection } from "./EmployersObligationsSection";
import { EmployersProblemSection } from "./EmployersProblemSection";
import { EmployersProcessSection } from "./EmployersProcessSection";
import { EmployersRolesSection } from "./EmployersRolesSection";
import { EmployersValueSection } from "./EmployersValueSection";

export function EmployersPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <EmployersHero />
      <EmployersProblemSection />
      <EmployersProcessSection />
      <EmployersCostSection />
      <EmployersObligationsSection />
      <EmployersRolesSection />
      <EmployersNetworkSection />
      <EmployersValueSection />
      <EmployersFaqSection />
      <EmployerInquirySection />
      <EmployersCtaSection />
      <Footer />
    </main>
  );
}
