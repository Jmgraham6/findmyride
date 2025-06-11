"use client";
import * as React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";


export default function Footer() {
  // Navigation links data
  const navLinks = [
    { text: "Ride Home", href: "/" },
    { text: "About CycleMeet", href: "/about" },
    { text: "How It Works", href: "#services3" },
    { text: "Cycling Blog", href: "/blog" },
    { text: "Get in Touch", href: "/contact" },
  ];
  // Social media links data
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="text-foreground/80 py-20 relative z-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-border pb-10 mb-10 gap-6">
          {/* Logo */}
          <a href="/" className="flex justify-center lg:justify-start">
            <img
              src="/images/QuartzAI.svg"
              className="h-14"
            />
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 lg:gap-9">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <span className="text-sm lg:text-base order-2 lg:order-1">
            © 2025 CycleMeet. Ride together. -{" "}
            <a href="/" className="hover:text-primary transition-colors">
              CycleMeet App
            </a>
          </span>

          {/* Policy Links */}
          <div className="flex items-center gap-4 order-3 lg:order-2">
            <a
              href="Lorem"
              className="text-sm lg:text-base hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-foreground/80">|</span>
            <a
              href="Lorem"
              className="text-sm lg:text-base hover:text-primary transition-colors"
            >
              Terms of Use
            </a>
          </div>

          {/* Social Links */}
          <ul className="flex items-center gap-2 order-1 lg:order-3">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-muted/30 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
