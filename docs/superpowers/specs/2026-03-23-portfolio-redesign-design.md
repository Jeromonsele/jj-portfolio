# Portfolio Redesign — PM-Optimized Hybrid

**Date:** 2026-03-23
**Author:** Jordan Eromonsele + Claude
**Status:** Approved design, pending implementation plan

---

## 1. Goal

Transform jordaneromonsele.com from a founder/operator personal site into a **world-class PM portfolio** that makes decision quality, metrics, and product thinking obvious — while preserving the "product-minded operator" undertone.

**Target audience:** PM hiring managers at tech companies.
**Success criteria:** A recruiter scanning the site for 30 seconds understands: (1) what Jordan does, (2) the scale he operates at, (3) that he ships real products, and (4) how to contact him.

---

## 2. Current State

**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + Lenis
**Deployment:** Vercel (auto-deploy from main)
**Pages:** 3 (homepage, /contact, /diagnostic)

**Current homepage sections (in order):**
1. Nav (Story / Principles / Journey / Work / Thinking / Lab)
2. Hero ("I've built systems across six industries. The failure pattern is the same every time.")
3. CredibilityBar ("As featured in" — TEDx, NYT, ARTnews, Surface, KERA, PR Newswire)
4. NowSection (2 current roles)
5. PrinciplesSection (5 principles, long copy)
6. StorySection (career timeline with testimonials)
7. JourneySection ("9 Months. Zero to Production." — coding milestones + tech stack)
8. WorkSection (7 flagship + 6 builder projects, all given similar weight)
9. ThinkingSection (newsletter + 2 "coming soon" articles + TEDx + book in progress)
10. LabSection (8 lab entries + 7 side projects)
11. Footer ("Founder, operator, builder")
12. AskJJ chatbot

**Problems identified:**
- Framing optimized for "founder with range," not "PM who ships with judgment"
- 21 projects given near-equal weight — dilutes the best work
- Nav labels are poetic, not descriptive (Story / Principles / Journey / Work / Thinking / Lab)
- Text-dense; a recruiter can miss the best parts on first pass
- "Coming soon" articles undermine credibility
- No case studies showing decision-making process
- No way to share individual project URLs with recruiters

---

## 3. Design: Approach C (Hybrid)

New homepage designed for PM signal + 3 dedicated case study pages + Products page + preserved archive. Nothing good gets deleted, just reorganized.

---

## 4. Site Map

```
/                          Homepage (hero + proof + case studies + products + bio + CTA)
/case-studies/asg          ASG — AI Governance & Enterprise Transformation
/case-studies/nasher       Nasher Prize — Producing World-Class Cultural Experiences
/case-studies/tvghc        TVGHC — Building a 1.8M-Property Data Platform from Zero
/products                  Live shipped products (SearchFundDB, Estimator, Diagnostic, Confession Booth)
/about                     Bio + credentials + principles (3) + career timeline
/writing                   TEDx + newsletter (published pieces only)
/archive                   Builder proof + lab experiments (all current projects preserved)
/contact                   Email + socials + resume download + contact form
/diagnostic                4 Gaps interactive tool (already built, no changes)
```

**10 pages total.** Up from 3 — but the homepage is tighter and every sub-page has a clear purpose.

---

## 5. Navigation

**Desktop:** `Jordan Eromonsele | Case Studies · Products · About · Writing | [Let's Talk →]`
**Mobile:** Hamburger menu with same links.

- "Case Studies" first — it's what PM recruiters want
- Clear, descriptive labels per NN/g scannability research
- Sticky on scroll (existing behavior, keep)
- "Let's Talk →" CTA always visible

---

## 6. Homepage

### 6.1 Hero

**Label:** `// Product & Operations Leader` (mono, orange, uppercase)

**Headline:**
```
I use data, economics, and
systems design to turn messy
real-world problems into
shipped products.
```

**Sub-copy:**
> Six industries. Enterprise programs to startup builds. I've managed 12+ concurrent programs at a $100M+ media technology company, produced $100K prize-winning cultural experiences, and built a 1.8M-property data platform from scratch.

