"use client";
import * as React from "react";


export default function Hero() {
  return (
    <section className="lg:-translate-x-4 pt-14 pb-14 lg:pb-0 mt-24 md:mt-32 lg:mt-0 flex flex-col justify-center min-h-screen w-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto max-w-7xl w-full px-3 md:px-6 lg:px-0">
        {/* Left column: Heading, text, CTA, stats */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
            Discover new rides{" "}
            <span role="img" aria-label="fire">
              🚴
            </span>{" "}
            and connect with cyclists{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              near you
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-foreground/70 sm:mt-6 sm:text-lg">
            Join group rides, meet fellow cyclists, and explore new routes
            together.
          </p>
          <div className="mt-8 sm:mt-10">
            <a
              href="#events"
              className="rounded-lg bg-primary hover:contrast-125 px-8 py-3 text-sm font-medium text-white sm:text-base"
            >
              Find a Ride
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap space-x-8 space-y-4 sm:space-y-0">
            <div>
              <p className="text-2xl font-bold">1,000+</p>
              <p className="mt-1 text-sm text-gray-400">Active Riders</p>
            </div>
            <div>
              <p className="text-2xl font-bold">150+</p>
              <p className="mt-1 text-sm text-gray-400">Weekly Meetups</p>
            </div>
          </div>
        </div>

        {/* Right column: Phone mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/vector/iphone.svg"
              className="mx-auto w-full max-w-sm max-h-[74vh] pointer-events-none select-none"
              fetchPriority="high"
              loading="eager"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] md:rounded-[29px] bg-secondary/20 h-[95%] w-[88%]">
              <img
                src="/images/mobile-app-screenshot.png"
                className="h-full w-full object-cover rounded-[24px] md:rounded-[29px]"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
