"use client";
import { Star } from "lucide-react";



// Reviews section component
interface ReviewItem {
  image: string;
  text: string;
  name: string;
  role: string;
  stars: number;
}
export default function Reviews() {
  // Sample review data
  const reviews: ReviewItem[] = [
    {
      image: "https://i.pravatar.cc/500?img=5",
      text: "I discovered new cycling friends and routes thanks to this app—every ride is more fun!",
      name: "Alex Turner",
      role: "Group Ride Leader",
      stars: 5,
    },
    {
      image: "https://i.pravatar.cc/500?img=33",
      text: "The weekly meetups are well-organized and motivating. I never miss a ride now!",
      name: "Priya S.",
      role: "Enthusiastic Cyclist",
      stars: 5,
    },
  ];

  // Render stars based on rating
  const renderStars = (count: number) => {
    return [...Array(count)].map((_, i) => (
      <Star key={i} className="text-accent fill-accent w-5 h-5" />
    ));
  };

  return (
    <section id="reviews" className="py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Header Content */}
        <div className="text-center max-w-2xl">
          <span className="text-primary text-sm uppercase tracking-wider">
            Rider Reviews
          </span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
            What Cyclists Say About Us
          </h2>
          <p className="text-foreground/80">
            Connect with fellow riders, share experiences, and find your next
            cycling adventure in our community.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="w-full grid lg:grid-cols-2 gap-20 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card relative pt-14 px-6 pb-6 rounded-md shadow-lg border border-secondary"
            >
              {/* Profile Image */}
              <div className="absolute -top-10 left-6">
                <img
                  src={review.image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full shadow-lg"
                />
              </div>

              {/* Review Text */}
              <p className="text-card-foreground mb-6 pb-6 border-b border-muted">
                <span>{review.text}</span>
              </p>

              {/* Review Footer */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-foreground">
                    <span>{review.name}</span>
                  </h4>
                  <span className="text-sm text-foreground/80">
                    <span>{review.role}</span>
                  </span>
                </div>
                <div className="flex">{renderStars(review.stars)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#reviews"
          className="w-fit flex justify-center items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors duration-200"
        >
          See All Reviews
        </a>
      </div>
    </section>
  );
}
