"use client";
import { BikeOff, MapPinOff } from "lucide-react";


export default function Hero404() {
  return (
    <div className="mt-28 w-full">
      <div className="flex flex-col items-center">
        <div className="h-[50vh] flex flex-col items-center justify-center flex-grow w-full gap-8 px-4 py-20 lg:px-10">
          <h1 className="flex items-center gap-6 text-center text-5xl font-bold sm:text-8xl">
            <BikeOff size={54} />
            404
            <MapPinOff size={54} />
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl">
            Sorry, we couldn't find that cycling route.
          </p>
          <a
            href="/"
            className="px-6 py-3 text-lg font-medium transition rounded-md shadow-md"
          >
            Back to ride planning
          </a>
        </div>
      </div>
    </div>
  );
}
