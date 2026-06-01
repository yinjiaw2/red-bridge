import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Copyright Notice | RedBridge Consulting",
  description: "Copyright and intellectual property notice for the RedBridge Consulting website.",
};

export default function CopyrightPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80, fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b11217", marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Copyright Notice
          </h1>
          <p style={{ fontSize: 13, color: "#71717a", marginBottom: 48 }}>Last updated: May 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <Section title="Ownership">
              © 2026 RedBridge Consulting Pty Ltd (ABN 88 678 186 091). All rights reserved. All content on this website — including but not limited to text, graphics, logos, icons, images, and the overall page layout — is the intellectual property of RedBridge Consulting Pty Ltd unless otherwise stated.
            </Section>

            <Section title="Permitted use">
              You may view and print pages from this website for personal, non-commercial use only. No portion of this website may be reproduced, distributed, modified, publicly displayed, or used to create derivative works without the prior written consent of RedBridge Consulting Pty Ltd.
            </Section>

            <Section title="Trade marks">
              "RedBridge Consulting" and the RedBridge logo are trade marks of RedBridge Consulting Pty Ltd. Nothing on this site should be construed as granting any right to use any trade mark without the written permission of its owner.
            </Section>

            <Section title="Third-party content">
              Certain content, including partner logos and quoted testimonials, belong to their respective owners and are used with permission. If you believe any content on this site infringes your intellectual property rights, please contact us at hello@redbridgeconsulting.com.au.
            </Section>

            <Section title="Contact">
              For licensing inquiries or copyright concerns, email hello@redbridgeconsulting.com.au.
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
