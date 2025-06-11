import InteriorBanner from "@/components/contact/interior_banner";
import TransitionWrapper from "../transition-wrapper";
import Contact from "@/components/contact/contact";
import Faq from "@/components/contact/faq";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "Contact Us | Cycling Meetup App – Connect with Our Team",
  description: "Get in touch with the Cycling Meetup App team for support, partnership inquiries, or feedback. We're here to help you enhance your cycling experiences and connect with local riders.",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": "https://YOUR_WEBSITE_URL/contact",
			"url": "https://YOUR_WEBSITE_URL/contact",
			"name": "Contact Us",
			"description": "Reach out to the Cycling Meetup App team for support, feedback, or any questions. Connect with us to improve your cycling meetup experience.",
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
						"name": "Contact",
						"item": "https://YOUR_WEBSITE_URL/contact"
					}
				]
			}
		},
		{
			"@type": "Organization",
			"name": "Cycling Meetup App",
			"url": "https://YOUR_WEBSITE_URL/",
			"logo": "https://YOUR_WEBSITE_URL/logo.png",
			"contactPoint": {
				"@type": "ContactPoint",
				"contactType": "Customer Support",
				"email": "mailto:support@YOUR_WEBSITE_URL",
				"url": "https://YOUR_WEBSITE_URL/contact"
			}
		}
	]
};

export default function ContactPage() {
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
          <TransitionWrapper duration="0.5" easing="[0.25,0.46,0.45,0.94]" animType="SLIDE_IN_LEFT">
    <Contact />
          </TransitionWrapper>
          <TransitionWrapper duration="0.5" easing="[0,0,1,1]" animType="FADE_IN">
    <Faq />
          </TransitionWrapper>
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
