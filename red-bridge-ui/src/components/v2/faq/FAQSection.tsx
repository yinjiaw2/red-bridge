'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const B = {
  red: '#b11217', redLight: '#fdf0f0', redMid: '#f5d5d6', navy: '#172d5d',
  bg: '#f5f1ea', cream: '#fbf4ec', amber: '#efb64f', textDeep: '#22150f',
  textBody: '#1f1f1f', textMuted: '#7a6a60', divider: '#ece5de',
};

const CATEGORIES = ['Visa Questions', 'Fees & Process', 'About RedBridge'] as const;
type Category = typeof CATEGORIES[number];

type FAQEntry = { q: string; preview: string; a: string };

const FAQS: Record<Category, FAQEntry[]> = {
  'Visa Questions': [
    { q: 'Do I need to already have a job offer to come to RedBridge?', preview: 'No — finding the employer is what we do. You come with skills and experience.', a: 'No. The majority of our clients come to us without a current employer sponsor. We match you to verified employers in our network as part of the service. You should have the relevant work experience (typically 1+ years in your nominated occupation) and a completed or in-progress skills assessment. At your free consultation we will confirm whether your profile is ready for employer introductions.' },
    { q: 'I\'m on a 485 graduate visa. Can I transition directly to a 482?', preview: 'Yes, if you meet the 1-year experience requirement and we can find an eligible employer.', a: 'Yes — a 485 to 482 transition is one of the most common pathways for our clients. You need at least 12 months of paid, full-time work experience in an ANZSCO occupation on the CSOL, plus a completed skills assessment where required. If you are partway through your 485, we will assess your timeline to confirm you will meet the experience threshold before the 485 expires. If you won\'t, we\'ll tell you now rather than take your engagement fee.' },
    { q: 'What\'s the difference between the 482 Core Skills and Specialist Skills streams?', preview: 'It comes down to your salary and which occupation list your role is on.', a: 'The Core Skills stream covers most skilled occupations on the CSOL and requires a minimum salary of $76,515 + super (TSMIT, subject to annual updates). The Specialist Skills stream covers occupations requiring highly specialised knowledge, with a higher minimum salary threshold of $135,000 + super. Your consultant will confirm which stream applies to your specific ANZSCO code at the free assessment — some occupations are only eligible under one stream.' },
    { q: 'Can my employer sponsor me directly without using RedBridge?', preview: 'Yes — and we can still help with the legal process through Insight Idea.', a: 'Absolutely. If you already have an employer willing to sponsor you, you don\'t need our employer-matching service. You can engage Insight Idea directly for the legal lodgement of the SBS, nomination, and visa. Contact us via the consultation form and note that you have an existing employer — we\'ll connect you with the right service.' },
    { q: 'How long does the 482 visa take to process?', preview: 'Typically 3–12 months from nomination lodgement, depending on DOHA queue times.', a: 'Processing times vary significantly and are outside our control. The Department of Home Affairs (DOHA) publishes indicative processing times, and we reference those at your consultation. Based on our client history, most 482 applications are decided within 3–12 months. Priority processing is not available to standard applicants. We lodge complete, well-documented applications to minimise the risk of requests for further information (RFIs) that would extend the timeline.' },
    { q: 'What happens if my 482 visa is refused?', preview: 'Our legal partner Insight Idea will review all options, including Administrative Appeals.', a: 'If a 482 application is refused, Insight Idea will conduct an immediate review of the decision. Depending on the grounds for refusal, options may include merits review at the Administrative Appeals Tribunal (AAT), reapplication with additional evidence, or an alternative visa pathway. Refusals are rare when applications are prepared correctly — we document every case thoroughly precisely to reduce this risk. Our milestone fee structure means you will not have paid a full service fee before this stage.' },
  ],
  'Fees & Process': [
    { q: 'How much does it cost to use RedBridge\'s services?', preview: 'Our fees are quoted individually after your free assessment — not published as flat rates.', a: 'We don\'t publish a flat fee schedule because the correct fee depends on your specific pathway, the work already done (skills assessment, for example), and the complexity of your employer match. At your free consultation, we will provide a written fee proposal before any engagement commences. Government fees (SBS, nomination, SAF levy) are fixed by law and are disclosed separately. We do not take a single large upfront payment — fees are structured across milestones.' },
    { q: 'Do employers have to pay anything to use RedBridge?', preview: 'Yes — Australian law requires all sponsorship costs to be borne by the employer.', a: 'Yes. By law, all costs associated with sponsorship must be borne by the employer. This includes the SBS application fee, nomination fees, and the Skilling Australians Fund (SAF) levy. It is illegal for these costs to be charged to or recovered from the visa applicant. Employers also pay a recruitment placement fee to RedBridge for candidate matching. Full fee disclosure occurs at the employer enquiry stage, not after.' },
    { q: 'What exactly is the SAF levy and why is it so expensive?', preview: 'It\'s a government training fund contribution, mandatory for all 482 sponsors.', a: 'The Skilling Australians Fund (SAF) levy is a mandatory government charge that sponsors must pay at nomination lodgement. The levy is $1,200 per year of visa validity for small businesses (turnover < $10M) and $1,800 per year for large businesses. For a 4-year 482 visa, this amounts to $4,800 (small) or $7,200 (large). The levy cannot be waived, delayed, or charged back to the visa holder. It was introduced by the government to fund vocational training for Australian workers.' },
    { q: 'What do I get during the process — is it just form-filling?', preview: 'No. You\'re assigned a named consultant who manages your case alongside a licensed migration agent.', a: 'The service includes: a comprehensive eligibility assessment at intake; skills assessment preparation and submission support (ACS, AMI, CAANZ, EA); employer profile matching and introduction; interview preparation and offer negotiation guidance; SBS, nomination, and visa application management by Insight Idea; and milestone tracking through to 186 ENS eligibility at the 2-year mark. You are assigned one named consultant who manages all of this. You will not be handed off to a different team mid-process.' },
    { q: 'Can I pay in instalments or is it all upfront?', preview: 'Fees are structured across milestones, not paid as a single upfront sum.', a: 'Our fee structure is explicitly milestone-based. Payments occur at defined delivery points: typically at contract signing, at employer introduction, at visa lodgement, and at visa grant. This protects both parties — you are not paying in full for an outcome that hasn\'t occurred, and we are incentivised to deliver each milestone to trigger the next fee. The exact schedule is detailed in your Client Agreement before any payment is made.' },
  ],
  'About RedBridge': [
    { q: 'Is RedBridge a registered migration agency?', preview: 'RedBridge itself is a consulting company. Migration advice is provided by our licensed partner Insight Idea (MARN: 1467870).', a: 'RedBridge Consulting Pty Ltd (ABN: 88 678 186 091) is a registered Australian company that provides employer matching, career pathway design, and client management services. Under Australian law, only MARA-registered migration agents may provide migration advice. All migration advice and visa lodgement services are provided by our partner Insight Idea, a licensed migration law firm and registered agent (MARN: 1467870), co-located at Level 9, Tower 3, 18–38 Siddeley Street, Docklands VIC 3008.' },
    { q: 'I\'ve heard of migration agencies that charge money for jobs that don\'t exist. How do I know yours are real?', preview: 'Every employer is individually verified against DOHA records before you\'re introduced to them.', a: 'This is the right question to ask, and we\'re glad you\'re asking it. Our employer verification process involves four steps: (1) confirming active sponsorship approval on DOHA\'s register; (2) reviewing the business\'s ABN, trading history, and the specific vacancy; (3) confirming TSMIT salary compliance; and (4) rechecking at nomination stage, since approval can be revoked between steps. Employer profiles are not listed publicly — they are shared privately with candidates at the consultation stage after we have confirmed fit. We do not charge a fee before you have met an employer and confirmed your satisfaction with the introduction.' },
    { q: 'What industries and occupations does RedBridge cover?', preview: 'Primarily ICT, accounting, marketing, and engineering — the sectors where our employer network is strongest.', a: 'Our current employer network is strongest in: Information and Communications Technology (ICT) — software engineering, systems analysis, project management; Accounting and Finance — management accounting, tax, financial analysis; Marketing and Communications — digital marketing, market research, business development; and Engineering — civil, structural, mechanical, electrical. We do occasionally work with clients in other skilled occupations where an employer match is viable. Confirm your specific ANZSCO code at your free consultation and we will tell you honestly whether we can help.' },
    { q: 'I\'m based overseas. Can I still work with RedBridge?', preview: 'Yes — consultations are online and the process works internationally, subject to visa conditions.', a: 'Yes. Many of our clients begin consultations while still abroad or during a study visa period in Australia. Consultations are conducted via video call or WeChat. If you are offshore, there are additional considerations for certain visa pathways (for example, 482 applicants can be offshore at lodgement), and Insight Idea will advise on the specifics of your situation. Your eligibility is primarily determined by your occupation, experience, and skills assessment status — not your current location.' },
    { q: 'What is the Siddeley Talent Link I see mentioned on the site?', preview: 'It\'s the recruitment arm of the Siddeley Group that manages Career Launch placements.', a: 'Siddeley Talent Link is a specialist recruitment company within the Siddeley Group — the same corporate group that operates RedBridge Consulting. Career Launch program placements (where clients gain structured, ANZSCO-aligned work experience to build their 482 eligibility) are managed through Siddeley Talent Link. RedBridge handles client assessment and pathway planning; Siddeley Talent Link handles the formal employment placement. This relationship is disclosed upfront and does not affect the cost or independence of your migration advice, which remains with Insight Idea.' },
  ],
};

