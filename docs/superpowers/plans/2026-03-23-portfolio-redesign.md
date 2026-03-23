# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current founder-framed portfolio into a PM-optimized hybrid site with 3 case study pages, products page, about page, writing page, and archive.

**Architecture:** Incremental transformation of the existing Next.js 16 App Router site. New data files drive new components. Old components stay in the codebase but are removed from page imports. New routes added for case studies and sub-pages.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion 12

**Spec:** `docs/superpowers/specs/2026-03-23-portfolio-redesign-design.md`

---

### Task 1: Create data files (case-studies, products, proof chips)

**Files:**
- Create: `src/data/case-studies.ts`
- Create: `src/data/products.ts`
- Create: `src/data/proof-chips.ts`
- Modify: `src/data/projects.ts` — add `page` field

- [ ] **Step 1: Create `src/data/proof-chips.ts`**

```typescript
export interface ProofChip {
  value: string;
  label: string;
  href: string;
}

export const proofChips: ProofChip[] = [
  { value: "1.87M", label: "Properties Indexed", href: "/case-studies/tvghc" },
  { value: "80%", label: "AI Gov. Adoption", href: "/case-studies/asg" },
  { value: "$100K", label: "Prize Productions", href: "/case-studies/nasher" },
  { value: "5,000+", label: "Attendees", href: "/case-studies/nasher" },
];
```

- [ ] **Step 2: Create `src/data/products.ts`**

```typescript
export interface Product {
  slug: string;
  title: string;
  tags: string;
  description: string;
  metrics: string[];
  url: string;
  ctaLabel: string;
}

export const products: Product[] = [
  {
    slug: "searchfunddb",
    title: "SearchFundDB",
    tags: "Data Platform · Next.js · Supabase",
    description: "4,849 search funds tracked across 30+ countries. Full-text search, magic link auth, contact enrichment pipeline.",
    metrics: ["4,849 funds", "75+ contacts", "30+ countries"],
    url: "https://searchfunddb.vercel.app",
    ctaLabel: "Visit Live Site →",
  },
  {
    slug: "tvghc-estimator",
    title: "TVGHC Estimator",
    tags: "Platform · Next.js · 1.87M Records",
    description: "Instant insulation estimates for DFW homeowners. Address autocomplete, property lookup from county records, heuristic pricing engine.",
    metrics: ["1.87M properties", "4 counties", "$0/mo data cost"],
    url: "https://theverygoodhomecompany.com/get-estimate",
    ctaLabel: "Visit Live Site →",
  },
  {
    slug: "4-gaps-diagnostic",
    title: "4 Gaps Diagnostic",
    tags: "Interactive Tool · Consulting Framework",
    description: "8-question operational assessment based on master's research. Identifies which of 4 organizational gaps is the bottleneck.",
    metrics: ["8 questions", "2 minutes", "Proprietary IP"],
    url: "/diagnostic",
    ctaLabel: "Try It →",
  },
  {
    slug: "ai-confession-booth",
    title: "AI Confession Booth",
    tags: "Consumer · Next.js · OpenAI · Stripe",
    description: "Anonymous AI confessional with real-time responses, Stripe payments, Supabase auth, and exportable confessions.",
    metrics: ["OpenAI + Stripe", "Auth + Payments"],
    url: "https://ai-confession-booth.vercel.app",
    ctaLabel: "Visit Live Site →",
  },
];
```

- [ ] **Step 3: Create `src/data/case-studies.ts`**

This is the largest data file. It contains all 3 case studies with full content for the 6-section structure. Each section's `body` field uses plain text (rendered as paragraphs split on `\n\n`).

Create the file with the full case study content from spec sections 7.1, 7.2, and 7.3. Include all fields from the `CaseStudy` interface defined in spec section 16:
- `slug`, `title`, `tags`, `summary`, `role`, `company`, `duration`, `keyMetric`
- `sections[]` (6 per case study, each with `number`, `label`, `headline`, `body`, optional `visual`)
- `outcomeMetrics[]` (4 per case study for the 2x2 grid)
- `thumbnail` (for homepage card)
- `cardProblem`, `cardDecision`, `cardOutcome` (short versions for homepage)

