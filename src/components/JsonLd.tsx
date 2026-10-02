import { site } from "@/data/portfolio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Senior Full Stack Developer",
    email: site.email,
    telephone: site.phone,
    url: site.github,
    sameAs: [site.linkedin, site.github],
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
      addressLocality: "Xalapa",
      addressRegion: "Veracruz",
    },
    knowsAbout: [
      "Python",
      "TypeScript",
      "React",
      "Django",
      "FastAPI",
      "AWS",
      "PostgreSQL",
      "Docker",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
