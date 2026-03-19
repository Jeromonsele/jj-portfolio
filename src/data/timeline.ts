export interface TimelineEntry {
  organization: string;
  role: string;
  subtitle: string;
  description: string;
  stat?: string;
}

export const timeline: TimelineEntry[] = [
  {
    organization: "ASG Managed Services",
    role: "Project Manager → Program Manager",
    subtitle: "Built PM infrastructure from scratch · AI Policy Author",
    description:
      "Walked into chaos, built the project management system. Managed 20+ simultaneous projects. Elevated to program manager. Wrote the company's first AI framework and policy — predicted the overcorrection before the market caught up.",
    stat: "20+ PROJECTS · AI POLICY AUTHOR",
  },
  {
    organization: "Nasher Sculpture Center",
    role: "Producer, Nasher Prize",
    subtitle: "Theaster Gates Afro-Mingei (2022-2023) · Otobong Nkanga (2025)",
    description:
      "Produced two Nasher Prize experiences. Theaster Gates' Afro-Mingei — a restaurant concept fusing Japanese and African American culture, DJ nights with curated vinyl, fireside chats. Then Otobong Nkanga's 2025 Prize. 5,000+ attendees. Press: Surface Magazine, KERA News, ARTnews, NYT.",
    stat: "5,000+ ATTENDEES · NYT COVERAGE",
  },
  {
    organization: "Bank of America",
    role: "Infrastructure & Early Cloud Dev",
    subtitle: "Data Center Management · Contract",
    description:
      "Managed data center rollouts and infrastructure that became foundational to Bank of America's AI operations. Enterprise scale, enterprise stakes.",
  },
  {
    organization: "Ranstad",
    role: "Analyst",
    subtitle: "CVS · GPMC · Root Cause Analysis",
    description:
      "Managed enterprise accounts. Mastered Monday.com, learned root cause analysis methodology. The analytical sharpening — where instinct met formal methodology. Catalyst for PMP and Six Sigma.",
  },
  {
    organization: "Classic Chevrolet",
    role: "Social Media & Special Projects Liaison",
    subtitle: "The #1 Volume Chevrolet Dealer in the World",
    description:
      "Built the first story-driven social media strategy for a major DFW dealership. 65,000 sq ft dealership, 22-time consecutive Dealer of the Year. C8 mid-engine Corvette reveal drew 4,500+ attendees. Interfaced with celebrities and VIPs. Planned the Saturday Fair — reimagining a dealership as a community experience.",
    stat: "~1M IMPRESSION GROWTH",
  },
  {
    organization: "Independent Consulting",
    role: "PM, Systems Design & SEO",
    subtitle: "Local Business Consulting · First Book",
    description:
      "Project management, systems design, and SEO for local businesses. Wrote first book — a guide to PM and systems design for non-linear thinkers. The bridge between corporate PM and entrepreneurship.",
  },
  {
    organization: "Airbus",
    role: "Communications Intern → PM Discovery",
    subtitle: "Navy Capture Project · COVID Era",
    description:
      "Pitched campaign strategy to win a defense contract at aerospace scale. First exposure to large-scale project management. Realized legacy media was five years behind. Where I fell in love with project management.",
  },
  {
    organization: "Dallas Baptist University",
    role: "MS Organizational Change & PM",
    subtitle: "Master's Program",
    description:
      "Developed the theoretical foundation for the 4 Gaps Framework. Research on charismatic leadership dependency and why organizations need systems that work without a single person directing them.",
  },
  {
    organization: "University of Texas at Arlington",
    role: "BA Marketing · Campus Builder · TEDx Speaker",
    subtitle: "TEDxUTA · 2 Orgs Founded · Euphoria · Student Government",
    description:
      "TEDx speaker — \"Revolution for Dummies\" (2018). Co-founded The Football Team: A Creative Collective (still active). Created The Speakeasy Open Mic and Euphoria, an interactive art show cultivating Arlington's creative scene. President, Business Constituency Council. Cool Speed Fellowship. All while working two jobs. \"I've been told before that you can't create culture, and I vehemently disagree.\"",
    stat: "TEDX SPEAKER · 2 ORGS FOUNDED · EUPHORIA CREATOR",
  },
];
