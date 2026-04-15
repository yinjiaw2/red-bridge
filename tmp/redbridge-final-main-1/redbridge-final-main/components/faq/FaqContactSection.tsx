import Link from "next/link";
import { contactCards } from "@/components/home/home-data";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/home/icons";

const contactIcons = {
  map: MapPinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
} as const;

export function FaqContactSection() {
  return (
    <section id="contact" className="bg-[var(--bg)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Still Have <span className="italic text-[var(--accent)]">Questions?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-[var(--text-sub)]">
            Book a no-obligation consultation. We&apos;ll give you an honest assessment, including telling you if none
            of our programs are the right fit for your situation.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1000px] rounded-[28px] border border-[rgba(168,80,30,0.18)] bg-[linear-gradient(145deg,var(--bg-card)_0%,#f0e8d8_100%)] px-6 py-7 shadow-[var(--shadow)] md:px-8 md:py-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = contactIcons[card.icon];
              const external = card.href.startsWith("http");

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-6 text-center transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-[1.55rem] leading-none text-[var(--text-main)]">{card.title}</h3>
                  <div className="mt-4 space-y-1 text-base text-[var(--text-sub)]">
                    {card.body.map((line) => (
                      <p
                        key={line}
                        className={card.title === "Call Us" || card.title === "Email Us" ? "font-semibold text-[var(--text-main)]" : ""}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-[var(--text-dim)]">{card.caption}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-4 text-base font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
            >
              Book Your Free Consultation
            </Link>
            <p className="text-base text-[var(--text-sub)]">
              Not sure if you qualify?{" "}
              <Link href="/booking" className="font-semibold text-[var(--accent)] underline underline-offset-4">
                Request a free eligibility check →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
