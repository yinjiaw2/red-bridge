import Image from "next/image";
import Link from "next/link";
import { footerGroups, socialLinks } from "./home-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--header-bg)] px-4 py-14 text-[var(--text-main)] md:px-0">
      <div className="home-inner">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/home-assets/red-bridge-logo.png"
              alt="RedBridge Career & Migration"
              width={220}
              height={56}
              className="h-auto w-[180px]"
            />
            <p className="mt-5 font-display text-2xl italic text-[var(--text-main)]">
              Bridging Dreams and Opportunities
            </p>
            <p className="mt-4 max-w-[460px] text-base leading-8 text-[var(--text-sub)]">
              A registered Australian consultancy dedicated to genuine career development and migration pathway support. All migration services are provided by Insight Idea — a licensed migration agent and registered Australian law firm.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-base text-[var(--text-sub)]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[var(--accent)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--border-soft)] pt-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[var(--text-sub)]">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--text-sub)]">
            <Link href="#" className="hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--accent)]">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[var(--accent)]">
              Sitemap
            </Link>
          </div>
          <p className="mt-5 text-center text-xs leading-6 text-[var(--text-dim)]">
            A Siddeley Group company — alongside Insight Idea Law Firm and Good Mood Studio.
          </p>
          <p className="mt-2 text-center text-xs leading-6 text-[var(--text-dim)]">
            © 2026 RedBridge Consulting Pty Ltd · Docklands VIC 3008 · Migration services provided by Insight Idea · ABN: 88 678 186 091.
          </p>
        </div>
      </div>
    </footer>
  );
}
