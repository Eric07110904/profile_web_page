import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pin-Feng Qiu (Callum) — Software & Backend Engineer",
  author: "Pin-Feng Qiu (Callum)",
  description:
    "Software and backend engineer with a research background in deep learning, GANs, image generation, and production-focused application development.",
  lang: "en",
  siteLogo: "/about-photo.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:azsx26735546@gmail.com" },
  ],
  socialImage: "/og-cover.svg",
  canonicalURL: "https://your-site.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pin-Feng Qiu (Callum)",
    specialty: "Software & Backend Engineer",
    summary:
      "I build backend systems and AI-driven applications with a strong foundation in deep learning, image generation, and production software development. My work spans research, industry collaboration, and practical system delivery.",
    email: "azsx26735546@gmail.com",
  },
  education: [
    {
      company: "National Taiwan University of Science and Technology",
      logo: "/logo-ntust-official.png",
      position: "M.S. in Engineering and Computer Science, GAME Lab",
      startDate: "Sep 2021",
      endDate: "Aug 2023",
      summary: [
        "Focused on deep learning research in image generation, GANs, and Generative Adversarial Networks.",
        "Completed multiple collaborative projects with industry partners and gained hands-on experience leading cross-functional development as a project manager.",
        "Graduated with a 4.23/4.30 GPA while working in Professor Wen-Kai Tai's GAME Lab.",
      ],
    },
    {
      company: "National Yunlin University of Science and Technology",
      logo: "/logo-nyust-official.png",
      position: "B.S. in Engineering and Computer Science",
      startDate: "Sep 2017",
      endDate: "Jun 2021",
      summary: [
        "Built a strong foundation in software engineering, algorithms, and system development.",
        "Graduated with a 3.94/4.00 GPA and received the ICPC Taiwan National Contest for Technology Universities Gold Award.",
      ],
    },
  ],
  experience: [
    {
      company: "Moxa",
      logo: "/logo-moxa-official.svg",
      position: "Software Engineer",
      startDate: "Jun 2024",
      endDate: "Present",
      summary: "",
    },
  ],
  projects: [
    {
      name: "Anime Portrait Editing Tool",
      summary:
        "Built an anime portrait creation and editing system with GAN inversion, segmentation-map control, a custom anime dataset, and an improved anime-specific loss function.",
      image: "/project-placeholder.svg",
    },
    {
      name: "HRM Classification with Deep Learning",
      summary:
        "Developed a two-stage medical AI pipeline for swallow classification, including ROI detection, CNN-based prediction, and a hospital-facing labeling system built with Vue.js, FastAPI, and PostgreSQL.",
      image: "/project-placeholder.svg",
    },
    {
      name: "Elderly Care and Localization System",
      summary:
        "Created a GPS and Wi-Fi tracking platform with electronic fence monitoring, RabbitMQ-based messaging, Dockerized microservices, and a Vue.js plus Flask application stack.",
      image: "/project-placeholder.svg",
    },
  ],
  about: {
    description: `
      I am a software and backend engineer with a graduate research background in deep learning, image generation, and GAN-based systems. I enjoy turning research ideas into usable software, especially when the work involves strong engineering discipline, practical backend architecture, and collaboration with real users or industry partners.

      Across my academic and project experience, I have worked on medical AI, image editing tools, IoT systems, and location-aware applications. I care about building systems that are not only technically sound, but also useful, maintainable, and well integrated into real workflows.
    `,
    image: "/about-photo.jpg",
  },
};
