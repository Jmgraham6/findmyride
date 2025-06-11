"use client";
import { Clock } from "lucide-react";



export default function Events() {
  const events = [
    {
      date: {
        day: "15",
        month: "Sep",
      },
      title: "Sunrise City Ride",
      location: "Central Park, New York, NY",
      time: "07:00AM - 10:00AM",
      link: "/events",
    },
    {
      date: {
        day: "28",
        month: "Sep",
      },
      title: "Mountain Trail Adventure",
      location: "Golden Gate Park, San Francisco, CA",
      time: "09:00AM - 01:00PM",
      link: "/events",
    },
    {
      date: {
        day: "5",
        month: "Oct",
      },
      title: "Coastal Breeze Tour",
      location: "Lakefront Trail, Chicago, IL",
      time: "08:00AM - 12:00PM",
      link: "/events",
    },
  ];

  return (
    <section
      id="events"
      className="w-full py-12 lg:py-[4.5rem] overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row items-stretch gap-5">
          {/* Left side with image and text */}
          <div className="rounded-md overflow-clip w-full lg:w-[26rem] relative h-[20rem] lg:h-auto">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-84 z-10" />
              <img
                src="https://img.b2bpic.net/premium-photo/woman-friends-cycling-nature-bicycle-fitness-cycling-off-road-travel-trail-path-female-person-biker-cyclist-forest-outdoor-workout-training-sports-exercise_590464-290908.jpg?w=647"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 p-8">
              <span className="text-primary">Upcoming Rides</span>
              <h2 className="text-3xl font-bold text-white mt-2">
                Join a Cycling Event
              </h2>
            </div>
          </div>

          {/* Right side event cards */}
          <div className="flex-1">
            <ul className="space-y-5">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="border border-secondary rounded-md bg-card p-6 lg:p-8 flex gap-6 lg:gap-12"
                >
                  {/* Date box */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-md bg-primary flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary-foreground">
                      <span>{event.date.day}</span>
                    </span>
                    <span className="text-primary-foreground">
                      <span>{event.date.month}</span>
                    </span>
                  </div>

                  {/* Event details */}
                  <div className="flex-1 flex flex-col lg:flex-row lg:justify-between gap-6">
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        <span>{event.title}</span>
                      </h3>
                      <p className="text-foreground/80">
                        <span>{event.location}</span>
                      </p>
                      <div className="flex items-center gap-2 text-foreground/80 mt-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <a
                        href={event.link}
                        className="w-fit flex justify-center items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold transition-colors"
                      >
                        View All Rides
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
