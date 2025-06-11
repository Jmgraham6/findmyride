"use client";
import * as React from "react";
import { Bike, Users, Calendar } from "lucide-react";


const CardItem: React.FC<any> = ({ key, Icon, title, description }) => {
  return (
    <li
      key={key}
      className="w-full lg:flex-1 p-8 bg-card border hover:bg-primary transition-colors duration-500 rounded-md cursor-pointer group/2"
    >
      <div className="h-12 w-12 mb-6 text-foreground group-hover/2:text-white">
        <Icon className="h-full w-full" />
      </div>
      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover/2:text-white">
        <span>{title}</span>
      </h3>
      <p className="text-foreground/80 group-hover/2:text-white">
        <span>{description}</span>
      </p>
    </li>
  );
};
export default function WhyChooseUs() {
  const cards = [
    {
      icon: Bike,
      title: "Connect with Cyclists",
      description:
        "Meet passionate riders in your area and join rides that match your style and pace.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description:
        "Our app welcomes cyclists of all levels, creating a supportive and friendly space for everyone.",
    },
    {
      icon: Calendar,
      title: "Seamless Event Planning",
      description:
        "Effortlessly organize, join, and track cycling meetups with just a few taps.",
    },
  ];

  return (
    <section className="py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-12 lg:mb-16 lg:flex lg:justify-between lg:items-end">
          <div className="lg:w-1/2">
            <span className="text-sm font-bold tracking-wider text-primary uppercase mb-1 block">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-0">
              Why Join Our Cycling Meetup Community?
            </h2>
          </div>

          <p className="lg:w-1/2 text-foreground/80">
            Discover exciting rides, make new friends, and explore your city
            with fellow cyclists. Our app makes organizing and joining group
            rides easy, fun, and safe for all.
          </p>
        </div>

        {/* Cards */}
        <ul className="flex flex-col lg:flex-row gap-4">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              Icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