Use the exact content from spec sections 7.1 (ASG), 7.2 (Nasher), 7.3 (TVGHC).

- [ ] **Step 4: Add `page` field to `src/data/projects.ts`**

Add `page: "case-study" | "products" | "archive"` to the `Project` interface and to each project entry, following the mapping in spec section 16 (Project → page mapping table). Remove the `tier` field since `page` replaces it.

- [ ] **Step 5: Verify build passes**

Run: `cd /Users/eromonselejj/jj-portfolio && npm run build`
Expected: Build succeeds (data files are not imported anywhere new yet)

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add case study, product, and proof chip data files"
```

---

### Task 2: Build new homepage components (ProofChips, CaseStudyCard, ProductStrip)

**Files:**
- Create: `src/components/ProofChips.tsx`
- Create: `src/components/CaseStudyCard.tsx`
- Create: `src/components/CaseStudyCards.tsx`
- Create: `src/components/ProductCard.tsx`
- Create: `src/components/ProductStrip.tsx`
- Create: `src/components/ShortBio.tsx`
- Create: `src/components/FooterCTA.tsx`

- [ ] **Step 1: Create `src/components/ProofChips.tsx`**

Server component. Imports `proofChips` from data. Renders 4 metric cards in a horizontal row (flex, gap-4). Each card is an `<a>` linking to `href`. Card layout: large bold value on top, small uppercase label below. Border `border-brand-gray-300`. Responsive: `grid-cols-2 sm:grid-cols-4`.

- [ ] **Step 2: Create `src/components/CaseStudyCard.tsx`**

Server component. Props: `caseStudy: CaseStudy`. Renders: tags (mono, orange), title (bold), three lines (Problem/Decision/Outcome with bold labels), "Read Case Study →" link to `/case-studies/${slug}`. Right side: thumbnail div with dark background and key metric in orange. Layout: `flex gap-5`, thumbnail is `w-[180px] h-[120px] shrink-0 hidden md:flex`.

- [ ] **Step 3: Create `src/components/CaseStudyCards.tsx`**

Server component. Imports `caseStudies` from data. Maps over them rendering `CaseStudyCard` for each. Section label: `Selected Case Studies` (mono, orange).

- [ ] **Step 4: Create `src/components/ProductCard.tsx`**

Server component. Props: `product: Product`. Renders: tags (mono, orange, small), title (bold), description (gray), metrics row (bold, dot-separated), CTA link. Border card. If `url` starts with `/`, use `<a href>`. If external, use `target="_blank"`.

- [ ] **Step 5: Create `src/components/ProductStrip.tsx`**

Server component. Imports `products` from data. Label: `Shipped & Live` (mono, orange). Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.

- [ ] **Step 6: Create `src/components/ShortBio.tsx`**

Server component. Renders: avatar image (80x80 rounded-full), name, paragraph bio from spec section 6.5, credential badges in a flex row. Use `next/image` for the avatar at `/avatar.png`.

- [ ] **Step 7: Create `src/components/FooterCTA.tsx`**

Server component. Centered section: "Let's work together." headline, sub-copy, "Get In Touch →" button linking to `/contact`.

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: Build succeeds (components exist but aren't imported into pages yet)

- [ ] **Step 9: Commit**

```bash
git add src/components/ProofChips.tsx src/components/CaseStudyCard.tsx src/components/CaseStudyCards.tsx src/components/ProductCard.tsx src/components/ProductStrip.tsx src/components/ShortBio.tsx src/components/FooterCTA.tsx
git commit -m "feat: add new homepage components — proof chips, case study cards, products, bio, CTA"
```

---

### Task 3: Rewrite Hero and Nav

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/MobileMenu.tsx`

- [ ] **Step 1: Rewrite `src/components/Hero.tsx`**

Replace entire content. New hero per spec section 6.1:
- Label: `// Product & Operations Leader` (mono, orange, uppercase)
- Headline: "I use data, economics, and systems design to turn messy real-world problems into shipped products."
- Sub-copy paragraph referencing case studies
- Two CTAs: "View Case Studies ↓" (black bg) + "Download Resume" (outlined border)
- Keep Framer Motion entrance animations (staggered spring)
- "Download Resume" links to `/jordan-eromonsele-resume.pdf` with `download` attribute

