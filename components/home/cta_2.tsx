"use client";



export default function Cta_2() {
  return (
    <section className="w-full border-b overflow-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 md:px-8 lg:px-0 py-12 lg:py-[4.5rem] md:flex-row lg:justify-between">
        <div className="order-first w-full md:w-1/2">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Join Cycling Meetups Near You
          </h2>
          <p className="mt-4 text-lg">
            Discover local cycling groups, plan rides, and connect with fellow
            cyclists through our easy-to-use meetup app.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="/events">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                className="border border-border rounded-md"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                className="border border-border rounded-md"
              />
            </a>
          </div>
        </div>
        <div className="order-last lg:order-first flex w-full md:w-1/2 lg:scale-125 lg:translate-x-24 translate-y-20 justify-center relative">
          <div className="absolute h-72 w-72 rounded-full bg-accent scale-125 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative">
            <img
              src="/vector/iphone.svg"
              className="mx-auto w-full max-w-sm max-h-[50vh] pointer-events-none select-none"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] md:rounded-[29px] bg-secondary/20 h-[95%] w-[88%]">
              <img
                src="/images/mobile-app-screenshot.png"
                className="h-full w-full object-cover rounded-[24px]"
              />
            </div>
          </div>

          <div className="hidden order-last lg:order-first flex justify-center">
            <div className="relative -rotate-6">
              <img
                src="Join Cycling Meetups Near You"
                className="mx-auto w-full max-w-sm max-h-[74vh] pointer-events-none select-none"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] md:rounded-[29px] bg-secondary/20 h-[95%] w-[88%]">
                <img
                  src="/events"
                  className="h-full w-full object-cover rounded-[24px] md:rounded-[29px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
