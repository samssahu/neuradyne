"use client";
import { siteConfig } from "@/config/site.config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors = [
  {
    bg: "bg-slate-50/60 dark:bg-gray-900/60 backdrop-blur-xl",
    text: "text-slate-900 dark:text-gray-100",
    border: "border-slate-200/60 dark:border-gray-800/60",
  },
  {
    bg: "bg-slate-100/50 dark:bg-gray-900/50 backdrop-blur-xl",
    text: "text-slate-900 dark:text-gray-100",
    border: "border-slate-200/70 dark:border-gray-800/70",
  },
  {
    bg: "bg-slate-50/70 dark:bg-gray-900/70 backdrop-blur-xl",
    text: "text-slate-800 dark:text-gray-200",
    border: "border-slate-300/60 dark:border-gray-700/60",
  },
  {
    bg: "bg-slate-100/40 dark:bg-gray-900/40 backdrop-blur-xl",
    text: "text-slate-800 dark:text-gray-200",
    border: "border-slate-300/50 dark:border-gray-700/50",
  },
];

export const Blog = () => {
  const { blog } = siteConfig;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
          {blog.title}
        </h2>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {blog.categories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-black/40 transition-all`}
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span
                    className={`${colors.text} font-semibold text-lg`}
                  >
                    {category.title}
                  </span>

                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={colors.text}
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p
                          className={`${colors.text} opacity-80 leading-relaxed`}
                        >
                          {category.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
