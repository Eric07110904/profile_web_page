import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Your Name — Personal Website",
  author: "Your Name",
  description:
    "A short one-line intro about who you are, what you build, and the kind of work you are looking for.",
  lang: "zh-TW",
  siteLogo: "/profile-placeholder.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/your-account" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
    { text: "Email", href: "mailto:you@example.com" },
  ],
  socialImage: "/og-cover.svg",
  canonicalURL: "https://your-site.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Your Name",
    specialty: "Frontend Developer / Product Engineer",
    summary:
      "Write 2 to 3 sentences here that introduce your background, your focus, and the type of products or teams you enjoy working with.",
    email: "you@example.com",
  },
  experience: [
    {
      company: "Your Current Company",
      position: "Your Role",
      startDate: "2023",
      endDate: "Present",
      summary: [
        "Describe the scope of your work and the kind of product, system, or users you supported.",
        "Add one or two concrete outcomes here, such as performance gains, shipped features, team ownership, or business impact.",
      ],
    },
    {
      company: "Previous Company",
      position: "Previous Role",
      startDate: "2021",
      endDate: "2023",
      summary: [
        "Summarize the main responsibilities of this role in one or two lines.",
        "Use numbers when possible to make the impact easier to understand.",
      ],
    },
    {
      company: "Earlier Experience",
      position: "Another Role",
      startDate: "2019",
      endDate: "2021",
      summary: "Add a shorter one-paragraph description here if you do not need multiple bullet points.",
    },
  ],
  projects: [
    {
      name: "Project One",
      summary: "What it is, who it helps, and what your contribution was.",
      linkPreview: "https://your-project-demo.com",
      linkSource: "https://github.com/your-account/project-one",
      image: "/project-placeholder.svg",
    },
    {
      name: "Project Two",
      summary: "A second project entry with a short and clear explanation.",
      linkPreview: "https://your-second-demo.com",
      linkSource: "https://github.com/your-account/project-two",
      image: "/project-placeholder.svg",
    },
    {
      name: "Project Three",
      summary: "A third project entry to showcase something visual, technical, or product-focused.",
      linkPreview: "https://your-third-demo.com",
      linkSource: "https://github.com/your-account/project-three",
      image: "/project-placeholder.svg",
    },
  ],
  about: {
    description: `
      Use this section for a more personal introduction. You can talk about your technical strengths, product thinking, industries you have worked in, or how you like to collaborate with teams.

      If you are job hunting, this is also a good place to mention what kind of role you are looking for, your location or timezone, and whether you are open to remote work.
    `,
    image: "/profile-placeholder.svg",
  },
};
