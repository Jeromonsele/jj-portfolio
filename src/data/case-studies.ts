export interface CaseStudySection {
  number: string;
  label: string;
  headline: string;
  body: string;
  visual?: {
    type: "grid" | "metrics";
    items: { label: string; sublabel?: string; value?: string }[];
  };
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  role: string;
  company: string;
  duration: string;
  keyMetric: string;
  sections: CaseStudySection[];
  outcomeMetrics: CaseStudyMetric[];
  thumbnail: {
    type: "metric" | "gradient" | "image";
    value: string;
  };
  cardProblem: string;
  cardDecision: string;
  cardOutcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "asg",
    title: "ASG - AI Governance & Enterprise Transformation",
    tags: ["Enterprise", "AI Governance", "Program Management"],
    summary:
      "How I built a six-pillar AI governance framework at a $100M+ media technology company serving Spotify, USC, and SAG-AFTRA - and got 80% global adoption when only 14% of enterprises achieve enforcement at scale.",
    role: "Program Manager",
    company: "Advanced Systems Group",
    duration: "May 2024 – Nov 2025",
    keyMetric: "80% Adoption",
    thumbnail: { type: "metric", value: "80%" },
    cardProblem:
      "52% of teams using AI with no oversight at a $100M+ media technology company.",
    cardDecision:
      "Built a six-pillar governance framework instead of a blanket policy ban.",
    cardOutcome:
      "80% global adoption in Phase 1. Only 14% of enterprises achieve this.",
    sections: [
      {
        number: "01",
        label: "The Problem",
        headline: "52% of teams were using AI tools with zero oversight.",
        body: "ASG is a $100M+ media technology company with 379 employees across 5 continents, serving clients like Spotify, USC Annenberg, PAC-12 Network, and SAG-AFTRA. The managed services team embeds staff into client operations - creative, production, IT, engineering.\n\nBy early 2024, AI tools were spreading across the org with no guardrails. Teams were using ChatGPT for client deliverables, generating content without review, and sharing proprietary data with third-party models. No policy existed. No training existed. Leadership knew it was a risk but didn't know how to move without killing adoption.\n\nIndustry context: Only 14% of enterprises enforce AI governance at scale. Most either ban AI (killing productivity) or ignore it (accepting risk). Neither works.",
      },
      {
        number: "02",
        label: "The Constraints",
        headline:
          "A framework that's too strict kills adoption. Too loose and it's meaningless.",
        body: "Multi-industry clients: ASG's managed services staff work embedded inside client environments. Governance had to flex across media, corporate, sports, and education - not one-size-fits-all.\n\nNo existing precedent: No AI policy, no training materials, no risk taxonomy. Building from scratch.\n\nCulture of autonomy: Creative and technical staff resist top-down mandates. The framework had to feel enabling, not restricting.\n\nSimultaneous programs: I was managing 12+ concurrent programs (Digital Transformation, Managed Services GTM, Talent Operations, Data Analytics) while building this. AI governance was one of 15-20 active workstreams.",
      },
      {
        number: "03",
        label: "The Insight",
        headline:
          "The problem isn't AI. The problem is that different parts of the business have different risk profiles.",
        body: "A blanket AI policy treats a creative team generating mood boards the same as a client-embedded team handling compliance data. That's the wrong abstraction.\n\nThe insight was to segment by use case and risk tier, not by department. This led to a six-pillar structure where each pillar has its own rules, training requirements, and approval thresholds - but they share a common maturity model.",
      },
      {
        number: "04",
        label: "The Decision",
        headline: "Six pillars. Three maturity phases. One adoption strategy.",
        body: "I built a framework organized around six distinct AI use cases, each with escalating maturity phases.\n\nWhy six pillars instead of one policy doc: A single document gets filed and forgotten. Six pillars meant six team owners, six sets of training, six adoption curves I could measure independently. It also meant I could phase the rollout - start with General Use (low risk, high visibility) and build trust before tackling Client Solutions (high risk, high stakes).\n\nThree maturity phases: Phase 1 was awareness + guardrails. Phase 2 was integration into workflows. Phase 3 was optimization and measurement. This let teams adopt at their own pace without blocking each other.",
        visual: {
          type: "grid",
          items: [
            { label: "General Use", sublabel: "Day-to-day productivity" },
            { label: "Creative Workflows", sublabel: "Content & design" },
            { label: "Business Ops", sublabel: "Process & reporting" },
            { label: "Client Solutions", sublabel: "Client-facing AI use" },
            {
              label: "Security & Compliance",
              sublabel: "Data protection",
            },
            { label: "Training", sublabel: "Capability building" },
          ],
        },
      },
      {
        number: "05",
        label: "The Outcome",
        headline: "80% adoption in Phase 1. Across 5 continents.",
        body: "The framework also replaced fragmented manual tracking with executive dashboards - giving leadership visibility into AI usage patterns, risk incidents, and adoption velocity for the first time.\n\nBeyond governance, I managed the broader program portfolio: Digital Transformation initiatives, Managed Services go-to-market strategy, organizational restructuring (Boston Planning Summit for 50+ executives), and 75+ executive presentations across the engagement.",
      },
      {
        number: "06",
        label: "The Reflection",
        headline: "Governance is a product, not a policy.",
        body: "If I did this again, I'd treat the framework more explicitly as a product from day one - with user research (interviewing teams about their actual AI usage before writing policy), a feedback loop (quarterly surveys on what's working), and versioning (the framework should evolve as AI capabilities change).\n\nI'd also push harder for dedicated AI governance tooling instead of tracking in spreadsheets and dashboards. The monitoring layer was the weakest part of the system.\n\nThe biggest lesson: adoption is a design problem, not a compliance problem. The framework succeeded because it felt like a tool, not a rule.",
      },
    ],
    outcomeMetrics: [
      { value: "80%", label: "Phase 1 Adoption" },
      { value: "6", label: "Governance Pillars" },
      { value: "12+", label: "Concurrent Programs" },
      { value: "50+", label: "Stakeholders Aligned" },
    ],
  },
  {
    slug: "nasher",
    title: "Nasher Prize - Producing World-Class Cultural Experiences",
    tags: ["Cultural Production", "Cross-Functional", "Vendor Management"],
    summary:
      "Producing two immersive experiences for the world's most prestigious sculpture prize - a $100K award on par with the Pritzker Prize for architecture. 5,000+ attendees, press in Surface Magazine and KERA News.",
    role: "Program Manager",
    company: "Nasher Sculpture Center",
    duration: "Oct 2022 – Apr 2023, Mar – Apr 2025",
    keyMetric: "5,000+ Attendees",
    thumbnail: { type: "gradient", value: "Nasher Prize" },
    cardProblem:
      "Deliver two immersive experiences for the world's most prestigious sculpture prize ($100K award) under artistic constraints with zero margin for error.",
    cardDecision:
      "Structured cross-functional coordination across curatorial, marketing, development, and 10+ vendors while preserving artistic vision.",
    cardOutcome:
      "5,000+ attendees. Surface Magazine, KERA News coverage. Invited back for second engagement.",
    sections: [
      {
        number: "01",
        label: "The Problem",
        headline:
          "Deliver two world-class experiences with zero margin for error.",
        body: "The Nasher Prize is the world's only $100,000 prize specifically for sculpture - the same award amount as the Pritzker Prize for architecture. No other prize anywhere in the world cites sculpture specifically. The Nasher Sculpture Center in Dallas awards it biennially to a living artist.\n\nI was brought in to produce the experiential programming for two laureates: Theaster Gates (2022-2023) and Otobong Nkanga (2025, the first African-born recipient). These aren't gallery openings. They're multi-month, multi-sensory experiences that need to honor the artist's vision while handling logistics, vendors, budgets, and public-facing operations.",
      },
      {
        number: "02",
        label: "The Constraints",
        headline:
          "You can't sprint an artist. And you can't fail in public.",
        body: "Artists work on their own timeline and process. Theaster Gates was designing custom ceramics, curating 1,000 vinyl records, and sourcing salvaged Chicago wood for furniture - all while the opening date was fixed. You learn to build flexibility into the plan without losing control of the deadline.\n\nMulti-stakeholder environment: curatorial, development, marketing, operations, 10+ external vendors (catering, AV, installation, print). Each has different priorities and communication styles.\n\nIntimate scale: Afro Mingei seated only 15 people per seating. That means every detail is visible. There's nowhere to hide a mistake.\n\nBudget and timeline fixed. Sponsors committed. Press invited. The experience has to work on opening night.",
      },
      {
        number: "03",
        label: "The Insight",
        headline:
          "Cultural production is product management under different constraints.",
        body: "The 'user' is the visitor. The 'product' is the experience. The 'stakeholders' are artists, curators, donors, press, and operations. The PM job is the same: align everyone toward a coherent outcome without breaking what makes it special.\n\nThe difference is that in tech, you can ship an MVP and iterate. In cultural production, opening night is the launch and there's no hotfix. That constraint forces better planning, clearer communication, and more disciplined scope management.",
      },
      {
        number: "04",
        label: "The Decision",
        headline:
          "Two laureates. Two very different experiences. Same production discipline.",
        body: "Afro Mingei (Theaster Gates, 2022-2023): A multi-sensory gathering space merging Japanese and African American culture. Food served on Gates' handmade ceramics from Dorchester Industries. A bar built from salvaged Chicago wood. 1,000 curated vinyl records. DJ nights. The menu blended Japanese and Southern cooking - cornmeal dumplings in shiitake leek broth, karaage chicken with green tomato chow chow. Open November 16 through April 29, Wednesday through Saturday evenings. The concept later traveled to the Mori Art Museum in Tokyo.\n\nOtobong Nkanga (2025): 'Each Seed a Body' exhibition, April through August 2025. Nkanga's work explores interconnections between humans, land, and natural resources through sculpture, textiles, and installation. Full ownership of production: artist relationships, vendor contracts, venue preparation, timeline management. Coordinated across curatorial, development, marketing, operations, and 10+ external vendors.",
      },
      {
        number: "05",
        label: "The Outcome",
        headline: "5,000+ attendees. Press coverage. Repeat trust.",
        body: "5,000+ attendees across both engagements. Press coverage in Surface Magazine, KERA News, Patron Magazine, Dallas Morning News, and Art&Seek.\n\nAfro Mingei later exhibited at the Mori Art Museum in Tokyo (2024) - what started in a Dallas gallery corner went global.\n\nInvited back for the second engagement (Nkanga 2025). They trusted me twice. In cultural production, repeat engagement is the strongest signal of success.\n\nTwo laureates produced. Two successful multi-month runs. Zero critical incidents.",
      },
      {
        number: "06",
        label: "The Reflection",
        headline: "Formalize the feedback loop. Document the playbook.",
        body: "I would formalize the visitor experience feedback loop earlier - structured observation and brief surveys from week one could inform adjustments for the remaining run instead of relying on anecdotal feedback.\n\nI would also document the production playbook more rigorously so it's transferable beyond my involvement. The knowledge of how to produce these events shouldn't live only in my head.\n\nThe biggest takeaway: the skills that make someone good at product management - stakeholder alignment, scope discipline, timeline management, vendor coordination, user empathy - are exactly the skills that make cultural production work. The context changes. The discipline doesn't.",
      },
    ],
    outcomeMetrics: [
      { value: "5,000+", label: "Attendees" },
      { value: "2", label: "Laureates Produced" },
      { value: "6", label: "Months Runtime" },
      { value: "10+", label: "Vendors Managed" },
    ],
  },
  {
    slug: "tvghc",
    title: "TVGHC - Building a 1.8M-Property Data Platform from Zero",
    tags: ["Data Platform", "Go-to-Market", "Automation"],
    summary:
      "How I built an insulation platform covering 1.87 million DFW properties using free county data, discovered a critical pricing gap through ICP research, and shipped an autonomous content machine posting 6 times daily with zero human approval.",
    role: "Founder",
    company: "The Very Good Home Company",
    duration: "Nov 2025 – Present",
    keyMetric: "1.87M Properties",
    thumbnail: { type: "metric", value: "1.87M" },
    cardProblem:
      "Home insulation is a $13.5B commodity market. No one wakes up wanting insulation. How do you acquire customers?",
    cardDecision:
      "Built a property data platform using free county records ($0/mo vs $500+ APIs), ICP research that pivoted the entire go-to-market, and an autonomous content machine.",
    cardOutcome:
      "1.87M properties indexed. 5 ICPs ranked. Pricing gap caught before launch. 6 posts/day fully automated.",
    sections: [
      {
        number: "01",
        label: "The Problem",
        headline: "Nobody wakes up wanting insulation.",
        body: "Home insulation is a $13.5 billion commodity market in the US, growing at 6.62% CAGR. The Dallas-Fort Worth metroplex issued 71,788 residential building permits in 2024 - number one in the nation. Oncor allocates over $21 million annually for energy efficiency incentives.\n\nBut insulation isn't sexy. It's not urgent-feeling. Competitors sell on 'save money on energy bills' - a message that's true but not compelling enough to drive action. Most insulation companies compete on price with no technology advantage. That's a Red Ocean.\n\nThe question: how do you acquire customers for a product nobody is actively searching for?",
      },
      {
        number: "02",
        label: "The Constraints",
        headline:
          "Two people. No funding. An orchestration layer, not a crew.",
        body: "Two-person operation: me (product, strategy, technology) and Barry (operations partner, does attic inspections and films content). No VC funding - bootstrapped.\n\nWe don't install insulation ourselves. Modern Insulation (our contractor partner) handles installation. We're an orchestration layer - we find the customers, qualify them, estimate the job, and hand off to the crew. That means our value is in the system, not the labor.\n\nCritical constraint: our estimator was generating prices of $4,118-$8,662, but the DFW market expects $650-$1,547. A 2-3x pricing gap that needed to be resolved before any mass marketing.",
      },
      {
        number: "03",
        label: "The Insight",
        headline:
          "The competitive advantage isn't cheaper insulation. It's owning the data layer.",
        body: "County property records are free and public. Dallas County (DCAD), Tarrant County (TAD), Collin County, and Denton County all publish property data including year built, square footage, and number of stories.\n\nCommercial property data APIs charge $500+ per month for the same information. By indexing county CAD records directly, we get a proprietary database at $0/month that competitors using commercial APIs can't replicate at the same cost.\n\nThis pattern is replicable: Houston (Harris CAD), San Antonio (Bexar CAD), Austin (Travis CAD). The data moat grows with every new market.",
      },
      {
        number: "04",
        label: "The Decision",
        headline: "Three systems. Each one a strategic bet.",
        body: "Estimator platform: Address autocomplete feeds into property lookup across 1.87M county records (DCAD 631K, TAD 592K, Collin 356K, Denton 290K). A heuristic pricing engine generates estimates based on square footage, age, stories, and symptom urgency. SKU structure with 3 tiers: R-38 top-off, R-49 top-off, and full removal/replacement. Lead scoring engine rates prospects 0-100 based on home factors, symptom urgency, financial signals, and engagement.\n\nICP research that changed the go-to-market: Ranked 5 customer profiles by priority. Key discovery: HVAC Referral (ICP #1) is pre-sold and not price-shopping - should be the primary channel, not website traffic. Real estate agents (#2) need fast estimates for closings. 'Hot upstairs' homeowners (#3) are high-volume but most price-sensitive. This pivoted the entire strategy from website-first to Barry-texting-estimate-links-first.\n\nAutonomous content machine: Three n8n workflows running without human approval. W1 pulls videos from Google Drive, transcribes via AssemblyAI, generates platform-specific copy with Claude. W2 posts 6 times daily at researched optimal times. W3 runs weekly analytics and generates a performance report. Brand voice v5 with A/B hook testing, UTM conversion tracking, and seasonal content prioritization.",
      },
      {
        number: "05",
        label: "The Outcome",
        headline:
          "1.87M properties. Zero-dollar data cost. Fully autonomous pipeline.",
        body: "1.87M properties indexed across 4 DFW counties at $0/month data cost versus $500+ for commercial API alternatives.\n\n5 ICPs ranked by priority with go-to-market pivoted based on research - not assumption.\n\nPricing gap (2-3x above market) identified before launch, not after. This saved us from acquiring customers who would churn on sticker shock.\n\n189 content drafts generated from 63 source videos. 6 posts per day fully autonomous across Facebook, Instagram, and YouTube. Zero human approval gate.\n\nEstimator live at theverygoodhomecompany.com/get-estimate. Oncor rebate integration connected to the $21M+ annual incentive program.",
      },
      {
        number: "06",
        label: "The Reflection",
        headline: "Validate pricing before building the engine.",
        body: "If I did this again, I would validate pricing with 20+ real customer conversations before building the estimator engine. The 2-3x pricing gap could have been caught earlier with lean validation instead of building first. That's the classic builder trap - shipping before validating.\n\nI would also separate the estimator into its own deployable product. It has value beyond TVGHC as a white-label tool for other insulation companies in other markets. The county data pattern works anywhere.\n\nThe content machine is the piece I'm most proud of. It's a system that compounds - every video Barry films becomes 5 pieces of content across 3 platforms, posted at optimal times, with A/B testing and conversion tracking, without either of us touching it. That's what 'building systems, not doing tasks' looks like in practice.",
      },
    ],
    outcomeMetrics: [
      { value: "1.87M", label: "Properties Indexed" },
      { value: "$0/mo", label: "Data Cost" },
      { value: "5", label: "ICPs Ranked" },
      { value: "6/day", label: "Posts Automated" },
    ],
  },
];
