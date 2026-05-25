import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import FAQSection from "@/components/v2/faq/FAQSection";

export default function FAQv2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
