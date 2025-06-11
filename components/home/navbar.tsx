"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "RideHub", href: "/", active: true },
    { name: "Events", href: "/events" },
    { name: "Find Rides", href: "#services3" },
    { name: "About RideHub", href: "/about" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="relative flex items-center justify-between lg:justify-start lg:px-4">
        {/* Logo Section */}
        <a
          href="/"
          className="relative z-10 flex gap-3 items-center justify-center bg-primary px-4 py-4 lg:py-8 lg:absolute lg:left-0 lg:w-[18.4%] lg:max-w-80"
        >
          <img
            src="/images/mobile-app-screenshot.png"
            className="h-8 w-auto object-contain"
          />
          <h1 className="font-bold text-2xl text-primary-foreground">
            RideHub
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="relative z-10 mr-4 lg:hidden"
          aria-label={"Open cycling menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen
              ? "absolute left-0 top-full h-[calc(100vh-4rem)] w-full transform opacity-100"
              : "hidden lg:block"
          } lg:ml-[calc(18.4%+2rem)] lg:flex-1`}
        >
          {/* Mobile Menu Backdrop */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden" />
          )}

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen
                ? "relative z-50 flex h-full flex-col items-center gap-5 overflow-auto bg-background px-4 pt-12"
                : "flex items-center gap-9"
            } lg:pt-0`}
          >
            {navItems.map((item, index) => (
              <li key={index} className="lg:py-8">
                <a
                  href={item.href}
                  className={`relative text-lg transition-colors hover:text-primary lg:text-base ${
                    item.active
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-foreground"
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden rounded-md bg-primary px-6 py-2 mr-4 font-bold text-primary-foreground transition-colors hover:bg-primary/90 lg:ml-auto lg:block"
        >
          Join a Ride
        </a>
      </div>
    </header>
  );
}
