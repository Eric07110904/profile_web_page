import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pin-Feng Qiu (Callum) — Embedded Software Engineer",
  author: "Pin-Feng Qiu (Callum)",
  description:
    "Embedded software engineer currently working at Moxa, with previous graduate research experience in AI image generation.",
  lang: "en",
  siteLogo: "/about-photo.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Achievements", href: "#achievements" },
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
    specialty: "Embedded Software Engineer",
    summary:
      "I am currently working as an embedded software engineer at Moxa. During my master's studies, I focused on AI image generation research, which reflects a separate academic track from my current embedded software work.",
    email: "azsx26735546@gmail.com",
  },
  education: [
    {
      company: "National Taiwan University of Science and Technology",
      logo: "/logo-ntust-official.png",
      position: "M.S. in Engineering and Computer Science, GAME Lab",
      startDate: "Sep 2021",
      endDate: "Aug 2023",
      highlights: ["GPA 4.23/4.30"],
      summary: [
        "Focused on deep learning research in image generation, GANs, and Generative Adversarial Networks.",
        "Completed multiple collaborative projects with industry partners and gained hands-on experience leading cross-functional development as a project manager.",
        "Worked in Professor Wen-Kai Tai's GAME Lab while building a strong research foundation in AI and applied software development.",
      ],
    },
    {
      company: "National Yunlin University of Science and Technology",
      logo: "/logo-nyust-official.png",
      position: "B.S. in Engineering and Computer Science",
      startDate: "Sep 2017",
      endDate: "Jun 2021",
      highlights: ["GPA 3.94/4.00"],
      summary: [
        "Built a strong foundation in software engineering, algorithms, and system development.",
      ],
    },
  ],
  experience: [
    {
      company: "Moxa",
      logo: "/logo-moxa-official.svg",
      position: "Embedded Software Engineer",
      startDate: "Jun 2024",
      endDate: "Present",
      details: [
        {
          label: "Focus Areas",
          value:
            "Protocol module development for industrial communication products, with a focus on reusable components delivered by a shared function team.",
        },
        {
          label: "Languages",
          value: "C/C++, Python, Shell Script",
        },
        {
          label: "Technologies & Tools",
          value:
            "Linux, protocol gateway development, Git, Docker, CI/CD, and embedded software development",
        },
      ],
      summary:
        "Working in Moxa's Protocol Team, a shared function team responsible for developing protocol modules such as MQTT, IEC 60870-5, and DNP3. These modules are integrated into protocol gateway products such as MGate.",
    },
  ],
  achievements: [
    "Gold Award, The 2020 ICPC Taiwan National Contest for Technology Universities",
    "Honorable Mention, The 2nd Intelligent IoT Project Competition",
  ],
  projects: [
    {
      name: "Anime Portrait Editing Tool",
      summary:
        "Built an anime portrait editing tool using **GAN** and **GAN inversion**, with segmentation-based editing, a custom anime dataset, and a **FastAPI** plus **Vue.js** stack.",
      image: "/project-anime-pdf.png",
    },
    {
      name: "HRM Classification with Deep Learning",
      summary:
        "Built a **two-stage deep learning pipeline** for swallow classification, combining **ROI detection**, **CNN-based prediction**, and a hospital labeling tool built with **Vue.js**, **FastAPI**, and **PostgreSQL**.",
      image: "/project-hrm-pdf.png",
    },
    {
      name: "IoT Plants Box",
      summary:
        "Built an **IoT plant-care system** powered by a **LINE Bot**, with sensor-based watering logic, remote controls, and environmental data visualization.",
      image: "/project-iot-pdf.png",
    },
    {
      name: "Elderly Care and Localization System",
      summary:
        "Developed an elderly tracking system using **GPS** and **Wi-Fi positioning**, with electronic fences, **RabbitMQ**, **Flask APIs**, **Vue.js**, and **Docker-based microservices**.",
      image: "/project-elderly-pdf.png",
    },
  ],
  about: {
    description: `
      I am currently working as an embedded software engineer at Moxa, focusing on practical software and system development in an embedded environment.

      Separately, during my master's studies, I conducted research in AI image generation and worked on projects related to GANs, medical AI, and image-based applications. I treat that research background as a distinct academic experience from my current professional path in embedded software.
    `,
    image: "/about-photo.jpg",
  },
};
