export interface NowRole {
  title: string;
  company: string;
  date: string;
  description: string;
  link?: string;
}

export const nowRoles: NowRole[] = [
  {
    title: "Founder, Operations",
    company: "The Very Good Home Company",
    date: "2024 — Present",
    description:
      "Insulation platform for DFW homeowners. 1.8M property records across 4 counties, instant estimator, automated lead pipeline, rebate calculator, energy loss calculator. I built the tech, the brand, and the customer experience. Still early. Still proving the model.",
    link: "https://theverygoodhomecompany.com",
  },
  {
    title: "Founder",
    company: "The Very Good Consulting",
    date: "2024 — Present",
    description:
      "Operations consulting for home services founders. Built on the 4 Gaps Framework, a diagnostic I developed during my master's research and tested on real businesses. It finds the psychological, cultural, systems, and technical gaps that keep a founder stuck as the bottleneck in their own company.",
    link: "https://theverygoodguys.com",
  },
];
