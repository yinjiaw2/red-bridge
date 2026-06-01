import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Privacy Policy | RedBridge Consulting",
  description: "How RedBridge Consulting collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80, fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b11217", marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: "#71717a", marginBottom: 48 }}>Last updated: May 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <Section title="1. Who we are">
              RedBridge Consulting Pty Ltd (ABN 88 678 186 091) operates this website and provides career and migration pathway services. Our office is located at Level 9, Tower 3, 18–38 Siddeley Street, Docklands VIC 3008.
            </Section>

            <Section title="2. Information we collect">
              We collect personal information you voluntarily provide through our contact and consultation booking forms — including your name, email address, phone number, visa status, and career background. We also collect standard web analytics data (page views, referral source, device type) via Google Tag Manager.
            </Section>

            <Section title="3. How we use your information">
              Your information is used solely to respond to your enquiry, arrange consultations, and provide the services you have requested. We do not sell, rent, or share your personal information with third parties except where required by law or to deliver our services (for example, sharing relevant details with our licensed migration agent partner, Insight Idea).
            </Section>

            <Section title="4. Data storage and security">
              Information submitted through our forms is stored in Google Workspace and processed via Google Apps Script. We apply reasonable technical measures to protect your data against unauthorised access.
            </Section>

            <Section title="5. Your rights">
              You may request access to, correction of, or deletion of your personal information at any time by contacting us at hello@redbridgeconsulting.com.au. We will respond within a reasonable timeframe.
            </Section>

            <Section title="6. Cookies">
              This website uses functional and analytics cookies. By continuing to use the site you consent to these cookies. You may disable cookies in your browser settings, although some features may not function correctly.
            </Section>

            <Section title="7. Changes to this policy">
              We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site constitutes acceptance of the updated policy.
            </Section>

            <Section title="8. Contact">
              Questions about this policy? Email us at hello@redbridgeconsulting.com.au.
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: "#172d5d", marginBottom: 10 }}>{title}</h2>
      <p style={{ fontSize: 14.5, color: "#3f3f46", lineHeight: 1.75, margin: 0 }}>{children}</p>
    </div>
  );
}
