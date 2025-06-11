import Hero from "@/components/home/hero";
import Cta from "@/components/home/cta";
import TransitionWrapper from "./transition-wrapper";
import Logos from "@/components/home/logos";
import Stats from "@/components/home/stats";
import WhyChooseUs from "@/components/home/why_choose_us";
import Services3 from "@/components/home/services3";
import Steps3 from "@/components/home/steps3";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import Reviews from "@/components/home/reviews";
import Faq from "@/components/home/faq";
import Newsletter from "@/components/home/newsletter";
import Pricing from "@/components/home/pricing";
import Cta_2 from "@/components/home/cta_2";
import Contact from "@/components/home/contact";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "Cycling Meetup App – Find & Join Local Rides | DOMAIN_NAME",
  description: "Connect with cyclists in your area, join group rides, and discover new cycling buddies using our cycling meetup app. Easy sign-up and instant ride organization – start pedaling today!",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": "https://YOUR_WEBSITE_URL/#website",
			"url": "https://YOUR_WEBSITE_URL/",
			"name": "Cycling Meetup App",
			"description": "Connect with fellow cyclists, organize and join group cycling events in your area. Discover local cycling meetups and expand your cycling network!",
			"publisher": {
				"@type": "Organization",
				"name": "Cycling Meetup App",
				"url": "https://YOUR_WEBSITE_URL/"
			}
		},
		{
			"@type": "WebPage",
			"@id": "https://YOUR_WEBSITE_URL/#home",
			"url": "https://YOUR_WEBSITE_URL/",
			"name": "Home | Cycling Meetup App",
			"isPartOf": {
				"@id": "https://YOUR_WEBSITE_URL/#website"
			},
			"about": {
				"@type": "Event",
				"name": "Local Cycling Meetup",
				"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
				"eventStatus": "https://schema.org/EventScheduled"
			}
		}
	]
};

export default function HomePage() {
  return (
    <>
      {/* Injecting JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdMap),
        }}
      />

      <div className="flex flex-col items-center overflow-clip z-20 pt-16 md:pt-12 lg:pt-10">
        <Hero />
          <Cta />
          <TransitionWrapper duration="0.5" easing="[0,0,1,1]" animType="FADE_IN">
    <Logos />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.42,0,0.58,1]" animType="SLIDE_IN_LEFT">
    <Stats />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.42,0,0.58,1]" animType="SLIDE_IN_RIGHT">
    <WhyChooseUs />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_LEFT">
    <Services3 />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_RIGHT">
    <Steps3 />
          </TransitionWrapper>
          <Events />
          <Gallery />
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_RIGHT">
    <Reviews />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0,0,1,1]" animType="FADE_IN">
    <Faq />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="FADE_IN">
    <Newsletter />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_LEFT">
    <Pricing />
          </TransitionWrapper>
          <Cta_2 />
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_LEFT">
    <Contact />
          </TransitionWrapper>
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
