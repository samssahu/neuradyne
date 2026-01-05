"use client";

import Image, { StaticImageData } from "next/image";
import { siteConfig } from "@/config/site.config";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  image?: StaticImageData;
  content: string;
  viewWorkLink: string;
}

interface ServiceCardProps {
  service: Service;
}

export const Services = () => {
  const { services } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = services.items.length;
  const showCarousel = totalItems > 3;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const ServiceCard = ({ service }: ServiceCardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="
        border rounded-lg overflow-hidden h-full flex flex-col
        bg-white dark:bg-gray-900
        border-[#F1F1F1] dark:border-gray-800
        shadow-sm hover:shadow-lg dark:hover:shadow-black/40
        transition-all
      "
    >
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={192}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageIcon className="h-16 w-16 text-gray-400 dark:text-gray-500" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {service.content}
        </p>

        <a
          href={service.viewWorkLink}
          className="
            inline-flex items-center gap-2 font-medium
            text-gray-900 dark:text-white
            hover:underline
          "
        >
          <span>view work</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {services.title}
        </h2>

        {showCarousel ? (
          <div className="relative">
            <div className="flex justify-end gap-2 mb-6">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`
                  p-2 rounded-full border transition-colors
                  border-[#F1F1F1] dark:border-gray-800
                  ${
                    canGoPrev
                      ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`
                  p-2 rounded-full border transition-colors
                  border-[#F1F1F1] dark:border-gray-800
                  ${
                    canGoNext
                      ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsPerView
                  }%)`,
                }}
              >
                {services.items.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gray-900 dark:bg-white"
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.items.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