- [ ] **Step 2: Update `src/components/Nav.tsx`**

Replace `links` array with:
```typescript
const links = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
];
```

Change "Let's Talk →" CTA `href` to `/contact`.

- [ ] **Step 3: Update `src/components/MobileMenu.tsx`**

Update the links array to match the new nav labels. Read the file first to understand its structure.

- [ ] **Step 4: Verify dev server renders correctly**

Run: `npm run dev` — open `http://localhost:3000` — verify the nav and hero render with new content.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/Nav.tsx src/components/MobileMenu.tsx
git commit -m "feat: rewrite hero and nav for PM positioning"
```

---

### Task 4: Rewrite homepage (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite `src/app/page.tsx`**

Replace the entire content. New homepage flow per spec section 6:

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProofChips } from "@/components/ProofChips";
import { CaseStudyCards } from "@/components/CaseStudyCards";
import { ProductStrip } from "@/components/ProductStrip";
import { ShortBio } from "@/components/ShortBio";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AskJJ } from "@/components/AskJJ";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <ProofChips />
        <section id="case-studies">
          <CaseStudyCards />
        </section>
        <ProductStrip />
        <ShortBio />
        <FooterCTA />
      </main>
      <Footer />
      <AskJJ />
    </SmoothScroll>
  );
}
```

Old components (CredibilityBar, NowSection, PrinciplesSection, StorySection, JourneySection, WorkSection, ThinkingSection, LabSection) are NOT deleted — just no longer imported here.

- [ ] **Step 2: Update `src/components/Footer.tsx`**

Change the footer copy from "Founder, operator, builder" to "Product & operations leader. Dallas, TX. Open to product leadership, advisory, and operating engagements." Add an `<a href="/archive">Archive</a>` link to the social links row.

- [ ] **Step 3: Verify homepage renders**

Run: `npm run dev` — verify the full homepage flow: Nav → Hero → ProofChips → CaseStudyCards → ProductStrip → ShortBio → FooterCTA → Footer.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/components/Footer.tsx
git commit -m "feat: new homepage — proof chips, case studies, products, bio, CTA"
```

---

### Task 5: Build case study pages

**Files:**
- Create: `src/app/case-studies/[slug]/page.tsx`
- Create: `src/components/CaseStudySection.tsx`
- Create: `src/components/MetricsGrid.tsx`
- Create: `src/components/CaseStudyNav.tsx`

- [ ] **Step 1: Create `src/components/MetricsGrid.tsx`**

Server component. Props: `metrics: CaseStudyMetric[]`. Renders a 2x2 grid of metric cards. Each card: large bold value (orange for the first one), small uppercase label. Border styling matching proof chips.

- [ ] **Step 2: Create `src/components/CaseStudySection.tsx`**

Server component. Props: `section: CaseStudySection`. Renders:
- Number + label (mono, orange): `01 / The Problem`
- Headline (18px, extrabold)
- Body (13px, gray, max-w-640px, line-height-1.8). Split `body` on `\n\n` to render as `<p>` tags.
- If `section.visual` exists: render a grid of items (used for the six-pillar grid in ASG, for example).

- [ ] **Step 3: Create `src/components/CaseStudyNav.tsx`**

Server component. Props: `prevSlug?: string`, `prevTitle?: string`, `nextSlug?: string`, `nextTitle?: string`. Renders previous/next navigation row with links to `/case-studies/${slug}`.

- [ ] **Step 4: Create `src/app/case-studies/[slug]/page.tsx`**

Dynamic route page. Uses `generateStaticParams` returning the 3 slugs (`asg`, `nasher`, `tvghc`). Uses `generateMetadata` for per-page titles/descriptions per spec section 21.

Page layout:
1. Nav
2. Back link: "← Back to Case Studies" linking to `/#case-studies`
3. Header: tags, title, summary, metadata row (Role, Company, Duration, Key Metric)
4. Map over `caseStudy.sections` rendering `CaseStudySection` for each
5. `MetricsGrid` for the outcome section (render inside or after section 05)
6. `CaseStudyNav` with prev/next links
7. Footer

