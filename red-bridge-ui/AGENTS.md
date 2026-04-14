# Refactor Agent — HTML → Next.js / React

## Project Goal

Refactor a collection of unstructured HTML files into a well-organised Next.js (App Router) project using React, TypeScript, Tailwind CSS, and Lucide icons. The output must be maintainable, internationalised, and follow modern best practices.

---

## Non-Negotiable Rules

### 1. No Hardcoded Strings in Code

- **Zero** user-visible strings (labels, headings, button text, placeholder text, alt text, aria-labels, error messages, tooltips, etc.) may appear inside `.tsx` / `.ts` / `.js` files.
- Every string lives exclusively in its corresponding `messages` JSON file.
- The only exception is **developer-facing** content: code comments, `console.error` messages, type names, and enum keys.

### 2. Internationalisation (i18n) via Messages Files

- Supported locales: **`en`** (English) and **`zh`** (Chinese, Simplified).
- File location convention:
  ```
  messages/
    en/
      <page-or-section>.json
    zh/
      <page-or-section>.json
  ```
- Each JSON file maps to **one page or one major section** of the UI.
- Keys must be descriptive and hierarchical:
  ```json
  {
    "hero": {
      "heading": "Welcome",
      "subheading": "Start your journey",
      "cta": "Get Started"
    },
    "features": {
      "title": "What We Offer",
      "items": [{ "title": "Fast", "description": "Blazing fast performance" }]
    }
  }
  ```
- Use **`next-intl`** as the i18n library (preferred). Fall back to a lightweight custom hook only if `next-intl` is explicitly ruled out.
- Never use Google Translate or machine-generate the Chinese strings without review — mark unreviewed translations with a `// TODO: review zh` comment in the JSON file itself as a JSON comment-compatible workaround (place it in a `_todo` key at the top of the object).

### 3. Icons — Lucide Only

- **Never** write inline `<svg>` elements or paste raw SVG markup.
- **Never** use emoji as icons.
- Import all icons from `lucide-react`:
  ```tsx
  import { ArrowRight, Shield, Globe } from "lucide-react";
  ```
- Always pass explicit `size`, `strokeWidth`, and `aria-hidden` props where appropriate:
  ```tsx
  <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
  ```
- For decorative icons, add `aria-hidden="true"`. For meaningful icons without adjacent text, add `aria-label` sourced from the messages file.

### 4. Styling — Tailwind CSS First

- Use Tailwind utility classes for all styling. Do **not** write custom CSS unless Tailwind cannot express it.
- Allowed exceptions for custom CSS: complex keyframe animations, third-party library overrides, CSS variables for design tokens.
- Use `cn()` (from `clsx` + `tailwind-merge`) for conditional class composition:
  ```tsx
  import { cn } from "@/lib/utils";
  ```
- Do not use inline `style={{}}` props for values that Tailwind can handle.
- Dark mode: use Tailwind's `dark:` variant. Do not write separate dark-mode CSS files.

#### Design Token Priority — Always Check `globals.css` First

- Before using any arbitrary color value (e.g. `bg-[#b4907a]`), **check `globals.css` first** to see if a named token already exists for that color.
- If a token exists, **always use the named class** instead of the raw value:

  ```tsx
  // ✅ Correct — uses the design token
  <div className="bg-primary text-primary-foreground" />

  // ❌ Wrong — hardcodes a raw value that already has a token
  <div className="bg-[#b4907a] text-[#ffffff]" />
  ```

- This applies to all token categories: colors, border-radius, spacing, shadows, font sizes.
- If a color from the original HTML has **no matching token**, add it to `globals.css` under `@theme` (Tailwind v4) or in the `extend.colors` config, then use the named class — never use the raw hex inline.
- Treat `globals.css` as the **single source of truth** for the design system. Do not duplicate token values in component files.

---

