import { StaticImageData } from "next/image";

export interface SiteConfig {
  header: {
    logo: StaticImageData;
    logoAlt: string;
    navLinks: Array<{
      label: string;
      href: string;
    }>;
  };
  hero: {
    slogan: string;
    headerContent: string;
    headerImage: StaticImageData;
    headerImageAlt: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      image?: StaticImageData;
      content: string;
      viewWorkLink: string;
    }>;
  };
  partners: {
    title: string;
    logos: Array<{
      src: StaticImageData;
      alt: string;
    }>;
  };
  activities: {
    title: string;
    introContent: string;
    items: Array<{
      title: string;
      content: string;
      readMoreLink: string;
    }>;
  };
  blog: {
    title: string;
    categories: Array<{
      title: string;
      content: string;
    }>;
  };
  footer: {
    logo: StaticImageData;
    logoAlt: string;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
    copyright: string;
  };
}

import logo from "@/assets/logo.png";
import fullLogo from "@/assets/fulllogo.png";
import productImage from "@/assets/product-image.png";
import logoAcme from "@/assets/logo-acme.png";
import logoQuantum from "@/assets/logo-quantum.png";
import logoEcho from "@/assets/logo-echo.png";
import logoCelestial from "@/assets/logo-celestial.png";
import logoPulse from "@/assets/logo-pulse.png";
import logoApex from "@/assets/logo-apex.png";
import serviceImage from "@/assets/pexels-pixabay-158826.jpg";
import mcpimage from "@/assets/mcp.jpg";
import questionimage from "@/assets/question.jpg";

export const siteConfig: SiteConfig = {
  header: {
    logo: logo,
    logoAlt: "Company Logo",
    navLinks: [
      {
        label: "About Us",
        href: "#about",
      },
      // {
      //   label: "Contact Us",
      //   href: "#contact",
      // },
    ],
  },
  hero: {
    slogan: "Neuradyne AI System Accelerating ideas into impact",
    headerContent:
      "At Neuradyne, we transform ideas into prototype and production-ready software to Scalable Business Solutions.",
    headerImage: logo,
    headerImageAlt: "Header Image",
  },
  services: {
    title: "Services",
    items: [
      {
        title: "BilionEye",
        image: serviceImage,
        content:
          "Description of BilionEye service. Add details about what this service offers and how it benefits users.",
        viewWorkLink: "#bilioneye",
      },
      {
        title: "AI Question Generation",
        image: questionimage,
        content:
          "Description of AI Question Generation service. Explain how this AI-powered feature works and its advantages.",
        viewWorkLink: "#ai-question",
      },
      {
        title: "Service #3",
        image: mcpimage,
        content:
          "Description of Service #3. Provide information about this service and its key features.",
        viewWorkLink: "#service-3",
      },
    ],
  },
  partners: {
    title: "Partners",
    logos: [
      {
        src: logoAcme,
        alt: "Acme Logo",
      },
      {
        src: logoQuantum,
        alt: "Quantum Logo",
      },
      {
        src: logoEcho,
        alt: "Echo Logo",
      },
      {
        src: logoCelestial,
        alt: "Celestial Logo",
      },
      {
        src: logoPulse,
        alt: "Pulse Logo",
      },
      {
        src: logoApex,
        alt: "Apex Logo",
      },
    ],
  },
  activities: {
    title: "Activities",
    introContent:
      "Discover our latest activities and updates. Stay informed about what we're working on and how we're making a difference.",
    items: [
      {
        title: "Activity Title 1",
        content:
          "Description of the first activity. Share details about what this activity involves and its impact.",
        readMoreLink: "#activity-1",
      },
      {
        title: "Activity Title 2",
        content:
          "Description of the second activity. Explain the purpose and outcomes of this initiative.",
        readMoreLink: "#activity-2",
      },
      {
        title: "Activity Title 3",
        content:
          "Description of the third activity. Provide information about this activity and its significance.",
        readMoreLink: "#activity-3",
      },
    ],
  },
  blog: {
    title: "Blog",
    categories: [
      {
        title: "Category 1",
        content: "Content for category 1. Add your blog post content here.",
      },
      {
        title: "Category 2",
        content: "Content for category 2. Add your blog post content here.",
      },
      {
        title: "Category 3",
        content: "Content for category 3. Add your blog post content here.",
      },
      {
        title: "Category 4",
        content: "Content for category 4. Add your blog post content here.",
      },
      {
        title: "Category 5",
        content: "Content for category 5. Add your blog post content here.",
      },
    ],
  },
  footer: {
    logo: fullLogo,
    logoAlt: "Company Logo",
    columns: [
      {
        title: "Socials",
        links: [
          {
            label: "Twitter",
            href: "#twitter",
          },
          {
            label: "Instagram",
            href: "#instagram",
          },
          {
            label: "LinkedIn",
            href: "#linkedin",
          },
        ],
      },
      {
        title: "Developers",
        links: [
          {
            label: "Documentation",
            href: "#docs",
          },
          {
            label: "API Reference",
            href: "#api",
          },
          {
            label: "GitHub",
            href: "#github",
          },
        ],
      },
      {
        title: "Products",
        links: [
          {
            label: "Features",
            href: "#features",
          },
          {
            label: "Pricing",
            href: "#pricing",
          },
          {
            label: "Updates",
            href: "#updates",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            label: "About",
            href: "#about",
          },
          {
            label: "Careers",
            href: "#careers",
          },
          {
            label: "Contact",
            href: "#contact",
          },
        ],
      },
    ],
    copyright: "© 2026 Neuradyne, Inc. All rights reserved.",
  },
};
