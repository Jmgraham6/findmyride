"use client";
import { ArrowRight } from "lucide-react";


export default function Steps3() {
  const features = [
    {
      title: "Find Local Rides",
      description:
        "Discover group rides happening near you and meet fellow cyclists with similar interests and skill levels.",
    },
    {
      title: "Plan Your Meetup",
      description:
        "Schedule your own cycling events, invite friends, and manage RSVPs—all in one place.",
    },
    {
      title: "Connect & Share",
      description:
        "Chat with other riders, share routes, photos, and tips to make every ride memorable.",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-[4.5rem]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-0 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Join the cycling community{" "}
          <span className="font-serif italic">ride together.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
          Meet new friends, explore local routes, and experience cycling like
          never before with our easy-to-use meetup app.
        </p>
        <a
          href="#events"
          className="bg-background mt-6 inline-flex items-center rounded-md border border-secondary py-3 px-10 text-sm font-semibold transition sm:text-base"
        >
          See Upcoming Rides{" "}
          <span className="ml-2">
            <ArrowRight size={20} />
          </span>
        </a>

        <div className="mx-auto mt-12 grid place-items-center md:grid-cols-2 lg:grid-cols-3 lg: max-w-6xl items-center justify-center gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-80 rounded-lg bg-card border px-6 py-8 text-left shadow-md"
            >
              <h3 className="text-lg font-semibold">
                <span>{feature.title}</span>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                <span>{feature.description}</span>
              </p>
              {index < features.length - 1 && (
                <ArrowRight className="rotate-90 md:hidden lg:block lg:rotate-0 absolute right-[-56px] top-1/2 h-12 w-12 -translate-y-1/2 text-gray-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
