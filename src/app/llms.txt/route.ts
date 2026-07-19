import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const postLinks = posts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`
    )
    .join("\n");

  const content = `# Peehu Sharma

> Portfolio of Peehu Sharma - a full-stack web developer in Jaipur building responsive React and Next.js apps, Node.js/REST integrations, and custom Shopify storefronts. Selected work, writing, and how to get in touch.

## About

Peehu Sharma is a full-stack web developer based in Jaipur, India. She builds responsive web applications and e-commerce stores - React.js and Next.js on the front end, Node.js and REST APIs on the back end, and custom Shopify storefronts with Liquid. A BCA graduate, she is currently a Full-Stack Developer Trainee at Vidhema Technologies. The site showcases selected work, occasional writing, and a way to get in touch.

## What Peehu does

- Front-end development - responsive interfaces with React.js, Next.js, and Angular
- API integration - connecting front ends to Node.js and REST APIs
- Shopify & Liquid - custom storefronts, theme development, and conversion flows
- Full-stack builds - end-to-end web apps and internal tools with Node.js
- Databases - modelling and querying data with MySQL and MongoDB
- AI-assisted features - practical AI touches like matching and automation

## Website

${SITE_URL}

## Blog

${postLinks}

## Key Pages

- [Home](${SITE_URL}): Peehu Sharma - full-stack web developer
- [About](${SITE_URL}/about): About Peehu Sharma
- [Blog](${SITE_URL}/blog): Notes on building and shipping products
- [RSS Feed](${SITE_URL}/feed.xml): Full-text RSS feed of all blog posts
- [Privacy Policy](${SITE_URL}/privacy): Privacy policy
- [Terms of Service](${SITE_URL}/terms): Terms of service

## Full Content

For complete article text, see: ${SITE_URL}/llms-full.txt

## Contact

- Website: ${SITE_URL}
- Email: peehu-dummy-email@gmail.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
