"use client";
import { Coffee, Map, HeartHandshake } from "lucide-react";


export default function Services3() {
  const services = [
    {
      icon: Coffee,
      title: "Pre-Ride Meetups",
      description:
        "Connect with fellow cyclists over coffee before your ride, plan routes, and make new friends.",
    },
    {
      icon: Map,
      title: "Group Ride Planning",
      description:
        "Discover, join, or create group rides tailored to your pace, schedule, and interests.",
    },
    {
      icon: HeartHandshake,
      title: "Community Support",
      description:
        "Get encouragement, advice, and support from a passionate cycling community.",
    },
  ];

  return (
    <section id="services3" className="w-full py-12 lg:py-[4.5rem]">
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-0 flex flex-col items-center gap-12">
        {/* Header Content */}
        <div className="w-full text-center max-w-2xl">
          <span className="text-sm text-primary uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Find Your Next Cycling Adventure
          </h2>
          <p className="mt-4 text-foreground/80">
            Join group rides, meet new cycling buddies, and grow your local
            riding community with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-md border border-secondary dark:border-muted \nhover:shadow-lg transition-shadow duration-300\nflex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 relative mb-6 flex items-center justify-center">
                <div className="absolute">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                {/* Background shape - using a simple circle instead of the SVG */}
                <div className="w-24 h-24 bg-secondary/20 rounded-full" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                <span>{service.title}</span>
              </h3>
              <p className="text-foreground/80 text-sm">
                <span>{service.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
