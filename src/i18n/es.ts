import type { Messages } from "./types";

export const es: Messages = {
  nav: {
    about: "Perfil",
    skills: "Habilidades",
    impact: "Impacto",
    projects: "Misiones",
    experience: "Campaña",
    contact: "Contacto",
  },
  common: {
    contact: "Contacto",
    downloadResume: "Descargar CV",
    linkedin: "LinkedIn",
    scroll: "Entrar",
    outcomes: "Resultados",
    education: "Educación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
    language: "Idioma",
    viewDetails: "Ver detalles",
    close: "Cerrar",
    problem: "Objetivo",
    challenge: "Reto",
    solution: "Solución",
    role: "Rol",
    architecture: "Arquitectura",
    stack: "Stack técnico",
  },
  site: {
    role: "Desarrollador Full Stack Senior",
    headline: "Construyo sistemas rápidos, estables y listos para crecer.",
    subheadline:
      "Diseño y entrego plataformas web escalables con Python, TypeScript, React y AWS.",
    positioning:
      "Desarrollador Full Stack Senior con más de 8 años de experiencia construyendo aplicaciones web escalables con Python, JavaScript, TypeScript, React y AWS. Dominio de Django, FastAPI, Node.js, React, APIs REST, PostgreSQL, Docker y CI/CD en proyectos SaaS y empresariales.",
    location: "Xalapa, Veracruz, México",
    remoteTag: "México → el mundo · Disponible remoto",
  },
  highlights: [
    "Más de 8 años en producción",
    "Python · TypeScript · React · AWS",
    "Latencia de API a 650ms",
    "Deploys de 45 → 12 min",
  ],
  hero: {
    viewProjects: "Ver misiones",
  },
  about: {
    eyebrow: "Perfil del jugador",
    title: "Ingeniero senior. Comunicación clara. Entrega confiable.",
    lead: "Tomo ownership de features complejas de punta a punta y colaboro de cerca con producto e ingeniería.",
    paragraphs: [
      "Soy Victor, Desarrollador Full Stack Senior con base en Xalapa, Veracruz. Construyo aplicaciones web escalables con Python, JavaScript, TypeScript, React y AWS — en entornos SaaS y empresariales.",
      "Mi día a día abarca Django, FastAPI, Node.js, React, APIs REST, PostgreSQL, Docker y CI/CD. Modernizo servicios legacy, mejoro rendimiento y mantengo releases consistentes.",
      "Resuelvo problemas difíciles con comunicación calmada: traduzco requisitos de negocio a arquitectura práctica, mentoreo mediante code reviews y entrego sistemas en los que el equipo puede confiar.",
    ],
    basedIn: "Con base en {location}. Abierto a colaboración remota en todo el mundo.",
    playerLevel: "NIV 08 · FULL STACK",
    focus: [
      {
        icon: "platforms",
        label: "Ingeniería de producto full-stack",
        detail: "Frontends en React y backends en Python/Node que escalan con tráfico real.",
      },
      {
        icon: "api",
        label: "Arquitectura de APIs y servicios",
        detail: "APIs REST, microservicios e integraciones que se mantienen limpias.",
      },
      {
        icon: "speed",
        label: "Rendimiento y confiabilidad",
        detail: "Menos latencia, menos errores, caché y estabilidad en producción.",
      },
      {
        icon: "cloud",
        label: "Cloud y entrega",
        detail: "AWS, Docker, ECS y pipelines CI/CD para publicar con confianza.",
      },
    ],
  },
  skills: {
    eyebrow: "Equipamiento",
    title: "El stack con el que juego cada día",
    description:
      "Lenguajes, frameworks, cloud y herramientas de testing de campañas reales.",
    categories: {
      languages: {
        title: "Lenguajes",
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
        title: "Bases de datos",
        description: "",
      },
      cloud: {
        title: "Cloud y DevOps",
        description: "",
      },
      testing: {
        title: "Testing y entrega",
        description: "",
      },
    },
  },
  impact: {
    eyebrow: "Logros",
    title: "Victorias medibles en el campo",
    description:
      "Mejoras de latencia, confiabilidad y velocidad de entrega en cada campaña.",
    stats: [
      { value: "8+", label: "Años de experiencia" },
      { value: "650ms", label: "Tiempo de respuesta API (desde 1.8s)" },
      { value: "4%", label: "Errores en producción (desde 14%)" },
      { value: "12 min", label: "Tiempo de deploy (desde 45 min)" },
    ],
  },
  projects: {
    eyebrow: "Misiones",
    title: "Campañas y resultados seleccionados",
    description:
      "Trabajo de alto impacto en equipos SaaS, enterprise e ingeniería de producto.",
    missionLabel: "MISIÓN",
    items: {
      "mission-latency": {
        name: "Latencia y estabilidad",
        summary:
          "Reduje el tiempo promedio de respuesta de API de 1.8s a 650ms y fortalecí la estabilidad de la plataforma.",
        role: "Desarrollador Full-Stack Senior",
        period: "2024 – 2026",
        problem: "APIs lentas y servicios frágiles limitaban el uso diario de la plataforma.",
        challenge: "Escalar sistemas Python/React/AWS sin sacrificar confiabilidad.",
        solution:
          "Arquitecturé flujos con Lambda, dashboards acelerados con Redis y servicios FastAPI seguros.",
        architecture: [
          "Capa de aplicación Python + React",
          "Despliegues AWS Lambda y ECS",
          "Caché Redis para dashboards",
          "Servicios FastAPI + SQLAlchemy",
        ],
        impact: [
          "Latencia API 1.8s → 650ms",
          "Carga de dashboard 4.2s → 1.7s",
          "Interfaces React reutilizables",
        ],
      },
      "mission-legacy": {
        name: "Modernización legacy",
        summary:
          "Modernicé servicios Django/PostgreSQL en AWS RDS y reduje errores de producción de 14% a 4%.",
        role: "Desarrollador Full-Stack Senior",
        period: "2024 – 2026",
        problem: "Servicios legacy fallaban bajo mayor volumen de transacciones.",
        challenge: "Refactorizar rutas críticas manteniendo mayor throughput.",
        solution:
          "Reconstruí acceso a datos y límites de servicio con Django, PostgreSQL y AWS RDS.",
        architecture: [
          "Modernización de servicios Django",
          "PostgreSQL en AWS RDS",
          "Límites REST endurecidos",
        ],
        impact: [
          "Errores de producción 14% → 4%",
          "Mayor volumen de transacciones",
          "Integraciones externas más claras",
        ],
      },
      "mission-deploy": {
        name: "Aceleración de deploys",
        summary:
          "Automatizé pipelines Docker + GitHub Actions + AWS ECS, bajando el deploy de 45 a 12 minutos.",
        role: "Ingeniero de Software",
        period: "2022 – 2023",
        problem: "Releases manuales frenaban la iteración e introducían inconsistencia.",
        challenge: "Estandarizar la entrega en la nube entre entornos.",
        solution:
          "Automatizé despliegues contenedorizados con GitHub Actions y AWS ECS.",
        architecture: [
          "Servicios dockerizados",
          "CI/CD con GitHub Actions",
          "Ruta de release en AWS ECS",
        ],
        impact: [
          "Tiempo de deploy 45 → 12 minutos",
          "Defectos frontend 18% → 6%",
          "Iteración TypeScript/React más rápida",
        ],
      },
      "mission-platform": {
        name: "Motor de entrega full-stack",
        summary:
          "Una arquitectura reutilizable redujo la entrega promedio de features de 15 a 9 días en NIC.",
        role: "Ingeniero de Software",
        period: "2021 – 2022",
        problem: "El throughput de features no alcanzaba las necesidades de producto.",
        challenge: "Mejorar latencia de backend y confiabilidad de frontend a la vez.",
        solution:
          "Entregué plataformas Python/React con Django REST, integraciones FastAPI y UI con Redux Toolkit.",
        architecture: [
          "Plataformas full-stack Python + React",
          "Django REST + PostgreSQL",
          "Integraciones FastAPI con terceros",
        ],
        impact: [
          "Entrega de features 15 → 9 días",
          "Latencia de queries 2.4s → 800ms",
          "Errores frontend 12% → 4%",
        ],
      },
      "mission-quality": {
        name: "Calidad frontend",
        summary:
          "Subí la cobertura de tests de 55% a 78% y reduje tickets sin resolver de 20 a 9.",
        role: "Desarrollador Web",
        period: "2018 – 2020",
        problem: "Defectos de UI y poca cobertura frenaban los releases.",
        challenge: "Fortalecer la cultura de testing mientras se entregaban features React.",
        solution:
          "Expandí cobertura Jest/RTL, depuré UI y endurecí flujos Git.",
        architecture: [
          "Módulos de features React",
          "Jest + React Testing Library",
          "Flujos de pull request en GitHub",
        ],
        impact: [
          "Defectos frontend 15% → 8%",
          "Cobertura de tests 55% → 78%",
          "Tickets sin resolver 20 → 9",
        ],
      },
      "mission-spring": {
        name: "Columna vertebral en Java",
        summary:
          "Construí servicios REST con Spring Boot e integraciones Node/Express para un flujo de datos confiable.",
        role: "Ingeniero de Software",
        period: "2022 – 2023",
        problem: "Los servicios backend necesitaban más confiabilidad e integraciones más limpias.",
        challenge: "Conectar servicios Java con frontend y middleware Node de forma clara.",
        solution:
          "Entregué APIs Spring Boot/MVC con JPA/Hibernate e integraciones Express.",
        architecture: [
          "APIs Java + Spring Boot",
          "Spring Data JPA / Hibernate",
          "Integraciones Node.js + Express",
        ],
        impact: [
          "Mayor confiabilidad de la aplicación",
          "Integraciones frontend/servicio más limpias",
          "Operaciones de base de datos más simples",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Registro de campaña",
    title: "Línea de tiempo profesional",
    description:
      "Ocho años entre equipos SaaS remotos y organizaciones de ingeniería en México.",
    jobs: [
      {
        title: "Desarrollador Full-Stack Senior",
        place: "Chicago, EE. UU. · Remoto",
        points: [
          "Arquitecturé aplicaciones escalables con Python, React y AWS Lambda, reduciendo el tiempo promedio de respuesta de API de 1.8s a 650ms.",
          "Modernicé servicios legacy con Django, PostgreSQL y AWS RDS, bajando errores de producción de 14% a 4%.",
          "Optimicé dashboards con React, FastAPI y Redis, reduciendo la carga de página de 4.2s a 1.7s.",
          "Automatizé despliegues en la nube con AWS ECS y Docker, mejorando la consistencia de releases.",
          "Mentoreé desarrolladores mediante code reviews y prácticas de desarrollo limpio.",
        ],
      },
      {
        title: "Ingeniero de Software",
        place: "California, EE. UU. · Remoto",
        points: [
          "Construí aplicaciones web con JavaScript, TypeScript y React, reduciendo defectos frontend de 18% a 6%.",
          "Automatizé despliegues con Docker, GitHub Actions y AWS ECS, bajando el tiempo de deploy de 45 a 12 minutos.",
          "Desarrollé servicios backend con Java, Spring Boot y Spring MVC, mejorando la confiabilidad.",
          "Integré servicios con Node.js y Express.js, mejorando el flujo de datos entre aplicaciones.",
        ],
      },
      {
        title: "Ingeniero de Software",
        place: "Yucatán, México · Presencial",
        points: [
          "Entregué plataformas full-stack con Python, JavaScript y React, reduciendo la entrega de features de 15 a 9 días.",
          "Mejoré el rendimiento backend con Django REST Framework y PostgreSQL, bajando latencia de queries complejas de 2.4s a 800ms.",
          "Rediseñé interfaces responsivas con React y Redux Toolkit, bajando errores frontend de 12% a 4%.",
          "Fortalecí el testing con Pytest y Jest para detectar regresiones más temprano.",
        ],
      },
      {
        title: "Desarrollador Web",
        place: "Veracruz, México · Presencial",
        points: [
          "Apoyé el desarrollo de features web con JavaScript, React y Jest, ayudando a reducir defectos frontend de 15% a 8%.",
          "Aumenté la cobertura de tests de 55% a 78% con Jest y React Testing Library.",
          "Depuré problemas de UI con Chrome DevTools y Git, reduciendo tickets sin resolver de 20 a 9.",
          "Mantuve el código fuente con Git y GitHub, apoyando pull requests y control de versiones organizado.",
        ],
      },
    ],
    educationDegree: "Licenciatura en Ingeniería de Software",
    educationSchool: "Universidad Modelo",
  },
  contact: {
    eyebrow: "Canal de comunicación",
    title: "Listo para la siguiente misión",
    description:
      "Elige el canal que te convenga — o deja una nota corta y te respondo por email. Con base en {location}, abierto a remoto mundial.",
    channels: {
      email: {
        label: "Email",
        hint: "Ideal para briefs detallados",
      },
      phone: {
        label: "WhatsApp",
        hint: "Inicia una conversación",
      },
      linkedin: {
        label: "LinkedIn",
        hint: "Conéctate o envía un mensaje",
      },
      resume: {
        label: "CV",
        value: "Descargar PDF",
        hint: "Experiencia y skills completas",
      },
    },
    formTitle: "Envía un mensaje rápido",
    formHint: "Abre tu app de email con todo listo — sin cuenta.",
    nameLabel: "Tu nombre",
    namePlaceholder: "Alex Rivera",
    emailLabel: "Tu email",
    emailPlaceholder: "tu@empresa.com",
    messageLabel: "Mensaje",
    messagePlaceholder:
      "¿Qué estás construyendo? Timeline, stack o rol — lo que ayude.",
    formAside: "¿Prefieres mensaje directo? Usa email, WhatsApp o LinkedIn.",
    submit: "Abrir en email",
    subjectFallback: "Hola Victor",
    subjectFrom: "Hola de parte de {name}",
    noMessage: "(Sin mensaje aún)",
  },
  footer: {
    crafted: "Diseñado y desarrollado por",
  },
  loader: {
    boot: "Secuencia de arranque",
    lines: [
      "Inicializando grilla de misión…",
      "Sincronizando equipamiento…",
      "Calibrando campo 3D…",
      "Listo para explorar.",
    ],
    tagline: "Python · React · AWS",
  },
};