Look up the case study by `slug` from `caseStudies` array. If not found, call `notFound()`.

- [ ] **Step 5: Verify all 3 case study pages render**

Run: `npm run dev`
- Open `http://localhost:3000/case-studies/asg` — verify full page renders
- Open `http://localhost:3000/case-studies/nasher` — verify
- Open `http://localhost:3000/case-studies/tvghc` — verify
- Click "Read Case Study →" on homepage cards — verify navigation works

- [ ] **Step 6: Commit**

```bash
git add src/app/case-studies/ src/components/CaseStudySection.tsx src/components/MetricsGrid.tsx src/components/CaseStudyNav.tsx
git commit -m "feat: add 3 case study pages — ASG, Nasher, TVGHC"
```

---

### Task 6: Build sub-pages (Products, About, Writing, Archive)

**Files:**
- Create: `src/app/products/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/writing/page.tsx`
- Create: `src/app/archive/page.tsx`

- [ ] **Step 1: Create `src/app/products/page.tsx`**

Import Nav, Footer, ProductCard, products data. Export metadata per spec section 21. Render: headline "Products I've Built.", sub-copy, 2x2 grid (`grid-cols-1 md:grid-cols-2 gap-6`) of ProductCard components. Include link to diagnostic from the 4 Gaps card.

- [ ] **Step 2: Create `src/app/about/page.tsx`**

Import Nav, Footer. Export metadata. Render per spec sections 9 and 18:
1. Photo + bio paragraph (use `next/image` for `/avatar.png`)
2. Credentials section (MS, BBA, PMP, Six Sigma, TEDx)
3. "How I Operate" — 3 principles in a `grid-cols-1 md:grid-cols-3 gap-4` grid. Each: title (bold) + body (gray). Include diagnostic link in the "If it breaks when you leave" principle.
4. Career timeline — 9 entries, each: `<strong>Company</strong> — Role · Years`

- [ ] **Step 3: Create `src/app/writing/page.tsx`**

Import Nav, Footer. Export metadata. Render per spec section 10: headline "Writing & Speaking.", two card entries (TEDx and Newsletter). Each card: tag (mono, orange), title (bold), description (gray), CTA link. Only published items — no "coming soon."

- [ ] **Step 4: Create `src/app/archive/page.tsx`**

