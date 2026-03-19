export interface MediaLink {
  label: string;
  url: string;
}

export interface TimelineEntry {
  organization: string;
  role: string;
  subtitle: string;
  description: string;
  stat?: string;
  link?: string;
  media?: MediaLink[];
}

export const timeline: TimelineEntry[] = [
  {
    organization: "ASG Managed Services",
    role: "Project Manager → Program Manager",
    subtitle: "Built PM infrastructure from scratch · AI Policy Author",
    description:
      "Walked into chaos, built the project management system. Managed 20+ simultaneous projects. Got promoted to program manager. Wrote the company's first AI framework and policy. Predicted the overcorrection before the market caught up.",
    stat: "20+ PROJECTS · AI POLICY AUTHOR",
    link: "https://asgitconsulting.com/",
  },
  {
    organization: "Nasher Sculpture Center",
    role: "Producer, Nasher Prize",
    subtitle: "Theaster Gates Afro-Mingei (2022-2023) · Otobong Nkanga (2025)",
    description:
      "Produced two Nasher Prize experiences. Theaster Gates' Afro-Mingei, a restaurant concept fusing Japanese and African American culture, DJ nights with curated vinyl, fireside chats. Then Otobong Nkanga's 2025 Prize. 5,000+ attendees. Press: Surface Magazine, KERA News, ARTnews, NYT.",
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
      "Managed data center rollouts and infrastructure that later became part of Bank of America's AI operations. Big scale, real stakes.",
    link: "https://careers.bankofamerica.com/en-us/company/organization/technology",
  },
  {
    organization: "Ranstad",
    role: "Analyst",
    subtitle: "CVS · GPMC · Root Cause Analysis",
    description:
      "Managed enterprise accounts. Got good at Monday.com, learned root cause analysis. This is where I got sharp analytically. Led me to PMP and Six Sigma.",
    link: "https://www.randstadusa.com/",
  },
  {
    organization: "Classic Chevrolet",
    role: "Social Media & Special Projects Liaison",
    subtitle: "The #1 Volume Chevrolet Dealer in the World",
    description:
      "Built the first story-driven social media strategy for a 65,000 sq ft dealership, 22-time consecutive Dealer of the Year. Ran the C8 mid-engine Corvette reveal (4,500+ attendees). Worked with celebrities. Created the Saturday Fair. Turned a car lot into a place people actually wanted to be.",
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
      "PM, systems design, and SEO for local businesses. Wrote my first book, a guide to PM and systems design for non-linear thinkers. This is when I went from corporate PM to entrepreneur.",
    link: "https://theverygoodguys.com",
  },
  {
    organization: "Airbus",
    role: "Communications Intern → PM Discovery",
    subtitle: "Navy Capture Project · COVID Era",
    description:
      "Pitched a campaign strategy to win a defense contract at aerospace scale. First time seeing large-scale project management up close. Realized legacy media was five years behind. Fell in love with PM here.",
    link: "https://airbusus.com/",
  },
  {
    organization: "Dallas Baptist University",
    role: "MS Organizational Change & PM",
    subtitle: "Master's Program",
    description:
      "Where the 4 Gaps Framework started as theory. Researched charismatic leadership dependency and why organizations need systems that work without one person running everything.",
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
