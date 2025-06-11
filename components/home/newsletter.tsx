"use client";
import * as React from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Newsletter() {
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add Recaptcha logic here to secure this endpoint
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        channel: "newsletter",
      }),
    });
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative w-full py-12 lg:py-[4.5rem] overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 dark:from-black/70 to-black/10 z-10" />
        <img
          src="https://img.b2bpic.net/premium-photo/women-riding-bikes-together-park_798657-19102.jpg?w=1528"
          className="object-cover w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-0">
        <div className="max-w-[630px] mx-auto text-center">
          {/* Topper text */}
          <span className="text-white mb-2 block">JOIN OUR COMMUNITY</span>

          {/* Title */}
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Get Cycling Event Updates & Tips
          </h2>

          {/* Description */}
          <p className="text-white/90 mb-8">
            Stay in the loop with the latest cycling meetups, group rides, and
            exclusive app news.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center"
          >
            <input
              type="email"
              placeholder={"Enter your email"}
              className="w-full lg:w-[360px] h-14 px-5 rounded-md bg-white text-black"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="w-full flex justify-center items-center lg:w-[222px] h-14 bg-primary hover:contrast-125 text-primary-foreground font-bold rounded-md transition-colors duration-300">
              Join Newsletter
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
