export const site = {
  name: "Victor Manuel Jimenez Rodriguez",
  displayName: "Victor Rodriguez",
  shortName: "Victor",
  monogram: "VR",
  email: "work@victormr.com",
  phone: "+525660050911",
  phoneDisplay: "+52 566 005 0911",
  whatsapp: "https://wa.me/525660050911",
  linkedin: "https://www.linkedin.com/in/victor-rodriguez-8ba972280/",
  github: "https://github.com/ErwinPlanck",
  resumeUrl: "/Victor_Resume.pdf",
  resumePageUrl: "/resume",
} as const;

export const navHrefs = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#impact", key: "impact" },
  { href: "#projects", key: "projects" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

export const skillCategories = [
  {
    id: "languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "frontend",
    items: [
      "React",
      "Redux Toolkit",
      "React Query",
      "React Hooks",
      "Context API",
      "Next.js",
    ],
  },
  {
    id: "backend",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "NestJS",
      "REST APIs",
    ],
  },
  {
    id: "databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Spring Data JPA",
      "Hibernate",
    ],
  },
  {
    id: "cloud",
    items: [
      "AWS",
      "AWS Lambda",
      "AWS ECS",
      "AWS RDS",
      "AWS S3",
      "CloudWatch",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "testing",
    items: [
      "Pytest",
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "API Testing",
      "CI/CD",
      "GitHub Actions",
      "Git",
    ],
  },
] as const;

/** Career missions — achievement-focused work stories */
export const projectsMeta = [
  {
    id: "mission-latency",
    company: "Anchorstacktech",
    url: site.linkedin,
    image: "/images/img1.png",
    technologies: ["Python", "React", "AWS Lambda", "FastAPI", "Redis"],
    level: "01",
  },
  {
    id: "mission-legacy",
    company: "Anchorstacktech",
    url: site.linkedin,
    image: "/images/img2.png",
    technologies: ["Django", "PostgreSQL", "AWS RDS"],
    level: "02",
  },
  {
    id: "mission-deploy",
    company: "Exomindset",
    url: site.linkedin,
    image: "/images/img3.png",
    technologies: ["Docker", "GitHub Actions", "AWS ECS", "TypeScript"],
    level: "03",
  },
  {
    id: "mission-platform",
    company: "NIC",
    url: site.linkedin,
    image: "/images/img4.png",
    technologies: ["Python", "Django", "React", "FastAPI", "PostgreSQL"],
    level: "04",
  },
  {
    id: "mission-quality",
    company: "OBT IT Services",
    url: site.linkedin,
    image: "/images/img5.png",
    technologies: ["JavaScript", "React", "Jest", "Git"],
    level: "05",
  },
  {
    id: "mission-spring",
    company: "Exomindset",
    url: site.linkedin,
    image: "/images/img6.png",
    technologies: ["Java", "Spring Boot", "Node.js", "Express.js"],
    level: "06",
  },
] as const;

export const experienceMeta = [
  {
    company: "Anchorstacktech",
    period: "Jan 2024 – Jun 2026",
    highlights: ["Python", "React", "AWS", "FastAPI", "Docker"],
  },
  {
    company: "Exomindset",
    period: "Feb 2022 – Dec 2023",
    highlights: ["TypeScript", "React", "Spring Boot", "AWS ECS"],
  },
  {
    company: "NIC",
    period: "Aug 2021 – Jan 2022",
    highlights: ["Django", "React", "FastAPI", "PostgreSQL"],
  },
  {
    company: "OBT IT Services",
    period: "Jul 2018 – Oct 2020",
    highlights: ["JavaScript", "React", "Jest", "Git"],
  },
] as const;

export const educationPeriod = "Aug 2017 – Jul 2021" as const;
