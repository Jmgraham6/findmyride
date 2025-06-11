import InteriorBanner from "@/components/about/interior_banner";
import Team3 from "@/components/about/team3";
import TransitionWrapper from "../transition-wrapper";
import WhyChooseUs from "@/components/about/why_choose_us";
import Stats from "@/components/about/stats";
import Cta from "@/components/about/cta";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "About Us | Cycling Meetup App – Discover, Connect, and Ride Together",
  description: "Learn more about the Cycling Meetup app. Our mission is to connect cycling enthusiasts, making it easy to join group rides, discover routes, and explore vibrant cycling communities. Meet, ride, and make memorable connections.",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": "https://YOUR_WEBSITE_URL/about",
			"url": "https://YOUR_WEBSITE_URL/about",
			"name": "About Us | Cycling Meetup App",
			"description": "Cycling Meetup App helps cyclists connect, join group rides, and explore local cycling communities.",
			"breadcrumb": {
				"@type": "BreadcrumbList",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://YOUR_WEBSITE_URL/"
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "About",
						"item": "https://YOUR_WEBSITE_URL/about"
					}
				]
			}
		},
		{
			"@type": "Organization",
			"@id": "https://YOUR_WEBSITE_URL/#organization",
			"name": "Cycling Meetup App",
			"url": "https://YOUR_WEBSITE_URL/",
			"logo": {
				"@type": "ImageObject",
				"url": "https://YOUR_WEBSITE_URL/logo.png"
			},
			"sameAs": [
				"https://facebook.com/YOUR_WEBSITE_URL",
				"https://twitter.com/YOUR_WEBSITE_URL"
			]
		}
	]
};

export default function AboutPage() {
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
          <Team3 />
          <TransitionWrapper duration="0.5" easing="[0.42,0,0.58,1]" animType="SLIDE_IN_RIGHT">
    <WhyChooseUs />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.42,0,0.58,1]" animType="SLIDE_IN_LEFT">
    <Stats />
          </TransitionWrapper>
          <Cta />
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
