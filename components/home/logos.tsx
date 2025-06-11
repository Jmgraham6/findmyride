"use client";
import cn from "@/lib/utils";
import * as React from "react";



export default function Logos() {
  const logos = [
    "https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-vertex.svg",
    "https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-martino.svg",
    "https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-squarestone.svg",
    "https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-waverio.svg",
    "https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-fireli.svg",
  ];

  return (
    <section className="w-full px-4 py-12 lg:py-[4.5rem]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center mb-8">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 lg:mb-2">
            1500+ cyclists use RideConnect to find their next group ride
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={cn(
                "bg-white border px-6 rounded-md shadow-md flex items-center justify-center h-16",
                i > 2 && "max-md:hidden",
              )}
            >
              <img src={logo} className="max-h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
