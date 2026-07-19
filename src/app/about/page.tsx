import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

// Résumé data — the About page is built from these arrays.
const EXPERIENCE = [
  {
    role: "Full-Stack Developer Trainee",
    company: "Vidhema Technologies",
    period: "Sep 2025 — Present",
    blurb: "Build responsive React.js interfaces for enterprise web apps, integrate REST APIs between front and back end, customise Shopify storefronts with Liquid, and develop internal tools and e-commerce features with Node.js.",
  },
  {
    role: "Java Developer Intern",
    company: "Oasis Infobyte & CodSoft",
    period: "Jun — Aug 2024",
    blurb: "Built Java projects applying object-oriented programming and structured application logic, and optimised existing code for better performance across multiple modules.",
  },
];

const SKILL_GROUPS = [
  { label: "Frontend", items: ["React.js", "Next.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Node.js", "REST APIs"] },
  { label: "E-commerce", items: ["Shopify", "Liquid"] },
  { label: "Databases", items: ["MySQL", "MongoDB"] },
  { label: "Languages", items: ["Python", "SQL", "C/C++"] },
  { label: "Tools", items: ["Git/GitHub", "VS Code", "Figma"] },
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA), Blockchain specialisation",
    school: "JECRC University, Jaipur",
    period: "2022 — 2025",
  },
];

const CERTIFICATIONS = [
  "Claude AI Developer Module — Anthropic",
  "Introduction to Generative AI — Intel",
  "Java Bootcamp",
  "Digital Forensics & Cloud Computing",
];

export const metadata: Metadata = {
  title: "About | Peehu Sharma",
  description:
    "About Peehu Sharma - a full-stack web developer in Jaipur building responsive React and Next.js apps and custom Shopify stores.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Peehu Sharma",
    description:
      "About Peehu Sharma - a full-stack web developer in Jaipur building responsive React and Next.js apps and custom Shopify stores.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: "About Peehu Sharma" }],
  },
};

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Peehu Sharma",
    url: `${SITE_URL}/about`,
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack web developer in Jaipur building responsive React and Next.js apps, Node.js and REST API integrations, and custom Shopify storefronts.",
    image: `${SITE_URL}/images/avatar.svg`,
    sameAs: [
      "https://github.com/peehu",
      "https://linkedin.com/in/peehu",
    ],
    knowsAbout: [
      "Web development",
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Shopify",
      "Liquid",
      "MongoDB",
      "MySQL",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* Section 1: Hero */}
      <section className="bg-gray-100 dark:bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            About <span className="text-brand-500">Peehu Sharma</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            Full-stack web developer building responsive apps and Shopify stores.
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-white dark:bg-gray-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-center">
            {/* Photo (same one as the homepage) */}
            <div className="relative aspect-[4/5] max-w-sm w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-sm">
              <img
                src="/images/avatar.svg"
                alt="Peehu Sharma, Full-Stack Web Developer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Hi, I&apos;m Peehu
              </h2>
              <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a full-stack web developer based in Jaipur. I build
                  responsive web applications and e-commerce stores - React.js and
                  Next.js on the front end, Node.js and REST APIs on the back end,
                  and custom Shopify storefronts with Liquid.
                </p>
                <p>
                  I&apos;m a BCA graduate (blockchain specialisation), currently
                  working as a Full-Stack Developer Trainee at Vidhema Technologies,
                  where I ship UI for enterprise apps, wire up APIs, and customise
                  Shopify themes. I learn quickly and care about shipping software
                  that actually works.
                </p>
                <p>
                  I&apos;ve built an AI-powered attendance system with facial
                  recognition, a full-stack e-commerce site, and complete Shopify
                  stores for real brands. If you&apos;re hiring or have a project in
                  mind, get in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Résumé — Experience, Skills, Education */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Experience */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="border-l-2 border-brand-100 dark:border-gray-800 pl-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500">{job.period}</span>
                </div>
                <p className="text-sm font-semibold text-brand-500 mb-1">
                  {job.company}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {job.blurb}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-8">
            Skills
          </h2>
          <div className="space-y-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                <span className="w-28 shrink-0 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-8">
            Education
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-brand-500">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-8">
            Certifications
          </h2>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
              >
                {cert}
              </span>
            ))}
          </div>

          {/* Contact line */}
          <p className="mt-14 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            The best way to start a conversation is to{" "}
            <a href="mailto:peehu-dummy-email@gmail.com" className="text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium">
              send me an email
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