**CTAs:**
- Primary: `View Case Studies ↓` (black button)
- Secondary: `Download Resume` (outlined button)

### 6.2 Proof Chips

Replaces the current "As Featured In" credibility bar. Four metric cards in a horizontal row:

| Metric | Label |
|--------|-------|
| **1.87M** | Properties Indexed |
| **80%** | AI Gov. Adoption |
| **$100K** | Prize Productions |
| **12+** | Concurrent Programs |

Each chip links to its corresponding case study.

### 6.3 Case Study Cards

Three cards, each containing:
- Tag line (mono, orange): `Enterprise · AI Governance · Program Management`
- Title (bold): `ASG — AI Governance & Enterprise Transformation`
- Problem/Decision/Outcome (3 bolded labels with 1-line descriptions)
- CTA: `Read Case Study →`
- Visual thumbnail on the right (dark background with key metric in orange)

**Case study order:**
1. ASG — AI Governance & Enterprise Transformation
2. Nasher Prize — Producing World-Class Cultural Experiences
3. TVGHC — Building a 1.8M-Property Data Platform from Zero

### 6.4 Live Products Strip

Label: `Shipped & Live`
Four compact cards in a row:
- SearchFundDB (4,849 funds, 30+ countries)
- TVGHC Estimator (1.87M properties, 4 counties)
- 4 Gaps Diagnostic (8 questions, proprietary IP)
- AI Confession Booth (OpenAI + Stripe)

Each links to the live production app.

### 6.5 Short Bio

Photo (avatar.png) + paragraph + credential badges: PMP · Six Sigma Green Belt · MS Org Change & PM · TEDx Speaker

### 6.6 Footer CTA

```
Let's work together.
Open to product leadership, advisory, and operating engagements.
[Get In Touch →]
```

---

## 7. Case Study Pages

All three follow the same 6-section structure:

### Structure

```
Header:     Tags + Title + Summary + Role/Company/Duration/Key Metric
Section 01: The Problem — Context, stakes, industry benchmarks
Section 02: The Constraints — What made this hard (shows PM maturity)
Section 03: The Insight — The non-obvious realization that shaped the approach
Section 04: The Decision — What was chosen, why, what was rejected
Section 05: The Outcome — Metrics grid (2x2) + narrative on broader impact
Section 06: The Reflection — What would be done differently (shows self-awareness)
Nav Footer: Previous/Next case study links
```

### 7.1 ASG — AI Governance & Enterprise Transformation

**Tags:** Enterprise · AI Governance · Program Management
**Role:** Program Manager | **Company:** Advanced Systems Group ($100M+ revenue, 379 employees, clients: Spotify, USC, SAG-AFTRA) | **Duration:** May 2024 – Nov 2025

**Problem:** 52% of teams using AI tools with no oversight. Industry context: only 14% of enterprises enforce AI governance at scale.

**Constraints:** Multi-industry embedded clients, no existing AI policy, culture of autonomy resistant to mandates, 12+ concurrent programs competing for attention.

**Insight:** Different parts of the business have different risk profiles. A blanket policy is the wrong abstraction. Segment by use case and risk tier, not by department.

**Decision:** Six-pillar framework (General Use, Creative Workflows, Business Ops, Client Solutions, Security & Compliance, Training). Three maturity phases. Phased rollout starting with low-risk/high-visibility pillars to build trust. Also replaced fragmented manual tracking with executive dashboards.

**Outcome metrics:**
- 80% global adoption (Phase 1)
- 6 governance pillars
- 12+ concurrent programs managed
- 50+ stakeholders aligned
- 75+ executive presentations delivered
- Boston Planning Summit facilitated (50+ executives)

**Reflection:** Would treat governance more explicitly as a product — with user research, feedback loops, and versioning. Would push for dedicated tooling instead of dashboards. Key lesson: adoption is a design problem, not a compliance problem.

### 7.2 Nasher Prize — Producing World-Class Cultural Experiences

