"use client";
import * as React from "react";


export default function Gallery() {
  // Gallery images data
  const images = [
    {
      src: "https://img.b2bpic.net/premium-photo/woman-friends-cycling-nature-bicycle-fitness-cycling-off-road-travel-trail-path-female-person-biker-cyclist-forest-outdoor-workout-training-sports-exercise_590464-292184.jpg?w=647",
    },
    {
      src: "https://img.b2bpic.net/premium-photo/group-people-riding-bicycles-one-has-sun-shining-them_1291366-2196.jpg?w=647",
    },
    {
      src: "https://img.b2bpic.net/premium-photo/group-people-riding-bicycles-with-words-bicyclists-their-shirts_984237-41480.jpg?w=647",
    },
    {
      src: "https://img.b2bpic.net/premium-photo/people-riding-bicycle-road_1048944-8104624.jpg?w=647",
    },
  ];

  return (
    <div id="gallery" className="w-full py-12 lg:py-[4.5rem]">
      {/* Main gallery container */}
      <div className="container mx-auto px-5 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
          {/* Map through gallery images */}
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-md w-full lg:w-1/4 relative aspect-[1.35] md:max-h-[24vh] lg:h-[550px] lg:aspect-auto"
            >
              {/* Image container with responsive handling */}
              <img
                src={image.src}
                loading="lazy"
                decoding="async"
                className="rounded-md absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
