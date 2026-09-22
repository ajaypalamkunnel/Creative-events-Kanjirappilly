import { siteConfig } from "@/config/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.business_name,
    alternateName: "Creative Events & Wedding Planners Kanjirappilly",
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/assets/Logo.jpg`,
    image: `${siteConfig.domain}/assets/Hero-section-desktop-screen.png`,
    description: siteConfig.description,
    telephone: "+919961903826",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: "Kanjirappilly",
      addressRegion: "Kottayam, Kerala",
      postalCode: "686507",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.5562,
      longitude: 76.7909,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      siteConfig.social_links.instagram,
      siteConfig.social_links.facebook,
      siteConfig.social_links.youtube,
    ].filter(Boolean),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
