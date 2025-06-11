"use client";
import { ArrowRight } from "lucide-react";



export default function Blog() {
  const blogPosts = [
    {
      date: "12 Apr, 2024",
      title: "Finding Your Cycling Crew: How Group Rides Boost Motivation",
      description:
        "Discover how joining local cycling meetups can inspire consistency and build lasting friendships.",
      imageUrl:
        "https://img.b2bpic.net/premium-photo/friends-bicycles-close-up-side-view-young-people-riding-their-bicycles_425904-23105.jpg?w=971",
      link: "/blog",
    },
    {
      date: "28 Mar, 2024",
      title: "Top 5 Scenic Routes for Weekend Group Rides",
      description:
        "Explore the most popular cycling paths to enjoy with your meetup group this season.",
      imageUrl:
        "https://img.b2bpic.net/free-photo/group-senior-adults-biking-park_53876-20942.jpg?w=926",
      link: "/blog",
    },
    {
      date: "15 Mar, 2024",
      title: "Safety Tips for Your First Cycling Meetup Event",
      description:
        "Learn key safety advice to make your first group ride enjoyable and stress-free.",
      imageUrl:
        "https://img.b2bpic.net/premium-photo/friends-talking-while-exercising-park_1048944-17997534.jpg?w=1150",
      link: "/blog",
    },
    {
      date: "01 Mar, 2024",
      title: "How to Organize a Successful Cycling Meetup",
      description:
        "Get practical tips on planning, promoting, and leading a memorable group ride.",
      imageUrl:
        "https://img.b2bpic.net/premium-photo/friends-work-bicycles-together-outdoors_14117-1175842.jpg?w=1153",
      link: "/blog",
    },
  ];

  return (
    <section id="blog" className="py-12 lg:py-[4.5rem]">
      <div className="container mx-auto max-w-7xl px-5 md:px-8 lg:px-0">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium mb-2 block">
            CYCLING BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest Cycling Insights & Tips
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-border bg-card rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-foreground/80 font-bold text-sm block mb-4">
                  <span>{post.date}</span>
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  <span>{post.title}</span>
                </h3>
                <p className="text-foreground/80 mb-4">
                  <span>{post.description}</span>
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-md transition-colors duration-300"
          >
            See All Blog Posts
          </a>
        </div>
      </div>
    </section>
  );
}