**Tags:** Cultural Production · Cross-Functional · Vendor Management
**Role:** Program Manager | **Company:** Nasher Sculpture Center (world's most prestigious sculpture prize, $100K award — same as the Pritzker Prize for architecture) | **Duration:** Oct 2022 – Apr 2023, Mar – Apr 2025

**Problem:** Deliver two immersive experiences for the Nasher Prize — the world's only $100K prize for sculpture. Zero margin for error. Artistic vision must be preserved while managing logistics, vendors, and public-facing operations.

**Constraints:** Artists work on their own timeline and process — you can't "sprint" an artist. Multi-stakeholder environment (curatorial, development, marketing, operations, 10+ external vendors). Intimate scale (15-person seatings for Afro Mingei) requires precision, not volume. Budget and timeline fixed.

**Insight:** Cultural production is product management under different constraints. The "user" is the visitor. The "product" is the experience. The "stakeholders" are artists, curators, donors, press, and operations. The PM job is the same: align everyone toward a coherent outcome without breaking what makes it special.

**Decision — Afro Mingei (Theaster Gates, 2022-2023):**
Managed a multi-sensory gathering space merging Japanese and African American culture — food, ceramics, 1,000 curated vinyl records, custom furniture from salvaged Chicago wood. Coordinated culinary team, ceramics from Dorchester Industries, AV/music curation, front-of-house operations. Open Nov 16 – Apr 29, Wed-Sat evenings. Later expanded to Mori Art Museum in Tokyo (2024).

**Decision — Otobong Nkanga (2025):**
"Each Seed a Body" exhibition, April–August 2025. First African-born recipient of the Nasher Prize. Full ownership: artist relationships, vendor contracts, venue, timeline. Coordinated curatorial, development, marketing, operations, 10+ external vendors.

**Outcome:**
- 5,000+ attendees across both engagements
- Press: Surface Magazine, KERA News, Patron Magazine, Dallas Morning News, Art&Seek
- Afro Mingei concept later exhibited at Mori Art Museum, Tokyo
- Invited back for second engagement (Nkanga 2025) — earned repeat trust
- Two laureates produced, two successful multi-month runs

**Reflection:** Would formalize the visitor experience feedback loop earlier — survey/observation data from week 1 could inform adjustments for the remaining run. Would also document the production playbook more rigorously so it's transferable beyond my involvement.

### 7.3 TVGHC — Building a 1.8M-Property Data Platform from Zero

**Tags:** Data Platform · Go-to-Market · Automation
**Role:** Founder | **Company:** The Very Good Home Company | **Duration:** Nov 2025 – Present

**Problem:** Home insulation is a $13.5B commodity market growing at 6.62% CAGR. Nobody wakes up wanting insulation. Competitors sell on "save money on energy bills" — a Red Ocean. DFW has 71,788 new building permits/year (#1 nationally) but most insulation companies compete on price with no technology advantage.

**Constraints:** Two-person operation (Jordan + Barry, operations partner). No VC funding. Contractor partner (Modern Insulation) handles installation — we're an orchestration layer, not a crew. Pricing gap: our estimates ($4,118-$8,662) vs market expectation ($650-$1,547) needs resolution before mass marketing.

**Insight:** The real competitive advantage isn't cheaper insulation — it's owning the data layer. County property records are free and public. Commercial APIs charge $500+/month for the same data. By indexing county CAD records directly, we get a proprietary database at $0/month that competitors using commercial APIs can't replicate.

**Decision — Estimator platform:**
Built address autocomplete → property lookup → heuristic pricing engine using 1.87M county records (DCAD 631K, TAD 592K, Collin 356K, Denton 290K). SKU structure with 3 tiers (R-38 top-off, R-49 top-off, full replacement). Lead scoring engine (0-100) based on home factors, symptom urgency, financial signals, engagement signals.

**Decision — ICP research that changed the GTM:**
Ranked 5 ICPs by priority. Discovery: HVAC Referral (#1 — pre-sold, not price-shopping) should be primary channel, not website traffic. Real estate agents (#2) need fast estimates for closings. "Hot upstairs" homeowners (#3) are high-volume but most price-sensitive. Pivoted from website-first to Barry-texting-estimate-links-first.

**Decision — Autonomous content machine:**
3 n8n workflows: W1 (video → transcription → AI copy generation), W2 (6 posts/day at optimal times, zero human approval), W3 (weekly analytics + AI analysis report). Brand voice v5 with A/B hook testing, UTM conversion tracking, seasonal content prioritization.

**Outcome:**
- 1.87M properties indexed across 4 DFW counties
- $0/month data cost vs $500+ commercial API alternatives
- 5 ICPs ranked, go-to-market pivoted based on research
- Pricing gap (2-3x) identified before launch, not after
- 189 content drafts generated, 6 posts/day fully autonomous
- Estimator live at theverygoodhomecompany.com/get-estimate
- Oncor rebate integration ($21M+ annual program)

**Reflection:** Would validate pricing with 20+ real customer conversations before building the estimator engine. The 2-3x pricing gap could have been caught earlier with lean validation instead of building first. Would also separate the estimator into its own deployable product — it has value beyond TVGHC as a white-label tool for other insulation companies.

---

## 8. Products Page

**Headline:** Products I've Built.
**Sub-copy:** These aren't mockups or concept projects. They're live, in production, serving real users.

**2x2 grid:**

| Product | Description | Key Metrics |
|---------|-------------|-------------|
| SearchFundDB | Search fund discovery platform. Full-text search, magic link auth, contact enrichment pipeline. | 4,849 funds · 75+ contacts · 30+ countries |
| TVGHC Estimator | Instant insulation estimates for DFW homeowners. Property lookup from county records. | 1.87M properties · 4 counties · $0/mo data |
| 4 Gaps Diagnostic | 8-question operational assessment based on master's research. | 8 questions · 2 minutes · Proprietary IP |
| AI Confession Booth | Anonymous AI confessional with payments and auth. | OpenAI + Stripe + Supabase Auth |

Each card links to the live production app.

---

## 9. About Page

Replaces current Story + Principles + Journey sections. Same content, 1/3 the scroll.

**Sections:**
1. Photo + 3-paragraph bio (concise, outcome-oriented)
2. Credentials: MS Org Change & PM (DBU 2024), BBA Marketing (UTA 2019), PMP, Six Sigma Green Belt, TEDx Speaker
3. How I Operate: 3 principles (condensed from 5 — "The gap is never the technology," "If it breaks when you leave, it's not a system," "Software should be clarity, not complexity")
4. Career Path: 9 roles, one line each, reverse chronological

---

## 10. Writing Page

Published pieces only. No "coming soon."

1. TEDx: Revolution for Dummies (TEDxUTA, 2018) — link to TED.com
2. Newsletter: The Very Good Guys (LinkedIn) — link to LinkedIn

Articles (AI governance, agentic workflow) get added when published. No placeholders.

---

## 11. Archive Page

All current builder proof + lab projects preserved in a clean grid. Two sections:

**Client & Builder:** Emma Project, Haus of Duas, AC Christopher CPA, PressureX, Company X-Ray, LPM SOP Platform
**Lab & Experiments:** Periods., 75 Hard Tracker, Wrong Door Club, CC Planning, AIPromptDoc, Vibe Receipt

Each links to its Vercel deployment. Compact cards, no descriptions longer than one line.

---

## 12. Contact Page

Keep existing /contact page structure. Add:
- Resume download link (PDF)
- "Open to product leadership roles, advisory, and operating engagements."

---

## 13. Technical Requirements

### Routing
- New dynamic route: `/case-studies/[slug]` using Next.js App Router
- Static generation for all case study pages (generateStaticParams)
- Keep existing `/diagnostic` route unchanged

### Data Architecture
- New `src/data/case-studies.ts` — case study content (title, sections, metrics)
- Refactor `src/data/projects.ts` — add `archived: boolean` field, filter on homepage vs archive
- New `src/data/products.ts` — live product links and metadata

### Components (new)
- `CaseStudyCard` — homepage card with Problem/Decision/Outcome
- `CaseStudyPage` — full page template with 6 sections
- `ProofChips` — horizontal metric cards
- `ProductCard` — live product card with link
- `MetricsGrid` — 2x2 grid for case study outcome sections
- `CaseStudyNav` — previous/next navigation

### Components (modified)
- `Hero` — complete rewrite (new copy, new CTAs)
- `Nav` — new labels, case studies first
- `MobileMenu` — updated links
- `Footer` — updated positioning copy

### Components (removed from homepage, preserved in archive)
- `CredibilityBar` → replaced by ProofChips
- `NowSection` → absorbed into About page
- `PrinciplesSection` → condensed into About page (3 of 5)
- `StorySection` → condensed into About career timeline
- `JourneySection` → removed (coding journey is not PM signal)
- `WorkSection` → replaced by CaseStudyCards + archive
- `ThinkingSection` → replaced by /writing page
- `LabSection` → moved to /archive

### Visual Polish
- Higher contrast (verify WCAG AA on all text)
- Tighter typography scale
- Reduce motion: respect `prefers-reduced-motion`
- Remove excessive scroll-reveal animations — keep only hero entrance
- Paper grain texture: keep (brand identity)

### SEO & Metadata
- Dynamic OG images per case study page
- JSON-LD schema (Person, Article for case studies)
- Sitemap generation
- robots.txt
- Canonical URLs
- Route-specific meta descriptions

### Accessibility
- Semantic HTML landmarks (header, main, nav, footer, article, section)
- Visible focus indicators
- Skip-to-content link
- Target sizes ≥ 44x44px
- Content reflow at 320 CSS px
- `prefers-reduced-motion` support

### Performance
- Enable Vercel Speed Insights
- Target Core Web Vitals: LCP ≤ 2.5s, INP < 200ms, CLS < 0.1
- Optimize images (Next.js Image component)
- Font optimization (next/font)

---

## 14. What Gets Removed

- "As Featured In" credibility bar (replaced by proof chips with hard metrics)
- NowSection from homepage (absorbed into About page)
- 5 principles on homepage (3 best moved to About page)
- StorySection from homepage (career timeline on About page)
- JourneySection ("9 Months. Zero to Production." — not PM signal)
- 21 equal-weight projects on homepage (3 case studies + archive)
- "Coming soon" articles (hidden until published)
- "Builder Proof" label on homepage
- "The Lab" dark section from homepage
- Tech stack tags grid (not PM signal)
- Footer "Founder, operator, builder" (replaced with PM-oriented copy)

---

## 15. What Gets Preserved

- Warm paper grain texture (brand identity)
- Orange accent color (#C85A2A)
- JetBrains Mono for technical labels
- AskJJ chatbot (stays, maybe moved to /contact or kept floating)
- /diagnostic page (already built, no changes)
- All 21 projects (moved to /archive, not deleted)
- Framer Motion for hero entrance only
- Lenis smooth scroll

---

## 16. Sources

Research that informed this design:

- [PM Portfolio Guide — Leland](https://www.joinleland.com/library/a/product-manager-portfolio)
- [PM Portfolio Examples — CareerFoundry](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- [20+ PM Portfolio Examples — SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios)
- [Portfolio 2026: Tell Outcome Stories — UX University](https://newsletter.uxuniversity.io/p/portfolio-2026-tell-outcome-stories)
- [ASG Company Profile](https://www.asgllc.com/about-us/)
- [Nasher Prize — World's Most Prestigious Sculpture Award](https://www.nashersculpturecenter.org/programs-events/nasher-prize)
- [Afro Mingei at the Nasher — KERA News](https://www.keranews.org/arts-culture/2022-11-21/deeply-personal-north-texans-react-to-theaster-gates-new-food-pop-up-at-the-nasher)
- [Afro Mingei — Surface Magazine](https://www.surfacemag.com/articles/theaster-gates-afro-mingei-nasher/)
- [Otobong Nkanga — 2025 Nasher Prize Laureate](https://www.nashersculpturecenter.org/programs-events/nasher-prize/laureates/laureate/id/320)
- [U.S. Insulation Market — Grand View Research](https://www.grandviewresearch.com/industry-analysis/us-insulation-market-report)
- [Oncor Energy Efficiency Programs](https://quickelectricity.com/oncorincentives/)
- [AI Governance Benchmark Report — ModelOp](https://www.modelop.com/ai-gov-benchmark-report)
- [Enterprise AI Governance Guide — Liminal](https://www.liminal.ai/blog/enterprise-ai-governance-guide)
