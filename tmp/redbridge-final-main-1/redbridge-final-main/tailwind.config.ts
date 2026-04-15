import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        "bg-2": "#F0F2F5",
        card: "#FFFFFF",
        accent: "#8A1523",
        "accent-2": "#A82030",
        "accent-light": "#C93A4A",
        "text-main": "#1A2025",
        "text-sub": "rgba(26, 32, 37, 0.7)",
        "text-dim": "rgba(26, 32, 37, 0.4)",
        "border-soft": "rgba(0, 0, 0, 0.08)",
        sage: "#3A604A",
        footer: "#1A2025",
        beige: "#F7F1E8",
        "beige-soft": "#F3EBDF",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        brand: "linear-gradient(135deg, #A82030 0%, #5C0E17 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.06)",
        lift: "0 12px 48px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        card: "28px",
      },
    },
  },
} satisfies Config;
