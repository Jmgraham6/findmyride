"use client";



export default function Cta() {
  return (
    <section className="w-full py-12 lg:py-[4.5rem]">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 px-5 md:px-8 lg:px-0 lg:flex-row lg:justify-between">
        <div className="max-w-3xl mr-10">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Join the ride—connect with cyclists near you!
          </h2>
          <p className="mt-4 text-base sm:text-lg">
            Discover new routes, make friends, and enjoy group rides any day of
            the week.
          </p>
          <p className="mt-8 text-base sm:text-lg">Sign up to:</p>
          <ul className="mt-4 space-y-2 text-base sm:text-lg">
            <li>🚴 Find local cycling events and meetups easily</li>
            <li>📣 Connect with fellow riders and grow your network</li>
            <li>🗺️ Explore community-shared routes and tips</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#">
              <div className="rounded-lg p-[1px] bg-gradient-to-r from-accent to-primary">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                  className="h-16 w-auto object-fill rounded-lg"
                />
              </div>
            </a>
            <a href="#">
              <div className="rounded-lg p-[1px] bg-gradient-to-r from-accent to-primary">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                  className="h-16 w-auto object-fill rounded-lg"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center md:w-1/2">
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
          >
            <div
              style={{
                width: 350,
                height: 410,
                filter: "blur(64px)",
                background:
                  "linear-gradient(to bottom left, hsl(var(--accent)), hsl(var(--primary)))",
              }}
            />
          </div>

          <div className="relative z-10">
            <img
              src="/vector/iphone.svg"
              className="mx-auto w-full max-w-[280px] pointer-events-none select-none"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] md:rounded-[29px] bg-secondary/20 h-[95%] w-[88%]">
              <img
                src="/images/mobile-app-screenshot.png"
                className="h-full w-full object-cover rounded-[24px] md:rounded-[29px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
