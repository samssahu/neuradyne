import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Service {
  title: string;
  image?: StaticImageData;
  content: string;
  viewWorkLink: string;
}

interface ServiceCardProps {
  service: Service;
}

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

export default ServiceCard;