## Project Structure

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── <route>/
│   │       └── page.tsx
├── components/
│   ├── ui/              # Primitive / shadcn-style components
│   ├── sections/        # Page-section-level components
│   └── layout/          # Header, Footer, Nav
├── messages/
│   ├── en/
│   │   ├── common.json  # Shared strings: nav, footer, 404, etc.
│   │   └── <page>.json
│   └── zh/
│       ├── common.json
│       └── <page>.json
├── lib/
│   └── utils.ts         # cn(), formatters, helpers
├── types/
│   └── index.ts         # Shared TypeScript interfaces
├── public/
│   └── images/          # Static assets only — no SVG icons here
├── styles/
│   └── globals.css      # Tailwind directives + CSS variable tokens only
└── AGENT.md             # This file
```

---

## Component Conventions

### Naming

- Component files: `PascalCase.tsx`
- Utility / hook files: `camelCase.ts`
- Page section components: prefix with the section name, e.g. `HeroSection.tsx`, `FeaturesSection.tsx`

### Component Template

```tsx
// components/sections/HeroSection.tsx
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="flex flex-col items-center gap-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{t("heading")}</h1>
      <p className="max-w-xl text-muted-foreground">{t("subheading")}</p>
      <button
        className={cn(
          "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3",
          "text-sm font-medium text-primary-foreground",
          "hover:bg-primary/90 transition-colors",
        )}
      >
        {t("cta")}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </section>
  );
}
```

### Props Interface

Every component with props must have a typed interface:

```tsx
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
```

---

## Refactor Workflow

When converting an HTML file, follow these steps in order:

1. **Audit the HTML file** — identify all sections, text content, and visual assets.
2. **Extract all strings** — copy every user-visible string into the corresponding `messages/en/<page>.json`. Create the `zh` equivalent immediately (mark unreviewed strings with `_todo`).
3. **Identify icons** — replace every `<svg>` or icon image with the closest `lucide-react` icon. Document any icons with no suitable Lucide match so a human can decide.
4. **Build components** — create section-level components, consuming strings via `useTranslations`. Keep components focused; split if a component exceeds ~150 lines.
5. **Apply Tailwind** — translate all CSS classes and inline styles to Tailwind utilities.
6. **Wire up routing** — place the page component under `app/[locale]/<route>/page.tsx`.
7. **Review checklist** before committing:
   - [ ] No string literals in `.tsx` / `.ts` files
   - [ ] No `<svg>` elements (except third-party lib output)
   - [ ] No inline `style={{}}` for Tailwind-expressible values
   - [ ] Both `en` and `zh` JSON keys present
   - [ ] All icons imported from `lucide-react`
   - [ ] `cn()` used for all conditional classes

---

## Dependency Reference

| Purpose              | Package                                      |
| -------------------- | -------------------------------------------- |
| Framework            | `next` (App Router)                          |
| Language             | `typescript`                                 |
| Styling              | `tailwindcss`, `tailwind-merge`, `clsx`      |
| Icons                | `lucide-react`                               |
| i18n                 | `next-intl`                                  |
| Component primitives | `shadcn/ui` (optional, on request)           |
| Class utility        | `clsx` + `tailwind-merge` via `lib/utils.ts` |

---

## What to Flag to the Human

Stop and ask before proceeding if you encounter:

- An icon with **no reasonable Lucide equivalent** — do not substitute a vaguely similar icon silently.
- A **custom animation or visual effect** that cannot be expressed with Tailwind — propose options before implementing.
- **Culturally sensitive copy** in the Chinese messages that requires human review.
- A section with **ambiguous structure** where multiple interpretations are possible.
- Any existing **third-party script or analytics tag** in the HTML — do not silently carry it over.
- Images that appear to be **icon-like SVGs embedded as `<img>` tags** — confirm before replacing with Lucide.

---

## Out of Scope for This Agent

- Backend / API route logic
- Database schema or ORM setup
- Authentication
- Deployment configuration
- SEO meta tags (handle separately in `generateMetadata`)