Import Nav, Footer, ProjectCard, projects data. Export metadata. Filter projects where `page === "archive"`. Render: headline "Archive.", sub-copy, two sections:
- "Client & Builder" — projects that were previously `tier: "flagship"` or `tier: "builder"` and are now archived
- "Lab & Experiments" — projects that were previously `tier: "lab"`

Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`. Reuse existing `ProjectCard` component with `compact` prop.

- [ ] **Step 5: Verify all pages render**

Run: `npm run dev`
- `/products` — 4 product cards
- `/about` — bio, credentials, principles, timeline
- `/writing` — TEDx + newsletter
- `/archive` — all preserved projects

- [ ] **Step 6: Commit**

```bash
git add src/app/products/ src/app/about/ src/app/writing/ src/app/archive/
git commit -m "feat: add products, about, writing, and archive pages"
```

---

### Task 7: Update metadata, config, and contact page

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Update `src/app/layout.tsx` metadata**

Change title to: `Jordan Eromonsele — Product & Operations Leader`
Change description to: `Product and operations leader who uses data, economics, and systems design to ship products. Case studies, live products, and PM thinking.`
Update OpenGraph title and description to match.

- [ ] **Step 2: Update `src/app/contact/page.tsx`**

Update the intro copy from "founder, operator, and builder" to "product and operations leader." Add resume download link: `<a href="/jordan-eromonsele-resume.pdf" download>Download Resume (PDF)</a>`. Keep existing email and LinkedIn CTAs. Update Nav import (already using it).

- [ ] **Step 3: Add redirects to `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/#story", destination: "/about", permanent: true },
      { source: "/#principles", destination: "/about", permanent: true },
      { source: "/#journey", destination: "/about", permanent: true },
      { source: "/#work", destination: "/archive", permanent: true },
      { source: "/#thinking", destination: "/writing", permanent: true },
      { source: "/#lab", destination: "/archive", permanent: true },
      { source: "/#now", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
```

Note: Hash-based redirects may not work in Next.js server-side redirects (hashes are client-side only). If this doesn't work, skip it — the old anchors simply won't exist on the page, which is acceptable.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Full build succeeds with all pages statically generated.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/contact/page.tsx next.config.ts
git commit -m "feat: update metadata, contact page, and config for PM framing"
```

---

### Task 8: Accessibility and visual polish

**Files:**
- Modify: `src/app/layout.tsx` — add skip-to-content link
- Modify: `src/app/globals.css` — add focus styles, reduced-motion
- Modify: various components — add semantic landmarks

- [ ] **Step 1: Add skip-to-content link in `layout.tsx`**

Add before `{children}`:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm">
  Skip to content
</a>
```

Add `id="main-content"` to the `<main>` tag in `page.tsx` and all sub-pages.

- [ ] **Step 2: Add reduced-motion and focus styles to `globals.css`**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}
```

- [ ] **Step 3: Add semantic landmarks**

In `page.tsx` and sub-pages: ensure `<main>`, `<nav>`, `<footer>`, `<article>` (for case studies), and `<section>` tags are used correctly. The Nav already uses `<nav>`, Footer uses `<footer>`. Case study pages should wrap the content in `<article>`.

- [ ] **Step 4: Verify build and accessibility basics**

Run: `npm run build`
Expected: Build succeeds. Manually check: skip link works with Tab key, focus outlines visible, reduced-motion respected.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css src/app/page.tsx
git commit -m "feat: add skip-to-content, focus styles, reduced-motion, semantic landmarks"
```

---

### Task 9: SEO — sitemap, robots, JSON-LD

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/case-studies/[slug]/page.tsx` — add JSON-LD

- [ ] **Step 1: Create `src/app/sitemap.ts`**

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jordaneromonsele.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/case-studies/asg`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies/nasher`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies/tvghc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/writing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/archive`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/diagnostic`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
```

- [ ] **Step 2: Create `src/app/robots.ts`**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jordaneromonsele.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Add JSON-LD to case study pages**

In `src/app/case-studies/[slug]/page.tsx`, add a `<script type="application/ld+json">` in the page component with Person + Article schema for each case study.

- [ ] **Step 4: Verify sitemap and robots**

Run: `npm run dev`
- Open `http://localhost:3000/sitemap.xml` — verify all 10 URLs listed
- Open `http://localhost:3000/robots.txt` — verify content

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/case-studies/
git commit -m "feat: add sitemap, robots.txt, and JSON-LD schema"
```

---

### Task 10: Final build verification and deploy

**Files:** None new — verification only.

- [ ] **Step 1: Full production build**

Run: `cd /Users/eromonselejj/jj-portfolio && npm run build`
Expected: Build succeeds with all 10 pages statically generated.

- [ ] **Step 2: Test all routes**

Run `npm run dev` and verify each route:
- `/` — Homepage with hero, proof chips, 3 case study cards, products strip, bio, CTA
- `/case-studies/asg` — Full 6-section case study
- `/case-studies/nasher` — Full 6-section case study
- `/case-studies/tvghc` — Full 6-section case study
- `/products` — 4 product cards with live links
- `/about` — Bio, credentials, 3 principles, career timeline
- `/writing` — TEDx + newsletter
- `/archive` — All preserved projects in grid
- `/contact` — Updated copy + resume download
- `/diagnostic` — Unchanged, still works

- [ ] **Step 3: Test navigation flow**

- Click all nav links — verify routing
- Click case study cards on homepage — verify they open the case study page
- Click "Back to Case Studies" on case study pages — returns to homepage #case-studies
- Click product links — verify external links open in new tab
- Click Previous/Next on case study pages — verify navigation between studies
- Test mobile menu — verify all links work

- [ ] **Step 4: Commit and push**

```bash
git add -A
git commit -m "feat: portfolio redesign complete — PM-optimized hybrid with case studies"
git push origin main
```

Vercel will auto-deploy from main.

- [ ] **Step 5: Verify production deployment**

After Vercel deploys, visit the production URL and verify all pages render correctly.
