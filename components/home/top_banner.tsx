"use client";
import * as React from "react";
import { Bike, Users, Calendar } from "lucide-react";


export default function TopBanner() {
  return (
    <section className="w-full bg-card text-card-foreground px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-evenly gap-6 text-sm">
        <div className="flex items-center gap-1.5">
          <Bike className="w-6 h-6 text-accent" />
          <span>Built for cyclists</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-6 h-6 text-accent" />
          <span>Thriving rider community</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <Calendar className="w-6 h-6 text-accent" />
          <span>1,200+ meetups monthly</span>
        </div>
      </div>
    </section>
  );
}
