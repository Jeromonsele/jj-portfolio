export interface NowRole {
  title: string;
  company: string;
  date: string;
  description: string;
  link?: string;
}

export const nowRoles: NowRole[] = [
  {
    title: "Founder & CEO",
    company: "The Very Good Home Company",
    date: "2024 — Present",
    description:
      "Built a DFW insulation platform from zero — 1.8M property records, instant estimator, automated lead pipeline. Reframing a commodity market through technology and brand.",
    link: "https://theverygoodhomecompany.com",
  },
  {
    title: "Founder",
    company: "The Very Good Consulting",
    date: "2024 — Present",
    description:
      "Operations consulting for home services using the proprietary 4 Gaps Framework. Closing the psychological, cultural, systems, and technical gaps that trap founders.",
    link: "https://theverygoodguys.com",
  },
];
