"use client";
import { Bike, Flag, Users, Calendar } from "lucide-react";
import * as React from "react";



const StatItem: React.FC<any> = ({ key, Icon, number, description }) => (
  <li className="flex items-center">
    <div className="mr-4 flex h-16 w-16 flex-none items-center justify-center rounded-full border border-secondary dark:border-muted">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-black text-foreground">
        <span>{number}</span>
      </span>
      <span className="text-sm text-foreground lg:text-base">
        <span>{description}</span>
      </span>
    </div>
  </li>
);
export default function Stats() {
  const stats = [
    {
      icon: Bike,
      number: "8,250",
      description: "Active Cyclists",
    },
    {
      icon: Flag,
      number: "1,920",
      description: "Meetups Hosted",
    },
    {
      icon: Users,
      number: "1,780",
      description: "Routes Shared",
    },
    {
      icon: Calendar,
      number: "350",
      description: "Cities Connected",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Stats content */}
      <div className="relative z-10 w-full py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
        <ul className="-translate-x-5 lg:translate-x-0 place-items-center mx-auto grid w-full max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              Icon={stat.icon}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
