import InteriorBanner from "@/components/events/interior_banner";
import Events from "@/components/events/events";
import Gallery from "@/components/events/gallery";
import Cta from "@/components/events/cta";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "Find & Join Cycling Events | Connect with Riders Near You",
  description: "Discover local cycling meetups and events. Join group rides, organize your own cycling sessions, and connect with fellow cyclists nearby. Stay updated with upcoming cycling events and grow your riding community.",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": "https://YOUR_WEBSITE_URL/events",
			"url": "https://YOUR_WEBSITE_URL/events",
			"name": "Cycling Events",
			"description": "Discover local cycling meetups, join group rides, stay updated on cycling events around you, and connect with the cycling community on our app.",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://YOUR_WEBSITE_URL/events?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		},
		{
			"@type": "Event",
			"name": "Cycling Meetup & Group Ride Events",
			"url": "https://YOUR_WEBSITE_URL/events",
			"eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
			"eventStatus": "https://schema.org/EventScheduled",
			"description": "Diverse cycling meetups, events, and group rides for all skill levels. Join local cyclists and grow your cycling network.",
			"location": {
				"@type": "Place",
				"name": "Multiple Locations",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Your City",
					"addressCountry": ""
				}
			},
			"organizer": {
				"@type": "Organization",
				"name": "Cycling Meetup App",
				"url": "https://YOUR_WEBSITE_URL"
			}
		}
	]
};

export default function EventsPage() {
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
          <Events />
          <Gallery />
          <Cta />
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
