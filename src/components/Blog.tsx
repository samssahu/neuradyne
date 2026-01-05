"use client";
import { siteConfig } from "@/config/site.config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors = [
  {
    bg: "bg-slate-50/60 backdrop-blur-xl",
    text: "text-slate-900",
    border: "border-slate-200/60",
  },
  {
    bg: "bg-slate-100/50 backdrop-blur-xl",
    text: "text-slate-900",
    border: "border-slate-200/70",
  },
  {
    bg: "bg-slate-50/70 backdrop-blur-xl",
    text: "text-slate-800",
    border: "border-slate-300/60",
  },
  {
    bg: "bg-slate-100/40 backdrop-blur-xl",
    text: "text-slate-800",
    border: "border-slate-300/50",
  },
];


export const Blog = () => {
  const { blog } = siteConfig;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          {blog.title}
        </h2>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {blog.categories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md`}
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-5 flex items-center justify-between"
                >
                  <span className={`${colors.text} font-semibold text-lg text-left`}>
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
                        <p className={`${colors.text} opacity-80 leading-relaxed`}>
                          {category.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
