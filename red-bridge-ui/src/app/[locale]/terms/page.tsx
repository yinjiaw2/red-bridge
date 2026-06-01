import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Terms of Service | RedBridge Consulting",
  description: "Terms and conditions governing use of RedBridge Consulting's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80, fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b11217", marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 13, color: "#71717a", marginBottom: 48 }}>Last updated: May 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <Section title="1. Acceptance">
              By accessing or using this website you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
            </Section>

            <Section title="2. Services described">
              RedBridge Consulting Pty Ltd provides career development consulting and employer-sponsored visa pathway services. Information on this website is general in nature and does not constitute migration or legal advice. Migration advice is provided exclusively by Insight Idea, a licensed migration agent (MARN 1467870).
            </Section>

            <Section title="3. No guarantee of outcomes">
              While we work diligently on your behalf, we cannot guarantee specific visa outcomes, employment placements, or timelines. Immigration law and employer requirements are subject to change. Results described in case studies reflect individual circumstances.
            </Section>

            <Section title="4. Intellectual property">
              All content on this website — including text, graphics, and the RedBridge Consulting brand — is owned by RedBridge Consulting Pty Ltd or its licensors. You may not reproduce or distribute any content without prior written permission.
            </Section>

            <Section title="5. Third-party links">
              This site contains links to external websites (including partner and affiliate sites). We are not responsible for the content or privacy practices of those sites.
            </Section>

            <Section title="6. Limitation of liability">
              To the maximum extent permitted by law, RedBridge Consulting Pty Ltd is not liable for any indirect, incidental, or consequential loss arising from your use of this website or our services.
            </Section>

            <Section title="7. Governing law">
              These terms are governed by the laws of Victoria, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Victoria.
            </Section>

            <Section title="8. Changes">
              We reserve the right to update these terms at any time. The revised terms take effect as soon as they are posted on this page.
            </Section>

            <Section title="9. Contact">
              Questions about these terms? Email hello@redbridgeconsulting.com.au.
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