function FAQItem({ item, isOpen, onToggle }: { item: FAQEntry; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ background: isOpen ? B.cream : B.bg, border: `1px solid ${isOpen ? B.redMid : B.divider}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s ease, background 0.2s ease' }}>
      <button onClick={onToggle} aria-expanded={isOpen} style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14.5, fontWeight: 700, color: isOpen ? B.red : B.textDeep, lineHeight: 1.35, transition: 'color 0.15s ease', flex: 1 }}>{item.q}</span>
          <span style={{ width: 24, height: 24, borderRadius: '50%', background: isOpen ? B.red : B.divider, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, transition: 'background 0.2s ease' }} aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : B.textMuted} strokeWidth="2.5" strokeLinecap="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {!isOpen && <span style={{ fontSize: 13, color: B.textMuted, lineHeight: 1.5, marginTop: 2 }}>{item.preview}</span>}
      </button>
      {isOpen && (
        <div style={{ padding: '0 20px 20px' }}>
          <p style={{ fontSize: 13.5, color: B.textBody, lineHeight: 1.75, margin: 0 }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Visa Questions');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();
  const items = FAQS[activeCategory];

  return (
    <section style={{ background: B.bg, padding: '80px 24px', fontFamily: 'var(--font-dm-sans, "DM Sans", system-ui, sans-serif)' }}>
      <div ref={ref} style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.red, display: 'block', marginBottom: 14 }}>Questions & Answers</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: B.textDeep, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            The Questions{' '}<em style={{ fontStyle: 'italic', color: B.red }}>We Actually Get Asked</em>
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, margin: 0, lineHeight: 1.6 }}>Real answers, not vague reassurances.</p>
        </div>

        <div style={{ display: 'flex', background: B.divider, borderRadius: 10, padding: 4, marginBottom: 24, gap: 4 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIndex(null); }} style={{ flex: 1, padding: '10px 12px', borderRadius: 7, border: activeCategory === cat ? `1px solid ${B.divider}` : '1px solid transparent', background: activeCategory === cat ? B.cream : 'transparent', color: activeCategory === cat ? B.red : B.textMuted, fontWeight: activeCategory === cat ? 700 : 500, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: activeCategory === cat ? '0 1px 4px rgba(34,21,15,0.08)' : 'none', whiteSpace: 'nowrap' }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
          {items.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>

        <div style={{ background: B.navy, borderRadius: 14, padding: '28px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Still have a question?</p>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Book your free consultation — or send us a message on WeChat or email.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/contact?ctasrc=faq_v2_cta" style={{ display: 'inline-flex', alignItems: 'center', padding: '11px 20px', background: B.amber, color: B.textDeep, fontWeight: 700, fontSize: 13.5, borderRadius: 8, textDecoration: 'none', transition: 'background 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#d4a017')} onMouseLeave={(e) => (e.currentTarget.style.background = B.amber)}>
              Book Free Consultation
            </Link>
            <a href="mailto:info@red-bridge.com.au" style={{ display: 'inline-flex', alignItems: 'center', padding: '11px 18px', background: 'transparent', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: 13.5, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.18s ease' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
