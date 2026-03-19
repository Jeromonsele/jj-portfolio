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
      "Built a DFW insulation platform from zero. 1.8M property records, instant estimator, automated lead pipeline. Making a commodity market feel different through tech and brand.",
    link: "https://theverygoodhomecompany.com",
  },
  {
    title: "Founder",
    company: "The Very Good Consulting",
    date: "2024 — Present",
    description:
      "Operations consulting for home services. I use my 4 Gaps Framework to find the psychological, cultural, systems, and technical gaps that keep founders stuck.",
    link: "https://theverygoodguys.com",
  },
];
