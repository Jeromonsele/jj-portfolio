export interface MediaLink {
  label: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface TimelineEntry {
  organization: string;
  role: string;
  subtitle: string;
  description: string;
  stat?: string;
  link?: string;
  media?: MediaLink[];
  testimonial?: Testimonial;
}

export const timeline: TimelineEntry[] = [
  {
    organization: "ASG Managed Services",
    role: "Program Manager, Managed Services",
    subtitle: "Built PM infrastructure from scratch · AI Governance Author",
    description:
      "Ran a portfolio of 15-20 simultaneous SaaS and infrastructure programs across 5 departments. Partnered with VPs to unify operations under a single governance model. Authored ASG's first AI governance framework: six pillars, three-phase rollout, 80% adoption. Most comparable firms were still debating whether to let employees use ChatGPT. We were building the operating system for how the whole company would use AI.",
    stat: "15-20 PROGRAMS · AI GOVERNANCE · 80% ADOPTION",
    link: "https://www.asgllc.com/managed-services/",
    testimonial: {
      quote: "He brought structure and clarity to our initiatives, keeping us organized, focused, and always moving forward.",
      name: "Reham Ayoub",
      title: "Head of Talent Operations, ASG",
    },
  },
  {
    organization: "Nasher Sculpture Center",
    role: "Producer, Nasher Prize",
    subtitle: "Theaster Gates Afro-Mingei (2022-2023) · Otobong Nkanga (2025)",
    description:
      "Produced two Nasher Prize experiences. Theaster Gates' Afro-Mingei, a restaurant concept fusing Japanese and African American culture with DJ nights, curated vinyl, and fireside chats. Then Otobong Nkanga's 2025 Prize. 5,000+ attendees. Press coverage in the New York Times, Surface Magazine, ARTnews, and KERA News. What producing art taught me about operations: the skills are identical. The context is different. The discipline is the same.",
    stat: "5,000+ ATTENDEES · NYT COVERAGE",
    link: "https://www.nashersculpturecenter.org/programs-events/programs-list/program/id/307",
    media: [
      { label: "NYT — Otobong Nkanga Wins Nasher Prize", url: "https://www.lissongallery.com/news/otobong-nkanga-wins-the-nasher-prize-for-sculpture-the-new-york-times" },
      { label: "Surface Magazine — Afro-Mingei", url: "https://www.surfacemag.com/articles/theaster-gates-afro-mingei-nasher/" },
      { label: "KERA News — Afro-Mingei Launch", url: "https://www.keranews.org/arts-culture/2022-11-04/theaster-gates-launching-food-pop-up-at-the-nasher-influenced-by-japan-the-african-american-south" },
      { label: "KERA News — Public Reaction", url: "https://www.keranews.org/arts-culture/2022-11-21/deeply-personal-north-texans-react-to-theaster-gates-new-food-pop-up-at-the-nasher" },
      { label: "ARTnews — Nkanga Wins Prize", url: "https://www.artnews.com/art-news/news/otobong-nkanga-wins-nasher-prize-1234681207/" },
      { label: "Nasher — Afro-Mingei Program", url: "https://www.nashersculpturecenter.org/programs-events/programs-list/program/id/307" },
    ],
  },
  {
    organization: "Bank of America",
    role: "Infrastructure & Early Cloud Dev",
    subtitle: "Data Center Management · Contract",
    description:
      "Managed data center rollouts and infrastructure. My exposure to what 'enterprise scale' actually means. A bad deployment here doesn't break a dashboard. It affects millions of transactions.",
    link: "https://careers.bankofamerica.com/en-us/company/organization/technology",
  },
  {
    organization: "Randstad",
    role: "Analyst",
    subtitle: "CVS · GPMC · Root Cause Analysis",
    description:
      "Enterprise account management and root cause analysis. Looking at a broken process, tracing it back to the source, fixing the system rather than the symptom. Led directly to PMP and Six Sigma.",
    link: "https://www.randstadusa.com/",
    testimonial: {
      quote: "JJ takes unfamiliar assignments and meticulously solves each issue. He creates solutions that anticipate future issues, not just the ones in front of him.",
      name: "Ian Perkins-Smith",
      title: "Associate, Sendero",
    },
  },
  {
    organization: "Classic Chevrolet",
    role: "Social Media & Special Projects Liaison",
    subtitle: "The #1 Volume Chevrolet Dealer in the World",
    description:
      "Built the first story-driven social media strategy for the #1 volume Chevy dealer in the world. 65,000 sq ft, 22-time consecutive Dealer of the Year. Ran the C8 mid-engine Corvette reveal (4,500+ people showed up). Created the Saturday Fair. Turned a car lot into a place people actually wanted to be. This role taught me that brand isn't marketing. It's how an organization operates in public.",
    stat: "~1M IMPRESSION GROWTH",
    link: "https://www.classicchevrolet.com",
    media: [
      { label: "Classic Chevrolet — #1 in the World (PR Newswire)", url: "https://www.prnewswire.com/news-releases/classic-chevrolet-in-grapevine-crowned-worlds-1-chevy-dealership-in-2023-302036195.html" },
      { label: "CarPro — 22-Time Dealer of the Year", url: "https://www.carpro.com/blog/classic-chevrolet-named-1-volume-chevy-dealer-in-the-world-and-22-time-dealer-of-the-year" },
      { label: "C8 Corvette Reveal — Forum Photos", url: "https://www.midenginecorvetteforum.com/forum/mid-engine-corvettes/mid-engine-exterior-interior-pictures-and-renderings/85886-classic-chevrolet-grapevine-texas-event-pics" },
    ],
  },
  {
    organization: "Independent Consulting",
    role: "PM, Systems Design & SEO",
    subtitle: "Local Business Consulting · First Book",
    description:
      "Consulted for local businesses on PM, systems design, and SEO. Wrote my first book, a guide for non-linear thinkers. This is when I stopped thinking of myself as a corporate PM and started thinking of myself as someone who builds things.",
    link: "https://theverygoodguys.com",
  },
  {
    organization: "Airbus",
    role: "Communications Intern → PM Discovery",
    subtitle: "Navy Capture Project · COVID Era",
    description:
      "Pitched a campaign strategy to win a Navy defense contract at aerospace scale. I was an intern. The scope of what I was looking at, the multi-year timelines, the stakeholder complexity, the regulatory layers, fundamentally changed how I understood project management.",
    link: "https://airbusus.com/",
  },
  {
    organization: "Dallas Baptist University",
    role: "MS Organizational Change & PM",
    subtitle: "Master's Program",
    description:
      "Where the 4 Gaps Framework started as academic theory. My research focused on charismatic leadership dependency. Why organizations fall apart when a single key person leaves. That research became the diagnostic framework I use in consulting today.",
    link: "https://www.dbu.edu/graduate/degree-programs/ms-organization-change-project-management/",
  },
  {
    organization: "University of Texas at Arlington",
    role: "BA Marketing · Campus Builder · TEDx Speaker",
    subtitle: "TEDxUTA · 2 Orgs Founded · Euphoria · Student Government",
    description:
      "TEDx speaker, \"Revolution for Dummies\" (2018). Co-founded The Football Team: A Creative Collective (still active). Created The Speakeasy Open Mic and Euphoria, an interactive art show that built Arlington's creative scene. President, Business Constituency Council. Cool Speed Fellowship. All while working two jobs. \"I've been told before that you can't create culture, and I vehemently disagree.\"",
    stat: "TEDX SPEAKER · 2 ORGS FOUNDED · EUPHORIA CREATOR",
    link: "https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies",
    media: [
      { label: "TEDx — Revolution for Dummies", url: "https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies" },
      { label: "The Shorthorn — TEDxUTA Coverage", url: "https://www.theshorthorn.com/news/tedxuta-features-open-education-career-development-talks/article_0dc67950-3e12-11e8-a74c-fb51986cf6b4.html" },
      { label: "The Shorthorn — Six Creatives in Arlington Hip-Hop", url: "https://www.theshorthorn.com/life_and_entertainment/six-creatives-cultivating-the-arlington-hip-hop-scene/article_9695b708-4dc2-11e9-861c-b353b5fb010d.html" },
      { label: "The Football Team — MavEngage", url: "https://mavorgs.campuslabs.com/engage/organization/football-team-creative-collective" },
      { label: "Euphoria Show — Instagram", url: "https://www.instagram.com/euphoriashow.art/" },
    ],
  },
];
