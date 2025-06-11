"use client";
import cn from "@/lib/utils";
import { Check, X } from "lucide-react";


type Plan = {
  name: string;
  emoji: string;
  subtitle: string;
  price: string;
  ctaLink: string;
  features: {
    label: string;
    included: boolean;
  }[];
  mostPopular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Rider Basic",
    emoji: "🚴‍♂️",
    subtitle: "Perfect for solo cyclists",
    price: "$5",
    ctaLink: "#pricing",
    features: [
      { label: "Join local rides", included: true },
      { label: "RSVP for up to 3 events/month", included: true },
      { label: "Access group chat", included: true },
      { label: "View ride routes", included: true },
    ],
  },
  {
    name: "Peloton Pro",
    emoji: "🚴‍♀️",
    subtitle: "Ideal for cycling teams",
    price: "$15",
    ctaLink: "#pricing",
    features: [
      { label: "All Rider Basic features", included: true },
      { label: "Unlimited event RSVPs", included: true },
      { label: "Create private group rides", included: true },
      { label: "Advanced route planning", included: true },
      { label: "Team member management", included: true },
      { label: "Priority event support", included: true },
    ],
    mostPopular: true,
  },
  {
    name: "Adventure Explorer",
    emoji: "🚵",
    subtitle: "Made for explorers",
    price: "$3",
    ctaLink: "#pricing",
    features: [
      { label: "Discover new cycling clubs", included: true },
      { label: "RSVP up to 10 events/month", included: true },
      { label: "Share custom routes", included: true },
      { label: "Organize public meetups", included: false },
    ],
  },
];
export default function Pricing() {
  return (
    <section className="w-full py-12 lg:py-[4.5rem]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Find your perfect cycling plan
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base lg:mt-4">
          Choose a plan that matches your cycling journey. Meet new riders, join
          group rides, and explore more miles together.
        </p>
      </div>
      <div className="relative mx-auto mt-10 max-w-7xl px-5 md:px-8 lg:px-0">
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
          className="opacity-40 dark:opacity-100"
        >
          <div
            style={{
              width: 450,
              height: 410,
              filter: "blur(100px)",
              background:
                "linear-gradient(to bottom left, hsl(var(--accent)), hsl(var(--primary)))",
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative flex w-full flex-col rounded-lg border border-border bg-card text-foreground shadow-lg",
                plan.mostPopular && "z-10",
              )}
            >
              {plan.mostPopular && (
                <div className="absolute right-4 top-4 rounded-full bg-foreground px-3 py-1 text-xs font-bold text-background">
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="flex flex-col items-center px-8 pt-10 pb-6 text-center">
                <span className="text-5xl">
                  <span>{plan.emoji}</span>
                </span>
                <h3 className="mt-4 text-2xl font-semibold">
                  <span>{plan.name}</span>
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  <span>{plan.subtitle}</span>
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end justify-center gap-1 px-8 pb-6 text-center">
                <p className="text-5xl font-bold">
                  <span>{plan.price}</span>
                </p>
                <span className="-translate-y-1 text-lg text-muted-foreground">
                  /month
                </span>
              </div>

              {/* Features */}
              <div className="flex-1 border-t border-border px-8 pt-6 pb-8">
                <ul className="space-y-3 text-base">
                  {plan.features.map((feature, featureIndex) =>
                    feature.included ? (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-1.5"
                      >
                        <Check />
                        <span>
                          <span>{feature.label}</span>
                        </span>
                      </li>
                    ) : (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-1.5 opacity-50"
                      >
                        <X />
                        <span>
                          <span>{feature.label}</span>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <a href={plan.ctaLink} className="w-full py-3 text-base">
                  Join Now
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  Cancel anytime
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
