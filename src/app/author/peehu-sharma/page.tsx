import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Peehu Sharma | Full-Stack Web Developer",
  description: "Peehu Sharma is a full-stack web developer building responsive React and Next.js apps and custom Shopify stores. Read articles on building and shipping web projects.",
  alternates: { canonical: "/author/peehu-sharma" },
  openGraph: {
    title: "Peehu Sharma | Full-Stack Web Developer",
    description: "Peehu Sharma is a full-stack web developer building responsive React and Next.js apps and custom Shopify stores. Read articles on building and shipping web projects.",
    url: `${SITE_URL}/author/peehu-sharma`,
    images: [{ url: `${SITE_URL}/images/avatar.svg`, width: 400, height: 400, alt: "Peehu Sharma, full-stack web developer" }],
  },
};

export default function PeehuSharmaPage() {
  // Get all posts by Peehu
  const allPosts = getAllPostsMeta();
  const authorPosts = allPosts.filter(
    (p) => p.author === "Peehu Sharma"
  );

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Peehu Sharma",
    url: `${SITE_URL}/author/peehu-sharma`,
    image: `${SITE_URL}/images/avatar.svg`,
    jobTitle: "Full-Stack Web Developer",
    description: "Full-stack web developer building responsive React and Next.js apps and custom Shopify storefronts.",
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <section className="bg-gray-100 dark:bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/images/avatar.svg"
              alt="Peehu Sharma, full-stack web developer"
              width={120}
              height={120}
              className="w-28 h-28 rounded-full object-cover object-top shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                Peehu Sharma
              </h1>
              <p className="text-brand-500 font-semibold mt-1">Full-Stack Web Developer</p>
              <a
                href="https://linkedin.com/in/peehu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-950 py-12 sm:py-16">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a full-stack web developer based in Jaipur. I build responsive web apps with React.js and Next.js, connect them to Node.js and REST APIs, and customise Shopify storefronts with Liquid.
            </p>
            <p>
              I&apos;m a BCA graduate and a fast learner who ships working software. I&apos;ve built an AI-powered attendance system, a full-stack e-commerce site, and complete Shopify stores for real brands.
            </p>
            <p>
              This is where I write about what I learn building and shipping. If something resonates, get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Articles by Peehu ({authorPosts.length})
          </h2>
          <div className="space-y-4">
            {authorPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{post.date} · {post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
