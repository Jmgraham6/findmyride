import InteriorBanner from "@/components/blog/interior_banner";
import Blog from "@/components/blog/blog";
import TransitionWrapper from "../transition-wrapper";
import Newsletter from "@/components/blog/newsletter";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "Cycling Meetup App Blog: Tips, Updates & Community Stories",
  description: "Explore cycling tips, app updates, community stories, and event highlights on our Cycling Meetup App Blog. Stay connected with fellow cyclists and discover new rides and features.",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Blog",
			"@id": "https://YOUR_WEBSITE_URL/blog",
			"name": "Cycling Meetup App Blog",
			"description": "Ride together, learn, and grow! Discover cycling tips, event guides, app news, and inspiring stories from fellow cyclists in our community.",
			"publisher": {
				"@type": "Organization",
				"name": "Cycling Meetup App",
				"url": "https://YOUR_WEBSITE_URL/"
			},
			"url": "https://YOUR_WEBSITE_URL/blog"
		},
		{
			"@type": "WebPage",
			"@id": "https://YOUR_WEBSITE_URL/blog#webpage",
			"url": "https://YOUR_WEBSITE_URL/blog",
			"name": "Blog",
			"description": "Explore the Cycling Meetup App’s blog for cycling community insights, news, tips, and event highlights."
		}
	]
};

export default function BlogPage() {
  return (
    <>
      {/* Injecting JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdMap),
        }}
      />

      <div className="flex flex-col items-center overflow-clip z-20">
        <InteriorBanner />
          <Blog />
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="FADE_IN">
    <Newsletter />
          </TransitionWrapper>
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
