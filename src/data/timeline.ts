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
    subtitle: "Otobong Nkanga · Afro-Mingei · Featured in NYT",
    description:
      "Turned a world-class museum into a restaurant, DJ venue, and community gathering space. Produced fireside chats, performance events, and the prize ceremony with full artistic direction. 5,000+ attendees. New York Times coverage.",
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
    subtitle: "Digital Management · Brand Strategy",
    description:
      "Built the first story-driven social media strategy for a major DFW dealership. Managed the mid-engine Corvette launch. Interfaced with celebrities and VIPs. Planned the Saturday Fair — reimagining a dealership as a community experience.",
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
    role: "BA Marketing · Campus Builder",
    subtitle: "2 Orgs Founded · Student Government · 2 Jobs",
    description:
      "Founded The Football Team (arts org, still active) and Speakeasy (underground collective). President, Business Constituency Council. Cool Speed Fellowship. All while working two jobs — Starbucks and Campus Recreation.",
    stat: "2 ORGS FOUNDED · 2 JOBS · STUDENT BODY PRESIDENT",
  },
];
