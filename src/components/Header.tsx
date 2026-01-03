"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useState } from "react";

export const Header = () => {
  const { header } = siteConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5 px-5 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image 
            src={header.logo} 
            alt={header.logoAlt} 
            height={60} 
            width={60}
            priority
            loading="eager"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            {header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/80 transition-colors">
              Get In Touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-3 animate-in fade-in duration-200">
            {header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black/60 hover:text-black transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium w-full mt-2 hover:bg-black/80 transition-colors">
              Get In Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

