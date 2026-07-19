"use client";

import { motion } from "framer-motion";

const work = [
  {
    title: "iThemes — E-commerce Store",
    description: "A full-stack e-commerce site with a React.js front end and a Node.js back end, wired together with a fully responsive UI and seamless front-end/back-end API integration.",
    tag: "React · Node",
  },
  {
    title: "Entry & Attendance Management System",
    description: "An Angular + Node.js web app for employee entry and attendance tracking, with facial-recognition check-in/check-out for fully automated attendance.",
    tag: "Angular · AI",
  },
  {
    title: "Joy of Silver — Jewellery Store",
    description: "A complete Shopify store built and deployed for a jewellery brand, with full theme customisation and an optimised storefront and checkout/conversion flow.",
    tag: "Shopify · Liquid",
  },
  {
    title: "Pet Adoption Platform",
    description: "An in-progress platform for pet lovers in Jaipur, featuring AI-driven matching between pets and prospective owners. Built with React.js.",
    tag: "React · AI",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6"
        >
          Selected work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          A few projects I&apos;m proud of.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="block rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              {item.tag && (
                <span className="text-xs font-semibold tracking-wide uppercase text-brand-500">
                  {item.tag}
                </span>
              )}
              <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
