export interface TimelineEntry {
  organization: string;
  role: string;
  subtitle: string;
  description: string;
  stat?: string;
  link?: string;
}

export const timeline: TimelineEntry[] = [
  {
    organization: "ASG Managed Services",
    role: "Project Manager → Program Manager",
    subtitle: "Built PM infrastructure from scratch · AI Policy Author",
    description:
      "Walked into chaos, built the project management system. Managed 20+ simultaneous projects. Got promoted to program manager. Wrote the company's first AI framework and policy. Predicted the overcorrection before the market caught up.",
    stat: "20+ PROJECTS · AI POLICY AUTHOR",
  },
  {
    organization: "Nasher Sculpture Center",
    role: "Producer, Nasher Prize",
    subtitle: "Theaster Gates Afro-Mingei (2022-2023) · Otobong Nkanga (2025)",
    description:
      "Produced two Nasher Prize experiences. Theaster Gates' Afro-Mingei, a restaurant concept fusing Japanese and African American culture, DJ nights with curated vinyl, fireside chats. Then Otobong Nkanga's 2025 Prize. 5,000+ attendees. Press: Surface Magazine, KERA News, ARTnews, NYT.",
    stat: "5,000+ ATTENDEES · NYT COVERAGE",
    link: "https://www.nashersculpturecenter.org/programs-events/programs-list/program/id/307",
  },
  {
    organization: "Bank of America",
    role: "Infrastructure & Early Cloud Dev",
    subtitle: "Data Center Management · Contract",
    description:
      "Managed data center rollouts and infrastructure that later became part of Bank of America's AI operations. Big scale, real stakes.",
  },
  {
    organization: "Ranstad",
    role: "Analyst",
    subtitle: "CVS · GPMC · Root Cause Analysis",
    description:
      "Managed enterprise accounts. Got good at Monday.com, learned root cause analysis. This is where I got sharp analytically. Led me to PMP and Six Sigma.",
  },
  {
    organization: "Classic Chevrolet",
    role: "Social Media & Special Projects Liaison",
    subtitle: "The #1 Volume Chevrolet Dealer in the World",
    description:
      "Built the first story-driven social media strategy for a major DFW dealership. 65,000 sq ft, 22-time consecutive Dealer of the Year. The C8 mid-engine Corvette reveal drew 4,500+ attendees. Worked with celebrities and VIPs. Created the Saturday Fair, turning a dealership into a community space.",
    stat: "~1M IMPRESSION GROWTH",
    link: "https://www.classicchevrolet.com",
  },
  {
    organization: "Independent Consulting",
    role: "PM, Systems Design & SEO",
    subtitle: "Local Business Consulting · First Book",
    description:
      "PM, systems design, and SEO for local businesses. Wrote my first book, a guide to PM and systems design for non-linear thinkers. This is when I went from corporate PM to entrepreneur.",
  },
  {
    organization: "Airbus",
    role: "Communications Intern → PM Discovery",
    subtitle: "Navy Capture Project · COVID Era",
    description:
      "Pitched a campaign strategy to win a defense contract at aerospace scale. First time seeing large-scale project management up close. Realized legacy media was five years behind. Fell in love with PM here.",
  },
  {
    organization: "Dallas Baptist University",
    role: "MS Organizational Change & PM",
    subtitle: "Master's Program",
    description:
      "Where the 4 Gaps Framework started as theory. Researched charismatic leadership dependency and why organizations need systems that work without one person running everything.",
  },
  {
    organization: "University of Texas at Arlington",
    role: "BA Marketing · Campus Builder · TEDx Speaker",
    subtitle: "TEDxUTA · 2 Orgs Founded · Euphoria · Student Government",
    description:
      "TEDx speaker, \"Revolution for Dummies\" (2018). Co-founded The Football Team: A Creative Collective (still active). Created The Speakeasy Open Mic and Euphoria, an interactive art show that built Arlington's creative scene. President, Business Constituency Council. Cool Speed Fellowship. All while working two jobs. \"I've been told before that you can't create culture, and I vehemently disagree.\"",
    stat: "TEDX SPEAKER · 2 ORGS FOUNDED · EUPHORIA CREATOR",
    link: "https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies",
  },
];
