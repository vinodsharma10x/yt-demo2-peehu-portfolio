"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "💻", title: "Front-end development", body: "Responsive, accessible interfaces built with React.js, Next.js, and Angular." },
  { icon: "🔗", title: "API integration", body: "Wiring front ends to Node.js and REST APIs for reliable, consistent data flow." },
  { icon: "🛍️", title: "Shopify & Liquid", body: "Custom storefronts, theme development, and cleaner checkout and conversion flows." },
  { icon: "⚙️", title: "Full-stack builds", body: "End-to-end web apps and internal tools, with Node.js on the back end." },
  { icon: "🗄️", title: "Databases", body: "Modelling and querying data with MySQL and MongoDB behind the app." },
  { icon: "🤖", title: "AI-assisted features", body: "Practical AI touches like matching and automation, plus Canva & AI media editing." },
];

export function WhatWeDoSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-brand-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6"
        >
          What I do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          How I help teams and brands ship web apps and storefronts.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
