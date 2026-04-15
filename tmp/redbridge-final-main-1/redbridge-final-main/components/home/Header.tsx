import Image from "next/image";
import Link from "next/link";
import { navigation } from "./home-data";
import { ChevronDownIcon } from "./icons";

type HeaderProps = {
  variant?: "light" | "accent";
};

export function Header({ variant = "light" }: HeaderProps) {
  const isAccent = variant === "accent";

  return (
    <header
      className={[
        "relative z-30 grid grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-5 sm:px-6 md:px-8",
        isAccent ? "bg-[var(--accent)] text-white" : "bg-white text-[var(--text-main)]",
      ].join(" ")}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/home-assets/red-bridge-logo.png"
          alt="RedBridge Career & Migration"
          width={180}
          height={42}
          className={["h-auto w-[150px] md:w-[180px]", isAccent ? "brightness-0 invert" : ""].join(" ")}
          priority={variant === "light"}
        />
      </Link>

      <nav className="hidden items-center justify-end gap-8 pr-4 text-[15px] font-semibold lg:flex xl:gap-10 xl:text-base">
        {navigation.map((item) => {
          const hasDropdown = "hasDropdown" in item && item.hasDropdown;
          const dropdownItems = hasDropdown ? item.items ?? [] : [];

          if (hasDropdown) {
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={[
                    "flex items-center gap-1.5 leading-none",
                    isAccent ? "text-white/90 hover:text-white" : "text-[var(--text-main)] hover:text-[var(--accent)]",
                  ].join(" ")}
                >
                  {item.label}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </Link>

                <div className="invisible absolute left-0 top-full z-20 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[280px] rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg-card)] p-2 shadow-[var(--shadow-lg)]">
                    {dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block rounded-[12px] px-4 py-3 text-sm font-medium text-[var(--text-sub)] hover:bg-[rgba(138,21,35,0.05)] hover:text-[var(--accent)]"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-1.5 leading-none",
                isAccent ? "text-white/90 hover:text-white" : "text-[var(--text-main)] hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/booking"
        className={[
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-[0_10px_24px_rgba(168,32,48,0.16)]",
          "bg-[#f9c45b] text-[var(--text-main)]",
        ].join(" ")}
      >
        Book Free Consult
      </Link>
    </header>
  );
}
