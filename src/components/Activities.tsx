"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Activity {
  title: string;
  content: string;
  readMoreLink: string;
  imageSrc?: string;
}

export const Activities = () => {
  const { activities } = siteConfig;
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

  const totalItems = activities.items.length;
  const showCarousel = totalItems > 3;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const ActivityCard = ({ activity }: { activity: Activity }) => (
    <div className="border border-[#F1F1F1] rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {activity.imageSrc ? (
          <Image
            src={activity.imageSrc}
            alt={activity.title}
            width={400}
            height={192}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageIcon className="h-16 w-16 text-gray-400" />
        )}
      </div>

      <div className="p-6 flex flex-col bg-gray-200 flex-grow">
        <h3 className="text-xl font-bold mb-4">{activity.title}</h3>

        <p className="text-[#666] mb-6 flex-grow">{activity.content}</p>

        <a
          href={activity.readMoreLink}
          className="inline-flex items-center gap-2 text-black font-medium hover:underline"
        >
          <span>Read More</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  if (!isMounted) {
    return (
      <section className="py-24 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#7DD3FC,_#F0F9FD_100%)]">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {activities.title}
          </h2>
          <p className="text-[#666] mb-10 max-w-2xl mx-auto text-center">
            {activities.introContent}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.items.map((activity: Activity, index: number) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#7DD3FC,_#F0F9FD_100%)]">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {activities.title}
        </h2>
        <p className="text-[#666] mb-10 max-w-2xl mx-auto text-center">
          {activities.introContent}
        </p>

        {showCarousel ? (
          <div className="relative">
            <div className="flex justify-end gap-2 mb-6">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`p-2 rounded-full border border-[#F1F1F1] transition-colors ${
                  canGoPrev
                    ? "hover:bg-gray-100 text-black"
                    : "text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`p-2 rounded-full border border-[#F1F1F1] transition-colors ${
                  canGoNext
                    ? "hover:bg-gray-100 text-black"
                    : "text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                }}
              >
                {activities.items.map((activity: Activity, index: number) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <ActivityCard activity={activity} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-black"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.items.map((activity: Activity, index: number) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};