import TransitionWrapper from "./transition-wrapper";
import Hero404 from "@/components/404/hero_404";
import Particles from "@/components/particles/particles";

export const metadata = {
  title: "Page Not Found – Cycling Meetup App",
  description: "Sorry, the page you are looking for can't be found. Explore cycling events and connect with fellow riders on our cycling meetup app.",
};

// JSON-LD map for structured SEO data
const jsonLdMap = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://YOUR_WEBSITE_URL/404",
      "url": "https://YOUR_WEBSITE_URL/404",
      "name": "404 – Page Not Found",
      "description": "Sorry, the page you are looking for can't be found. Explore cycling events and connect with fellow riders on our cycling meetup app.",
      "isPartOf": {
        "@id": "https://YOUR_WEBSITE_URL/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://YOUR_WEBSITE_URL/",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://YOUR_WEBSITE_URL/404",
            "name": "404 Not Found"
          }
        }
      ]
    }
  ]
};

export default function NotFound() {
  return (
    <>
      {/* Injecting JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdMap),
        }}
      />

      <div className="flex flex-col items-center overflow-clip z-20 pt-28 md:pt-20 lg:pt-[5.5rem]">
        <TransitionWrapper duration="1.0" easing="[0.25,0.46,0.45,0.94]" animType="FADE_IN">
    <Hero404 />
          </TransitionWrapper>
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={20} shouldAdaptToTheme={true} />
          </>
  );
}
