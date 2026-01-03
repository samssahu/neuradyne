"use client";
import { siteConfig } from "@/config/site.config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors = [
  {
    bg: "bg-[#F0F4FF]",
    text: "text-[#001E80]",
  },
  {
    bg: "bg-[#FFE8F0]",
    text: "text-[#001E80]",
  },
  {
    bg: "bg-[#E8F5E8]",
    text: "text-[#001E80]",
  },
  {
    bg: "bg-[#E0E8F5]",
    text: "text-[#001E80]",
  },
  {
    bg: "bg-[#FFF0E8]",
    text: "text-[#001E80]",
  },
  {
    bg: "bg-[#F5F0FF]",
    text: "text-[#001E80]",
  },
];

export const Blog = () => {
  const { blog } = siteConfig;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 text-center  bg-[#eaedfe]">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{blog.title}</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {blog.categories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.text} rounded-lg overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                >
                  <span className="font-medium text-lg">{category.title}</span>
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={colors.text}
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
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
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-[#001E80]/80 leading-relaxed">{category.content}</p>
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

