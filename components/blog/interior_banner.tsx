"use client";
import * as React from "react";
import cn from "@/lib/utils";
import { Home, ChevronRight } from "lucide-react";


export default function InteriorBanner() {
  // Navigation links data
  const navLinks = [
    { text: "Home", href: "/", active: false },
    { text: "About", href: "/about", active: true },
  ];

  return (
    <div className="mt-20 w-full relative overflow-hidden">
      {/* Main banner container */}
      <div className="w-full relative z-10 py-24 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-2">
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-black text-white">
            Cycling Blog
          </h1>

          {/* Breadcrumb navigation */}
          <div className="lg:mt-2 flex items-center">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="text-base flex items-center text-white/80 font-bold"
                >
                  <span>{link.text}</span>
                </a>
                {index !== navLinks.length - 1 && (
                  <ChevronRight className="text-white mx-4 h-5 w-5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Background image and overlays */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 dark:lg:bg-black/40 z-10" />

        {/* Background image */}
        <img
          src="https://img.b2bpic.net/premium-photo/group-friends-riding-mountain-bike-forest_53876-21640.jpg?w=978"
          className="w-full h-full object-cover"
          width={1280}
          height={568}
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  );
}
