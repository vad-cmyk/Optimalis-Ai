export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Optimalis AI",
    description:
      "Norwich-based AI agency helping local businesses save time and win more customers with AI automation, custom websites, and chatbots.",
    url: "https://optimalis-ai.com",
    email: "hello@optimalis-ai.com",
    logo: "https://optimalis-ai.com/logo.png",
    image: "https://optimalis-ai.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Norwich",
      addressRegion: "Norfolk",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.6309",
      longitude: "1.2974",
    },
    areaServed: [
      { "@type": "City", name: "Norwich" },
      { "@type": "AdministrativeArea", name: "Norfolk" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    serviceType: "AI Consultancy",
    priceRange: "££",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Optimalis AI",
      url: "https://optimalis-ai.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
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
