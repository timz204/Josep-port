import type { Messages } from "./types";

export const en: Messages = {
  nav: {
    about: "About",
    skills: "Skills",
    impact: "Impact",
    projects: "Missions",
    experience: "Campaign",
    contact: "Contact",
  },
  common: {
    contact: "Contact",
    downloadResume: "Download resume",
    linkedin: "LinkedIn",
    scroll: "Enter",
    outcomes: "Outcomes",
    education: "Education",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    language: "Language",
    viewDetails: "View details",
    close: "Close",
    problem: "Objective",
    challenge: "Challenge",
    solution: "Solution",
    role: "Role",
    architecture: "Architecture",
    stack: "Tech stack",
  },
  site: {
    role: "Senior Full Stack Developer",
    headline: "Build systems that move fast and stay reliable.",
    subheadline:
      "I design and ship scalable web platforms with Python, TypeScript, React, and AWS.",
    positioning:
      "Senior Full Stack Developer with 8+ years of experience building scalable web applications using Python, JavaScript, TypeScript, React, and AWS. Skilled in Django, FastAPI, Node.js, React, REST APIs, PostgreSQL, Docker, and CI/CD across SaaS and enterprise projects.",
    location: "Xalapa, Veracruz, Mexico",
    remoteTag: "Mexico → the world · Remote ready",
  },
  highlights: [
    "8+ years shipping production systems",
    "Python · TypeScript · React · AWS",
    "API latency cut to 650ms",
    "Deploy times reduced 45 → 12 min",
  ],
  hero: {
    viewProjects: "View missions",
  },
  about: {
    eyebrow: "Player profile",
    title: "Senior engineer. Clear communicator. Reliable delivery.",
    lead: "I own complex features end-to-end and collaborate closely with product and engineering.",
    paragraphs: [
      "I'm Victor, a Senior Full Stack Developer based in Xalapa, Veracruz. I build scalable web applications with Python, JavaScript, TypeScript, React, and AWS — across SaaS and enterprise environments.",
      "My day-to-day spans Django, FastAPI, Node.js, React, REST APIs, PostgreSQL, Docker, and CI/CD. I modernize legacy services, tighten performance, and keep releases consistent.",
      "I solve hard problems with calm communication: translating business requirements into practical architecture, mentoring through reviews, and delivering systems teams can trust.",
    ],
    basedIn: "Based in {location}. Open to remote collaboration worldwide.",
    playerLevel: "LVL 08 · FULL STACK",
    focus: [
      {
        icon: "platforms",
        label: "Full-stack product engineering",
        detail: "React frontends and Python/Node backends that scale with real traffic.",
      },
      {
        icon: "api",
        label: "API & service architecture",
        detail: "REST APIs, microservices, and integrations that stay maintainable.",
      },
      {
        icon: "speed",
        label: "Performance & reliability",
        detail: "Latency cuts, error reduction, caching, and production stability.",
      },
      {
        icon: "cloud",
        label: "Cloud & delivery",
        detail: "AWS, Docker, ECS, and CI/CD pipelines that ship with confidence.",
      },
    ],
  },
  skills: {
    eyebrow: "Loadout",
    title: "The stack I play with every day",
    description:
      "Languages, frameworks, cloud, and testing tools from production campaigns.",
    categories: {
      languages: {
        title: "Languages",
        description: "",
      },
      frontend: {
        title: "Frontend",
        description: "",
      },
      backend: {
        title: "Backend",
        description: "",
      },
      databases: {
        title: "Databases",
        description: "",
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "",
      },
      testing: {
        title: "Testing & delivery",
        description: "",
      },
    },
  },
  impact: {
    eyebrow: "Achievements",
    title: "Measurable wins from the field",
    description: "Latency, reliability, and delivery speed improvements across campaigns.",
    stats: [
      { value: "8+", label: "Years of experience" },
      { value: "650ms", label: "API response time (from 1.8s)" },
      { value: "4%", label: "Production errors (from 14%)" },
      { value: "12 min", label: "Deploy time (from 45 min)" },
    ],
  },
  projects: {
    eyebrow: "Missions",
    title: "Selected campaigns & outcomes",
    description:
      "High-impact work across SaaS, enterprise, and product engineering teams.",
    missionLabel: "MISSION",
    items: {
      "mission-latency": {
        name: "Latency & platform stability",
        summary:
          "Cut average API response time from 1.8s to 650ms while strengthening platform stability.",
        role: "Senior Full-Stack Developer",
        period: "2024 – 2026",
        problem: "Slow APIs and fragile services were limiting daily platform use.",
        challenge: "Scale Python/React/AWS systems without sacrificing reliability.",
        solution:
          "Architected Lambda-backed flows, Redis-accelerated dashboards, and secure FastAPI services.",
        architecture: [
          "Python + React application layer",
          "AWS Lambda & ECS deployments",
          "Redis caching for dashboards",
          "FastAPI + SQLAlchemy services",
        ],
        impact: [
          "API latency 1.8s → 650ms",
          "Dashboard load 4.2s → 1.7s",
          "Reusable React interfaces for consistency",
        ],
      },
      "mission-legacy": {
        name: "Legacy modernization",
        summary:
          "Modernized Django/PostgreSQL services on AWS RDS and cut production errors from 14% to 4%.",
        role: "Senior Full-Stack Developer",
        period: "2024 – 2026",
        problem: "Legacy services were error-prone under rising transaction volume.",
        challenge: "Refactor critical paths while supporting higher throughput.",
        solution:
          "Rebuilt data access and service boundaries with Django, PostgreSQL, and AWS RDS.",
        architecture: [
          "Django service modernization",
          "PostgreSQL on AWS RDS",
          "Hardened REST boundaries",
        ],
        impact: [
          "Production errors 14% → 4%",
          "Higher transaction volume supported",
          "Clearer integration with external systems",
        ],
      },
      "mission-deploy": {
        name: "Deployment acceleration",
        summary:
          "Automated Docker + GitHub Actions + AWS ECS pipelines, cutting deploy time from 45 to 12 minutes.",
        role: "Software Engineer",
        period: "2022 – 2023",
        problem: "Manual releases slowed iteration and introduced inconsistency.",
        challenge: "Standardize cloud delivery across environments.",
        solution:
          "Automated containerized deployments with GitHub Actions and AWS ECS.",
        architecture: [
          "Dockerized services",
          "GitHub Actions CI/CD",
          "AWS ECS release path",
        ],
        impact: [
          "Deploy time 45 → 12 minutes",
          "Frontend defects 18% → 6%",
          "Faster TypeScript/React iteration",
        ],
      },
      "mission-platform": {
        name: "Full-stack delivery engine",
        summary:
          "Reusable architecture cut average feature delivery from 15 to 9 days at NIC.",
        role: "Software Engineer",
        period: "2021 – 2022",
        problem: "Feature throughput lagged behind product needs.",
        challenge: "Improve backend latency and frontend reliability together.",
        solution:
          "Shipped Python/React platforms with Django REST, FastAPI integrations, and Redux Toolkit UI.",
        architecture: [
          "Python + React full-stack platforms",
          "Django REST + PostgreSQL",
          "FastAPI third-party integrations",
        ],
        impact: [
          "Feature delivery 15 → 9 days",
          "Query latency 2.4s → 800ms",
          "Frontend errors 12% → 4%",
        ],
      },
      "mission-quality": {
        name: "Frontend quality uplift",
        summary:
          "Raised test coverage from 55% to 78% and cut unresolved tickets from 20 to 9.",
        role: "Web Developer",
        period: "2018 – 2020",
        problem: "UI defects and weak coverage slowed releases.",
        challenge: "Strengthen testing culture while shipping React features.",
        solution:
          "Expanded Jest/RTL coverage, debugged UI issues, and tightened Git workflows.",
        architecture: [
          "React feature modules",
          "Jest + React Testing Library",
          "GitHub pull-request workflows",
        ],
        impact: [
          "Frontend defects 15% → 8%",
          "Test coverage 55% → 78%",
          "Unresolved tickets 20 → 9",
        ],
      },
      "mission-spring": {
        name: "Java service backbone",
        summary:
          "Built Spring Boot REST services and Node/Express integrations for reliable data flow.",
        role: "Software Engineer",
        period: "2022 – 2023",
        problem: "Backend services needed stronger reliability and cleaner integrations.",
        challenge: "Connect Java services with frontend and Node middleware cleanly.",
        solution:
          "Delivered Spring Boot/MVC APIs with JPA/Hibernate and Express integrations.",
        architecture: [
          "Java + Spring Boot APIs",
          "Spring Data JPA / Hibernate",
          "Node.js + Express integrations",
        ],
        impact: [
          "Improved application reliability",
          "Cleaner frontend/service integrations",
          "Simplified database operations",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Campaign log",
    title: "Career timeline",
    description:
      "Eight years across remote SaaS teams and on-site Mexican engineering orgs.",
    jobs: [
      {
        title: "Senior Full-Stack Developer",
        place: "Chicago, US · Remote",
        points: [
          "Architected scalable applications with Python, React, and AWS Lambda, cutting average API response time from 1.8s to 650ms.",
          "Modernized legacy services using Django, PostgreSQL, and AWS RDS, reducing production errors from 14% to 4%.",
          "Optimized customer dashboards with React, FastAPI, and Redis, reducing page load time from 4.2s to 1.7s.",
          "Automated cloud deployments with AWS ECS and Docker, improving release consistency across environments.",
          "Mentored developers through code reviews while promoting clean development practices.",
        ],
      },
      {
        title: "Software Engineer",
        place: "California, US · Remote",
        points: [
          "Built web applications with JavaScript, TypeScript, and React, reducing frontend defects from 18% to 6%.",
          "Automated deployments with Docker, GitHub Actions, and AWS ECS, cutting deployment time from 45 to 12 minutes.",
          "Developed backend services with Java, Spring Boot, and Spring MVC, improving application reliability.",
          "Integrated services with Node.js and Express.js, improving data flow across applications.",
        ],
      },
      {
        title: "Software Engineer",
        place: "Yucatán, Mexico · On-site",
        points: [
          "Delivered full-stack platforms with Python, JavaScript, and React, reducing feature delivery from 15 to 9 days.",
          "Improved backend performance with Django REST Framework and PostgreSQL, cutting complex query latency from 2.4s to 800ms.",
          "Redesigned responsive interfaces with React and Redux Toolkit, lowering frontend errors from 12% to 4%.",
          "Strengthened testing with Pytest and Jest to catch regressions earlier.",
        ],
      },
      {
        title: "Web Developer",
        place: "Veracruz, Mexico · On-site",
        points: [
          "Assisted in developing web features with JavaScript, React, and Jest, helping reduce frontend defects from 15% to 8%.",
          "Increased test coverage from 55% to 78% with Jest and React Testing Library.",
          "Debugged UI issues with Chrome DevTools and Git, reducing unresolved tickets from 20 to 9.",
          "Maintained source code with Git and GitHub, supporting pull requests and organized version control.",
        ],
      },
    ],
    educationDegree: "Bachelor's Degree in Software Engineering",
    educationSchool: "Universidad Modelo",
  },
  contact: {
    eyebrow: "Comms channel",
    title: "Ready for the next mission",
    description:
      "Pick the channel that fits — or leave a short note and I'll reply by email. Based in {location}, open to remote worldwide.",
    channels: {
      email: {
        label: "Email",
        hint: "Best for detailed project briefs",
      },
      phone: {
        label: "WhatsApp",
        hint: "Start a conversation",
      },
      linkedin: {
        label: "LinkedIn",
        hint: "Connect or send a message",
      },
      resume: {
        label: "Resume",
        value: "Download PDF",
        hint: "Full experience & skills",
      },
    },
    formTitle: "Send a quick message",
    formHint: "Opens your email app with everything filled in — no account needed.",
    nameLabel: "Your name",
    namePlaceholder: "Alex Rivera",
    emailLabel: "Your email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder:
      "What are you building? Timeline, stack, or role — whatever helps.",
    formAside: "Prefer a direct message? Use email, WhatsApp, or LinkedIn.",
    submit: "Open in email",
    subjectFallback: "Hello Victor",
    subjectFrom: "Hello from {name}",
    noMessage: "(No message yet)",
  },
  footer: {
    crafted: "Designed & engineered by",
  },
  loader: {
    boot: "System boot sequence",
    lines: [
      "Initializing mission grid…",
      "Syncing skill loadout…",
      "Calibrating 3D field…",
      "Ready to explore.",
    ],
    tagline: "Python · React · AWS",
  },
};
