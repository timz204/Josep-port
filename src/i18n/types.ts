
export type Messages = {
  nav: {
    about: string;
    skills: string;
    impact: string;
    projects: string;
    experience: string;
    contact: string;
  };
  common: {
    contact: string;
    downloadResume: string;
    linkedin: string;
    scroll: string;
    outcomes: string;
    education: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    language: string;
    viewDetails: string;
    close: string;
    problem: string;
    challenge: string;
    solution: string;
    role: string;
    architecture: string;
    stack: string;
  };
  site: {
    role: string;
    headline: string;
    subheadline: string;
    positioning: string;
    location: string;
    remoteTag: string;
  };
  highlights: string[];
  hero: {
    viewProjects: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    basedIn: string;
    playerLevel: string;
    focus: { icon: string; label: string; detail: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<string, { title: string; description: string }>;
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    missionLabel: string;
    items: Record<
      string,
      {
        name: string;
        summary: string;
        role: string;
        period: string;
        problem: string;
        challenge: string;
        solution: string;
        architecture: string[];
        impact: string[];
      }
    >;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    jobs: {
      title: string;
      place: string;
      points: string[];
    }[];
    educationDegree: string;
    educationSchool: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    channels: {
      email: { label: string; hint: string };
      phone: { label: string; hint: string };
      linkedin: { label: string; hint: string };
      resume: { label: string; value: string; hint: string };
    };
    formTitle: string;
    formHint: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    formAside: string;
    submit: string;
    subjectFallback: string;
    subjectFrom: string;
    noMessage: string;
  };
  footer: {
    crafted: string;
  };
  loader: {
    boot: string;
    lines: string[];
    tagline: string;
  };
};
